// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// 2 - Add an instance method called start which returns the string "VROOM!"

class Vehicle2 {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        return "VROOM!"
    }
}

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

class Vehicle3 {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        return "VROOM!"
    }

    toString() {
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`
    }
}

var vehicle3 = new Vehicle3("Mazda", "Miata", 2015)
console.log(vehicle3.toString());

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

class Car extends Vehicle3 {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Motorcycle extends Vehicle3 {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
}