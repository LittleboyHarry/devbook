"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[838],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,m=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=s;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4260:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],l={title:"\u8272\u5f69"},a=void 0,p={unversionedId:"win/helper/color",id:"win/helper/color",title:"\u8272\u5f69",description:"\u9ed1\u767d\u53cd\u8f6c",source:"@site/docs/win/60-helper/color.md",sourceDirName:"win/60-helper",slug:"/win/helper/color",permalink:"/geekbook/docs/win/helper/color",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/60-helper/color.md",tags:[],version:"current",frontMatter:{title:"\u8272\u5f69"},sidebar:"win",previous:{title:"\u6ce8\u518c\u8868",permalink:"/geekbook/docs/win/helper/registry"},next:{title:"\u5176\u5b83",permalink:"/geekbook/docs/win/helper/other"}},u=[{value:"\u9ed1\u767d\u53cd\u8f6c",id:"\u9ed1\u767d\u53cd\u8f6c",children:[],level:2}],f={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u9ed1\u767d\u53cd\u8f6c"},"\u9ed1\u767d\u53cd\u8f6c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"reg add HKCU\\Software\\Microsoft\\ColorFiltering /v HotkeyEnabled /t REG_DWORD /d 1 /f\nreg add HKCU\\Software\\Microsoft\\ColorFiltering /v FilterType /t REG_DWORD /d 2 /f\n\n")),(0,i.kt)("p",null,"\u6309\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"Win + Ctrl + C")," \u53cd\u8f6c\u989c\u8272\uff0c\u9002\u7528\u4e8e\u8fd8\u6ca1\u9002\u914d\u6df1\u8272\u6a21\u5f0f\u7684\u5e94\u7528\u7a0b\u5e8f"))}s.isMDXComponent=!0}}]);