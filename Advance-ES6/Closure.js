// 🔥 What is a Closure? (in one line)

// 👉 A closure is a function that can remember variables from its parent scope—even after the parent function execution has finished.

// 🧠 Step 1: First, let's clear the Scope
// function outer() {
// let name = "Jihad";
// }

// Here, name is only accessible inside outer().
// Accessing it from outside will result in an error.

// This is the scope.

// 🧠 Step 2: Look at the Nested Function
// function outer() {
// let name = "Jihad";

// function inner() {
// console.log(name);
// }

// inner();
// }

// outer();
// What's going on here?

// inner() can't find the name inside itself

// Then it looks in the parent scope (outer)

// It finds it there

// 👉 This is the lexical scope

// 🧠 Step 3: The real Closure starts here

// Now let's give it a little twist 😈

// function outer() {
// let count = 0;

// return function inner() {
// count++;
// console.log(count);
// }
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3
// 🤯 What's going on here?

// outer() call

// count = 0 created

// inner() return

// Normally when outer() finishes, its variable should be deleted

// BUT it doesn't 😳

// Because inner() is still using count

// 👉 So JavaScript keeps count in memory
// 👉 This keeping process is Closure

// 🧩 Definition of Closure (Exam/Interview Ready)

// A closure is created when a function remembers the variables from its lexical scope even after the outer function has finished execution.

// 📦 Why is Closure needed?
// 1️⃣ To create a Private Variable
// function secret() {
// let password = "12345";

// return function() {
// console.log(password);
// }
// }

// const getPass = secret();
// getPass(); // 12345

// 👉 Password cannot be changed from outside
// 👉 It is made private

// 2️⃣ To create a Counter (Real-life use case)
// function createCounter() {
// let count = 0;

// return function() {
// return ++count;
// }
// }

// const myCounter = createCounter();

// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// ⚠️ The biggest mistake that everyone makes

// Using closure inside a loop causes a bug:

// for (var i = 0; i < 3; i++) {
// setTimeout(function() {
// console.log(i);
// }, 1000);
// }

// Output will be:

// 3
// 3
// 3

// Because var function scoped
// All closures reference the same i

// ✅ Solution
// for (let i = 0; i < 3; i++) {
// setTimeout(function() {
// console.log(i);
// }, 1000);
// }

// Now output:

// 0
// 1
// 2

// Because let block scoped
// A different closure is created for each iteration

// 🧠 Brain Hack (Memorization Trick)

// Closure means:

// Function + its surrounding memory = Closure