import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';

export const sendEmail2 = async (params) => {
    const url = 'https://api.emailjs.com/api/v1.0/email/send';

    // Validate required environment variables
    if (!process.env.SERVICE_ID || !process.env.TEMPLATE_ID || !process.env.PUBLIC_KEY) {
        console.error('Missing required environment variables for email service');
        throw new Error('Email service configuration error');
    }

    const payload = {
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.PUBLIC_KEY,
        template_params: params,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            body: JSON.stringify(payload),
        });

        // Handle response status
        if (!response.ok) {
            const errorText = await response.text(); // Capture response text for more info
            console.error(`Failed to send email: ${response.status} ${response.statusText} - ${errorText}`);
            throw new Error(`Failed to send email: ${response.statusText} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Email sent successfully:', result);
        return result;
    } catch (error) {
        console.error('Email send failed:', error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

export const sendEmail4 = async (params) => {

    if (!process.env.SERVICE_ID || !process.env.TEMPLATE_ID || !process.env.PUBLIC_KEY) {
        console.error('Missing required environment variables for email service');
        throw new Error('Email service configuration error');
    }
    console.log(process.env.PUBLIC_KEY);

    try {
        const response = await emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, params, {
            publicKey: process.env.PUBLIC_KEY,
        });
        console.log('Email sent successfully:', response);
        return response;
    } catch (error) {
        if (error instanceof EmailJSResponseStatus) {
            console.log('EMAILJS FAILED...', error);
        }
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email');
    }
};
