"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var _InlineInput = _interopRequireDefault(require("../widgets/InlineInput"));

var _Tag = _interopRequireDefault(require("./Card/Tag"));

var _DeleteButton = _interopRequireDefault(require("../widgets/DeleteButton"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Card extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onDelete", e => {
      this.props.onDelete();
      e.stopPropagation();
    });
  }

  render() {
    const _this$props = this.props,
          showDeleteButton = _this$props.showDeleteButton,
          style = _this$props.style,
          tagStyle = _this$props.tagStyle,
          onClick = _this$props.onClick,
          onDelete = _this$props.onDelete,
          onChange = _this$props.onChange,
          className = _this$props.className,
          id = _this$props.id,
          title = _this$props.title,
          label = _this$props.label,
          description = _this$props.description,
          tags = _this$props.tags,
          cardDraggable = _this$props.cardDraggable,
          editable = _this$props.editable,
          t = _this$props.t;

    const updateCard = card => {
      onChange(_objectSpread(_objectSpread({}, card), {}, {
        id
      }));
    };

    const clickCard = event => {
      if (editable && event?.target?.type === 'textarea') {
        return;
      }

      onClick(event);
    };

    return /*#__PURE__*/_react.default.createElement(_Base.MovableCardWrapper, {
      "data-id": id,
      onClick: clickCard,
      style: style,
      className: className
    }, /*#__PURE__*/_react.default.createElement(_Base.CardHeader, null, /*#__PURE__*/_react.default.createElement(_Base.CardTitle, {
      draggable: cardDraggable
    }, editable ? /*#__PURE__*/_react.default.createElement(_InlineInput.default, {
      value: title,
      border: true,
      placeholder: t('placeholder.title'),
      resize: "vertical",
      onSave: value => updateCard({
        title: value
      })
    }) : title), /*#__PURE__*/_react.default.createElement(_Base.CardRightContent, null, editable ? /*#__PURE__*/_react.default.createElement(_InlineInput.default, {
      value: label,
      border: true,
      placeholder: t('placeholder.label'),
      resize: "vertical",
      onSave: value => updateCard({
        label: value
      })
    }) : label), showDeleteButton && /*#__PURE__*/_react.default.createElement(_DeleteButton.default, {
      onClick: this.onDelete
    })), /*#__PURE__*/_react.default.createElement(_Base.Detail, null, editable ? /*#__PURE__*/_react.default.createElement(_InlineInput.default, {
      value: description,
      border: true,
      placeholder: t('placeholder.description'),
      resize: "vertical",
      onSave: value => updateCard({
        description: value
      })
    }) : description), tags && tags.length > 0 && /*#__PURE__*/_react.default.createElement(_Base.Footer, null, tags.map(tag => /*#__PURE__*/_react.default.createElement(_Tag.default, (0, _extends2.default)({
      key: tag.title
    }, tag, {
      tagStyle: tagStyle
    })))));
  }

}

Card.propTypes = {
  showDeleteButton: _propTypes.default.bool,
  onDelete: _propTypes.default.func,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  description: _propTypes.default.string,
  tags: _propTypes.default.array
};
Card.defaultProps = {
  showDeleteButton: true,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  tagStyle: {},
  title: 'no title',
  description: '',
  label: '',
  tags: [],
  className: ''
};
var _default = Card;
exports.default = _default;