"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9181],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(k,p(p({ref:t},s),{},{components:n})):o.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),p=["components"],i={title:"\u4f7f\u7528 Scoop"},c=void 0,l={unversionedId:"win/dev/pkgmgr/scoop",id:"win/dev/pkgmgr/scoop",title:"\u4f7f\u7528 Scoop",description:"\u4f9d\u8d56\uff1agit",source:"@site/docs/win/22-dev/2-pkgmgr/1-scoop.md",sourceDirName:"win/22-dev/2-pkgmgr",slug:"/win/dev/pkgmgr/scoop",permalink:"/geekbook/docs/win/dev/pkgmgr/scoop",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/2-pkgmgr/1-scoop.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4f7f\u7528 Scoop"},sidebar:"win",previous:{title:"Win \u5f00\u53d1\u8005\u5fc5\u505a",permalink:"/geekbook/docs/win/dev/mustdo"},next:{title:"\u4f7f\u7528 Chocolatey",permalink:"/geekbook/docs/win/dev/pkgmgr/choco"}},s={},u=[{value:"\u624b\u52a8\u5b89\u88c5",id:"\u624b\u52a8\u5b89\u88c5",level:2},{value:"\u4e0b\u8f7d\u4ee3\u7406",id:"\u4e0b\u8f7d\u4ee3\u7406",level:2},{value:"sudo \u63d0\u6743\u6307\u4ee4",id:"sudo-\u63d0\u6743\u6307\u4ee4",level:2},{value:"scoop \u81ea\u52a8\u8865\u5168",id:"scoop-\u81ea\u52a8\u8865\u5168",level:3},{value:"scoop \u641c\u7d22\u4f18\u5316",id:"scoop-\u641c\u7d22\u4f18\u5316",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f9d\u8d56\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git")),(0,a.kt)("p",null,"\u5b98\u65b9\u65b9\u6cd5\uff1a( \u5176\u8fc7\u7a0b\u9700\u8981\u7545\u901a\u8bbf\u95ee GitHub )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy RemoteSigned -scope CurrentUser\niwr -useb get.scoop.sh | iex\n\n")),(0,a.kt)("h2",{id:"\u624b\u52a8\u5b89\u88c5"},"\u624b\u52a8\u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u8fc7\u5404\u79cd\u9014\u5f84\uff0c\u83b7\u53d6\u5230 scoop \u7684\u6e90\u7801\u5305\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ScoopInstaller/Scoop/archive/master.zip"},"https://github.com/ScoopInstaller/Scoop/archive/master.zip")," \u4fdd\u5b58\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"scoop.zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ScoopInstaller/Main/archive/master.zip"},"https://github.com/ScoopInstaller/Main/archive/master.zip")," \u4fdd\u5b58\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"scoop-main.zip"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$to="$env:USERPROFILE\\scoop\\apps\\scoop\\current"\nmkdir -f $to\ncp scoop.zip $to\n$to="$env:USERPROFILE\\scoop\\buckets\\main"\nmkdir -f $to\ncp scoop-main.zip $to\ncurl -L https://cdn.jsdelivr.net/gh/scoopinstaller/install@master/install.ps1 | sls -Pattern \'$downloader.downloadFile($SCOOP_\' -SimpleMatch -NotMatch > install.ps1\n./install.ps1\nrm install.ps1\n')),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u4ee3\u7406"},"\u4e0b\u8f7d\u4ee3\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\nscoop config proxy 127.0.0.1:<http_proxy_port>\n# \u5347\u7ea7\u4ee5\u6d4b\u8bd5\u7f51\u7edc\u72b6\u6001\nscoop update\n\n")),(0,a.kt)("p",null,"\u5168\u7f51\u5305\u7d22\u5f15\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://rasa.github.io/scoop-directory/"},"https://rasa.github.io/scoop-directory/")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5217\u51fa\u5305\u7684\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n$app = Read-Host "\u5e94\u7528\u6807\u8bc6\u540d"\n\n$metadata = scoop cat $app | ConvertFrom-Json\necho ""\necho "CHECKVER:" $metadata.checkver\necho ""\necho "LINKS:" $metadata.url\n}\n\n')),(0,a.kt)("p",null,"\u624b\u52a8\u4e0b\u8f7d\u597d\u5305\uff0c\u7136\u540e\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n. "$(scoop prefix scoop)\\lib\\core.ps1"\n$null = mkdir $cachedir -f\ncp (Read-Host "\u4e0b\u8f7d\u7684\u6587\u4ef6\u8def\u5f84\uff08\u53ef\u62d6\u5165\uff09") (cache_path $app $metadata.version (Read-Host "\u539f\u4e0b\u8f7d\u94fe\u63a5"))\n}\n\n'))),(0,a.kt)("h2",{id:"sudo-\u63d0\u6743\u6307\u4ee4"},"sudo \u63d0\u6743\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scoop install sudo\n")),(0,a.kt)("h3",{id:"scoop-\u81ea\u52a8\u8865\u5168"},"scoop \u81ea\u52a8\u8865\u5168"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop bucket add extras\nscoop install scoop-completion\necho \"Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\\modules\\scoop-completion'\" >> $PROFILE\n\n")),(0,a.kt)("h3",{id:"scoop-\u641c\u7d22\u4f18\u5316"},"scoop \u641c\u7d22\u4f18\u5316"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\u641c\u7d22\u7b97\u6cd5\u53cd\u5e94\u5f88\u6162"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'scoop install scoop-search\necho "Invoke-Expression (&scoop-search --hook)" >> $PROFILE\n\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u542f\u7ec8\u7aef\u540e\u751f\u6548")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})))}d.isMDXComponent=!0}}]);