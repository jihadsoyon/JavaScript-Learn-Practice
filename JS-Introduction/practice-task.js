/**
 * Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
Output:
Print the result.
Sample Input:
1000
700
Sample Output:
300
 */
const money = 1000;
const orangePrice = 400;
const applePrice = 300;
const totalPrice = orangePrice + applePrice;
const returnHim = money - totalPrice;
console.log(returnHim);



/**
 * Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.
Sample Input:
75.25, 65, 80, 35.45, 99.50
Sample Output:
71.04
 */

const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;

const totalNumber = Mathematics + Biology + Chemistry + Physics + Bangla ;
const average = totalNumber / 5;
console.log(average.toFixed(2));


/**
 * Task-3
You task is to divide the given number by 5 and show the remainder as the output.
Input:
The first line of the input contains the number.
Output:
Print the remainder.
Sample Input:
119
Sample Output:
4
 */

const number = 119;
const output = 119 % 5;
console.log(output);


/** Review
 * ✅ Task-1 Review (Supermarket Return Money)
Your code (working):
const money = 1000;
const orangePrice = 400;
const applePrice = 300;
const totalPrice = orangePrice + applePrice;
const returnHim = money - totalPrice;
console.log(returnHim);

👍 What’s good

Clear variable names

Step-by-step calculation

Easy to read

🔧 Small improvement

Use data-driven values instead of hardcoding 400 & 300 separately from the problem statement.

const money = 1000;
const cost = 700;
const change = money - cost;
console.log(change);


Why?
If prices change, you update one variable, not many.

✅ Task-2 Review (Average Marks)
Your code (working):
const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;

const totalNumber = Mathematics + Biology + Chemistry + Physics + Bangla ;
const average = totalNumber / 5;
console.log(average.toFixed(2));

👍 What’s good

Correct formula

toFixed(2) used properly

Output matches sample exactly

🔧 Improvement (more scalable)

Use an array instead of many variables:

const marks = [75.25, 65, 80, 35.45, 99.5];
let total = 0;

for (const mark of marks) {
  total += mark;
}

const average = total / marks.length;
console.log(average.toFixed(2));


Why?

If subjects increase/decrease → no code rewrite

Real-world friendly

Cleaner & professional

✅ Task-3 Review (Remainder)
Your code (working):
const number = 119;
const output = 119 % 5;
console.log(output);

🔧 Tiny improvement

Use the variable instead of repeating the number:

const number = 119;
const remainder = number % 5;
console.log(remainder);


Why?

Avoid repetition

Easier to maintain

Good coding habit
 */





















