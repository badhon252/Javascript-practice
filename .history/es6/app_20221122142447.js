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

// set DS \

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
