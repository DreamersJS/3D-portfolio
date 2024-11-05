import { checkDomainMxRecords } from '@/../service/service.emailDomain';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });
    }

    const canReceiveEmail = await checkDomainMxRecords(email);

    if (canReceiveEmail) {
        return new Response(JSON.stringify({ message: 'Domain can receive emails' }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ message: 'Domain cannot receive emails' }), { status: 400 });
    }
}
