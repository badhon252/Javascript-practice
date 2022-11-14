const arr = [1, 2, 3, 4];
const arr2 = arr.map((item) => item * item);
const arr3 = arr.reduce(
  (prevValue, currentValue, index, array) => prevValue + currentValue
);

console.log("Map()", arr2);
console.log(arr3);
