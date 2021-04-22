"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInput = exports.CardForm = exports.NewLaneButtons = exports.NewLaneSection = exports.LaneSection = exports.LaneTitle = exports.AddCardLink = exports.TagSpan = exports.Footer = exports.Detail = exports.CardRightContent = exports.CardTitle = exports.CardHeader = exports.MovableCardWrapper = exports.CardWrapper = exports.RightContent = exports.Title = exports.ScrollableLane = exports.LaneFooter = exports.LaneHeader = exports.Section = exports.Header = exports.BoardWrapper = exports.CustomPopoverContent = exports.CustomPopoverContainer = exports.GlobalStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _reactPopopo = require("react-popopo");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: \"\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"], ["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: \"\\\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"])));
exports.GlobalStyle = GlobalStyle;
const CustomPopoverContainer = (0, _styledComponents.default)(_reactPopopo.PopoverContainer)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  right: 10px;\n  flex-flow: column nowrap;\n"])));
exports.CustomPopoverContainer = CustomPopoverContainer;
const CustomPopoverContent = (0, _styledComponents.default)(_reactPopopo.PopoverContent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  visibility: hidden;\n  margin-top: -5px;\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #fff;\n  color: #000;\n  padding: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  ", " &::before {\n    visibility: hidden;\n  }\n  a {\n    color: rgba(255, 255, 255, 0.56);\n    padding: 0.5em 1em;\n    margin: 0;\n    text-decoration: none;\n    &:hover {\n      background-color: #00bcd4 !important;\n      color: #37474f;\n    }\n  }\n"])), props => props.active && "\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  ");
exports.CustomPopoverContent = CustomPopoverContent;

const BoardWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #3179ba;\n  overflow-y: hidden;\n  padding: 5px;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n"])));

exports.BoardWrapper = BoardWrapper;

const Header = _styledComponents.default.header(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"])));

exports.Header = Header;

const Section = _styledComponents.default.section(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  position: relative;\n  padding: 10px;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n"])));

exports.Section = Section;
const LaneHeader = (0, _styledComponents.default)(Header)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 0px;\n  ", " ", ";\n"])), props => props.editLaneTitle && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n      padding: 0px;\n      line-height: 30px;\n    "]))), props => !props.editLaneTitle && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n      padding: 0px 5px;\n    "]))));
exports.LaneHeader = LaneHeader;

const LaneFooter = _styledComponents.default.div(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  height: 10px;\n"])));

exports.LaneFooter = LaneFooter;

const ScrollableLane = _styledComponents.default.div(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow-y: auto;\n  min-width: 250px;\n  overflow-x: hidden;\n  align-self: center;\n  max-height: 90vh;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n"])));

exports.ScrollableLane = ScrollableLane;

const Title = _styledComponents.default.span(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: ", ";\n  width: 70%;\n"])), props => props.draggable ? 'grab' : "auto");

exports.Title = Title;

const RightContent = _styledComponents.default.span(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n  width: 38%;\n  text-align: right;\n  padding-right: 10px;\n  font-size: 13px;\n"])));

exports.RightContent = RightContent;

const CardWrapper = _styledComponents.default.article(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n"])));

exports.CardWrapper = CardWrapper;
const MovableCardWrapper = (0, _styledComponents.default)(CardWrapper)(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2.default)(["\n  &:hover {\n    background-color: #f0f0f0;\n    color: #000;\n  }\n"])));
exports.MovableCardWrapper = MovableCardWrapper;
const CardHeader = (0, _styledComponents.default)(Header)(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n  color: #000;\n"])));
exports.CardHeader = CardHeader;
const CardTitle = (0, _styledComponents.default)(Title)(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 14px;\n"])));
exports.CardTitle = CardTitle;
const CardRightContent = (0, _styledComponents.default)(RightContent)(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 10px;\n"])));
exports.CardRightContent = CardRightContent;

const Detail = _styledComponents.default.div(_templateObject19 || (_templateObject19 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 12px;\n  color: #4d4d4d;\n  white-space: pre-wrap;\n"])));

exports.Detail = Detail;

const Footer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n"])));

exports.Footer = Footer;

const TagSpan = _styledComponents.default.span(_templateObject21 || (_templateObject21 = (0, _taggedTemplateLiteral2.default)(["\n  padding: 2px 3px;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n"])));

exports.TagSpan = TagSpan;

const AddCardLink = _styledComponents.default.a(_templateObject22 || (_templateObject22 = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 0 0 3px 3px;\n  color: #838c91;\n  display: block;\n  padding: 5px 2px;\n  margin-top: 10px;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n  }\n"])));

exports.AddCardLink = AddCardLink;

const LaneTitle = _styledComponents.default.div(_templateObject23 || (_templateObject23 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  width: 268px;\n  height: auto;\n"])));

exports.LaneTitle = LaneTitle;

const LaneSection = _styledComponents.default.section(_templateObject24 || (_templateObject24 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #2b6aa3;\n  border-radius: 3px;\n  margin: 5px;\n  position: relative;\n  padding: 5px;\n  display: inline-flex;\n  height: auto;\n  flex-direction: column;\n"])));

exports.LaneSection = LaneSection;
const NewLaneSection = (0, _styledComponents.default)(LaneSection)(_templateObject25 || (_templateObject25 = (0, _taggedTemplateLiteral2.default)(["\n  width: 200px;\n"])));
exports.NewLaneSection = NewLaneSection;

const NewLaneButtons = _styledComponents.default.div(_templateObject26 || (_templateObject26 = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 10px;\n"])));

exports.NewLaneButtons = NewLaneButtons;

const CardForm = _styledComponents.default.div(_templateObject27 || (_templateObject27 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n"])));

exports.CardForm = CardForm;

const InlineInput = _styledComponents.default.textarea(_templateObject28 || (_templateObject28 = (0, _taggedTemplateLiteral2.default)(["\n  overflow-x: hidden; /* for Firefox (issue #5) */\n  word-wrap: break-word;\n  min-height: 18px;\n  max-height: 112px; /* optional, but recommended */\n  resize: none;\n  width: 100%;\n  height: 18px;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  background-color: transparent;\n  box-shadow: none;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: 0;\n  padding: 0 8px;\n  outline: 0;\n  ", " &:focus {\n    background-color: white;\n  }\n"])), props => props.border && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = (0, _taggedTemplateLiteral2.default)(["\n      &:focus {\n        box-shadow: inset 0 0 0 2px #0079bf;\n      }\n    "]))));

exports.InlineInput = InlineInput;