// create secretNumber

var secretNumber = 4

// ask user for a guess
var guess = Number(window.prompt('Guess a number'))
window.alert(guess)

// check the guess
while (guess !== secretNumber) {
  if (guess > secretNumber) {
    window.alert('Too high!  Guess again')
  } else {
    window.alert('Too low!  Guess again')
  }
  guess = Number(window.prompt('Guess a number'))
}

if (guess === secretNumber) {
  window.alert('Correct!')
}

var count = 0

while (count < 6) {
  console.log('count is ' + count)
  count++
}

var str = 'hello friend'
count = 0

while (count < str.length) {
  console.log(str[count])
  count++
}
