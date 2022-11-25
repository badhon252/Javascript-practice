function run() {
  setTimeout(function () {
    console.log("Running");
  }, 1000);
  greet("Badhon");
}

console.log("Starting");

function greet(name) {
  console.log("Hello " + name);
}

console.log("Ending");
