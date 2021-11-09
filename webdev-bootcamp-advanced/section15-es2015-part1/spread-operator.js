// Spread operator
// Used on arrays to spread each value out (as a comma separated value)
// Useful when you have an array, but what you are working with expects comma separated values

// ES5
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

var combined = arr1.concat(arr2).concat(arr3)
console.log(combined)

// ES6 (2015)
var combined2 = [...arr1, ...arr2, ...arr3]
console.log(combined2)

var arr = [3,2,4,1,5];
Math.max(arr) // NaN

// ES5
Math.max.apply(this, arr) // 5

// ES6 (2015)
Math.max(...arr) // 5

function sumValues(a,b,c) {
    return a + b + c;
}

var nums = [12,15,20]

// ES5
console.log(sumValues.apply(this, nums)) // 47

// ES6 (2015)
console.log(sumValues(...nums)) // 47