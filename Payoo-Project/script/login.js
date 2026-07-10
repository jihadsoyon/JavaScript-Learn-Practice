document.getElementById("login-btn").addEventListener("click", function(){
    //get the mobile number
    const numberInput = document.getElementById("input-number");
    const mobileNUmber = numberInput.value;
    console.log(mobileNUmber);
    //get the pin
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin)
    //match pin & number & validate
    if(mobileNUmber.length === 11 && pin === "1234"){
        alert("log in success");
        window.location.assign("/Payoo-Project/home.html")
    }else{
        alert("Log in failed");
        return;
    }
})