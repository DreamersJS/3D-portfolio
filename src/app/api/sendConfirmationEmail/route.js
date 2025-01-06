import { NextResponse } from 'next/server';
import redisClient, { connectRedis } from '@/app/../../service/redisClient';
import { generateToken, hashToken } from '@/app/../../service/tokenService';
import { rateLimiter } from '@/app/../../service/rateLimiter';
import sendEmail5 from '../../../../service/nodemailer';

export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    // const { email } = await req.json();
    const ip = req.headers.get('x-forwarded-for') || req.socket.remoteAddress || req.ip;

    if (!rateLimiter(ip)) {
        return NextResponse.json({ message: 'Too many requests, please try again later.' }, { status: 429 });
    }

    await connectRedis();

    const token = generateToken();
    const hashedToken = await hashToken(token);

    // Set expiration time (e.g., 1 hour from now)
    const expiresAt = Date.now() + 3600 * 1000;

    // Store token in Redis
    try {
        await redisClient.setEx(`confirm_tokens:${hashedToken}`, 3600, JSON.stringify({ email, expiresAt }));
        const storedToken = await redisClient.get(`confirm_tokens:${hashedToken}`);
        console.log('Token stored in Redis:', storedToken); // Log to verify storage
    } catch (redisError) {
        console.error('Error saving token in Redis:', redisError);
        return NextResponse.json({ message: 'Error saving confirmation token to Redis.' }, { status: 500 });
    }

    // Generate the confirmation link with the plain token
    const confirmationLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/confirmEmail?token=${token}&email=${email}`;
    console.log(`Confirmation link: ${confirmationLink}`);
    try {
        // Send the confirmation email
        const templateParams2 = {
            to: email,
            subject,
            text: `Please confirm your email by clicking the link: ${confirmationLink}`,
        };

        await sendEmail5(templateParams2);

        return NextResponse.json({ message: 'Confirmation email sent!' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Failed to send confirmation email.' }, { status: 500 });
    }
}
