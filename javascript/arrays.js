let cookies = ['chocolate-chip', 'macadamia nut', 'oatmeal raisin'];
console.log(cookies);

// Array.splice(start, delete, items);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// start  = index of item you want to modify
// delete = number of items to delete
// items  = items to insert in the array

cookies.splice(1,1);
// The original array is modified
console.log(cookies);

// To preserve the original Array use Array.from
let cookies = ['chocolate-chip', 'macadamia nut', 'oatmeal raisin'];
let lessCookies = Array.from(cookies);
console.log(lessCookies);

lessCookies.splice(1,1);
console.log(lessCookies);

// Finding an element without knowing the index and then deleting it
let cookies = ['chocolate-chip', 'macadamia nut', 'oatmeal raisin'];
// Array.indexOf(searchElement, fromIndex)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
let start = cookies.indexOf('oatmeal raisin');
cookies.splice(start, 1);

// Array.filter(callbackFn(element, index, array), thisArg)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let lessCookies = cookies.filter(function (cookie) {
    return cookie !== 'oatmeal raisin';
})
