// 🟢 Step 1: What is Truthy and Falsy?

// When we use if condition in JavaScript, the values ​​are automatically converted to boolean.

// This is called Boolean Coercion

// if (value) {

// console.log("True");
// }

// Here if value acts as true → Truthy
// and acts as false → Falsy

// 🔴 Step 2: Falsy Values ​​(the most important part)

// There are only 6 falsy values ​​in JavaScript.

// It's good to memorize these 👇

// ❌ 1. false
// if(false) // false
// ❌ 2. 0
// if(0) // false
// ❌ 3. -0
// if(-0) // false
// ❌ 4. "" (empty string)
// if("") // false
// ❌ 5. null
// if(null) // false
// ❌ 6. undefined
// if(undefined) // false
// ❌ 7. NaN
// if(NaN) // false
// ⚠️ It is usually called 6, but technically it is also considered 7 (including false).

// 🟢 Step 3: Truthy Values

// 👉 Everything except the above falsy is truthy

// ✅ Some common truthy examples:
// "hello" // is a string → true
// "0" // is a string → true
// "false" // is also a string → true
// 1 // true
// -10 // true
// [] // empty array → true
// {} // empty object → true
// function(){} // true
// 🧠 Step 4: Important Confusing Examples
// ❓ Is [] truthy?

// ✔️ Yes

// ❓ Is {} truthy?

// ✔️ Yes

// ❓ Is "0" truthy?

// ✔️ Yes (because it's a string)

// ❓ Is 0 truthy?

// ❌ No (it's falsy)

// 🔥 Easy Trick To Remember

// 👉 Just remember these:

// false
// 0
// ""
// null
// undefined
// NaN
// Everything else is truthy.

// 🟡 Step 5: Practical Example
let userInput = "";

if(userInput){
console.log("User entered something");
} else {
console.log("Empty input");
}

// Here "" is falsy so else will work.