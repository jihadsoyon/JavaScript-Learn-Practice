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