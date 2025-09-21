const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cruddb")
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.log('Connection failed', error);
});

module.exports = mongoose;