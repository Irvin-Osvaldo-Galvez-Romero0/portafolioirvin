'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Mail, CheckCircle2, AlertCircle, Clock, MapPin, Sparkles, MessageSquareQuote } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'PWA / Aplicación Web Progresiva',
    budget: '$4,500 - $10,500 MXN',
    timeline: '1 Mes',
    specifications: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; mailtoFallback?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ocurrió un error al enviar el formulario.');
      }

      // Disparar confeti de celebración
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b'],
      });

      setStatusMessage({
        type: 'success',
        text: data.message || '¡Mensaje y especificaciones enviados con éxito!',
        mailtoFallback: data.details?.mailtoFallback,
      });

      // Limpiar formulario si fue exitoso
      setFormData({
        name: '',
        email: '',
        projectType: 'PWA / Aplicación Web Progresiva',
        budget: '$4,500 - $10,500 MXN',
        timeline: '1 Mes',
        specifications: '',
      });
    } catch (err: unknown) {
      const error = err as Error;
      setStatusMessage({
        type: 'error',
        text: error.message || 'Hubo un error al conectar con el servicio.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div
            className="badge"
            style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              marginBottom: '1rem',
            }}
          >
            <Mail size={14} />
            <span>Contacto Directo & Especificaciones</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Hablemos de tu <span className="gradient-text">Próximo Proyecto</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Envía los requerimientos técnicos y detalles de tu proyecto. El mensaje llegará directo a mi bandeja de entrada para coordinar propuesta y arquitectura.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            <div className="glass-card" style={{ padding: '2.2rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
                Canales Directos
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Disponible para desarrollos a medida, arquitectura de sistemas de misión crítica, automatizaciones con n8n e integraciones de agentes de inteligencia artificial.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} color="#818cf8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Correo Electrónico</div>
                    <a
                      href="mailto:irvinosvaldo.gr@gmail.com"
                      style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 600, textDecoration: 'none' }}
                    >
                      irvinosvaldo.gr@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Clock size={20} color="#06b6d4" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Tiempo de Respuesta</div>
                    <div style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 600 }}>
                      Menos de 24 Horas
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPin size={20} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Ubicación & Modalidad</div>
                    <div style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 600 }}>
                      México • Remoto Internacional
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Badge */}
            <div
              className="glass-card"
              style={{
                padding: '1.8rem',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                background: 'rgba(6, 182, 212, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <MessageSquareQuote size={18} color="#06b6d4" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>Compromiso Técnico</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.5 }}>
                &ldquo;Cada proyecto es analizado bajo criterios rigurosos de resiliencia y mantenibilidad. No solo entregamos código funcional, entregamos software concebido para no romperse en producción.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              Formulario de Especificaciones de Proyecto
            </h3>

            {statusMessage && (
              <div
                style={{
                  padding: '1rem 1.2rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  background: statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: `1px solid ${statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                  color: statusMessage.type === 'success' ? '#a7f3d0' : '#fecaca',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 size={20} color="#10b981" />
                  ) : (
                    <AlertCircle size={20} color="#ef4444" />
                  )}
                  <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{statusMessage.text}</span>
                </div>

                {statusMessage.mailtoFallback && (
                  <a
                    href={statusMessage.mailtoFallback}
                    className="btn btn-outline-cyan"
                    style={{ alignSelf: 'flex-start', padding: '0.4rem 0.8rem', fontSize: '0.8rem', marginTop: '0.4rem' }}
                  >
                    <span>Abrir en tu cliente de correo (Respaldo)</span>
                  </a>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                {/* Nombre */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Correo */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico de Contacto *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="carlos@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                {/* Tipo de Proyecto */}
                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">
                    Tipo de Proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="PWA / Aplicación Web Progresiva">PWA / Aplicación Web Progresiva</option>
                    <option value="Sistema de Punto de Venta (POS) / Comercial">Sistema Punto de Venta (POS)</option>
                    <option value="Automatización n8n & Agentes IA">Automatización n8n & Agentes IA</option>
                    <option value="Plataforma E-Commerce / Full-Stack">Plataforma E-Commerce / Full-Stack</option>
                    <option value="Consultoría de Arquitectura & Calidad ISO">Consultoría de Arquitectura & Calidad</option>
                  </select>
                </div>

                {/* Presupuesto */}
                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Rango de Presupuesto Estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="< $4,500 MXN">&lt; $4,500 MXN (Básico / Módulo)</option>
                    <option value="$4,500 - $10,500 MXN">$4,500 - $10,500 MXN (Estándar / PWA)</option>
                    <option value="$10,500 - $21,000 MXN">$10,500 - $21,000 MXN (Avanzado / Sistema)</option>
                    <option value="$21,000+ MXN">$21,000+ MXN (Empresarial / Alta Escala)</option>
                    <option value="Por definir / A convenir">Por definir / A convenir</option>
                  </select>
                </div>
              </div>

              {/* Tiempo de Entrega */}
              <div className="form-group">
                <label htmlFor="timeline" className="form-label">
                  Tiempo Estimado de Entrega
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Urgente (< 2 semanas)">Urgente (&lt; 2 semanas)</option>
                  <option value="1 Mes">1 Mes</option>
                  <option value="2 a 3 Meses">2 a 3 Meses</option>
                  <option value="Flexible / Desarrollo Continuo">Flexible / Desarrollo Continuo</option>
                </select>
              </div>

              {/* Especificaciones */}
              <div className="form-group">
                <label htmlFor="specifications" className="form-label">
                  Especificaciones Técnicas & Requerimientos del Proyecto *
                </label>
                <textarea
                  id="specifications"
                  name="specifications"
                  required
                  placeholder="Describe las funcionalidades deseadas, integraciones requeridas (APIs, pasarelas, base de datos), objetivos del sistema..."
                  value={formData.specifications}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '1rem',
                  marginTop: '0.5rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? (
                  <span>Enviando propuesta...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Especificaciones a mi Correo</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
