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
  constructor(name, age, goals) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.goals = goals;
  }

  score() {
    console.log(`${this.name} has scored ${this.goals} goals`);
  }
}

const messi = new Footballer("Messi", 34, 700);

console.log(messi.name);
