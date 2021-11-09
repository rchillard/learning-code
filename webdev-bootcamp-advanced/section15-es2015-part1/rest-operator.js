function printRest(a,b,...c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

printRest(1,2,3,4,5,"waka waka waka")

// This helps make dealing with an unknown number of arguments easier

// Old way of doing it (ES5)
function sumArguments() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumArguments(2,4,6,8,10))

// ES2015 (ES6 way)
var sumArguments2 = (...args) => args.reduce((acc, next) => acc + next)

console.log(sumArguments2(2,4,6,8,10))