"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommnadDetails = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CommnadDetails
 */
var CommnadDetails = exports.CommnadDetails = function (_Component) {
  _inherits(CommnadDetails, _Component);

  function CommnadDetails() {
    _classCallCheck(this, CommnadDetails);

    return _possibleConstructorReturn(this, (CommnadDetails.__proto__ || Object.getPrototypeOf(CommnadDetails)).apply(this, arguments));
  }

  _createClass(CommnadDetails, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "card" },
        _react2.default.createElement("img", { className: "card-img-top", "data-src": "holder.js/100%x200/", alt: "Card image cap" }),
        _react2.default.createElement(
          "div",
          { className: "card-block" },
          _react2.default.createElement(
            "h4",
            { className: "card-title" },
            "Card title"
          ),
          _react2.default.createElement(
            "p",
            { className: "card-text" },
            "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          ),
          _react2.default.createElement(
            "p",
            { className: "card-text" },
            _react2.default.createElement(
              "small",
              { className: "text-muted" },
              "Last updated 3 mins ago"
            )
          )
        )
      );
    }
  }]);

  return CommnadDetails;
}(_react.Component);

exports.default = CommnadDetails;