/**
 * Task-1:
 *  Count how many times a string has the letter a
 * Bujte hobe abar
 */

/**Explanation
 * Step 1: String নেওয়া হয়েছে
let str = 'apple and bananaA';


এখানে str নামের একটি ভ্যারিয়েবল নিয়েছো।

এর ভেতরে আছে:

apple and bananaA


👉 মনে রাখবে: JavaScript এ string এর প্রতিটি অক্ষরের index থাকে।

অক্ষর	index
a	0
p	1
p	2
l	3
e	4
(space)	5
a	6
n	7
d	8
...	...
✅ Step 2: Count variable নেওয়া হয়েছে
let count = 0;


এখানে count শুরুতে 0 দেওয়া হয়েছে।

👉 কারণ এখনো আমরা কোনো 'a' পাইনি।

✅ Step 3: Loop চালানো হয়েছে
for (let i = 0; i < str.length; i++)


এখানে কী হচ্ছে?

i = 0 → প্রথম index থেকে শুরু

i < str.length → যতক্ষণ string শেষ না হয়

i++ → প্রতি বার ১ করে বাড়বে

মানে পুরো string এক এক করে চেক করবে।

✅ Step 4: প্রতিটা অক্ষর চেক করা হচ্ছে
if(str[i] === 'a')


এখানে:

str[i] মানে string এর প্রতিটা অক্ষর

যদি অক্ষরটা ছোট হাতের 'a' হয়

তাহলে count বাড়বে

✅ Step 5: Count বাড়ানো
count++;


এটা মানে:

count = count + 1;


যখনই 'a' পাবে → ১ যোগ হবে।

✅ Step 6: শেষ পর্যন্ত output দেখানো
console.log(count);


Output হবে:

4


কারণ:

apple and bananaA


এখানে ছোট হাতের 'a' আছে ৪টা।

⚠️ বড় হাতের 'A' (শেষেরটা) count হয়নি কারণ তুমি লিখেছো:

if(str[i] === 'a')


এটা case-sensitive (মানে ছোট-বড় আলাদা ধরে)।
 */
const letters = 'Apple and Bananaa';
let counts = 0;
for(i= 0; i < letters.length; i++){
  if(letters[i] === 'a'){
    counts++;
  }
}

console.log(counts)
/**
 * Task-2:
 * Count how many times a string has the letter a or A
 */

const puraBakko = 'Aaple aAnd BAnana';
let count = 0;
for(i = 0; i< puraBakko.length; i++){
  if(puraBakko[i] === 'a' || puraBakko[i] === 'A'){
    count++;
  }
  
}
console.log(count);

/**
 * Task-3:
 * Check whether a string contains all the vowels a, e, i, o, u
 */
 
const vowelHeader = 'Education'.toLowerCase();
const hasVowels =
 vowelHeader.includes('a') &&
 vowelHeader.includes('e') &&
 vowelHeader.includes('i') &&
 vowelHeader.includes('o') &&
 vowelHeader.includes('u');

console.log(hasVowels)

/**
 * Task-4:
 * If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 */

/**🔍 কী হচ্ছে এখানে?
 * 
🔹 /x/g

x খুঁজবে

g মানে global (সবগুলো replace করবে)

🔹 .replace(/x/g, 'y')

সব ছোট x → y হবে

🔹 .replace(/X/g, 'Y')

সব বড় X → Y হবে
 */

const text = "Xerox xylophone XBOX extra";
const result = text .replace(/x/g, 'y') .replace(/X/g, 'Y');
console.log(result);


/**
 * Task-5:
 * Capitalize Every first Letter of each word in a String
 * etar explanation dekte hobe
 */

/**Explanation
 * Step 1: String নেওয়া
let str = "i am learning javascript";

🔹 Step 2: String কে array তে ভাঙবো (split)
let words = str.split(" ");


👉 " " (space) দিয়ে split করেছি
এখন words হবে:

["i", "am", "learning", "javascript"]

🔹 Step 3: Empty array নেবো নতুন word রাখার জন্য
let result = [];

🔹 Step 4: Loop দিয়ে প্রতিটা word ধরবো
for(let i = 0; i < words.length; i++){

🔹 Step 5: প্রতিটা word এর প্রথম অক্ষর বড় করবো
let word = words[i];

let capitalized =
  word[0].toUpperCase() + word.slice(1);

এখানে কী হলো?

word[0] → প্রথম অক্ষর

.toUpperCase() → বড় হাতের বানালো

word.slice(1) → ১ নম্বর index থেকে বাকিটা

👉 দুইটা একসাথে যোগ করেছি।

🔹 Step 6: নতুন word array তে রাখবো
result.push(capitalized);

🔹 Step 7: আবার string বানাবো (join)
let finalResult = result.join(" ");

🔹 Step 8: Output দেখাবো
console.log(finalResult);
 */


const mainBakko = 'bandarban is a attractive place';
let words = mainBakko.split(" ");
let results = [];
for(let i = 0; i < words.length; i++){
  let word = words[i];
  let capitalized = word[0].toUpperCase()+word.slice(1);
  results.push(capitalized);
}

let finalResult = results.join(" ");
console.log(finalResult)


// console.log(mainBakko.split(' '))

// const Spot = 'Bandarban is a attractive place';

// const names = Spot.split(' ');

// let newName = '';

// for(let i = 0; i < names.length; i++){
//   if(names[i].length > 0){
//     newName += names[i][0].toUpperCase()+names[i].slice(1)
//   }
//   if(i !== names.length - 1){
//     newName += ' '
//   }
// }
// console.log(newName)






