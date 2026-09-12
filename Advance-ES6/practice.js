// Task 1 — ! vs !!



console.log(!true);
console.log(!false);

console.log(!!"hello");
console.log(!!"");
console.log(!!0);
console.log(!!100);
console.log(!!null);
console.log(!![]);


// false
// true

// true
// false
// false
// true
// false
// true






// Task 2 — Scope
let name = "Jihad";

function test() {
  let age = 25;

  console.log(name);
  console.log(age);
}

test();

console.log(name);
console.log(age);

// Ans:
// Jihad
// 25
// Jihad
// ReferenceError


function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());


// Ans:
// 1
// 2
// 3







// Task 4 — Callback Function
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Jihad", sayBye);

// Ans:
// Hello Jihad
// Goodbye!



// Task 5 — Pass by Value


let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

// Ans:
// 10
// 20


// Task 6 — Object Reference


const user1 = {
  name: "Jihad"
};

const user2 = user1;

user2.name = "Rahim";

console.log(user1.name);
console.log(user2.name);

// Ans:
// Rahim
// Rahim


// Task 7 — map()

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

// Ans:
// [2, 4, 6, 8, 10]


// Task 8 — forEach()

const users = ["Jihad", "Rahim", "Karim"];

users.forEach(user => {
  console.log(`Hello ${user}`);
});

// Ans:
// Hello Jihad
// Hello Rahim
// Hello Karim


// Task 9 — filter()


const numberss = [10, 15, 20, 25, 30];

const result = numberss.filter(num => num >= 20);

console.log(result);

// Ans:
// [20, 25, 30]





// Task 10 — reduce()


const nnumbers = [10, 20, 30, 40];

const total = nnumbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total);


// Ans:
// 100




// Task 11 — find()


const userrs = [
  { id: 1, name: "Jihad" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" }
];

const user = userrs.find(user => user.id === 2);

console.log(user);

// Ans:
// {
//   id: 2,
//   name: "Rahim"
// }





// // 🧠 PART 1 — Primitive vs Non-Primitive


// // 🔥 Task 1 — Copy or Reference?


// let a = 10;
// let b = a;

// b = 50;

// console.log(a);
// console.log(b);

// //10, 50


// const user1 = {
//     name: "Jihad"
// };

// const user2 = user1;

// user2.name = "Soyon";

// console.log(user1.name);
// console.log(user2.name);


// //soyon, soyon


// // ☠️ Task 2 — Nested Reference Trap


// const user = {
//     name: "Jihad",
//     skills: ["HTML", "CSS"],
//     address: {
//         city: "Jamalpur"
//     }
// };

// const newUser = { ...user };

// newUser.name = "Rahim";
// newUser.skills.push("JavaScript");
// newUser.address.city = "Dhaka";

// console.log(user);
// console.log(newUser);

// //Ans:
// // console.log(user);
// // {
// //   name: "Jihad",
// //   skills: ["HTML", "CSS", "JavaScript"],
// //   address: { city: "Dhaka" }
// // }

// // // console.log(newUser);
// // {
// //   name: "Rahim",
// //   skills: ["HTML", "CSS", "JavaScript"],
// //   address: { city: "Dhaka" }
// // }




// 🧩 PART 2 — undefined vs null

// 🔥 Task 3 — Detective Mode

// let a;

// let b = null;

// const obj = {};

// function test() {}

// console.log(a);
// console.log(b);
// console.log(obj.name);
// console.log(test());



// 💀 PART 3 — ! vs !!


// 🔥 Task 4


// console.log(!true);
// console.log(!false);

// console.log(!0);
// console.log(!1);

// console.log(!"");
// console.log(!"Jihad");

// console.log(!null);
// console.log(!undefined);

// console.log(!!0);
// console.log(!!1);

// console.log(!!"");
// console.log(!!"Jihad");

// ans:
// false
// true
// true
// false
// true
// false
// true
// true
// false
// true
// false
// true



// 🔥 PART 4 — == vs ===


// Task 5 — Equality Killer


// console.log(5 == "5"); // true
// console.log(5 === "5"); 

// console.log(0 == false);
// console.log(0 === false);

// console.log("" == false);
// console.log("" === false);

// console.log(null == undefined);
// console.log(null === undefined);

// console.log([] == false);
// console.log([] === false);

// console.log("0" == false);
// console.log("0" === false);


// ans:
// true
// false
// true
// false
// true
// false
// true
// false
// true
// false
// true
// false



// ☠️ PART 5 — Scope

// Task 6 — Scope War


// let global = "Global";

// function outer() {

//     let outerValue = "Outer";

//     function inner() {

//         let innerValue = "Inner";

//         console.log(global);  // "Global"
//         console.log(outerValue); // "Outer"
//         console.log(innerValue);  // "Inner"
//     }

//     inner();
// }

// outer();


//////////////

// function test() {

//     if (true) {
//         let a = 10;
//         var b = 20;
//     }

//     console.log(b); // 20
//     console.log(a); // it will show an error i think
// }

// test();



// 💀 PART 6 — Hoisting Boss


// console.log(a); // it will return undefined

// var a = 10;


// console.log(b);// it will return refrence error

// let b = 20;




// sayHello();  // it will work

// function sayHello() {
//     console.log("Hello");
// }


// test(); // it will not work

// const test = function () {
//     console.log("Testing");
// };



// 🔥 PART 7 — Closure


// Task 8 — Closure Memory


// function counter() {

//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter1 = counter();
// const counter2 = counter();

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter2()); // 1
// console.log(counter1()); // 3 bcz it can remember the last value
// console.log(counter2()); // 2 bcz it can remember the last value


// ☠️ PART 8 — Callback Function


// function process(name, callback) {

//     console.log("Processing:", name);

//     callback();

//     console.log("Finished");
// }

// function done() {
//     console.log("Callback executed");
// }

// process("Jihad", done);


// ans:

// Processing: Jihad

// Callback executed

// Finished



// function calculate(a, b, callback) {

//     const result = a + b;

//     callback(result);
// }

// calculate(10, 20, function (value) {
//     console.log(value * 2);
// });



//60


// 🔥 PART 9 — Pass by Value / Reference


// Task 10 — Mutation vs Reassignment


// let x = 10;

// function change(value) {
//     value = 100;
// }

// change(x);

// console.log(x);

//it will return 10


//////////

// const arr = [10, 20];

// function changeArray(value) {
//     value[0] = 100;
// }

// changeArray(arr);  

// console.log(arr);  // [100, 20] 



//////////


// const arr = [10, 20];

// function changeArray(value) {
//     value = [100, 200];
// }

// changeArray(arr);

// console.log(arr); // it will not change aqnything in the main the array





// 💀 PART 10 — arguments


// function test(a, b) {

//     console.log(a);
//     console.log(b);
//     console.log(arguments.length);
//     console.log(arguments[2]);
//     console.log(arguments[4]);
// }

// test(10, 20, 30, 40, 50);



// function maximum() {
// const arg = [...arguments]
// let highest = arg[0]
// for(const high of arg){
//     if(high > highest){
//         highest = high
//     }

// }
// return highest
// }

// console.log(maximum(10, 50, 30, 90, 20));



// 🟠 PART 11 — map vs forEach


// const numbers = [1, 2, 3, 4];

// const result = numbers.map(num => {
//     console.log(num * 2);  // it will return double of the element of the array
// });

// console.log(result);  // it will rturn   undefined bcz it needs return 


// 🔥 PART 12 — Filter / Find


// const users = [
//     { name: "Jihad", age: 25, active: true },
//     { name: "Rahim", age: 17, active: true },
//     { name: "Karim", age: 30, active: false },
//     { name: "Hasan", age: 22, active: true },
//     { name: "Sakib", age: 30, active: true }
// ];


// const eighteenUsers = users.filter(user => {
//     return user.age > 18;
// })

// // console.log(eighteenUsers);


// const thirtyAge = users.find(user => user.age === 30)
// // console.log(thirtyAge);



// const activeUser = users.filter(user => user.active);
// // console.log(activeUser);


// const atharoPlusActive = users.filter(user => {
//     return user.age > 18 && user.active
// })


// console.log(atharoPlusActive);



// ☠️ PART 13 — Reduce



// const products = [
//     { name: "Laptop", price: 80000, quantity: 1 },
//     { name: "Mouse", price: 1500, quantity: 2 },
//     { name: "Keyboard", price: 3000, quantity: 3 },
//     { name: "Monitor", price: 25000, quantity: 2 }
// ];


// const totalPrice = products.reduce((acc, product)=>{
// return acc + product.price
// }, 0)


// console.log(totalPrice);


// const totalQuantity = products.reduce((acc, product)=> {
//     return acc + product.quantity
// }, 0)

// console.log(totalQuantity);



// const inventoryValue = products.reduce((acc, product)=> {
//     return acc + product.price * product.quantity
// }, 0)

// console.log(inventoryValue);


// ☠️☠️ PART 14 — Ultimate Mixed Boss


const employees = [
    {
        name: "Jihad",
        age: 25,
        salary: 60000,
        skills: ["JS", "React"],
        active: true
    },
    {
        name: "Rahim",
        age: 17,
        salary: 40000,
        skills: ["HTML", "CSS"],
        active: true
    },
    {
        name: "Karim",
        age: 30,
        salary: 80000,
        skills: ["JS", "Node"],
        active: false
    },
    {
        name: "Hasan",
        age: 28,
        salary: 90000,
        skills: ["React", "Next"],
        active: true
    }
];


function analyzeEmployees(...employees) {

    const employeee = [...employees]
const newEmployees = employeee.filter(employe => {
    return employe.active && employe.age >= 18;
})


const finalEmployees = newEmployees.map(employ => {
    return {  
        name: employ.name,
        salary:  employ.salary, 
        skillCount:  employ.skills.length
        }



        
    
})


const totalSlary = newEmployees.reduce((acc, empoy)=>{
  return acc + (empoy.salary)
}, 0)

const highestSalary = newEmployees.find(emplo => emplo.salary > 80000)

return {
  finalEmployees,
  totalSlary,
  highestSalary
};

}


console.log(analyzeEmployees(...employees));



// 💀💀 FINAL INTERVIEW BOSS

var x = 10;

function outer() {

    let x = 20;

    return function inner() {

        let x = 30;

        return function () {

            x++;

            return x;
        };
    };
}

const a = outer(); 
const b = a();
const c = a();

console.log(b()); // 31
console.log(b());  //32
console.log(c());  //32

const arr = [1, 2, 3];

function modify(value) {

    value.push(4);

    value = [10, 20];

    return value;
}

console.log(modify(arr)); // [10, 20]
console.log(arr);   //[1, 2, 3, 4]

function sum() {

    const numbers = [...arguments];

    return numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6)); //24