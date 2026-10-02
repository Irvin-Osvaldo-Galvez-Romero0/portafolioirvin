import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Irvin Dev | Full Stack & AI Architect',
    short_name: 'Irvin Dev',
    description: 'Portafolio profesional de desarrollo Full Stack, PWAs Offline-First, arquitecturas de software resilientes con Residuality Theory y automatizaciones con IA.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#060913',
    theme_color: '#060913',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
