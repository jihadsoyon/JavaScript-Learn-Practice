1️. Deep Flatten Array

No matter how deep the nested array is, make it completely flat

flatten([1, [2, [3, [4]], 5]])
// output: [1,2,3,4,5]

2️. Debounce Function

Create a function that will execute with a delay if called rapidly

debounce(fn, 500)

Real use: search input optimization

3️. Throttle Function

Run the function only once in a specified time

throttle(fn, 1000)

Real use: scroll event

4️. Custom Promise.all()

Implement it yourself

myPromiseAll([p1, p2, p3])

Output: Return the result if all are resolved

5️. LRU Cache

Implement Least Recently Used cache

const cache = new LRUCache(2)
cache.put(1, 1)
cache.get(1)

Real use: browser caching

6️. Group By Function

Group an array

groupBy(users, "age")

7️. Deep Clone Object

clone nested object (no reference)

deepClone(obj)

JSON.parse cannot be used

8️. Infinite Curry Function

unlimited chaining support করবে

sum(1)(2)(3)(4)() // 10

9️. Event Emitter (Node.js style)

 custom event system বানাও

emitter.on("click", fn)
emitter.emit("click")

10. Retry API Call with Limit

API fail হলে retry করবে

retry(fetchData, 3)