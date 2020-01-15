var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/auraxis_network_blog")

// POST - title, content
// schema
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

//model
var Post = mongoose.model("Post", postSchema)

// USER - email, name
// schema
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})

// model
var User = mongoose.model("User", userSchema)

// CREATE DATA
// Sample USER
// var newUser = new User({
//     email: "harry@hogwarts.edu",
//     name: "Harry Potter"
// })

// newUser.posts.push({
//     title: "How to Brew Polyjuice Potion",
//     content: "Just kidding.  Go to potions class to learn it!"
// })

// newUser.save(function (err, user) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })

// Sample POST
// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// })

// newPost.save(function (err, post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// })

// Retrieve Existing User
User.findOne({name: "Harry Potter"}, function (err, user) {
    if (err) {
        console.log(err)
    } else {
        user.posts.push({
            title: "Three Things I Really Hate",
            content: "Voldemort, Voldemort, Voldemort"
        })
        user.save(function (err, user) {
            if (err) {
                console.log(err)
            } else {
                console.log(user)
            }
        })
    }
})