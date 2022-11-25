async function asynchronus(params) {
  function run() {
    setTimeout(function () {
      console.log("Running");
     await greet("Badhon");
    }, 1000);
  }

   console.log("Starting");

  function greet(name) {
    console.log("Hello " + name);
  }

  await console.log("Ending");

  run();
}
