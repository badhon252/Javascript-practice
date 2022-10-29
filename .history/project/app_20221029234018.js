//! Making a love calculator.
let yourName = prompt("What is your name?");
let partnerName = prompt("What is your parter's name?");
let loveScore = Math.random() * 100;
// alert(loveScore.ceil());
document.getElementsByTagName(
  h2
).innerText = `Your Love Score for ${yourName} + ${partnerName} is : ${loveScore} %`;
