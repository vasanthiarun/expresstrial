const express = require('express');
const QuestionPaper = require("../models/question_paper.model.js");


const router = express.Router();
const {getQuestionPapers, getQuestionPaper, createQuestionPaper, updateQuestionPaper, deleteQuestionPaper} = require('../controllers/question_paper.controller.js');


router.get('/getQuestionPapers', getQuestionPapers);
router.get("/getQuestionPaper/:id", getQuestionPaper);
router.post("/createQuestionPaper", createQuestionPaper);
router.put("/updateQuestionPaper/:id", updateQuestionPaper);
router.delete("/deleteQuestionPaper/:id", deleteQuestionPaper);


module.exports = router;


