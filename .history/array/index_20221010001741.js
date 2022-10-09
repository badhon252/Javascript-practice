// Determining the location of an item in an array.
/*
const indexOf = function (arr) {
  return arr;
};
let arr = [1, 2, 3, 4, 5, 6];
const items = indexOf(arr);
console.log(items);

*/

//const arr =[1,2,4,3,5,0,8,7,9,6];
//arr.sort();
//arr.sort()
//document.write(`<h1>${arr}</h1>`);
//arr.pop(6);
//arr.push(9);
//arr.shift()
//arr.unshift("Hello World!");
//let sortedArray = arr.sort();
//let joined = sortedArray.join(arr +",");
//let add = arr.concat(sortedArray)
//let copy = arr.slice(0,1) //copying data
//let str = copy.toString()
//let splicing = arr.splice(0, 1)
//arr.reverse()
//let str = arr.toString()
//let str = arr.toLocaleString()
//let searchingIndexNumber = arr.lastIndexOf(6)
//let valueOf = arr.valueOf()
//let start =performance.now()
//for(let i=0;i<=sortedArray.length;i++){
// document.write(`<h1>${sortedArray[i]}</h1>`);
//}
/*
let i = 0;

while (i<=sortedArray.length) {
  document.write(`<h1>${sortedArray[i]}</h1>`);
  i++;
}
let end = performance.now()
let exeTime = end - start;
console.log(exeTime)
*/
/*
let arr = [];
let num = 100;
for (let j=0; j<=num;j++) {
 arr.push(j*j);
 //document.write(arr[j] + " ")
 // console.log(j);
}
*/
/*
let start = performance.now()
let i = 0;
while (i <= arr.length) {
  document.write(`<h1>${arr[i]}</h1>`);
  i++;
}
let end = performance.now()
let exeTime = end - start;
console.log(exeTime)
*/
/*
let i = 0;

let start = performance.now()
for (;i<=arr.length;i++) {
  document.write(arr[i] + ", ");
}
let end = performance.now()
let exeTime = end - start;
console.log(exeTime);
*/

/*
function swapArray(array, index1, index2){
const temp = arr[index1]
arr[index1] = arr[index2];
arr[index2] = temp;
}
const arr =[2,1,3,4,6,5];
swapArray(arr, 0, 1)
console.log(arr);
*/
/*
let start = performance.now()
const swapFunction = (array, index1, index2) =>{
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const arr = [1,2,3,5,4,7,6];
swapFunction(arr,3,4);
swapFunction(arr,5,6);
let end = performance.now();
console.log(arr);
console.log(end-start);
*/

/*
let start = performance.now()
const swapFunction = (arr) =>{
  for(let i of arr){
   (arr[i]>arr[i+1]) ? 
 // return [arr[i]]= [arr[i++]]
  return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  :  return [[arr[i]=arr[--i]]]
}}

const arr = [2,1,3,4,5,6,7];
swapFunction(arr)
let end = performance.now();
console.log(arr);
console.log(end-start); 
*/

/*
const arr = [2,1,3,5,4];
const swap = (array) =>{
  for(let i = 0; i<array.length; i++){
  // console.log(array[i])
   ( array[i] > array[i+1] ) 
   ? 
  // console.log(array[i])
 [array[i],array[i++]] = [array[i++],array[i]]
   :
   console.log(array[i]);
 //  [array[i],array[i++]] = [array[i++],array[i]]

  }
  //return array;
}

console.log(swap(arr));

*/

/*
// Insertion sorting Algorithm ==>

const arr = [2,1,3];
document.write(arr)

const insertion_Sort = (nums) => {
  
  for (let i = 1; i < nums.length; i++) {
   let j = i - 1
   // console.log(j)
   let temp = nums[i]
    console.log(temp) 
   
    while (j >= 0 && nums[j] > temp) {
     //  console.log(nums[j])
      
      nums[j + 1] = nums[j]
      //console.log(nums[j+1]);
      j--
     //  console.log(j--)
      
    }
    
   //console.log("temp ",nums[j + 1]);
    
    nums[j + 1] = temp
    
   // console.log("final ", nums[j + 1])
    
    
  }
  return nums
}
//console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
//console.log(insertion_Sort([2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7, 483, 9339, 29, -3, 90, -2, 81, 54, 7372, -92, 93, 93, 18, -43, 21])); 

console.log(insertion_Sort(arr));

*/

/*
* Did Not solved!

// Fizz buzz Algorithm ==>
const fizzBuzz = (nums) =>{
 
  for(let i=0; i<=nums.length; i++){
    if (i%3===0) {
      console.log("Fizz")
      continue;
    }else if (i%5===0){
      console.log('Buzz')
      continue ;
    }else if(i%3===0 && i%5===0){
     console.log('FizzBuzz')
      continue ;
    }
    else{
      console.log(i);
    } 
    console.log(i)
  }
}
const output = fizzBuzz(30);
console.log(typeof output);
*/

/*
const num =30;
let output;
for(let i=0; i<=num; i++){
  switch(true){
    case i % 3===0:
    //  output = 'Fizz';
      console.log('fizz');
    case i % 5===0:
     // output = 'Buzz';
     console.log('buzz');
    case i%15===0:
    // output = 'FizzBuzz';
      console.log('fizzBuzz');
    default :
   // output = i;
   console.log(i);
  }
 //console.log(output)
}
*/
/*
 * User: @Khalid
 *** User will give input with the firstNumber and the last number, if needed, I have to sort the data first!
 * Then, I have to find the missing number from the input list;
 */

let array = [1, 3, 10, 2, 5, 6, 7, 8, 9];

const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = temp;
  }
  return nums;
};
const newArray = insertion_Sort(array);

console.log("array 👉", newArray);

let firstNumber = newArray.slice(0, 1);
let lastNumber = newArray.split(-1);
console.log("lastNumber👉 ", lastNumber);

const missingNum = (array, firstNum, lastNum) => {
  for (let i = firstNum; i <= array.length; i++) {
    console.log(i);
  }
};
