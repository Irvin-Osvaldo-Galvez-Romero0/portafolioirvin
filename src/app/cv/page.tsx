'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  MapPin,
  Plane,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
  X,
  Send,
} from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';
import LinkedinIcon from '@/components/LinkedinIcon';

export default function ResumePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const emailAddress = 'irvinosvaldogalvezromero@gmail.com';
  const emailSubject = 'Oportunidad Laboral / Contacto Profesional — Irvin Gálvez';
  const emailBody = `Hola Irvin,

Revisé tu Currículum Vitae y perfil profesional como Full Stack Developer & Software Engineer y me gustaría ponerme en contacto contigo para conversar sobre una oportunidad.

• Empresa / Proyecto: 
• Vacante o Tipo de Colaboración: 
• Modalidad / Disponibilidad: 

Quedo a la espera de tu respuesta.

Saludos cordiales,`;

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(emailAddress)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const whatsappUrl = `https://wa.me/525536739121?text=${encodeURIComponent('Hola Irvin, vi tu CV y me gustaría conversar sobre una oportunidad como Full Stack Developer.')}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsContactModalOpen(false);
      }
    };
    if (isContactModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isContactModalOpen]);

  const copyTemplate = () => {
    const textToCopy = `Para: ${emailAddress}\nAsunto: ${emailSubject}\n\n${emailBody}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const copyEmailOnly = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#060913', color: '#f8fafc', padding: 'clamp(1rem, 2.5vw, 2.5rem) 1rem' }}>
      {/* Top Floating Action Bar (Hidden on print) */}
      <div
        className="no-print"
        style={{
          maxWidth: '900px',
          margin: '0 auto 1.8rem auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.8rem',
        }}
      >
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
            className="btn btn-primary shimmer-btn"
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
          >
            <Printer size={16} />
            <span>Imprimir / Guardar PDF</span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.88rem', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.3)' }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setIsContactModalOpen(true)}
            className="btn btn-outline-cyan shimmer-btn"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.88rem', cursor: 'pointer' }}
            title="Abrir opciones de contacto y enviar correo con plantilla"
          >
            <Mail size={16} />
            <span>Contactar (Correo)</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet */}
      <article
        className="resume-sheet"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#0c1222',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: 'clamp(1.4rem, 3.8vw, 3.2rem)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(99, 102, 241, 0.1)',
        }}
      >
        {/* Header Principal */}
        <header style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.12)', paddingBottom: '1.4rem', marginBottom: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.85rem' }}>
            <div>
              <h1
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                Irvin Osvaldo Gálvez Romero
              </h1>
              <div
                style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.18rem)',
                  color: '#06b6d4',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                FULL STACK DEVELOPER &amp; SOFTWARE ENGINEER
              </div>
            </div>
          </div>

          {/* Barra de Contacto y Metadatos */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem 1.4rem',
              fontSize: '0.86rem',
              color: '#cbd5e1',
              paddingTop: '0.4rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={14} color="#06b6d4" />
              <span>Edo. Méx / CDMX, México</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={14} color="#10b981" />
              <a href="tel:+525536739121" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                +52 55 3673 9121
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={14} color="#818cf8" />
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                title="Click para enviar correo o ver opciones de contacto"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#38bdf8',
                  textDecoration: 'underline',
                  wordBreak: 'break-all',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  fontFamily: 'inherit',
                }}
              >
                irvinosvaldogalvezromero@gmail.com
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Plane size={14} color="#f59e0b" />
              <span>Disponibilidad para viajar y reubicación</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <GithubIcon size={14} color="#94a3b8" />
              <a
                href="https://github.com/Irvin-Osvaldo-Galvez-Romero0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#38bdf8', textDecoration: 'none' }}
              >
                github.com/Irvin-Osvaldo-Galvez-Romero0
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <LinkedinIcon size={14} color="#60a5fa" />
              <a
                href="https://linkedin.com/in/irvin-osvaldo-galvez-romero-0873bb297"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#38bdf8', textDecoration: 'none' }}
              >
                linkedin.com/in/irvin-osvaldo-galvez-romero-0873bb297
              </a>
            </div>
          </div>
        </header>

        {/* 1. PERFIL PROFESIONAL */}
        <section style={{ marginBottom: '1.8rem' }}>
          <h2 className="section-title">
            PERFIL PROFESIONAL
          </h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.62, fontSize: '0.92rem' }}>
            Ingeniero en Sistemas Computacionales enfocado en <strong>Desarrollo Full Stack y Soporte/Infraestructura de Alta Disponibilidad</strong>. Experiencia comprobada en diseño de <strong>PWAs offline-first (React, TypeScript)</strong>, integración de <strong>APIs/LLMs</strong> y gestión eficiente de tickets de soporte e incidencias críticas bajo estándares <strong>ITIL</strong> y acuerdos <strong>SLA</strong>. Sólido dominio en redes Cisco, entornos Linux y optimización de bases de datos. Disponibilidad inmediata para viajar o reubicación.
          </p>
        </section>

        {/* 2. EXPERIENCIA LABORAL */}
        <section style={{ marginBottom: '1.8rem' }}>
          <h2 className="section-title">
            EXPERIENCIA LABORAL
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Rol 1 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                  Desarrollador Full Stack — <span style={{ color: '#06b6d4' }}>TESChi (Proyectos Integrales)</span>
                </h3>
                <span className="date-tag">2026 – Actualidad</span>
              </div>
              <ul className="bullet-list">
                <li>
                  Desarrollé y desplegué plataformas web institucionales para más de <strong>3,000 estudiantes</strong> sobre servidores Linux, acelerando el ciclo de entrega mediante metodología ágil Scrum.
                </li>
                <li>
                  Implementé flujos de integración continua y control de versiones en <strong>GitHub</strong>, gestionando code reviews y seguimiento de requerimientos/issues para asegurar calidad de software.
                </li>
                <li>
                  Optimicé consultas y modelado relacional en <strong>PostgreSQL</strong> y <strong>MySQL</strong>, reduciendo tiempos de respuesta en transacciones estudiantiles concurrentes.
                </li>
              </ul>
            </div>

            {/* Rol 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                  Pasante de Infraestructura de TI &amp; Redes — <span style={{ color: '#06b6d4' }}>IBEROSTAR Hotels &amp; Resorts</span>
                </h3>
                <span className="date-tag">Marzo 2026 – Agosto 2026</span>
              </div>
              <ul className="bullet-list">
                <li>
                  Gestioné y resolví incidencias críticas mediante sistemas de tickets, cumpliendo al <strong>100% los tiempos de primera respuesta</strong> y solución bajo estrictos SLAs corporativos.
                </li>
                <li>
                  Supervisé y di soporte a red LAN/WLAN de alta densidad compuesta por <strong>411 APs y ~1,400 usuarios concurrentes</strong>, manteniendo un <strong>99.9% de uptime operativo</strong>.
                </li>
                <li>
                  Ejecuté mantenimiento correctivo/preventivo a switches perimetrales y apliqué políticas de seguridad en Capa 2 (<strong>VLANs</strong>), previniendo accesos no autorizados a la red.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. PROYECTOS DE SOFTWARE & FULL STACK */}
        <section style={{ marginBottom: '1.8rem' }}>
          <h2 className="section-title">
            PROYECTOS DE SOFTWARE &amp; FULL STACK
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Proyecto 1 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                  PWA de Autoservicio Escolar — Módulo Auxiliar TESChi
                </h3>
                <span className="status-badge status-active">Producción / Activo</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#06b6d4', marginBottom: '0.45rem', fontWeight: 500 }}>
                Tecnologías: React 18, TypeScript, Tailwind CSS, Workbox, IndexedDB, Node.js, Express, REST API.
              </div>
              <ul className="bullet-list">
                <li>
                  Aseguró <strong>100% de disponibilidad de trámites ante caídas de red</strong> al diseñar e implementar una arquitectura Offline-First con App Shell, caching estratégico con Workbox y sincronización transaccional asíncrona (SyncQueue) en IndexedDB.
                </li>
                <li>
                  Fortaleció la seguridad en el manejo de datos de kárdex y reinscripciones mediante APIs REST en Express con autenticación dual y sellado criptográfico de peticiones.
                </li>
              </ul>
            </div>

            {/* Proyecto 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                  Asistente Conversacional &amp; Chatbot con Integración de LLMs
                </h3>
                <span className="status-badge status-ai">Proyecto de IA &amp; Full Stack</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#06b6d4', marginBottom: '0.45rem', fontWeight: 500 }}>
                Tecnologías: Python, Node.js, Ollama, Gemini API, React, Streaming REST, Prompt Engineering.
              </div>
              <ul className="bullet-list">
                <li>
                  Redujo la latencia de respuesta y optimizó el consumo de tokens integrando modelos de lenguaje locales (<strong>Ollama</strong>) y en la nube (<strong>Gemini API</strong>) con técnicas avanzadas de prompt engineering y streaming de respuestas cliente-servidor.
                </li>
                <li>
                  Mejoró la retención de contexto del usuario construyendo una interfaz reactiva en React con fallback de red y gestión de estado contextual.
                </li>
              </ul>
            </div>

            {/* Proyecto 3 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                  Sistema POS &amp; Gestión Comercial — Miscelánea Gálvez
                </h3>
                <span className="status-badge status-pos">Despliegue Local</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#06b6d4', marginBottom: '0.45rem', fontWeight: 500 }}>
                Tecnologías: React, Node.js, Express, MySQL, Protocolo ESC/POS.
              </div>
              <ul className="bullet-list">
                <li>
                  Automatizó el control de inventarios y redujo tiempos de cobro en mostrador al desarrollar un sistema de punto de venta (POS) con lectura de código de barras, cálculo transaccional reactivo e integración con impresoras térmicas ESC/POS.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. HABILIDADES TÉCNICAS & IDIOMAS */}
        <section style={{ marginBottom: '1.8rem' }}>
          <h2 className="section-title">
            HABILIDADES TÉCNICAS &amp; IDIOMAS
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem' }}>
            <div className="skill-row">
              <span className="skill-label">Frontend &amp; PWA</span>
              <span className="skill-value">React 18, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Vite, HTML5, CSS3, IndexedDB, Workbox</span>
            </div>

            <div className="skill-row">
              <span className="skill-label">Backend &amp; APIs</span>
              <span className="skill-value">Node.js, Express, Python, RESTful APIs, Arquitectura MVC, Microservicios, Autenticación (JWT/OAuth)</span>
            </div>

            <div className="skill-row">
              <span className="skill-label">Bases de Datos</span>
              <span className="skill-value">PostgreSQL, MySQL, MariaDB, MongoDB, Modelado Relacional &amp; NoSQL, Indexación y Optimización</span>
            </div>

            <div className="skill-row">
              <span className="skill-label">Redes &amp; Infraestructura</span>
              <span className="skill-value">Routing &amp; Switching (Cisco), VLANs, WLAN Alta Densidad, Linux (Debian/openEuler), Shell Scripting, Docker</span>
            </div>

            <div className="skill-row">
              <span className="skill-label">Gestión &amp; Herramientas</span>
              <span className="skill-value">Gestión de Tickets (ITSM / Help Desk / SLAs), Git, GitHub, VS Code, Power BI, AWS Cloud</span>
            </div>

            <div className="skill-row">
              <span className="skill-label">Idiomas</span>
              <span className="skill-value"><strong>Español</strong> (Nativo) | <strong>Inglés</strong> (Técnico / Lectura y comprensión profesional B1-B2)</span>
            </div>
          </div>
        </section>

        {/* 5. FORMACIÓN ACADÉMICA */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title">
            FORMACIÓN ACADÉMICA
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.94rem' }}>
                  Ingeniería en Sistemas Computacionales — <span style={{ color: '#06b6d4' }}>Tecnológico de Estudios Superiores de Chimalhuacán (TESChi)</span>
                </span>
                <span className="date-tag">2022 – Graduación esperada: Feb 2027</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.94rem' }}>
                  Técnico en Programación — <span style={{ color: '#06b6d4' }}>CECyTEM</span>
                </span>
                <span className="date-tag">2019 – 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer del Documento */}
        <footer
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '0.9rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.78rem',
            color: '#64748b',
          }}
        >
          <span>Irvin Osvaldo Gálvez Romero — Full Stack Developer &amp; Software Engineer</span>
          <span>Página 1 de 1</span>
        </footer>
      </article>

      {/* Contact Options Modal (Solución 100% confiable para mailto y webmail) */}
      {isContactModalOpen && (
        <div
          className="no-print"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(2, 6, 23, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              backgroundColor: '#0c1222',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              borderRadius: '20px',
              padding: 'clamp(1.2rem, 3.5vw, 1.85rem)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(6, 182, 212, 0.2)',
              color: '#f8fafc',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2))',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <h3 id="contact-modal-title" style={{ fontSize: '1.28rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    Enviar Correo a Irvin
                  </h3>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: 0 }}>
                  Mensaje predeterminado listo con asunto y datos de vacante
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                aria-label="Cerrar ventana"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Explanatory note */}
            <div
              style={{
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '10px',
                padding: '0.65rem 0.85rem',
                fontSize: '0.78rem',
                color: '#bae6fd',
                lineHeight: 1.45,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Sparkles size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
              <span>
                <strong>¿Por qué no abría antes?</strong> En Windows o navegador, si no tienes una app de correo nativa configurada, el enlace se bloquea. Con las opciones de abajo puedes redactar directo en <strong>Gmail Web</strong>, tu app o copiar la plantilla.
              </span>
            </div>

            {/* Recipient badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0.85rem',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                marginBottom: '0.9rem',
                fontSize: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', overflow: 'hidden' }}>
                <span style={{ color: '#64748b', fontWeight: 600 }}>Para:</span>
                <span style={{ color: '#38bdf8', fontWeight: 600, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {emailAddress}
                </span>
              </div>
              <button
                type="button"
                onClick={copyEmailOnly}
                style={{
                  background: 'none',
                  border: 'none',
                  color: emailCopied ? '#34d399' : '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                {emailCopied ? <Check size={14} /> : <Copy size={14} />}
                <span>{emailCopied ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* Preview Box */}
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Vista previa de la plantilla
                </span>
                <button
                  type="button"
                  onClick={copyTemplate}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copied ? '#34d399' : '#38bdf8',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? '¡Plantilla copiada!' : 'Copiar mensaje'}</span>
                </button>
              </div>
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '0.7rem 0.85rem',
                  fontSize: '0.8rem',
                  lineHeight: 1.45,
                  color: '#cbd5e1',
                  maxHeight: '125px',
                  overflowY: 'auto',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <div style={{ color: '#a5b4fc', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Asunto: {emailSubject}
                </div>
                {emailBody}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {/* Option 1: Gmail Web (The most reliable for desktop browser users) */}
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shimmer-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: '10px',
                }}
              >
                <Mail size={18} />
                <span>Abrir en Gmail Web (Recomendado)</span>
                <ExternalLink size={15} style={{ opacity: 0.8 }} />
              </a>

              {/* Option 2: Web Outlook Deeplink */}
              <a
                href={outlookWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1rem',
                  fontSize: '0.86rem',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  borderColor: 'rgba(99, 102, 241, 0.3)',
                  color: '#c7d2fe',
                }}
              >
                <span>Abrir en Outlook Web</span>
                <ExternalLink size={14} style={{ opacity: 0.7 }} />
              </a>

              {/* Option 3: Default Native Mail Client (mailto) */}
              <a
                href={mailtoUrl}
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1rem',
                  fontSize: '0.86rem',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                <Send size={15} color="#38bdf8" />
                <span>Abrir en App Nativa (Mail / Windows / Mac)</span>
              </a>

              {/* Bottom Quick Row: Copy text & WhatsApp */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.2rem' }}>
                <button
                  type="button"
                  onClick={copyTemplate}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.6rem 0.8rem',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                  <span>{copied ? '¡Copiado!' : 'Copiar Plantilla'}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.6rem 0.8rem',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    color: '#34d399',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos dedicados de pantalla y de impresión (Pixel-Perfect A4/Letter) */}
      <style jsx>{`
        .section-title {
          font-size: 1.02rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #818cf8;
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.35rem;
          margin-bottom: 0.75rem;
        }

        .date-tag {
          font-size: 0.82rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .status-badge {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
        }

        .status-active {
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .status-ai {
          background: rgba(99, 102, 241, 0.12);
          color: #a5b4fc;
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .status-pos {
          background: rgba(6, 182, 212, 0.12);
          color: #38bdf8;
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .bullet-list {
          padding-left: 1.25rem;
          color: #cbd5e1;
          font-size: 0.88rem;
          line-height: 1.55;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 0.8rem;
          align-items: baseline;
          padding: 0.25rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .skill-label {
          color: #06b6d4;
          font-weight: 700;
          font-size: 0.86rem;
        }

        .skill-value {
          color: #cbd5e1;
          line-height: 1.5;
        }

        @media (max-width: 680px) {
          .skill-row {
            grid-template-columns: 1fr;
            gap: 0.2rem;
          }
        }
      `}</style>

      {/* Print Specific CSS (Ajuste blanco/negro perfecto para PDF y reclutadores ATS) */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 12mm 15mm;
            size: letter;
          }
          body {
            background: #ffffff !important;
            color: #0f172a !important;
            font-size: 10pt !important;
            line-height: 1.4 !important;
          }
          .no-print {
            display: none !important;
          }
          .resume-sheet {
            background: #ffffff !important;
            color: #0f172a !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
          .section-title {
            color: #1e3a8a !important;
            border-bottom: 1.5px solid #cbd5e1 !important;
            margin-bottom: 0.4rem !important;
            font-size: 11pt !important;
          }
          h1 {
            color: #0f172a !important;
            font-size: 19pt !important;
          }
          h3 {
            color: #0f172a !important;
            font-size: 10.5pt !important;
          }
          span, div, p, li {
            color: #1e293b !important;
          }
          a {
            color: #0f172a !important;
            text-decoration: none !important;
          }
          .status-badge {
            border: 1px solid #cbd5e1 !important;
            background: #f1f5f9 !important;
            color: #334155 !important;
          }
          .skill-label {
            color: #1e3a8a !important;
            font-weight: 700 !important;
          }
          .bullet-list {
            color: #1e293b !important;
            gap: 0.2rem !important;
          }
          .bullet-list li {
            color: #1e293b !important;
          }
          .ambient-glow-1, .ambient-glow-2, .ambient-glow-3 {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
