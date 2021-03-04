// Destructuring
// Arrays
let animals = ["giraffe", "rhino", "lion", "gazelle"]
console.log(animals)

console.log(animals[1])

let [tall, tough, mean, meat] = animals
console.log(tough)

// Objects
let heroes = {
    xmen: 'wolverine',
    avengers: 'ironman',
    fantasticfour: 'humantorch'
}

let xman = heroes.xmen
let avenger = heroes.avengers
let fantastic = heroes.fantasticfour

console.log(xman, avenger, fantastic)

let {xmen, avengers, fantasticfour} = heroes
console.log(xmen, avengers, fantasticfour)

// Rename variable as you destructure
let {avengers: favorite} = heroes
console.log(favorite)