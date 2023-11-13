
import { ContactForm } from '@/components/EmailTemplate';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const RESEND_API_KEY = process.env.RESEND_API_KEY as string;
const EMAIL_TO = process.env.EMAIL_TO as string;

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: NextApiRequest) {
  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [EMAIL_TO],
      subject: 'Hello world',
      react: ContactForm({ 
        name,
        email,
        message
       }) as React.ReactElement,
    });


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}