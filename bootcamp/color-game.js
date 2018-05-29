var bannerDisplay = document.getElementsByClassName('banner')[0]
var messageDisplay = document.getElementById('message')
var squares = document.getElementsByClassName('square')
var colorDisplay = document.getElementById('colorCode')
var resetButton = document.querySelector('#reset')
var easyButton = document.querySelector('#easy')
var mediumButton = document.querySelector('#medium')
var hardButton = document.querySelector('#hard')

resetButton.addEventListener('click', function () {
  if (easyButton.classList.contains('selected')) {
    generateBoard(3)
  } else if (mediumButton.classList.contains('selected')) {
    generateBoard(6)
  } else if (hardButton.classList.contains('selected')) {
    generateBoard(9)
  } else {
    window.alert('No valid game state detected!')
  }
  messageDisplay.textContent = 'A new game, good luck!'
})

easyButton.addEventListener('click', function () {
  easyButton.classList.add('selected')
  mediumButton.classList.remove('selected')
  hardButton.classList.remove('selected')
  generateBoard(3)
})

mediumButton.addEventListener('click', function () {
  mediumButton.classList.add('selected')
  easyButton.classList.remove('selected')
  hardButton.classList.remove('selected')
  generateBoard(6)
})

hardButton.addEventListener('click', function () {
  hardButton.classList.add('selected')
  easyButton.classList.remove('selected')
  mediumButton.classList.remove('selected')
  generateBoard(9)
})

function generateBoard (num) {
  // reset the Board
  resetBoard(num)
  // generate random colors
  var randomColors = generateRandomColors(num)
  // pick a winning color (victory condition)
  var pickedColor = pickRandom(randomColors, num)
  colorDisplay.textContent = pickedColor

  // apply eventListeners to DOM objects (div elements)
  for (var i = 0; i < num; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = randomColors[i]
    // add click listeners to squares
    squares[i].addEventListener('click', function () {
      // grab the color of the clicked square
      var clickedColor = this.style.backgroundColor
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        // notify player they won the game
        messageDisplay.textContent = 'Correct, well played!'
        changeColors(clickedColor, num)
        for (var i = 0; i < num; i++) {
          squares[i].style.opacity = 1.0
        }
      } else {
        // disappear the box
        messageDisplay.textContent = 'Try again, please!'
        this.style.opacity = 0.0
      }
    })
  }
}

function resetBoard (num) {
  // hide the whole board
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.opacity = 0.0
  }

  // reveal appropriate to the mode
  for (var j = 0; j < num; j++) {
    squares[j].style.opacity = 1.0
  }
}

function generateRandomColors (num) {
  // make an array
  var arr = []
  // fill it with random numbers
  for (var i = 0; i < num; i++) {
    // get random color and assign it to array
    arr[i] = randomColor()
  }
  // return the array
  return arr
}

function randomColor () {
  // pick a red from 0 to 255
  var redColor = Math.floor(Math.random() * 256)
  // pick a green from 0 to 255
  var greenColor = Math.floor(Math.random() * 256)
  // pick a blue from 0 to 255
  var blueColor = Math.floor(Math.random() * 256)
  return 'rgb(' + redColor + ', ' + greenColor + ', ' + blueColor + ')'
}

function pickRandom (arr, num) {
  var random = Math.floor(Math.random() * num)
  return arr[random]
}

function changeColors (color, num) {
  // loop through all num of squares
  for (var i = 0; i < num; i++) {
    squares[i].style.backgroundColor = color
    squares[i].style.opacity = 1.0
  }
  bannerDisplay.style.backgroundColor = color
  // change each color to match given color
}

generateBoard(6)
