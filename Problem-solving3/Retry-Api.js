async function retry(fn, maxRetries = 3, delay = 1000) {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
        try {
            console.log(`🔄 Attempt ${attempt}/${maxRetries + 1}`);
            const result = await fn();
            console.log(`✅ Success on attempt ${attempt}`);
            return result;
        } catch (error) {
            lastError = error;
            console.log(`❌ Attempt ${attempt} failed: ${error.message}`);

            if (attempt > maxRetries) {
                console.log(`⛔ All ${maxRetries + 1} attempts failed`);
                break;
            }

            // Exponential Backoff + Jitter
            const backoff = delay * Math.pow(2, attempt - 1);
            const jitter = Math.random() * 300;
            const waitTime = Math.min(backoff + jitter, 10000);

            console.log(`⏳ Waiting ${Math.round(waitTime)}ms before next retry...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }

    throw lastError || new Error(`Failed after ${maxRetries + 1} attempts`);
}