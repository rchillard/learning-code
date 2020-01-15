
// setup
var express                 = require('express')
var mongoose                = require('mongoose')
var passport                = require('passport')
var bodyParser              = require('body-parser')
var User                    = require('./models/user')
var LocalStrategy           = require('passport-local')
var passportLocalMongoose   = require('passport-local-mongoose')

// create app
var app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// setup session
app.use(require("express-session")({
    secret: "The Pen is Mightier Than the Sword",
    resave: false,
    saveUninitialized: false
}))

// setup passport
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// db
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true })

// ===========
// routes
app.get("/", function (req, res) {
    res.render("home")
})

app.get("/secret", isLoggedIn, function (req, res){
    res.render("secret")
})

// ===========
// auth routes
// ===========
// show sign up form
app.get("/register", function(req, res) {
    res.render("register")
})

// handle user sign up
app.post("/register", function(req, res) {
    // console.log(req.body.username)
    // console.log(req.body.password)
    // res.send("REGISTER POST ROUTE!")
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if (err) {
            console.log(err)
            return res.render('register')
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect('/secret')
            })
        }
    })
})

// show login form
app.get("/login", function(req, res) {
    res.render("login")
})

// handle user login
// utilize middleware
// <--begin of route --- middleware --- end of route (handler) -->
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}),
// end of route (handler)
    function(req, res) {
})

// logout route
app.get("/logout", function(req, res) {
    req.logout()
    res.redirect("/")
})

// middleware to test if logged in
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

// start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...")
})