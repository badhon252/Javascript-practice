class Person {
  //!parent class
  constructor(name, age) {
    this.name = String(name);
    this.age = Number(age);
  }

  eat() {
    console.log(`${this.name} is eating`);
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
}
