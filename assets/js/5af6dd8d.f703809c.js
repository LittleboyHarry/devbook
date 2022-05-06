"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[6790],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={title:"\u5236\u4f5c\u7eff\u5316\u8f6f\u4ef6 (\u9ad8\u7ea7)"},s=void 0,u={unversionedId:"manual/win/green",id:"manual/win/green",title:"\u5236\u4f5c\u7eff\u5316\u8f6f\u4ef6 (\u9ad8\u7ea7)",description:"\u672c\u6587\u4ee5 Windows \u5e94\u7528\u6c99\u76d2\u5316\u4e3a\u4f8b\uff08\u4e13\u4e1a\u7248\u529f\u80fd\uff09\u3002\u5b89\u88c5\u65b9\u6cd5\uff1a\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c",source:"@site/docs/manual/win/green.md",sourceDirName:"manual/win",slug:"/manual/win/green",permalink:"/geekbook/docs/manual/win/green",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/manual/win/green.md",tags:[],version:"current",frontMatter:{title:"\u5236\u4f5c\u7eff\u5316\u8f6f\u4ef6 (\u9ad8\u7ea7)"},sidebar:"manual",previous:{title:"\u5305\u7ba1\u7406\u5668",permalink:"/geekbook/docs/manual/linux/pkgmgr"},next:{title:"\u6ce8\u518c\u8868",permalink:"/geekbook/docs/manual/win/registry"}},c={},p=[{value:"\u652f\u6301\u4e2d\u6587\u8f93\u5165\u6cd5",id:"\u652f\u6301\u4e2d\u6587\u8f93\u5165\u6cd5",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ee5 Windows \u5e94\u7528\u6c99\u76d2\u5316\u4e3a\u4f8b\uff08\u4e13\u4e1a\u7248\u529f\u80fd\uff09\u3002\u5b89\u88c5\u65b9\u6cd5\uff1a\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Dism /online /Enable-Feature /All /FeatureName:Containers-DisposableClientVM\n")),(0,o.kt)("p",null,"\u5185\u5916\u754c\u4ea4\u6362\u6587\u4ef6\u6216\u6570\u636e\u7684\u65b9\u6cd5\uff1aCtrl + C / V \u590d\u5236\u3001\u7c98\u8d34"),(0,o.kt)("p",null,"\u6700\u5927\u5316\u7a97\u53e3\uff1a\u901a\u8fc7\u62c9\u52a8\u7f6e\u9876\u800c\u975e\u70b9\u51fb\u6309\u94ae"),(0,o.kt)("p",null,"\u5236\u4f5c\u5de5\u5177\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nirsoft.net/utils/folder_changes_view.html"},"FolderChangesView"),": \u76d1\u63a7\u6587\u4ef6\u5939\u53d8\u66f4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nirsoft.net/utils/registry_changes_view.html"},"RegistryChangesView"),": \u5206\u6790\u6ce8\u518c\u8868\u53d8\u5316")),(0,o.kt)("p",null,"\u6587\u4ef6\u5939\u76d1\u63a7\u5f00\u59cb\u524d\u52fe\u9009 ",(0,o.kt)("inlineCode",{parentName:"p"},"folder summary mode")," \u7b80\u5316\u7ed3\u679c\u89c6\u56fe"),(0,o.kt)("p",null,"\u7559\u610f\uff1a"),(0,o.kt)("div",{className:"autoselect-cell-of-table"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6\u5939"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u6570\u636e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"C:\\Users\\Public\\Desktop"),(0,o.kt)("td",{parentName:"tr",align:null},"\u684c\u9762\u5feb\u6377\u65b9\u5f0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"C:\\Users\\WDAGUtilityAccount\\AppData"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u590d\u7528\u3001\u72b6\u6001\u4fdd\u5b58")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"C:\\Users\\WDAGUtilityAccount\\Desktop"),(0,o.kt)("td",{parentName:"tr",align:null},"\u684c\u9762\u6620\u5c04"))))),(0,o.kt)("h2",{id:"\u652f\u6301\u4e2d\u6587\u8f93\u5165\u6cd5"},"\u652f\u6301\u4e2d\u6587\u8f93\u5165\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<Configuration>\n  ...\n  <MappedFolders>\n    <MappedFolder>\n      <HostFolder> ... \u811a\u672c\u8def\u5f84 ... </HostFolder>\n      <SandboxFolder>C:\\autorun\\main.ps1</SandboxFolder>\n      <ReadOnly>true</ReadOnly>\n    </MappedFolder>\n    <MappedFolder>\n      <HostFolder>C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.InternationalSettings.Commands</HostFolder>\n      <SandboxFolder>C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.InternationalSettings.Commands</SandboxFolder>\n      <ReadOnly>true</ReadOnly>\n    </MappedFolder>\n  </MappedFolders>\n    <LogonCommand>\n      <Command>powershell -executionpolicy unrestricted -file C:\\autorun\\main.ps1</Command>\n    </LogonCommand>\n</Configuration>\n")),(0,o.kt)("p",null,"\u811a\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'$LanguageList = Get-WinUserLanguageList\n$LanguageList.Add("zh-CN")\nSet-WinUserLanguageList $LanguageList -Force\n')),(0,o.kt)("h2",{id:"\u76f8\u5173\u6587\u6863"},"\u76f8\u5173\u6587\u6863"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-cn/windows/security/threat-protection/windows-sandbox/windows-sandbox-architecture"},"https://docs.microsoft.com/zh-cn/windows/security/threat-protection/windows-sandbox/windows-sandbox-architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-configure-using-wsb-file"},"https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-configure-using-wsb-file"))))}m.isMDXComponent=!0}}]);