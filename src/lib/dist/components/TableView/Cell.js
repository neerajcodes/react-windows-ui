"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const Cell=a=>{const b=a.rows;return/*#__PURE__*/_react.default.createElement("tr",null,b.map((a,b)=>/*#__PURE__*/_react.default.isValidElement(a)?/*#__PURE__*/_react.default.createElement("td",{key:b+a,style:{padding:0}},a):/*#__PURE__*/_react.default.createElement("td",{key:b+a},a)))};Cell.defaultProps={rows:[]};var _default=Cell;exports.default=_default;