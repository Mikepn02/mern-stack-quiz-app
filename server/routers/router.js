const Router = require('express');
const controller  = require('../controllers/controller')

const router = Router();


router.get('/result/:id', controller.getResultByUserId)

router.route('/questions')
       .get(controller.getQuestions)
       .post(controller.insertQuestion)
       .delete(controller.Delete)

       

router.route('/result')
      .get(controller.getResult)
      .post(controller.storeResult)
      .delete(controller.dropResult)




module.exports = router