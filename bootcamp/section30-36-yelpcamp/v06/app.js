
// SETUP
var express         = require("express")
var bodyParser      = require("body-parser")
var mongoose        = require("mongoose")
var passport        = require("passport")
var localStrategy   = require("passport-local")

// IMPORT MODELS
var Campground      = require("./models/campground")
var Comment         = require("./models/comment")
var User            = require("./models/user")

// IMPORT DB HELP
var SeedDB = require("./seeds")

// Initialize Express
var app = express()

// Connect to Database
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true })

// Define settings for Express and related packages
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

// Passport Configuration
app.use(require("express-session")({
    secret: "Lady is the best and cutest dog ever, the best companion",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Middleware added to pass the currentUser on every route
app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})

// SEED THE DB
// SeedDB()

// ROUTES
app.get('/', function(req, res) {
    res.render('landing')
})

// INDEX - show all campgrounds
app.get('/campgrounds', function(req, res) {
    // identify user
    console.log(req.user)
    // generate page
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err)
        } else {
            res.render('campgrounds/index', {campgrounds:allCampgrounds, currentUser: req.user})
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
    res.render('campgrounds/new')
})

// SHOW - display a single campground
app.get('/campgrounds/:id', function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err)
        } else {
            console.log(foundCampground)
            res.render('campgrounds/show', {campground: foundCampground})
        }
    })
})

// ==============================================
// Comments Routes
// ==============================================

app.get('/campgrounds/:id/comments/new', isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err)
        } else {
            res.render("comments/new", {campground: campground})
        }
    })
})

app.post('/campgrounds/:id/comments', isLoggedIn, function (req, res) {
    // look up campground using ID
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err)
            res.redirect("/campgrounds")
        } else {
            // create new comment
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err)
                } else {
                    // connect new comment to campground
                    campground.comments.push(comment)
                    campground.save()
                    // redirect campground show page
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
        } 
    })
})

// ===========
// AUTH ROUTES
// ===========

// show register form
app.get("/register", function(req, res) {
    res.render("register")
})

// handle new registration
app.post("/register", function(req, res) {
    // make new user
    var newUser = new User({username: req.body.username})
    // register new user in database
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err)
            return res.render("register")
        }
        // authenticate this user in session
        passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds")
        })
    })
})

// show login form
app.get("/login", function(req, res) {
    res.render("login", {currentUser: req.user})
})

// handle login
// app.post("route", middleware, callback)
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
        
})

// logout route
app.get("/logout", function(req, res) {
    req.logout()
    res.redirect("/campgrounds")
})

// our own middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp server has started on " + process.env.IP + ":" + process.env.PORT)
})
