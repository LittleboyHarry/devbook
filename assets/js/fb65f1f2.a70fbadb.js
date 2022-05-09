"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5165],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,v=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(v,o(o({ref:t},m),{},{components:n})):r.createElement(v,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},962:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(2782);function i(e){var t=e.id,n=e.msOnly,i=e.small,o=e.noTitle;return r.createElement(r.Fragment,null,!o&&r.createElement("span",{style:{margin:"0 1rem"}},n?"\u4ec5\u4f9b\u4e8e":"\u5b89\u88c5\u5230"),r.createElement("span",{style:{display:"inline-block"}},r.createElement(a.Qj,{outline:!0,href:"vscode:extension/"+t,name:"VSCode",small:i,style:{marginTop:"2px"}}),!n&&r.createElement(a.Qj,{outline:!0,href:"vscodium:extension/"+t,name:"VSCodium",small:i,style:{marginTop:"2px"}})),r.createElement("a",{style:{marginRight:"1rem",display:"inline-block"},href:"https://marketplace.visualstudio.com/items?itemName="+t},"(\u63d2\u4ef6\u8be6\u60c5)"))}},2782:function(e,t,n){n.d(t,{cA:function(){return v},Qj:function(){return p},Bp:function(){return u},YI:function(){return m}});var r=n(3117),a=n(7294),i=n(2814),o=n(1436),l=n(6010),c="linkButton_pNme",s="icon_TF3d";function m(e){var t=e.id,n=e.name;return a.createElement(v,{href:d(t)},a.createElement(i.G,{icon:o.Cdv}),"\xa0",n)}function u(e){var t=e.id,n=e.name;return a.createElement(p,{name:a.createElement(a.Fragment,null,a.createElement(i.G,{icon:o.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),n),href:d(t)})}function d(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function p(e){var t=e.name,n=e.href,i=e.outline,o=e.hint,m=e.attr,u=e.style,d=e.small,p=e.icon;return a.createElement("a",(0,r.Z)({href:n,className:(0,l.Z)(c,"button",!d&&"button--lg",i?"button--outline button--secondary":"button--primary"),title:o},m,{style:Object.assign({cursor:o?"help":"pointer",verticalAlign:"baseline"},u)}),p&&a.createElement("span",{className:s},p),t)}function v(e){var t=e.href,n=e.className,r=e.style,i=e.children;return a.createElement("a",{style:r,className:n,href:t},i)}},768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=(n(2782),n(962)),l=["components"],c={title:"VSC vim \u6a21\u5f0f"},s=void 0,m={unversionedId:"dev/vscode/vim",id:"dev/vscode/vim",title:"VSC vim \u6a21\u5f0f",description:"\u914d\u7f6e",source:"@site/docs/dev/40-vscode/4-vim.md",sourceDirName:"dev/40-vscode",slug:"/dev/vscode/vim",permalink:"/geekbook/docs/dev/vscode/vim",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/40-vscode/4-vim.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"VSC vim \u6a21\u5f0f"},sidebar:"dev",previous:{title:"VSC \u6269\u5c55",permalink:"/geekbook/docs/dev/vscode/extensions"},next:{title:"JBS \u5b89\u88c5\u5668",permalink:"/geekbook/docs/dev/jetbrains/toolbox"}},u={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4e34\u65f6\u7981\u7528\u7684\u65b9\u6cd5",id:"\u4e34\u65f6\u7981\u7528\u7684\u65b9\u6cd5",level:2},{value:"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5",id:"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5",level:2}],p={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"vim.startInInsertMode": true,\n"vim.useSystemClipboard": true,\n// \u7ec4\u5408\u952e\u51b2\u7a81\uff1ahttps://github.com/VSCodeVim/Vim/issues/1437\n"vim.handleKeys": {\n  "<C-e>": false,\n  "<C-a>": false,\n  "<C-d>": false,\n  "<C-x>": false,\n  "<C-f>": false,\n  "<C-g>": false,\n  "<C-h>": false,\n  "<C-c>": false,\n  "<C-v>": false,\n  "<C-l>": false,\n  "<C-k>": false\n},\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e neovim \u96c6\u6210")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"vim.enableNeovim": true,\n"vim.neovimPath": "nvim",\n')))),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)(o.Z,{id:"vscodevim.Vim",noTitle:!0,mdxType:"GetVscExt"}),(0,i.kt)("h2",{id:"\u4e34\u65f6\u7981\u7528\u7684\u65b9\u6cd5"},"\u4e34\u65f6\u7981\u7528\u7684\u65b9\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P")," \u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"vimt")," \u56de\u8f66"),(0,i.kt)("h2",{id:"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5"},"\u666e\u901a\u6a21\u5f0f\u5185\u81ea\u52a8\u5207\u6362\u8f93\u5165\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/daipeihust/im-select"},"https://github.com/daipeihust/im-select")))}v.isMDXComponent=!0}}]);