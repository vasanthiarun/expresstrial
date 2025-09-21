const mongoose = require("mongoose");

// Schema definition
const QuestionPaperSchema = new mongoose.Schema(
  {
    regulation: {
      type: String,
      required: true,
      trim: true,
    },
    semester: {
      type: Number,
      required: true,
      min: 1,
    },
    subjectCode: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    exam: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

// Model
const QuestionPaper = mongoose.model("QuestionPaper", QuestionPaperSchema);

module.exports = QuestionPaper;
