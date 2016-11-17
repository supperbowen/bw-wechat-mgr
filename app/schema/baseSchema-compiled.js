'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _require = require('mongoose'),
    Schema = _require.Schema;

var schema = {
	name: String,
	sort: Number,
	createBy: String,
	createDate: Date,
	editBy: String,
	editDate: Date,
	version: Number
};
exports.schema = schema;

//# sourceMappingURL=baseSchema-compiled.js.map