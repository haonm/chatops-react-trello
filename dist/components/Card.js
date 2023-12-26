"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var _Tag = _interopRequireDefault(require("./Tag"));

var _DeleteButton = _interopRequireDefault(require("./widgets/DeleteButton"));

const _excluded = ["customCard"],
      _excluded2 = ["id", "cardStyle", "editable", "hideCardDeleteIcon", "customCardLayout", "dragStyle", "onDelete"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

class Card extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "removeCard", e => {
      const _this$props = this.props,
            id = _this$props.id,
            laneId = _this$props.laneId,
            removeCard = _this$props.removeCard,
            onDelete = _this$props.onDelete;
      removeCard(laneId, id);
      onDelete(id, laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)(this, "renderBody", () => {
      if (this.props.customCardLayout) {
        const _this$props2 = this.props,
              customCard = _this$props2.customCard,
              otherProps = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
        return _react.default.cloneElement(customCard, _objectSpread({}, otherProps));
      } else {
        const _this$props3 = this.props,
              title = _this$props3.title,
              description = _this$props3.description,
              label = _this$props3.label,
              tags = _this$props3.tags;
        return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_Base.CardHeader, null, /*#__PURE__*/_react.default.createElement(_Base.CardTitle, null, title), /*#__PURE__*/_react.default.createElement(_Base.CardRightContent, null, label)), /*#__PURE__*/_react.default.createElement(_Base.Detail, null, description), tags && /*#__PURE__*/_react.default.createElement(_Base.Footer, null, tags.map(tag => /*#__PURE__*/_react.default.createElement(_Tag.default, (0, _extends2.default)({
          key: tag.title
        }, tag, {
          tagStyle: this.props.tagStyle
        })))));
      }
    });
  }

  render() {
    const _this$props4 = this.props,
          id = _this$props4.id,
          cardStyle = _this$props4.cardStyle,
          editable = _this$props4.editable,
          hideCardDeleteIcon = _this$props4.hideCardDeleteIcon,
          customCardLayout = _this$props4.customCardLayout,
          dragStyle = _this$props4.dragStyle,
          onDelete = _this$props4.onDelete,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props4, _excluded2);
    const style = customCardLayout ? _objectSpread(_objectSpread({}, cardStyle), {}, {
      padding: 0
    }) : cardStyle;
    return /*#__PURE__*/_react.default.createElement(_Base.MovableCardWrapper, (0, _extends2.default)({
      className: "react-trello-card",
      key: id,
      "data-id": id,
      style: _objectSpread(_objectSpread({}, style), dragStyle)
    }, otherProps), this.renderBody(), editable && !hideCardDeleteIcon && /*#__PURE__*/_react.default.createElement(_DeleteButton.default, {
      onClick: this.removeCard
    }));
  }

}

Card.defaultProps = {
  cardStyle: {},
  customCardLayout: false,
  onDelete: () => {},
  editable: false,
  dragStyle: {}
};
Card.propTypes = {
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  index: _propTypes.default.number,
  description: _propTypes.default.string,
  label: _propTypes.default.string,
  tags: _propTypes.default.array,
  laneId: _propTypes.default.string.isRequired,
  removeCard: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  metadata: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  dragStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  customCardLayout: _propTypes.default.bool,
  customCard: _propTypes.default.node,
  editable: _propTypes.default.bool
};
var _default = Card;
exports.default = _default;