// ১️⃣ Array Destructuring

// Array Destructuring দিয়ে আমরা একটি array এর মানগুলো সহজভাবে ভেরিয়েবলে assign করতে পারি।

// const numbers = [10, 20, 30];

// পুরনো পদ্ধতি:
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];
// console.log(a, b, c); // 10 20 30

// Array Destructuring:
// const [x, y, z] = numbers;
// console.log(x, y, z); // 10 20 30

// কিছু advanced trick:
// Skip value

// const numbers = [10, 20, 30];
// const [first, , third] = numbers; // 2nd মান skip
// console.log(first, third); // 10 30

// Default value

// const numbers = [10];
// const [a, b = 50] = numbers; // b এর value set হলো 50
// console.log(a, b); // 10 50



// ২️⃣ Object Destructuring

// Object Destructuring দিয়ে object এর properties সরাসরি ভেরিয়েবলে assign করা যায়।



// const person = {
//   name: "Jihad",
//   age: 25,
//   city: "Dhaka"
// };

// পুরনো পদ্ধতি:
// const name = person.name;
// const age = person.age;
// console.log(name, age); // Jihad 25

// // Object Destructuring:
// const { name, age, city } = person;
// console.log(name, age, city); // Jihad 25 Dhaka

// Advanced trick:

// Variable rename

// const { name: fullName, age: years } = person;
// console.log(fullName, years); // Jihad 25

// Default value
// const { name, country = "Bangladesh" } = person;
// console.log(name, country); // Jihad Bangladesh

// Nested object destructuring

// const person = {
//   name: "Jihad",
//   address: {
//     city: "Dhaka",
//     zip: 1216
//   }
// };

// const { address: { city, zip } } = person;
// console.log(city, zip); // Dhaka 1216



// 💡 মোটামুটি মূল ধারণা:

// Array destructuring এর জন্য [] ব্যবহার হয়।

// Object destructuring এর জন্য {} ব্যবহার হয়।

// তুমি চাইলে default value, skip, rename, nested সব করতে পারো।




// practice task
const fruits = ["apple", "banana", "mango", "orange"];
const [, second, , fourth] = fruits;
console.log(second, fourth)


const student = {
  name: "Rafi",
  age: 20,
  grade: "A"
};

const {name, grade} = student;
console.log(name, grade);


const data = [
  { name: "Jihad", age: 25 },
  { name: "Rafi", age: 20 },
  { name: "Slayed", age: 22 }
];

const [firstperson, , thirdperson] = data;
const {name: firstName} = firstperson;
const {name: thirdName} = thirdperson;
console.log(firstName, thirdName);



