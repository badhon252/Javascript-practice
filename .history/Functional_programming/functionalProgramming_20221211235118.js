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

//! Creating myBind method
/* const person = {
  name: "Max",
  age: 25,
};
//? const person1 = function.myBind(person);
//
function Person(name, age) {
  this.name = "Max";
  this.age = 25;
  info = function () {
    console.log(this.name + ` age: ${this.age}`);
  };
}

Function.prototype.myBind = function (arg) {
  return ({ name, age } = arg);
};
// console.log(Person())

let person1 = {
  name: "Badhon",
  age: 22,
};

Person.myBind(person1);

Person.info;

console.log(Function);
 */
/* 
let person = {
  person1: {
    name: "Badhon",
    age: 22,
  },
  person2: {
    name: "Janntul",
    age: 22,
  },
};
let printName = function (hometown, state, country) {
  console.log(
    `Name: ${this.name} \nAge: ${this.age} \nHomeTown: ${hometown} \nState: ${state} \nCountry:${country}`
  );
};

//! My own 'bind' method called "myBind" method
let printMyName = printName.bind(person.person1, "Bakergonj", "Dhaka");
printMyName("Bangladesh");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(person.person2, "Bakergonj", "Barishal");
printMyName2("Bangladesh");
 */

// Write a function that takes a string and returns the number (count) of vowels in the string.
// Example: getCount("abracadabra") -> 5

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount("Khalid Hossain Badhon"));

// Write a function that sort any array using sort method
// Example: sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}
// console.log(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write a function that can sort any array without sort method

function sortArray2(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    newArr.push(min);
  }
  return newArr;
}

console.table(sortArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
