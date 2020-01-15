
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

// IMPORT ROUTES
var campgroundRoutes    = require("./routes/campgrounds")
var commentRoutes       = require("./routes/comments")
var authRoutes          = require("./routes/index")

// IMPORT DB HELP
var SeedDB = require("./seeds")
// SeedDB() //seed the database

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

// USE ROUTES
app.use("/campgrounds", campgroundRoutes)
app.use("/campgrounds/:id/comments", commentRoutes)
app.use(authRoutes)

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp server has started on " + process.env.IP + ":" + process.env.PORT)
})
