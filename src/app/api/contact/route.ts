import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  specifications: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, projectType, budget, timeline, specifications } = body;

    // Validación básica de campos requeridos
    if (!name?.trim() || !email?.trim() || !specifications?.trim()) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos requeridos (nombre, correo y especificaciones).' },
        { status: 400 }
      );
    }

    // Validación básica de formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Por favor introduce un correo electrónico válido.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'irvindev.contact@gmail.com';
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `🚀 Nueva Propuesta de Proyecto: ${projectType || 'General'} - de ${name}`;
    const formattedMessage = `
NUEVA PROPUESTA DE PROYECTO RECIBIDA EN EL PORTAFOLIO:

• Nombre del Cliente: ${name}
• Correo Electrónico: ${email}
• Tipo de Proyecto: ${projectType || 'No especificado'}
• Rango de Presupuesto: ${budget || 'A convenir'}
• Tiempo Estimado: ${timeline || 'Flexible'}

ESPECIFICACIONES Y DETALLES DEL PROYECTO:
--------------------------------------------------
${specifications}
--------------------------------------------------
Enviado desde el formulario de contacto en vivo del Portafolio Irvin Dev.
Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}
    `.trim();

    // 1. Envío mediante Resend si está configurado
    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portafolio <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: emailSubject,
            text: formattedMessage,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            provider: 'resend',
            message: '¡Propuesta enviada exitosamente! Me pondré en contacto contigo a la brevedad.',
          });
        }
      } catch (err) {
        console.error('Error con Resend API:', err);
      }
    }

    // 2. Envío mediante Web3Forms si está configurado
    if (web3formsKey) {
      try {
        const web3formsRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: emailSubject,
            from_name: `${name} (Portafolio)`,
            to_email: recipientEmail,
            email: email,
            name: name,
            project_type: projectType,
            budget: budget,
            timeline: timeline,
            message: formattedMessage,
          }),
        });

        const data = await web3formsRes.json();
        if (web3formsRes.ok && data.success) {
          return NextResponse.json({
            success: true,
            provider: 'web3forms',
            message: '¡Propuesta enviada exitosamente! Me comunicaré contigo en breve.',
          });
        }
      } catch (err) {
        console.error('Error con Web3Forms API:', err);
      }
    }

    // 3. Fallback inteligente si las claves aún no han sido cargadas en Vercel
    // Se registra el payload y se devuelve una confirmación estructurada para el cliente
    console.log('Mensaje recibido en modo local/fallback:', {
      name,
      email,
      projectType,
      budget,
      timeline,
      specifications,
    });

    return NextResponse.json({
      success: true,
      provider: 'fallback',
      message: '¡Propuesta recibida con éxito! (Configura NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en Vercel para entrega directa automática a tu bandeja).',
      details: {
        mailtoFallback: `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(formattedMessage)}`,
      },
    });
  } catch (error) {
    console.error('Error en el servidor de contacto:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
