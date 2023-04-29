// Make a api request using async await 
// and fetch the data from the api and display it in the console

const fetch = require('node-fetch');

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}

getData();