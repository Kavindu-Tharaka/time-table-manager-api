const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	building: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'building',
		required: [true, 'Please enter the building'],
	},
	roomName: {
		type: String,
		required: [true, 'Please enter the room name'],
	},
	floor: {
		type: Number,
		required: [true, 'Please enter the floor'],
	},
	capacity: {
		type: Number,
		required: [true, 'Please enter the room capacity'],
	},
	roomType: {
		type: String,
		enum: ['lecture-hall', 'laboratory'],
		required: [true, 'Please enter the room type'],
	},
	assignedTags: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'tag',
		},
	],
	assignedSubjects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'subject',
		},
	],
	assignedLecturers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'lecturers',
		},
	],
	assignedGroups: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'groupid',
		},
	],
	assignForSessions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'sessions',
		},
	],
	assignForConsecutive: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'constraintsConsecutiveSession',
		},
	],
	unAvailableTimes: [
		{
			date: {
				type: Date,
			},
			from: {
				type: String,
				trim: true,
			},
			to: {
				type: String,
				trim: true,
			},
		},
	],
});

const Room = mongoose.model('rooms', roomSchema);
module.exports = Room;
