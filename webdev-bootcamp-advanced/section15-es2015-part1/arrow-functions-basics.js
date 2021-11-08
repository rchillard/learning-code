// Regular function
var add = function (a, b) {
    return a + b;
}
console.log(add(2, 2));

// Arrow function
var add2 = (a, b) => a + b;
console.log(add2(3, 3));

// Regular function
var mapResult = [1, 2, 3].map(function (value) {
    return value * 2;
});
console.log(mapResult)
// [2, 4, 6]

// Arrow function
var mapResult2 = [1, 2, 3].map(value => value * 2)
console.log(mapResult2)
// [2, 4, 6]

function doubleAndFilter(arr) {
    return arr.map(function (value) {
        return value * 2;
    }).filter(function (value) {
        return value % 3 === 0;
    })
}
console.log(doubleAndFilter([5, 10, 15, 20]));
// [30]

var doubleAndFilter2 = arr => arr.map(value => value * 2).filter(number => number % 3 === 0)
console.log(doubleAndFilter2([5, 10, 15, 20]));
// [30]

// When and where do you use arrow functions?
// Arrow functions are NOT the same as regular functions
// Arrow functions do not get their own 'this' keyword
// Inside of an arrow function, the keyword 'this' has its original meaning from the enclosed context

var instructor = {
    firstName: "Bruce",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hello " + this.firstName); // the this keyword here refers to the window (not the object called instructor)
        })
    }
}

instructor.sayHi(); // "Hello undefined"

var instructor2 = {
    firstName: "Bruce",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hello " + this.firstName); // the this keyword now refers to the instructor2 object
        }.bind(this), 1000); // bind changes the meaning of the keyword 'this'
    }
}

instructor2.sayHi(); // "Hello Bruce"

var instructor3 = {
    firstName: "Peter",
    sayHi: function(){ // the function keyword was used here to create new block scope
        setTimeout(() => { // the arrow function is now using the block scope of the object instead of the window when you refer to 'this'
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor3.sayHi(); // "Hello Peter"

// arrow functions do not get their own arguments keyword
var add3 = (a,b) => {
    return arguments;
}

console.log(add3(2,4)); // ReferenceError (regular JavaScript), returns arguments (NodeJS)

function outer() {
    return innerFunction = () => {
        return arguments;
    }
}

console.log(outer(1)(2));

// arrow functions should NEVER be used as methods in objects, since we will get incorrect value of the keyword 'this'
// You should NEVER do this:
var instructor4 = {
    firstName: "Tony",
    sayHi: () => `Hello ${this.firstName}.` // This will be a bad reference to 'this'
}

console.log(instructor4.sayHi()); // "Hello undefined"