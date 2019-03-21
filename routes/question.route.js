const express = require('express')
const router = express.Router();

const question_controller = require('../controllers/questionController');

router.get('/', question_controller.test);

router.post('/create', question_controller.question_create);
router.get('/:id', question_controller.question_details);
router.put('/:id/update', question_controller.question_update);
router.delete('/:id/delete', question_controller.question_delete);


module.exports = router;