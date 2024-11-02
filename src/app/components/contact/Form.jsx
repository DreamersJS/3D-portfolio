'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (params) => {

        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 5000,
                }
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const onSubmit = data => {
        console.log(data);

        const templateParams = {
            to: 'Zvezda Neycheva',
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        };
        sendEmail(templateParams);
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className='max-w-md w-full items-center flex flex-col justify-center space-y-4'>
            <input type="text" placeholder="name" {...register("name", { required: true, maxLength: 80 })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
            <input type="text" placeholder="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
            <textarea placeholder='message' {...register("message", { required: true, max: 250, min: 20 })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />

            <input
                value={'Cast your message!'}
                className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
        </form>
    );
}