'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Candidate Schema
 */
var CandidateSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Candidate name',
		trim: true
	},
	dob: {
		type: String,
		default: '',
		trim: true
	},

	party: {
		type: String,
		default: '',
		trim: true
	},
	province: {
		type: String,
		default: '',
		trim: true
	},
		motivation: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Candidate', CandidateSchema);