'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, Download, X, ShieldCheck } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default function PwaManager() {
  const [isOffline, setIsOffline] = useState(false);
  const [showOnlineToast, setShowOnlineToast] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // 1. Registro del Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[PWA] Service Worker registrado exitosamente:', registration.scope);
          })
          .catch((error) => {
            console.warn('[PWA] Error al registrar Service Worker:', error);
          });
      });
    }

    // 2. Monitoreo de conectividad (Offline / Online)
    const handleOffline = () => {
      setIsOffline(true);
      setShowOnlineToast(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowOnlineToast(true);
      const timer = setTimeout(() => setShowOnlineToast(false), 4000);
      return () => clearTimeout(timer);
    };

    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
      window.addEventListener('offline', handleOffline);
      window.addEventListener('online', handleOnline);
    }

    // 3. Captura del evento de instalación PWA (A2HS)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('[PWA] Decisión de instalación del usuario:', outcome);
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  return (
    <>
      {/* Toast de Alerta Offline */}
      {isOffline && (
        <aside
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: 'clamp(4.5rem, 8vh, 5.5rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-full)',
            padding: '0.6rem 1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            zIndex: 999,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(239, 68, 68, 0.2)',
            animation: 'fadeIn 0.3s ease-out',
            maxWidth: 'calc(100vw - 2rem)',
            width: 'max-content',
          }}
        >
          <WifiOff size={16} color="#f87171" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 'clamp(0.76rem, 2vw, 0.86rem)', color: '#f8fafc', fontWeight: 600 }}>
            Modo Offline Activo • Resiliencia PWA en Caché Local
          </span>
        </aside>
      )}

      {/* Toast de Conexión Restablecida */}
      {showOnlineToast && (
        <aside
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: 'clamp(4.5rem, 8vh, 5.5rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-full)',
            padding: '0.6rem 1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            zIndex: 999,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.2)',
            animation: 'fadeIn 0.3s ease-out',
            maxWidth: 'calc(100vw - 2rem)',
            width: 'max-content',
          }}
        >
          <Wifi size={16} color="#34d399" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 'clamp(0.76rem, 2vw, 0.86rem)', color: '#f8fafc', fontWeight: 600 }}>
            Conexión en línea restablecida ✓
          </span>
        </aside>
      )}

      {/* Banner de Instalación PWA (A2HS) */}
      {showInstallBanner && deferredPrompt && (
        <aside
          role="banner"
          aria-label="Instalación de la aplicación"
          style={{
            position: 'fixed',
            bottom: 'clamp(1rem, 2.5vw, 2rem)',
            left: 'clamp(1rem, 2.5vw, 2rem)',
            right: 'clamp(1rem, 2.5vw, 2rem)',
            maxWidth: '380px',
            width: 'auto',
            background: 'rgba(13, 21, 39, 0.94)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            backdropFilter: 'blur(18px)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.1rem',
            zIndex: 998,
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.2)',
            animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Download size={18} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 700 }}>
                  Instalar Portafolio PWA
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  Acceso offline instantáneo y experiencia nativa.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowInstallBanner(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '2px',
              }}
              aria-label="Cerrar aviso de instalación"
            >
              <X size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button
              onClick={handleInstallClick}
              className="btn btn-primary shimmer-btn"
              style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.84rem' }}
            >
              <span>Instalar Aplicación</span>
            </button>
            <button
              onClick={() => setShowInstallBanner(false)}
              className="btn btn-secondary"
              style={{ padding: '0.55rem 0.9rem', fontSize: '0.84rem' }}
            >
              <span>Quizás luego</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
