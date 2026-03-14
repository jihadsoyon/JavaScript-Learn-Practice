
const numberss = 11;
if (numberss < 10) {
  console.log ('choto ekta number paisi')
}
else{
  console.log('something new is cooking')
}


//----------while-----loop_____________

let nums = 0;
while(nums < 5){
  console.log('looping', nums);
  nums++;  //num = num + 1;  // num++;
}


// Subtask-1:

// Display sum of all the odd numbers from 91 to 129.


let number = 91;
let sum = 0;
while(number <= 129){
  console.log(number);
  sum = sum + number;
  console.log('sum', sum);
  number = number+2;
}

let numbers = 51;
 let summ = 0;
  while(numbers < 85){
     if(numbers % 2 === 0){
       console.log('even number', numbers);   
    } 
    summ = summ + numbers;
     numbers++;
   }