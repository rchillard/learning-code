
// SETUP
var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

// ROUTES
app.get('/', function(request, response) {
    console.log("Root route accessed")
    response.render('index')
})

app.get('/fallinlovewith/:name', function(request, response) {
    var name = request.params.name;
    response.render('love', { nameVar: name })
})

app.get('/posts', function(request, response) {
    var posts = [
        { title: "Post 1", author: "Susy"},
        { title: "Incredible job", author: "Bob"},
        { title: "You are the best", author: "Ryan"}
        ]
    response.render("posts", { posts: posts })
})

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server has started on " + process.env.IP + ":" + process.env.PORT)
})
