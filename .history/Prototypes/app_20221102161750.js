// const Persons = new Array();
// Persons.push("Badhon");
//
// console.log(Persons);
// console.log(Array.prototype);
//

const personMethods = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
  sleep() {
    console.log(`${this.name} is sleeping.`);
  },
  play() {
    console.log(`${this.name} is playing.`);
  },
};

function Person(name, age) {
  let person = Object.create(personMethods);
  person.name = name;
  person.age = age;

  person.eat = personMethods.eat;
  person.sleep = personMethods.sleep;
  person.play = personMethods.play;
  return person;
}
const person1 = Person("Khalid", 22);
const person2 = Person("Badhon", 23);
// console.log(person1);
// console.log(person2);

person1.eat();
person1.sleep();

person2.plau();
