// Check off specific to-dos by clicking
$('li').click(function () {
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
