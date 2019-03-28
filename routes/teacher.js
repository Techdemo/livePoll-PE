const express = require('express');
const router = express.Router();
let http = require('http').Server(express);
const socket_io = require("socket.io");
const app = express();
const question_controller = require('../controllers/questionController');


/* GET teacher page. */
router.get('/', function (req, res, next) {
    res.render('teacher', { title: 'Teacher Route',
    data: 'hier kan de docent een vragenlijst zien en vragen aanmaken'});
});

router.get('/overview', question_controller.question_overview);



module.exports = router;
