'use strict';

require('dotenv').config();
('use strict');
const { MONGO_URI } = process.env;
const { MongoClient } = require('mongodb');

const client = new MongoClient(MONGO_URI, {
	useUnifiedTopology: true,
});

// returns a specific item
const getItem = async (req, res) => {
	try {
		await client.connect();
		const db = client.db('commerce');
		const item = await db
			.collection('items')
			.findOne({ _id: Number(req.params.item) });
		console.log(item);
		res.status(200).json({ status: 200, data: item });
	} catch (e) {
		res.status(404).json({ status: 404, message: e.message });
	}
};

module.exports = { findPitch };
