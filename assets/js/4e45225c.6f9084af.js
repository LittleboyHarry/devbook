"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9833],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4008:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"\u952e\u76d8\u4e0e\u8f93\u5165\u6cd5"},p=void 0,d={unversionedId:"win/input",id:"win/input",title:"\u952e\u76d8\u4e0e\u8f93\u5165\u6cd5",description:"\u4e3a\u4e2d\u6587\u8f93\u5165\u63a8\u8350\uff1a",source:"@site/docs/win/3-input.md",sourceDirName:"win",slug:"/win/input",permalink:"/geekbook/docs/win/input",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/3-input.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u952e\u76d8\u4e0e\u8f93\u5165\u6cd5"},sidebar:"win",previous:{title:"\u5f00\u59cb",permalink:"/geekbook/docs/win/first-run"},next:{title:"\u4e3a\u7b14\u8bb0\u672c\u9002\u914d",permalink:"/geekbook/docs/win/laptop"}},l=[{value:"\u4f7f\u7528\u5c0f\u9e64\u53cc\u62fc",id:"\u4f7f\u7528\u5c0f\u9e64\u53cc\u62fc",children:[],level:2},{value:"\u907f\u514d\u7ec4\u5408\u952e\u51b2\u7a81",id:"\u907f\u514d\u7ec4\u5408\u952e\u51b2\u7a81",children:[],level:2},{value:"\u6539\u952e\u5e03\u5c40",id:"\u6539\u952e\u5e03\u5c40",children:[],level:2}],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e3a\u4e2d\u6587\u8f93\u5165\u63a8\u8350\uff1a"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u5c0f\u9e64\u53cc\u62fc"},"\u4f7f\u7528\u5c0f\u9e64\u53cc\u62fc"),(0,i.kt)("p",null,"\u53cc\u62fc\u4f5c\u7528: ",(0,i.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/21449398"},"https://www.zhihu.com/question/21449398")),(0,i.kt)("p",null,"\u7ec3\u4e60\u65b9\u6cd5: ",(0,i.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/311394000"},"https://www.zhihu.com/question/311394000")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},'reg add "HKCU\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS" /v "EnableExtraDomainType" /t REG_DWORD /f /d 1\nreg add "HKCU\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS" /v "Enable Double Pinyin" /t REG_DWORD /f /d 1\nreg add "HKCU\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS" /v "DoublePinyinScheme" /t REG_DWORD /f /d 10\nreg add "HKCU\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS" /v "UserDefinedDoublePinyinScheme0" /t REG_SZ /f /d "\u5c0f\u9e64\u53cc\u62fc*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt"\n\n')),(0,i.kt)("p",null,"\u4e3a\u7f16\u7a0b\u63a8\u8350\uff1a"),(0,i.kt)("h2",{id:"\u907f\u514d\u7ec4\u5408\u952e\u51b2\u7a81"},"\u907f\u514d\u7ec4\u5408\u952e\u51b2\u7a81"),(0,i.kt)("p",null,"\u5fae\u8f6f\u62fc\u97f3\u95ee\u9898\uff1a"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5207\u6362\u7e41\u4f53\u5feb\u6377\u952e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u89e3\u9501 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + F")," \u5360\u7528"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Microsoft\\InputMethod\\Settings\\CHS" /v "EnableSimplifiedTraditionalOutputSwitch" /t REG_DWORD /d "0" /f\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e2d\u82f1\u6587\u5207\u6362")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9650\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," \u624d\u80fd\u5207\u6362\uff0c\u89e3\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Space")," \u5360\u7528"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Microsoft\\InputMethod\\Settings\\CHS" /v "English Switch Key" /t REG_DWORD /d "4" /f\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6807\u70b9\u5207\u6362\u952e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5173\u95ed ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + .")," \u5360\u7528"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Microsoft\\InputMethod\\Settings\\CHS" /v "EnableChineseEnglishPunctuationSwitch" /t REG_DWORD /d "0" /f\n')))),(0,i.kt)("p",null,"\u5176\u4ed6\u5982\u8f93\u5165\u6cd5\u7b49\u56fd\u4ea7\u8f6f\u4ef6\uff0c\u81ea\u884c\u6253\u5f00\u8bbe\u7f6e\u9762\u677f\u5173\u95ed\u65e0\u7528\u5feb\u6377\u952e\u3002"),(0,i.kt)("h2",{id:"\u6539\u952e\u5e03\u5c40"},"\u6539\u952e\u5e03\u5c40"),(0,i.kt)("p",null,"\u4e3a\u5927\u91cf\u6253\u5b57\u9700\u6c42\u8005",(0,i.kt)("a",{parentName:"p",href:"../dev/keymap#windows"},"\u63a8\u8350")))}u.isMDXComponent=!0}}]);