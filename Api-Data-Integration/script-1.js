 const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') //Promise of json response
    
     .then((response)=> response.json()) //promise of json data 
    
     .then((data)=> console.log(data));  //real data

    }
 

const loadpost = () => {
   
   const url = "https://jsonplaceholder.typicode.com/posts"
      fetch(url)
      .then(res => res.json())
      .then(json => {
         console.log(json);
         displayPost(json);
      });
}


const displayPost = (posts) => {
   posts.forEach((post) => {
      console.log(post);
   });
};