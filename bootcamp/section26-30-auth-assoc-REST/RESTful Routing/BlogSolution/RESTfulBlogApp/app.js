
// SETUP
// variables
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var express = require("express")

// initialize express as app
var app = express()

// configure app
// connect to database
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true })

// configure express app for certain settings
app.set("view engine", "ejs") // setup to use ejs templates
app.use(express.static("public")) // serves content from public folder (enables css)
app.use(bodyParser.urlencoded({extended:true})) // configures app to use bodyParser

// DATA
// need title, image, body, created
// create a new schema
var blogSchema = new mongoose.Schema({
    title: String, 
    image: String,
    body: String, 
    created: {type: Date, default: Date.now}
})

// compile into a model, which generates Object-Data-Model (ODM) methods
var Blog = mongoose.model("Blog", blogSchema)

// test post
// Blog.create({
//     title: "Test Blog",
//     image: "default-photo.jpeg",
//     body: "Hello, this is a test blog post!"
// })

// ROUTES
// index - redirect to /blogs per convention
app.get("/", function(req, res) {
    res.redirect("/blogs")
})

// blogs - render all the blogs in mongodb
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, allBlogs) {
        if(err) {
            console.log(err)
        } else {
            res.render('index', {blogs:allBlogs})
        }
    })
})

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server is running on: " + process.env.IP + ":" + process.env.PORT)
})