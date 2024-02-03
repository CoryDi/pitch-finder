'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

const { findPitch } = require('./handlers/findPitch');

const port = 4000;

app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Methods',
		'OPTIONS, HEAD, GET, PUT, POST, DELETE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));

app.get('/bacon', (req, res) => res.status(200).json({ data: '🥓' }));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// index.js
const express = require('express');
const bodyParser = require('body-parser');
const {
	default: LoginButton,
} = require('../client/src/components/LoginButton');

app.use(bodyParser.json());

// Dummy user data (replace this with a real database)
const users = [
	{ id: 1, username: 'user1', password: 'password1' },
	{ id: 2, username: 'user2', password: 'password2' },
];

app.post('/api/login', (req, res) => {
	const { username, password } = req.body;

	// Dummy authentication logic (replace this with real authentication logic)
	const user = users.find(
		(user) => user.username === username && user.password === password
	);

	if (user) {
		res.json({ success: true, message: 'Login successful' });
	} else {
		res.status(401).json({ success: false, message: 'Invalid credentials' });
	}
});

app.get('/findPitch/:pitch', findPitch);
// app.get('/Loginbutton', LoginButton)
