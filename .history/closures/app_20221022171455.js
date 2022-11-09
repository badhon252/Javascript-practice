/**
 * Closure
 * @param {string} name
 * @returns {function}
 *
 * write a functions that returns a function (closure)
 */

function closure(name) {
  let greet = "Hello";
  return function () {
    console.log(greet);
  };
}

const myName = closure("Khalid");

myName();

console.log(myName);
