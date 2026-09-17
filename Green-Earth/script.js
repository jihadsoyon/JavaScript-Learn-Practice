const modalImage = document.getElementById('modalImage');
const modalcategory = document.getElementById('modalcategory');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const loadingSpinner = document.getElementById('loading-spinner');
const tressContainer = document.getElementById('tress-container');
const cart = [];

const showSpinner = () => {
    loadingSpinner.classList.remove('hidden')
    tressContainer.classList.add('hidden')
}
const hideSpinner = () => {
    loadingSpinner.classList.add('hidden')
    tressContainer.classList.remove('hidden')
}


const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/categories')
    const data = await res.json()
    displayCategories(data.categories);

}


const displayCategories = (treeCategories) => {

    //get the container 
    const cateGoriesContainer = document.getElementById('cateGories-Container')
    cateGoriesContainer.innerHTML = ""

    treeCategories.forEach(categories => {
        const categoryButton = document.createElement('button')
        categoryButton.className = "btn w-full btn-outline"
        categoryButton.textContent = categories.category_name
        categoryButton.onclick = () => cateWiseTrees(categories.id, categoryButton)
        cateGoriesContainer.append(categoryButton)
    })


}


const cateWiseTrees = async(cateID, btn) => {
    // console.log(cateID, btn);


    const allBtns = document.querySelectorAll('#cateGories-Container button, #allTreesBtn')
    allBtns.forEach(allButton => {
        allButton.classList.remove('btn-primary')
        allButton.classList.add('btn-outline')
    })


    btn.classList.add('btn-primary')
    btn.classList.remove('btn-outline')

    showSpinner()
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${cateID}`)
    const data = await res.json()
    hideSpinner()
    displayTrees(data.plants)

}

//manually handle alltreBtn

const allTreesButton = document.querySelector('#allTreesBtn');

allTreesButton.addEventListener('click', function () {

    const allBtns = document.querySelectorAll('#cateGories-Container button, #allTreesBtn')
    allBtns.forEach(allButton => {
        allButton.classList.remove('btn-primary')
        allButton.classList.add('btn-outline')
    })

    allTreesButton.classList.add('btn-primary')
    allTreesButton.classList.remove('btn-outline')

 loadTrees()

})

const loadTrees = async () => {
    showSpinner()
    const res = await fetch('https://openapi.programming-hero.com/api/plants')
    const data = await res.json()
    hideSpinner()
    displayTrees(data.plants);

}

const displayTrees = (allTrees) => {
    // get the container

    tressContainer.innerHTML = ""

    allTrees.forEach(trees => {
        // console.log(trees);
        //create a element 
        const treeDiv = document.createElement('div')
        treeDiv.innerHTML = `
                            <div class="card bg-base-100 shadow-sm">
                        <figure>
                            <img src="${trees.image}"
                                alt="Shoes"
                                class="object-cover w-full h-45 cursor-pointer"
                                onClick="treesModal(${trees.id})" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title cursor-pointer" onClick="treesModal(${trees.id})">${trees.name}</h2>
                            <p class="line-clamp-2">${trees.description} </p>
                            <div class="badge  badge-success badge-outline">${trees.category}</div>
                            <div class="flex justify-between items-center">
                                <p class="text-2xl font-bold text-green-500">$${trees.price}</p>
                                <button class="btn btn-primary" onclick="cartItems(${trees.id}, '${trees.name}', ${trees.price})">Add to cart</button>
                            </div>
                        </div>
                    </div>
        `
        tressContainer.append(treeDiv)
    })

}


const treesModal = async(treeID) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${treeID}`)
    const data =await res.json()
    displayModal(data.plants);
}


const displayModal = (treeDetails) => {
    // console.log(treeDetails);
const treesDetailsModal = document.getElementById('trees_details_modal');
treesDetailsModal.showModal()
modalImage.src= treeDetails.image;
modalcategory.innerText = treeDetails.name
modalDescription.innerText = treeDetails.description
modalPrice.innerText = treeDetails.price

}


const cartItems = (id, name, price) => {
    const existItems = cart.find(item=> item.id == id);
    // console.log(existItems);
    if(!existItems){
        cart.push({
            id,
            name,
            price,
            quantity:1
        })
    }else{
        existItems.quantity++
    }


   const cartContainer = document.getElementById('cartContainer')

   
   
  
}





loadTrees()
loadCategories()