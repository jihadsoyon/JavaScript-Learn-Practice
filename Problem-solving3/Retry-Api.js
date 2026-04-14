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

// ==================== Test Cases ====================

// Test 1: You will succeed on the first attempt.
async function successAPI() {
    console.log("📡 Calling API...");
    return { success: true, data: "Hello from successful API!" };
}

// Test 2: You will fail the first 2 times, you will succeed the 3rd time.
let failCount = 0;
async function flakyAPI() {
    console.log("📡 Calling flaky API...");
    failCount++;
    if (failCount < 3) {
        throw new Error("Network timeout");
    }
    return { success: true, data: "Success after retries!" };
}

// Test 3: All attempts will fail.
async function alwaysFailAPI() {
    console.log("📡 Calling always failing API...");
    throw new Error("Server error 500");
}

// ==================== Run Tests ====================

async function runTests() {
    console.log("=== Retry Function Test Started ===\n");

    try {
        console.log("1. Success API Test:");
        const result1 = await retry(successAPI, 3, 500);
        console.log("Final Result:", result1);
    } catch (e) {
        console.log("Unexpected error:", e.message);
    }

    console.log("\n" + "=".repeat(50) + "\n");

    failCount = 0; // reset
    try {
        console.log("2. Flaky API Test (fails 2 times):");
        const result2 = await retry(flakyAPI, 3, 600);
        console.log("Final Result:", result2);
    } catch (e) {
        console.log("Unexpected error:", e.message);
    }

    console.log("\n" + "=".repeat(50) + "\n");

    try {
        console.log("3. Always Fail API Test:");
        await retry(alwaysFailAPI, 2, 400);
    } catch (e) {
        console.log(`💥 Final Failure: ${e.message}`);
    }

    console.log("\n=== All Tests Completed ===");
}

// Run the tests
runTests();