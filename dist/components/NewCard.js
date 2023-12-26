"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var _EditableLabel = _interopRequireDefault(require("./widgets/EditableLabel"));

var _Elements = require("../styles/Elements");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class NewCard extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "updateField", (field, value) => {
      this.setState({
        [field]: value
      });
    });
    (0, _defineProperty2.default)(this, "handleAdd", () => {
      this.props.onAdd(this.state);
    });
  }

  render() {
    const onCancel = this.props.onCancel;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        background: '#E3E3E3'
      }
    }, /*#__PURE__*/_react.default.createElement(_Base.CardWrapper, null, /*#__PURE__*/_react.default.createElement(_Base.CardHeader, null, /*#__PURE__*/_react.default.createElement(_Base.CardTitle, null, /*#__PURE__*/_react.default.createElement(_EditableLabel.default, {
      placeholder: "title",
      onChange: val => this.updateField('title', val),
      autoFocus: true
    })), /*#__PURE__*/_react.default.createElement(_Base.CardRightContent, null, /*#__PURE__*/_react.default.createElement(_EditableLabel.default, {
      placeholder: "label",
      onChange: val => this.updateField('label', val)
    }))), /*#__PURE__*/_react.default.createElement(_Base.Detail, null, /*#__PURE__*/_react.default.createElement(_EditableLabel.default, {
      placeholder: "description",
      onChange: val => this.updateField('description', val)
    }))), /*#__PURE__*/_react.default.createElement(_Elements.AddButton, {
      onClick: this.handleAdd
    }, "Add"), /*#__PURE__*/_react.default.createElement(_Elements.CancelButton, {
      onClick: onCancel
    }, "Cancel"));
  }

}

NewCard.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func.isRequired
};
NewCard.defaultProps = {};
var _default = NewCard;
exports.default = _default;