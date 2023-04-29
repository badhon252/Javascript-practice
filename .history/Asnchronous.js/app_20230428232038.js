import { get } from 'axios';

/* //! Checking the asynchronous behaviour using 'async & await' keyword
 function run() {
  setTimeout(function () {
    console.log("Running");
    greet("London");
  }, 1000);
}
run();
console.log("Starting");

function greet(location) {
  console.log(location + " Reached");
}

console.log("Ending");
 */

//! Checking the asynchronous behaviour using 'Promise' keyword

let myPromise = new Promise(function response(resolve, reject) {
  let a = 1; //? 1 = true, 0 = false
  if (a) {
    resolve("Success, Promise Keeped!");
  } else {
    reject("Failed, Promise is broken!");
  }
});

myPromise
  .then((response) => response)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

//! Checking the asynchronous behaviour without 'Promise' keyword
const loadData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  const data = await loadData();
  console.log(data);
})();


//! Using axios 
get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  // Axios with modern javascript 
async function getApiData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getApiData();