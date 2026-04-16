function memoize(fn, ttl) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    // Check if cache exists
    if (cache.has(key)) {
      const { value, expiry } = cache.get(key);

      // If not expired → return cached value
      if (now < expiry) {
        console.log("From Cache ✅");
        return value;
      } else {
        // Expired → delete
        cache.delete(key);
      }
    }

    // Compute new value
    const result = fn(...args);

    // Store in cache with expiry time
    cache.set(key, {
      value: result,
      expiry: now + ttl
    });

    console.log("Computed 🚀");
    return result;
  };
}

//////////////////////////////////////////////////////
// 🔥 Test Function
function slowAdd(a, b) {
  console.log("Function Executed...");
  return a + b;
}

const memoFn = memoize(slowAdd, 3000); // 3 sec TTL

//////////////////////////////////////////////////////
// 🧪 Test Cases

console.log(memoFn(2, 3)); // Computed
console.log(memoFn(2, 3)); // From Cache

setTimeout(() => {
  console.log(memoFn(2, 3)); // Still cache (within TTL)
}, 2000);

setTimeout(() => {
  console.log(memoFn(2, 3)); // Expired → recompute
}, 4000);