"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[1389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2782:function(e,t,n){n.d(t,{o6:function(){return p},cA:function(){return d},Qj:function(){return s},Bp:function(){return u},YI:function(){return a}});var r=n(3117),o=n(7294),l=n(6010),i="linkButton_pNme";function a(e){var t=e.id,n=e.name;return o.createElement(d,{href:c(t)},n)}function u(e){var t=e.id,n=e.name;return o.createElement(s,{name:n,href:c(t)})}function c(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function p(e){var t=e.name,n=e.href,r=e.hint;return o.createElement(s,{name:t,href:n,hint:r,attr:{download:!0}})}function s(e){var t=e.name,n=e.href,a=e.outline,u=e.hint,c=e.attr,p=e.small;return o.createElement("a",(0,r.Z)({href:n,className:(0,l.Z)(i,"button",!p&&"button--lg",a?"button--outline button--secondary":"button--primary"),title:u,style:{cursor:u?"help":"pointer",verticalAlign:"baseline"}},c),t)}function d(e){var t=e.href,n=e.className,r=e.style,l=e.children;return o.createElement("a",{style:r,className:n,href:t},l)}},9328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(3117),o=n(102),l=(n(7294),n(3905)),i=n(2782),a=["components"],u={title:"PowerShell"},c=void 0,p={unversionedId:"win/dev/pwsh",id:"win/dev/pwsh",title:"PowerShell",description:"PowerShell \u662f\u6700\u597d\u7684 Windows Shell !!!",source:"@site/docs/win/22-dev/4-pwsh.md",sourceDirName:"win/22-dev",slug:"/win/dev/pwsh",permalink:"/geekbook/docs/win/dev/pwsh",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/4-pwsh.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"PowerShell"},sidebar:"win",previous:{title:"\u4f7f\u7528 Chocolatey",permalink:"/geekbook/docs/win/dev/pkgmgr/choco"},next:{title:"WSL \u5b89\u88c5",permalink:"/geekbook/docs/win/dev/wsl/install"}},s={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Git \u96c6\u6210\u652f\u6301",id:"git-\u96c6\u6210\u652f\u6301",level:3},{value:"Tab \u952e\u8865\u5168\u83dc\u5355",id:"tab-\u952e\u8865\u5168\u83dc\u5355",level:3},{value:"zoxide",id:"zoxide",level:3},{value:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4",id:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PowerShell \u662f\u6700\u597d\u7684 Windows Shell !!!")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u7cfb\u7edf\u5185\u7f6e\u7684\u7b2c 5 \u7248\u5df2\u4e0d\u518d\u66f4\u65b0\uff0c\u63a8\u8350\u4f7f\u7528 PowerShell7\uff1a\u5176\u56fe\u6807\u8272\u5f69\u7531\u84dd\u53d8\u9ed1\uff09"),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e00\uff1a\u767b\u5f55\u5546\u5e97\u5b89\u88c5\uff0c\u652f\u6301\u81ea\u52a8\u66f4\u65b0"),(0,l.kt)(i.Bp,{id:"9MZ1SNWT0N5D",name:"\u4ece\u5e94\u7528\u5546\u5e97\u5b89\u88c5",mdxType:"MstoreButton"}),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e8c\uff1a\u4ece GitHub \u4e0b\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"winget install Microsoft.PowerShell\n")),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e09\uff1a\u4ece\n",(0,l.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/github-release/PowerShell/PowerShell/LatestRelease/#:~:text=win%2Dx64.msi"},"\u6e05\u534e\u955c\u50cf\u7ad9"),"\n\u4e0b\u8f7d"),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir ~\\Documents\\PowerShell\nnotepad $PROFILE\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# Emacs \u6a21\u5f0f\nSet-PSReadLineOption -EditMode Emacs\n# \u5386\u53f2\u9884\u6d4b\uff0c\u53ef\u6309\u4e0b Ctrl + F \u8865\u5168\nSet-PSReadLineOption -PredictionSource History\n\n")),(0,l.kt)("h3",{id:"git-\u96c6\u6210\u652f\u6301"},"Git \u96c6\u6210\u652f\u6301"),(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"posh-git")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Install-Module posh-git -AllowClobber\n# \u63a8\u8350\u624b\u52a8\u6216\u914d\u7f6e\u61d2\u52a0\u8f7d\uff0c\u907f\u514d\u62d6\u6162\u542f\u52a8\u65f6\u95f4\uff1a\necho "\nif ( Test-Path -Path .git -PathType Container ) {\n    Import-Module posh-git\n}\n" >> $profile\n\n')),(0,l.kt)("h3",{id:"tab-\u952e\u8865\u5168\u83dc\u5355"},"Tab \u952e\u8865\u5168\u83dc\u5355"),(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"GuiCompletion")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nightroman/PS-GuiCompletion"},"\u9879\u76ee"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module GuiCompletion\necho 'Install-GuiCompletion -Key Tab' >> $profile\n\n")),(0,l.kt)("h3",{id:"zoxide"},"zoxide"),(0,l.kt)("p",null,"\u8bb0\u5f55\u5207\u6362\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c",(0,l.kt)("a",{href:"/docs/dev/modern-cli/zoxide",target:"_blank"},"\u53c2\u89c1")),(0,l.kt)("h2",{id:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4"},"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"r")," \u91cd\u590d\u4e0a\u4e00\u6761\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"h")," \u5386\u53f2\u8bb0\u5f55\uff08\u5f53\u524d\u4f1a\u8bdd\uff09")))}f.isMDXComponent=!0}}]);