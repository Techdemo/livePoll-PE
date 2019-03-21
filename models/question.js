const mongoose = require('mongoose');
const Schema = mongoose.Schema

const questionSchema = Schema ({
    food: String,
    foodOption: String
})

module.exports = mongoose.model('question', questionSchema)