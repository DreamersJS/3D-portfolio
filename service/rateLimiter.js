
const rateLimits = {}; 
// 3 requests per 15 minutes
export const rateLimiter = (ip, limit = 3, windowMs = 15 * 60 * 1000) => {
    const now = Date.now();

    // Check if the IP exists in the rateLimits object
    if (!rateLimits[ip]) {
        rateLimits[ip] = { count: 1, firstRequestTime: now };
    } else {
        const { count, firstRequestTime } = rateLimits[ip];

        // Check if the time window has expired
        if (now - firstRequestTime < windowMs) {
            // Still within the window
            if (count >= limit) {
                // Rate limit exceeded
                return false;
            } else {
                // Increment the count
                rateLimits[ip].count += 1;
            }
        } else {
            // Reset the count and the time window
            rateLimits[ip] = { count: 1, firstRequestTime: now };
        }
    }
    return true; 
};
