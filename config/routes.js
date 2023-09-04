const express = require('express');
const routes = express.Router();

// Just to simulate a database
let db = [
	{ '1': { 'name': 'Pedro', 'age': 20 } },
	{ '2': { 'name': 'Maria', 'age': 30 } },
	{ '3': { 'name': 'João', 'age': 40 } }
];

// Get all db
routes.get('/', (req, res) => {
	return res.json(db);
});

// Add new User
// When I do a POST Method in JSON body I must send the body with double quotes
routes.post('/addNewUser', (req, res) => {
	const body = req.body;

	if(!body){
		return res.status(400).end();
	}

	db.push(body);
	return res.json(body);
});

module.exports = routes;