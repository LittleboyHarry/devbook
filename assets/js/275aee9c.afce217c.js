"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8412],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,l(l({ref:t},s),{},{components:n})):o.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2782:function(e,t,n){n.d(t,{cA:function(){return h},Qj:function(){return d},Bp:function(){return u},YI:function(){return s}});var o=n(3117),r=n(7294),a=n(2814),l=n(1436),i=n(6010),c="linkButton_pNme",p="icon_TF3d";function s(e){var t=e.id,n=e.name;return r.createElement(h,{href:m(t)},r.createElement(a.G,{icon:l.Cdv}),"\xa0",n)}function u(e){var t=e.id,n=e.name;return r.createElement(d,{name:r.createElement(r.Fragment,null,r.createElement(a.G,{icon:l.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),n),href:m(t)})}function m(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function d(e){var t=e.name,n=e.href,a=e.outline,l=e.hint,s=e.attr,u=e.style,m=e.small,d=e.icon;return r.createElement("a",(0,o.Z)({href:n,className:(0,i.Z)(c,"button",!m&&"button--lg",a?"button--outline button--secondary":"button--primary"),title:l},s,{style:Object.assign({cursor:l?"help":"pointer",verticalAlign:"baseline"},u)}),d&&r.createElement("span",{className:p},d),t)}function h(e){var t=e.href,n=e.className,o=e.style,a=e.children;return r.createElement("a",{style:o,className:n,href:t},a)}},5389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),l=n(2782),i=["components"],c={title:"Windows \u5305\u7ba1\u7406\u5668"},p=void 0,s={unversionedId:"win/dev/pkgmgr",id:"win/dev/pkgmgr",title:"Windows \u5305\u7ba1\u7406\u5668",description:"winget",source:"@site/docs/win/22-dev/1-pkgmgr.md",sourceDirName:"win/22-dev",slug:"/win/dev/pkgmgr",permalink:"/geekbook/docs/win/dev/pkgmgr",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/1-pkgmgr.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Windows \u5305\u7ba1\u7406\u5668"},sidebar:"win",previous:{title:"Windows \u5f00\u53d1\u6307\u5357",permalink:"/geekbook/docs/win/dev/index"},next:{title:"PowerShell",permalink:"/geekbook/docs/win/dev/pwsh"}},u={},m=[{value:"<strong>winget</strong>",id:"winget",level:2},{value:"<strong>Chocolatey</strong>",id:"chocolatey",level:2},{value:"<strong>Scoop</strong>",id:"scoop",level:2},{value:"Scoop \u5b89\u88c5",id:"scoop-\u5b89\u88c5",level:3},{value:"\u4ee3\u7406\u4e0b\u8f7d\u914d\u7f6e",id:"\u4ee3\u7406\u4e0b\u8f7d\u914d\u7f6e",level:3},{value:"\u81ea\u52a8\u8865\u5168\u652f\u6301",id:"\u81ea\u52a8\u8865\u5168\u652f\u6301",level:3},{value:"\u641c\u7d22\u4f18\u5316",id:"\u641c\u7d22\u4f18\u5316",level:3},{value:"\u83b7\u53d6\u5185\u5bb9",id:"\u83b7\u53d6\u5185\u5bb9",level:3}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"winget"},(0,a.kt)("strong",{parentName:"h2"},"winget")),(0,a.kt)("p",null,"Win 11 \u5df2\u5185\u7f6e\uff1a\u4ec5\u9700\u5728\u5546\u5e97\u4e2d\u66f4\u65b0\u53ef\u7528"),(0,a.kt)("p",null,"Win 10 \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,a.kt)(l.Bp,{id:"9NBLGGH4NNS1",name:"\u4ece\u5546\u5e97\u83b7\u53d6",mdxType:"MstoreButton"}),"\nor","\xa0",(0,a.kt)("a",{href:"https://github.com/microsoft/winget-cli/releases/latest#:~:text=.msixbundle"},"\u4ece Github \u83b7\u53d6")),(0,a.kt)("h2",{id:"chocolatey"},(0,a.kt)("strong",{parentName:"h2"},"Chocolatey")),(0,a.kt)("p",null,"\u5b89\u88c5\uff1a\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n\n# \u4fe1\u4efb\u6240\u6709\u5b89\u88c5\u7a0b\u5e8f\u7684\u811a\u672c\nchoco feature enable -n allowGlobalConfirmation\n")),(0,a.kt)("p",null,"\u5305\u641c\u7d22\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages"},"https://community.chocolatey.org/packages")),(0,a.kt)("h2",{id:"scoop"},(0,a.kt)("strong",{parentName:"h2"},"Scoop")),(0,a.kt)("h3",{id:"scoop-\u5b89\u88c5"},"Scoop \u5b89\u88c5"),(0,a.kt)("p",null,"\u4f9d\u8d56\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git")),(0,a.kt)("p",null,"\u5b98\u65b9\u65b9\u6cd5\uff1a( \u5176\u8fc7\u7a0b\u9700\u8981\u7545\u901a\u8bbf\u95ee GitHub )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy RemoteSigned -scope CurrentUser\niwr -useb get.scoop.sh | iex\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u624b\u52a8\u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u8fc7\u5404\u79cd\u9014\u5f84\uff0c\u83b7\u53d6\u5230 scoop \u7684\u6e90\u7801\u5305\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ScoopInstaller/Scoop/archive/master.zip"},"https://github.com/ScoopInstaller/Scoop/archive/master.zip")," \u4fdd\u5b58\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"scoop.zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ScoopInstaller/Main/archive/master.zip"},"https://github.com/ScoopInstaller/Main/archive/master.zip")," \u4fdd\u5b58\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"scoop-main.zip"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$to="$env:USERPROFILE\\scoop\\apps\\scoop\\current"\nmkdir -f $to\ncp scoop.zip $to\n$to="$env:USERPROFILE\\scoop\\buckets\\main"\nmkdir -f $to\ncp scoop-main.zip $to\ncurl -L https://cdn.jsdelivr.net/gh/scoopinstaller/install@master/install.ps1 | sls -Pattern \'$downloader.downloadFile($SCOOP_\' -SimpleMatch -NotMatch > install.ps1\n./install.ps1\nrm install.ps1\n'))),(0,a.kt)("h3",{id:"\u4ee3\u7406\u4e0b\u8f7d\u914d\u7f6e"},"\u4ee3\u7406\u4e0b\u8f7d\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\nscoop config proxy 127.0.0.1:<http_proxy_port>\n# \u5347\u7ea7\u4ee5\u6d4b\u8bd5\u7f51\u7edc\u72b6\u6001\nscoop update\n\n")),(0,a.kt)("h3",{id:"\u81ea\u52a8\u8865\u5168\u652f\u6301"},"\u81ea\u52a8\u8865\u5168\u652f\u6301"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop bucket add extras\nscoop install scoop-completion\necho \"Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\\modules\\scoop-completion'\" >> $PROFILE\n\n")),(0,a.kt)("h3",{id:"\u641c\u7d22\u4f18\u5316"},"\u641c\u7d22\u4f18\u5316"),(0,a.kt)("p",null,"\u52a0\u5feb ",(0,a.kt)("inlineCode",{parentName:"p"},"scoop search")," \u67e5\u8be2\u901f\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'scoop install scoop-search\necho "Invoke-Expression (&scoop-search --hook)" >> $PROFILE\n\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u91cd\u542f\u7ec8\u7aef\u540e\u751f\u6548")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("h3",{id:"\u83b7\u53d6\u5185\u5bb9"},"\u83b7\u53d6\u5185\u5bb9"),(0,a.kt)("p",null,"\u5168\u7f51\u5305\u7d22\u5f15\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://rasa.github.io/scoop-directory/"},"https://rasa.github.io/scoop-directory/")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u624b\u52a8\u88c5\u5305"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5217\u51fa\u5305\u7684\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n$app = Read-Host "\u5e94\u7528\u6807\u8bc6\u540d"\n\n$metadata = scoop cat $app | ConvertFrom-Json\necho ""\necho "CHECKVER:" $metadata.checkver\necho ""\necho "LINKS:" $metadata.url\n}\n\n')),(0,a.kt)("p",null,"\u624b\u52a8\u4e0b\u8f7d\u597d\u5305\uff0c\u7136\u540e\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'icm {\n. "$(scoop prefix scoop)\\lib\\core.ps1"\n$null = mkdir $cachedir -f\ncp (Read-Host "\u4e0b\u8f7d\u7684\u6587\u4ef6\u8def\u5f84\uff08\u53ef\u62d6\u5165\uff09") (cache_path $app $metadata.version (Read-Host "\u539f\u4e0b\u8f7d\u94fe\u63a5"))\n}\n\n'))))}h.isMDXComponent=!0}}]);