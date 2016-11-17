'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongoose = require('mongoose'),
    dbuser = 'liangcanl',
    dbpsw = '11223344**!!abc',
    connectStr = 'mongodb://' + dbuser + ':' + dbpsw + '@ds155097.mlab.com:55097/bw-wechat-mgr';

var baseLogic = function () {
	function baseLogic(schema) {
		_classCallCheck(this, baseLogic);

		this.schema = schema;
		this.Model = this.context = mongoose.model('autoreply', this.schema);
		mongoose.connect(connectStr);
	}

	_createClass(baseLogic, [{
		key: 'getList',
		value: function getList(filter, pageCount, pageNum) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.context.find(function (err, items) {
					if (err) {
						console.error(err);
					}
					resolve(items);
				});
			});
		}
	}, {
		key: 'getItem',
		value: function getItem(id) {}
	}, {
		key: 'removeItem',
		value: function removeItem(id) {}
	}, {
		key: 'removeItems',
		value: function removeItems(ids) {}
	}, {
		key: 'createItem',
		value: function createItem() {
			var autoreply = new this.Model({
				name: 'bowen',
				message: 'hello world',
				version: 0,
				age: 18
			});
			return new Promise(function (resolve) {
				autoreply.save(function (err, item) {
					if (err) {
						console.error(err);
					}
					resolve(item);
				});
			});
		}
	}, {
		key: 'updateItem',
		value: function updateItem() {}
	}]);

	return baseLogic;
}();

exports.baseLogic = baseLogic;

//# sourceMappingURL=baseLogic-compiled.js.map