'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;

  // Basic validation
  if (!email || !email.includes('@')) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const { data, error } = await resend.emails.send({
  from: 'onboarding@resend.dev', 
  to: 'dilukalahiruofficial@gmail.com', // Must be your account email
  subject: 'Test Preregistration',
  html: `<p>Testing the form for ${email}</p>`
});
    // 1. Send NOTIFICATION to you
    await resend.emails.send({
      from: 'system@updates.resourceiq.lk',
      to: 'dilukalahiruofficial@gmail.com',
      subject: '🚀 New Lead: Resource-IQ',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">New Preregistration</h2>
          <p>A new user has joined the Resource-IQ waitlist:</p>
          <p style="font-size: 18px; font-weight: bold; color: #7c3aed;">${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">Sent from Resource-IQ Website</p>
        </div>
      `
    });

    // 2. Send WELCOME email to the user
    const { error: welcomeError } = await resend.emails.send({
      from: 'hello@updates.resourceiq.lk',
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