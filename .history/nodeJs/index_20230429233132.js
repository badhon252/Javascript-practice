// Make a api request using async await and asios with proper error handling
// and fetch the data from the api and display it in the console.

const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async() => {
    try {
        const response = await fetch(url);
        console.log(response.url);
    } catch (error) {
        console.log(error);
    }
}

getPosts();