'use strict';

require('dotenv').config();
('use strict');
const { MONGO_URI } = process.env;
const { MongoClient } = require('mongodb');
const ratings = require('../ratings.json');

const client = new MongoClient(MONGO_URI, {
	useUnifiedTopology: true,
});

// returns a specific item
const createRatings = async (req, res) => {
	console.log(ratings);
	try {
		await client.connect();
		const db = client.db('PitchFinder');
		console.log('connected');
		const ratings = await db.collection('ratings').insertMany([
			{
				pitchID: 1704,
				userEmail: 'corydixon1@gmail.com',
				rating: 5,
			},
			{
				pitchID: 1705,
				userEmail: 'corydixon1@gmail.com',
				rating: 3,
			},
			{
				pitchID: 2023,
				userEmail: 'corydixon1@gmail.com',
				rating: 4,
			},
		]);
		console.log(ratings);
		// close the connection to the database server
		client.close();
		console.log('disconnected!');
	} catch (e) {
		// close the connection to the database server
		client.close();
		console.log('disconnected!');
	}
};

createRatings();
