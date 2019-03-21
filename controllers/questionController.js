const Question = require('../models/question.js');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.question_create = function (req, res) {
    let question = new Question(
        {
            food: req.body.name,
            foodOption: req.body.price
        }
    );
    question.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Question Created successfully')
    })
};
exports.question_details = function (req, res) {
    Question.findById(req.params.id, function (err, question) {
        if (err) return next(err);
        res.send(question);
    })
};
exports.question_update = function (req, res) {
    Question.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, question) {
        if (err) return next(err);
        res.send('Question updated');
    });
};
exports.question_delete = function (req, res) {
    Question.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};