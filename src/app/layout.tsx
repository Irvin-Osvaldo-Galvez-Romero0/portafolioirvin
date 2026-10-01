import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Irvin Dev | Full Stack Developer & AI Agent Architect',
  description: 'Portafolio profesional de desarrollo full stack, PWAs Offline-First, arquitecturas de software resilientes con Residuality Theory y automatizaciones con n8n e Inteligencia Artificial.',
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
      </head>
      <body>
        {/* Ambient Glowing Orbs */}
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
        <div className="ambient-glow-3"></div>

        {children}
      </body>
    </html>
  );
}
