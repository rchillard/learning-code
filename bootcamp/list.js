
var todos = []

// function to print array in nice format
function printList (arr) {
  console.log('***********')
  arr.forEach(function (item) {
    console.log(item)
  })
  console.log('***********')
}

window.setTimeout(function () {
    // all JS code here
  // main logic for capturing to-do items
  var input = window.prompt('What would you like to do?')

  while (input !== 'quit') {
    if (input.indexOf('new') > 0) {
      todos.push(input.replace('new', ''))
      printList(todos)
    }

    if (input === 'list') {
      todos.forEach(function (todo) {
        console.log(todo)
      })
    }
    input = window.prompt('What would you like to do?')
  }
}, 500)
