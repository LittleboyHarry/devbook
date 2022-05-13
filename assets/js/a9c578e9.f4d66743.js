"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8815],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2782:function(e,t,n){n.d(t,{cA:function(){return f},Qj:function(){return d},Bp:function(){return m},YI:function(){return u}});var r=n(3117),a=n(7294),o=n(2814),i=n(1436),l=n(6010),c="linkButton_pNme",s="icon_TF3d";function u(e){var t=e.id,n=e.name;return a.createElement(f,{href:p(t)},a.createElement(o.G,{icon:i.Cdv}),"\xa0",n)}function m(e){var t=e.id,n=e.name;return a.createElement(d,{name:a.createElement(a.Fragment,null,a.createElement(o.G,{icon:i.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),n),href:p(t)})}function p(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function d(e){var t=e.name,n=e.href,u=e.outline,m=e.hint,p=e.attr,d=e.style,f=e.small,v=e.icon;return!0===v&&(v=a.createElement(o.G,{icon:i.g4A})),a.createElement("a",(0,r.Z)({href:n,className:(0,l.Z)(c,"button",!f&&"button--lg",u?"button--outline button--secondary":"button--primary"),title:m},p,{style:Object.assign({cursor:m?"help":"pointer",verticalAlign:"baseline"},d)}),v&&a.createElement("span",{className:s},v),t)}function f(e){var t=e.href,n=e.className,r=e.style,o=e.children;return a.createElement("a",{style:r,className:n,href:t},o)}},3529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(2782),l=["components"],c={title:"WSL \u5b89\u88c5"},s=void 0,u={unversionedId:"win/dev/wsl/install",id:"win/dev/wsl/install",title:"WSL \u5b89\u88c5",description:"1.  \u6dfb\u52a0 Linux \u5185\u6838\u865a\u62df\u5316\u7ec4\u4ef6\uff1a\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650",source:"@site/docs/win/22-dev/15-wsl/1-install.md",sourceDirName:"win/22-dev/15-wsl",slug:"/win/dev/wsl/install",permalink:"/geekbook/docs/win/dev/wsl/install",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/15-wsl/1-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"WSL \u5b89\u88c5"},sidebar:"win",previous:{title:"Windows \u63a8\u8350\u8f6f\u4ef6",permalink:"/geekbook/docs/win/dev/recommend"},next:{title:"Debian for WSL",permalink:"/geekbook/docs/win/dev/wsl/debian"}},m={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0 Linux \u5185\u6838\u865a\u62df\u5316\u7ec4\u4ef6\uff1a\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\ndism /online /enable-feature /featurename:VirtualMachinePlatform /all\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u91cd\u542f\u540e\u5b89\u88c5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"wsl --install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{href:"https://aka.ms/wslstore"},"\u70b9\u6211\u6311\u9009\u53d1\u884c\u7248"),"\uff0c\u7b14\u8005\u6700\u559c\u6b22 ",(0,o.kt)(i.YI,{id:"9MSVKQC78PK6",name:"Debian",mdxType:"MstoreLink"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u81ea\u52a8\u66f4\u65b0")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,(0,o.kt)(i.cA,{href:"ms-settings:windowsupdate-options",mdxType:"HtmlA"},"\u8bbe\u7f6e\u66f4\u65b0"),"\uff0c \u542f\u52a8\u201c\u63a5\u6536\u5176\u5b83 Microsoft \u4ea7\u54c1\u7684\u66f4\u65b0\u201d\u3002"))))}f.isMDXComponent=!0}}]);