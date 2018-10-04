
// SETUP
var express = require("express")
var bodyParser = require("body-parser")

var app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// app.use(express.static(__dirname + '/public'));

var campgrounds = [ 
    { name: "Main Bayou", image: "https://www.photosforclass.com/download/pixabay-336606?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fea36b70928f21c22d2524518b7444795ea76e5d004b0144291f0c971afe8b3_960.jpg&user=Free-Photos"},
    { name: "Lake Conroe", image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104496f4c171afe5b0be_960.jpg&user=Pexels"},
    { name: "South Main", image: "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f4c171afe5b0be_960.jpg&user=Free-Photos"},
    { name: "Salmon Creek", image: "https://www.photosforclass.com/download/flickr-3753652218"},
    { name: "Granite Hill", image: "https://www.photosforclass.com/download/flickr-16263385388"},
    { name: "Main Bayou", image: "https://www.photosforclass.com/download/pixabay-336606?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fea36b70928f21c22d2524518b7444795ea76e5d004b0144291f0c971afe8b3_960.jpg&user=Free-Photos"},
    { name: "Lake Conroe", image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104496f4c171afe5b0be_960.jpg&user=Pexels"},
    { name: "South Main", image: "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f4c171afe5b0be_960.jpg&user=Free-Photos"},
    { name: "Salmon Creek", image: "https://www.photosforclass.com/download/flickr-3753652218"},
    { name: "Granite Hill", image: "https://www.photosforclass.com/download/flickr-16263385388"}
]

// ROUTES
app.get('/', function(req, res) {
    res.render('landing')
})

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds:campgrounds})
})

app.post('/campgrounds', function(req, res) {
    // get data from form and add to campgrounds array
    campgrounds.push({ name: req.body.name, image: req.body.image })
    //redirect back to campgrounds page
    res.redirect('/campgrounds')
})

app.get('/campgrounds/new', function(req, res) {
    res.render('new')
})

// SERVER RUN
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp server has started on " + process.env.IP + ":" + process.env.PORT)
})
