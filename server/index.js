'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

const { findPitch } = require('./handlers/findPitch');
const { getRatings } = require('./handlers/getRatings');
const { addRating } = require('./handlers/addRating.js');
const { editRating } = require('./handlers/editRating.js');
const { deleteRating } = require('./handlers/deleteRating.js');

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

app.get('/api/ratings', getRatings);
app.post('/api/addrating', addRating);
app.patch('/api/editrating', editRating);
app.delete('/api/deleterating', deleteRating);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
