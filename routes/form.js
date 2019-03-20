var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/form', function (req, res) {
    let value = req.body.opt
    console.log(value)
    res.render('form', { submit: 'form sub' });
});

module.exports = router;
