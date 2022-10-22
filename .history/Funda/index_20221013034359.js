// console.log("Hello World!");

// alert("hello World!");

// var myName = "Khalid Hossain Badhon";
// var num = "22";

// console.log(typeof myName);
// console.log(typeof num);
// var number = Number(num);
// console.log(number);
// console.log(typeof number);

// let calculate = (num1) => {
//   console.log(number - num1);
//   //   console.log(num2 + num);
// };

// calculate(2, 2);

// let isTrue = true;

// let shouldRun = isTrue ? "run" : "stop";
// let shouldStop = !isTrue ? "run" : "stop";

// console.log(shouldRun);
// console.log(shouldStop);

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzBuzz");
//     continue;
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//     continue;
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//     continue;
//   }
//   console.log(i);
// }

/*
function num(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
    // } else if (i == null || i == undefined || i == Boolean || i > 1) {
  } else if (i === NaN || i > 1) {
    console.log(i, "is Not a Number");
  }
  console.log("input value:", i);
}
num(-10);
*/

// Trying while statements for this task!
// function num(i) {
//   while (i == null || i == undefined || i == Boolean || i > 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       return "fizzBuzz";
//     } else if (i % 5 === 0) {
//       return "buzz";
//     } else if (i % 3 === 0) {
//       return "fizz";
//       // } else if (i == null || i == undefined || i == Boolean || i > 1) {
//     } else {
//       return i, "is Not a Number";
//     }
//   }
//   return "input value:", i;
// }

// console.log(num(-10));

// function num(i) {
//   var output;
//   switch (i) {
//     case i == null || i == undefined || i == Boolean || i > 1:
//       return (output = "is not a number!");
//       break;

//     case i % 3 === 0 && i % 5 === 0:
//       return (output = "fizzBuzz");
//       break;

//     case i % 5 === 0:
//       return (output = "buzz");
//       break;

//     case i % 3 === 0:
//       return (output = "fizz");
//       break;

//     default:
//       "Input a valid number";
//   }
//   // return "input value:", i;
// }
// console.log(output);
// console.log(num(15));

// fizzBuzz = function (num) {
//   // write a function that receives a number as its argument;
//   // if the number is divisible by 3, the function should return 'fizz';
//   // if the number is divisible by 5, the function should return 'buzz';
//   // if the number is divisible by 3 and 5, the function should return
//   // 'fizzbuzz';
//   //
//   // otherwise the function should return the number, or false if no number
//   // was provided or the value provided is not a number
//   if (num === NaN || num === undefined || num === null) {
//     return num + "is not a number";
//   } else if (num % 3 === 0) {
//     return "fizz";
//   } else if (num % 5 === 0) {
//     return "buzz";
//   } else if (num % 15 === 0) {
//     return "fizzbuzz";
//   }
// };

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(150));
// console.log(fizzBuzz(" "));

// var output;
// function num(i) {
//   switch (i) {
//     // case i === null || i === undefined || i === Boolean || i > 1:
//     //   output = "is not a number!";
//     //   break;

//     case i % 3 == 0 && i % 5 == 0:
//       output = "fizzBuzz";
//       break;

//     case i % 3 == 0:
//       output = "fizz";
//       break;

//     case i % 5 == 0:
//       output = "buzz";
//       break;

//     default:
//       false;
//   }
// }

// console.log(num(10));

// I tried ternery operators but some issues are poped up!

// fizzBuzz = function (num) {
//   // write a function that receives a number as its argument;
//   // if the number is divisible by 3, the function should return 'fizz';
//   // if the number is divisible by 5, the function should return 'buzz';
//   // if the number is divisible by 3 and 5, the function should return
//   // 'fizzbuzz';
//   //
//   // otherwise the function should return the number, or false if no number
//   // was provided or the value provided is not a number
//   while (!isNaN(num)) {
//     num % 3 === 0 && num % 5 === 0
//       ? "fizzbuzz"
//       : num % 3 === 0
//       ? "fizz"
//       : num % 5 === 0
//       ? "buzz"
//       : num % 3 !== 0 && num % 5 !== 0 && num % 15 !== 0
//       ? num
//       : num === null || num === undefined || num === Boolean || num > 1
//       ? false
//       : "false";

//     return false;
//   }
// };

// console.log(fizzBuzz(15));

// write a function that receives a number as its argument ?
// function Get(props) {
//    const [params, setParams] = useState({});
//    ...
//    return (
//     <div>{props.children(params)}</div>
//    )
// }

// if the number is divisible by 3, the function should return 'fizz' ?
// let n = Math.floor(Math.random() * 1000 + 1);
// if (n) {
//   var output = "";
//   if (n % 3 == 0) output += "Rock";
//   if (n % 5 == 0) output += "star";
//   console.log(output || n);
// }

// SyntaxError: expected expression, got keyword 'var'

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

//// Function practice

// function x(value) {
//   // 'value' is parameter
//   console.log(value);
//   console.log(value.name);
//   console.log(typeof value);
// }

// const res = x([1, 2, "3"]);
// console.log(res);

// x({
//   name: "Khalid",
//   age: 22,
// });

// const myName_str = new String("Khalid Hossain");
// // myName_str;
// typeof myName_str;
// const myAge = new Number(22);
// myAge;
// typeof myAge;
// const isLonely = new Boolean(true);
// isLonely;
// typeof isLonely;
// const person = new Array(1, 2, 3, 4, 5, 6);
// person;
// typeof person;

// const age = 22;

// age === myAge;
// typeof age;
// typeof myAge;
// typeof myAge.Number;

// const a = 5;
// const b = "5"
// a == b
// a === b
// const c = [5]
// a == c
// a === c
// const d = {
//    e : 5,
//   f : "5"
// }
// a ==d.e
// a === d.e
// a === d.f
// a == d.f

//----Function Practice-------

const person = (...rest) => {
  // return ({ myName, age, country, arr } = { ...rest });
  const { myName, age, country } = { ...rest };

  console.log(`Hello ${this.myName}`);
  console.log(typeof myName);

  console.log(`age: ${this.age}`);
  console.log(typeof age);

  console.log(`Country ${this.country}`);
  console.log(typeof country);
};

var arr = [1, 2, 3, 4, 5];
person("Khalid", 22, "Bangladesh", arr);

// const person1 = person("Khalid", 22, "Bangladesh", arr);
// console.log(typeof person1);
// console.log(person1);

// console.log(typeof arr);
