document.getElementById("transfer-btn").addEventListener("click", function(){
    // get the transfer number & validate
    const transferNumber = getvalueFromInput("transfer-number");
    if(transferNumber.length !== 11){
        alert("Invalid transfer number");
        return;
    }
    //get the amount & validate
    const transferAmount = getvalueFromInput("transfer-amount");

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(transferAmount);

    if(newBalance < 0){
        alert("Invalid amount");
        return;
    }

    // get the pin & validate
    const pin = getvalueFromInput("transfer-pin");
    if(pin === "1234"){
        alert("Transfer money successfull");
        setBalance(newBalance)
    }else{

        alert("Invalid pin")
        return;
    }
    
})