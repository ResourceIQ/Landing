'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;

  console.log("Submit Email:",email)
  // Basic validation
  if (!email || !email.includes('@')) {
    return { error: "Please enter a valid email address." };
  }

  try {
    //Send WELCOME email to the user
    const { error: welcomeError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to Resource-IQ Early Access',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h1 style="color: #7c3aed;">You're on the list!</h1>
          <p>Hi there,</p>
          <p>Thanks for joining the waitlist for <strong>Resource-IQ</strong>. We're excited to have you as one of our early supporters.</p>
          <p>We'll notify you as soon as we're ready to grant you access to the platform. In the meantime, feel free to follow our journey at <a href="https://www.resource-iq.lk">resource-iq.lk</a>.</p>
          <br />
          <p>Best regards,<br />The Resource-IQ Team</p>
        </div>
      `
    });

    if (welcomeError) {
      console.error("Welcome email error:", welcomeError);
      // We don't return error here because the lead was already sent to you
    }

    return { success: true };
  } catch (e) {
    console.error("Server Action Error:", e);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}