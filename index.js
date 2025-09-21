const express = require('express');
const cors = require('cors');
const mongoose = require('./db'); 
const QuestionPaper = require("./models/question_paper.model.js");
// Import router
const questionPaperRoutes = require('./routes/question_paper.route.js');
// Initialize Express application
const app = express();
app.use(cors());
app.use(express.json());
// Mount router
app.use('/', questionPaperRoutes); 

// Define route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Hello World\n');
});


// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
});

