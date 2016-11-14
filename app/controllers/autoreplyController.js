let {autoReplyLogic:Logic} = require('../logic/autoreplyLogic');
let logic = new Logic();

async function list(ctx, next) {
	ctx.body = await logic.getList();
	await next();
}

export{list}



;