import emailjs from '@emailjs/browser';

export const sendEmail = async (params) => {
    try {
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            params,
            {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 5000,
                },
            }
        );
        console.log('Email sent successfully:', response);
        return response;  
    } catch (error) {
        console.error('Email send failed:', error.text);
        if (error.response) {
            console.error('Error response from email service:', error.response);
        }
        throw new Error(error.text || 'Failed to send email');
    }
};
