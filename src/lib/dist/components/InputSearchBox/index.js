"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const InputSearchBox=a=>/*#__PURE__*/_react.default.createElement("div",{className:"app-search-box",title:a.tooltip},/*#__PURE__*/_react.default.createElement("input",{className:"app-input-text app-input-search",type:"search",placeholder:a.placeholder,onChange:a.onChange}));InputSearchBox.defaultProps={placeholder:"Search here.."};var _default=InputSearchBox;exports.default=_default;