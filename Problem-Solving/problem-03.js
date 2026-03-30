function finalScore(information) {
  let { right, wrong, skip } = information;
  if (typeof information !== 'object'  ) {   
    return 'Invalid';
  }



 
  if (right + wrong + skip !== 100) {
    return 'Invalid';
  }

  const result = right * 1 - wrong * 0.5;
  return Math.round(result);
}

const lastScore = finalScore(["Raj"]);
console.log(lastScore)