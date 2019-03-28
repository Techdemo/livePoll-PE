const Question = require('../models/question.js');
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const fetch = require('node-fetch');

exports.fetchData = function (req, res) {
    res.send('Greetings from the Test controller!');
};