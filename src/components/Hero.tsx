'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Terminal, Shield, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

export default function Hero() {
  return (
    <section id="inicio" style={{ paddingTop: '140px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Columna Izquierda: Mensaje y Propuesta de Valor */}
          <div style={{ maxWidth: '680px' }}>
            <div
              className="badge"
              style={{
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#a5b4fc',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={14} color="#818cf8" />
              <span>Full Stack & Autonomous AI Agent Architect</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                marginBottom: '1.5rem',
              }}
            >
              Construyendo software <span className="gradient-text">resiliente</span>, PWAs Offline-First y ecosistemas de <span className="gradient-accent-text">IA</span>.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '2.2rem',
              }}
            >
              Especializado en diseñar aplicaciones web de alta disponibilidad, sistemas transaccionales tolerantes a fallos (bajo <em>Residuality Theory</em>), automatizaciones avanzadas con <strong>n8n</strong> y micro-animaciones fluidas a 60 FPS.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <Link href="#proyectos" className="btn btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>Explorar Proyectos</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="#contacto" className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>Iniciar Proyecto / Contacto</span>
              </Link>
              <a
                href="https://github.com/Irvin-Osvaldo-Galvez-Romero0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-cyan"
                style={{ padding: '0.85rem 1.4rem' }}
                aria-label="Perfil de GitHub"
              >
                <GithubIcon size={20} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Stat Counters Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.8rem',
              }}
            >
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc' }}>15+</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Proyectos & Módulos</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#06b6d4' }}>690+</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Skills & Agentes IA</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Resiliencia Offline</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a855f7' }}>60 FPS</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Rendimiento UI</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Interactiva / Terminal Virtual */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Back Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                filter: 'blur(35px)',
                borderRadius: '30px',
                zIndex: 0,
              }}
            ></div>

            {/* Terminal Window */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.8rem',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                background: 'rgba(10, 16, 32, 0.85)',
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '1rem',
                  marginBottom: '1.4rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', marginLeft: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    irvin-dev@arch-system: ~/portfolio
                  </span>
                </div>
                <Terminal size={16} color="#64748b" />
              </div>

              {/* Terminal Code Snippet */}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ color: '#94a3b8' }}>
                  <span style={{ color: '#06b6d4' }}>const</span> <span style={{ color: '#f8fafc' }}>developer</span> = &#123;
                </p>
                <div style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <p>
                    <span style={{ color: '#a5b4fc' }}>name:</span> <span style={{ color: '#34d399' }}>&apos;Irvin Dev&apos;</span>,
                  </p>
                  <p>
                    <span style={{ color: '#a5b4fc' }}>coreStack:</span> [
                    <span style={{ color: '#34d399' }}>&apos;Next.js 16&apos;</span>, <span style={{ color: '#34d399' }}>&apos;React 19&apos;</span>, <span style={{ color: '#34d399' }}>&apos;TypeScript&apos;</span>],
                  </p>
                  <p>
                    <span style={{ color: '#a5b4fc' }}>specializations:</span> [
                    <span style={{ color: '#34d399' }}>&apos;PWAs Offline-First&apos;</span>, <span style={{ color: '#34d399' }}>&apos;n8n Automation&apos;</span>, <span style={{ color: '#34d399' }}>&apos;Multi-Agent AI&apos;</span>],
                  </p>
                  <p>
                    <span style={{ color: '#a5b4fc' }}>architecture:</span> <span style={{ color: '#fbbf24' }}>&apos;Residuality Theory&apos;</span>,
                  </p>
                  <p>
                    <span style={{ color: '#a5b4fc' }}>status:</span> <span style={{ color: '#10b981' }}>&apos;Vercel Ready & Active&apos;</span>
                  </p>
                </div>
                <p style={{ color: '#94a3b8' }}>&#125;;</p>

                <div
                  style={{
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    borderRadius: '10px',
                    padding: '0.8rem 1rem',
                    marginTop: '0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Shield size={16} color="#06b6d4" />
                    <span style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>Auditoría & Calidad: ISO 25010</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>100% OK</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
