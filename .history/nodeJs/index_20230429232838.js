// Make a api request using async await and asios with proper error handling
// and fetch the data from the api and display it in the console

const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async() => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}