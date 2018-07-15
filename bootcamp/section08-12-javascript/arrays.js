var todos = ['Buy New Turtle']

window.setTimeout(function () {
  // all JS code here
  var mode
  mode = window.prompt('What would you like to do?')

  function addTodo () {
    todos.push(mode.replace('new', ''))
    console.log(todos)
  }

  function deleteTodo () {
    var dIndex = window.prompt('Enter index of todo for deletion')
    todos.splice(dIndex, 1)
    console.log(todos)
  }

  function listTodos () {
    console.log(todos)
    console.log('*****')
    todos.forEach(function (todo, i) {
      console.log(i + ': ' + todo)
    })
    console.log('*****')
  }

  while (mode !== 'quit') {
    if (mode.indexOf('new') !== -1) {
      addTodo()
    }

    if (mode.indexOf('delete') !== -1) {
      deleteTodo()
    }

    if (mode === 'list') {
      listTodos()
    }
    mode = window.prompt('What would you like to do?')
  }
}, 500)

console.log('The final list:')
console.log(todos)
