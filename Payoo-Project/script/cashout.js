  document.getElementById("cashout-btn").addEventListener("click", function(){
  //GET THE AGENT NUMBER & VALIDATE
  const cashoutNumber = getvalueFromInput("cashout-number");
  if(cashoutNumber.length !== 11){
    alert("Invalid agent number")
  }
  //get the amount, validate, convert to number
  const cashoutAmount = getvalueFromInput("cashout-amount");

let currentBalance = getBalance();
    //calculate Balance 
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    const pin = getvalueFromInput("cashout-pin");
    if(pin === "1234"){
        alert(`Cashout successfull ${cashoutAmount} Tk. Your account balance ${newBalance}Tk.`);
        setBalance(newBalance)
    }else{
        alert("invalid Pin");
        return;
    }
  });

 

