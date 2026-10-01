export interface Project {
  id: string;
  title: string;
  category: 'pwa-fullstack' | 'ai-automation' | 'systems' | 'ecommerce';
  categoryLabel: string;
  subtitle: string;
  description: string;
  fullDescription: string;
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
    id: 'pos-resiliente',
    title: 'POS - Punto de Venta Resiliente Offline-First',
    category: 'systems',
    categoryLabel: 'Sistemas Resilientes',
    subtitle: 'Arquitectura transaccional de caja e inventario con tolerancia a desconexión y hardware ráfaga',
    description: 'Sistema comercial de alta concurrencia diseñado con Residuality Theory para operar 100% desconectado, soportar ráfagas de lectores HID y gestionar catálogos de hasta 50,000 SKUs sin degradación.',
    fullDescription: 'Desarrollado para entornos de retail donde un corte de luz o fallo de internet no puede detener la facturación. Integra persistencia local con IndexedDB/SQLite, motor de sincronización idempotente en segundo plano, aislamiento CSS para impresión térmica directa de tickets (ESC/POS) y suites de stress testing validadas en hardware táctil físico.',
    keyHighlights: [
      'Resiliencia probada: hasta 50,000 SKUs y 5,000 transacciones masivas sin cuellos de botella',
      'Aislamiento total de corte de red: cobro y almacenamiento en caché local sin abortar transacciones',
      'Módulo de impresión térmica desacoplado: tickets limpios sin elementos de UI ni márgenes espurios',
      'Validación de calidad exhaustiva con Google Lighthouse 100 y tests Chromium CDP'
    ],
    technologies: ['TypeScript', 'React 19', 'IndexedDB', 'SQLite', 'Residuality Theory', 'Tailored CSS', 'Chromium CDP'],
    githubUrl: 'https://github.com/Irvin-Dev/POS',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Capacidad SKUs', value: '50,000+' },
      { label: 'Operatividad Offline', value: '100%' },
      { label: 'Tiempo de Cobro', value: '< 200ms' }
    ],
    stressorsMitigated: [
      'Corte de conexión eléctrica/red durante checkout',
      'Ráfagas no controladas de lectores de código de barras HID',
      'Corrupción de caché local ante caídas repentinas del navegador'
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
    description: 'Aplicación Web Progresiva para comunidad universitaria con desacoplamiento estricto de autenticación (NIP / Contraseña), consulta de retícula académica en vivo, kardex de calificaciones y cumplimiento ISO 25010.',
    fullDescription: 'Reemplaza sistemas web monolíticos tradicionales por una experiencia fluida e instalable en dispositivos móviles y de escritorio. Cuenta con un Backend-for-Frontend (BFF) en Express que se conecta de forma segura a los endpoints oficiales de autenticación y carga académica del SIIA TESChi, mitigando bloqueos y permitiendo navegación sin conexión de historiales académicos.',
    keyHighlights: [
      'Arquitectura BFF en Express con sanitización y reintentos adaptativos contra API legacy',
      'Desacoplamiento total: login independiente por NIP de 4 dígitos o contraseña institucional',
      'Caché reactiva con Service Workers para visualización de kardex y horarios sin internet',
      'Modelado de calidad formal bajo el estándar internacional ISO/IEC 25010 y C4 Model'
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express BFF', 'Service Workers', 'Vite', 'ISO 25010'],
    githubUrl: 'https://github.com/Irvin-Dev/PWA-Modulo-Escolar-TESChi',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Usuarios Potenciales', value: '8,000+' },
      { label: 'Puntuación Lighthouse', value: '98/100' },
      { label: 'Disponibilidad Offline', value: 'PWA Cache' }
    ],
    stressorsMitigated: [
      'Saturación de servidores universitarios durante períodos de reinscripción',
      'Latencia elevada en redes móviles 3G/4G del campus',
      'Incompatibilidad con credenciales híbridas (NIP vs Contraseña alfanumérica)'
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)'
  },
  {
    id: 'grafo-agentes-ia',
    title: 'Grafo Neural de 697 Agentes & Skills',
    category: 'ai-automation',
    categoryLabel: 'Automatización & IA',
    subtitle: 'Simulador neural interactivo en Canvas HTML5 con física de partículas y clusterización semántica',
    description: 'Visualizador de alto rendimiento a 60 fps que orquesta y mapea dinámicamente las relaciones, dependencias y dominios de 697 agentes de IA especializados (The Agency, Everything Claude Code y Addy Osmani).',
    fullDescription: 'Diseñado para explorar y comprender arquitecturas multi-agente complejas en tiempo real. Implementa un motor de física de resortes y fuerzas de repulsión en Canvas 2D nativo, búsqueda neural por texto con filtrado semántico instantáneo, inspección de capacidades por nodo y centrado óptico adaptativo sin dependencias pesadas de WebGL.',
    keyHighlights: [
      'Motor de renderizado Canvas 2D optimizado con triple-buffering para sostener 60 FPS estables',
      'Mapeo de 697 nodos activos organizados por divisiones (Ingeniería, AppSec, UX, Finanzas, Testing)',
      'Algoritmo de simulación física Barnes-Hut para cálculo fluido de fuerzas gravitatorias',
      'Panel lateral de telemetría y ejecución de misiones multi-agente asistidas'
    ],
    technologies: ['JavaScript ES2024', 'HTML5 Canvas', 'Physics Engine', 'AI Multi-Agent Systems', 'ECC Framework'],
    githubUrl: 'https://github.com/Irvin-Dev/Grafo_de_Agentes_Con_Skills',
    demoUrl: '#',
    status: 'Completado',
    stats: [
      { label: 'Agentes Mapeados', value: '697' },
      { label: 'Tasa de Refresco', value: '60 FPS' },
      { label: 'Divisiones IA', value: '18+' }
    ],
    stressorsMitigated: [
      'Sobrecarga de renderizado DOM con cientos de elementos SVG simultáneos',
      'Latencia de cálculo físico en computadoras portátiles estándar',
      'Desorientación visual del usuario en grafos de densidad ultra-alta'
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
  },
  {
    id: 'remotion-pipeline',
    title: 'Pipeline Programático de Video (Remotion & React)',
    category: 'pwa-fullstack',
    categoryLabel: 'PWAs & Full-Stack',
    subtitle: 'Generación y composición automatizada de piezas audiovisuales 9:16 desde código declarativo',
    description: 'Pipeline de renderizado de video como código (Video-as-Code) que sustituye software tradicional de edición. Construye composiciones verticales ultra fluidas mediante React 19, TypeScript y Rspack.',
    fullDescription: 'Permite compilar videos publicitarios y divulgativos de 60 segundos a 30 fps con animaciones matemáticamente determinadas. Elimina el renderizado CSS fluctuante delegando todo el movimiento a funciones puras de interpolación temporal relativas a frames (`interpolate` con clamps estrictos).',
    keyHighlights: [
      'Video-as-Code: control determinista de tipografía, capas 3D y elementos HUD',
      'Cero desincronización de audio y frames mediante secuencias relativas encapsuladas',
      'Integración con Rspack para tiempos de compilación y bundling ultra acelerados',
      'Plantillas paramétricas listas para automatización mediante scripts de Node.js'
    ],
    technologies: ['Remotion', 'React 19', 'TypeScript', 'Rspack', 'Node.js CLI', 'Residuality Theory'],
    githubUrl: 'https://github.com/Irvin-Dev/remotion',
    demoUrl: '#',
    status: 'Completado',
    stats: [
      { label: 'Resolución', value: '1080x1920 (9:16)' },
      { label: 'Frame Rate', value: '30 fps' },
      { label: 'Desviación de Tiempo', value: '0 ms' }
    ],
    featured: false,
    accentColor: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
  },
  {
    id: 'n8n-trading-etfs',
    title: 'Ecosistema de Trading & ETFs Automatizado con n8n',
    category: 'ai-automation',
    categoryLabel: 'Automatización & IA',
    subtitle: 'Flujos automatizados de análisis de mercado, cálculo de indicadores y bot de señales financieras',
    description: 'Solución integral de captura, análisis y notificación de mercados financieros y fondos indexados (ETFs). Orquesta nodos avanzados de n8n, modelos de lenguaje para análisis de noticias y alertas en Telegram.',
    fullDescription: 'Conecta APIs financieras en vivo (precios, dividendos, volatilidad, medias móviles) con modelos de IA para generar resúmenes ejecutivos matutinos. Incorpora disparadores automáticos ante rupturas de soporte/resistencia y control de riesgo de trading con bitácora en bases de datos PostgreSQL/MongoDB.',
    keyHighlights: [
      'Orquestación de workflows complejos en n8n con manejo resiliente de errores y reintentos',
      'Integración bidireccional con bot de Telegram para consultas interactivas de tickets',
      'Cálculo automatizado de métricas cuantitativas (RSI, MACD, volatilidad histórica)',
      'Despliegue contenerizado mediante Docker Compose con persistencia de estado'
    ],
    technologies: ['n8n', 'Python', 'Node.js', 'Telegram Bot API', 'Docker', 'PostgreSQL', 'Financial APIs'],
    githubUrl: 'https://github.com/Irvin-Dev/ChatBotN8NTrading',
    demoUrl: '#',
    status: 'Producción',
    stats: [
      { label: 'Uptime de Flujos', value: '99.9%' },
      { label: 'Monitoreo de Activos', value: '50+ ETFs' },
      { label: 'Latencia de Alerta', value: '< 2s' }
    ],
    featured: true,
    accentColor: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
  },
  {
    id: 'joyeria-aivi',
    title: 'Plataforma E-Commerce Joyería AIVI',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    subtitle: 'Tienda en línea de alta conversión con estética premium, catálogo interactivo y checkout fluido',
    description: 'Experiencia de compra digital de lujo desarrollada con enfoque en diseño glassmorphism, microinteracciones suaves, optimización de imágenes en alta resolución y checkout guiado por WhatsApp/Pasarela.',
    fullDescription: 'Diseñada para cautivar al cliente desde el primer segundo. Dispone de filtrado multifacético por metales y piedras preciosas, selector visual de tallas, cálculo dinámico de presupuestos para piezas personalizadas y carga ultra optimizada en dispositivos móviles.',
    keyHighlights: [
      'Estética visual refinada con paletas adaptativas, modo oscuro sofisticado y efectos de cristal',
      'Filtrado y búsqueda instantánea de piezas en tiempo real sin recargas de página',
      'Optimización agresiva de imágenes con WebP/AVIF reduciendo el peso de página al 70%',
      'Embudo de conversión optimizado para compras directas y atención personalizada'
    ],
    technologies: ['Next.js', 'React', 'CSS Modules', 'Responsive Design', 'WebP/AVIF', 'WhatsApp API'],
    githubUrl: 'https://github.com/Irvin-Dev/Joyeria_AIVI',
    demoUrl: '#',
    status: 'Completado',
    stats: [
      { label: 'Tasa de Carga Móvil', value: '< 1.1s' },
      { label: 'Conversión de Carrito', value: '+35%' },
      { label: 'Diseño Responsivo', value: '100%' }
    ],
    featured: false,
    accentColor: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  }
];
