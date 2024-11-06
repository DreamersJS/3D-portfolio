// service/redisClient.js
import { createClient } from 'redis';

const redisClient = createClient({
    password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
    socket: {
        host: process.env.NEXT_PUBLIC_REDIS_HOST,
        port: process.env.NEXT_PUBLIC_REDIS_PORT
    }
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('Connected to Redis!');
    } catch (error) {
        console.error('Failed to connect to Redis:', error);
    }
};

export const disconnectRedis = async () => {
    await redisClient.quit();
};

export default redisClient;
