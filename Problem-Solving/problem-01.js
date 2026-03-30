function newPrice(currentPrice, discount) {

  if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
    return 'Invalid';
  }

  if (discount < 0 || discount > 100) {
    return 'Invalid';
  }

  const discountedAmount = (currentPrice * discount) / 100;
  const totallPrice = currentPrice - discountedAmount;

  return totallPrice.toFixed(3);
}

const overAllprice = newPrice(1500, 20);
console.log(overAllprice)