const getMain = document.querySelector("#maninDiv");
console.log(getMain.children[0].innerHTML);


const wishtListBtns = document.querySelectorAll(".wishlist-btn");

wishtListBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        let wishCount = document.querySelector('.wishCount');
        let countWish = parseInt(wishCount.innerText);
        countWish++;
        wishCount.innerText = countWish;
        
    })
})



