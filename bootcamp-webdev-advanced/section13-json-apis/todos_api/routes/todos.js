var express = require('express')
var router = express.Router()

var db = require('../models')

var helpers = require("../helpers/todos")

// Routes for LISTING ALL and CREATING
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)
    
// Routes for GET ONE and MODIFICATION    
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router