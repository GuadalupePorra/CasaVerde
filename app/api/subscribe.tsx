import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Method not allowed' });
  }

  const { email, name } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Confirmación de  inscripción al Newsletter',
      html: `
        <p>Hola, ${name || 'amigo(a)'}.</p>
        <p>Bienvenido a <strong>Casa Verde</strong>! Te inscribiste a nuestro  newsletter y comenzarás a recibir novedades y consejos para el cuidado de tus plantas.</p>
        <p>¡Hasta luego!</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al enviar el e-mail:', error);
    return res.status(500).json({ error: 'Error al enviar  el e-mail.' });
  }
}
