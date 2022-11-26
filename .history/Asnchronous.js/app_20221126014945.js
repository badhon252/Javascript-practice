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
  let a = 1;
  if (a) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((response) => response)
  .then((resolve) => console.log(resolve))
  .catch();
