'use client';

import React from 'react';
import { Cpu, Terminal, Zap, Layers, ShieldCheck, Sparkles, Database, Workflow, Bot, Flame } from 'lucide-react';

export default function TechTicker() {
  const techItems = [
    { name: 'Next.js 16 (Turbopack)', icon: <Zap size={14} color="#818cf8" /> },
    { name: 'React 19 Server Components', icon: <Layers size={14} color="#06b6d4" /> },
    { name: 'TypeScript Strict', icon: <Terminal size={14} color="#38bdf8" /> },
    { name: 'n8n Autonomous Workflows', icon: <Workflow size={14} color="#f59e0b" /> },
    { name: 'Residuality Theory Architecture', icon: <ShieldCheck size={14} color="#10b981" /> },
    { name: 'PWAs Offline-First', icon: <Cpu size={14} color="#ec4899" /> },
    { name: 'Grafo Multi-Agente (697 Agentes)', icon: <Bot size={14} color="#a855f7" /> },
    { name: 'Remotion Code-to-Video', icon: <Flame size={14} color="#f43f5e" /> },
    { name: 'PostgreSQL & Dexie.js (IndexedDB)', icon: <Database size={14} color="#06b6d4" /> },
    { name: 'Micro-Animaciones a 60 FPS', icon: <Sparkles size={14} color="#34d399" /> },
    { name: 'Zero-Defect CI/CD & ATS Ready', icon: <ShieldCheck size={14} color="#818cf8" /> },
  ];

  return (
    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(6, 9, 19, 0.65)' }}>
      <div className="tech-marquee" aria-label="Ecosistema tecnológico y arquitecturas">
        <div className="marquee-track">
          {/* First Loop */}
          {techItems.map((item, idx) => (
            <div key={`t1-${idx}`} className="marquee-pill">
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
          {/* Second Duplicate Loop for Seamless Infinite Scroll */}
          {techItems.map((item, idx) => (
            <div key={`t2-${idx}`} className="marquee-pill">
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
