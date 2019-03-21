const mongoose = require('mongoose');
const Schema = mongoose.Schema

const answerSchema = Schema({
    food: String,
    location: String,
    time: Number
})

module.exports = mongoose.model('answer', answerSchema)