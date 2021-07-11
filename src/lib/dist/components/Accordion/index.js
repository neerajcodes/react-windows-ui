"use strict";var _react=_interopRequireWildcard(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const Accordion=a=>{const[b,c]=(0,_react.useState)(!1);return/*#__PURE__*/_react.default.createElement("div",{className:"app-accordion-item",style:{width:a.width}},/*#__PURE__*/_react.default.createElement("div",{className:a.focused?"app-accordion-title focused":"app-accordion-title",onClick:()=>c(!b)},/*#__PURE__*/_react.default.createElement("div",null,a.title),/*#__PURE__*/_react.default.createElement("div",null,b?a.expandIcon:a.collapseIcon)),/*#__PURE__*/_react.default.createElement("div",{className:b?"app-accordion-content show":"app-accordion-content"},a.children))};Accordion.defaultProps={width:287,collapseIcon:/*#__PURE__*/_react.default.createElement("i",{className:"icons10-angle-down"}),expandIcon:/*#__PURE__*/_react.default.createElement("i",{className:"icons10-angle-up"})};var _default=Accordion;exports.default=_default;