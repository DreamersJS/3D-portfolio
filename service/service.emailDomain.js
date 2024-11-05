import dns from 'dns';

export async function checkDomainMxRecords(email) {
    const domain = email.split('@')[1];
    
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
