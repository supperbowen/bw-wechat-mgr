import baseLogic from './baseLogic'
export default class autoReplyLogic extends baseLogic{
	constructor(){
		super('autoreply');

	}
	getList(){
		return super.getList.apply(this, arguments);
	};

}