// object definition for moviedb

var movie = {
  title: '',
  rating: 0,
  watched: false
}

// create movies and put in array

var movie1 = { title: 'Hook', rating: 4, watched: true }
var movie2 = { title: 'Jurassic Park', rating: 5, watched: true }
var movie3 = { title: 'Hidden Figures', rating: 3, watched: false }

var movies = [movie1, movie2, movie3]

// function to print out objects
function printMovie (mov) {
  if (mov.watched) {
    console.log('You have watched ' + mov.title + ' - ' + mov.rating + ' stars')
  } else {
    console.log('You have not seen ' + mov.title + ' - ' + mov.rating + ' stars')
  }
}

for (var i = 0; i < movies.length; i++) {
  printMovie(movies[i])
}
