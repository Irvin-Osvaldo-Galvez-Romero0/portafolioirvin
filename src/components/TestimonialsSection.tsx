'use client';

import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck, TrendingUp, Users } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  tag: string;
  highlightMetric: string;
  icon: 'ShieldCheck' | 'Users' | 'TrendingUp';
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'El sistema POS nos salvó en múltiples ocasiones cuando se cayó la conexión de red en plena hora pico de ventas. Los cajeros continuaron cobrando sin interrupción y los tickets térmicos salieron al instante.',
    name: 'Roberto Salazar',
    role: 'Gerente Operativo • Retail & Comercial',
    tag: 'Sistemas-POS Resiliente',
    highlightMetric: '0 Ventas Perdidas por Red',
    icon: 'ShieldCheck',
  },
  {
    quote: 'Históricamente el portal colapsaba por la saturación en periodos de reinscripción. La PWA permitió a miles de estudiantes consultar kardex y materias al instante, incluso con la baja cobertura del campus.',
    name: 'Valeria Morales',
    role: 'Comunidad Estudiantil • TESChi TecNM',
    tag: 'PWA Módulo Escolar',
    highlightMetric: '+8,000 Alumnos Atendidos',
    icon: 'Users',
  },
  {
    quote: 'Las alertas predictivas de n8n para ETFs y Forex me cambiaron el día a día. Monitorea el mercado 24/7 con disciplina quirúrgica y me envía avisos clave a Telegram antes de movimientos de volatilidad.',
    name: 'Alejandro Torres',
    role: 'Inversionista Independiente & Trader',
    tag: 'Ecosistema Bots n8n',
    highlightMetric: '+12 hrs/semana Ahorradas',
    icon: 'TrendingUp',
  },
];

export default function TestimonialsSection() {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'ShieldCheck':
        return <ShieldCheck size={20} color="#10b981" />;
      case 'Users':
        return <Users size={20} color="#6366f1" />;
      case 'TrendingUp':
        return <TrendingUp size={20} color="#f59e0b" />;
      default:
        return <CheckCircle2 size={20} color="#06b6d4" />;
    }
  };

  return (
    <section id="testimonios" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div
            className="badge"
            style={{
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#fbbf24',
              marginBottom: '1rem',
            }}
          >
            <MessageSquareQuote size={14} />
            <span>Validación en el Mundo Real</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Impacto & <span className="gradient-text">Casos de Éxito</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Opiniones de operadores, comunidades y usuarios que interactúan a diario con los sistemas en producción.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card tilt-card"
              style={{
                padding: 'clamp(1.2rem, 3vw, 2.2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Metric Badge & Stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div
                    className="shimmer-badge"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {renderIcon(t.icon)}
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
                      {t.highlightMetric}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} color="#fbbf24" fill="#fbbf24" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.8rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                      {t.name}
                    </h3>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {t.role}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#38bdf8',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
