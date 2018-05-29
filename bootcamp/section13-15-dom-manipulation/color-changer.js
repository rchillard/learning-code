var b = document.querySelector('button')
var bod = document.querySelector('body')

console.log(b)

// b.addEventListener('click', function () {
//   console.log(bod.style)
//   if (bod.style.backgroundColor === 'purple') {
//     bod.style.backgroundColor = 'white'
//   } else {
//     bod.style.backgroundColor = 'purple'
//   }
// })

b.addEventListener('click', function () {
  bod.classList.toggle('bg-purple')
})
