// function myTagFunction1(firstParam, ...restParam) {
//   console.log(firstParam); // ['The quick', 'fox ', 'over the lazy ', ' and cat']
//   console.log(restParam); // ['brown', 'jumps', 'dog']
// }
// const color1 = "brown";
// const way1 = "jumps";
// const animal1 = "dog";
// myTagFunction1`The quick ${color1} fox ${way1} over the lazy ${animal1} and cat`;

// // Trying tagged function in my own way!!
// function myTagFunction(firstParam, secondParam, thirdParam, fourthParam) {
//   //   console.log(firstParam); // ['The quick', 'fox ', 'over the lazy ', ' and cat']
//   //   console.log(secondParam); // brown
//   //   console.log(thirdParam); // jumps
//   //   console.log(fourthParam); // dog

//   return `${firstParam} ${secondParam} ${thirdParam} ${fourthParam} `;
// }
// const color = "brown";
// const way = "jumps";
// const typeOfAnimal = "lazy";
// const animal = "dog";
// console.log(
//   myTagFunction`The quick ${color} fox ${way} over the  ${typeOfAnimal} ${animal}`
// );
// // console.log(typeof myTagFunction);
// console.log(
//   `The quick ${color} fox ${way} over the  ${typeOfAnimal} ${animal}`
// );

// function x(a) {
//   console.log(a);
//   console.log(typeof a);
// }

// x({
//   name: "Khalid",
//   age: 22,
// });

// x([1, 2, "3"]);

//DSA practice

// Normal uses without dsa

// var start,
//   end,
//   result = 0;
// function sum(n) {
//   for (var i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// start = performance.now();
// sum(1000000000);
// end = performance.now();
// console.log(end - start);

//DSA

var start, end;
function sum(n) {
  return (n / 2) * (n + 1);
}
start = performance.now();
sum(1000000000);
end = performance.now();
console.log(end - start);
