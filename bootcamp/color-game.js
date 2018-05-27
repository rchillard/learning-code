var bannerDisplay = document.getElementsByClassName('banner')[0]
var messageDisplay = document.getElementById('message')
var squares = document.querySelectorAll('.square')

var randomColors = generateRandomColors(6)
var pickedColor = pickColor()
var colorDisplay = document.getElementById('colorCode')
colorDisplay.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {
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
      changeColors(clickedColor)
    } else {
      // disappear the box
      messageDisplay.textContent = 'Try again, please!'
      this.style.opacity = 0.0
    }
  })
}

function changeColors (color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
  bannerDisplay.style.backgroundColor = color
  // change each color to match given color
}

function pickColor () {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors (num) {
  // make an array
  var arr = []
  // fill it with random numbers
  for (var i = 0; i < num; i++) {
    // get random color and push into array
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
  return 'rgb(' + redColor + ' ,' + greenColor + ' ,' + blueColor + ')'
}
