
// SETUP
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

// IMPORT MODELS
var Campground = require("./models/campground")
var Comment = require("./models/comment")
var User = require("./models/user")

// IMPORT DB HELP
var SeedDB = require("./seeds")

// Initialize Express
var app = express()

// Connect to Database
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true })

// Define Settings for Packages
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// app.use(express.static(__dirname + '/public'));

// SEED THE DB
SeedDB()

// ROUTES
app.get('/', function(req, res) {
    res.render('landing')
})

// INDEX - show all campgrounds
app.get('/campgrounds', function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err)
        } else {
            res.render('index', {campgrounds:allCampgrounds})
        }
    })
})

// CREATE - add new to database
app.post('/campgrounds', function(req, res) {
    // Get data from form and save in variables
    var name = req.body.name
    var image = req.body.image
    var description = req.body.description
    var newCampground = { name: name, image: image, description: description }
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err)
        } else {
            // Redirect back to campgrounds page
            res.redirect('/campgrounds')
        }
    })
})

// NEW - show form to add new
app.get('/campgrounds/new', function(req, res) {
    res.render('new')
})

// SHOW - display a single campground
app.get('/campgrounds/:id', function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err)
        } else {
            console.log(foundCampground)
            res.render('show', {campground: foundCampground})
        }
    })
})

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp server has started on " + process.env.IP + ":" + process.env.PORT)
})
