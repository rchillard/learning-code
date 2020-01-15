var age = prompt('How old are you?')

if (age < 18) {
  console.log('You may not enter, because you are too young.')
} else if (age >= 18 && age < 21) {
  console.log('You can enter but not drink, because you are ' + age)
} else if (age == 21) {
  console.log('Happy 21st Birthday!  Shots on us!')
} else if (age > 21) {
  console.log('You may imbibe tasty beverages in this establishment, because you are ' + age)
} else {
  console.log('Error, this does not appear to be a valid number')
}

if ((age % 2) > 0) {
  console.log('Your age is odd!')
}
