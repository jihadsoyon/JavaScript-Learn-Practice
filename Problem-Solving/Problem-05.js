function analyzeText(sentence) {
 
  if (typeof sentence !== "string") {
    return 'Invalid';
  }

  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) {
    return 'Invalid';
  }

  let words = trimmedSentence.split(" ");

  let longestword = words[0];
  for (let word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }

  const token = trimmedSentence.split(" ").join("").length;

  return {
    longwords: longestword,
    token: token
  }
}


const finalText = analyzeText("A quick brown fox");
console.log(finalText)