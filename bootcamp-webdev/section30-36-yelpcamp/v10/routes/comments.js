var express = require("express")
var router = express.Router({mergeParams: true})

// models
var Campground = require("../models/campground")
var Comment = require("../models/comment")

// middleware
var middleware = require("../middleware")
// specifying only the directory will assume that index.js is used

// ===================
// Comments Routes
// ===================

// create new comment form
router.get('/new', middleware.isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err)
        } else {
            res.render("comments/new", {campground: campground})
        }
    })
})

// save comment
router.post('/', middleware.isLoggedIn, function (req, res) {
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
                    // add username and id to comment
                    comment.author.id = req.user._id
                    comment.author.username = req.user.username
                    console.log("New comment's username will be: " + req.user.username)
                    // save comment
                    comment.save()
                    // connect new comment to campground
                    campground.comments.push(comment)
                    campground.save()
                    console.log(comment)
                    // redirect campground show page
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
        } 
    })
})

// COMMENT EDIT ROUTE
router.get("/:comment_id/edit", function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if (err) {
            res.redirect("back")
        } else {
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment})
        }
    })
})

// COMMENT UPDATE ROUTE
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    console.log(req.params.comment_id)
    console.log(req.body.comment)
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
        if (err) {
            res.redirect("back")
        } else {
            res.redirect("/campgrounds/" + req.params.id)
        }
    })
})

// COMMENT DELETE ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if (err) {
            console.log(err)
            res.redirect("back")
        } else {
            res.redirect("/campgrounds/" + req.params.id)
        }
    })
})

module.exports = router