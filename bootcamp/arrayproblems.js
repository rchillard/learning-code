console.log('Reverse Function Test')

function reverseArray (arr) {
  for (var i = arr.length; i >= 0; i--) {
    console.log(arr[i])
  }
}

var test = ['Cat', 'Dog', 'Parrot', 'Fish']

reverseArray(test)

console.log('Uniform Function Test')

function isUniform (arr) {
  arr.forEach(function (ar) {
    if (arr[0] !== ar) {
      console.log(ar)
      return false
    }
  })
  return true
}

var uni = [1, 1, 1, 4, 1, 1]

console.log(isUniform(uni))

console.log('Sum Function Test')

function sumArray (arr) {
  var sum = 0
  arr.forEach(function (ar) {
    sum = sum + ar
  })
}

console.log(sumArray(uni))

console.log('Sum Function Test')

function max (arr) {
  arr.forEach(function (ar) {
    
  })
}
