function isEven (number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

var x = window.prompt('Number please!')

window.alert(isEven(x))

function factorial (number) {
  if (number === 0) {
    return 1
  } else {
    var sum = 1
    for (var i = number; i > 0; i--) {
      sum = sum * i
    }
    return sum
  }
}

var y = window.prompt('Number please!')

window.alert(factorial(y))

function kebabToSnake (str) {
  return str.replace(/-/g, '_')
}

var z = window.prompt('Convert some string from kebab to snake')

window.alert(kebabToSnake(z))
