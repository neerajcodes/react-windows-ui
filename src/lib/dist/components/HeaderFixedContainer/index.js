"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const HeaderFixedContainer=a=>/*#__PURE__*/_react.default.createElement("div",{className:"app-header-fixed-container",style:{width:"100%",zIndex:a.zIndex}},a.children);HeaderFixedContainer.defaultProps={zIndex:2};var _default=HeaderFixedContainer;exports.default=_default;