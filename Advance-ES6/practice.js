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


