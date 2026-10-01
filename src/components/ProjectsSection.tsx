'use client';

import React, { useState } from 'react';
import { Project, PROJECTS_DATA } from '@/data/projects';
import { ExternalLink, Info, Search, Filter, ShieldAlert, CheckCircle2, X, Layers, Cpu } from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

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
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <span>Portafolio Técnico de Obras</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Proyectos Insignia & <span className="gradient-text">Trabajos Realizados</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Aplicaciones en producción, sistemas con tolerancia extrema a fallos y plataformas interactivas con código disponible en GitHub.
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
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.08)',
                    background: isActive ? 'var(--gradient-main)' : 'rgba(15, 23, 42, 0.6)',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={16} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Buscar por tecnología o nombre..."
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.8rem',
          }}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.8rem',
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
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: '#e2e8f0',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#38bdf8', marginBottom: '0.9rem', fontWeight: 500 }}>
                  {project.subtitle}
                </p>
                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '1.4rem' }}>
                  {project.description}
                </p>

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
                  onClick={() => setActiveProjectModal(project)}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.6rem 0.9rem', fontSize: '0.85rem' }}
                >
                  <Info size={15} />
                  <span>Ver Arquitectura</span>
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

      {/* Detail Modal */}
      {activeProjectModal && (
        <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div
              style={{
                padding: '1.6rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase' }}>
                  {activeProjectModal.categoryLabel}
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '0.2rem' }}>
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.6rem' }}>Descripción Profunda</h4>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.94rem' }}>
                  {activeProjectModal.fullDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.8rem' }}>Logros Técnicos & Arquitectura</h4>
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

              {/* Stack Completo */}
              <div>
                <h4 style={{ fontSize: '1rem', color: '#a5b4fc', marginBottom: '0.6rem' }}>Tecnologías & Librerías</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeProjectModal.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.35rem 0.8rem',
                        borderRadius: '8px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontSize: '0.82rem',
                        color: '#f8fafc',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
                  <span>Explorar Repositorio en GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
