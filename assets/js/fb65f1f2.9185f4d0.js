"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5165],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,v=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},768:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Vim \u6a21\u5f0f"},l=void 0,s={unversionedId:"dev/vscode/vim",id:"dev/vscode/vim",title:"Vim \u6a21\u5f0f",description:"\u914d\u7f6e",source:"@site/docs/dev/40-vscode/4-vim.md",sourceDirName:"dev/40-vscode",slug:"/dev/vscode/vim",permalink:"/geekbook/docs/dev/vscode/vim",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/40-vscode/4-vim.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Vim \u6a21\u5f0f"},sidebar:"dev",previous:{title:"\u6269\u5c55",permalink:"/geekbook/docs/dev/vscode/extensions"},next:{title:"\u9ad8\u7ea7",permalink:"/geekbook/docs/dev/vscode/advanced"}},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u4e34\u65f6\u7981\u7528",id:"\u4e34\u65f6\u7981\u7528",children:[],level:2},{value:"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5",id:"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// \u987e\u540d\u601d\u4e49:\n"vim.startInInsertMode": true,\n"vim.useSystemClipboard": true,\n// \u7ec4\u5408\u952e\u51b2\u7a81\uff1ahttps://github.com/VSCodeVim/Vim/issues/1437\n"vim.handleKeys": {\n  "<C-e>": false,\n  "<C-a>": false,\n  "<C-d>": false,\n  "<C-x>": false,\n  "<C-f>": false,\n  "<C-g>": false,\n  "<C-h>": false,\n  "<C-c>": false,\n  "<C-v>": false,\n  "<C-l>": false,\n  "<C-k>": false\n},\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e neovim \u96c6\u6210")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"vim.enableNeovim": true,\n"vim.neovimPath": "nvim",\n')))),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + P")," \u7c98\u8d34\u6267\u884c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ext install vscodevim.Vim\n")),(0,o.kt)("h2",{id:"\u4e34\u65f6\u7981\u7528"},"\u4e34\u65f6\u7981\u7528"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P")," \u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"vimt")," \u56de\u8f66"),(0,o.kt)("h2",{id:"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5"},"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/daipeihust/im-select"},"https://github.com/daipeihust/im-select")))}m.isMDXComponent=!0}}]);