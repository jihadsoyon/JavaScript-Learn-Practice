let thrivingList = [];
let strugglingList = [];

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugglingCount = document.getElementById("strugglingCount");

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

function calculateCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
};

calculateCount();


function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-black", "text-white");
    thrivingFilterBtn.classList.remove("bg-black", "text-white");
    strugglingFilterBtn.classList.remove("bg-black", "text-white");


    allFilterBtn.classList.add("bg-gray-300", "text-black");
    thrivingFilterBtn.classList.add("bg-gray-300", "text-black");
    strugglingFilterBtn.classList.add("bg-gray-300", "text-black");

    const selected = document.getElementById(id);
    selected.classList.add("bg-black", "text-white");
    selected.classList.remove("bg-gray-300", "text-black");

    if(id == 'thriving-filter-btn'){
        allCardSection.classList.add("hidden");
        filteredSection.classList.remove("hidden");

    }else if(id == 'all-filter-btn'){
        allCardSection.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    }


}

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('thriving-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const plantName = parenNode.querySelector('.plantName').innerText;
        const latinName = parenNode.querySelector('.latinName').innerText;
        const light = parenNode.querySelector('.light').innerText;
        const water = parenNode.querySelector('.water').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;
        parenNode.querySelector('.status').innerText = 'Thrive'

        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status: 'Thrive',
            notes
        }
        console.log(cardInfo);

        const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName);
        
        if (!plantExist) {
            thrivingList.push(cardInfo);
        }
        calculateCount();
        renderThriving();
    }

})


function renderThriving() {
    filteredSection.innerHTML = ""

    for (let thrive of thrivingList) {
        let div = document.createElement("div");
        div.className = 'card flex justify-between border p-8 rounded'
        div.innerHTML = `
     <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <h2 class="plantName text-4xl">${thrive.plantName}</h2>
                        <p class="latinName">${thrive.latinName}</p>
                    </div>
                    <!-- part 2 -->
                     <div class="flex gap-2">
                        <p class="light">${thrive.light}</p>
                        <p class="water">${thrive.water}</p>
                     </div>
                     <!-- part 3 -->
                      <p class="status">${thrive.status}</p>
                      <p class="notes">${thrive.notes}</p>
                      <div class="flex gap-4">
                        <button class="thriving-btn bg-green-200 p-2 border border-blue-800 rounded cursor-pointer">Thrive</button>
                        <button class="struggling-btn bg-red-200 p-2 border border-blue-800 rounded cursor-pointer">Struggle</button>
                      </div>
                      </div>
                       <!-- main part 2 -->
                <div>
                <button class="delete-btn bg-red-300 text-red-500 p-2 border border-blue-800 rounded cursor-pointer">Delete</button>
                </div>

    
    `
    filteredSection.appendChild(div);

    }
}
