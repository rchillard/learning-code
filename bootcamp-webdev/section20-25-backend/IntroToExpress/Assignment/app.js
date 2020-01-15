// SETUP 
var express = require('express')

var app = express()

// ROUTES
app.get("/", function(request, response) {
    response.send("Hi there, welcome to my assignment!")
})

app.get("/speak/:animal", function(request, response) {
    var animal = request.params.animal.toLowerCase()
    var sounds = {
        cat: "I hate you human",
        cow: "Moo",
        dog: "Woof Woof!",
        goldfish: "...",
        pig: "Oink"
    }
    var sound = sounds[animal];
    response.send("The " + animal + " says '" + sound + "'")
})

app.get("/repeat/:word/:number", function(request, response) {
    var word = request.params.word
    var number = Number(request.params.number)
    var text = ""
    for (var i = 0; i < number; i++) {
        text += (word + " ")
    }
    response.send(text)
})

app.get("*", function(request, response) {
    response.send("Sorry, page not found... what are you doing with your life?")
})

// STARTUP or RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("It's time to serve some farm animals and repeat some words!")
    console.log("Server has started on " + process.env.IP + ":" + process.env.PORT)
})
