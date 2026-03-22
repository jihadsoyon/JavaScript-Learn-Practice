
function  add( num1, num2){
  return num1 + num2;
}


function substract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divided(num1, num2){
  return num1 / num2;
}

function calculator(a, b, operation){
  if(operation === 'add'){
    const result = add(a, b);
    return result;
  }
  else if(operation ==='substract'){
    const result = substract(a, b);
    return result;
  }
  else if(operation === 'multiply'){
    return multiply (a, b);
  }
  
  else if (operation === 'divide'){
    return divided(a, b);
  }
  
  else{
    return "only 'add', 'subtract', 'multiply', 'divided' operation is allowwed." 
  }


}


const result = calculator(5, 8, 'multiply');

console.log(result);

