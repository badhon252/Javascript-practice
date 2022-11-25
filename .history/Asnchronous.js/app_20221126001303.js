 function asynchronus(params) {
 async function run() {
    setTimeout(function () {
      console.log("Running");
      greet("Badhon");
    }, 1000);
  }

  await console.log("Starting");

  function greet(name) {
    console.log("Hello " + name);
  }

  await console.log("Ending");

  run();
}
