// 1. What is Scope?

// Scope is a place where a variable or function can be accessed.

// That is, Scope determines from where a variable can be seen or used.

// There are basically 3 types of scope in JavaScript:

// Global Scope

// Function Scope

// Block Scope

// 2. Global Scope

// If you create a variable outside a function, it is in the global scope.

// let name = "Jihad"; // global scope

// function greet() {
// console.log("Hello " + name); // global variables can be used
// }

// greet(); // Output: Hello Jihad
// console.log(name); // Output: Jihad

// Note: Variables in global scope can be accessed from everywhere.

// 3. Function Scope

// Variables that are declared inside a function are in the function scope.
// These variables are not visible outside the function.

// function greet() {
// let message = "Hello World"; // function scope
// console.log(message); // Output: Hello World
// }

// greet();
// console.log(message); // Error: message is not defined

// Note: var variables also follow function scope.

// 4. Block Scope

// Block scope is the scope of variables inside { }.
// In JavaScript, let and const follow block scope, but var does not.

// if (true) {
// let age = 25; // block scope
// const city = "Dhaka";
// var country = "Bangladesh"; // var is NOT block scoped
// console.log(age); // Output: 25
// }

// console.log(city); // Error: city is not defined
// console.log(age); // Error: age is not defined
// console.log(country); // Output: Bangladesh

// Key Differences:

// let and const → block scoped

// var → function scoped (ignores block)

// 5. Scope Chain

// When a variable is found in JavaScript, the scope chain is used to find it:

// First the local scope (the function or block you are inside)

// Then the parent scope

// Finally the global scope

// let name = "Jihad"; // global

// function greet() {
// let name = "Soyon"; // local
// console.log(name); // Output: Soyon
// }

// greet();
// console.log(name); // Output: Jihad
// 6. Summary Table
// Scope Type Example Accessed From
// Global Scope let a = 10; Anywhere
// Function Scope function f(){let b=5;} Inside the function
// Block Scope { let c=7; } Only inside the block

// 💡 Tips:

// Always use let or const, var can have many subtle bugs.

// Create variables in small functions or blocks, to avoid global contamination.

// Practice Task:

let globalVar = "Global";

function outerFunction() {
let outerVar = "Outer";

if (true) {
let blockVar = "Block";

var functionVar = "FunctionVar";

// console.log(globalVar); // Line A
console.log(outerVar); // Line B
// console.log(blockVar); // Line C
}

// console.log(functionVar); // Line D
// console.log(blockVar); // Line E
}

outerFunction();
// console.log(globalVar); // Line F
// console.log(outerVar); // Line G
// console.log(functionVar); // Line H

// Your task:

// Line A → What will be the output?

// Line B → What will be the output?

// Line C → What will be the output?

// Line D → What will be the output?

// Line E → What will be the output?

// Line F → What will be the output?

// Line G → What will be the output?

// Line H → What will be the output?