/*! For license information please see 6b6710aa.39771f98.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[2641],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";n.d(t,{N:function(){return a},w:function(){return i}});var r=n(7294),o=n(3021);function a(e){var t=e.id;return r.createElement(r.Fragment,null,r.createElement("a",{href:"vscode:extension/"+t},"VSCode"),"\xa0",r.createElement("a",{href:"vscodium:extension/"+t},"VSCodium"))}function i(e){var t=e.id;return r.createElement("p",null,"\u5b89\u88c5\u5230\uff1a",r.createElement(o.Qj,{outline:!0,href:"vscode:extension/"+t,name:"VSCode"}),r.createElement(o.Qj,{outline:!0,href:"vscodium:extension/"+t,name:"VSCodium"}))}},3021:function(e,t,n){"use strict";n.d(t,{Bp:function(){return c},Qj:function(){return d},YI:function(){return l},cA:function(){return p},o6:function(){return s}});var r=n(7462),o=n(7294),a=n(4184),i=n.n(a);function l(e){var t=e.id,n=e.name;return o.createElement(p,{href:u(t)},n)}function c(e){var t=e.id,n=e.name;return o.createElement(d,{name:n,href:u(t)})}function u(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function s(e){var t=e.name,n=e.href,r=e.hint;return o.createElement(d,{name:t,href:n,hint:r,attr:{download:!0}})}function d(e){var t=e.name,n=e.href,a=e.outline,l=e.hint,c=e.attr;return o.createElement("a",(0,r.Z)({href:n,className:i()("button",a?"button--outline button--secondary":" button--lg button--primary"),title:l,style:{cursor:l?"help":"pointer",verticalAlign:"baseline",margin:"0 1rem 1rem 0"}},c),t)}function p(e){var t=e.href,n=e.className,r=e.style,a=e.children;return o.createElement("a",{style:r,className:n,href:t},a)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(1007),l=["components"],c={title:"\u6269\u5c55"},u=void 0,s={unversionedId:"dev/vscode/extensions",id:"dev/vscode/extensions",title:"\u6269\u5c55",description:"\u5fc5\u88c5",source:"@site/docs/dev/40-vscode/3-extensions.md",sourceDirName:"dev/40-vscode",slug:"/dev/vscode/extensions",permalink:"/geekbook/docs/dev/vscode/extensions",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/40-vscode/3-extensions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6269\u5c55"},sidebar:"dev",previous:{title:"\u914d\u7f6e",permalink:"/geekbook/docs/dev/vscode/settings"},next:{title:"Vim \u6a21\u5f0f",permalink:"/geekbook/docs/dev/vscode/vim"}},d=[{value:"\u5fc5\u88c5",id:"\u5fc5\u88c5",children:[],level:2},{value:"\u8865\u5145",id:"\u8865\u5145",children:[],level:2},{value:"\u5546\u4e1a\u670d\u52a1",id:"\u5546\u4e1a\u670d\u52a1",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,a.kt)("inlineCode",{parentName:"h5"},"Ctrl + P")," \u7c98\u8d34\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("h2",{id:"\u5fc5\u88c5"},"\u5fc5\u88c5"),(0,a.kt)("p",null,"\u6269\u5c55\u540d - \u4f5c\u7528\uff0c\u5b89\u88c5\u5230\uff1a"),(0,a.kt)("div",{className:"no-table-header no-table-border"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GitLens"),(0,a.kt)("td",{parentName:"tr",align:null},"Git \u529f\u80fd\u5f3a\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(i.N,{id:"eamodio.gitlens",mdxType:"GetLinks"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Git Graph"),(0,a.kt)("td",{parentName:"tr",align:null},"Git \u6811\u53ef\u89c6\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(i.N,{id:"mhutchie.git-graph",mdxType:"GetLinks"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prettier"),(0,a.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef\u4ee3\u7801\u683c\u5f0f\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(i.N,{id:"esbenp.prettier-vscode",mdxType:"GetLinks"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EditorConfig"),(0,a.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u7edf\u4e00\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(i.N,{id:"EditorConfig.EditorConfig",mdxType:"GetLinks"})))))),(0,a.kt)("h2",{id:"\u8865\u5145"},"\u8865\u5145"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"vscode-icons")," \u66f4\u597d\u770b\u7684\u56fe\u6807\uff1a\u5b89\u88c5\u540e\uff0c\u53f3\u4e0b\u89d2 Active \u6309\u94ae\u6fc0\u6d3b"),(0,a.kt)(i.w,{id:"vscode-icons-team.vscode-icons",mdxType:"GetButtons"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remote Development")," \u8fdc\u7a0b\u5f00\u53d1\uff1a\u652f\u6301 SSH, WSL, container"),(0,a.kt)(i.w,{id:"ms-vscode-remote.vscode-remote-extensionpack",mdxType:"GetButtons"}),(0,a.kt)("h2",{id:"\u5546\u4e1a\u670d\u52a1"},"\u5546\u4e1a\u670d\u52a1"),(0,a.kt)("p",null,"Tabnine \u514d\u8d39 AI \u8865\u5168\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u79bb\u7ebf\u4f7f\u7528\u3001\u53ef\u5173\u95ed\u9065\u6d4b\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u5185\u5b58\u6d88\u8017\u9ad8\u3001\u514d\u8d39\u7248\u4ec5\u4f9b\u5355\u884c\u4f7f\u7528")),(0,a.kt)(i.w,{id:"tabnine.tabnine-vscode",mdxType:"GetButtons"}),(0,a.kt)("p",null,"GitHub Copilot"),(0,a.kt)(i.w,{id:"GitHub.copilot",mdxType:"GetButtons"}))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);