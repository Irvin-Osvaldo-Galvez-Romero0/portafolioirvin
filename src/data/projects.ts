export interface CaseStudy {
  problem: string;
  solution: string;
  result: string;
  roiBadge: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'pwa-fullstack' | 'ai-automation' | 'systems' | 'ecommerce';
  categoryLabel: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  businessImpact: string;
  caseStudy: CaseStudy;
  keyHighlights: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Producción' | 'Completado' | 'En Evolución';
  stats: { label: string; value: string }[];
  stressorsMitigated?: string[];
  featured: boolean;
  accentColor: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sistemas-pos',
    title: 'Sistemas-POS: Punto de Venta Resiliente',
    category: 'systems',
    categoryLabel: 'Sistemas Resilientes',
    subtitle: 'Punto de venta personalizado con tolerancia a desconexión, ráfagas HID y 50k SKUs',
    description: 'Sistema comercial transaccional diseñado con Residuality Theory. Opera 100% desconectado mediante persistencia local, soporta lectores de código de barras en ráfaga e integra aislamiento térmico para tickets.',
    fullDescription: 'Desarrollado para entornos comerciales de alta exigencia donde un fallo de red no puede suspender la facturación. Integra persistencia local con IndexedDB/SQLite, sincronización de stock asíncrona, sanitización de tickets térmicos sin interferencia de UI y suites de stress testing en dispositivos táctiles físicos.',
    businessImpact: '0 ventas perdidas por corte de energía/red y reducción del 70% en tiempos de espera en caja.',
    caseStudy: {
      problem: 'En negocios de comercio minorista, las caídas intermitentes de internet y fallos de servidores en la nube paralizaban las cajas registradoras, causando pérdidas directas de ventas y fricción con los clientes.',
      solution: 'Implementación de arquitectura Offline-First bajo Residuality Theory con base de datos local embebida (IndexedDB/SQLite), sincronización idempotente en segundo plano y módulo desacoplado para impresoras térmicas ESC/POS.',
      result: 'Capacidad de cobro continuo a latencia cero (<200ms), tolerancia a inventarios masivos de 50,000 SKUs y eliminación absoluta de dependencias de conectividad en el punto de cobro.',
      roiBadge: 'Cero Pérdidas de Facturación'
    },
    keyHighlights: [
      'Resiliencia probada: gestión de 50,000 SKUs y 5,000 transacciones masivas sin cuellos de botella',
      'Aislamiento de red: registro y cobro en caché local sin abortar ventas ante caídas de conexión',
      'Módulo de impresión térmica desacoplado: tickets limpios sin elementos visuales del navegador',
      'Validación de calidad estricta con Google Lighthouse y pruebas E2E en Chromium CDP'
    ],
    technologies: ['TypeScript', 'React 19', 'IndexedDB', 'SQLite', 'Residuality Theory', 'Tailored CSS', 'Chromium CDP'],
    githubUrl: 'https://github.com/Irvin-Osvaldo-Galvez-Romero0/Sistemas-POS',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Capacidad SKUs', value: '50,000+' },
      { label: 'Operatividad Offline', value: '100%' },
      { label: 'Tiempo de Cobro', value: '< 200ms' }
    ],
    stressorsMitigated: [
      'Corte súbito de conexión eléctrica/red durante checkout',
      'Ráfagas no controladas de lectores de código de barras HID',
      'Corrupción de caché local ante cierres forzados del navegador'
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    id: 'pwa-teschi',
    title: 'PWA Módulo Escolar TESChi (TecNM)',
    category: 'pwa-fullstack',
    categoryLabel: 'PWAs & Full-Stack',
    subtitle: 'Plataforma académica universitaria offline-first con integración en vivo a la API institucional SIIA',
    description: 'Aplicación Web Progresiva para la comunidad estudiantil del TESChi con desacoplamiento total de credenciales (acceso por NIP o Contraseña), consulta de retícula académica y kardex en vivo.',
    fullDescription: 'Moderniza los sistemas escolares tradicionales brindando una experiencia fluida e instalable. Dispone de un Backend-for-Frontend (BFF) en Express que se conecta de forma segura a la API oficial del SIIA TESChi (/login.ashx y /nip.ashx), permitiendo navegación offline de materias y calificaciones mediante Service Workers.',
    businessImpact: 'Atención simultánea a +8,000 universitarios con 0 caídas del servidor institucional durante reinscripciones.',
    caseStudy: {
      problem: 'El sistema escolar monolítico institucional colapsaba por picos masivos de concurrencia durante los periodos de reinscripción, impidiendo a los alumnos consultar materias y calificaciones.',
      solution: 'Desarrollo de una PWA instalable con arquitectura Backend-for-Frontend (BFF), políticas de caché reactivas (Stale-While-Revalidate) y desacoplamiento independiente de autenticación por NIP o contraseña.',
      result: 'Consulta instantánea de retículas y kardex aun sin señal de internet en el campus, reduciendo la carga en los servidores de la institución en más de un 80%.',
      roiBadge: '-80% Carga en Servidores Centrales'
    },
    keyHighlights: [
      'Arquitectura BFF en Express con sanitización y reintentos adaptativos contra API legacy',
      'Desacoplamiento total: login independiente por NIP de 4 dígitos o contraseña institucional',
      'Caché reactiva con Service Workers para visualización de kardex y horarios sin internet',
      'Cumplimiento de estándares internacionales ISO/IEC 25010 y C4 Model'
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express BFF', 'Service Workers', 'Vite', 'ISO 25010'],
    githubUrl: 'https://github.com/Irvin-Osvaldo-Galvez-Romero0/PWA-Modulo-Escolar-TESChi',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Comunidad Universitaria', value: '8,000+' },
      { label: 'Puntuación Lighthouse', value: '98/100' },
      { label: 'Modo Offline', value: 'PWA Cache' }
    ],
    stressorsMitigated: [
      'Saturación de servidores universitarios en períodos de reinscripción masiva',
      'Latencia elevada en redes móviles 3G/4G dentro del campus',
      'Incompatibilidad con credenciales híbridas (NIP institucional vs contraseña)'
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)'
  },
  {
    id: 'chatbot-etfs-n8n',
    title: 'chatbotETFsN8N: Inteligencia Financiera Automatizada',
    category: 'ai-automation',
    categoryLabel: 'Automatización & IA',
    subtitle: 'Chatbot analítico de ETFs con proyecciones cuantitativas a 7, 30, 90 días y 1 año',
    description: 'Automatización con n8n que monitorea carteras de fondos cotizados (ETFs), proyecta tendencias temporales y alerta automáticamente sobre caídas de precio del 2% y repuntes del 5%.',
    fullDescription: 'Solución algorítmica para inversionistas que automatiza el análisis técnico de ETFs. Orquesta flujos de trabajo en n8n conectados a APIs financieras en vivo, calcula métricas predictivas multitemporales y envía notificaciones instantáneas para la toma informada de decisiones.',
    businessImpact: 'Ahorro de más de 12 horas semanales de análisis manual de mercados y mitigación proactiva de pérdidas.',
    caseStudy: {
      problem: 'Los inversionistas y analistas pasaban horas revisando manualmente tablas de precios y noticias, perdiendo ventanas clave para mitigar caídas abruptas en fondos cotizados.',
      solution: 'Construcción de un pipeline automatizado en n8n que ingesta datos bursátiles en tiempo real, aplica modelos cuantitativos en 4 horizontes temporales y despacha alertas deterministas a Telegram.',
      result: 'Alertas automáticas en menos de 2 segundos ante caídas críticas del 2% o señales de compra, aumentando la precisión y oportunidad de las órdenes en el mercado.',
      roiBadge: '+12 Horas/Semana Ahorradas'
    },
    keyHighlights: [
      'Proyecciones cuantitativas en cuatro horizontes temporales: 7, 30, 90 días y 1 año',
      'Sistema de alertas de riesgo: notificación ante caídas de -2% y proyecciones de repunte de +5%',
      'Workflows en n8n con manejo de errores, reintentos y persistencia en base de datos',
      'Consultas interactivas con procesamiento de lenguaje natural y resúmenes ejecutivos'
    ],
    technologies: ['n8n', 'Python', 'Node.js', 'Telegram Bot API', 'Financial APIs', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/Irvin-Osvaldo-Galvez-Romero0/chatbotETFsN8N',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Horizontes de Análisis', value: '4 Plazos' },
      { label: 'Sensibilidad de Alerta', value: '2% - 5%' },
      { label: 'Disponibilidad Flujos', value: '99.9%' }
    ],
    stressorsMitigated: [
      'Volatilidad repentina de mercados sin monitoreo activo humano',
      'Sobrecarga de llamadas a APIs financieras con rate limiting',
      'Fallos transitorios en webhooks de notificación'
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
  },
  {
    id: 'chatbot-n8n-trading',
    title: 'ChatBotN8NTrading: Asistente de Trading Algorítmico',
    category: 'ai-automation',
    categoryLabel: 'Automatización & IA',
    subtitle: 'Bot de asistencia de trading con n8n basado en la metodología analítica de Bard.FX',
    description: 'Asistente de trading algorítmico que analiza el comportamiento del mercado y prevé movimientos estratégicos aplicando las reglas operativas de Bard.FX en tiempo real.',
    fullDescription: 'Diseñado para operadores financieros que buscan disciplina y automatización en sus análisis. Integra flujos inteligentes en n8n para identificar patrones gráficos, zonas de oferta/demanda y calcular la relación riesgo-beneficio antes de emitir alertas de entrada.',
    businessImpact: 'Ejecución 100% disciplinada de estrategia sin sesgo emocional, mejorando el ratio riesgo-beneficio.',
    caseStudy: {
      problem: 'El trading discrecional manual sufre de fatiga cognitiva, sobre-operación y sesgos emocionales al momento de ejecutar entradas y salidas.',
      solution: 'Codificación determinista de la estrategia de Bard.FX en un bot autónomo con n8n que evalúa liquidez, estructura de mercado y confirma filtros antes de disparar recomendaciones.',
      result: 'Reducción drástica de operaciones fuera de plan y disponibilidad 24/7 para activos Forex y commodities.',
      roiBadge: 'Operación 24/7 Sistemática'
    },
    keyHighlights: [
      'Implementación de la estrategia analítica de trading Bard.FX en flujos n8n',
      'Previsión automatizada de movimientos en pares de divisas y materias primas',
      'Alertas tempranas de confirmación de tendencia y gestión de riesgo',
      'Integración con plataformas de mensajería para alertas operativas en directo'
    ],
    technologies: ['n8n', 'TypeScript', 'Node.js', 'Trading APIs', 'Telegram Bot', 'Algorithmic Trading'],
    githubUrl: 'https://github.com/Irvin-Osvaldo-Galvez-Romero0/ChatBotN8NTrading',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Metodología', value: 'Bard.FX' },
      { label: 'Latencia de Señal', value: '< 1.5s' },
      { label: 'Operación Continua', value: '24/7' }
    ],
    stressorsMitigated: [
      'Sesgos emocionales en la toma de decisiones operativas de trading',
      'Pérdida de ventanas de oportunidad por retrasos de análisis manual',
      'Desconexión de feeds de precios en momentos de alta liquidez'
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    id: 'grafo-agentes-ia',
    title: 'Grafo Neural de 697 Agentes & Skills',
    category: 'ai-automation',
    categoryLabel: 'Automatización & IA',
    subtitle: 'Simulador neural interactivo en Canvas HTML5 con física de partículas y clusterización semántica',
    description: 'Visualizador de alto rendimiento a 60 fps que orquesta y mapea dinámicamente las relaciones, dependencias y dominios de 697 agentes de IA especializados (The Agency, Everything Claude Code y Addy Osmani).',
    fullDescription: 'Diseñado para explorar y comprender arquitecturas multi-agente complejas en tiempo real. Implementa un motor de física de resortes y fuerzas de repulsión en Canvas 2D nativo, búsqueda neural por texto con filtrado semántico instantáneo y centrado óptico adaptativo sin dependencias de WebGL.',
    businessImpact: 'Visualización clara de arquitecturas masivas de IA, reduciendo un 60% el tiempo de onboarding técnico.',
    caseStudy: {
      problem: 'Comprender y auditar sistemas multi-agente con cientos de especialidades concurrentes resultaba ininteligible en documentación plana o diagramas estáticos.',
      solution: 'Desarrollo de un simulador físico en Canvas 2D de triple buffer que calcula dinámicamente grafos de afinidad por divisiones operativas con búsqueda instantánea.',
      result: 'Capacidad de depurar y coordinar misiones multi-agente complejas a 60 FPS estables sin saturar la memoria gráfica del cliente.',
      roiBadge: 'Comprensión Visual Inmediata'
    },
    keyHighlights: [
      'Motor de renderizado Canvas 2D optimizado con triple-buffering para sostener 60 FPS estables',
      'Mapeo de 697 nodos activos organizados por 18 divisiones de especialización técnica',
      'Algoritmo de simulación física Barnes-Hut para cálculo fluido de fuerzas gravitatorias',
      'Panel lateral de telemetría y ejecución de misiones multi-agente asistidas'
    ],
    technologies: ['JavaScript ES2024', 'HTML5 Canvas', 'Physics Engine', 'AI Multi-Agent Systems', 'ECC Framework'],
    githubUrl: 'https://github.com/Irvin-Osvaldo-Galvez-Romero0/Grafo_de_Agentes_Con_Skills',
    demoUrl: '#',
    status: 'Completado',
    stats: [
      { label: 'Agentes Mapeados', value: '697' },
      { label: 'Tasa de Refresco', value: '60 FPS' },
      { label: 'Divisiones IA', value: '18+' }
    ],
    stressorsMitigated: [
      'Sobrecarga de renderizado DOM con cientos de nodos simultáneos',
      'Latencia de cálculo físico en laptops estándar',
      'Desorientación visual en grafos de densidad ultra-alta'
    ],
    featured: false,
    accentColor: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
  },
  {
    id: 'remotion-pipeline',
    title: 'Pipeline Programático de Video (Remotion & React)',
    category: 'pwa-fullstack',
    categoryLabel: 'PWAs & Full-Stack',
    subtitle: 'Generación y composición automatizada de piezas audiovisuales 9:16 desde código declarativo',
    description: 'Pipeline de Video-as-Code que construye composiciones verticales ultra fluidas mediante React 19, TypeScript y Rspack, eliminando dependencias de software de diseño tradicional.',
    fullDescription: 'Permite compilar videos publicitarios y divulgativos de 60 segundos a 30 fps con animaciones matemáticamente determinadas. Elimina el renderizado CSS fluctuante delegando todo el movimiento a funciones puras de interpolación temporal relativas a frames (`interpolate` con clamps estrictos).',
    businessImpact: 'Automatización completa de renderizado audiovisual, reduciendo costos de producción en un 85%.',
    caseStudy: {
      problem: 'La edición y exportación manual de decenas de variaciones de videos para redes consumía días de trabajo de diseñadores en software de edición tradicional.',
      solution: 'Arquitectura de Video-as-Code en React 19 con Remotion, en la cual plantillas paramétricas generan videos verticales deterministas en minutos mediante scripts CLI.',
      result: 'Capacidad de producir ráfagas masivas de videos a 30 FPS consistentes sin desincronización de audio ni saltos visuales.',
      roiBadge: '-85% Tiempo de Producción de Video'
    },
    keyHighlights: [
      'Video-as-Code: control determinista de tipografía, capas 3D y elementos HUD',
      'Cero desincronización de audio y frames mediante secuencias relativas encapsuladas',
      'Integración con Rspack para compilación y bundling ultra acelerados',
      'Plantillas paramétricas listas para automatización mediante scripts de Node.js'
    ],
    technologies: ['Remotion', 'React 19', 'TypeScript', 'Rspack', 'Node.js CLI', 'Residuality Theory'],
    githubUrl: 'https://github.com/Irvin-Osvaldo-Galvez-Romero0/remotion',
    demoUrl: '#',
    status: 'Completado',
    stats: [
      { label: 'Resolución', value: '1080x1920 (9:16)' },
      { label: 'Frame Rate', value: '30 fps' },
      { label: 'Desviación de Tiempo', value: '0 ms' }
    ],
    featured: false,
    accentColor: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
  }
];
