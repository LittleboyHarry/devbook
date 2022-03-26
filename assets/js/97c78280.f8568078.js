"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9167],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),v=a,u=m["".concat(s,".").concat(v)]||m[v]||p[v]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7486:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"\u914d\u7f6e"},s=void 0,l={unversionedId:"dev/vscode/settings",id:"dev/vscode/settings",title:"\u914d\u7f6e",description:"Ctrl + Shift + P \u8f93\u5165 setjs \u53ef\u4ee5\u6253\u5f00\u914d\u7f6e\u9875\u9762",source:"@site/docs/dev/40-vscode/1-settings.md",sourceDirName:"dev/40-vscode",slug:"/dev/vscode/settings",permalink:"/geekbook/docs/dev/vscode/settings",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/40-vscode/1-settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u914d\u7f6e"},sidebar:"dev",previous:{title:"\u5b89\u88c5",permalink:"/geekbook/docs/dev/vscode/install"},next:{title:"\u6269\u5c55",permalink:"/geekbook/docs/dev/vscode/extensions"}},d=[{value:"\u4fee\u6539\u9ed8\u8ba4 Shell",id:"\u4fee\u6539\u9ed8\u8ba4-shell",children:[],level:2},{value:"\u63a8\u8350\u5feb\u6377\u952e",id:"\u63a8\u8350\u5feb\u6377\u952e",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P")," \u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"setjs")," \u53ef\u4ee5\u6253\u5f00\u914d\u7f6e\u9875\u9762"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// \u5173\u95ed\u9065\u6d4b\n"telemetry.telemetryLevel": "off",\n// Ctrl + \u9f20\u6807\u6eda\u8f6e\u7f29\u653e\u5b57\u4f53\n"editor.mouseWheelZoom": true,\n// Git \u4f18\u5316\n"git.rebaseWhenSync": true,\n// \u7ec8\u7aef\u5feb\u6377\u952e\u51b2\u7a81\u7f13\u89e3\n"terminal.integrated.commandsToSkipShell": [\n    "-workbench.action.quickOpen",\n    "-workbench.action.terminal.openNativeConsole"\n],\n// \u81ea\u52a8\u4ee3\u7801\u683c\u5f0f\u5316\n"files.insertFinalNewline": true,\n"files.trimFinalNewlines": true,\n"files.trimTrailingWhitespace": true,\n"editor.formatOnSaveMode": "modificationsIfAvailable",\n"editor.formatOnSave": true,\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5982\u679c\u4f60\u5728 Linux \u4e2d\u4fee\u6539\u8fc7\u952e\u76d8\u6620\u5c04")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'"keyboard.dispatch": "keyCode",\n')))),(0,i.kt)("h2",{id:"\u4fee\u6539\u9ed8\u8ba4-shell"},"\u4fee\u6539\u9ed8\u8ba4 Shell"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P")," \u8f93\u5165\u5173\u952e\u8bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"terspro")," \u9009\u62e9"),(0,i.kt)("h2",{id:"\u63a8\u8350\u5feb\u6377\u952e"},"\u63a8\u8350\u5feb\u6377\u952e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P")," \u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"keysjson")," \u6253\u5f00\u7ec4\u5408\u952e\u53ef\u914d\u7f6e\u9875"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u9009\u62e9\u8bcd\u5757")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4eff JetBrains IDE\uff0c\u7ed1\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + W")," \u952e"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "ctrl+w",\n  "command": "editor.action.smartSelect.expand",\n  "when": "editorTextFocus"\n},\n{\n  "key": "ctrl+shift+w",\n  "command": "editor.action.smartSelect.shrink",\n  "when": "editorTextFocus"\n},\n{\n  "key": "ctrl+f4",\n  "command": "workbench.action.closeActiveEditor"\n}\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u81ea\u52a8\u5e94\u7b54 ","*")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Windows \u73af\u5883\u4e0b\uff0c\u547d\u4ee4\u884c Ctrl + C \u81ea\u52a8\u5e94\u7b54\u3002\n",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/updates/v1_64#_automatic-replies"},"1.64 \u7248\u6216\u4ee5\u4e0a\u53ef\u7528")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"terminal.integrated.autoReplies": {\n    "\u7ec8\u6b62\u6279\u5904\u7406\u64cd\u4f5c\u5417(Y/N)?": "Y\\r"\n},\n')))))}m.isMDXComponent=!0}}]);