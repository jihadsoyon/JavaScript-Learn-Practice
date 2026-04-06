// 1. What is Hoisting?

// Hoisting means:

// JavaScript automatically moves variable and function declarations to the beginning of their scope.

// Only declarations are moved, not value assignments.

// 2. Function Hoisting

// Function declarations are fully hoisted. So you can call them before declaring the function.

// greet(); // Output: Hello World

// function greet() {
// console.log("Hello World");
// }

// ✅ This works because the function declaration is hoisted with the entire function.

// 3. Variable Hoisting
// var

// The var declaration is hoisted but the value is not assigned, so it is undefined at the beginning.

// console.log(a); // Output: undefined
// var a = 5;
// console.log(a); // Output: 5

// Why?
// JS understands this internally:

// var a;
// console.log(a); // undefined
// a = 5;
// console.log(a); // 5
// let and const
// let and const are hoisted but are in the temporal dead zone (TDZ).
// Accessing them before declaration throws an error.

// console.log(b); // ReferenceError
// let b = 10;

// console.log(c); // ReferenceError
// const c = 20;

// ✅ TDZ means: variable not available until declaration.

// 4. Summary (Simple)
// Keyword Hoisted? Initial Value Before Assignment
// var Yes undefined
// let Yes TDZ → Error if accessed
// const Yes TDZ → Error if accessed
// function Yes Fully hoisted (callable)

// 💡 Simple Trick:

// var → declaration hoisted, value assigned later → undefined

// let/const → declaration hoisted but access error

// Function → entire function hoisted → can be called before

sayHello();

function sayHello() {
console.log("Hello from function!");
}

var greet = function() {
console.log("Hi!");
}

greet();