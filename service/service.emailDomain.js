// lib/service.email.js

import dns from 'dns';

// List of known email providers (add more as needed)
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

    // Step 1: Check if the domain is in the known list (optional)
    if (!knownDomains.has(domain)) {
        console.log(`Unknown or uncommon domain: ${domain}`);
        return false;
    }

    // Step 2: Check if the domain has MX records
    try {
        const addresses = await new Promise((resolve, reject) => {
            dns.resolveMx(domain, (error, addresses) => {
                if (error) {
                    console.log(`DNS lookup failed: ${error.message}`);
                    reject('Invalid domain or no MX records found');
                } else if (addresses && addresses.length > 0) {
                    console.log('Valid domain with MX records');
                    resolve(addresses);
                } else {
                    console.log('No MX records found');
                    resolve(null);
                }
            });
        });

        return addresses !== null; 
    } catch (error) {
        console.error(error);
        return false;
    }
}
