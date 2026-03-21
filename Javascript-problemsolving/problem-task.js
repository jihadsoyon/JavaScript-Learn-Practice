/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */

// function inchToFeet(inch){
//   const feet = inch / 12;
//   return feet;
// }

// const shuvoHeight = inchToFeet(70);
// console.log(shuvoHeight);

function celstoFahrenhite(cels){
  const Fahrenheit = (cels * 9 / 5)+ 32 ;
  return Fahrenheit;
}
const ansfahrenhite = celstoFahrenhite(100);
console.log(ansfahrenhite);


/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

function allNumbers(numbers){
  let count = 0;
  for (let number of numbers){
    if(number === 5){
      count++; 
    }
  }
  return count;
}
const results = allNumbers([5,6,11,12,98, 5, 5, 5, 5]);
console.log(results);

/** Task-3:
 * Write a function to count the number of vowels in a string.
 */

// let str = 'apple and bananaA';
// let count = 0;
// for (let i = 0; i < str.length; i++){
//   if(str[i] === 'a'){
//     count++;
//   }
// }
// console.log(count);


function allVowels(vowels){
  let count = 0;
  for (let vowel of vowels){
    if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
      count++;
    }
  }
  return count;
}

let str = allVowels('education');
console.log(str);



/** Task 04:
 * Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
 */

/** 🧠 Step by Step ব্যাখ্যা
 * 
🔹 Step 1: Function তৈরি করা
function longestWord(sentence) {


👉 এই function একটা string sentence নেবে।

🔹 Step 2: sentence কে array বানানো
let words = sentence.split(" ");


👉 split(" ") কী করে?

Sentence:

"I am learning Programming to become a programmer"


Array বানাবে:

["I", "am", "learning", "Programming", "to", "become", "a", "programmer"]


👉 কারণ word গুলো space দিয়ে আলাদা।

🔹 Step 3: longest নামের variable নেওয়া
let longest = "";


👉 শুরুতে longest word খালি string রাখছি
👉 পরে আস্তে আস্তে বড় word পেলেই এখানে বসাবো।

🔹 Step 4: Loop দিয়ে সব word চেক করা
for (let word of words) {


👉 এক এক করে সব word নেবে:

I

am

learning

Programming

to

become

a

programmer

🔹 Step 5: word এর length তুলনা করা
if (word.length > longest.length) {


👉 যদি বর্তমান word টা আগের longest word থেকে বড় হয়
👉 তাহলে সেটাকেই longest বানাবো।

🔹 Step 6: longest update করা
longest = word;


👉 বড় word পেলে longest এর ভেতরে রেখে দিচ্ছি।

🔹 Step 7: Loop শেষ হলে result return
return longest;
*/

function longestWord(sentence){
  let words = sentence.split(" ");
  let longest = "";
  for(let word of words){
    if(word.length > longest.length){
      longest = word;
    }
  }
  return longest;
}

let finalSentence = longestWord("I am learning Programming to become a programmer");
console.log(finalSentence);


/**
 * Task-5:
Generate a random number between 10 to 20.
 */

const rand = Math.floor (Math.random()*11)+10;
console.log(rand)








