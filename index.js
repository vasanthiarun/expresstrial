const express = require('express');

// Initialize Express application
const app = express();


// Define route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Hello World\n');
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
});