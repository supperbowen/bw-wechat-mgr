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

var _indexController = require('../controllers/indexController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default(),
    koaBody = (0, _koaConvert2.default)((0, _koaBody2.default)());

router.get('/users', _indexController.list).get('/users/:id', _indexController.getId).post('/users/', koaBody, _indexController.createItem).put('/users/:id', koaBody, _indexController.updateItem).delete('/users/:id', _indexController.removeItem);

function routes() {
    return router.routes();
}
function allowedMethods() {
    return router.allowedMethods();
}

//# sourceMappingURL=index-compiled.js.map