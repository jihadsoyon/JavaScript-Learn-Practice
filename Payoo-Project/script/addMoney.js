document.getElementById("add-money-btn").addEventListener("click", function(){
    //get bank account 
    const bankAccount = getvalueFromInput("add-money-bank");
    if(bankAccount === "Select bank"){
        alert("Select a bank");
        return;
    }

    //get the bank account number
    const addMoneyNumber = getvalueFromInput("add-money-number");
    if(addMoneyNumber.length !== 11){
        alert("Invalid bank account number");
        return;
    }

    //get the amount & validate

    const addMoneyAmount = getvalueFromInput("add-money-amount");
    
    const currentbalance = getBalance();
    
    const newBalance = currentbalance + Number(addMoneyAmount);

    //get the pin & validate
    const addMoneyPin = getvalueFromInput("add-money-pin");
    if(addMoneyPin === "1234"){
        alert(`Add money success from ${bankAccount} at ${new Date()}`);
        document.getElementById("balance").innerText = newBalance;
    }else{
        alert("Invalid pin");
        return;
    }
})