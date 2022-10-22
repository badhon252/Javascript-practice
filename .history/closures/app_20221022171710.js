/**
 * Closure
 * @param {string} name
 * @returns {function}
 *
 * write a functions that returns a function (closure)
 */

function closureFunction(name) {
  let greet = "Hello";
  return function () {
    console.log(greet);
  };
}

const myName = closureFunction("Khalid");

myName();

console.log(myName);
