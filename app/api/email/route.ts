import { ContactForm } from '@/components/EmailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY as string;
const EMAIL_TO = process.env.EMAIL_TO as string;
const EMAIL_FROM = process.env.EMAIL_FROM as string;

const resend = new Resend(RESEND_API_KEY);

type ResponseData = {
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      throw new Error('Missing required fields');
    }

    const data = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      subject: 'Um novo contato foi feito pelo site',
      react: ContactForm({ 
        name,
        email,
        message
       }) as React.ReactElement,
    });

    return Response.json(data, { status: 200 });
  } catch (error) {
    if(error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
  }
}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}