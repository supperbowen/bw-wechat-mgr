'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeItem = exports.updateItem = exports.createItem = exports.list = exports.getId = undefined;

var getId = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _testDbManager2.default.getById(ctx.params.id);

                    case 2:
                        ctx.body = _context.sent;
                        _context.next = 5;
                        return next();

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getId(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var list = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _testDbManager2.default.getAll();

                    case 2:
                        ctx.body = _context2.sent;
                        _context2.next = 5;
                        return next();

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function list(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var createItem = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _testDbManager2.default.setNewId(ctx.request.body.name);

                    case 2:
                        ctx.body = _context3.sent;

                        ctx.status = 201;
                        _context3.next = 6;
                        return next();

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function createItem(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var updateItem = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return _testDbManager2.default.updateId(ctx.params.id, ctx.request.body.name);

                    case 2:
                        ctx.body = _context4.sent;
                        _context4.next = 5;
                        return next();

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function updateItem(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var removeItem = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ctx, next) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return _testDbManager2.default.removeId(ctx.params.id);

                    case 2:
                        ctx.status = 204;
                        _context5.next = 5;
                        return next();

                    case 5:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function removeItem(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _testDbManager = require('../managers/testDbManager');

var _testDbManager2 = _interopRequireDefault(_testDbManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.getId = getId;
exports.list = list;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.removeItem = removeItem;

//# sourceMappingURL=indexController-compiled.js.map