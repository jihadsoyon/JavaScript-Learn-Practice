// Custom myPromiseAll
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve([]);
            return;
        }

        let results = new Array(promises.length);
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// ============== Test ==============
function task(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task ${value} completed`);
            resolve(value);
        }, time);
    });
}

// Test
const p1 = task(300, "A");
const p2 = task(100, "B");
const p3 = task(200, "C");
const p4 = Promise.resolve("D");           // already resolved
const p5 = Promise.reject("Error occurred!");   // reject test

console.log("Starting myPromiseAll...");

myPromiseAll([p1, p2, p3, p4])
    .then(result => {
        console.log("✅ All resolved:", result);
    })
    .catch(err => {
        console.log("❌ Rejected:", err);
    });

// Reject test 
// myPromiseAll([p1, p2, p5])
//     .then(result => console.log(result))
//     .catch(err => console.log("Rejected with:", err));