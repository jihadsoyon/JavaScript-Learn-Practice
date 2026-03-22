const phones = [
  {name : 'samsung', price: 20000, camera: '12mp', color: 'black' },
  {name : 'xoami', price: 18000, camera: '12mp', color: 'black' },
  {name : 'oppo', price: 30000, camera: '12mp', color: 'black' },
  {name : 'Iphone', price: 100000, camera: '12mp', color: 'black' },
  {name : 'Walton', price: 31000, camera: '12mp', color: 'black' },
  {name : 'HTC', price: 27000, camera: '12mp', color: 'black' },
]


function getCheapestPhone(phones){
  let min = phones[0];
  for(const phone of phones){
    if(phone.price < min.price){
      min = phone
    }
  }
  return min;
}


const cheap = getCheapestPhone(phones);
console.log('cheapest phone is :', cheap);


//HW shobcheye dami phon ber koro

function getBestPhone(phones){
let max = phones[0];
for(const phone of phones){
  if(phone. price > max.price){
    max = phone
  }
}
return max;
}

const best = getBestPhone(phones);
console.log('best phone is :', best);
