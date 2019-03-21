var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('submitted', { title: 'thnx for submission' });
});

module.exports = router;
