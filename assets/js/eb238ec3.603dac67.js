"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8727],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},602:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],c={},a=void 0,u={unversionedId:"dev/create-my-dotfiles",id:"dev/create-my-dotfiles",title:"create-my-dotfiles",description:"\u7531\u7b14\u8005\u521b\u4f5c\u7684\u7efc\u5408\u8c03\u4f18\u7684\u65b9\u6848\uff0c\u6db5\u76d6 ohmyzsh \u63d2\u4ef6\u7b49\u5176\u4ed6\u8c03\u4f18\u7684\u89e3\u51b3\u65b9\u6848",source:"@site/docs/dev/6-create-my-dotfiles.md",sourceDirName:"dev",slug:"/dev/create-my-dotfiles",permalink:"/geekbook/docs/dev/create-my-dotfiles",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/6-create-my-dotfiles.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"dev",previous:{title:"ZSH",permalink:"/geekbook/docs/dev/zsh"},next:{title:"bat",permalink:"/geekbook/docs/dev/cli/bat"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u7279\u4f9b\u7248\u5b89\u88c5",id:"\u7279\u4f9b\u7248\u5b89\u88c5",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=littleboyharry&repo=create-my-dotfiles&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"180",height:"32",title:"GitHub",style:{float:"right"}}),(0,i.kt)("p",null,"\u7531\u7b14\u8005\u521b\u4f5c\u7684\u7efc\u5408\u8c03\u4f18\u7684\u65b9\u6848\uff0c\u6db5\u76d6 ohmyzsh \u63d2\u4ef6\u7b49\u5176\u4ed6\u8c03\u4f18\u7684\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u4f9d\u8d56\uff1apython3"),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone https://github.com/LittleboyHarry/create-my-dotfiles\ncd create-my-dotfiles\n")),(0,i.kt)("p",null,"\u5b89\u88c5 zsh \u6a21\u5757\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./deploy modules/zsh/\nexec zsh\n")),(0,i.kt)("h2",{id:"\u7279\u4f9b\u7248\u5b89\u88c5"},"\u7279\u4f9b\u7248\u5b89\u88c5"),(0,i.kt)("p",null,"\u4ece gitee \u955c\u50cf\u514b\u9686\uff0c\u5185\u5bb9\u65e0\u5dee\u5f02\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone https://gitee.com/LittleboyHarry/create-my-dotfiles\ncd create-my-dotfiles\n\n# \u7279\u4f9b\u7248\u53c2\u6570\uff1a\n./deploy modules/zsh/ atmainland\n\nexec zsh\n")))}d.isMDXComponent=!0}}]);