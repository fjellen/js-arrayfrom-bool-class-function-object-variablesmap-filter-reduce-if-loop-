// klasser ar bara recept for hur
// objekt skalls kapas.

class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.apa = 20;
    }
  
  
    tellMeYourName() {
      console.log(this.firstname);
    }
  }
  
  const myPerson = new Person("John", "Doe");
  
  myPerson.tellMeYourName();