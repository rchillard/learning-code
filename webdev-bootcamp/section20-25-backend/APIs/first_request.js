
// SETUP
var request = require('request')

// Make a sample request
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body) // take the raw body (which is a string) and turn it into a JavaScript object
        console.log(body) // show the HTML for the page requested
        console.log("Sunset in Hawaii is at " + parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]) // drill down into the object and pull out the data you want
    }
})

// request('http://www.google.com', function (error, response, body) {
//     console.log("Status code: " + response.statusCode)
//     if (error) {
//         console.log("There was an error: " + error) // show the error
//     } else {
//         if (response.statusCode == 200) {
//             console.log(body)
//         } else {
//             console.log("Received status code other than 200")
//         }
//     }
// })

// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
// http://www.omdbapi.com/?i=tt3896198&apikey=thewdb