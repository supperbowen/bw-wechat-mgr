let {baseLogic} = require('./baseLogic');
var {schema} = require('../schema/autoreply')

class autoReplyLogic extends baseLogic{
	constructor(){
		super(schema);
	}
}

export {autoReplyLogic};