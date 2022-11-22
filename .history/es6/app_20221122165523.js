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

let ws = new WeakSet();
ws.add({
  a: 1,
  b: 2,
});
console.log(ws);

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
