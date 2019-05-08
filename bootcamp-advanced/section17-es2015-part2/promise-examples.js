var years = [];
$.getJSON("https://omdbapi.com?t=titanic&apikey=thewdb")
  .then(function(movie) {
    years.push(movie.Year);
    return $.getJSON("https://omdbapi.com?t=shrek&apikey=thewdb");
  })
  .then(function(movie) {
    years.push(movie.Year);
    console.log(years);
  });

console.log("ALL DONE!");

function getMovie(title) {
  return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie("titanic");
var shrekPromise = getMovie("shrek");
var braveheartPromise = getMovie("braveheart");

Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(
  movies
) {
  return movies.forEach(function(value) {
    console.log(value.Year);
  });
});
