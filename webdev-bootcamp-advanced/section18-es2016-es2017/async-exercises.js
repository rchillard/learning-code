// Async Functions Assignment
// 1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call
// to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of
// each argument. The function should return a string which displays the username who has the most followers.

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

async function hasMostFollowers(...args) {
  arr = []
  for(let arg of args) {
    arr.push($.getJSON(`https://api.github.com/users/${arg}`))
  }

  console.log(arr)
  var resolved = await Promise.all(arr)
  var mostFollowers = 0;
  var returnStatement = ""
  for(let resolve of resolved) {
    if(resolve.followers > mostFollowers) {
      mostFollowers = resolve.followers
      returnStatement = `${resolve.login} has the most followers with ${resolve.followers}`
    }
  }
  return returnStatement
}

hasMostFollowers("elie", "tigarcia", "colt").then(function(data) {
  console.log(data);
});

("Colt has the most followers with 424");

// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API
// (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise
//  that when resolved will console.log the name of the character.

async function starWarsString(num) {
  var resolved = await $.getJSON(`https://swapi.co/api/people/${num}`)
  return resolved.name
}

starWarsString(1).then(function(data) {
  console.log(data);
});

("Luke Skywalker");

// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is
// featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

async function starWarsString(num) {
  var resolved = await $.getJSON(`https://swapi.co/api/people/${num}`)
  var request = await $.getJSON(`${resolved.films[0]}`)
  var returnString = `${resolved.name} is featured in ${request.title}, directed by ${request.director}`
  return returnString
}

starWarsString(1).then(function(data) {
  console.log(data);
});

("Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner");

// Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains.
// Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in
//  and the name of the planet.

async function starWarsString(num) {
  var resolved = await $.getJSON(`https://swapi.co/api/people/${num}`)
  var request = await $.getJSON(`${resolved.films[0]}`)
  var planets = await $.getJSON(`${request.planets[0]}`)
  var returnString = `${resolved.name} is featured in ${request.title}, directed by ${request.director} and it takes place on ${planets.name}`
  return returnString
}

starWarsString(1).then(function(data) {
  console.log(data);
});

("Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth");
