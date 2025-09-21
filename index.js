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

app.post('/create', async (req, res) => {
	console.log('Received form data:',req.body);
	data = req.body;
	insert_obj = {
			"regulation": data.regulation,
			"semester": data.semester,
			"subjectCode": data.subjectCode,
			"year": data.year,
			"exam": data.exam,
			"url": data.url
	}

	const collection_table  = await db.connection.collection('questionpapers');
	insert_rec = await collection_table.insertOne(insert_obj);
	res.status(200).json(insert_rec);
});

app.put('/edit/:id', async (req, res) => {
	edit_id = req.params.id
	data = req.body;
	update_obj = {
			"regulation": data.regulation,
			"semester": data.semester,
			"subjectCode": data.subjectCode,
			"year": data.year,
			"exam": data.exam,
			"url": data.url
	}

	const collection_table  = await db.connection.collection('questionpapers');
	const updated = await collection_table.updateOne(
		{id: edit_id},
		{
			$set: update_obj,			
		}

		);
	res.status(200).json(updated);
});



// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
});

