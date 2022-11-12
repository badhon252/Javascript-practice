class Person {
  //!parent class
  constructor(name, birthYear) {
    this.name = String(name);
    // function age(birthYear) {
    //   let date = new Date();
    //   let currentYear = date.getFullYear();
    //   return currentYear - birthYear;
    //   //   console.log(currentAge);
    // }
    // this.age = Number(age);
    this.birthYear = birthYear;
  }

  //? Getter function to get the age of the person from the birth year
  get age() {
    let date = new Date();
    let currentYear = date.getFullYear();
    let cAge = currentYear - this.birthYear;
    //   console.log(currentAge); let cAge = age(birthYear);
    // this.age = `${this.name}'s age is ${Number(cAge)}`;
    return this.name + "'s age is : " + cAge;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  static read() {
    console.log(`${this.name} is reading`);
  }
}
Person.read();

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

// const messi = new Footballer("Leo Messi", 1988, 700, 10);
// console.log(messi.goals);
// console.log(messi.name);
// console.log(messi.age);
// messi.score();

// const ronaldo = new Footballer("Cristiano Ronaldo", 1986, 800, 7);
// console.log(ronaldo.goals);
// console.log(ronaldo.age);
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

  /**
   * @param {(arg0: string) => any} name
   */
  set lang(name) {
    this.language = name;
  }
}

const Badhon = new Programmer("Khalid", 2000, "JavaScript", "badhon252");
// console.log(Badhon.name);
// console.log(Badhon.constructor.name);
// console.dir(Badhon.age);
// Badhon.favLanguage();
// Badhon.passion();
// Badhon.eat();
// Badhon.sleep();
// let newLang = (Badhon.lang = "python");
// console.log(newLang);

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

const badhon = new WebDeveloper(
  "Badhon",
  2000,
  "JavaScript",
  "badhon252",
  "Frontend"
);

console.log(badhon.name);
badhon.showSkills();
console.log(badhon.github);
console.log(badhon.age);
badhon.read();
