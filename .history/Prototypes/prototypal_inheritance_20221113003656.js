//! Writing a fcuntion that calculate latest the age

function age(age) {
  let date = new Date();
  let year = date.getFullYear();
  console.log(year);
  //   return 2021 - 22;
}
age();
class Person {
  //!parent class
  constructor(name, age) {
    this.name = String(name);
    this.age = Number(age);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

//? Prototypal Inheritance
class Footballer extends Person {
  //! Inherited class (child class)
  constructor(name, age, goals, JurseyNumber) {
    super(name, age);
    this.goals = Number(goals);
    this.JurseyNumber = Number(JurseyNumber);
  }

  score() {
    console.log(`${this.name} has scored ${this.goals} goals`);
  }
}

// const messi = new Footballer("Leo Messi", 34, 700, 10);
// console.log(messi.goals);
// console.log(messi.name);
// messi.score();

// const ronaldo = new Footballer("Cristiano Ronaldo", 36, 800, 7);
// console.log(ronaldo.goals);
// ronaldo.score();

//? Prototypal Inheritance for Programmer class

class Programmer extends Person {
  constructor(name, age, language, github) {
    super(name, age);
    this.language = String(language);
    this.github = String(`@${github}`);
  }
  favLanguage() {
    console.log(`${this.name} loves ${this.language}`);
  }
  passion() {
    console.log(`${this.name} is passionate about ${this.language}`);
  }
}

const Badhon = new Programmer("Khalid Hossain", 22, "JavaScript", "badhon252");

// console.log(Badhon.name);
// console.log(Badhon.github);
// Badhon.favLanguage();
// Badhon.passion();
Badhon.sleep();
//? Prototypal Inheritance for WebDeveloper class

class WebDeveloper extends Programmer {
  constructor(name, age, language, github, skills) {
    super(name, age, language, github);
    this.skills = skills;
  }
  showSkills() {
    console.log(`${this.name} knows ${this.skills}`);
  }
}
