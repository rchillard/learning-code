// Destructuring
// Extracting values stored in objects and arrays

var superHero = {
    firstName: "Bruce",
    lastName: "Wayne"
}

var {firstName, lastName} = superHero;

console.log(`${firstName} ${lastName}`);

// ES5 Default Values with an object
function createSuperHero(options) {
    var options = options || {};
    var name = options.name || {first: "Masked", last: "Crusader"}
    var isPowerful = options.isPowerful || false;
    return [name.first, name.last, isPowerful];
}

console.log(createSuperHero()); // [ 'Masked', 'Crusader', false ]
console.log(createSuperHero({isPowerful: true})); // [ 'Masked', 'Crusader', true ]
console.log(createSuperHero({name: {first: "Bruce", last: "Wayne"}})); // [ 'Masked', 'Crusader', true ]

// ES6 Default Values with Destructuring
function createSuperHero2({name = {first:"Caped", last:"Crusader"}, isPowerful=false} = {}) {
    return [name.first, name.last, isPowerful];
}

console.log(createSuperHero2()); // [ 'Masked', 'Crusader', false ]
console.log(createSuperHero2({isPowerful: true})); // [ 'Masked', 'Crusader', true ]
console.log(createSuperHero2({name: {first: "Clark", last: "Kent"}})); // [ 'Masked', 'Crusader', true ]

// Object fields as parameters 
function displayInfo({name,favColor}) {
    return [name, favColor];
}

var instructor = {
    name: "Elie",
    favColor: "Purple"
}

console.log(displayInfo(instructor)); // ["Elie", "Purple"]