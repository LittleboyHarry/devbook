"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5677],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8508:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"\u5c0f\u6280\u5de7"},p=void 0,u={unversionedId:"linux/tips",id:"linux/tips",title:"\u5c0f\u6280\u5de7",description:"- sudo \u65f6\u987b\u7981\u7528\u4e2d\u6587\u8f93\u5165\u6a21\u5f0f\uff0c\u5426\u5219\u8f93\u5165\u5bc6\u7801\u603b\u662f\u9519\u8bef",source:"@site/docs/linux/95-tips.md",sourceDirName:"linux",slug:"/linux/tips",permalink:"/geekbook/docs/linux/tips",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/95-tips.md",tags:[],version:"current",sidebarPosition:95,frontMatter:{title:"\u5c0f\u6280\u5de7"},sidebar:"getstarted",previous:{title:"\u9632\u706b\u5899",permalink:"/geekbook/docs/linux/firewall"},next:{title:"\u8fdb\u9636\u914d\u7f6e",permalink:"/geekbook/docs/linux/advanced"}},c=[{value:"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f",id:"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f",children:[],level:2},{value:"Debian",id:"debian",children:[{value:"python \u7f3a\u5931",id:"python-\u7f3a\u5931",children:[],level:3}],level:2},{value:"\u5176\u5b83",id:"\u5176\u5b83",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo")," \u65f6\u987b\u7981\u7528\u4e2d\u6587\u8f93\u5165\u6a21\u5f0f\uff0c\u5426\u5219\u8f93\u5165\u5bc6\u7801\u603b\u662f\u9519\u8bef")),(0,i.kt)("h2",{id:"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f"},"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f"),(0,i.kt)("p",null,"\u6539 90s \u4e3a 10s"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo sed -i '/DefaultTimeoutStopSec/{s/#//;s/=90s/=10s/}' /etc/systemd/system.conf\n")),(0,i.kt)("p",null,"\u8be6\u60c5\u5206\u6790\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/256481066"},"https://zhuanlan.zhihu.com/p/256481066")),(0,i.kt)("h2",{id:"debian"},"Debian"),(0,i.kt)("h3",{id:"python-\u7f3a\u5931"},"python \u7f3a\u5931"),(0,i.kt)("p",null,"\u4f7f\u7528 python3 \u4ee3\u66ff"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt install python-is-python3\n")),(0,i.kt)("h2",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://popcon.debian.org/"},"Debian \u5305\u6d41\u884c\u5ea6\u8c03\u67e5"),"\uff0c\u6570\u636e\u53ef\u4f9b\u53c2\u8003"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"curl https://popcon.debian.org/by_inst | less\n")))))}d.isMDXComponent=!0}}]);