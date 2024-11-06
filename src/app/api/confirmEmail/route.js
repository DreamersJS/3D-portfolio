import { NextResponse } from 'next/server';
import redisClient, { connectRedis } from '@/service/redisClient';
import { verifyToken } from '@/service/tokenService';

export async function GET(req) {
    await connectRedis();
    
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (!token || !email) {
        return NextResponse.json({ message: 'Invalid token or email' }, { status: 400 });
    }

    try {
        // Verify the token
        await verifyToken(email, token);
        return NextResponse.json({ message: 'Email confirmed successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message || 'Invalid token' }, { status: 400 });
    }
}
