// Object Shorthand
var firstName = "Bruce"
var lastName = "Wayne"

var superHero = {
    firstName,
    lastName
}
// Do not need keys in ES6 (2015)

console.log(superHero) // { firstName: 'Bruce', lastName: 'Wayne' }

// Object Methods
var superHero2 = {
    sayHello() {
        return "Hello!";
    }
}

console.log(superHero2.sayHello());

// Computed Property Names
var carMake = "Toyota"
var carModel = "Prius"

var car = {
    [carMake]: "Toyota!", // The name of the property is now the value of carMake, so "Toyota"
    [carModel]: "Prius!" // The name of the property is computed, so it's now Prius
}

console.log(car.Toyota); // "Toyota!"
console.log(car.Prius); // "Prius!"