//? Phone Number checking using regular expression
//? 1. Phone number should be 10 digits
//? 2. Country code in the Phone number should not start with 0
// const regExp = /^([1-9]{1}[0-9]{9})$/;
const regex =
  /(?:(?<areacode>\+\d{1,3}[ -]))?\(?(\d{3,5})\)?[ -]?(\d{3,5})[ -]?(\d{3,5})/gim;

let phoneNumber = "+91 (123) 456 7890";
phoneNumber = "+880 170 610 7019";
const match = regex.exec(phoneNumber);
// console.log(match.groups.areacode);
//! We are checking the country code using <areacode> "Named Capturing Group"
console.log("Area Code: ", match.groups.areacode);
