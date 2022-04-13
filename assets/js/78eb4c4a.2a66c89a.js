"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[3517],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,c(c({ref:t},s),{},{components:n})):o.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8368:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"\u63a8\u8350\u5fc5\u88c5"},p=void 0,l={unversionedId:"win/dev/scoop/recommend",id:"win/dev/scoop/recommend",title:"\u63a8\u8350\u5fc5\u88c5",description:"\u5168\u7f51\u5305\u7d22\u5f15\uff1ahttps://rasa.github.io/scoop-directory/",source:"@site/docs/win/22-dev/2-scoop/2-recommend.md",sourceDirName:"win/22-dev/2-scoop",slug:"/win/dev/scoop/recommend",permalink:"/geekbook/docs/win/dev/scoop/recommend",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/2-scoop/2-recommend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u63a8\u8350\u5fc5\u88c5"},sidebar:"win",previous:{title:"\u5b89\u88c5",permalink:"/geekbook/docs/win/dev/scoop/install"},next:{title:"PowerShell",permalink:"/geekbook/docs/win/dev/pwsh"}},s=[{value:"sudo \u63d0\u6743\u6307\u4ee4",id:"sudo-\u63d0\u6743\u6307\u4ee4",children:[{value:"scoop \u81ea\u52a8\u8865\u5168",id:"scoop-\u81ea\u52a8\u8865\u5168",children:[],level:3},{value:"scoop \u641c\u7d22\u4f18\u5316",id:"scoop-\u641c\u7d22\u4f18\u5316",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5168\u7f51\u5305\u7d22\u5f15\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://rasa.github.io/scoop-directory/"},"https://rasa.github.io/scoop-directory/")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5217\u51fa\u5305\u7684\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n$app = Read-Host "\u5e94\u7528\u6807\u8bc6\u540d"\n\n$metadata = scoop cat $app | ConvertFrom-Json\necho ""\necho "CHECKVER:" $metadata.checkver\necho ""\necho "LINKS:" $metadata.url\n}\n\n')),(0,a.kt)("p",null,"\u624b\u52a8\u4e0b\u8f7d\u597d\u5305\uff0c\u7136\u540e\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n. "$(scoop prefix scoop)\\lib\\core.ps1"\n$null = mkdir $cachedir -f\ncp (Read-Host "\u4e0b\u8f7d\u7684\u6587\u4ef6\u8def\u5f84\uff08\u53ef\u62d6\u5165\uff09") (cache_path $app $metadata.version (Read-Host "\u539f\u4e0b\u8f7d\u94fe\u63a5"))\n}\n\n'))),(0,a.kt)("h2",{id:"sudo-\u63d0\u6743\u6307\u4ee4"},"sudo \u63d0\u6743\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scoop install sudo\n")),(0,a.kt)("h3",{id:"scoop-\u81ea\u52a8\u8865\u5168"},"scoop \u81ea\u52a8\u8865\u5168"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop bucket add extras\nscoop install scoop-completion\necho \"Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\\modules\\scoop-completion'\" >> $PROFILE\n\n")),(0,a.kt)("h3",{id:"scoop-\u641c\u7d22\u4f18\u5316"},"scoop \u641c\u7d22\u4f18\u5316"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\u641c\u7d22\u7b97\u6cd5\u53cd\u5e94\u5f88\u6162"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'scoop install scoop-search\necho "Invoke-Expression (&scoop-search --hook)" >> $PROFILE\n\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u542f\u7ec8\u7aef\u540e\u751f\u6548")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})))}d.isMDXComponent=!0}}]);