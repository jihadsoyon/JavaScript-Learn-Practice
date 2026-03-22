/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];


function getlowest(numbers){
  let min = numbers[0];
  for(let num of numbers){
   if(num < min){
    min = num;
  }
  }
  return min;
}

const result = getlowest(heights2);
console.log(result);


/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallest(numbers){

}


/**
 * function longestWord(sentence){
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
 */













