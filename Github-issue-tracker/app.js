const container = document.getElementById("issuesContainer")
const loader = document.getElementById("loader")

let issuesData = []

async function loadIssues(){

try{

loader.classList.remove("hidden")

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

const data = await res.json()

issuesData = data.data

displayIssues(issuesData)

}
catch(error){

console.log(error)
alert("Failed to load issues")

}

finally{

loader.classList.add("hidden")

}

}

loadIssues()

function formatDate(dateString){

const date = new Date(dateString)

return date.toLocaleDateString()

}

function priorityBadge(priority){

if(priority === "high"){
return `<span class="badge bg-red-100 text-red-600 border-0">HIGH</span>`
}

if(priority === "medium"){
return `<span class="badge bg-yellow-100 text-yellow-700 border-0">MEDIUM</span>`
}

return `<span class="badge bg-gray-200 text-gray-600 border-0">LOW</span>`

}

function statusIcon(status){

if(status === "open"){
return `<div class="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600"><img src="./assets/Open-Status.png" alt=""></div>`
}

return `<div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600"><img src="./assets/Closed- Status .png" alt=""></div>`

}