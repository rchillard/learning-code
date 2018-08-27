
// SETUP
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true })

// DEFINE SCHEMA AND MODEL
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model("Cat", catSchema)

// adding a new cat to the database
var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
})

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Error saving Cat into database.")
//     } else {
//         console.log("Successfully saved Cat into database!")
//         console.log(cat)
//         console.log(george)
//     }
    
// })

// the new and save operation all together
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log("Error creating and saving Cat into database.")
    } else {
        console.log("Successfully created and saved Cat into database!")
        console.log(cat)
    }
})

// retrieve all cats from the database

Cat.find({}, function(err, cats) {
    if (err) {
       console.log("Error finding Cats in database.")
       console.log(err)
    } else {
        console.log("Successfully found cats in database:")
        console.log(cats)
    }
})
