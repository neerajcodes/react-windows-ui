"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),setAppDark=require("../ThemeManager").setAppDark,setAppLight=require("../ThemeManager").setAppLight;const SystemThemeFollower=()=>((0,_react.useEffect)(()=>{if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){setAppDark();let a=document.getElementById("app-day-night-switch");a.checked=!0}}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{const b=a.matches?"dark":"light";let c=document.getElementById("app-day-night-switch");"dark"==b?(setAppDark(),c.checked=!0):(setAppLight(),c.checked=!1)}),"");var _default=SystemThemeFollower;exports.default=_default;