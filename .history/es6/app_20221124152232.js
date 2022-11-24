/*const user = [
  { firstName: "Khalid", lastName: "Hossain", age: 22 },
  { firstName: "Jannatul", lastName: "Ferdows", age: 22 },
  { firstName: "John", lastName: "Wick", age: 42 },
];

// Map Method
const fullName = user.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);

// Filter Method
const age = user.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(age);

// Reduce Method
const totalAge = user.reduce((x, y) => x + y.age, 0);
console.log(totalAge);
*/

// Destructuring
// const [first, second] = user;
// console.log(first);
// console.log(second);

/*
var myArray = new Array();
// console.log(myArray)
for (var i = 1; i <= 1000; i++) {
  myArray.push(i);
}
console.log(myArray);
var start = performance.now();

for (let num of mySet) {
  console.log(num);
}

// for(let num=0;num<=mySet.size; num++){
//   console.log(num)
// }

var end = performance.now();
var time = end - start;

console.dir("Time has taken: ", time, "ms");

*/

// set DataStructure
/*
var mySet = new Set();
for (var i = 1; i <= 1000; i++) {
  mySet.add(i);
}
console.log(mySet);
// console.log(mySet[0])
var start = performance.now();

for (let num of mySet) {
  console.log(num);
}

// for(let num=0;num<=mySet.size; num++){
//   console.log(num)
// }

var end = performance.now();
var time = end - start;

console.dir("Time has taken: ", time, "ms");
*/

//! Sets
/*
let a = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(a);
let b = new Set([...a]);
// b.pop();
b.delete(5);
console.log(b);
// let Union = new Set([...a, ...b]);
// console.log(Union);

// let Intersection = new Set([...a].filter((x) => b.has(x)));
// console.log(Intersection);

// let Difference = new Set([...a].filter((x) => !b.has(x)));
// console.log(Difference);

let inersection = new Set([...a].filter((x) => !b.has(x)));

console.log(inersection);
*/

//! WeakSet DataStructure
/*
//? Without WeakSet method

class SomeClass {
  constructor() {}
  method() {
    console.log("Hello World");
  }
}
const obj = new SomeClass();
// obj.method();    // Hello World
SomeClass.prototype.method(); // Hello World
*/

/*
let ws = new WeakSet();
// ws.add({
//   a: 1,
//   b: 2,
// });
// console.log(ws);

class SomeClass {
  constructor() {
    ws.add(this);
  }
  method() {
    if (!ws.has(this)) {
      throw new TypeError("Illegal invocation");
    } else {
      console.log("Hello World");
    }
  }
}

const obj = new SomeClass();
// obj.method(); // Hello World
console.log(ws);
*/

/*
//? label in javascript

let i = 0;
outermost: while (true) {
  console.log("Outermost loop: " + i);
  i++;
  innerloop: for (let j = 0; j < 5; j++) {
    console.log("Inner loop: " + j);
    if (j === 3) {
      break outermost;
    }
  }
}

IIFE: (function x() {
  console.log("Hello World");
})();
*/
/*
//? Map & WeakMap DataStructure
const khalid = {
  name: "Khalid",
  age: 22,
};
const myMap = new Map();
myMap.set(khalid, khalid.name);
let x = [...myMap];
console.dir(x[0][0].name);
*/

//! Symbols
/*
let symbol1 = Symbol.for("same");
let symbol2 = Symbol.for("same");
//? Using "for" method we can create a symbol with a description and we can access it by using the same description 
let symbol3 = Symbol("Hello");
console.log(symbol1 === symbol2); //! true
console.log(symbol3);

let symbol3 = Symbol(1);
let symbol4 = Symbol(1);
console.log(symbol3 === symbol4); //! false
*/

/* 
** //? Write a function that checks key's from object,
*** //? if key's are same then return true otherwise false
** //? as a Key, Symbol() will be use for unique identifire

class Person {
  constructor(name, age, num) {
    this.name = name;
    this.age = age;
    this.key = Symbol.for(num);
  }
  getKey = () => console.log(this.key);
  getPerson = () => console.log(`Name: ${this.name}, age: ${this.age}`);
}
const khalid = new Person("Khalid Hossain", 22, 50);
// khalid.getPerson();

const jannatul = new Person("Jannatul Ferdows", 22, 50);
jannatul.getPerson();
jannatul.getKey();

const john = new Person("John", 42);
// john.getPerson();

// let bool = khalid.key === jannatul.key;
let bool = `Matched between "${khalid.name}" and "${jannatul.name}" ${
  khalid.key === jannatul.key ? "is 100%" : "Not Matched"
}`;
console.dir(bool);
*/

/* console.log(jannatul); //Person {name: 'Jannatul Ferdows', age: 22, key: Symbol(50), getKey: ƒ, getPerson: ƒ}
console.log(jannatul.age); // 22
console.log(jannatul.key); // Symbol(50)
console.log(jannatul.key.valueOf); // ƒ valueOf() { [native code] }
console.log(jannatul.key.valueOf()); // Symbol(50);
console.log(jannatul.key.toString()); // ("Symbol(50)");
console.log(typeof jannatul.key.toString); // ("function");
 */
// "use strict";
/* const myMethod = Symbol("My own Symbol");
// console.log(myMethod);
console.dir(Array());
Array.prototype[myMethod] = () =>
  console.log("My own methods using Symbol from Prototype");

let arr = [1, 2, 3, 4, 5];
let arr1 = arr.map((x) => x * 2);

const arrayMethods1 = arr[myMethod];
arrayMethods1();
const arrayMethods2 = arr1[myMethod];
arrayMethods2();
 */
/* 
* //? Generator Function

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  yield 8;
  yield 9;
  yield 10;
}
const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
 */

function myFunction(a) {
  return a.split(3);
}
// console.log(myFunction([0, 1, 2, 3, 4, 5])); //(3) [3, 4, 5]

const google = "https://google.com/?q=ss";

const url = new URL(google);

console.log(url.host);
