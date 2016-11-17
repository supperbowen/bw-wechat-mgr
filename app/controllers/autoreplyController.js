let {autoReplyLogic:Logic} = require('../logic/autoreplyLogic');
let logic = new Logic();

async function list(ctx, next) {
	ctx.body = await logic.getList();
	await next();
}

async function create(ctx, next) {
	ctx.body = await logic.createItem();
	await next();
}

export{list,create}



;