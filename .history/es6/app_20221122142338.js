var myArray = new Array();
// console.log(myArray)
for (var i = 1; i <= 1000; i++) {
  myArray.push(i);
}
console.log(myArray);
var start = performance.now();

for (let num of mySet) {
  //   console.log(num)
}

// for(let num=0;num<=mySet.size; num++){
//   console.log(num)
// }

var end = performance.now();
var time = end - start;

console.dir("Time has taken: ", time, "ms");

// console.log(num)

// set DS \
// 1. no duplicate value
// 2. no insertion order
// 3. no index
// 4. no key value pair
// 5. no size property

var mySet = new Set();
var myArray = new Array();
// console.log(myArray)
for (var i = 1; i <= 1000; i++) {
  //  mySet.add(i)
  myArray.push(i);
}
// console.log(mySet)
console.log(myArray);
// console.log(mySet[0])
var start = performance.now();

for (let num of mySet) {
  //   console.log(num)
}

// for(let num=0;num<=mySet.size; num++){
//   console.log(num)
// }

var end = performance.now();
var time = end - start;

console.dir("Time has taken: ", time, "ms");

// console.log(num)
