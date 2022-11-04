//Truthy values
console.log(0 == "");
console.log(1 == "1");
console.log(1 == true);
console.log(0 == false);

//Falsey Value
console.log(true == "true");
console.log(0 === true);
console.log(0 === false);
console.log(1 === "");
console.log(null === " ");
console.log(1 === null);
console.log(1 === "1");
console.log(undefined === null);

let i;
console.log(i == undefined);
console.log(i === undefined);
i = "";
console.log();
console.log(i === null);

let a = "Hello world!";
console.log(a);

let b = Number(a);
console.log(b);

function c() {
  console.log(a);
}
console.log(typeof c);

let arr = [1, 2, 3];
console.log(typeof arr;)

let ar = Number(arr);
console.log(typeof ar);
console.log(ar);

let bool = ar ? true : false;

bool;