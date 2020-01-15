
// SETUP
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

// Initialize Express
var app = express()

// Connect to Database
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true })

// Define Settings for Packages
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// app.use(express.static(__dirname + '/public'));

// SCHEMA
// Define schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

// Compose a model from the schema
var Campground = mongoose.model("Campground", campgroundSchema)

// Simple test to see if you can add in a campground
// Campground.create(
//     {
//         name: "Lake Conroe",
//         image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104496f4c171afe5b0be_960.jpg&user=Pexels",
//         description: "This is a lake with a con man living in the middle of it.  He rows back and forth day in and day out, watching for waylaid travelers.  Be careful!"
//     }, function(err, campground) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('Successfully created a new campground.')
//             console.log(campground)
//         }
//     })

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
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err)
        } else {
            res.render('show', {campground: foundCampground})
        }
    })
})

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp server has started on " + process.env.IP + ":" + process.env.PORT)
})
