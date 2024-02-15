'use strict';

require('dotenv').config();
('use strict');
const { MONGO_URI } = process.env;
const { MongoClient } = require('mongodb');

const client = new MongoClient(MONGO_URI, {
	useUnifiedTopology: true,
});

// returns a specific item
const addRating = async (req, res) => {
	try {
		await client.connect();
		const db = client.db('PitchFinder');
		console.log('connected');
		const ratings = await db.collection('ratings').insertOne(req.body);
		console.log(ratings);
		res.status(200).json({ status: 200, data: ratings });
		// close the connection to the database server
		client.close();
		console.log('disconnected!');
	} catch (e) {
		res.status(404).json({ status: 404, message: e.message });
		// close the connection to the database server
		client.close();
		console.log('disconnected!');
	}
};

module.exports = { addRating };
