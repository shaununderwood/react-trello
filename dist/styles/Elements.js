"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddLaneLink = exports.CancelButton = exports.AddButton = exports.ExpandBtn = exports.CollapseBtn = exports.ExpandCollapseBase = exports.DeleteIcon = exports.LaneMenuTitle = exports.LaneMenuItem = exports.LaneMenuContent = exports.LaneMenuHeader = exports.MenuButton = exports.DelButton = exports.GenDelButton = exports.DeleteWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Base = require("./Base");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

const DeleteWrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n  position: absolute;\n  top: -1px;\n  right: 2px;\n  cursor: pointer;\n"])));

exports.DeleteWrapper = DeleteWrapper;

const GenDelButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 15px;\n  height: 15px;\n  padding: 0;\n  margin-top: 5px;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n"])));

exports.GenDelButton = GenDelButton;

const DelButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 8px;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n  opacity: 0;\n  ", ":hover & {\n    opacity: 1;\n  }\n"])), _Base.MovableCardWrapper);

exports.DelButton = DelButton;

const MenuButton = _styledComponents.default.button(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: bold;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n"])));

exports.MenuButton = MenuButton;

const LaneMenuHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n    position: relative;\n    margin-bottom: 4px;\n    text-align: center;\n"])));

exports.LaneMenuHeader = LaneMenuHeader;

const LaneMenuContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0 12px 12px;\n"])));

exports.LaneMenuContent = LaneMenuContent;

const LaneMenuItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n    cursor: pointer;\n    display: block;\n    font-weight: 700;\n    padding: 6px 12px;\n    position: relative;\n    margin: 0 -12px;\n    text-decoration: none;\n\n    &:hover {\n      background-color: #3179BA;\n      color: #fff;\n    }\n"])));

exports.LaneMenuItem = LaneMenuItem;

const LaneMenuTitle = _styledComponents.default.span(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n    box-sizing: border-box;\n    color: #6b808c;\n    display: block;\n    line-height: 30px;\n    border-bottom: 1px solid rgba(9,45,66,.13);\n    margin: 0 6px;\n    overflow: hidden;\n    padding: 0 32px;\n    position: relative;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    z-index: 1;\n"])));

exports.LaneMenuTitle = LaneMenuTitle;

const DeleteIcon = _styledComponents.default.span(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  opacity: 1;\n  overflow: hidden;\n  border: 1px solid #83bd42;\n  border-radius: 50%;\n  padding: 4px;\n  background-color: #83bd42;\n\n  ", ":hover & {\n    opacity: 1;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background: red;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 60%;\n    top: 45%;\n    left: 20%;\n    background: #fff;\n    border-radius: 5px;\n  }\n\n  &:before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n"])), _Base.CardWrapper);

exports.DeleteIcon = DeleteIcon;

const ExpandCollapseBase = _styledComponents.default.span(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  width: 36px;\n  margin: 0 auto;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n"])));

exports.ExpandCollapseBase = ExpandCollapseBase;
const CollapseBtn = (0, _styledComponents.default)(ExpandCollapseBase)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 4px;\n    border-bottom: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"])));
exports.CollapseBtn = CollapseBtn;
const ExpandBtn = (0, _styledComponents.default)(ExpandCollapseBase)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    border-top: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"])));
exports.ExpandBtn = ExpandBtn;

const AddButton = _styledComponents.default.button(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n  background: #5aac44;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 8px;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n"])));

exports.AddButton = AddButton;

const CancelButton = _styledComponents.default.button(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2.default)(["\n  background: #999999;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n"])));

exports.CancelButton = CancelButton;

const AddLaneLink = _styledComponents.default.button(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2.default)(["\n  background: #2b6aa3;\n  border: none;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 0px;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  margin-bottom: 0;\n"])));

exports.AddLaneLink = AddLaneLink;