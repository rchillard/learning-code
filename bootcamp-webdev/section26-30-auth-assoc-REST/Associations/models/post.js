var mongoose = require("mongoose")

// POST - title, content
// schema
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var Post = mongoose.model("Post", postSchema)
module.exports = Post

// Simple way
// module.exports = mongoose.model("Post", postSchema)