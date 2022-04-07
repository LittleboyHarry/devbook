"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9074],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6625:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"AltSnap"},p=void 0,c={unversionedId:"win/helper/altsnap",id:"win/helper/altsnap",title:"AltSnap",description:"\u6e90\u7801\u4ed3\u5e93  \u5b89\u88c5\uff1a",source:"@site/docs/win/60-helper/2-altsnap.md",sourceDirName:"win/60-helper",slug:"/win/helper/altsnap",permalink:"/geekbook/docs/win/helper/altsnap",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/60-helper/2-altsnap.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AltSnap"},sidebar:"win",previous:{title:"\u865a\u62df\u673a",permalink:"/geekbook/docs/win/dev/vm"},next:{title:"\u6ce8\u518c\u8868",permalink:"/geekbook/docs/win/helper/registry"}},u=[{value:"\u7279\u9879",id:"\u7279\u9879",children:[],level:2},{value:"bug",id:"bug",children:[],level:2}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6e90\u7801\u4ed3\u5e93 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/RamonUnch/AltSnap"},"https://github.com/RamonUnch/AltSnap")," \u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"winget install altsnap\n")),(0,l.kt)("p",null,"\u53f3\u952e\u6258\u76d8\u56fe\u6807\uff0c\u63a8\u8350\u8bbe\u7f6e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9009\u5b9a\u8bed\u8a00 > \u5e94\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u52fe\u9009\u201c\u62d6\u52a8\u65f6\u805a\u7126\u7a97\u53e3\u201d"),(0,l.kt)("li",{parentName:"ol"},"\u52fe\u9009\u201c\u767b\u9646\u65f6\u81ea\u52a8\u542f\u52a8\u201d"),(0,l.kt)("li",{parentName:"ol"},"\u201c\u952e\u76d8\u201d \u9762\u677f > \u70ed\u952e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u201c\u70ed\u952e\u201d \u63a8\u8350\u53ea\u9009 \u201c\u5de6 Win \u952e\u201d\u4f5c\uff1a\u907f\u514d\u4e0e PhotoShop \u7c7b\u5e94\u7528\u9700 Alt \u952e\u62d6\u62fd\u53d1\u751f\u51b2\u7a81\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u201c\u4e3b\u526f\u52a8\u4f5c\u8c03\u6362\u201d \u9009 \u201c\u5de6 Shift \u952e\u201d\uff1a\u6309\u4e0b\u540e\u4ea4\u6362\u5de6\u53f3\u952e\u884c\u4e3a\uff0c\u8bbe\u7528\u4e8e\u4e0d\u65b9\u4fbf\u53f3\u952e\u7684\u89e6\u6478\u677f"))),(0,l.kt)("li",{parentName:"ol"},"\u201c\u9f20\u6807\u201d \u9762\u677f\uff1a\u81ea\u884c\u8c03\u6574"),(0,l.kt)("li",{parentName:"ol"},"\u201c\u9ad8\u7ea7\u201d \u9762\u677f\uff1a\u5173\u95ed\u201c\u5bf9\u5168\u5c4f\u7a97\u53e3\u6709\u6548\u201d"),(0,l.kt)("li",{parentName:"ol"},"\uff08\u9009\u8bbe\uff09\u9ad8\u7ea7\uff1a\u79fb\u52a8\u65f6\u900f\u660e\u5ea6")),(0,l.kt)("h2",{id:"\u7279\u9879"},"\u7279\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63a8\u8350"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f29\u653e\u6240\u6709\u7a97\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f3a\u5236\u7f29\u653e\u4efb\u4f55\u7a97\u53e3\u3001\u7a81\u7834\u5927\u5c0f\u7ea6\u675f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e0d\u4e0a\u3001\u5173\u95ed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MDI \u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8c03\u6574 Office \u7c7b\u8f6f\u4ef6\u7684\u7a97\u5185\u7a97"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e0d\u4e0a\u3001\u5173\u95ed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u6743"),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u8c03\u6574\u7ba1\u7406\u5458\u8eab\u4efd\u7684\u7a97\u53e3\u7a0b\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u770b\u9700\u6c42")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"BUG")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u622a\u81f3 2021/12/14 WSLg \u7a97\u53e3\u8fd8\u4e0d\u53d7\u652f\u6301\uff0c\u9700\u8981\u6dfb\u52a0\u5230\u6392\u9664\u5217\u8868"))),(0,l.kt)("h2",{id:"bug"},"bug"),(0,l.kt)("p",null,"Win \u952e\u5931\u7075\u3001\u5361\u4f4f\uff1a\u53f3\u952e AltSnap \u6258\u76d8\u56fe\u6807\u5173\u95ed\u91cd\u542f"))}d.isMDXComponent=!0}}]);