class Person {
  constructor(name, age) {
    this.name = String(name);
    this.age = Number(age);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Footballer extends Person {
  constructor(name, age, goals, JurseyNumber) {
    super(name, age);
    this.goals = Number(goals);
    this.JurseyNumber = Number(JurseyNumber);
  }

  score() {
    console.log(`${this.name} has scored ${this.goals} goals`);
  }
}

const messi = new Footballer(2n, 34, "700", 10);

console.log(messi.goals);
console.log(typeof messi.name);
