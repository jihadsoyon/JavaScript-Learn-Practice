//machine id --> input value

function getvalueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

//
function getBalance(){
 const balanceElement = document.getElementById("balance");
 const balance = balanceElement.innerText;
 return Number(balance);
}

 //machine value -> set Balance 