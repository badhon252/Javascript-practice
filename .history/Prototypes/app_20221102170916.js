// const Persons = new Array();
// Persons.push("Badhon");
//
// console.log(Persons);
// console.log(Array.prototype);
//

/*
//! Basic prototype of a constructor functions.
const personMethods = {
  eat() {
    console.log(`${this.name} is eating.`); // @personMethods is a child of Person because of references;
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

  return person;
}
const person1 = Person("Khalid", 22);
const person2 = Person("Badhon", 23);

// console.log(person1);
// console.log(person2);

person1.eat();
person1.sleep();

person2.play(); 
*/

//! Basic prototype Architecture.
function Person(name, age) {
  let person = Object.create(Person.prototype, Person.kProto);
  console.log(person);
  person.name = name;
  person.age = age;

  let kProto = {};

  return person;
}

Person.prototype = {
      person3 : " Object.create(Person.prototype, Person.kProto),
  eat() {
    console.log(`${this.name} is eating.`); // @personMethods is a child of Person because of references; (this)
  },
  sleep() {
    console.log(`${this.name} is sleeping.`);
  },
  play() {
    console.log(`${this.name} is playing.`);
  },
};

Person.kProto = {
  practice() {
    console.log(`${this.name} is practicing.`);
  },
};

const person1 = Person("Khalid", 22);

person1.eat();
person1.sleep();
person1.practice();
