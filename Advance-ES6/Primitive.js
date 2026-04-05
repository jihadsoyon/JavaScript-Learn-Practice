let data = 4;
data = 'Tormuj';
data = true;
data = {price: 22}
data= []
console.log(typeof data);

//primitive types
let a = 4;
let b = 'Tormuj';
let c = false;
undefined
null
bigint
symbol

// non-primitive type
  
// 1.Object
let person = {
  name: "Jihad",
  age: 25
};

// 2. Array
let fruits = ["apple", "banana"];

// 3.Function
function greet() {
  console.log("Hello");
}


// 🔥 মূল পার্থক্য (Interview Friendly Table)
// বিষয়	             Primitive	               Non-Primitive
// ভ্যালু টাইপ	      Single value	             Multiple / Complex value
// Memory	           Stack	                   Heap
// Copy করলে	    Value copy হয়	              Reference copy হয়
// Mutable?	        ❌ Immutable	             ✅ Mutable


// 🔥 Immutable vs Mutable
// Primitive → Immutable
// let str = "Hello";
// str[0] = "H"; // change হবে না
// Non-Primitive → Mutable
// let arr = [1, 2, 3];
// arr[0] = 99;
// console.log(arr); // [99, 2, 3]


























