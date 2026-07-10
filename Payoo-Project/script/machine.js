//machine id --> input value

function getvalueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

//
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

//machine value -> set Balance 
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//  machine id > hide all > show id

function showOnly(id) {
    // console.log("show only clicked")
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const addMOney = document.getElementById("transfer");
    const bonus = document.getElementById("bonus");
    const payBill = document.getElementById("pay-bill")

    // hide everything
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    addMOney.classList.add("hidden");
    bonus.classList.add("hidden");
    payBill.classList.add("hidden");

    //show the element with exact id

    const selected = document.getElementById(id);
    selected.classList.remove("hidden")

}