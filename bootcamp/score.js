var p1Button = document.getElementById('p1')
var p2Button = document.getElementById('p2')
var resetButton = document.getElementById('reset')
var scoreCeiling = document.getElementById('scoreC')
var scoreTop = document.getElementById('top')
var h1 = document.getElementsByTagName('h1')[0]

var gameOn = true
var winningScore = 5
var p1Score = 0
var p2Score = 0

function updateScore () {
  h1.textContent = p1Score + ' to ' + p2Score
  if (p1Score === winningScore) {
    window.alert('Player 1 is victorious!')
  } else if (p2Score === winningScore) {
    window.alert('Player 2 is victorious!')
  } else {
    // do nothing
  }
}

function resetScore () {
  p1Score = 0
  p2Score = 0
  updateScore()
  gameOn = true
}

scoreCeiling.addEventListener('change', function () {
  scoreTop.textContent = scoreCeiling.value
  winningScore = Number(scoreCeiling.value)
  updateScore()
  resetScore()
})

p1Button.addEventListener('click', function () {
  if (gameOn) {
    p1Score++
    if (p1Score === winningScore) {
      gameOn = false
    }
    updateScore()
  }
})

p2Button.addEventListener('click', function () {
  if (gameOn) {
    p2Score++
    if (p2Score === winningScore) {
      gameOn = false
    }
    updateScore()
  }
})

resetButton.addEventListener('click', function () {
  resetScore()
})
