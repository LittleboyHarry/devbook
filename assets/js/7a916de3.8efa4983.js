"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[2749],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,v=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3883:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(2814),i=n(1436),o="button_B4O8",s="icon_sAIS",l="card_Uz0K",d="name_vG00",m=n(6010),c=n(4996);function p(e){var t=e.name,n=e.path,p=e.icon,u=e.hint,k=e.button,f=(0,c.Z)(n),w=(u?u+"\uff0c":"")+"\u70b9\u51fb\u6216\u62d6\u62fd\u4e0b\u8f7d\u6587\u4ef6";return a.createElement("a",{download:!0,href:f,className:(0,m.Z)(k?o:l,k?"button button--lg button--outline button--secondary":"card"),title:w,onDragStartCapture:function(e){if(e.target instanceof HTMLAnchorElement){var t=v(e.target.getAttribute("href"));e.dataTransfer.setData("DownloadURL",":"+function(e,t){var n=e.getAttribute("download");if(n)return n;var a=e.textContent.trim().replace(/\:/g,"");if(a&&h.test(a))return a;var r=i(t.pathname.split("/"));if(r&&h.test(r))return decodeURI(r);return decodeURI(r)||a;function i(e){return e[e.length-1]}}(e.target,t)+":"+t.href)}}},a.createElement("span",{className:s},p||a.createElement(r.G,{icon:i.gMD})),a.createElement("span",{className:d},t))}var u,v=function(e){return u||(u=document.createElement("a")),u.href=e,new URL(u.href)},h=/\.[\w-]+$/},2782:function(e,t,n){n.d(t,{cA:function(){return v},Qj:function(){return u},Bp:function(){return c},YI:function(){return m}});var a=n(3117),r=n(7294),i=n(2814),o=n(1436),s=n(6010),l="linkButton_pNme",d="icon_TF3d";function m(e){var t=e.id,n=e.name;return r.createElement(v,{href:p(t)},r.createElement(i.G,{icon:o.Cdv}),"\xa0",n)}function c(e){var t=e.id,n=e.name;return r.createElement(u,{name:r.createElement(r.Fragment,null,r.createElement(i.G,{icon:o.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),n),href:p(t)})}function p(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function u(e){var t=e.name,n=e.href,m=e.outline,c=e.hint,p=e.attr,u=e.style,v=e.small,h=e.icon;return!0===h&&(h=r.createElement(i.G,{icon:o.g4A})),r.createElement("a",(0,a.Z)({href:n,className:(0,s.Z)(l,"button",!v&&"button--lg",m?"button--outline button--secondary":"button--primary"),title:c},p,{style:Object.assign({cursor:c?"help":"pointer",verticalAlign:"baseline"},u)}),h&&r.createElement("span",{className:d},h),t)}function v(e){var t=e.href,n=e.className,a=e.style,i=e.children;return r.createElement("a",{style:a,className:n,href:t},i)}},5297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(1436),s=n(2782),l=n(3883),d=n(2814),m=["components"],c={title:"Windows \u5f00\u53d1\u5fc5\u505a"},p=void 0,u={unversionedId:"setup-mswin/dev/mustdo",id:"setup-mswin/dev/mustdo",title:"Windows \u5f00\u53d1\u5fc5\u505a",description:"\u4e3a\u5f00\u53d1\u7528\u9014\u9002\u914d Windows",source:"@site/docs/setup-mswin/22-dev/3-mustdo.md",sourceDirName:"setup-mswin/22-dev",slug:"/setup-mswin/dev/mustdo",permalink:"/devbook/docs/setup-mswin/dev/mustdo",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/setup-mswin/22-dev/3-mustdo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Windows \u5f00\u53d1\u5fc5\u505a"},sidebar:"setupWindows",previous:{title:"PowerShell",permalink:"/devbook/docs/setup-mswin/dev/pwsh"},next:{title:"Windows \u63a8\u8350\u8f6f\u4ef6",permalink:"/devbook/docs/setup-mswin/dev/recommend"}},v={},h=[{value:"\u526a\u8d34\u677f\u6536\u96c6\u5668",id:"\u526a\u8d34\u677f\u6536\u96c6\u5668",level:2},{value:"\u5feb\u6377\u952e\u51b2\u7a81",id:"\u5feb\u6377\u952e\u51b2\u7a81",level:2},{value:"\u7f51\u7edc\u95ee\u9898",id:"\u7f51\u7edc\u95ee\u9898",level:2},{value:"Windows Terminal",id:"windows-terminal",level:2},{value:"Git For Windows",id:"git-for-windows",level:2},{value:"\u5f00\u53d1\u795e\u5668",id:"\u5f00\u53d1\u795e\u5668",level:2},{value:"VSCode",id:"vscode",level:3},{value:"Visual Studio",id:"visual-studio",level:3},{value:"\u5b57\u4f53",id:"\u5b57\u4f53",level:2},{value:"\u865a\u62df\u673a",id:"\u865a\u62df\u673a",level:2}],k={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e3a\u5f00\u53d1\u7528\u9014\u9002\u914d Windows"),(0,i.kt)("h2",{id:"\u526a\u8d34\u677f\u6536\u96c6\u5668"},"\u526a\u8d34\u677f\u6536\u96c6\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Win + V")," \u542f\u52a8\u526a\u8d34\u677f\u5386\u53f2\u8bb0\u5f55"),(0,i.kt)("h2",{id:"\u5feb\u6377\u952e\u51b2\u7a81"},"\u5feb\u6377\u952e\u51b2\u7a81"),(0,i.kt)("p",null,"\u4ee5\u9ed8\u8ba4\u7684\u5fae\u8f6f\u62fc\u97f3\u8f93\u5165\u6cd5\u4e3a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'# \u89e3\u9664 Ctrl+Shift+F \u7b80\u7e41\u5207\u6362\u952e\u7684\u5360\u7528\nreg add HKCU\\Software\\Microsoft\\InputMethod\\Settings\\CHS /v EnableSimplifiedTraditionalOutputSwitch /t REG_DWORD /d "0" /f\n\n# \u89e3\u9664 Ctrl+Space \u4e2d\u82f1\u5207\u6362\u952e\u7684\u5360\u7528\nreg add HKCU\\Software\\Microsoft\\InputMethod\\Settings\\CHS /v "English Switch Key" /t REG_DWORD /d "4" /f\n\n# \u89e3\u9664 Ctrl+. \u6807\u70b9\u5207\u6362\u952e\u7684\u5360\u7528\nreg add HKCU\\Software\\Microsoft\\InputMethod\\Settings\\CHS /v EnableChineseEnglishPunctuationSwitch /t REG_DWORD /d "0" /f\n\n')),(0,i.kt)("p",null,"\u81ea\u884c\u89e3\u9664\u5176\u4ed6\u8f93\u5165\u6cd5\u7684\u5feb\u6377\u952e\u5360\u7528\uff0c\u5982\u679c\u8fd8\u6709\u7684\u8bdd\u3002"),(0,i.kt)("p",null,"\u7cfb\u7edf\u6346\u7ed1\u8f6f\u4ef6\uff0c\u4e5f\u53ef\u80fd\u7ed1\u5b9a\u4e86\u4e00\u4e9b\u5f15\u8d77\u51b2\u7a81\u7684\u5feb\u6377\u952e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nvidia/AMD \u663e\u5361\u8bbe\u7f6e\u7a0b\u5e8f"),(0,i.kt)("li",{parentName:"ul"},"\u5404\u79cd\u571f\u4ea7\u8f6f\u4ef6")),(0,i.kt)("h2",{id:"\u7f51\u7edc\u95ee\u9898"},"\u7f51\u7edc\u95ee\u9898"),(0,i.kt)("p",null,"\u89e3\u51b3\u5fae\u8f6f\u5546\u5e97\u4e0b\u8f7d\u56f0\u96be\u7684\u65b9\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e 114 \u6297\u5e72\u6270 DNS")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(s.cA,{href:"ms-settings:delivery-optimization",mdxType:"HtmlA"},"\u5f00\u542f\u201c\u4f20\u9012\u4f18\u5316\u201d")," \u63d0\u9ad8\u4e0b\u8f7d\u901f\u5ea6"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7ba1\u7406\u5458\u8fd0\u884c\uff1a\u4f7f\u5fae\u8f6f\u5546\u5e97\u652f\u6301\u5168\u5c40\u4ee3\u7406"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'CheckNetIsolation LoopbackExempt -a -n="Microsoft.WindowsStore_8wekyb3d8bbwe"\n')))),(0,i.kt)("h2",{id:"windows-terminal"},"Windows Terminal"),(0,i.kt)("p",null,"\u5b89\u88c5\u6216\u68c0\u67e5\u66f4\u65b0\uff1a",(0,i.kt)(s.Bp,{id:"9N0DX20HK701",name:"Get",mdxType:"MstoreButton"})),(0,i.kt)("h2",{id:"git-for-windows"},"Git For Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/git-for-windows/git/releases/latest#:~:text=64%2Dbit.exe"},"GitHub \u5b98\u65b9\u6e90"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u963f\u91cc\u955c\u50cf\u7ad9\u4e0b\u8f7d\u5230\u684c\u9762\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$g4w_metainfo = (Invoke-WebRequest https://registry.npmmirror.com/-/binary/git-for-windows/).Content | ConvertFrom-Json\n$g4w_latest_info = (Invoke-WebRequest ($g4w_metainfo | Where-Object name -NotMatch \'rc|pre\' | Sort-Object -p name -b 1).url).Content | ConvertFrom-Json\n$g4w_latest_binary = ($g4w_latest_info | Where-Object { $_.name -match "64-bit.exe" }).url\niwr -o "$([Environment]::GetFolderPath("Desktop"))\\install-git.exe" $g4w_latest_binary\n\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u81ea\u52a8\u5b89\u88c5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4f5c\u8005\u7f16\u5199\u7684\u81ea\u52a8\u5b89\u88c5\u811a\u672c\uff0c\n\u653e\u5230\u540c\u5b89\u88c5\u5668\u76ee\u5f55\u4e0b\uff1a"),(0,i.kt)(l.Z,{button:!0,name:"install-git.ini",path:"/scripts/install-git.ini",icon:(0,i.kt)(d.G,{icon:o.nfZ,mdxType:"FontAwesomeIcon"}),mdxType:"FileItem"}),(0,i.kt)(l.Z,{button:!0,name:"install-git.bat",path:"/scripts/install-git.bat",icon:(0,i.kt)(d.G,{icon:o.Obi,mdxType:"FontAwesomeIcon"}),mdxType:"FileItem"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u914d\u7f6e SSH \u5bc6\u94a5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53c2\u8003",(0,i.kt)("a",{href:"/docs/devenv/git",target:"_blank"},"\u5176\u5b83\u7ae0\u8282")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u80fd\u957f\u671f\u8bb0\u4f4f\u53e3\u4ee4\u7684 ",(0,i.kt)("inlineCode",{parentName:"h5"},"ssh-agent")," \u670d\u52a1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u63d0\u6743\u8fd0\u884c\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Service ssh-agent | Set-Service -StartupType Automatic\nStart-Service ssh-agent\n\nssh-add\n\ngit config --global core.sshCommand C:/Windows/System32/OpenSSH/ssh.exe\n\n")),(0,i.kt)("p",{parentName:"div"},"\u8be6\u89c1\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_keymanagement#user-key-generation"},"https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_keymanagement#user-key-generation")))),(0,i.kt)("h2",{id:"\u5f00\u53d1\u795e\u5668"},"\u5f00\u53d1\u795e\u5668"),(0,i.kt)("h3",{id:"vscode"},"VSCode"),(0,i.kt)(l.Z,{name:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u5305",path:"https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",button:!0,icon:(0,i.kt)(d.G,{icon:o.hVM,mdxType:"FontAwesomeIcon"}),mdxType:"FileItem"}),(0,i.kt)("p",null,"\u6216\u4ece\u56fd\u5185 CDN \u4e0b\u8f7d VSCode \u5b89\u88c5\u5305\u5230\u684c\u9762\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'iwr "https://vscode.cdn.azure.cn$((iwr "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" -method head).BaseResponse.RequestMessage.RequestUri.AbsolutePath)" -o "$([Environment]::GetFolderPath("Desktop"))\\install-vscode.exe"\n')),(0,i.kt)("h3",{id:"visual-studio"},"Visual Studio"),(0,i.kt)(s.Bp,{id:"XPDCFJDKLZJLP8",name:"\u5728\u7ebf\u5b89\u88c5\u5668",mdxType:"MstoreButton"}),(0,i.kt)("h2",{id:"\u5b57\u4f53"},(0,i.kt)("a",{parentName:"h2",href:"/docs/devenv/font"},"\u5b57\u4f53")),(0,i.kt)("p",null,"\u4fee\u590d\u201c\u7ba1\u7406\u63a7\u5236\u53f0\u201d\u6a21\u7cca\u95ee\u9898\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers" /v C:\\Windows\\System32\\mmc.exe /t REG_SZ /d "~ HIGHDPIAWARE" /f\n')),(0,i.kt)("h2",{id:"\u865a\u62df\u673a"},"\u865a\u62df\u673a"),(0,i.kt)("p",null,"VirtualBox \u662f\u81ea\u7531\u7684\u865a\u62df\u673a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"winget install virtualbox -i\n")),(0,i.kt)(l.Z,{name:"\u5b89\u88c5\u5305 ( by TUNA )",path:"https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-Win-latest.exe",button:!0,icon:(0,i.kt)(d.G,{icon:o.bpC,mdxType:"FontAwesomeIcon"}),mdxType:"FileItem"}),"or \xa0",(0,i.kt)(s.cA,{href:"https://mirrorz.org/list/virtualbox",mdxType:"HtmlA"},"\u5176\u4ed6\u955c\u50cf\u7ad9"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u81ea\u52a8\u5316\u7ba1\u7406 vbox")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6dfb\u52a0\u7ba1\u7406\u7a0b\u5e8f ",(0,i.kt)("inlineCode",{parentName:"p"},"VBoxManage.exe")," \u5230 PATH \u4e2d\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'shim "C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe"\n# require: scoop install shim\n')))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5546\u7528\u865a\u62df\u673a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7cfb\u7edf\u4e13\u4e1a\u7248\u652f\u6301\u7684 Hyper-V :"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V\n")),(0,i.kt)("p",{parentName:"div"},"VMware Workstation Pro :"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"winget install --id=VMware.WorkstationPro  -e\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5efa\u8bae")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Linux \u7cfb\u7edf\u5185\u6709 libvrit-qemu-KVM \u66f4\u597d\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/setup-linux/recommend/libvirt"},"\u865a\u62df\u5316\u5f00\u6e90\u65b9\u6848")))))}f.isMDXComponent=!0}}]);