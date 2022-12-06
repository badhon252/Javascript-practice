//? Phone Number checking using regular expression
const regex =
  /(\+\d{1,3}[ -])?\(?(?<areacode>\d{3,5})\)?[ -]?(\d{3})[ -]?(\d{3,5})/;

const phoneNumber = "+91 (123) 456 7890";
const match = regex.exec(phoneNumber);
// console.log(match.groups.areacode);
console.log("Area Code: ", match.groups.areacode);
