const loadpost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    // console.log(data);
    displayPost(data);
  })
};       
 //array of object
const displayPost = (posts) => {
//1. get the container
const postContainer = document.getElementById('post-container');
postContainer.innerHTML = "";
// console.log(postContainer);

posts.forEach((post) => {
  // console.log(post.title);
  //2. Create HtML Element
  const li = document.createElement("li");
  li.innerText = post.body;
  // console.log(li);

  //3. Add into container
  postContainer.appendChild(li);

})

};


const loadImage = () => {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    // console.log(data);
    displayPosts(data);
  })
}

const displayPosts = (albums) => {
//1. get the container
const olContainer = document.getElementById("ol-container");
olContainer.innerHTML = ""

albums.forEach((album) => {
  // console.log(album)

//2. Create HtML Element
const li = document.createElement('li');
li.innerText = album.title;

//3. Add into  container
olContainer.append(li);

})

}


const loadComment = () => {
const url = 'https://jsonplaceholder.typicode.com/comments';
fetch(url)
.then(res => res.json())
.then((data) => {
  // console.log(data)
  displayPostt(data)
})
}

const displayPostt = (comments) => {
  //1. get the container
  const comntContainer = document.getElementById('comment-container');
  comntContainer.innerHTML = ""

comments.forEach((comment) => {
// console.log(comment.name)
//2. Create HtML Element
const li = document.createElement('li');
li.innerText = comment.email;

//3. Add into  container
comntContainer.appendChild(li);



})
}



const alltodos = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    // console.log(data)
    displayPosta(data)
  })
}

const displayPosta = (todos) => {
  //get the container
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = ""

todos.forEach((todo) => {
//2. Create HtML Element
const li = document.createElement('li')
li.innerText = todo.completed;

//3. Add into  container
todoContainer.appendChild(li)

})

}














