
var numbers = []

for (var i = 0; i < 84; i++) {
  numbers.push(i)
}

console.log(numbers)

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i])
  }
}
