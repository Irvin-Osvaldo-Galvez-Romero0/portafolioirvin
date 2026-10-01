'use client';

import React from 'react';
import { SKILLS_DATA, PHILOSOPHY_POINTS } from '@/data/skills';
import { Code, Server, Cpu, ShieldCheck, Compass, CheckCircle } from 'lucide-react';

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code size={22} color="#06b6d4" />;
      case 'Server':
        return <Server size={22} color="#818cf8" />;
      case 'Cpu':
        return <Cpu size={22} color="#ec4899" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} color="#10b981" />;
      default:
        return <Code size={22} color="#06b6d4" />;
    }
  };

  return (
    <section id="habilidades" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div
            className="badge"
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#818cf8',
              marginBottom: '1rem',
            }}
          >
            <Cpu size={14} />
            <span>Capacidades & Frameworks</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Habilidades Técnicas & <span className="gradient-text">Especialización</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Dominio de tecnologías de vanguardia para construir sistemas estables, veloces y mantenibles a escala.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          {SKILLS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.4rem',
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {getIcon(cat.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', lineHeight: 1.25 }}>
                    {cat.category}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#06b6d4', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
                          borderRadius: '4px',
                        }}
                      ></div>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      {skill.highlights}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Philosophy Section */}
        <div id="arquitectura" style={{ paddingTop: '20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <div
              className="badge"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                marginBottom: '1rem',
              }}
            >
              <Compass size={14} />
              <span>Fundamentos & Metodología</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '0.8rem' }}>
              Filosofía de <span className="gradient-text">Ingeniería</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
              Principios que guían cada línea de código y decisión de diseño en mis entregables.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {PHILOSOPHY_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#06b6d4',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.tag}
                  </span>
                  <CheckCircle size={16} color="#10b981" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
