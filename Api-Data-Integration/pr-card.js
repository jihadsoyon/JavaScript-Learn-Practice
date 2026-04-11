const allcards = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
  .then(res => res.json())
  .then((data)=> {
    // console.log(data)
    displayPost(data)
  })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

const displayPost = (todos) => {
   //get the container and empty the container
  const cardsConatiner = document.getElementById('card-conatiner');
  allcards.innerHTML = ""


  todos.forEach((todo) => {
    // console.log(todo)
     //2. create element
    const allCards = document.createElement('div')
    allCards.innerHTML = `
   <div class="all-card">
   <h2>${todo.id}</h2>
   <h2>${todo.title}</h2>
   <p>${todo.completed}</p>
   </div>
    `
  //add to the container
  cardsConatiner.appendChild(allCards);

  })
}
