'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _require = require('mongoose'),
    Schema = _require.Schema;

var _ = require('lodash');

var _require2 = require('./baseSchema'),
    baseSchema = _require2.schema;

var schema = new Schema(_.extend({
	name: String,
	message: String,
	replyDate: Date,
	isReplied: Boolean
}, baseSchema));
exports.schema = schema;

//# sourceMappingURL=autoreply-compiled.js.map