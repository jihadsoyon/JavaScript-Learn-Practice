function gonoVote(votes) {
 
  if (Array.isArray(votes)) {
    return 'Invalid';
  }

  let haVote = 0;
  let naVote = 0;

  for (let vote of votes) {
    if (vote === "ha") {
      haVote++;
    }
     else if (vote === "na") {
      naVote++;
    }
  }

  if (haVote > naVote) {
    return true;
  }

  else if (haVote === naVote) {
    return "equal";
  } 
  
  else {
    return false;
  }
}

const totalVote = gonoVote(12345);
console.log(totalVote)
