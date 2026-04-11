const loadData = () => {
fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then((response)=> response.json())
     .then((data)=> console.log(data));
}

const loadData4 = () => {
     fetch('https://jsonplaceholder.typicode.com/posts/4')
     .then((res) => res.json())
     .then((data) => console.log(data));
}    

const loadData5 = () => {
     fetch('https://jsonplaceholder.typicode.com/posts/5')
     .then((res) => res.json())
     .then((data) => console.log(data))
}