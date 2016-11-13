'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _baseLogic2 = require('./baseLogic');

var _baseLogic3 = _interopRequireDefault(_baseLogic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var autoReplyLogic = function (_baseLogic) {
	_inherits(autoReplyLogic, _baseLogic);

	function autoReplyLogic() {
		_classCallCheck(this, autoReplyLogic);

		return _possibleConstructorReturn(this, (autoReplyLogic.__proto__ || Object.getPrototypeOf(autoReplyLogic)).call(this, 'autoreply'));
	}

	return autoReplyLogic;
}(_baseLogic3.default);

exports.default = autoReplyLogic;

//# sourceMappingURL=autoreplyLogic-compiled.js.map