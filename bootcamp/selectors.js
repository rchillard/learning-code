// All of these elements are a part of the document object

// Targets an element by Id
var tag = document.getElementById('highlight')
console.log(tag)

// Targets elements that match the Class Name
var tags = document.getElementsByClassName('bolded')
console.log(tags[1])

// Targets all elements by an HTMl tag name
tags = document.getElementsByTagName('li')
console.log(tags)

// CSS-style selector: querySelector
// Always only return a single element, the first match
tag = document.querySelector('#highlight')
console.log(tag)

// Can be used to selector all elements that match this CSS-style selector
tags = document.querySelectorAll('h1')
console.log(tags)

tags = document.querySelectorAll('.bolded')
console.log(tags)
