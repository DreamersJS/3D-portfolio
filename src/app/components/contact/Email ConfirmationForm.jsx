'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { MailCheck, MailX } from 'lucide-react';

export default function EmailConfirmationForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Check if email domain can receive emails
    const handleEmailDomainCheck = async (email) => {
        try {
            const response = await fetch(`/api/checkEmailDomain?email=${email}`);
            if (!response.ok) throw new Error('Network response was not ok');
            return true;
        } catch (error) {
            console.error('Error checking email domain:', error);
            return false;
        }
    };

    // Send confirmation email
    const handleSendConfirmationEmail = async (email) => {
        try {
            const response = await fetch('/api/sendConfirmationEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) throw new Error('Failed to send confirmation email');
            toast.success('Confirmation email sent!', {
                duration: 5000,
                icon: <MailCheck />,
                style: {
                    backgroundColor: '#1B1B1B',
                    border: 'none',
                },
            });
            return true;
        } catch (error) {
            toast.error('Failed to send confirmation email.', {
                duration: 5000,
                icon: <MailX />,
                style: {
                    backgroundColor: '#1B1B1B',
                    border: 'none',
                },
            });
            return false;
        }
    };

    const onSubmit = async (data) => {
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
        try {
            await handleSendConfirmationEmail(data.email);

            reset(); 
        } catch (error) {
            console.error('Failed to send confirmation email:', error);
        }
    };

    return (
        <>
            <Toaster position="bottom-left" richColors />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col items-center justify-center space-y-4">

                {/* Email input */}
                <label htmlFor="email" className="self-start">Email Confirmation</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email Confirmation"
                    {...register("email", {
                        required: 'This field is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                    })}
                    className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
                    aria-label="Email"
                />
                {errors.email && <span className="inline-block self-start text-red-500">{errors.email.message}</span>}

                <input
                    value="Cast your message!"
                    className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
                    type="submit"
                />
            </form>
        </>
    );
}
