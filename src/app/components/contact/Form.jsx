'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { MailCheck, MailX } from 'lucide-react';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Check if email domain can receive emails
    const handleEmailDomainCheck = async (email) => {
        try {
            const response = await fetch(`/api/checkEmailDomain?email=${email}`);
            const data = await response.json();
            return response.ok;
        } catch (error) {
            console.error('Error checking email domain:', error);
            return false;
        }
    };

    const sendEmail = (params) => {
        const toastId = toast.loading('Sending your message...', {
            style: {
                backgroundColor: '#1B1B1B',
                border: 'none',
            },
        });

        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 5000,
                },
            })
            .then(
                () => {
                    toast.success('Message sent successfully! I will get back to you soon.', {
                        id: toastId,
                        duration: 5000,
                        icon: <MailCheck />,
                        style: {
                            backgroundColor: '#1B1B1B',
                            border: 'none',
                        },
                    });
                },
                (error) => {
                    toast.error('Message failed to send!', {
                        id: toastId,
                        duration: 5000,
                        icon: <MailX />,
                        style: {
                            backgroundColor: '#1B1B1B',
                            border: 'none',
                        },
                    });
                    console.error('Email send failed:', error.text);
                }
            );
    };

    const onSubmit = async (data) => {
        console.log(data);
        
        const isDomainValid = await handleEmailDomainCheck(data.email);
        if (!isDomainValid) {
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
        sendEmail(templateParams);
    };

    return (
        <>
            <Toaster position="bottom-left" richColors />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
                
                {/* Name input */}
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: 'This field is required',
                        minLength: { value: 2, message: 'Name is too short. Min: 2 characters' },
                        maxLength: { value: 30, message: 'Name is too long. Max: 30 characters' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
                />
                {errors.name && <span className="inline-block self-start text-red-500">{errors.name.message}</span>}
                
                {/* Email input */}
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: 'This field is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
                />
                {errors.email && <span className="inline-block self-start text-red-500">{errors.email.message}</span>}
                
                {/* Message input */}
                <textarea
                    placeholder="Message"
                    {...register("message", {
                        required: 'This field is required',
                        minLength: { value: 20, message: 'Message is too short. Min: 20 characters' },
                        maxLength: { value: 500, message: 'Message is too long. Max: 500 characters' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
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
