"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.string.includes.js");var _react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const MenuBar=a=>{const[b,c]=(0,_react.useState)(!1),d=(0,_react.useRef)(null);(a=>{(0,_react.useEffect)(()=>{/**
       * Alert if clicked on outside of element
       */function d(d){a.current&&!a.current.contains(d.target)&&c(b)}// Bind the event listener
return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[a])})(d);//--------------------------------------------------------------------
const f=a.data,[g,h]=_react.default.useState(f),[i,j]=_react.default.useState("");return/*#__PURE__*/_react.default.createElement("div",{className:"app-select-styled menubar",onClick:()=>c(!b),ref:d},/*#__PURE__*/_react.default.createElement("span",null,a.label),/*#__PURE__*/_react.default.createElement("ul",{className:b?"show":""},/*#__PURE__*/_react.default.createElement("div",{className:"app-search-box",onClick:a=>{a.stopPropagation()}},/*#__PURE__*/_react.default.createElement("input",{className:"app-input-text app-input-search",type:"search",placeholder:a.searchPlaceholder,value:i,onChange:a=>{const b=f.filter(b=>b.label.toLowerCase().includes(a.target.value.toLowerCase()));h(b),j(a.target.value)}})),g.map(a=>/*#__PURE__*/_react.default.createElement("li",{className:"option",key:a.label},/*#__PURE__*/_react.default.createElement(_reactRouterDom.Link,{to:a.link,onClick:a.onClick},a.icon,a.label)))))};MenuBar.defaultProps={data:[],searchPlaceholder:"search here.."};var _default=MenuBar;exports.default=_default;