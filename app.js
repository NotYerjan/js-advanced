class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get firstName() {
    return this.firstName;
  }
  get lastName() {
    return this.lastName;
  }

  set firstName(newName) {
    this.firstName = newName;
  }
  set lastName(newLastName) {
    this.lastName = newLastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
