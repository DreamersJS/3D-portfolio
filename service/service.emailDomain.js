import dns from 'dns';

// List of known email providers
const knownDomains = new Set([
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'icloud.com',
    'abv.bg',
    'mail.bg',
]);

export async function checkDomainMxRecords(email) {
    const domain = email.split('@')[1];

    // Step 1: Validate email format
    if (!domain || !email.includes('@')) {
        console.log('Invalid email format');
        return false;
    }

    // Step 2: Check if the domain is in the known list (optional) there are many more email providers
    if (!knownDomains.has(domain)) {
        console.log(`Unknown or uncommon domain: ${domain}`);
        return false;
    }

    // Step 3: Check if the domain has MX records
    try {
        const addresses = await dns.promises.resolveMx(domain);

        if (addresses.length > 0) {
            console.log('Valid domain with MX records');
            return true;
        } else {
            console.log('No MX records found');
            return false;
        }
    } catch (error) {
        console.log(`DNS lookup failed for ${domain}: ${error.message}`);
        return false;
    }
}
