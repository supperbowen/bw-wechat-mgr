"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db = [{ id: 0, name: "test0" }, { id: 1, name: "test1" }, { id: 2, name: "test2" }],
    fakeDelay = 100;

var baseLogic = function () {
	function baseLogic(schema) {
		_classCallCheck(this, baseLogic);

		this.schema = schema;
	}

	_createClass(baseLogic, [{
		key: "getList",
		value: function getList(filter, pageCount, pageNum) {
			return new Promise(function (reolsve, reject) {
				setTimeout(function () {
					resolve(db);
				}, fakeDelay);
			});
		}
	}, {
		key: "getItem",
		value: function getItem(id) {}
	}, {
		key: "removeItem",
		value: function removeItem(id) {}
	}, {
		key: "removeItems",
		value: function removeItems(ids) {}
	}, {
		key: "createItem",
		value: function createItem() {}
	}, {
		key: "updateItem",
		value: function updateItem() {}
	}]);

	return baseLogic;
}();

exports.default = baseLogic;

//# sourceMappingURL=baseLogic-compiled.js.map