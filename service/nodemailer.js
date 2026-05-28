import nodemailer from 'nodemailer';

let transporter;

export function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, 
        auth: {
            user: process.env.ETHEREAL_USER, 
            pass: process.env.ETHEREAL_PASS, 
        },
    });
  }

  return transporter;
}

export default async function sendEmail5(req, res) {
    if (req.method === 'POST') {
        const { to, subject='Email Confirmation', text } = req.body;

        // Configure Nodemailer with your Ethereal credentials
        const transporter = getTransporter();

        try {
            // Send the email
            const info = await transporter.sendMail({
                from: process.env.ETHEREAL_USER, // Sender address. Must match the authenticated email. SMTP Authentication: When you authenticate with an SMTP service, you're essentially saying that you are authorized to send emails from that particular email address. As a result, services like Ethereal (or Gmail, SendGrid, etc.) require that the "from" address matches the one you've authenticated with.
                to, // List of recipients
                subject, 
                text, // Plain text body
            });

            // Log and respond with the preview URL
            console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
            res.status(200).json({ message: 'Email sent successfully!', previewUrl: nodemailer.getTestMessageUrl(info) });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}
 