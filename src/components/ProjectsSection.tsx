'use client';

import React, { useState } from 'react';
import { Project, PROJECTS_DATA } from '@/data/projects';
import { ExternalLink, Info, Search, Filter, ShieldAlert, CheckCircle2, X, Layers, Cpu, TrendingUp, Briefcase, FileCode2, Target, Award } from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<'case-study' | 'architecture' | 'stack'>('case-study');

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'pwa-fullstack', label: 'PWAs & Full-Stack' },
    { id: 'ai-automation', label: 'Automatización & IA' },
    { id: 'systems', label: 'Sistemas Resilientes' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.businessImpact.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (project: Project) => {
    setActiveProjectModal(project);
    setModalTab('case-study');
  };

  const handleCardPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="proyectos" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div
            className="badge"
            style={{
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: '#22d3ee',
              marginBottom: '1rem',
            }}
          >
            <Layers size={14} />
            <span>Portafolio Técnico & Casos Reales</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Proyectos Insignia & <span className="gradient-text">Casos de Estudio</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Software en producción evaluado por su impacto medible en el negocio, tolerancia a fallos y código abierto en GitHub.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="filter-bar-scrollable" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: '100%' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="filter-btn"
                  style={{
                    padding: '0.5rem 1.05rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.08)',
                    background: isActive ? 'var(--gradient-main)' : 'rgba(15, 23, 42, 0.6)',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 4px 14px rgba(99, 102, 241, 0.3)' : 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <Search size={16} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Buscar por tecnología o impacto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-full)',
                padding: '0.55rem 1rem 0.55rem 2.5rem',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card tilt-card spotlight-card project-card-responsive"
              onPointerMove={handleCardPointerMove}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(1.2rem, 3vw, 1.8rem)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Card Accent Top Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: project.accentColor,
                  boxShadow: `0 0 12px ${project.accentColor}`,
                }}
              ></div>

              <div>
                {/* Header: Category & Status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#06b6d4',
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span
                      className="shimmer-badge"
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        color: '#34d399',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      {project.caseStudy.roiBadge}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#38bdf8', marginBottom: '0.9rem', fontWeight: 500 }}>
                  {project.subtitle}
                </p>
                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '1.2rem' }}>
                  {project.description}
                </p>

                {/* Business Impact Box */}
                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.07)',
                    border: '1px solid rgba(16, 185, 129, 0.22)',
                    borderRadius: '10px',
                    padding: '0.65rem 0.85rem',
                    marginBottom: '1.4rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                  }}
                >
                  <TrendingUp size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: '0.82rem', color: '#d1fae5', lineHeight: 1.45 }}>
                    <strong style={{ color: '#34d399' }}>Impacto Clave:</strong> {project.businessImpact}
                  </div>
                </div>

                {/* Stat Badges */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`,
                    gap: '0.6rem',
                    background: 'rgba(6, 9, 19, 0.6)',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    marginBottom: '1.4rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {project.stats.map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc' }}>{stat.value}</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.76rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#c7d2fe',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span style={{ fontSize: '0.76rem', color: '#64748b', alignSelf: 'center' }}>
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '1.2rem',
                }}
              >
                <button
                  onClick={() => openModal(project)}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.6rem 0.9rem', fontSize: '0.85rem' }}
                >
                  <Briefcase size={15} />
                  <span>Ver Caso de Estudio</span>
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cyan"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal with Tabs */}
      {activeProjectModal && (
        <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', width: '100%' }}>
            {/* Modal Header */}
            <div
              style={{
                padding: 'clamp(1rem, 2.5vw, 1.6rem)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '0.8rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase' }}>
                    {activeProjectModal.categoryLabel}
                  </span>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    ROI: {activeProjectModal.caseStudy.roiBadge}
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#ffffff', lineHeight: 1.25 }}>
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Tab Buttons */}
            <div
              className="modal-tabs-header"
              style={{
                display: 'flex',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(6, 9, 19, 0.4)',
                padding: '0 clamp(0.8rem, 2.5vw, 1.6rem)',
                gap: '0.8rem',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              <button
                onClick={() => setModalTab('case-study')}
                className="modal-tab-btn"
                style={{
                  padding: '0.85rem 0.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: modalTab === 'case-study' ? '2px solid #06b6d4' : '2px solid transparent',
                  color: modalTab === 'case-study' ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <Target size={15} color={modalTab === 'case-study' ? '#06b6d4' : '#64748b'} />
                <span>Caso de Estudio (ROI)</span>
              </button>

              <button
                onClick={() => setModalTab('architecture')}
                className="modal-tab-btn"
                style={{
                  padding: '0.85rem 0.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: modalTab === 'architecture' ? '2px solid #6366f1' : '2px solid transparent',
                  color: modalTab === 'architecture' ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <FileCode2 size={15} color={modalTab === 'architecture' ? '#818cf8' : '#64748b'} />
                <span>Arquitectura & Resiliencia</span>
              </button>

              <button
                onClick={() => setModalTab('stack')}
                className="modal-tab-btn"
                style={{
                  padding: '0.85rem 0.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: modalTab === 'stack' ? '2px solid #10b981' : '2px solid transparent',
                  color: modalTab === 'stack' ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <Award size={15} color={modalTab === 'stack' ? '#10b981' : '#64748b'} />
                <span>Métricas & Stack</span>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: 'clamp(1rem, 2.5vw, 1.8rem)', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {/* TAB 1: Caso de Estudio */}
              {modalTab === 'case-study' && (
                <div key="case-study" className="tab-fade-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  {/* Problema */}
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      borderRadius: '12px',
                      padding: '1.2rem',
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fca5a5', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      🚨 1. El Problema & Cuello de Botella
                    </div>
                    <p style={{ color: '#fecaca', fontSize: '0.92rem', lineHeight: 1.55 }}>
                      {activeProjectModal.caseStudy.problem}
                    </p>
                  </div>

                  {/* Solución */}
                  <div
                    style={{
                      background: 'rgba(6, 182, 212, 0.08)',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                      borderRadius: '12px',
                      padding: '1.2rem',
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#67e8f9', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      🛠️ 2. La Solución de Ingeniería
                    </div>
                    <p style={{ color: '#cffafe', fontSize: '0.92rem', lineHeight: 1.55 }}>
                      {activeProjectModal.caseStudy.solution}
                    </p>
                  </div>

                  {/* Resultado & Retorno */}
                  <div
                    style={{
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: '12px',
                      padding: '1.2rem',
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      📈 3. Resultado Cuantificable (ROI)
                    </div>
                    <p style={{ color: '#d1fae5', fontSize: '0.92rem', lineHeight: 1.55 }}>
                      {activeProjectModal.caseStudy.result}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Arquitectura & Resiliencia */}
              {modalTab === 'architecture' && (
                <div key="architecture" className="tab-fade-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.6rem' }}>Descripción de la Arquitectura</h4>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.94rem' }}>
                      {activeProjectModal.fullDescription}
                    </p>
                  </div>

                  {/* Logros Técnicos */}
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.8rem' }}>Aseguramiento de Calidad & Logros</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {activeProjectModal.keyHighlights.map((hl, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stressors Mitigated (Residuality Theory) */}
                  {activeProjectModal.stressorsMitigated && (
                    <div
                      style={{
                        background: 'rgba(244, 63, 94, 0.08)',
                        border: '1px solid rgba(244, 63, 94, 0.2)',
                        borderRadius: '12px',
                        padding: '1.2rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                        <ShieldAlert size={18} color="#f43f5e" />
                        <h4 style={{ fontSize: '0.95rem', color: '#fda4af' }}>Estresores Mitigados (Residuality Theory)</h4>
                      </div>
                      <ul style={{ paddingLeft: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {activeProjectModal.stressorsMitigated.map((stress, i) => (
                          <li key={i} style={{ fontSize: '0.88rem', color: '#fecdd3' }}>
                            {stress}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Métricas & Stack */}
              {modalTab === 'stack' && (
                <div key="stack" className="tab-fade-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  {/* Stats Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                      gap: '0.85rem',
                      background: 'rgba(6, 9, 19, 0.6)',
                      padding: '1.1rem',
                      borderRadius: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {activeProjectModal.stats.map((stat, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stack Completo */}
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.8rem' }}>Tecnologías, APIs & Librerías Empleadas</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {activeProjectModal.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '0.4rem 0.85rem',
                            borderRadius: '8px',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            fontSize: '0.85rem',
                            color: '#f8fafc',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <GithubIcon size={18} />
                  <span>Ver Código en GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
