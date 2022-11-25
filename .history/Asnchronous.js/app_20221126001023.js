function run() {
  setTimeout(function () {
    console.log("Running");
    greet("Badhon");
  }, 1000);
}

console.log("Starting");

function greet(name) {
  console.log("Hello " + name);
}

console.log("Ending");

run();
