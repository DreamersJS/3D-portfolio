'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { MailCheck, MailX } from 'lucide-react';
import emailjs from '@emailjs/browser';

const sendEmail = async (params) => {
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

export default function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.email ) {
            toast.error('Invalid domain or no MX records found!', {
                duration: 5000,
                icon: <MailX />,
                style: {
                    backgroundColor: '#1B1B1B',
                    border: 'none',
                },
            });
            return; 
        }

        const templateParams = {
            to: 'Zvezda Neycheva',
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        };

        const toastId = toast.loading('Sending your message...', {
            style: {
                backgroundColor: '#1B1B1B',
                border: 'none',
            },
        });

        try {
            await sendEmail(templateParams);
            toast.success('Message sent successfully! I will get back to you soon.', {
                id: toastId,
                duration: 5000,
                icon: <MailCheck />,
                style: {
                    backgroundColor: '#1B1B1B',
                    border: 'none',
                },
            });
            reset(); 
        } catch (error) {
            toast.error('Message failed to send!', {
                id: toastId,
                duration: 5000,
                icon: <MailX />,
                style: {
                    backgroundColor: '#1B1B1B',
                    border: 'none',
                },
            });
        }
    };

    return (
        <>
            <Toaster position="bottom-left" richColors />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
                
                {/* Name input */}
                <label htmlFor="name" className="self-start">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: 'This field is required',
                        minLength: { value: 2, message: 'Name is too short. Min: 2 characters' },
                        maxLength: { value: 30, message: 'Name is too long. Max: 30 characters' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
                    aria-label="Name"
                />
                {errors.name && <span className="inline-block self-start text-red-500">{errors.name.message}</span>}
                
                 {/* Email input */}
                 <label htmlFor="email" className="self-start">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: 'This field is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
                    aria-label="Email"
                />
                {errors.email && <span className="inline-block self-start text-red-500">{errors.email.message}</span>}
                
                {/* Message input */}
                <label htmlFor="message" className="self-start">Message</label>
                <textarea
                    id="message"
                    placeholder="Message"
                    {...register("message", {
                        required: 'This field is required',
                        minLength: { value: 20, message: 'Message is too short. Min: 20 characters' },
                        maxLength: { value: 500, message: 'Message is too long. Max: 500 characters' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
                    aria-label="Message"
                />
                {errors.message && <span className="inline-block self-start text-red-500">{errors.message.message}</span>}
                
                <input
                    value="Cast your message!"
                    className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
                    type="submit"
                />
            </form>
        </>
    );
}
