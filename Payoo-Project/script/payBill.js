document.getElementById("pay-bill-btn").addEventListener("click", function(){
    // get the biller org
    const payBillOrg = getvalueFromInput("pay-bill-org");
    if(payBillOrg === "Enter biller organization name"){
        alert("Select a biller organization name");
        return;
    }
    //get biller num
    const billerNumber = getvalueFromInput("pay-bill-number");
    if(billerNumber.length !== 11){
        alert("invalid number");
        return;
    }
    //get pay amount
    const payAmount = getvalueFromInput("pay-bill-amount");

    const currentbalance = getBalance();

    const newbalance = currentbalance - Number(payAmount);

    //get the pin

    const payPin = getvalueFromInput("pay-bill-pin");
    if(payPin === "1234"){
        alert("Bill successfully paid");
        setBalance(newbalance);
    }else{
        alert("Invalid pin");
        return;
    }

})