// Inheritance
// If one class extends another, then it inherits all the methods of the original class

class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    sayHello(){
        return `Hello ${this.first} ${this.last}`
    }
}

// This new class will automatically have the sayHello() method on it
class Student extends Person {

}

var elie = new Student('Elie', 'Rainbow');
console.log(elie.sayHello());

// Super keyword
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hail ${this.firstName} ${this.lastName}`
    }
}

class Student2 extends Person2 {
    constructor(firstName, lastName) {
        // you must use super here!
        super(firstName, lastName);
    }
}