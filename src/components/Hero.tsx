'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Terminal, Shield, Zap, ArrowRight, FileText, CheckCircle2, Cpu, Code2, Database } from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

// Hook para contador animado suave a 60 FPS
function useCountUp(target: number, duration: number = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing cúbico ultra suave
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return count;
}

export default function Hero() {
  const [terminalTab, setTerminalTab] = useState<'config' | 'benchmarks' | 'cli'>('config');

  const countProjects = useCountUp(15, 1200);
  const countSkills = useCountUp(690, 1600);
  const countResilience = useCountUp(100, 1400);

  return (
    <section id="inicio" style={{ paddingTop: '140px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Columna Izquierda: Mensaje y Propuesta de Valor */}
          <div style={{ maxWidth: '680px' }}>
            <div
              className="badge shimmer-badge"
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
              Especializado en diseñar aplicaciones web de alta disponibilidad, sistemas transaccionales tolerantes a fallos (bajo <em>Residuality Theory</em>), automatizaciones avanzadas con <strong>n8n</strong> y micro-animaciones fluidas a 60 FPS aceleradas por hardware.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <Link href="#proyectos" className="btn btn-primary shimmer-btn" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>Explorar Proyectos</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="#contacto" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}>
                <span>Cotizar Proyecto</span>
              </Link>
              <Link href="/cv" className="btn btn-secondary" style={{ padding: '0.85rem 1.4rem', fontSize: '1rem' }}>
                <FileText size={18} color="#06b6d4" />
                <span>Ver CV (PDF)</span>
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

            {/* Stat Counters Grid with Animated Numbers */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.8rem',
              }}
            >
              <div className="stat-card">
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f8fafc' }} className="stat-number">
                  {countProjects}+
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Proyectos & Módulos</div>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#06b6d4' }} className="stat-number">
                  {countSkills}+
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Skills & Agentes IA</div>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#10b981' }} className="stat-number">
                  {countResilience}%
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Resiliencia Offline</div>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#a855f7' }} className="stat-number">
                  60 FPS
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Rendimiento GPU</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Interactiva / Terminal Virtual con Órbitas */}
          <div style={{ position: 'relative' }}>
            {/* Floating Satellite Badges */}
            <div className="floating-satellite sat-1">
              <Zap size={13} color="#06b6d4" />
              <span>Turbopack &lt; 1.8s</span>
            </div>
            <div className="floating-satellite sat-2">
              <Shield size={13} color="#10b981" />
              <span>Residuality Shield</span>
            </div>
            <div className="floating-satellite sat-3">
              <Sparkles size={13} color="#ec4899" />
              <span>60 FPS GPU Composite</span>
            </div>

            {/* Ambient Back Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.22) 0%, rgba(6, 182, 212, 0.22) 100%)',
                filter: 'blur(40px)',
                borderRadius: '30px',
                zIndex: 0,
              }}
            ></div>

            {/* Terminal Window with Float Animation & Border Beam */}
            <div
              className="glass-card terminal-float border-beam-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.8rem',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                background: 'rgba(10, 16, 32, 0.92)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.15)',
              }}
            >
              {/* Terminal Header & Interactive Tabs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.85rem',
                  marginBottom: '1.2rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {/* Traffic lights */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.3rem' }}>
                  <button
                    onClick={() => setTerminalTab('config')}
                    className={`terminal-tab-btn ${terminalTab === 'config' ? 'active' : ''}`}
                  >
                    <Code2 size={12} />
                    <span>profile.ts</span>
                  </button>
                  <button
                    onClick={() => setTerminalTab('benchmarks')}
                    className={`terminal-tab-btn ${terminalTab === 'benchmarks' ? 'active' : ''}`}
                  >
                    <Cpu size={12} />
                    <span>bench.json</span>
                  </button>
                  <button
                    onClick={() => setTerminalTab('cli')}
                    className={`terminal-tab-btn ${terminalTab === 'cli' ? 'active' : ''}`}
                  >
                    <Terminal size={12} />
                    <span>mesh.sh</span>
                  </button>
                </div>
              </div>

              {/* Terminal Tab 1: Profile Config */}
              {terminalTab === 'config' && (
                <div key="config" className="tab-fade-enter" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                      <span className="cursor-blink"></span>
                    </p>
                  </div>
                  <p style={{ color: '#94a3b8' }}>&#125;;</p>
                </div>
              )}

              {/* Terminal Tab 2: Benchmarks */}
              {terminalTab === 'benchmarks' && (
                <div key="benchmarks" className="tab-fade-enter" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ color: '#64748b' }}>// Telemetría & Rendimiento en Tiempo Real</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#cbd5e1' }}>
                    <p>&#123;</p>
                    <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#38bdf8' }}>&quot;frameRate&quot;:</span> <span style={{ color: '#34d399' }}>&quot;60.0 FPS Locked (Hardware Composited)&quot;</span>,</p>
                    <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#38bdf8' }}>&quot;compileEngine&quot;:</span> <span style={{ color: '#34d399' }}>&quot;Turbopack Next.js 16&quot;</span>,</p>
                    <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#38bdf8' }}>&quot;offlineResilience&quot;:</span> <span style={{ color: '#34d399' }}>&quot;IndexedDB + Dexie.js (Zero Data Loss)&quot;</span>,</p>
                    <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#38bdf8' }}>&quot;vaultHealth&quot;:</span> <span style={{ color: '#10b981' }}>&quot;10/10 In-Sync (Obsidian AI)&quot;</span>,</p>
                    <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#38bdf8' }}>&quot;accessibility&quot;:</span> <span style={{ color: '#34d399' }}>&quot;WCAG 2.1 AA Compliant&quot;</span></p>
                    <p>&#125;</p>
                  </div>
                </div>
              )}

              {/* Terminal Tab 3: CLI Mesh Simulation */}
              {terminalTab === 'cli' && (
                <div key="cli" className="tab-fade-enter" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', color: '#94a3b8' }}>
                  <p><span style={{ color: '#06b6d4' }}>$</span> <span style={{ color: '#f8fafc' }}>npx antigravity-orchestrator --mesh</span></p>
                  <p style={{ color: '#34d399' }}>✔ 697 skills & agents indexed successfully</p>
                  <p style={{ color: '#38bdf8' }}>✔ Loaded: [agency-ui-designer, agency-ux-architect]</p>
                  <p style={{ color: '#a5b4fc' }}>✔ Compiling GPU canvas & hardware animations...</p>
                  <p style={{ color: '#10b981' }}>✔ 0 dropped frames | Performance budget intact</p>
                  <p><span style={{ color: '#06b6d4' }}>$</span> <span className="cursor-blink"></span></p>
                </div>
              )}

              {/* Bottom Assurance Bar */}
              <div
                style={{
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  marginTop: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Shield size={15} color="#06b6d4" />
                  <span style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>Auditoría & Calidad: ISO/IEC 25010</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>100% OK</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .stat-card {
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
        }
        .stat-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          transform: translateY(-4px);
        }
        .stat-card:hover .stat-number {
          filter: brightness(1.2);
          transform: scale(1.05);
        }
        .stat-number {
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
