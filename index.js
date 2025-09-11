const express = require('express');
const mysql = require('mysql');

// Initialize Express application
const app = express();


// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Add your MySQL password
    database: 'crud_example'
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Define route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Hello World\n');
});


//list users
app.get('/users',  (request, response) =>{
	const sql = 'select name, email from users';
	db.query(sql, (err, records) => {
		if(err)
			response.send(err.code);
		response.status(201).send(records);
	});

});

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
});