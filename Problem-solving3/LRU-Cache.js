//  LRU Cache Implementation
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();   // Map automatically maintains insertion order
    }

    // Get value by key (and move it to most recently used)
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        
        const value = this.cache.get(key);
        
        // Move to most recently used (delete then re-insert)
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }

    // Put key-value pair (update if exists, evict LRU if full)
    put(key, value) {
        // If the key already exists, delete it and insert a new one (order update).
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        
        this.cache.set(key, value);
        
        // If capacity is exceeded, remove the oldest (LRU)
        if (this.cache.size > this.capacity) {
            // Map এর প্রথম key টা হলো LRU
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

// ============== Test. ==============
const cache = new LRUCache(2);

console.log("Capacity = 2");

cache.put(1, 1);
console.log("put(1, 1)");

cache.put(2, 2);
console.log("put(2, 2)");

console.log("get(1)   →", cache.get(1));   // returns 1

cache.put(3, 3);
console.log("put(3, 3)  // should evict key 2");

console.log("get(2)   →", cache.get(2));   // returns -1 (evicted)

cache.put(4, 4);
console.log("put(4, 4)  // should evict key 1");

console.log("get(1)   →", cache.get(1));   // returns -1
console.log("get(3)   →", cache.get(3));   // returns 3
console.log("get(4)   →", cache.get(4));   // returns 4