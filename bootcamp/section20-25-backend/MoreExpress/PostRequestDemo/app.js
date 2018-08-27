
// SETUP
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

// DATA
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily", "Courtney"]

// ROUTES
app.get('/', function (request, response) {
    response.render('home')
})

app.get('/friends', function (request, response) {
    response.render('friends', {friends: friends})
})

app.post('/addfriend', function (request, response) {
    console.log(request.body.newfriend)
    friends.push(request.body.newfriend)
    response.redirect("/friends")
})

// RUN SERVER
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server has started on " + process.env.IP + ":" + process.env.PORT)
})