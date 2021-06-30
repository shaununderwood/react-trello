"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = require("../styles/Base");

var _TextInput = _interopRequireDefault(require("../widgets/TextInput"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class CardEditableNote extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onDelete", e => {
      this.props.onDelete();
      e.stopPropagation();
    });
  }

  render() {
    const _this$props = this.props,
          style = _this$props.style,
          onClick = _this$props.onClick,
          onChange = _this$props.onChange,
          className = _this$props.className,
          id = _this$props.id,
          title = _this$props.title,
          description = _this$props.description,
          cardDraggable = _this$props.cardDraggable,
          note = _this$props.note;

    const updateCard = card => {
      onChange(_objectSpread(_objectSpread({}, card), {}, {
        id
      }));
    };

    const clickCard = event => {
      if (event?.target?.type === 'textarea') {
        return;
      }

      onClick(event);
    };

    return /*#__PURE__*/_react.default.createElement(_Base.MovableCardWrapper, {
      "data-id": id,
      style: style,
      className: className
    }, /*#__PURE__*/_react.default.createElement(_Base.CardHeader, null, /*#__PURE__*/_react.default.createElement(_Base.CardTitle, {
      draggable: cardDraggable
    }, title)), /*#__PURE__*/_react.default.createElement(_Base.Detail, null, description, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex'
      }
    }, "\u2261", /*#__PURE__*/_react.default.createElement("div", {
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
      value: note,
      border: true,
      placeholder: "Notes",
      resize: "vertical",
      onSave: value => updateCard({
        note: value
      })
    }))), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: clickCard
    }, "View"))));
  }

}

CardEditableNote.propTypes = {
  onEdit: _propTypes.default.func,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  note: _propTypes.default.string,
  optionBtnText: _propTypes.default.string,
  optionBtnOnClick: _propTypes.default.func
};
CardEditableNote.defaultProps = {
  onEdit: () => {},
  onClick: () => {},
  style: {},
  className: '',
  title: 'no title',
  description: '',
  note: '',
  optionBtnText: null,
  optionBtnOnClick: null
};
var _default = CardEditableNote;
exports.default = _default;