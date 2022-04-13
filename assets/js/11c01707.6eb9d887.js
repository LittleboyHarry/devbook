"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[2059],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5458:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"WSL \u7f51\u7edc\u95ee\u9898"},c=void 0,p={unversionedId:"win/dev/wsl/netfix",id:"win/dev/wsl/netfix",title:"WSL \u7f51\u7edc\u95ee\u9898",description:"\u7aef\u53e3\u8f6c\u53d1",source:"@site/docs/win/22-dev/15-wsl/4-netfix.md",sourceDirName:"win/22-dev/15-wsl",slug:"/win/dev/wsl/netfix",permalink:"/geekbook/docs/win/dev/wsl/netfix",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/15-wsl/4-netfix.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"WSL \u7f51\u7edc\u95ee\u9898"},sidebar:"win",previous:{title:"WSL \u4f7f\u7528\u6280\u5de7",permalink:"/geekbook/docs/win/dev/wsl/recommend"},next:{title:"WSL \u5f00\u53d1\u5bb9\u5668",permalink:"/geekbook/docs/win/dev/wsl/container"}},s=[{value:"\u7aef\u53e3\u8f6c\u53d1",id:"\u7aef\u53e3\u8f6c\u53d1",children:[],level:2},{value:"\u7aef\u53e3\u4ee3\u7406",id:"\u7aef\u53e3\u4ee3\u7406",children:[],level:2},{value:"proxychains",id:"proxychains",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7aef\u53e3\u8f6c\u53d1"},"\u7aef\u53e3\u8f6c\u53d1"),(0,a.kt)("p",null,"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"socat")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install -y socat\n")),(0,a.kt)("p",null,"\u5199\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"forwardport(){\n    local ports=(...) # \u7aef\u53e3\u8f6c\u53d1\n    local host=`cat /etc/resolv.conf | grep nameserver | cut -d ' ' -f 2`\n    for port in ${ports[@]}; do\n        socat TCP4-LISTEN:$port,fork TCP4:$host:$port & disown\n    done\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6bcf\u6b21\u6253\u5f00 WSL \u65f6\uff0c\uff08\u6216\u5199\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," \u81ea\u52a8\u6267\u884c\uff09\n\u6267\u884c\u4e00\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardport")," \u5373\u53ef\u8f6c\u53d1\u865a\u62df\u673a\u5185\u7684\u6307\u5b9a\u7aef\u53e3\u5230\u5bbf\u4e3b\u673a ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u4e0a"),(0,a.kt)("h2",{id:"\u7aef\u53e3\u4ee3\u7406"},"\u7aef\u53e3\u4ee3\u7406"),(0,a.kt)("p",null,"\u786e\u4fdd\u7aef\u53e3\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")),(0,a.kt)("p",null,"\u4e3a\u89e3\u9664\u9632\u706b\u5899\u4fdd\u62a4\uff0c\u5148\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd PowerShell \u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# \u5173\u95ed\u5148\u524d\u7684\u89c4\u5219\uff1a\nDisable-NetFirewallRule -DisplayName "<\u8fdb\u7a0b\u540d>.exe"\n\nNew-NetFirewallRule -DisplayName "WSL" -Direction Inbound  -InterfaceAlias "vEthernet (WSL)"  -Action Allow\n')),(0,a.kt)("p",null,"\u8bbe\u7f6e\u4ee3\u7406\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\uff0c\u7981\u7528\u9632\u706b\u5899\u76f8\u5173\u89c4\u5219"),(0,a.kt)("p",null,"\u5728\u7aef\u53e3\u8f6c\u53d1\u7684\u57fa\u7840\u4e0a\uff0c\u914d\u7f6e ",(0,a.kt)("a",{href:"/docs/dev/cli/network",target:"_blank"},"proxychains"),"\u3002"),(0,a.kt)("h2",{id:"proxychains"},"proxychains"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo sed -i -e \"\\$asocks5 $(cat /etc/resolv.conf |grep -oP '(?<=nameserver\\ ).*') <\u672c\u5730\u7aef\u53e3>\" -e '/^socks/d' /etc/proxychains4.conf\n")))}d.isMDXComponent=!0}}]);