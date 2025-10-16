const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('./db'); 
const User = require("./models/user.model.js");
// Import router
const userRoutes = require('./routes/user.route.js');
const testRoutes = require('./routes/test.route.js');
// Initialize Express application
const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // frontend origin
  credentials: true                // allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());
// Mount router
app.use('/', userRoutes); 
app.use('/', testRoutes); 

// Define route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Hello World\n');
});


// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
});

//https://www.corbado.com/blog/nodejs-express-mongodb-jwt-authentication-roles#42-setup-express-web-server