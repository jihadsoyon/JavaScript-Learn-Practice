  document.getElementById("cashout-btn").addEventListener("click", function(){
  //GET THE AGENT NUMBER & VALIDATE
  const cashoutNumber = getvalueFromInput("cashout-number");
  if(cashoutNumber.length !== 11){
    alert("Invalid agent number");
  }
  //get the amount, validate, convert to number
  const cashoutAmount = getvalueFromInput("cashout-amount");

  //get the current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;

    //calculate Balance 
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    const pin = getvalueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout successfull");
        balanceElement.innerText = newBalance;
    }else{
        alert("invalid Pin");
        return;
    }

  
  })
  
  
  











// document.getElementById("cashout-btn").addEventListener("click", function(){
//     
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length !== 11){
//       alert("Invalid agent number");
//       return;
//     }
//     //get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;

//     //get the current balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;

//     //Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
    

//     //get the pin & verify
//     const pinInput = document.getElementById("cashout-pin");
//     const pin = pinInput.value;
//     if(pin === "1234"){
//         //5-1 true: show an alert > set balance
//         alert("Cashout Successfull");
//          console.log("newbalance:", newBalance);
//          balanceElement.innerText = newBalance;
//     }else{
//         //5-2 false : show an error > return
//         alert("Invalid pin");
//         return;

//     }
// })