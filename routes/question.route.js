const express = require('express')
const router = express.Router();

const question_controller = require('../controllers/questionController');

router.get('/', question_controller.test);

router.post('/create', question_controller.question_create);
// router.get('/poll', question_controller.question_render);
router.get('/:id', question_controller.question_details);
router.put('/:id/update', question_controller.question_update);
router.delete('/:id/delete', question_controller.question_delete);
router.post('/vote', question_controller.question_vote);



module.exports = router;

