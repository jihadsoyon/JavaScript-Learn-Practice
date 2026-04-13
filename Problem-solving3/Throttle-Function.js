// Throttle Function
function throttle(fn, delay) {
    let lastTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

// ============== For test ==============
function handleScroll() {
    console.log("📜 Scroll event fired at:", new Date().toLocaleTimeString());
}

// Throttle function 
const throttledScroll = throttle(handleScroll, 1000);

console.log("Throttle function created! Throttled every 1000ms");

// Simulate rapid scroll calls (like real scroll event)
console.log("Simulating rapid scroll...");

throttledScroll();
throttledScroll();
throttledScroll();
throttledScroll();
throttledScroll();

// It will run calling after 1 second
setTimeout(() => {
    throttledScroll();
    console.log("Called after 1 second");
}, 1200);