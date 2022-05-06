"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[6029],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},f),{},{components:n})):r.createElement(d,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2782:function(e,t,n){n.d(t,{o6:function(){return f},cA:function(){return p},Qj:function(){return s},Bp:function(){return u},YI:function(){return c}});var r=n(3117),o=n(7294),i=n(6010),a="linkButton_pNme";function c(e){var t=e.id,n=e.name;return o.createElement(p,{href:l(t)},n)}function u(e){var t=e.id,n=e.name;return o.createElement(s,{name:n,href:l(t)})}function l(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function f(e){var t=e.name,n=e.href,r=e.hint;return o.createElement(s,{name:t,href:n,hint:r,attr:{download:!0}})}function s(e){var t=e.name,n=e.href,c=e.outline,u=e.hint,l=e.attr,f=e.style,s=e.small;return o.createElement("a",(0,r.Z)({href:n,className:(0,i.Z)(a,"button",!s&&"button--lg",c?"button--outline button--secondary":"button--primary"),title:u},l,{style:Object.assign({cursor:u?"help":"pointer",verticalAlign:"baseline"},f)}),t)}function p(e){var t=e.href,n=e.className,r=e.style,i=e.children;return o.createElement("a",{style:r,className:n,href:t},i)}},2861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=n(2782),c=["components"],u={title:"\u63d0\u9ad8\u6548\u7387"},l=void 0,f={unversionedId:"win/effective",id:"win/effective",title:"\u63d0\u9ad8\u6548\u7387",description:"\u5e93\u673a\u5236",source:"@site/docs/win/8-effective.md",sourceDirName:"win",slug:"/win/effective",permalink:"/geekbook/docs/win/effective",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/8-effective.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u63d0\u9ad8\u6548\u7387"},sidebar:"win",previous:{title:"\u6346\u7ed1\u670d\u52a1",permalink:"/geekbook/docs/win/unuse"},next:{title:"\u4e3a\u7b14\u8bb0\u672c\u4f18\u5316",permalink:"/geekbook/docs/win/laptop"}},s={},p=[{value:"\u5e93\u673a\u5236",id:"\u5e93\u673a\u5236",level:2},{value:"\u7ba1\u7406\u5f00\u59cb\u83dc\u5355\u5e94\u7528",id:"\u7ba1\u7406\u5f00\u59cb\u83dc\u5355\u5e94\u7528",level:3},{value:"\u8bbf\u95ee\u952e",id:"\u8bbf\u95ee\u952e",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e93\u673a\u5236"},(0,i.kt)("a",{parentName:"h2",href:"https://sspai.com/post/41297"},"\u5e93\u673a\u5236")),(0,i.kt)("p",null,"\u5feb\u901f\u6fc0\u6d3b\u4ee3\u7801\uff1a\uff08\u6fc0\u6d3b\u540e\u91cd\u65b0\u6253\u5f00\u6587\u4ef6\u7ba1\u7406\u5668\uff0c\u5de6\u65b9\u5217\u8868\u53ef\u89c1\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Classes\\CLSID\\{031E4825-7B94-4dc3-B131-E946B44C8DD5}" /v System.IsPinnedToNameSpaceTree /t REG_DWORD /d 1 /f\n')),(0,i.kt)("h3",{id:"\u7ba1\u7406\u5f00\u59cb\u83dc\u5355\u5e94\u7528"},"\u7ba1\u7406\u5f00\u59cb\u83dc\u5355\u5e94\u7528"),(0,i.kt)("p",null,"\u4f7f\u7528\u201c\u5e93\u201d\u673a\u5236\uff0c\u80fd\u5bb9\u6613\u7ba1\u7406\u5f00\u59cb\u83dc\u5355\u5185\u5bb9\u3002\n\u6211\u4eec\u8fdb\u5165\u5e93\uff0c\u65b0\u5efa\u4e00\u4e2a\u547d\u540d\u4e3a\u201c\u5f00\u59cb\u83dc\u5355\u201d\u7684\u5e93\uff0c\u7f16\u8f91\u5176\u5c5e\u6027\u3002\u201c\u6dfb\u52a0\u201d\u5e76\u201c\u8bbe\u7f6e\u4fdd\u5b58\u4f4d\u7f6e\u201d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\n")),(0,i.kt)("p",null,"\u7ee7\u7eed\u201c\u6dfb\u52a0\u201d\u5e76\u201c\u8bbe\u7f6e\u516c\u5171\u4fdd\u5b58\u4f4d\u7f6e\u201d\uff1a\uff08\u540e\u8005\u662f\u53ea\u8bfb\u7684\uff0c\u4fee\u6539\u9700\u8981\u63d0\u6743\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\n")),(0,i.kt)("p",null,"\u4ee5\u540e\u628a\u9700\u8981\u7684\u5feb\u6377\u65b9\u5f0f\u90fd\u62d6\u5165\u5e93\uff0c\u5373\u53ef\u8f7b\u677e\u6dfb\u52a0\u5230\u5f00\u59cb\u83dc\u5355\u4e86\uff01"),(0,i.kt)("h2",{id:"\u8bbf\u95ee\u952e"},"\u8bbf\u95ee\u952e"),(0,i.kt)("p",null,"\u901a\u8fc7\u6309 ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt + \u5b57\u6bcd")," \u7684\u7ec4\u5408\u952e\uff0c\u89e6\u53d1\u6309\u94ae\u6216\u83dc\u5355\u9879\uff0c\u4ee5\u907f\u514d\u79fb\u52a8\u9f20\u6807\u3001\u6539\u5584\u6548\u7387\u3002"),(0,i.kt)(a.cA,{href:"ms-settings:easeofaccess-keyboard",mdxType:"HtmlA"},"\u8bbe\u7f6e\u201c\u8f85\u52a9\u529f\u80fd>\u952e\u76d8\u201d"),"\uff0c \u52fe\u9009\u201c\u4e3a\u8bbf\u95ee\u952e\u6dfb\u52a0\u4e0b\u5212\u7ebf\u201d\u3002\u53ef\u8bbf\u95ee\u7684\u5143\u7d20\u90fd\u4f1a\u6709\u4e0b\u5212\u7ebf\u6807\u8bb0\u7684\u5b57\u6bcd\u3002")}d.isMDXComponent=!0}}]);