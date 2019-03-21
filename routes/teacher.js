var express = require('express');
var router = express.Router();

/* GET teacher page. */
router.get('/', function (req, res, next) {
    res.render('teacher', { title: 'Teacher Route' });
});

module.exports = router;
