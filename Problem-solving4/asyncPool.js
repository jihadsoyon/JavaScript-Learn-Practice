async function asyncPool(poolLimit, tasks, taskFn) {
  const results  = [];
  const executing = new Set();

  for (const task of tasks) {
    const p = Promise.resolve()
      .then(() => taskFn(task))
      .finally(() => executing.delete(p));  // auto-cleanup

    results.push(p);
    executing.add(p);

    if (executing.size >= poolLimit) {
      await Promise.race(executing);  // 🔑 the throttle valve
    }
  }

  return Promise.all(results);
}


// Simulate an async task (e.g., API call)
function fakeApiCall(taskId) {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Task ${taskId} done`);
      resolve(`Result-${taskId}`);
    }, delay);
  });
}

// Run it!
const tasks = [1, 2, 3, 4, 5, 6];

asyncPool(2, tasks, fakeApiCall).then((results) => {
  console.log("\n🎯 All done!", results);
});