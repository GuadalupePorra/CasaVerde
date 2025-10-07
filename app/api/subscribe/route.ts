import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, name } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Confirmación de inscripción al Newsletter',
      html: `
        <p>Hola, ${name || 'amigo(a)'}.</p>
        <p>Bienvenido a <strong>Casa Verde</strong>! Te inscribiste a nuestro newsletter y comenzarás a recibir novedades y consejos para el cuidado de tus plantas.</p>
        <p>¡Hasta luego!</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error al enviar el e-mail:', error);
    return Response.json(
      { error: 'Error al enviar el e-mail.', details: error.message },
      { status: 500 }
    );
  }
}
