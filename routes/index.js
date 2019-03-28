const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = require('../models/question.js');


/* GET home page. */
router.get('/', function(req, res, next) {

  Question.findById('5c98dd88a2d6bccb5df225a3', function (err, question){
    if (err) return next(err)
    res.render('index', { title: 'Live Poll', question: question, _id: '5c98dd88a2d6bccb5df225a3' });

  })

});

module.exports = router;
