import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import PwaManager from '@/components/PwaManager';

export const viewport: Viewport = {
  themeColor: '#060913',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Irvin Dev | Full Stack Developer & AI Agent Architect',
  description: 'Portafolio profesional de desarrollo full stack, PWAs Offline-First, arquitecturas de software resilientes con Residuality Theory y automatizaciones con n8n e Inteligencia Artificial.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Irvin Dev',
  },
  keywords: [
    'Irvin Dev',
    'Full Stack Developer',
    'Next.js 16',
    'React 19',
    'PWA Offline-First',
    'n8n Automation',
    'AI Agents',
    'Residuality Theory',
    'Vercel Portfolio',
    'Desarrollador Web México',
  ],
  authors: [{ name: 'Irvin Dev' }],
  creator: 'Irvin Dev',
  openGraph: {
    title: 'Irvin Dev | Full Stack Developer & AI Agent Architect',
    description: 'Portafolio profesional de software resiliente, PWAs y automatización con agentes de IA.',
    url: 'https://portafolio-irvin-dev.vercel.app',
    siteName: 'Irvin Dev Portfolio',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irvin Dev | Full Stack Developer & AI Agent Architect',
    description: 'Portafolio profesional de software resiliente, PWAs y automatización con agentes de IA.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#060913" />
      </head>
      <body>
        {/* Ambient Glowing Orbs */}
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
        <div className="ambient-glow-3"></div>

        {/* PWA Lifecycle & Offline Manager */}
        <PwaManager />

        {children}
      </body>
    </html>
  );
}
