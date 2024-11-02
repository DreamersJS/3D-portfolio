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
            {/* name input */}
            <input type="text" placeholder="name" {...register("name", {
                required: 'This field is required',
                minLength: {
                    value: 2,
                    message: 'Name is too short. Min: 2 characters'
                },
                maxLength: {
                    value: 30,
                    message: 'Name is too long. Max: 30 characters'
                }
            })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
            {
                errors.name && <span className='inline-block self-start text-red-500'>{errors.name.message}</span>
            }
            
            {/* email input */}
            <input type="text" placeholder="email" {...register("email", { required: 'This field is required', pattern: /^\S+@\S+$/i })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
            {
                errors.email && <span className='inline-block self-start text-red-500'>{errors.email.message}</span>
            }

            {/* message input */}
            <textarea placeholder='message' {...register("message", {
                required: 'This field is required', maxLength: {
                    value: 500,
                    message: 'Message is too long. Max: 500 characters'
                }, minLength: {
                    value: 20,
                    message: 'Message is too short. Min: 20 characters'
                }
            })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
            {
                errors.message && <span className='inline-block self-start text-red-500'>{errors.message.message}</span>
            }
            <input
                value={'Cast your message!'}
                className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
        </form>
    );
}