// Array example
console.log("=== ARRAY EXAMPLE ===")
var arrCouples = new Array(["Bob", "Betty"], ["Dolores", "Daniel"], ["Mildred", "Lawrence"]);
console.log(arrCouples);
console.log(typeof(arrCouples));
var objArr = Object.fromEntries(arrCouples);
console.log(objArr);