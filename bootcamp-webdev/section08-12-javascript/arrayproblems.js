console.log('Reverse Function Test')

function reverseArray (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
  }
}

var test = ['Cat', 'Dog', 'Parrot', 'Fish']

reverseArray(test)

console.log('Uniform Function Test')
// 1st attempt (forEach proves problematic)
// function isUniform (arr) {
//   return arr.forEach(function (ar) {
//     if (arr[0] !== ar) {
//       console.log(ar)
//       return false
//     }
//     return true
//   })
// }

// 2nd attempt (confirmed working)
function isUniform (arr) {
  var base = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (base !== arr[i]) {
      return false
    }
  }
  return true
}

var uni = [1, 1, 1, 1, 1, 1, 1, 1, -50]

console.log(isUniform(uni))

console.log('Sum Function Test')

function sumArray (arr) {
  var sum = 0
  arr.forEach(function (ar) {
    sum = sum + ar
  })
  return sum
}

console.log(sumArray(uni))

function max (arr) {
  var maxAr = 0
  arr.forEach(function (ar) {
    if (ar > maxAr) {
      maxAr = ar
    }
  })
  return maxAr
}

console.log('Max Function Test')
console.log(max(uni))
