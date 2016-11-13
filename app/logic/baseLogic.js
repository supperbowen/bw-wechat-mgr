const db = [
		{id:0, name: "test0" },
		{id:1, name: "test1" },
		{id:2, name: "test2" }
	],
	fakeDelay=100;

export default class baseLogic{
	constructor(schema){
		this.schema = schema;
	}
	getList(filter, pageCount, pageNum){
		return new Promise((reolsve, reject)=>{
			setTimeout(function () {
				resolve(db);
			},fakeDelay);
		})
	}

	getItem(id){

	}

	removeItem(id){

	}

	removeItems(ids){

	}

	createItem(){

	}

	updateItem(){

	}
}