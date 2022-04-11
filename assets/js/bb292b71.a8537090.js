"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[3060],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8158:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Debian or Ubuntu"},u=void 0,p={unversionedId:"linux/mustdo/debian",id:"linux/mustdo/debian",title:"Debian or Ubuntu",description:"\u66f4\u6539\u8f6f\u4ef6\u6e90",source:"@site/docs/linux/4-mustdo/17-debian.md",sourceDirName:"linux/4-mustdo",slug:"/linux/mustdo/debian",permalink:"/geekbook/docs/linux/mustdo/debian",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/4-mustdo/17-debian.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Debian or Ubuntu"},sidebar:"getstarted",previous:{title:"Fedora",permalink:"/geekbook/docs/linux/mustdo/fedora"},next:{title:"\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5",permalink:"/geekbook/docs/linux/mustdo/chinese"}},s=[{value:"\u66f4\u6539\u8f6f\u4ef6\u6e90",id:"\u66f4\u6539\u8f6f\u4ef6\u6e90",children:[],level:2},{value:"Ubuntu",id:"ubuntu",children:[{value:"\u9632\u706b\u5899",id:"\u9632\u706b\u5899",children:[],level:3},{value:"\u559c\u6b22 Snap \u5417\uff1f",id:"\u559c\u6b22-snap-\u5417",children:[],level:3},{value:"Kubuntu Wayland",id:"kubuntu-wayland",children:[],level:3}],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u66f4\u6539\u8f6f\u4ef6\u6e90"},"\u66f4\u6539\u8f6f\u4ef6\u6e90"),(0,o.kt)("p",null,"\u4f7f\u7528 HTTPS \u53ef\u4ee5\u907f\u514d\u6d41\u91cf\u52ab\u6301\u3001\u4f18\u5316\u4f53\u9a8c\uff08 Debian 10 \u53ca\u4ee5\u4e0a\u7248\u672c\u5185\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-transport-https")," \u6a21\u5757\u652f\u6301 \uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo cp /etc/apt/sources.list /etc/apt/sources.list.old\n\n# Debian \u4f7f\u7528\u817e\u8baf\u4e91\u955c\u50cf\u7ad9:\nsudo sed -i "s#http://\\(deb\\|security\\)\\.debian\\.org#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list\n# Ubuntu \u4f7f\u7528\u817e\u8baf\u4e91\u955c\u50cf\u7ad9:\nsudo sed -i "s#http://\\(cn\\.archive\\|security\\)\\.ubuntu\\.com#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list\n# \u4e0d\u68c0\u7d22\u6e90\u7801\u5305\uff1a\nsudo sed -i "/deb-src/ s/^/#/" /etc/apt/sources.list\n\nsudo apt update\n')),(0,o.kt)("details",{className:"let-details-to-yellow"},(0,o.kt)("summary",null,"\u6216\u7528 Ubuntu \u56fe\u5f62\u5316\u754c\u9762\u5feb\u901f\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00 \u201c\u8f6f\u4ef6\u548c\u66f4\u65b0\u201d ( \u641c\u7d22\u5173\u952e\u8bcd ",(0,o.kt)("inlineCode",{parentName:"p"},"sof")," )\uff0c\u9009\u62e9\u5408\u9002\u7684\u4e0b\u8f7d\u6e90"),(0,o.kt)("p",{parentName:"li"},"Ubuntu \u4e0b\u8f7d -> \u4e0b\u8f7d\u81ea ( \u9ed8\u8ba4\u201c\u4e2d\u56fd\u7684\u670d\u52a1\u5668\u201d\u6307\u7684\u662f cn.archive.ubuntu.com )")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00 \u201c\u8f6f\u4ef6\u66f4\u65b0\u5668\u201d ( \u641c\u7d22\u5173\u952e\u8bcd ",(0,o.kt)("inlineCode",{parentName:"p"},"upd")," ) \u66f4\u65b0\u7cfb\u7edf")))),(0,o.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("h3",{id:"\u9632\u706b\u5899"},"\u9632\u706b\u5899"),(0,o.kt)("p",null,"\u5bf9\u4e2a\u4eba\u6216\u5bb6\u7528\u8bbe\u5907\uff0c\u5f3a\u70c8\u5efa\u8bae\u5f00\u542f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo ufw enable\n")),(0,o.kt)("p",null,"\u53ef\u89c6\u5316\u914d\u7f6e\u5668\uff1agufw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install -y gufw\n")),(0,o.kt)("p",null,"\u6211\u4eec\u6253\u5f00 gufw \u8fdb\u884c\u6dfb\u52a0\uff0c\u641c\u7d22\u4e00\u4e9b\u5e38\u7528\u7684\u5982\uff1aKDE Connect"),(0,o.kt)("h3",{id:"\u559c\u6b22-snap-\u5417"},"\u559c\u6b22 Snap \u5417\uff1f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.toutiao.com/article/6331388216112972033/"},"\u4e00\u7bc7\u5173\u4e8e Snap \u7684\u70b9\u8bc4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.zhihu.com/question/47514122"},"\u77e5\u4e4e\u793e\u533a\u5bf9 Snap \u7684\u8ba8\u8bba"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0d\u4f7f\u7528\u5e76\u5b8c\u5168\u5378\u8f7d Snap \u7684\u65b9\u6cd5")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e Snap \u7248 Firefox\uff0c\u8bf7",(0,o.kt)("a",{target:"_blank",href:"/docs/browser/edge-for-linux"},"\u5148\u5b89\u88c5 Edge")," \u6216\u9009\u62e9\u5176\u4ed6\u6d4f\u89c8\u5668\u4ee3\u66ff"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt autoremove --purge snapd\nrm -rf ~/snap/\n")))),(0,o.kt)("h3",{id:"kubuntu-wayland"},"Kubuntu Wayland"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8fd9\u662f KDE \u5b9e\u9a8c\u6027\u6280\u672f\uff0c\u4ecd\u5728\u5f00\u53d1\u5b8c\u5584\u4e2d")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install -y plasma-workspace-wayland\n\n# \u76f8\u5173\u63a8\u8350\uff1a\nsudo apt install -y wl-clipboard\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u4e3a\u81ea\u52a8\u767b\u9646\uff1a\u641c\u7d22 ",(0,o.kt)("inlineCode",{parentName:"p"},"sddm")," \u6253\u5f00\u201c\u767b\u9646\u753b\u9762\u201d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u884c\u4e3a\u8bbe\u7f6e"),"\uff0c\u66f4\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f7f\u7528\u4f1a\u8bdd")),(0,o.kt)("p",null,"\u7136\u540e\u6ce8\u9500\u4f1a\u8bdd\uff0c\u5de6\u4e0b\u89d2\u9009\u62e9 wayland \u767b\u9646\u4ee5\u751f\u6548\u3002"))}d.isMDXComponent=!0}}]);