function run() {
  setTimeout(function () {
    console.log("Running");
    greet("London");
  }, 1000);
}

console.log("Starting");

function greet(location) {
  console.log(location + "Reached");
}

console.log("Ending");

run();
