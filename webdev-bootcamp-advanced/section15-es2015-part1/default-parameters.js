function add(a, b) {
    return a + b;
}

console.log(add()) // Returns NaN error

function add2(a=0, b=0) {
    return a + b;
}

console.log(add2())