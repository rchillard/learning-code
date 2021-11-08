// let creates a type of scope called block scope
// before this, there were two types of scope: global and function
// what is block scope?
// the following keywords create blocks:
// if
// for
// while
// try
// catch

var instructor = "Elie"

if(instructor === "Elie") {
    let funFact = "Plays Cello!"
}

console.log(funFact)
// reference error

// var keyword is subject to hoisting
function hello() {
    return greeting
    var greeting = "Hello!"
}

hello() // undefined

// let keyword hoists but we can not access the value -- it is in a Temporal Dead Zone (TDZ)

function hello2() {
    return greeting
    let greeting = "Hello2!"
}

hello2() // reference error

for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000)
}

// 5
// 5
// 5
// 5
// 5
// Why?  Because the var keyword creates a global variable that is already 5 when setTimeout function runs

for(let j = 0; j < 5; j++) {
    setTimeout(function() {
        console.log(j);
    }, 1000)
}

// 0
// 1
// 2
// 3
// 4
// Why?  Because the let keyword creates a new variable each time (in each for block)