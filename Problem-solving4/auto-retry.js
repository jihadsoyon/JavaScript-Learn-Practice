// Promise.retry implementation
function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt(currentTry) {
      fn()
        .then(resolve)
        .catch((error) => {
          if (currentTry < retries) {
            console.log(`Retrying... attempt ${currentTry + 1}`);
            setTimeout(() => {
              attempt(currentTry + 1);
            }, delay);
          } else {
            reject(error);
          }
        });
    }

    attempt(0);
  });
}

//////////////
// 🔥 Demo API (fails first 2 times, then succeeds)

let count = 0;

function fakeApi() {
  return new Promise((resolve, reject) => {
    count++;
    console.log("API Call attempt:", count);

    if (count < 3) {
      reject("API Failed ❌");
    } else {
      resolve("API Success ✅");
    }
  });
}

//////////////
// 🚀 Run

retry(fakeApi, 3, 1000)
  .then((res) => console.log("Result:", res))
  .catch((err) => console.log("Final Error:", err));