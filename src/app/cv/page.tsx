'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Mail, Download, CheckCircle, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#060913', color: '#f8fafc', padding: 'clamp(1rem, 2.5vw, 2rem) 1rem' }}>
      {/* Top Floating Control Bar (Hidden on print) */}
      <div className="no-print" style={{ maxWidth: '850px', margin: '0 auto 1.8rem auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
        <Link
          href="/"
          className="btn btn-secondary"
          style={{ padding: '0.6rem 1.1rem', fontSize: '0.88rem' }}
        >
          <ArrowLeft size={16} />
          <span>Volver al Portafolio</span>
        </Link>

        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            onClick={handlePrint}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.88rem' }}
          >
            <Printer size={16} />
            <span>Imprimir / PDF</span>
          </button>
          <a
            href="mailto:irvinosvaldo.gr@gmail.com"
            className="btn btn-outline-cyan"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.88rem' }}
          >
            <Mail size={16} />
            <span>Contratar</span>
          </a>
        </div>
      </div>

      {/* Printable Sheet */}
      <article
        className="resume-sheet"
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          background: '#0c1222',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: 'clamp(1.2rem, 3.5vw, 3rem)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Header */}
        <header style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.6rem', marginBottom: '1.8rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>
                Irvin Osvaldo Gálvez Romero
              </h1>
              <div style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#06b6d4', fontWeight: 600 }}>
                Desarrollador Full Stack & Arquitecto de Agentes de IA
              </div>
            </div>

            <div style={{ fontSize: '0.88rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.35rem', overflow: 'hidden' }}>
              <div>📍 México • Disponible para trabajo Remoto Global</div>
              <div>
                📧 <a href="mailto:irvinosvaldo.gr@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none', wordBreak: 'break-all' }}>irvinosvaldo.gr@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <GithubIcon size={14} color="#94a3b8" />
                <a href="https://github.com/Irvin-Osvaldo-Galvez-Romero0" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', wordBreak: 'break-all' }}>
                  github.com/Irvin-Osvaldo-Galvez-Romero0
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Resumen Profesional */}
        <section style={{ marginBottom: '2.2rem' }}>
          <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#818cf8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
            Resumen Profesional
          </h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.94rem' }}>
            Ingeniero de software especializado en el desarrollo de <strong>PWAs Offline-First</strong>, arquitecturas comerciales resilientes bajo <strong>Residuality Theory</strong> y ecosistemas de automatización avanzada con <strong>n8n y agentes autónomos de IA</strong>. Experiencia comprobada en reducción drástica de tiempos de cobro, mitigación de fallos de red en puntos de venta y diseño de interfaces web modernas y accesibles con rendimiento óptimo a 60 FPS.
          </p>
        </section>

        {/* Proyectos Insignia y Logros Técnicos */}
        <section style={{ marginBottom: '2.2rem' }}>
          <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#818cf8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '1.2rem' }}>
            Experiencia & Proyectos Insignia
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            {/* Proyecto 1 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>
                  Sistemas-POS: Punto de Venta Resiliente Offline-First
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>Cero Pérdidas de Facturación</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#06b6d4', marginBottom: '0.5rem' }}>
                Stack: TypeScript, React 19, IndexedDB, SQLite, Residuality Theory, Impresión ESC/POS
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Arquitectura tolerante a cortes de red e interrupciones eléctricas, garantizando facturación continua en caja a latencia menor a 200ms.</li>
                <li>Capacidad de catálogo validada para más de 50,000 SKUs y 5,000 transacciones masivas sin cuellos de botella.</li>
                <li>Módulo desacoplado de impresión térmica directa de tickets térmicos sin UI espuria del navegador.</li>
              </ul>
            </div>

            {/* Proyecto 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>
                  PWA Módulo Escolar TESChi (TecNM)
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 600 }}>-80% Carga en Servidores</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#06b6d4', marginBottom: '0.5rem' }}>
                Stack: React 19, TypeScript, Express BFF, Service Workers, API SIIA, ISO/IEC 25010
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Diseño de PWA instalable con Backend-for-Frontend (BFF) para consulta académica de más de 8,000 estudiantes del Tecnológico.</li>
                <li>Desacoplamiento total de inicio de sesión: acceso independiente por NIP de 4 dígitos o contraseña institucional.</li>
                <li>Caché reactiva con Service Workers para visualización de kardex y horarios aun sin cobertura en el campus universitario.</li>
              </ul>
            </div>

            {/* Proyecto 3 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>
                  chatbotETFsN8N & ChatBotN8NTrading: Ecosistema Financiero Automatizado
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600 }}>+12 Hrs/Semana Ahorradas</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#06b6d4', marginBottom: '0.5rem' }}>
                Stack: n8n Workflow Automation, Python, Telegram Bot API, Docker, PostgreSQL
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Orquestación de flujos de trabajo autónomos en n8n para análisis multitemporal de carteras de ETFs (7, 30, 90 días y 1 año).</li>
                <li>Sistema de alertas en tiempo real vía Telegram ante caídas del 2% y señales de repunte proyectadas del 5%.</li>
                <li>Automatización de la estrategia analítica Bard.FX para operaciones disciplinadas y sin sesgo cognitivo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section style={{ marginBottom: '2.2rem' }}>
          <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#818cf8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
            Competencias Técnicas Clave
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
            <div>
              <div style={{ color: '#06b6d4', fontWeight: 700, marginBottom: '0.3rem' }}>Frontend & Móvil</div>
              <div style={{ color: '#cbd5e1' }}>React 19, Next.js (App Router), TypeScript, PWAs (Service Workers, Cache API), Canvas 2D, CSS Moderno.</div>
            </div>

            <div>
              <div style={{ color: '#818cf8', fontWeight: 700, marginBottom: '0.3rem' }}>Backend & Datos</div>
              <div style={{ color: '#cbd5e1' }}>Node.js, Express (BFF), REST APIs, IndexedDB, SQLite, PostgreSQL, MongoDB, Docker.</div>
            </div>

            <div>
              <div style={{ color: '#ec4899', fontWeight: 700, marginBottom: '0.3rem' }}>IA & Automatización</div>
              <div style={{ color: '#cbd5e1' }}>n8n Workflows, Model Context Protocol (MCP), Arquitecturas Multi-Agente, Prompt Engineering.</div>
            </div>

            <div>
              <div style={{ color: '#10b981', fontWeight: 700, marginBottom: '0.3rem' }}>Metodología & Calidad</div>
              <div style={{ color: '#cbd5e1' }}>Residuality Theory, Estándar ISO/IEC 25010, Auditorías Lighthouse, OWASP Web Security.</div>
            </div>
          </div>
        </section>

        {/* Educación y Filosofía */}
        <section>
          <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#818cf8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
            Educación & Certificación Metodológica
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ fontWeight: 700, color: '#f8fafc' }}>Ingeniería en Sistemas Computacionales</span>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>TecNM / TESChi</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            Enfoque en desarrollo de software distribuido, bases de datos transaccionales, compiladores y sistemas resilientes.
          </p>
        </section>
      </article>

      {/* Print Specific CSS */}
      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .no-print {
            display: none !important;
          }
          .resume-sheet {
            background: #ffffff !important;
            color: #111827 !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
          h1, h2, h3, h4, span, div, p, li {
            color: #111827 !important;
          }
          a {
            color: #1d4ed8 !important;
            text-decoration: underline !important;
          }
          .ambient-glow-1, .ambient-glow-2, .ambient-glow-3 {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
