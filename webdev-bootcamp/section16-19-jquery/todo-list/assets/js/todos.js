/* eslint-env jquery */

// Check off specific to-dos by clicking
$('ul').on('click', 'li', function () {
  // if li is gray, then turn it black
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    })
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    })
  }
})

$('ul').on('click', 'span', function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove()
  })
  event.stopPropagation()
})

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val()
    $(this).val('')
    // create a new li and add to ul
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>')
  }
})

$('.fa-plus').click(function () {
  $("input[type='text']").fadeToggle()
})
