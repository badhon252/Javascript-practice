//! Making a love calculator.
let yourName = prompt("What is your name?");
let partnerName = prompt("What is your parter's name?");
let loveScore = Math.random() * 100;

console.log();

let res = document.getElementById("res");
res.innerText = loveScore;
res.innerText = `Your Love Score for ${yourName} + ${partnerName} is : ${loveScore} %`;
