const Building = require('../models/Building');

// Creating a new building in the database
exports.createBuilding = async (req, res) => {
	try {
		const newBuilding = await Building.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				building: newBuilding
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message
		});
	}
};

// Read all the document in building collection
exports.getAllBuildings = async (req, res) => {
	try {
		// Build the query
		const query = Building.find(req.query);

		// Execute the query
		const buildings = await query;

		// Send response
		res.status(200).json({
			status: 'success',
			results: buildings.length,
			data: {
				buildings
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message
		});
	}
};

/**
 * Read a specific document by id that passed as query parameter
 * in building collection
 */
exports.getBuilding = async (req, res) => {
	try {
		const building = await Building.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				building
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message
		});
	}
};

// Update a document by given id. This only for patch method
exports.updateBuilding = async (req, res) => {
	try {
		const building = await Building.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);

		res.status(200).json({
			status: 'success',
			data: {
				building
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message
		});
	}
};

// Delete a document by id
exports.deleteBuilding = async (req, res) => {
	try {
		await Building.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: 'success',
			data: null
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message
		});
	}
};
