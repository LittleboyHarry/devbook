"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8815],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2782:function(e,t,n){n.d(t,{cA:function(){return f},Qj:function(){return d},Bp:function(){return m},YI:function(){return p}});var r=n(3117),a=n(7294),i=n(2814),o=n(1436),l=n(6010),c="linkButton_pNme",s="icon_TF3d";function p(e){var t=e.id,n=e.name;return a.createElement(f,{href:u(t)},a.createElement(i.G,{icon:o.Cdv}),"\xa0",n)}function m(e){var t=e.id,n=e.name;return a.createElement(d,{name:a.createElement(a.Fragment,null,a.createElement(i.G,{icon:o.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),n),href:u(t)})}function u(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function d(e){var t=e.name,n=e.href,i=e.outline,o=e.hint,p=e.attr,m=e.style,u=e.small,d=e.icon;return a.createElement("a",(0,r.Z)({href:n,className:(0,l.Z)(c,"button",!u&&"button--lg",i?"button--outline button--secondary":"button--primary"),title:o},p,{style:Object.assign({cursor:o?"help":"pointer",verticalAlign:"baseline"},m)}),d&&a.createElement("span",{className:s},d),t)}function f(e){var t=e.href,n=e.className,r=e.style,i=e.children;return a.createElement("a",{style:r,className:n,href:t},i)}},3529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(2782),l=["components"],c={title:"WSL \u5b89\u88c5"},s=void 0,p={unversionedId:"win/dev/wsl/install",id:"win/dev/wsl/install",title:"WSL \u5b89\u88c5",description:"1.  \u6dfb\u52a0 Linux \u5185\u6838\u865a\u62df\u5316\u7ec4\u4ef6\uff1a\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650",source:"@site/docs/win/22-dev/15-wsl/1-install.md",sourceDirName:"win/22-dev/15-wsl",slug:"/win/dev/wsl/install",permalink:"/geekbook/docs/win/dev/wsl/install",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/15-wsl/1-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"WSL \u5b89\u88c5"},sidebar:"win",previous:{title:"Windows \u63a8\u8350\u8f6f\u4ef6",permalink:"/geekbook/docs/win/dev/recommend"},next:{title:"WSL \u4f7f\u7528\u6280\u5de7",permalink:"/geekbook/docs/win/dev/wsl/recommend"}},m={},u=[{value:"Debian",id:"debian",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0 Linux \u5185\u6838\u865a\u62df\u5316\u7ec4\u4ef6\uff1a\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\ndism /online /enable-feature /featurename:VirtualMachinePlatform /all\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u91cd\u542f\u540e\uff0c\u66f4\u65b0\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"wsl --update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",null,"\u63a8\u8350\u5f00\u53d1\u8005\u4f7f\u7528\xa0",(0,i.kt)(o.YI,{id:"9MSVKQC78PK6",name:"Debian",mdxType:"MstoreLink"})," \u548c\xa0",(0,i.kt)(o.YI,{id:"9PDXGNCFSCZV",name:"Ubuntu",mdxType:"MstoreLink"}),"\u3002 \u6216",(0,i.kt)("a",{href:"https://aka.ms/wslstore"},"\u6311\u9009\u5176\u4ed6\u53d1\u884c\u7248")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u81ea\u52a8\u66f4\u65b0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",null,(0,i.kt)(o.cA,{href:"ms-settings:windowsupdate-options",mdxType:"HtmlA"},"\u8bbe\u7f6e\u66f4\u65b0"),"\uff0c \u542f\u52a8\u201c\u63a5\u6536\u5176\u5b83 Microsoft \u4ea7\u54c1\u7684\u66f4\u65b0\u201d\u3002"))),(0,i.kt)("h3",{id:"debian"},"Debian"),(0,i.kt)("p",null,"\u542f\u52a8 Debian\uff0c\u521d\u59cb\u5316\u7528\u6237\u540d\u5bc6\u7801"),(0,i.kt)("p",null,"\u968f\u540e",(0,i.kt)("a",{parentName:"p",href:"/docs/linux/mustdo/mirror-update#Debian"},"\u914d\u7f6e\u955c\u50cf\u6e90\u5e76\u66f4\u65b0")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f7f\u7528 HTTPS \u534f\u8bae\u7684\u955c\u50cf\u6e90")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Debian WSL \u7f3a\u5c11\u9700\u8981\u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5\u7684\n",(0,i.kt)("a",{parentName:"p",href:"https://packages.debian.org/search?keywords=ca-certificates&exact=1"},"\u53ef\u4fe1\u8bc1\u4e66"),"\n\u53ca ",(0,i.kt)("a",{parentName:"p",href:"https://packages.debian.org/search?keywords=openssl&exact=1"},"openssl")," \u4f9d\u8d56"))))}f.isMDXComponent=!0}}]);