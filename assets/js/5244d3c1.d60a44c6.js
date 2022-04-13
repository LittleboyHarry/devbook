"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8163],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1815:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Win11"},l=void 0,u={unversionedId:"win/optimze/win11",id:"win/optimze/win11",title:"Win11",description:"\u4efb\u52a1\u680f",source:"@site/docs/win/4-optimze/16-win11.md",sourceDirName:"win/4-optimze",slug:"/win/optimze/win11",permalink:"/geekbook/docs/win/optimze/win11",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/4-optimze/16-win11.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Win11"},sidebar:"win",previous:{title:"\u952e\u76d8\u4e0e\u8f93\u5165\u6cd5",permalink:"/geekbook/docs/win/optimze/input"},next:{title:"\u7f51\u7edc\u95ee\u9898",permalink:"/geekbook/docs/win/optimze/network"}},p=[{value:"\u4efb\u52a1\u680f",id:"\u4efb\u52a1\u680f",children:[],level:2}],s={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4efb\u52a1\u680f"},"\u4efb\u52a1\u680f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"# \u5143\u7d20\u5de6\u5bf9\u9f50\nreg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced /v TaskbarAl /t REG_DWORD /d 0 /f\n\n# \u79fb\u9664\u5e72\u6270\u5143\u7d20\nreg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced /v TaskbarDa /t REG_DWORD /d 0 /f\nreg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced /v TaskbarMn /t REG_DWORD /d 0 /f\nreg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced /v MMTaskbarMode /t REG_DWORD /d 2 /f\n\n# Alt + Tab \u4e0d\u8981\u5207\u6362 Edge \u6807\u7b7e\u9875\nreg add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced /v MultiTaskingAltTabFilter /t REG_DWORD /d 3 /f\n")))}d.isMDXComponent=!0}}]);