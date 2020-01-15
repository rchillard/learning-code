
// SETUP
var express = require('express')
var request = require('request')


var app = express()
app.set('view engine', 'ejs')

// ROUTES

app.get('/', function (req, res) {
    res.render('search')
})

app.get("/results", function (req, res) {
    var query = req.query.search // store the query ?=search
    console.log(query) // log this for debug
    var queryString = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb" // compose the URL together as a queryString
    console.log(queryString) // log this for debug
    request(queryString, function(error, response, body) { // call the API
        if(!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body)
            // res.send(parsedData)
            res.render('results', {parsedData: parsedData})
        } else {
            console.log('Code is not 200/success')
        }
    })
})

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Movie server has started on " + process.env.IP + ":" + process.env.PORT)
})
