import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/../../service/service.email';
import redisClient, { connectRedis } from '@/app/../../service/redisClient';
import { generateToken, hashToken } from '@/app/../../service/tokenService';
import { rateLimiter } from '@/app/../../service/rateLimiter';

export async function POST(req) {
    const ip = req.headers.get('x-forwarded-for') || req.socket.remoteAddress || req.ip;
    console.log({req});

    if (!rateLimiter(ip)) {
        return NextResponse.json({ message: 'Too many requests, please try again later.' }, { status: 429 });
    }

    await connectRedis();
    const { email } = await req.json();
console.log({email});
    const token = generateToken();
    const hashedToken = await hashToken(token);
    
    // Set expiration time (e.g., 1 hour from now)
    const expiresAt = Date.now() + 3600 * 1000;

    // Store token in Redis
    await redisClient.setEx(`confirm_tokens:${hashedToken}`, 3600, JSON.stringify({ email, expiresAt }));
    console.log(`Token stored in Redis: confirm_tokens:${hashedToken}`);
    console.log('Stored in Redis:', await redisClient.get(`confirm_tokens:${hashedToken}`));
    // Generate the confirmation link with the plain token
    const confirmationLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/confirmEmail?token=${token}&email=${email}`;
    console.log(`Confirmation link: ${confirmationLink}`);
    try {
        // Send the confirmation email
        await sendEmail({
            to: email,
            from_name: 'Email Confirmation',
            reply_to: 'noreply',
            message: `Please confirm your email by clicking the link: ${confirmationLink}`,
        });
        return NextResponse.json({ message: 'Confirmation email sent!' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Failed to send confirmation email.' }, { status: 500 });
    }
}
