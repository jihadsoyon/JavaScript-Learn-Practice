const loadpost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    // console.log(data);
    displayPosts(data);
  })
};
// {
//     "userId": 4,
//     "id": 32,
//     "title": "doloremque illum aliquid sunt",
//     "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// }
 //array of object

const displayPosts = (posts) => {
  //get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
  // console.log(post);
  
  //2. create element

 const postCard = document.createElement("div");
 postCard.innerHTML = `
   <div class="post-card">
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  </div>
 `;

 //add to the container
 postContainer.append(postCard);

});

};
// loadpost();





























