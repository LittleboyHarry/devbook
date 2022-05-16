"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[592],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7019:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),o=n(6010),i="card_sxua",a="cardTitle_cV0_",c="logoSlot_lQRb",l=n(9960);function m(e){var t=e.name,n=e.to,m=e.logo,s=e.label,u=e.noNewTab,d=e.onClick;return r.createElement(l.Z,{className:(0,o.Z)("card",i),href:n||"#",title:s,style:{cursor:s?"help":"pointer"},target:u?"_self":"_blank",onClick:d},r.createElement("div",{className:c},m),r.createElement("p",{className:a,style:{textAlign:"center",marginBottom:"0.5rem"}},t))}m.Container=function(e){var t=e.children;return r.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t)}},766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return E}});var r=n(3117),o=n(102),i=n(7294),a=n(3905),c=n(7019),l=n(2814),m=n(1436),s=n(4996);function u(){return i.createElement(i.Fragment,null,i.createElement(c.Z.Container,null,i.createElement(c.Z,{name:"Zsh",to:"zsh",logo:i.createElement(l.G,{icon:m.Jw3,style:{width:"75%"}})}),i.createElement(c.Z,{name:"Git",to:"git",logo:i.createElement("img",{src:(0,s.Z)("/img/icons/git.svg")})}),i.createElement(c.Z,{name:"\u5b57\u4f53",to:"font",logo:i.createElement(l.G,{icon:m.BCn,style:{translate:"scale(2)"}})})),i.createElement(c.Z.Container,null,i.createElement(c.Z,{name:i.createElement("span",{style:{fontSize:"1.125rem"}},"deploy-my-dotfiles"),to:"deploy-my-dotfiles",logo:i.createElement(l.G,{icon:m.HJK,style:{width:"75%"}})}),i.createElement(c.Z,{name:"\u6469\u767b\u547d\u4ee4\u884c",to:"/docs/devenv/modern-cli/index",logo:i.createElement(l.G,{icon:m.eDR})})))}function d(){return i.createElement(c.Z.Container,null,i.createElement(c.Z,{name:"Neovim",to:"neovim",logo:i.createElement("img",{src:(0,s.Z)("/img/icons/neovim.svg"),width:"90%"})}),i.createElement(c.Z,{name:"VSCode",to:"vscode/download",logo:i.createElement("img",{src:(0,s.Z)("/img/icons/vscode.svg")})}),i.createElement(c.Z,{name:"JetBrains IDE",to:"jetbrains/toolbox",logo:i.createElement("img",{src:(0,s.Z)("/img/icons/intellij.svg")})}))}function p(){return i.createElement(c.Z.Container,null,i.createElement(c.Z,{name:"Node.js",to:"nodejs",logo:i.createElement("img",{src:(0,s.Z)("/img/icons/nodejs.svg")})}))}var f=["components"],v={title:"\u76ee\u5f55"},g=void 0,y={unversionedId:"devenv/intro",id:"devenv/intro",title:"\u76ee\u5f55",description:"\u7f16\u8f91\u5668",source:"@site/docs/devenv/0-intro.md",sourceDirName:"devenv",slug:"/devenv/intro",permalink:"/devbook/docs/devenv/intro",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/devenv/0-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u76ee\u5f55"},sidebar:"dev",next:{title:"\u952e\u4f4d\u8c03\u6574",permalink:"/devbook/docs/devenv/keymap"}},b={},E=[{value:"\u7f16\u8f91\u5668",id:"\u7f16\u8f91\u5668",level:2},{value:"\u5f00\u53d1\u73af\u5883",id:"\u5f00\u53d1\u73af\u5883",level:2}],O={toc:E};function h(e){var t=e.components,n=(0,o.Z)(e,f);return(0,a.kt)("wrapper",(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{mdxType:"TopGrid"}),(0,a.kt)("h2",{id:"\u7f16\u8f91\u5668"},"\u7f16\u8f91\u5668"),(0,a.kt)(d,{mdxType:"EditorGrid"}),(0,a.kt)("h2",{id:"\u5f00\u53d1\u73af\u5883"},"\u5f00\u53d1\u73af\u5883"),(0,a.kt)(p,{mdxType:"DevEnvGrid"}))}h.isMDXComponent=!0}}]);