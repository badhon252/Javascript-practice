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

//? Write a function that checks key's from object,
// if key's are same then return fale otherwise true
//? as a Key, Symbol() will be use for unique identifire

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.key = Symbol();
  }

  getPerson() {
    console.log(`Name: ${this.name}, age: ${this.age}`);
  }
}
const khalid = new Person("Khalid Hossain", 22);
khalid.getPerson();

const jannatul = new Person("Jannatul Ferdows", 22);
// jannatul.getPerson();

const john = new Person("John", 42);
// john.getPerson();

let bool = khalid.key === jannatul.key;

console.dir(bool);
