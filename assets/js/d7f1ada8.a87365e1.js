"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[7043],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||c;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},559:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var n=r(3117),o=r(102),c=(r(7294),r(3905)),i=["components"],a={title:"\u4f7f\u7528 Chocolatey"},l=void 0,p={unversionedId:"win/dev/pkgmgr/choco",id:"win/dev/pkgmgr/choco",title:"\u4f7f\u7528 Chocolatey",description:"\u56fd\u5185\u73af\u5883\u8bbf\u95ee\u6682\u65e0\u4e2d\u65ad",source:"@site/docs/win/22-dev/2-pkgmgr/2-choco.md",sourceDirName:"win/22-dev/2-pkgmgr",slug:"/win/dev/pkgmgr/choco",permalink:"/geekbook/docs/win/dev/pkgmgr/choco",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/2-pkgmgr/2-choco.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528 Chocolatey"},sidebar:"win",previous:{title:"\u4f7f\u7528 Scoop",permalink:"/geekbook/docs/win/dev/pkgmgr/scoop"},next:{title:"PowerShell",permalink:"/geekbook/docs/win/dev/pwsh"}},u={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u81ea\u52a8\u4fe1\u4efb\u5b89\u88c5\u811a\u672c",id:"\u81ea\u52a8\u4fe1\u4efb\u5b89\u88c5\u811a\u672c",level:2},{value:"\u63a8\u8350 psutils",id:"\u63a8\u8350-psutils",level:2},{value:"\u641c\u7d22",id:"\u641c\u7d22",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u56fd\u5185\u73af\u5883\u8bbf\u95ee\u6682\u65e0\u4e2d\u65ad"),(0,c.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,c.kt)("p",null,"\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n")),(0,c.kt)("h2",{id:"\u81ea\u52a8\u4fe1\u4efb\u5b89\u88c5\u811a\u672c"},"\u81ea\u52a8\u4fe1\u4efb\u5b89\u88c5\u811a\u672c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-powershell"},"choco feature enable -n allowGlobalConfirmation\n")),(0,c.kt)("h2",{id:"\u63a8\u8350-psutils"},"\u63a8\u8350 psutils"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install psutils\n")),(0,c.kt)("h2",{id:"\u641c\u7d22"},"\u641c\u7d22"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages"},"https://community.chocolatey.org/packages")))}f.isMDXComponent=!0}}]);