const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Just to simulate a database
let db = [
	{ '1': { 'name': 'Pedro', 'age': 20 } },
	{ '2': { 'name': 'Maria', 'age': 30 } },
	{ '3': { 'name': 'João', 'age': 40 } }
];

// Get all db
app.get('/', (req, res) => {
	return res.json(db);
});

// Add new User
// When I do a POST Method in JSON body I must send the body with double quotes
app.post('/addNewUser', (req, res) => {
	const body = req.body;

	if(!body){
		return res.status(400).end();
	}

	db.push(body);
	return res.json(body);
});

app.listen(PORT, () => {
	console.log(`Express started at http://localhost:${PORT}`);
});
