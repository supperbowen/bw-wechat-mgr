let {Schema} = require('mongoose');

let schema = {
	name: String,
	sort: Number,
	createBy: String,
	createDate: Date,
	editBy: String,
	editDate: Date,
	version: Number
}
export {schema};