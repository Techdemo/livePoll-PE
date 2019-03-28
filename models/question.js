const mongoose = require('mongoose');
const Schema = mongoose.Schema

const questionSchema = new Schema ({
        question: String,
        answerOne: String,
        answerOnePoints: Number ,
        answerTwo: String,
        answerTwoPoints: Number,
        answerThree: String,
        answerThreePoints: Number
    }
)

module.exports = mongoose.model('question', questionSchema)