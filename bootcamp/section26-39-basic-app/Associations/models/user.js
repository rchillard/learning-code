var mongoose = require("mongoose")

// USER - email, name
// schema
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

// model
var User = mongoose.model("User", userSchema)

// export
module.exports = User

// Simple way
// module.exports = mongoose.model("User", userSchema)