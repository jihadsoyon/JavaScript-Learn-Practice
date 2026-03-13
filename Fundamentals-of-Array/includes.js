const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friends.includes('gelam'));
console.log(friends.includes('alam'));

if(friends.includes('alam')){
  console.log('Party')
}
else{
  console.log('no party')
}

console.log(friends.includes('gelam'))
console.log(friends.includes('khailam'))

if (friends.includes('salam')){
  console.log('Party')
}
else{
  console.log('no food. we are fasting')
}