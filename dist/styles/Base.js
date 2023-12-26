"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TagSpan = exports.Section = exports.ScrollableLane = exports.RightContent = exports.NewLaneSection = exports.NewLaneButtons = exports.MovableCardWrapper = exports.LaneTitle = exports.LaneSection = exports.LaneHeader = exports.LaneFooter = exports.Header = exports.GlobalStyle = exports.Footer = exports.Detail = exports.CardWrapper = exports.CardTitle = exports.CardRightContent = exports.CardHeader = exports.BoardDiv = exports.AddCardLink = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n  \n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n  \n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }  \n"])));
exports.GlobalStyle = GlobalStyle;

const BoardDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #3179ba;\n  overflow-y: hidden;\n  padding: 5px;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n"])));

exports.BoardDiv = BoardDiv;

const Header = _styledComponents.default.header(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"])));

exports.Header = Header;

const Section = _styledComponents.default.section(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  position: relative;\n  padding: 10px;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n"])));

exports.Section = Section;
const LaneHeader = (0, _styledComponents.default)(Header)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0px 5px;\n  margin-bottom: 0px;\n"])));
exports.LaneHeader = LaneHeader;

const LaneFooter = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  height: 10px;\n"])));

exports.LaneFooter = LaneFooter;

const ScrollableLane = _styledComponents.default.div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow-y: auto;\n  min-width: 250px;\n  overflow-x: hidden;\n  align-self: center;\n  max-height: 90vh;\n  padding-bottom: 30px;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n"])));

exports.ScrollableLane = ScrollableLane;

const Title = _styledComponents.default.span(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 70%;\n"])));

exports.Title = Title;

const RightContent = _styledComponents.default.span(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n  width: 30%;\n  text-align: right;\n  padding-right: 10px;\n  font-size: 13px;\n"])));

exports.RightContent = RightContent;

const CardWrapper = _styledComponents.default.article(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n"])));

exports.CardWrapper = CardWrapper;
const MovableCardWrapper = (0, _styledComponents.default)(CardWrapper)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n  &:hover {\n    background-color: #f0f0f0;\n    color: #000;\n  }\n"])));
exports.MovableCardWrapper = MovableCardWrapper;
const CardHeader = (0, _styledComponents.default)(Header)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n  color: #000;\n"])));
exports.CardHeader = CardHeader;
const CardTitle = (0, _styledComponents.default)(Title)(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 14px;\n"])));
exports.CardTitle = CardTitle;
const CardRightContent = (0, _styledComponents.default)(RightContent)(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 10px;\n"])));
exports.CardRightContent = CardRightContent;

const Detail = _styledComponents.default.div(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 12px;\n  color: #4d4d4d;\n  white-space: normal;\n"])));

exports.Detail = Detail;

const Footer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n"])));

exports.Footer = Footer;

const TagSpan = _styledComponents.default.span(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2.default)(["\n  padding: 2px 3px;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n"])));

exports.TagSpan = TagSpan;

const AddCardLink = _styledComponents.default.a(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 0 0 3px 3px;\n  color: #838c91;\n  display: block;\n  padding: 5px 2px;\n  position: absolute;\n  text-decoration: none;\n  cursor: pointer;\n  bottom: 3px;\n\n  &:hover {\n    //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n  }\n"])));

exports.AddCardLink = AddCardLink;

const LaneTitle = _styledComponents.default.div(_templateObject19 || (_templateObject19 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  width: 268px;\n  height: auto;\n"])));

exports.LaneTitle = LaneTitle;

const LaneSection = _styledComponents.default.section(_templateObject20 || (_templateObject20 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #2b6aa3;\n  border-radius: 3px;\n  margin: 5px;\n  position: relative;\n  padding: 5px;\n  display: inline-flex;\n  height: auto;\n  flex-direction: column;\n"])));

exports.LaneSection = LaneSection;
const NewLaneSection = (0, _styledComponents.default)(LaneSection)(_templateObject21 || (_templateObject21 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e0e3e6;\n"])));
exports.NewLaneSection = NewLaneSection;

const NewLaneButtons = _styledComponents.default.div(_templateObject22 || (_templateObject22 = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 10px;\n"])));

exports.NewLaneButtons = NewLaneButtons;