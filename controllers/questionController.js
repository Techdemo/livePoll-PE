const Question = require('../models/question.js');
const express = require('express');
const bodyParser  = require('body-parser')
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const app = express();
const socket_io = require("socket.io");

const io = socket_io();
app.io = io;


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// maak een vraag
exports.question_create = function (req, res, next) {
    let question = new Question(
        {
            question: req.body.question,
            answerOne: req.body.answerOne,
            answerOnePoints: req.body.answerOnePoints,
            answerTwo: req.body.answerTwo,
            answerTwoPoints: req.body.answerTwoPoints,
            answerThree: req.body.answerThree,
            answerThreePoints: req.body.answerThreePoints
        }
    );
    question.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Question Created successfully')
    })
};
// vraag een vraag op
exports.question_details = function (req, res, next) {
    Question.findById(req.params.id, function (err, question) {
        if (err) return next(err);
        res.send(question);
    })
};
// update een vraag
exports.question_update = function (req, res) {
    Question.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, question) {
        if (err) return next(err);
        res.send('Question updated');
    });
};
// verwijder een vraag
exports.question_delete = function (req, res, next) {
    Question.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


exports.question_vote = function (req, res, next) {
    io.emit('test');
    let data = req.body
    let dataOpt = data.opt
    Question.findByIdAndUpdate('5c98dd88a2d6bccb5df225a3', {
        $inc: { [dataOpt]: 1 } },
        { new: true },
            function (err, response) {
                if (err) return next(err)
                res.render('submitted', {
                    title: 'thnx for your submission',
                    data: dataOpt,
                    response: response
            })
        });
    };
exports.question_overview = (req, res, next) => {
    try {
        fetch('http://localhost:3000/question/5c98dd88a2d6bccb5df225a3')
            .then(res => {return res.json()})
            .then(data => {
                res.render('chart', {
                    title: "dit zijn de uitslagen tot nu toe",
                    data: data,
                    tag: "javascript staat uit"
                })
            })
        }
    catch(err) {
       return next(err)
    }
}