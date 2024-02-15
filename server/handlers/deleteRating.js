'use strict';

require('dotenv').config();
('use strict');
const { MONGO_URI } = process.env;
const { MongoClient } = require('mongodb');

const client = new MongoClient(MONGO_URI, {
	useUnifiedTopology: true,
});

// returns a specific item
const deleteRating = async (req, res) => {
	try {
		await client.connect();
		const db = client.db('PitchFinder');
		console.log('connected');
		const ratings = await db
			.collection('ratings')
			.deleteOne({ pitchID: req.body.pitchID, userEmail: req.body.userEmail });
		// close the connection to the database server
		res.status(200).json({ status: 200, data: ratings });
		client.close();
		console.log('disconnected!');
	} catch (e) {
		res.status(404).json({ status: 404, message: e.message });
		// close the connection to the database server
		client.close();
		console.log('disconnected!');
	}
};

module.exports = { deleteRating };
