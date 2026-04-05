// 1️⃣ null

// null is an intentional “empty” or “no value” value.

// Developers themselves use null to leave a variable or property empty.

// Type: object (this is a historic bug in JavaScript, but it still exists)

// Example:

// let user = null; // Developer intentionally leaves it empty
// console.log(user); // null
// console.log(typeof user); // "object"

// 1️⃣ undefined

// undefined is the value automatically assigned when a variable is declared but not assigned a value.

// This happens in the following cases:

// Why is undefined:

// Variable declared but not assigned a value

// let a;
// console.log(a); // undefined

// Function has no return value

// function greet() {}
// console.log(greet()); // undefined

// Invalid property access

// const obj = {name: "Riyadh"};
// console.log(obj.age); // undefined → age property not present

// No arguments given to function

// function add(a, b) { return a + b; }
// console.log(add(5)); // NaN, because b is undefined

// Type: undefined