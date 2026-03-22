
//01

const heights = [65, 66, 68, 72, 78, 60, 65, 66, 166];

function getMax(numbers){
  let max = numbers[0];
  for(const num of numbers){
    if (num > max){
      max = num;
    }
  }
  return max;
}

const max = getMax(heights);
console.log('max value is', max);




//homwork min ber koro

const hights = [65, 66, 68, 72, 78, 60, 65, 66, 23, 2];

function getMin(numbers){
  let min = numbers[0];
  for(const num of numbers){
    if (num < min){
     min = num;
    }
  }
  return min;
}

const min = getMin(hights);
console.log('min value is', min);