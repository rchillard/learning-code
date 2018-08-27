var express = require('express')

var app = express()

// "/" => 'Hi there!'
app.get("/", function(req, res) {
    res.send("Hi there!")
})

// "/bye" => 'Goodbye!'
app.get("/bye", function(req, res) {
    res.send("Bye!")
})


// "/dog" => 'MEOW!'
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /DOG!")
    res.send("MEOW!!")
})


// splat or catch all route
app.get("*", function(req, res) {
    console.log("Someone made an unhandled request!")
    console.log(req.params)
    res.end("YOU ARE CAUGHT")
})

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server has started!!!")
})