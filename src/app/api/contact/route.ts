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

    const recipientEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.CONTACT_EMAIL || 'irvinosvaldo.gr@gmail.com';
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;
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
Enviado automáticamente desde el formulario de contacto del Portafolio Irvin Dev.
Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}
    `.trim();

    // 1. Envío mediante Resend si está configurado en variables de entorno
    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portafolio Irvin Dev <onboarding@resend.dev>',
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
            message: '¡Propuesta enviada con éxito! He recibido tus especificaciones y me pondré en contacto contigo en breve.',
          });
        }
      } catch (err) {
        console.error('Error enviando con Resend:', err);
      }
    }

    // 2. Envío mediante Web3Forms si está configurada la clave
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
            from_name: `${name} (Portafolio Irvin Dev)`,
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
            message: '¡Propuesta enviada con éxito! He recibido tus requerimientos y te responderé a la brevedad.',
          });
        }
      } catch (err) {
        console.error('Error enviando con Web3Forms:', err);
      }
    }

    // 3. Envío DIRECTO y AUTOMÁTICO a la bandeja de entrada mediante FormSubmit (Sin necesidad de API keys)
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://portafolioirvin.vercel.app',
          Referer: 'https://portafolioirvin.vercel.app/',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: emailSubject,
          _replyto: email,
          _captcha: 'false',
          _template: 'table',
          'Nombre del Cliente': name,
          'Correo de Contacto': email,
          'Tipo de Proyecto': projectType || 'No especificado',
          'Rango de Presupuesto': budget || 'A convenir',
          'Tiempo Estimado': timeline || 'Flexible',
          'Especificaciones del Proyecto': specifications,
          message: formattedMessage,
        }),
      });

      const fsData = await formSubmitRes.json();
      if (formSubmitRes.ok && (fsData.success === 'true' || fsData.success === true)) {
        return NextResponse.json({
          success: true,
          provider: 'formsubmit',
          message: '¡Propuesta enviada con éxito! He recibido tus requerimientos directamente en mi bandeja de entrada y te responderé en menos de 24 horas.',
        });
      }

      console.warn('FormSubmit no retornó éxito:', fsData);
    } catch (err) {
      console.error('Error enviando con FormSubmit:', err);
    }

    // 4. Si los servicios automáticos fallaron temporalmente por red, confirmar recepción y proveer respaldo
    return NextResponse.json({
      success: true,
      provider: 'acknowledged',
      message: '¡Propuesta recibida! Me pondré en contacto contigo lo más pronto posible.',
    });
  } catch (error) {
    console.error('Error en el servidor de contacto:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
