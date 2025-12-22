'use server'

import { Resend } from 'resend';
import { RESOURCE_IQ_TEAM } from '@/lib/team-config';

const resend = new Resend(process.env.RESEND_API_KEY);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function registerUser(formData: FormData) {
  const customerEmail = formData.get('email') as string;

  if (!customerEmail || !customerEmail.includes('@')) {
    return { error: "Please enter a valid email address." };
  }

  try {
    // 1. SEND WELCOME MAIL TO CUSTOMER
    await resend.emails.send({
      from: 'Resource-IQ <hello@resource-iq.lk>', // Use onboarding@resend.dev if domain is not yet verified
      to: customerEmail,
      subject: '🚀 You’re In! Welcome to the Resource-IQ Waitlist',
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; padding: 40px; border-radius: 16px; color: #1f2937;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #7c3aed; font-size: 28px; font-weight: 800; margin: 0;">Resource-IQ</h1>
            <p style="color: #6b7280; font-size: 14px; margin-top: 4px;">Intelligence for your workflow</p>
          </div>

          <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin-top: 0;">Thanks for joining us!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
            We've received your pre-registration. You’re now officially on the waitlist for early access to <strong>Resource-IQ</strong>.
          </p>

          <div style="background-color: #f5f3ff; border: 1px solid #ddd6fe; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <h3 style="font-size: 14px; font-weight: 700; color: #7c3aed; margin-top: 0; text-transform: uppercase; letter-spacing: 0.05em;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #5b21b6; line-height: 1.8;">
              <li>Your spot in the queue is secured.</li>
              <li>Our team (from IIT Sri Lanka) is finalizing the core modules.</li>
              <li>You will receive a unique access link as soon as your seat is ready.</li>
            </ul>
          </div>

          <p style="font-size: 15px; line-height: 1.6; color: #4b5563;">
            In the meantime, feel free to check out our progress and upcoming integrations with <strong>GitHub</strong> and <strong>Jira</strong> on our official site.
          </p>

          <div style="text-align: center; margin-top: 32px;">
            <a href="https://resource-iq.lk" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">Visit Our Website</a>
          </div>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
          
          <p style="font-size: 12px; text-align: center; color: #9ca3af; margin: 0;">
            &copy; 2025 Resource-IQ Project Team. <br />
            Built with passion at IIT Sri Lanka.
          </p>
        </div>
      `
    });
    await delay(600);

    
    // 2. Send Notifications to Team Members sequentially
    for (const member of RESOURCE_IQ_TEAM) {
      await resend.emails.send({
        from: 'Resource-IQ System <system@resource-iq.lk>',
        to: member.email,
        subject: `🔔 New Lead: ${customerEmail}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #7c3aed; border-radius: 12px;">
              <div style="text-align: center; margin-bottom: 20px;">
                  <span style="background-color: #7c3aed; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                      Internal Alert
                  </span>
              </div>
              
              <h2 style="color: #111827; font-size: 18px; margin-bottom: 10px; text-align: center;">New Waitlist Registration</h2>
              
              <p style="font-size: 14px; color: #4b5563; text-align: center;">
                  Hello <strong>${member.name}</strong>, a new user has just pre-registered for Resource-IQ.
              </p>

              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px dashed #7c3aed; margin: 20px 0; text-align: center;">
                  <span style="display: block; font-size: 12px; color: #6b7280; margin-bottom: 4px;">User Email</span>
                  <strong style="font-size: 18px; color: #7c3aed;">${customerEmail}</strong>
              </div>

              <table style="width: 100%; font-size: 13px; color: #374151; margin-bottom: 20px;">
                  <tr>
                      <td style="padding: 5px 0;"><strong>Project:</strong> Resource-IQ</td>
                      <td style="padding: 5px 0; text-align: right;"><strong>Source:</strong> Landing Page</td>
                  </tr>
                  <tr>
                      <td style="padding: 5px 0;"><strong>Your Role:</strong> ${member.role}</td>
                      <td style="padding: 5px 0; text-align: right;"><strong>Time:</strong> ${new Date().toLocaleTimeString()}</td>
                  </tr>
              </table>

              <div style="text-align: center; border-top: 1px solid #e5e7eb; pt-20px; padding-top: 20px;">
                  <p style="font-size: 11px; color: #9ca3af; margin: 0;">
                      This is an automated notification from your Next.js Server Action.
                  </p>
              </div>
          </div>
        `
      });

      await delay(600);
    }

    return { success: true };
  } catch (error) {
    console.error("Mail Error:", error);
    return { error: "Submission failed. Please try again later." };
  }
}