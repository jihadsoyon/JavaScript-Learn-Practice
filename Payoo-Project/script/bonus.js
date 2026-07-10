document.getElementById("bonus-btn").addEventListener("click", function(){
    // get the bonus coupon
    const bonusCoupon = getvalueFromInput("bonus-coupon");

     // setBalance
    const currentbalance = getBalance();

    const newBalance = currentbalance + 10000;

    if(bonusCoupon === "SubhanAllah33"){
        alert(`Congrats! You recieved 10k tk for bonus. Your current balance is ${newBalance} tk.`);
        setBalance(newBalance);
    }else{
        alert("You input wrong coupon number");
        return;
    }
   




})