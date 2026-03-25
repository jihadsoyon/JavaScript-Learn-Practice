
//medium to create html

//1. parent Node

const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

//2. create child mode
const placesSection = document.createElement('section');


//create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);
//create ul
const ul = document.createElement('ul');
const li1  = document.createElement('li');
li1.innerText = 'Bandorbon';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Sundorbon'
ul.appendChild(li2)



placesSection.appendChild(ul);


//3. append placeSection to the mainContainer
mainContainer.appendChild(placesSection);




//Easier to create html


const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1> Books I need to read </h1>
<ul>
 <li>Physics</li> 
 <li>Chemistry</li> 
 <li>Math</li> 
 <li>Biology</li>  
 
 </ul>


`

mainContainer.appendChild(booksSection)



const skillSection = document.createElement("section");
skillSection.innerHTML =`
<h1>Mernstake Skills</h1>
<ul>
<li>HTML</>
<li>CSS</>
<li>Js</>
<li>React</>
<li>Node</>
</ul>




`
mainContainer.appendChild(skillSection);


const remoteSite = document.createElement('Section');
remoteSite.innerHTML = `
<h1>Remote Job Site</h1>
<ul>
<li>Indeed</>
<li>Glassdor</>
<li>Remote OK</>
<li>We Work Remotely</>
<li>**Linkedin**</>
</ul>

`
mainContainer.appendChild(remoteSite);