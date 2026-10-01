export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1 to 100
    experience: string;
    highlights: string;
  }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend & Aplicaciones Web Progresivas (PWA)',
    icon: 'Layout',
    description: 'Interfaces interactivas de alto rendimiento con foco en experiencia visual cautivadora y operatividad sin conexión.',
    skills: [
      { name: 'React 19 & Next.js (App Router)', level: 95, experience: 'Avanzado', highlights: 'Server Components, SSR/SSG, optimización de render y arquitecturas modulares' },
      { name: 'TypeScript', level: 92, experience: 'Avanzado', highlights: 'Tipado estricto, interfaces genéricas, validaciones en tiempo de compilación' },
      { name: 'PWAs (Service Workers & Cache API)', level: 94, experience: 'Especialista', highlights: 'Estrategias Stale-While-Revalidate, sincronización en background e instalabilidad' },
      { name: 'CSS Moderno / Glassmorphism / Animaciones', level: 96, experience: 'Especialista', highlights: 'CSS Grid/Flexbox nativo, variables HSL, microinteracciones 60fps, responsividad fluida' },
      { name: 'HTML5 Canvas 2D & Gráficos Interactivos', level: 88, experience: 'Competente', highlights: 'Física de partículas, grafos interactivos, optimización de bucles de animación' }
    ]
  },
  {
    category: 'Backend, APIs & Bases de Datos',
    icon: 'Server',
    description: 'Servicios de alta disponibilidad, integración con APIs legacy e intermediación de datos segura.',
    skills: [
      { name: 'Node.js & Express (BFF Pattern)', level: 90, experience: 'Avanzado', highlights: 'Backend-for-Frontend, sanitización de payloads, gestión de sesiones y CORS' },
      { name: 'REST APIs & Webhooks', level: 94, experience: 'Avanzado', highlights: 'Diseño contract-first, OpenAPI/Swagger, rate limiting y manejo de errores tipado' },
      { name: 'SQLite & IndexedDB (Persistencia Local)', level: 92, experience: 'Especialista', highlights: 'Transacciones atómicas, almacenamiento local resiliente y mitigación de fallos de red' },
      { name: 'PostgreSQL & MongoDB', level: 86, experience: 'Competente', highlights: 'Modelado relacional y documental, índices optimizados y persistencia contenerizada' }
    ]
  },
  {
    category: 'Ingeniería de Agentes de IA & Automatización',
    icon: 'Cpu',
    description: 'Orquestación de flujos de trabajo inteligentes, agentes autónomos y automatización sin código y con código.',
    skills: [
      { name: 'n8n Workflow Automation', level: 95, experience: 'Especialista', highlights: 'Workflows empresariales complejos, sub-workflows, manejo de errores y nodos de IA' },
      { name: 'Model Context Protocol (MCP)', level: 90, experience: 'Avanzado', highlights: 'Construcción y consumo de servidores MCP, herramientas lazy-loaded y recursos' },
      { name: 'Arquitecturas Multi-Agente (The Agency & ECC)', level: 92, experience: 'Especialista', highlights: 'Orquestación de más de 690 agentes técnicos, compresión de contexto y prompt engineering' },
      { name: 'Integración LLM (OpenAI, Anthropic, Gemini)', level: 93, experience: 'Avanzado', highlights: 'Function calling, generación estructurada JSON, memoria conversacional y RAG' }
    ]
  },
  {
    category: 'Arquitectura de Software, Resiliencia & Calidad',
    icon: 'ShieldCheck',
    description: 'Garantía de supervivencia de sistemas ante contingencias del mundo real y cumplimiento de estándares de clase mundial.',
    skills: [
      { name: 'Residuality Theory (Barry O’Reilly)', level: 94, experience: 'Especialista', highlights: 'Modelado de estresores desconocidos y diseño de residuos arquitectónicos tolerantes a fallos' },
      { name: 'Estándar ISO/IEC 25010 & QA', level: 90, experience: 'Avanzado', highlights: 'Matrices de calidad, confiabilidad, portabilidad y auditorías de rendimiento Lighthouse' },
      { name: 'Ciberseguridad Web & OWASP Top 10', level: 88, experience: 'Competente', highlights: 'Prevención XSS/CSRF, sanitización estricta de inputs, higiene de credenciales y cabeceras seguras' },
      { name: 'Docker & Contenedores', level: 86, experience: 'Competente', highlights: 'Docker Compose, entornos reproducibles y aislamiento de servicios locales' }
    ]
  }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'Resilience First (Residuality Theory)',
    tag: 'Arquitectura',
    description: 'Diseño de software enfocado en sobrevivir al caos del mundo real: caídas de red, ráfagas de hardware imprevistas y latencias extremas. El software no asume escenarios ideales; se diseña para triunfar bajo estrés.'
  },
  {
    title: 'Offline-First & PWA Native',
    tag: 'Frontend',
    description: 'Las aplicaciones web deben sentirse tan rápidas, estables e independientes como las nativas. La caché local inteligente y los Service Workers garantizan que el usuario nunca vea una pantalla de error por falta de señal.'
  },
  {
    title: 'IA Aplicada & Eficiencia de Contexto',
    tag: 'Innovación',
    description: 'Aprovechamiento de agentes de inteligencia artificial y flujos n8n para multiplicar la velocidad de desarrollo, automatizar procesos repetitivos y mantener un estándar de calidad riguroso y verificable.'
  }
];
