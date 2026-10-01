# 🚀 Portafolio Profesional Irvin Dev

> **Desarrollador Full Stack & Arquitecto de Agentes de Inteligencia Artificial**  
> Especializado en PWAs Offline-First, Sistemas Resilientes ([Residuality Theory](https://residuality.org)), Automatización Avanzada con n8n y Rendimiento UI 60 FPS.

---

## 🌟 Características Principales

- **🎨 Diseño Visual Premium & Glassmorphism:** Paleta cromática profunda, efectos de cristal difuminado, orbes ambientales animados y tipografía moderna (*Plus Jakarta Sans*, *Outfit* y *JetBrains Mono*).
- **💼 Catálogo Interactivo de Proyectos Reales:**
  - **POS Resiliente:** Sistema Punto de Venta offline-first con soporte para 50,000 SKUs y aislamiento térmico de tickets.
  - **PWA Módulo Escolar TESChi:** Aplicación universitaria con integración oficial a la API institucional SIIA TecNM y desacoplamiento de credenciales.
  - **Grafo Neural de 697 Agentes & Skills:** Visualizador interactivo en Canvas 2D a 60 FPS con simulación física.
  - **Pipeline Audiovisual Remotion:** Video-as-code con React 19 y control temporal sin desincronización.
  - **Ecosistema Trading & ETFs n8n:** Automatizaciones financieras con bot de Telegram y microservicios Docker.
  - **Joyería AIVI E-Commerce:** Experiencia de compra digital de lujo.
- **🔍 Filtrado & Búsqueda en Tiempo Real:** Filtros por categoría y barra de búsqueda predictiva con modales de arquitectura técnica detallada.
- **📊 Matriz de Habilidades & Radar:** Barras de dominio técnico con porcentajes, experiencia y filosofía de ingeniería.
- **📬 Formulario Directo de Contacto & Especificaciones:**
  - Envío automático de requerimientos a tu bandeja de correo personal.
  - Integración nativa con **Web3Forms** (gratuito e instantáneo) o **Resend**.
  - Retroalimentación visual interactiva con lluvia de confeti (`canvas-confetti`) y botón de respaldo *mailto*.
- **⚡ Optimizado para Vercel:** Preparado con Next.js 16 (App Router), React 19 y Serverless Function en `/api/contact`.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework Web** | Next.js 16 (App Router) | Renderizado estático de alto rendimiento y API Serverless |
| **Biblioteca UI** | React 19 | Componentes reactivos, hooks modernos y Server Components |
| **Lenguaje** | TypeScript 5+ | Tipado estático estricto y contratos de datos |
| **Estilos** | CSS Moderno / Vanilla CSS | Variables CSS HSL, Glassmorphism, Microinteracciones fluidas |
| **Iconografía** | Lucide React + SVG Nativo | Iconos minimalistas y adaptativos |
| **Interactividad** | Canvas Confetti | Animación de celebración al enviar propuestas |
| **Despliegue** | Vercel | Plataforma de hosting global Edge / Serverless |

---

## 🚀 Despliegue en Vercel (Paso a Paso)

Este portafolio está optimizado para importarse directamente en **Vercel** con un solo clic:

### 1. Subir a tu cuenta de GitHub
```bash
git add .
git commit -m "feat: portfolio irvin dev listo para produccion"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/Portafolio.git
git push -u origin main
```

### 2. Importar en Vercel
1. Ingresa a [vercel.com](https://vercel.com) e inicia sesión con tu GitHub.
2. Haz clic en **"Add New..."** ➔ **"Project"**.
3. Selecciona tu repositorio `Portafolio` y haz clic en **Import**.
4. Vercel detectará automáticamente la configuración de Next.js (Build Command: `next build`, Output Directory: `.next`).

### 3. Variables de Entorno (Environment Variables)
En la sección **Environment Variables** de Vercel antes de desplegar, añade:

| Variable | Valor | Descripción |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | *(Tu Access Key)* | Obtén tu clave gratis en [web3forms.com](https://web3forms.com) (los correos llegarán directo a tu bandeja). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `tu_correo@ejemplo.com` | Tu correo electrónico donde deseas recibir las propuestas. |
| `RESEND_API_KEY` *(Opcional)* | `re_...` | Si prefieres usar Resend en lugar de Web3Forms. |

4. Presiona **Deploy**. ¡Tu portafolio estará en vivo en segundos con certificado SSL gratuito y CDN global!

---

## 💻 Desarrollo Local

Para ejecutar y probar el portafolio en tu computadora:

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno locales
cp .env.example .env.local

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🛡️ Estándares de Arquitectura & Calidad
- **Residuality Theory:** Modelado de estresores del mundo real (caídas de red, cuellos de botella en hardware comercial).
- **ISO/IEC 25010:** Eficiencia de desempeño, accesibilidad universal y compatibilidad multiplataforma.
- **Directivas Antigravity:** Conexión con Segundo Cerebro en Obsidian y gobernanza de código limpio.

---

**Desarrollado con pasión y precisión técnica por Irvin Dev.**
