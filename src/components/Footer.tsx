'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(6, 9, 19, 0.95)',
        padding: '50px 0 30px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Code2 size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                [Irvin<span style={{ color: '#06b6d4' }}>.Dev</span>]
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', maxWidth: '320px' }}>
              Desarrollo de sistemas resilientes, PWAs Offline-First y arquitecturas multi-agente de IA.
            </p>
          </div>

          {/* Quick Nav */}
          <div style={{ display: 'flex', gap: 'clamp(0.8rem, 2vw, 1.8rem)', flexWrap: 'wrap' }}>
            <Link href="#inicio" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', padding: '0.2rem 0' }}>Inicio</Link>
            <Link href="#proyectos" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', padding: '0.2rem 0' }}>Proyectos</Link>
            <Link href="#habilidades" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', padding: '0.2rem 0' }}>Habilidades</Link>
            <Link href="#arquitectura" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', padding: '0.2rem 0' }}>Arquitectura</Link>
            <Link href="/cv" style={{ color: '#06b6d4', textDecoration: 'none', fontSize: '0.9rem', padding: '0.2rem 0' }}>CV (PDF)</Link>
            <Link href="#contacto" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', padding: '0.2rem 0' }}>Contacto</Link>
          </div>

          {/* Social and Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/Irvin-Osvaldo-Galvez-Romero0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 0.95rem', fontSize: '0.85rem' }}
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '1.8rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Irvin Dev. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Construido con Next.js 16 & React 19 • Listo para desplegar en</span>
            <span style={{ color: '#f8fafc', fontWeight: 600 }}>▲ Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
