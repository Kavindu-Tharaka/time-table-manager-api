const Room = require('../models/Room');

// Creating a new room in the database
exports.createRoom = async (req, res) => {
	try {
		const createdRoom = await Room.create(req.body);

		const query = Room.findById(createdRoom._id)
			.populate('building')
			.populate('assignedTags')
			.populate('assignedSubjects')
			.populate('assignedLecturers')
			.populate('assignedGroups')
			.populate('assignForSessions')
			.populate('assignForConsecutive');
		const newRoom = await query;

		res.status(201).json({
			status: 'success',
			data: {
				room: newRoom,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
		});
	}
};

// Read all the document in room collection
exports.getAllRooms = async (req, res) => {
	try {
		const query = Room.find()
			.populate('building')
			.populate('assignedTags')
			.populate('assignedSubjects')
			.populate('assignedLecturers')
			.populate('assignedGroups')
			.populate('assignForSessions')
			.populate('assignForConsecutive');
		const rooms = await query;

		// Send response
		res.status(200).json({
			status: 'success',
			results: rooms.length,
			data: {
				rooms,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
		});
	}
};

/**
 * Read a specific document by id that passed as query parameter
 * in room collection
 */
exports.getRoom = async (req, res) => {
	try {
		const query = Room.findById(req.params.id)
			.populate('building')
			.populate('assignedTags')
			.populate('assignedSubjects')
			.populate('assignedLecturers')
			.populate('assignedGroups')
			.populate('assignForSessions')
			.populate('assignForConsecutive');
		const room = await query;

		res.status(200).json({
			status: 'success',
			data: {
				room,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
		});
	}
};

// Update a document by given id. This only for patch method
exports.updateRoom = async (req, res) => {
	try {
		const updatedRoom = await Room.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);

		const query = Room.findById(updatedRoom._id)
			.populate('building')
			.populate('assignedTags')
			.populate('assignedSubjects')
			.populate('assignedLecturers')
			.populate('assignedGroups')
			.populate('assignForSessions')
			.populate('assignForConsecutive');
		const room = await query;

		res.status(200).json({
			status: 'success',
			data: {
				room,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
		});
	}
};

// Delete a document by id
exports.deleteRoom = async (req, res) => {
	try {
		await Room.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
		});
	}
};
