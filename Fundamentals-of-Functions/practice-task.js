/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result

 */

function number(num1, num2, num3, num4){
  const sum = num1 * num2 * num3 * num4;
  return sum;
}

const total = number(10, 10, 10, 10);
console.log('output', total);


/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */


function isOdd(numbers){
  if(numbers % 2 === 1){
    const result = numbers * 2;
    return result;
  }
}

const oddKina = isOdd(21);
console.log('output', oddKina);


function isEven(numbber){
  if(numbber % 2 === 0){
    const result = numbber / 2;
    return result;
  }
}

const evenKina = isEven(40);
console.log('Output:', evenKina);




/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr, size){
let sum = 0;
for (let i = 0; i < size; i++){
  sum = sum + arr[i];
}
let average = sum / size;
return average;
}

let numbers = [10, 20, 30, 40];
let result = make_avg(numbers, numbers.length);
console.log('result of average:', result);


/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(binaryString){
  let count = 0;
  for(let char of binaryString){
    if(char === '0'){
      count++;  //count = count + 1;
    }
  }
  return count;
}
const results = count_zero('10100100');
console.log(results);


/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

// function odd_even(number){
//   if(number % 2 === 0){
//     // সংখ্যা 2 দিয়ে ভাগ করলে ভাগশেষ 0 → Even
//     return "Even";
//   } else {
//     // ভাগশেষ 0 নয় → Odd
//     return "Odd";
//   }
// }

// // পরীক্ষা করার জন্য
// const testNumbers = [5, 8, 91, 24, 6];

// for (const num of testNumbers){
//   const result = odd_even(num);
//   console.log(num, 'is', result);
// }

function odd_even(number){
  if(number % 2 === 0){
    return 'even';
  }
  else{
    return 'odd'
  }
}

const testNumbers = [5, 8, 81, 24, 6];
for(const num of testNumbers){
  const result = odd_even(num);
  console.log(num, 'is', result);
}























