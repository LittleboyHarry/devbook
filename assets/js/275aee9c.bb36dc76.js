"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8412],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2782:function(e,t,n){n.d(t,{cA:function(){return g},Qj:function(){return d},Bp:function(){return u},YI:function(){return p}});var r=n(3117),o=n(7294),a=n(2814),i=n(1436),c=n(6010),l="linkButton_pNme",s="icon_TF3d";function p(e){var t=e.id,n=e.name;return o.createElement(g,{href:m(t)},o.createElement(a.G,{icon:i.Cdv}),"\xa0",n)}function u(e){var t=e.id,n=e.name;return o.createElement(d,{name:o.createElement(o.Fragment,null,o.createElement(a.G,{icon:i.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),n),href:m(t)})}function m(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function d(e){var t=e.name,n=e.href,p=e.outline,u=e.hint,m=e.attr,d=e.style,g=e.small,k=e.icon;return!0===k&&(k=o.createElement(a.G,{icon:i.g4A})),o.createElement("a",(0,r.Z)({href:n,className:(0,c.Z)(l,"button",!g&&"button--lg",p?"button--outline button--secondary":"button--primary"),title:u},m,{style:Object.assign({cursor:u?"help":"pointer",verticalAlign:"baseline"},d)}),k&&o.createElement("span",{className:s},k),t)}function g(e){var t=e.href,n=e.className,r=e.style,a=e.children;return o.createElement("a",{style:r,className:n,href:t},a)}},5389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=n(2782),c=["components"],l={title:"Windows \u5305\u7ba1\u7406\u5668"},s=void 0,p={unversionedId:"win/dev/pkgmgr",id:"win/dev/pkgmgr",title:"Windows \u5305\u7ba1\u7406\u5668",description:"winget",source:"@site/docs/win/22-dev/1-pkgmgr.md",sourceDirName:"win/22-dev",slug:"/win/dev/pkgmgr",permalink:"/geekbook/docs/win/dev/pkgmgr",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/1-pkgmgr.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Windows \u5305\u7ba1\u7406\u5668"},sidebar:"win",previous:{title:"Windows \u5f00\u53d1\u6307\u5357",permalink:"/geekbook/docs/win/dev/index"},next:{title:"PowerShell",permalink:"/geekbook/docs/win/dev/pwsh"}},u={},m=[{value:"<strong>winget</strong>",id:"winget",level:2},{value:"<strong>Chocolatey</strong>",id:"chocolatey",level:2},{value:"<strong>Scoop</strong>",id:"scoop",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u81ea\u52a8\u8865\u5168\u652f\u6301",id:"\u81ea\u52a8\u8865\u5168\u652f\u6301",level:3},{value:"\u641c\u7d22\u4f18\u5316",id:"\u641c\u7d22\u4f18\u5316",level:3},{value:"\u83b7\u53d6\u5185\u5bb9",id:"\u83b7\u53d6\u5185\u5bb9",level:3},{value:"\u56fd\u670d\u7248",id:"\u56fd\u670d\u7248",level:3}],d={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"winget"},(0,a.kt)("strong",{parentName:"h2"},"winget")),(0,a.kt)("p",null,"Win 11 \u5df2\u5185\u7f6e\uff1a\u4ec5\u9700\u5728\u5546\u5e97\u4e2d\u66f4\u65b0\u53ef\u7528"),(0,a.kt)("p",null,"Win 10 \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,a.kt)(i.Bp,{id:"9NBLGGH4NNS1",name:"\u4ece\u5546\u5e97\u83b7\u53d6",mdxType:"MstoreButton"}),"\nor","\xa0",(0,a.kt)("a",{href:"https://github.com/microsoft/winget-cli/releases/latest#:~:text=.msixbundle"},"\u4ece Github \u83b7\u53d6")),(0,a.kt)("h2",{id:"chocolatey"},(0,a.kt)("strong",{parentName:"h2"},"Chocolatey")),(0,a.kt)("p",null,"\u5b89\u88c5\uff1a\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n\n# \u4fe1\u4efb\u6240\u6709\u5b89\u88c5\u7a0b\u5e8f\u7684\u811a\u672c\nchoco feature enable -n allowGlobalConfirmation\n")),(0,a.kt)("p",null,"\u5305\u641c\u7d22\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages"},"https://community.chocolatey.org/packages")),(0,a.kt)("h2",{id:"scoop"},(0,a.kt)("strong",{parentName:"h2"},"Scoop")),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u524d\u7f6e\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\uff0c\u4ece\u5b98\u65b9\u6e20\u9053\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy RemoteSigned -scope CurrentUser\niwr -useb get.scoop.sh | iex\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece\u56fd\u5185\u6e20\u9053\u83b7\u53d6\u89c1",(0,a.kt)("a",{parentName:"strong",href:"#%E5%9B%BD%E6%9C%8D%E7%89%88"},"\u4e0b\u6587"))),(0,a.kt)("h3",{id:"\u81ea\u52a8\u8865\u5168\u652f\u6301"},"\u81ea\u52a8\u8865\u5168\u652f\u6301"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop bucket add extras\nscoop install scoop-completion\necho \"Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\\modules\\scoop-completion'\" >> $PROFILE\n\n")),(0,a.kt)("h3",{id:"\u641c\u7d22\u4f18\u5316"},"\u641c\u7d22\u4f18\u5316"),(0,a.kt)("p",null,"\u52a0\u5feb ",(0,a.kt)("inlineCode",{parentName:"p"},"scoop search")," \u67e5\u8be2\u901f\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'scoop install scoop-search\necho "Invoke-Expression (&scoop-search --hook)" >> $PROFILE\n\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u542f\u7ec8\u7aef\u4ee5\u751f\u6548\uff0c\u6216\uff1a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},". $profile\n")))),(0,a.kt)("h3",{id:"\u83b7\u53d6\u5185\u5bb9"},"\u83b7\u53d6\u5185\u5bb9"),(0,a.kt)("p",null,"\u5168\u7f51\u5305\u7d22\u5f15\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://rasa.github.io/scoop-directory/"},"https://rasa.github.io/scoop-directory/")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u624b\u52a8\u88c5\u5305"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5217\u51fa\u5305\u7684\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n$app = Read-Host "\u5e94\u7528\u6807\u8bc6\u540d"\n\n$metadata = scoop cat $app | ConvertFrom-Json\necho ""\necho "CHECKVER:" $metadata.checkver\necho ""\necho "LINKS:" $metadata.url\n}\n\n')),(0,a.kt)("p",null,"\u624b\u52a8\u4e0b\u8f7d\u597d\u5305\uff0c\u7136\u540e\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n. "$(scoop prefix scoop)\\lib\\core.ps1"\n$null = mkdir $cachedir -f\ncp (Read-Host "\u4e0b\u8f7d\u7684\u6587\u4ef6\u8def\u5f84\uff08\u53ef\u62d6\u5165\uff09") (cache_path $app $metadata.version (Read-Host "\u539f\u4e0b\u8f7d\u94fe\u63a5"))\n}\n\n'))),(0,a.kt)("h3",{id:"\u56fd\u670d\u7248"},"\u56fd\u670d\u7248"),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://gitcode.net"},"gitcode.net")," \u63d0\u4f9b\u56fd\u5185\u955c\u50cf\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Set-ExecutionPolicy RemoteSigned -scope CurrentUser\n\n$scoopdir="$env:USERPROFILE\\scoop\\apps\\scoop\\current"\nmkdir -f $scoopdir | Out-Null\niwr -useb https://gitcode.net/mirrors/ScoopInstaller/Scoop/-/archive/master/Scoop-master.zip -o "$scoopdir\\scoop.zip"\n\n$maindir="$env:USERPROFILE\\scoop\\buckets\\main"\nmkdir -f $maindir | Out-Null\niwr -useb https://gitcode.net/mirrors/ScoopInstaller/Main/-/archive/master/Main-master.zip -o "$maindir\\scoop-main.zip"\n\n(iwr -useb https://gitcode.net/mirrors/ScoopInstaller/Install/-/raw/master/install.ps1).Content -creplace \'\\s*\\$downloader\\.downloadFile\\(\\$SCOOP_.+\',\'\' | iex\n\n')),(0,a.kt)("p",null,"\u82e5\u8981\u4f7f\u7528\u539f\u7248 github \u4e0a\u6e38\u4ed3\u5e93\u6e90\uff0c\u8bf7",(0,a.kt)("a",{href:"/docs/dev/git#\u7f51\u7edc\u95ee\u9898",target:"_blank"},"\u8bbe\u7f6e git \u4ee3\u7406")),(0,a.kt)("p",null,"\u5426\u5219\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u4ed3\u5e93\u6e90\uff1a( \u53ea\u955c\u50cf\u5143\u6570\u636e\u3001\u52a0\u5feb\u5347\u7ea7\u548c\u68c0\u7d22\u901f\u5ea6\uff0c\u4e0d\u542b\u4e8c\u8fdb\u5236\u6587\u4ef6\u955c\u50cf )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket rm main\nscoop bucket add main https://gitcode.net/mirrors/ScoopInstaller/Main\n\n# \u5176\u5b83 scoop \u5b98\u65b9\u955c\u50cf\u6e90\uff1a\nscoop bucket add versions https://gitcode.net/mirrors/ScoopInstaller/Versions\nscoop bucket add java https://gitcode.net/mirrors/ScoopInstaller/Java\nscoop bucket add extras https://gitcode.net/mirrors/ScoopInstaller/Extras\n\n")))}g.isMDXComponent=!0}}]);