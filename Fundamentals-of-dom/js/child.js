// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// document.createElement('what element you want like- h1, p, span, li etc..')



//Create element and set innerText or innerHTML

const newChild = document.createElement('li');

newChild.innerText = 'New Born Footballer here';

// find the parent where you will add the child
 
const playersList = document.getElementById('player-list');


//append the child to the parent

playersList.appendChild(newChild);







