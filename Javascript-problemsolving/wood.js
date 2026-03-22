/**
 * chair --> 3cft
 * table --> 10cft
 * bed   --> 50cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood   = 50;


  const chairTotalWood = chairQuantity * perChairWood;
  const  tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood   = bedQuantity * perBedWood;

  const totalWood   = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalWood;

}

const wood = woodQuantity(2, 1, 1);
console.log('wood needed', wood, 'cft');

//HW--------------------->


/**
 * shirt price -->500
 * pant price --> 300
 * shoe price --> 900
 * 5ta shirt er prce?, 3 ta pant er price, 2jora shoe er price ber koro?
 */

function wearQuantity(shirtQuantity, pantQuantity, shoeQuantity){
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;


  const totalShirtPrice = shirtQuantity * perShirtPrice;
  const totalPantPrice = pantQuantity * perPantPrice;
  const totalShoePrice = shoeQuantity * perShoePrice;

const totalMarketing = totalShirtPrice + totalPantPrice + totalShoePrice;
return totalMarketing;

}

const marketing = wearQuantity(5, 3, 2);
console.log('total market', marketing);


















