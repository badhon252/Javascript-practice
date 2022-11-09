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

/**
 *! Building same object model using class & constructors, besides prototypes.
 *! Object define using class key and Constructor functions.
 * Class key is a syntactic sugar of constructor functions.
class Person {
  constructor(name, age) {
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

const person1 = new Person("Khalid", 22);
const person2 = new Person("Eamin", 22);
console.log(person1.name);
person1.play();
person2.run();

 */

//? 1. Create a constructor function called Workshop that receives a teacher and a list of students.
// function Workshop(teacher, students) {
//   this.teacher = teacher;
//   this.students = students;
// }

// Workshop.prototype.ask = function () {
//   console.log(this.teacher, this.students);
// };

// const workshop = new Workshop("Khalid", [
//   "Badhon",
//   "Eamin",
//   "Rakib",
//   "Rakibul",
// ]);
// workshop();

// console.log(workshop);

function Workshop(teacher => teacher+" and msg: ") {
  this.teacher = teacher;
}

Workshop.prototype = {
  ask(msg) {
    console.log(this.teacher, msg);
  },
};

const workshop1 = new Workshop("Khalid");
// Workshop.prototype.ask();

workshop1.ask("Hello world!");
