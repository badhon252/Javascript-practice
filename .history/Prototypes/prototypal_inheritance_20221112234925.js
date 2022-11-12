class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Footballer extends Person {
  constructor(name, age, goals, JurseyNumber) {
    super(name, age);
    this.goals = Number(goals);
    this.JurseyNumber = JurseyNumber;
  }

  score() {
    console.log(`${this.name} has scored ${Number(this.goals)} goals`);
  }
}

const messi = new Footballer("Leo Messi", 34, "700", 10);

// console.log(messi.age);
messi.score();