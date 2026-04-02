//explain arrow function

console.log(add(10, 20));
//function declaration
function add(num1, num2){
  return num1 + num2;
}

// console.log(add2(30, 40)); eta ekhane declare hobe na

//function expression
const add2 =  function ( num1, num2){
  return num1 + num2;
}
console.log(add2(30, 40));


//arrow function syntax
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

const multiply = (a, b, c) => a * b * c;
console.log(multiply(10, 20, 30));

const tenTimes = X => X / 10;
console.log(tenTimes(100));

const minus = (a, b) => a-b;
console.log(minus(20, 1))

// document.getElementById('btn').addEventListener('click', () => {});
// document.getElementById('btn').addEventListener('click', (event) => {});


// Task 1: Square of Numbers

// একটা array আছে: [2, 5, 8, 10]

// Arrow function ব্যবহার করে প্রতিটি সংখ্যার square বের করো।

// Output হবে [4, 25, 64, 100]

 const calculatesqr = (arr) => {
   const sqaurre = [];
  for(let num of arr){
    sqaurre.push (num * num) ;
  }
  return sqaurre;

 }

 console.log(calculatesqr([2, 5, 8, 10]))

 
const sumof = (a, s, f, g) => a + s + f + g;
console.log(sumof(10, 20, 30, 40))


// Task 4: Greet User

// Arrow function ব্যবহার করে একটা function বানাও যা নাম নেয় এবং "Hello, [name]!" রিটার্ন করে।

// উদাহরণ: greet("Jihad") → "Hello, Jihad!"

const newarr = (newa) => `Hello, ${newa}`;
console.log(newarr('Jihad'))

const multi = (j, b) => j * b;
console.log(multi(4, 5))






