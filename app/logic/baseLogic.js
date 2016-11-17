var mongoose = require('mongoose'),
	dbuser = 'liangcanl',
	dbpsw = '11223344**!!abc',
	connectStr = `mongodb://${dbuser}:${dbpsw}@ds155097.mlab.com:55097/bw-wechat-mgr`;


class baseLogic {
	constructor(schema) {
		this.schema = schema;
		this.Model = this.context = mongoose.model('autoreply', this.schema);
		mongoose.connect(connectStr);
	}

	getList(filter, pageCount, pageNum) {
		return new Promise((resolve, reject)=> {
			this.context.find(function (err, items) {
				if (err) {
					console.error(err);
				}
				resolve(items);
			});
		});
	}

	getItem(id) {

	}

	removeItem(id) {

	}

	removeItems(ids) {

	}

	createItem() {
		var autoreply = new this.Model({
			name:'bowen',
			message:'hello world',
			version:0,
			age:18
		});
		return new Promise((resolve)=>{
			autoreply.save((err, item)=>{
				if (err) {
					console.error(err);
				}
				resolve(item);
			});
		});
	}

	updateItem() {

	}
}

export {baseLogic};