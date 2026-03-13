/**
 * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
 */

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const reversed = colors.reverse();
// console.log(reversed)
// let result = [];

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);


/**
 * 
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 76, 46]
 */
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let rsult = []
// for(const num of numbers){
//   if(num % 2 === 0){
//     // console.log(num);
//     rsult.push(num);
//   }
// }
// console.log(rsult)

/**
 * Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik'
 */


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let resul = '';
for(const nam of numbers){
resul= resul + nam;
}
console.log(resul);






/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output:
'person working hard a am I'
 */

/**Task 4 Explanation
 * Step by step Bangla Explanation
🔹 Step 1: Sentence নেওয়া
const statement = 'I am a hard working person';


এখানে একটি string sentence আছে।

🔹 Step 2: split(' ') দিয়ে words আলাদা করা
const words = statement.split(' ');


👉 split(' ') কী করে?

Space যেখানে আছে, সেখানে sentence কেটে দেয়

Output হয় একটি array

📦 এখন words এর মান:

['I', 'am', 'a', 'hard', 'working', 'person']

🔹 Step 3: Words গুলো reverse করা
const reversedWords = words.reverse();


👉 reverse() কী করে?

Array-এর element গুলোর position উল্টে দেয়

📦 এখন reversedWords:

['person', 'working', 'hard', 'a', 'am', 'I']


⚠️ খেয়াল করো:
শুধু word-এর জায়গা বদলেছে, spelling একই আছে।

🔹 Step 4: join(' ') দিয়ে আবার sentence বানানো
const result = reversedWords.join(' ');


👉 join(' ') কী করে?

Array → string বানায়

প্রতিটা word এর মাঝে space দেয়

📦 Result:

'person working hard a am I'

🔹 Step 5: Output দেখানো
console.log(result);


✅ Final Output:

person working hard a am I
 */

// const statement = 'I am a hard working person';

// const words = statement.split(' ');
// const reversedWords= words.reverse();
// const result = reversedWords.join(' ');
// console.log(result);


// //Task 5

// const nam = [1, 2, 3];
// console.log(nam);
// nam[0] = 99;
// console.log(nam);


/**Task 06 Explanation
 *  Task 6
 * 🪜 Step by step Bangla Explanation
🔹 Step 1: Array of objects তৈরি করা
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];


👉 এখানে:

students হলো একটি array

array-এর ভিতরে প্রতিটি element হলো একটি object

প্রতিটি object-এর ২টি property আছে:

name

marks

🔹 Step 2: for...of loop দিয়ে array traverse করা
for (const student of students) {


👉 for...of কী করে?

array-এর প্রতিটি element এক এক করে student variable এ রাখে

Iteration অনুযায়ী:

1st time → { name: "John", marks: 85 }

2nd time → { name: "Alice", marks: 90 }

🔹 Step 3: Object থেকে data নেওয়া
student.name
student.marks


👉 এখানে:

student.name → student-এর নাম

student.marks → student-এর নম্বর

🔹 Step 4: Output print করা
console.log(student.name + " scored " + student.marks);


👉 String concatenation করে output বানানো হয়েছে।

Execution অনুযায়ী:

"John" + " scored " + 85 → John scored 85

"Alice" + " scored " + 90 → Alice scored 90
 */

const students = [
  { name: "John ", marks: 85 },
  { name: "Alice ", marks: 90 }
]

for(const student of students){
console.log(student.name + 'scored ' + student.marks);

}

















