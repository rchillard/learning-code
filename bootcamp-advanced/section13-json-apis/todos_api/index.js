var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// Import ROUTES from routes directory
var todoRoutes = require('./routes/todos')

// Configure app for body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// MAIN ROUTES
app.get("/", function(req, res) {
    console.log(req.body)
    res.send("You reached GET @ /!")
})

// Configure app to use other routes
app.use('/api/todos', todoRoutes)

// Start server
app.listen(process.env.PORT, function() {
    console.log("App is running on port: " + process.env.PORT)
})