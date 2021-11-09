// Array destructuring
var arr = [1,2,3];
var [a,b,c] = arr;
console.log(a,b,c); // 1 2 3

// Swapping values
function swap(a,b) {
    return [a,b] = [b,a];
}

// Using Arrow function
swap2 = (a,b) => [a,b] = [b,a];

console.log(swap(10,5));
console.log(swap2(10,5));