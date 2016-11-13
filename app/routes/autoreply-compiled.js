'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = routes;
exports.allowedMethods = allowedMethods;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _autoreplyController = require('../controllers/autoreplyController');

var _autoreplyController2 = _interopRequireDefault(_autoreplyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default(),
    koaBody = (0, _koaConvert2.default)((0, _koaBody2.default)());

router.get('autoreply', _autoreplyController2.default.list);

function routes() {
	return router.routes();
}
function allowedMethods() {
	return router.allowedMethods();
}

//# sourceMappingURL=autoreply-compiled.js.map