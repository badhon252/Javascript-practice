class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Footballer {
  constructor(name, age, goals) {
    this.name = name;
    this.age = age;
    this.goals = goals;
  }

  score() {
    console.log(`${this.name} has scored ${this.goals} goals`);
  }
}
