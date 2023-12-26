"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Container = _interopRequireDefault(require("../dnd/Container"));

var _Draggable = _interopRequireDefault(require("../dnd/Draggable"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _Card = _interopRequireDefault(require("./Card"));

var _NewCard = _interopRequireDefault(require("./NewCard"));

var _Base = require("../styles/Base");

var laneActions = _interopRequireWildcard(require("../actions/LaneActions"));

var _Elements = require("../styles/Elements");

const _excluded = ["id", "onLaneClick", "onLaneScroll", "onCardClick", "onCardAdd", "onCardDelete"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

class Lane extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {
      loading: false,
      currentPage: this.props.currentPage,
      addCardMode: false,
      collapsed: false,
      isDraggingOver: false
    });
    (0, _defineProperty2.default)(this, "handleScroll", evt => {
      const node = evt.target;
      const elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      const onLaneScroll = this.props.onLaneScroll;

      if (elemScrolPosition < 1 && onLaneScroll && !this.state.loading) {
        const currentPage = this.state.currentPage;
        this.setState({
          loading: true
        });
        const nextPage = currentPage + 1;
        onLaneScroll(nextPage, this.props.id).then(moreCards => {
          if (!moreCards || moreCards.length === 0) {
            // if no cards present, stop retrying until user action
            node.scrollTop = node.scrollTop - 100;
          } else {
            this.props.actions.paginateLane({
              laneId: this.props.id,
              newCards: moreCards,
              nextPage: nextPage
            });
          }

          this.setState({
            loading: false
          });
        });
      }
    });
    (0, _defineProperty2.default)(this, "laneDidMount", node => {
      if (node) {
        node.addEventListener('scroll', this.handleScroll);
      }
    });
    (0, _defineProperty2.default)(this, "removeCard", (laneId, cardId) => {
      this.props.actions.removeCard({
        laneId: laneId,
        cardId: cardId
      });
    });
    (0, _defineProperty2.default)(this, "handleCardClick", (e, card) => {
      const onCardClick = this.props.onCardClick;
      onCardClick && onCardClick(card.id, card.metadata, card.laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)(this, "showEditableCard", () => {
      this.setState({
        addCardMode: true
      });
    });
    (0, _defineProperty2.default)(this, "hideEditableCard", () => {
      this.setState({
        addCardMode: false
      });
    });
    (0, _defineProperty2.default)(this, "addNewCard", params => {
      const laneId = this.props.id;
      const id = (0, _v.default)();
      this.hideEditableCard();

      let card = _objectSpread({
        id
      }, params);

      this.props.actions.addCard({
        laneId,
        card
      });
      this.props.onCardAdd(card, laneId);
    });
    (0, _defineProperty2.default)(this, "renderAddCardLink", () => {
      const _this$props = this.props,
            addCardLink = _this$props.addCardLink,
            addCardTitle = _this$props.addCardTitle;

      if (addCardLink) {
        return /*#__PURE__*/_react.default.createElement("span", {
          onClick: this.showEditableCard
        }, addCardLink);
      } else {
        return /*#__PURE__*/_react.default.createElement(_Base.AddCardLink, {
          onClick: this.showEditableCard
        }, addCardTitle);
      }
    });
    (0, _defineProperty2.default)(this, "renderNewCard", () => {
      const _this$props2 = this.props,
            newCardTemplate = _this$props2.newCardTemplate,
            id = _this$props2.id;

      if (newCardTemplate) {
        const newCardWithProps = _react.default.cloneElement(newCardTemplate, {
          onCancel: this.hideEditableCard,
          onAdd: this.addNewCard,
          laneId: id
        });

        return /*#__PURE__*/_react.default.createElement("span", null, newCardWithProps);
      } else {
        return /*#__PURE__*/_react.default.createElement(_NewCard.default, {
          onCancel: this.hideEditableCard,
          onAdd: this.addNewCard
        });
      }
    });
    (0, _defineProperty2.default)(this, "onDragStart", ({
      payload
    }) => {
      const handleDragStart = this.props.handleDragStart;
      handleDragStart && handleDragStart(payload.id, payload.laneId);
    });
    (0, _defineProperty2.default)(this, "shouldAcceptDrop", sourceContainerOptions => {
      return this.props.droppable && sourceContainerOptions.groupName === this.groupName;
    });
    (0, _defineProperty2.default)(this, "onDragEnd", (laneId, result) => {
      const handleDragEnd = this.props.handleDragEnd;
      const addedIndex = result.addedIndex,
            payload = result.payload;
      this.setState({
        isDraggingOver: false
      });

      if (addedIndex != null) {
        this.props.actions.moveCardAcrossLanes({
          fromLaneId: payload.laneId,
          toLaneId: laneId,
          cardId: payload.id,
          index: addedIndex
        });
        handleDragEnd && handleDragEnd(payload.id, payload.laneId, laneId, addedIndex, payload);
      }
    });
    (0, _defineProperty2.default)(this, "renderDragContainer", isDraggingOver => {
      const _this$props3 = this.props,
            laneSortFunction = _this$props3.laneSortFunction,
            editable = _this$props3.editable,
            hideCardDeleteIcon = _this$props3.hideCardDeleteIcon,
            tagStyle = _this$props3.tagStyle,
            cardStyle = _this$props3.cardStyle,
            draggable = _this$props3.draggable,
            cardDraggable = _this$props3.cardDraggable,
            cards = _this$props3.cards,
            cardDragClass = _this$props3.cardDragClass,
            id = _this$props3.id;
      const _this$state = this.state,
            addCardMode = _this$state.addCardMode,
            collapsed = _this$state.collapsed;
      const showableCards = collapsed ? [] : cards;
      const cardList = this.sortCards(showableCards, laneSortFunction).map((card, idx) => {
        const cardToRender = /*#__PURE__*/_react.default.createElement(_Card.default, (0, _extends2.default)({
          key: card.id,
          index: idx,
          customCardLayout: this.props.customCardLayout,
          customCard: this.props.children,
          tagStyle: tagStyle,
          cardStyle: cardStyle,
          removeCard: this.removeCard,
          onClick: e => this.handleCardClick(e, card),
          onDelete: this.props.onCardDelete,
          editable: editable,
          hideCardDeleteIcon: hideCardDeleteIcon
        }, card));

        return draggable && cardDraggable ? /*#__PURE__*/_react.default.createElement(_Draggable.default, {
          key: card.id
        }, cardToRender) : /*#__PURE__*/_react.default.createElement("span", {
          key: card.id
        }, cardToRender);
      });
      return /*#__PURE__*/_react.default.createElement(_Base.ScrollableLane, {
        ref: this.laneDidMount,
        isDraggingOver: isDraggingOver
      }, /*#__PURE__*/_react.default.createElement(_Container.default, {
        orientation: "vertical",
        groupName: this.groupName,
        dragClass: cardDragClass,
        onDragStart: this.onDragStart,
        onDrop: e => this.onDragEnd(id, e),
        onDragEnter: () => this.setState({
          isDraggingOver: true
        }),
        onDragLeave: () => this.setState({
          isDraggingOver: false
        }),
        shouldAcceptDrop: this.shouldAcceptDrop,
        getChildPayload: index => this.props.getCardDetails(id, index)
      }, cardList), editable && !addCardMode && this.renderAddCardLink(), addCardMode && this.renderNewCard());
    });
    (0, _defineProperty2.default)(this, "renderHeader", () => {
      const customLaneHeader = this.props.customLaneHeader;

      if (customLaneHeader) {
        const customLaneElement = _react.default.cloneElement(customLaneHeader, _objectSpread({}, this.props));

        return /*#__PURE__*/_react.default.createElement("span", null, customLaneElement);
      } else {
        const _this$props4 = this.props,
              title = _this$props4.title,
              label = _this$props4.label,
              titleStyle = _this$props4.titleStyle,
              labelStyle = _this$props4.labelStyle;
        return /*#__PURE__*/_react.default.createElement(_Base.LaneHeader, {
          onDoubleClick: this.toggleLaneCollapsed
        }, /*#__PURE__*/_react.default.createElement(_Base.Title, {
          style: titleStyle
        }, title), label && /*#__PURE__*/_react.default.createElement(_Base.RightContent, null, /*#__PURE__*/_react.default.createElement("span", {
          style: labelStyle
        }, label)));
      }
    });
    (0, _defineProperty2.default)(this, "renderFooter", () => {
      const _this$props5 = this.props,
            collapsibleLanes = _this$props5.collapsibleLanes,
            cards = _this$props5.cards;
      const collapsed = this.state.collapsed;

      if (collapsibleLanes && cards.length > 0) {
        return /*#__PURE__*/_react.default.createElement(_Base.LaneFooter, {
          onClick: this.toggleLaneCollapsed
        }, collapsed ? /*#__PURE__*/_react.default.createElement(_Elements.ExpandBtn, null) : /*#__PURE__*/_react.default.createElement(_Elements.CollapseBtn, null));
      }
    });
    (0, _defineProperty2.default)(this, "toggleLaneCollapsed", () => {
      this.props.collapsibleLanes && this.setState(state => ({
        collapsed: !state.collapsed
      }));
    });
  }

  sortCards(cards, sortFunction) {
    if (!cards) return [];
    if (!sortFunction) return cards;
    return cards.concat().sort(function (card1, card2) {
      return sortFunction(card1, card2);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!(0, _isEqual.default)(this.props.cards, nextProps.cards)) {
      this.setState({
        currentPage: nextProps.currentPage
      });
    }
  }

  get groupName() {
    const boardId = this.props.boardId;
    return "TrelloBoard".concat(boardId, "Lane");
  }

  render() {
    const _this$state2 = this.state,
          loading = _this$state2.loading,
          isDraggingOver = _this$state2.isDraggingOver;
    const _this$props6 = this.props,
          id = _this$props6.id,
          onLaneClick = _this$props6.onLaneClick,
          onLaneScroll = _this$props6.onLaneScroll,
          onCardClick = _this$props6.onCardClick,
          onCardAdd = _this$props6.onCardAdd,
          onCardDelete = _this$props6.onCardDelete,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props6, _excluded);
    return /*#__PURE__*/_react.default.createElement(_Base.Section, (0, _extends2.default)({}, otherProps, {
      key: id,
      onClick: () => onLaneClick && onLaneClick(id),
      draggable: false,
      className: "react-trello-lane"
    }), this.renderHeader(), this.renderDragContainer(isDraggingOver), loading && /*#__PURE__*/_react.default.createElement(_Loader.default, null), this.renderFooter());
  }

}

Lane.propTypes = {
  actions: _propTypes.default.object,
  children: _propTypes.default.node,
  id: _propTypes.default.string.isRequired,
  boardId: _propTypes.default.string,
  title: _propTypes.default.node,
  index: _propTypes.default.number,
  laneSortFunction: _propTypes.default.func,
  style: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  labelStyle: _propTypes.default.object,
  customLaneHeader: _propTypes.default.element,
  customCardLayout: _propTypes.default.bool,
  cards: _propTypes.default.array,
  label: _propTypes.default.string,
  currentPage: _propTypes.default.number,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  droppable: _propTypes.default.bool,
  onLaneScroll: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  newCardTemplate: _propTypes.default.node,
  addCardLink: _propTypes.default.node,
  addCardTitle: _propTypes.default.string,
  editable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string
};
Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onCardAdd: () => {}
};

const mapDispatchToProps = dispatch => ({
  actions: (0, _redux.bindActionCreators)(laneActions, dispatch)
});

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Lane);

exports.default = _default;