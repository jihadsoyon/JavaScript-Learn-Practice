/**
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4.for of --> array loop korar jonno
 * 5.for in --> object loop korar jonno
 * 
 */

const friends = ['Elon', 'Bill', 'mark', 'waren'];
//for of
for(const friend of friends){
  console.log(friend);
}

//for
for(let i = 0; i < 10; i++){
  console.log(i);
  console.log(friends[i]); 
}


const numbers = [5, 23 ,25 ,34 ,45 ,57 ,78 ,89, 67 ,90]
//for
for (let i = 0; i < numbers.length; i++){ 
  console.log(numbers[i]);

}

//while
let i = 0;
while(i < friends.length){
  console.log(friends[i]);
  i++;
}

//while
let n= 0;
while(n < numbers.length){
  console.log(numbers[n]);
  n++;
}

const skills  ={
  markup: 'HTML',
  style: 'css',
  program: 'js',
  library: 'React'
}

for(const skill in skills){
  console.log(skill)
}




















// let n = 0;
// while(n < numbers.length){
//   console.log(numbers[n])
//   n++;
// }



