// const Persons = new Array();
// Persons.push("Badhon");
//
// console.log(Persons);
// console.log(Array.prototype);
//

const personMethods = {
  eat() {
    console.log("Person is eating.");
  },
  sleep() {
    console.log("Person is sleeping.");
  },
  play() {
    console.log("Person is playing.");
  },
};

function Person(name, age) {
  let person = Object.create(personMethods);
}
