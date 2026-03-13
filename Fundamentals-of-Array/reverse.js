//
const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// const reversed = numbers.reverse();

// console.log(reversed);

const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++){
  const num = numbers[i];
  reversed_numbers.unshift(num);
}

console.log(reversed_numbers);

const rev_numbers = [];
for (const num of numbers){
  console.log(num);
  rev_numbers.unshift(num);
}
console.log(rev_numbers);

/**Explanation
 * আগে এক লাইনে মূল পার্থক্য

১ নম্বর কোড: সামনে থেকে পড়া + সামনে বসানো (unshift)
২ নম্বর কোড: পেছন থেকে পড়া + শেষে বসানো (push)

এখন ভেঙে বলি 👇

🟢 Code–1
for (const num of numbers){
  rev_numbers.unshift(num);
}

এখানে কী হচ্ছে?

for...of loop 👉 array শুরু থেকে শেষ পর্যন্ত যায়
👉 1 → 2 → 3 → 4 → 5 → 6 → 7

কিন্তু unshift(num) 👉 প্রতিটা element array-এর শুরুতে বসাচ্ছে

ধাপে ধাপে দেখো
পড়া হলো	rev_numbers
1	[1]
2	[2, 1]
3	[3, 2, 1]
4	[4, 3, 2, 1]
5	[5, 4, 3, 2, 1]
6	[6, 5, 4, 3, 2, 1]
7	[7, 6, 5, 4, 3, 2, 1]
কেন unshift?

👉 কারণ loop সামনে থেকে আসছে
👉 উল্টো বানাতে হলে সামনে বসাতে হবে

🔵 Code–2
for(let i = numbers.length -1 ; i >= 0; i--){
  rev_rev_numbers.push(num);
}

এখানে কী হচ্ছে?

loop শুরু হচ্ছে শেষ index থেকে
👉 7 → 6 → 5 → 4 → 3 → 2 → 1

push(num) 👉 element array-এর শেষে বসাচ্ছে

ধাপে ধাপে দেখো
পড়া হলো	rev_rev_numbers
7	[7]
6	[7, 6]
5	[7, 6, 5]
4	[7, 6, 5, 4]
3	[7, 6, 5, 4, 3]
2	[7, 6, 5, 4, 3, 2]
1	[7, 6, 5, 4, 3, 2, 1]
কেন push?

👉 কারণ loop নিজেই উল্টো দিক থেকে আসছে
👉 তাই শেষে বসালেই ঠিক থাকে

🧠 তাহলে আসল পার্থক্যটা কী?
বিষয়	Code–1	Code–2
Loop direction	সামনে → পেছনে	পেছনে → সামনে
Method	unshift()	push()
Logic	সামনে পড়া, সামনে বসানো	পেছন পড়া, শেষে বসানো
Performance	একটু slow	faster ✅
Clean logic	মাঝারি	সবচেয়ে clean ⭐
⭐ কোনটা ভালো?

👉 Code–2 বেশি ভালো (real world / interview)
কারণ:

push() fast

logic clear

large array এ better performance

🔥 মনে রাখার ট্রিক

যেদিক থেকে পড়ো, উল্টো দিকে বসাও
সামনে পড়লে → unshift
পেছন পড়লে → push

চাও তো আমি এটাকে একটা ছবি / flow diagram style এ বুঝিয়ে দিতে পারি 😄
 */

// Decremental for loop reversed side
const rev_rev_numbers = [];
for(let i = numbers.length -1 ; i >= 0; i--){
  const num = numbers[i];
  console.log(num);
  rev_rev_numbers.push(num);
}

console.log(rev_rev_numbers);






const shonkha = [12, 23, 34, 45, 67, 78, 89 ,90];
console.log(shonkha);

const reverse = shonkha.reverse();
console.log(reverse);








//string reversed
// const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

// console.log(friends);
// const reversed = friends.reverse();
// console.log(reversed);













