let {Schema} = require('mongoose');
let _ = require('lodash');
let {schema :baseSchema} = require('./baseSchema');

var schema = new Schema(_.extend({
	name: String,
	message: String,
	replyDate: Date,
	isReplied: Boolean
}, baseSchema));
export {schema};