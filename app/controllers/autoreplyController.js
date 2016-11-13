import {getList} from '../logic/autoreplyLogic'


async function list(ctx, next) {
	ctx.body = await getList();
	await next();
}

export{list};