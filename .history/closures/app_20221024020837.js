/**
 *! Closure
 * @param {string} name
 * @returns {function}
 *
 *! write a functions that returns a function (closure)
 */
/*
function closureFunction(name) {
  let greet = "Hello";
  function greetFunction() {
    console.log(greet);
  }
  return greetFunction;
  console.log(name);
}
const myName = closureFunction("Khalid");
myName();
// greetFunction(); // ReferenceError: greetFunction is not defined
closureFunction("Khalid")();
// console.log(myName);
*/

/**
 *! makes an closures alongs with the number that takes to print output, output and the delay time to print should be same
 *? lets assume that, i have to print 1 to 10 numbers, but i have to print 1 after 1 second, 2 after 2 second, 3 after 3 second and so on

function makeClosure(number) {
  for (var i = 1; i <= number; i++) {
    setTimeout(function (i) {
      console.log(i);
    }, 1000 * i, i);
  }
}
 */

// function makeClosure() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function (i) {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// makeClosure();

// function makeClosure() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// makeClosure();

function makeClosure() {
  for (let i = 1; i <= 5; i++) {
    // let time = i * 1000;
    setTimeout(function log() {
      console.log(i);
    }, j * 1000);
  }
}

makeClosure();
