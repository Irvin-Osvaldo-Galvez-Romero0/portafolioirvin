'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(6, 9, 19, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        {/* Brand Logo */}
        <Link href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
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
            }}
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
          <Link href="#contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="badge badge-pulse" style={{ display: 'none' }} id="status-badge">
            <span className="pulse-dot"></span>
            <span>Disponible</span>
          </div>

          <Link href="#contacto" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
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
          <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} style={{ color: '#06b6d4', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
            Enviar Especificaciones / Contacto
          </Link>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #ffffff;
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
        }
      `}</style>
    </header>
  );
}
