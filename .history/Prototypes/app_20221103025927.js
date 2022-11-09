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

/*
//! Basic prototype Architecture.
function Person(name, age) {
  let person = Object.create(Person.prototype);

  console.log(person);
  console.log(person.age); //! i need to show the age. urgently needed fixed!

  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
  sleep() {
    console.log(`${this.name} is sleeping.`);
  },
  play() {
    console.log(`${this.name} is playing.`);
  },
  practice() {
    console.log(`${this.name} is practicing.`);
  },
  fullInfo() {
    console.log(`${this.name} is ${this.age} years old.`);
  },
  run() {
    console.log(`${this.name} is running.`);
  },
};

const person1 = Person("Khalid", 22);
const eamin = Person("Eamin", 22);

person1.eat();
person1.sleep();
person1.practice();

person1.fullInfo();
eamin.run();
*/

class Person(){
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
  play() {
    console.log(`${this.name} is playing.`);
  }
  practice() {
    console.log(`${this.name} is practicing.`);
  }
  fullInfo() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
  run() {
    console.log(`${this.name} is running.`);
  }
}