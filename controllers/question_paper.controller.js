const QuestionPaper = require("../models/question_paper.model");

const getQuestionPapers = async (req, res) => {
  try {
    const question_papers =  await QuestionPaper.find({});
    res.status(200).json(question_papers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionPaper = async (req, res) => {
  try {
    const { id } = req.params;
    const question_paper = await QuestionPaper.findById(id);
    res.status(200).json(question_paper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createQuestionPaper = async (req, res) => {
  try {
	console.log('Received form data:'+req.body);
    const question_paper = await QuestionPaper.create(req.body);
    res.status(200).json(question_paper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuestionPaper = async (req, res) => {
  try {
    const { id } = req.params;

    const question_paper = await QuestionPaper.findByIdAndUpdate(id, req.body);

    if (!question_paper) {
      return res.status(404).json({ message: "QuestionPaper not found" });
    }

    const updatedQuestionPaper = await QuestionPaper.findById(id);
    res.status(200).json(updatedQuestionPaper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuestionPaper = async (req, res) => {
  try {
    const { id } = req.params;

    const question_paper = await QuestionPaper.findByIdAndDelete(id);

    if (!question_paper) {
      return res.status(404).json({ message: "QuestionPaper not found" });
    }

    res.status(200).json({ message: "QuestionPaper deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getQuestionPapers,
  getQuestionPaper,
  createQuestionPaper,
  updateQuestionPaper,
  deleteQuestionPaper,
};