// Class is a new reserved keyword
// Creates a constant (it cannot be redelcared)
// Class keyword does not hoist

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var elie = new Student('Elie', 'Schoppik')

// ES5 - Instance Method
Student.prototype.sayHello = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

// ES2015 (ES6) - Instance Method
class Student2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 
    sayHello() {
        return `Greetings ${this.firstName} ${this.lastName}`
    }
}

// ES2015 (ES6) - Class Method called 'statics' are placed on the constructor function
class Student3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    sayHello() {
        return `Greetings ${this.firstName} ${this.lastName}`
    }

    static isStudent(obj) {
        return obj.constructor === Student;
    }
}

// Examples of Class Methods in common use
Array.isArray([])
Object.create()
Object.freeze()
