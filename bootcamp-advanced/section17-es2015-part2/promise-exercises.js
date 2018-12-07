// PROBLEM
// 1. Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make
// an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name
// and number of followers of each argument. The function should return a promise, which when resolved, returns a
// string which displays the username who has the most followers.

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

// ATTEMPT
function getMostFollowers(...args) {
  var promises = [];
  // Collect all the promises
  for (let val of args) {
    promises.push(val => getFollowers(val));
  }

  console.log("THIS IS PROMISES!");
  console.log(promises);

  console.log("THESE ARE FOLLOWERS!");
  for (let i = 0; i < promises.length; i++) {
    console.log(promises[i].followers);
  }
  // Resolve them
  // Promise.all(promises).then(function(query){
  //     return query.forEach(function(value){
  //         console.log(value.responseJSON.followers)
  //     })
  // })
}

function getFollowers(username) {
  return $.getJSON(`https://api.github.com/users/${username}`);
}

function printFollowers(username) {
  getFollowers(username)
    .then(function(value) {
      console.log(value.responseJSON.followers);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// SOLUTION
// function getMostFollowers(...username) {
//     let baseUrl = "https://api.github.com/users/"
//     let urls = usernames.map(username => $.getJSON(baseUrl + username))
//     return Promise.all(urls).then(function(data) {
//         let max = data.sort((a,b) => a.followers < b.followers)[0]
//         return `${max.name} has the most followers with ${max.followers}`
//     })
// }

// TEST #1
// getMostFollowers('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });

// "Colt has the most followers with 424"

// PROBLEM
// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the
// Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function.
// Your function should return a promise that when resolved will console.log the name of the character.

function starWarsString(num) {
  return new Promise(function(resolve, reject) {
    $.getJSON(`https://swapi.co/api/people/${num}`);
  });
}

// // TEST #2
// starWarsString(1).then(function(data){
//     console.log(data)
// })

// "Luke Skywalker"

starWarsString(1).then(function(data) {
  console.log(data);
});

("Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner");

starWarsString(1).then(function(data) {
  console.log(data);
});

("Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth");

// SOLUTION
// function starWarsString(id) {
//     var str = ''
//     return $.getJSON(`https://swapi.co/api/people/${id}/`).then(function(data) {
//         str += `${data.name} is featured in `
//         let filmData = data.films[0];
//         return $.getJSON(filmData)
//     }).then(function(res) {
//         str += `${res.title}, directed by ${res.director} `
//         let planetData = res.planets[0]
//         return $.getJSON(planetData)
//     }).then(function(res) {
//         str += `and it takes place on ${res.name}`
//         return str
//     }).then(function(finalString) {
//         return finalString
//     })
// }
