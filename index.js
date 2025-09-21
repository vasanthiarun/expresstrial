const express = require('express');
const cors = require('cors');
const db = require('mongoose');

db.connect("mongodb://localhost:27017/cruddb")
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.log('Connection failed', error);
});

// Initialize Express application
const app = express();

app.use(cors());
app.use(express.json());


// Define route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Hello World\n');
});

app.get('/list', async(req, res) => {	
	const collection_table  = await db.connection.collection('questionpapers');
	const records = await collection_table.find({}).toArray();
	res.json(records);
	
});


// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
});

