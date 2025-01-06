import nodemailer from 'nodemailer';

export async function sendEmail4({ to_name, reply_to, message }) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true', 
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Portfolio" <${process.env.SMTP_USER}>`,
        to: to_name,
        replyTo: reply_to,
        subject: 'Email Confirmation',
        text: message,
    });
}
