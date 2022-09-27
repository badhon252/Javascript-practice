// function secondFunction() {
//   console.log("secondFunction!");
// }
// function firstFunction(callback) {
//   console.log("First function");
//   callback();
// }

// firstFunction(secondFunction);

function firstFunction(callback) {
  console.log("First function");
  callback();
}
function secondFunction() {
  console.log("secondFunction!");
}

secondFunction(firstFunction);
