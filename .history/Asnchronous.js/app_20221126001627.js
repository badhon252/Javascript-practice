function run() {
  setTimeout(function () {
    console.log("Running");
    greet("Badhon");
  }, 1000);
}

console.log("Starting");

function greet(location) {
  console.log(location + "Reched");
}

console.log("Ending");

run();
