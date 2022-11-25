/* const arr = [1, 2, 3, 4];
const arr2 = arr.map((item) => item * item);
const arr3 = arr2.reduce(
  (prevValue, currentValue, index, array) => prevValue + currentValue
);

console.log("Original array", arr);
console.log("Map()", arr2);
console.log("reduce()", arr3);
 */

/* //! using bind method
const person3 = {
  name: "John wick",
  age: 50,
};
const person5 = {
  name: "John wick",
  age: 50,
};
const person = {
  name: "Max",
  age: 25,
};

const person2 = {
  name: "Bob Marly",
  age: 60,
};
const printName = function () {
  console.log(this.name + ` age: ${this.age}`);
};

const person1 = printName.bind(person);
const person4 = printName.bind(person2);
person1();
person4();
// console.log(person1);

//? using call method
printName.call(person3);

//? using apply method
printName.apply(person3);

 */

// creating myBind method
//? const person1 = printName.bind(person);
//
function myBind(arg) {}
