🚀 Advanced JavaScript Problem Solving Collection

A curated set of real-world, high-level JavaScript problems to sharpen problem-solving skills and prepare for technical interviews.

🧠 Problem List
1️⃣ Deep Flatten Array

Flatten an array of any depth into a single-level array.

flatten([1, [2, [3, [4]], 5]])
// Output: [1, 2, 3, 4, 5]
2️⃣ Debounce Function

Delays function execution until after a specified time has passed since the last call.

debounce(fn, 500)

📌 Use Case: Search input optimization

3️⃣ Throttle Function

Ensures a function runs at most once in a given time interval.

throttle(fn, 1000)

📌 Use Case: Scroll / resize events

4️⃣ Custom Promise.all()

Implement your own version of Promise.all.

myPromiseAll([p1, p2, p3])

✔️ Returns all resolved values
❌ Rejects immediately if any promise fails

5️⃣ LRU Cache (Least Recently Used)

Design a cache system with limited capacity.

const cache = new LRUCache(2)

cache.put(1, 1)
cache.get(1)

📌 Use Case: Browser caching, performance optimization

6️⃣ Group By Function

Group objects in an array based on a key.

groupBy(users, "age")
7️⃣ Deep Clone Object

Clone deeply nested objects without reference sharing.

deepClone(obj)

⚠️ Constraint: JSON.parse(JSON.stringify()) is NOT allowed

8️⃣ Infinite Curry Function

Support unlimited function chaining.

sum(1)(2)(3)(4)() // 10
9️⃣ Event Emitter (Node.js Style)

Create a custom event system.

emitter.on("click", fn)
emitter.emit("click")
🔟 Retry API Call with Limit

Retry a failed API call up to a certain number of times.

retry(fetchData, 3)

📌 Use Case: Network reliability handling

🎯 هدف (Goal)
Improve problem-solving skills
Master JavaScript fundamentals deeply
Prepare for real-world frontend/backend challenges
Crack technical interviews 🚀
💡 Bonus Ideas
Add unit tests (Jest)
Convert to TypeScript
Create visual demos (React)
Benchmark performance

🛠 Tech Stack
JavaScript (ES6+)
Browser APIs
⭐ Support

If you found this useful, consider giving a ⭐ on your repository!
