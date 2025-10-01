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
      subject: 'Confirmação de Inscrição na Newsletter',
      html: `
        <p>Olá, ${name || 'amigo(a)'}.</p>
        <p>Bem-vindo à <strong>Casa Verde</strong>! Você se inscreveu na nossa newsletter e começará a receber novidades e dicas para cuidar das suas plantas.</p>
        <p>Até logo!</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ error: 'Erro ao enviar e-mail.' });
  }
}
