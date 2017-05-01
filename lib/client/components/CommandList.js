'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Command = require('./Command');

var _Command2 = _interopRequireDefault(_Command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CommandList
 */
var CommandList = exports.CommandList = function (_Component) {
  _inherits(CommandList, _Component);

  function CommandList() {
    _classCallCheck(this, CommandList);

    return _possibleConstructorReturn(this, (CommandList.__proto__ || Object.getPrototypeOf(CommandList)).apply(this, arguments));
  }

  _createClass(CommandList, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'list-group' },
        _react2.default.createElement(_Command2.default, null),
        _react2.default.createElement(_Command2.default, null),
        _react2.default.createElement(_Command2.default, null),
        _react2.default.createElement(_Command2.default, null)
      );
    }
  }]);

  return CommandList;
}(_react.Component);

exports.default = CommandList;