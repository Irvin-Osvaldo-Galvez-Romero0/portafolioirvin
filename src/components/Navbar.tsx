'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Code2, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled ? 'rgba(6, 9, 19, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      {/* Top Animated Reading Progress Bar */}
      <div className="reading-progress-bar" style={{ width: `${scrollPercent}%` }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        {/* Brand Logo with Glow */}
        <Link href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }} className="brand-logo">
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            className="logo-icon"
          >
            <Code2 size={22} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>
              [Irvin<span style={{ color: '#06b6d4' }}>.Dev</span>]
            </span>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '-4px', letterSpacing: '0.05em' }}>
              FULL STACK & AI ARCHITECT
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <Link href="#inicio" className="nav-link">Inicio</Link>
          <Link href="#proyectos" className="nav-link">Proyectos</Link>
          <Link href="#habilidades" className="nav-link">Habilidades</Link>
          <Link href="#arquitectura" className="nav-link">Arquitectura</Link>
          <Link href="#testimonios" className="nav-link">Casos de Éxito</Link>
          <Link href="#contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="badge badge-pulse" style={{ display: 'none' }} id="status-badge">
            <div className="pulse-ring-wrapper" style={{ width: '8px', height: '8px' }}>
              <div className="pulse-ring"></div>
              <span className="pulse-dot"></span>
            </div>
            <span>Disponible</span>
          </div>

          <Link href="/cv" className="btn btn-secondary" style={{ padding: '0.6rem 1rem', fontSize: '0.86rem', display: 'none' }} id="cv-btn">
            <FileText size={15} />
            <span>Ver CV</span>
          </Link>

          <Link href="#contacto" className="btn btn-primary shimmer-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
            <span>Cotizar Proyecto</span>
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              padding: '0.5rem',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(6, 9, 19, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <Link href="#inicio" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '1.1rem' }}>
            Inicio
          </Link>
          <Link href="#proyectos" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '1.1rem' }}>
            Proyectos & Trabajos
          </Link>
          <Link href="#habilidades" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '1.1rem' }}>
            Habilidades & Frameworks
          </Link>
          <Link href="#arquitectura" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '1.1rem' }}>
            Filosofía & Arquitectura
          </Link>
          <Link href="#testimonios" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '1.1rem' }}>
            Casos de Éxito & Testimonios
          </Link>
          <Link href="/cv" onClick={() => setMobileMenuOpen(false)} style={{ color: '#818cf8', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={18} />
            <span>Ver Currículum (PDF)</span>
          </Link>
          <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} style={{ color: '#06b6d4', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
            Enviar Especificaciones / Contacto
          </Link>
        </div>
      )}

      <style jsx>{`
        .brand-logo:hover .logo-icon {
          transform: scale(1.08) rotate(4deg);
        }
        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
          padding: 0.3rem 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 2px;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          #status-badge {
            display: inline-flex !important;
          }
          #cv-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
