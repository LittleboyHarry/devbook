"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[232],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1421:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"\u5185\u6838\u95ee\u9898"},u=void 0,p={unversionedId:"linux/kernel",id:"linux/kernel",title:"\u5185\u6838\u95ee\u9898",description:"\u5982\u679c\u53d1\u884c\u7248\u7684\u81ea\u5e26\u5185\u6838\u5bf9\u786c\u4ef6\u652f\u6301\u6709\u95ee\u9898\uff0c\u8bf7\u6ce8\u610f\u672c\u6587\uff0c\u5426\u5219\u7565\u8fc7\u3002\u6bdb\u75c5\u4e0d\u9650\u4e8e\uff1a",source:"@site/docs/linux/3-kernel.md",sourceDirName:"linux",slug:"/linux/kernel",permalink:"/geekbook/docs/linux/kernel",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/3-kernel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5185\u6838\u95ee\u9898"},sidebar:"getstarted",previous:{title:"\u8c03\u4f18",permalink:"/geekbook/docs/linux/optimize"},next:{title:"\u53cc\u7cfb\u7edf\u914d\u7f6e",permalink:"/geekbook/docs/linux/dual-os"}},c=[{value:"Fedora \u6362\u5185\u6838",id:"fedora-\u6362\u5185\u6838",children:[],level:2},{value:"Ubuntu \u9884\u7f16\u8bd1\u5185\u6838",id:"ubuntu-\u9884\u7f16\u8bd1\u5185\u6838",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u53d1\u884c\u7248\u7684\u81ea\u5e26\u5185\u6838\u5bf9\u786c\u4ef6\u652f\u6301\u6709\u95ee\u9898\uff0c\u8bf7\u6ce8\u610f\u672c\u6587\uff0c\u5426\u5219\u7565\u8fc7\u3002\u6bdb\u75c5\u4e0d\u9650\u4e8e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u5185\u6838\u65e0\u6cd5\u542f\u52a8\uff0c\u5bfc\u81f4\u9ed1\u5c4f\u6b7b\u673a"),(0,o.kt)("li",{parentName:"ul"},"\u7b14\u8bb0\u672c\u5408\u4e0a\u76d6\u5b50\u6302\u8d77\u5bfc\u81f4\u5d29\u6e83")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5e38\u7528\u94fe\u63a5")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u957f\u671f\u652f\u6301\u7248\uff1a\n",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/category/releases.html#:~:text=Longterm%20release%20kernels"},"https://www.kernel.org/category/releases.html")),(0,o.kt)("p",{parentName:"div"},"Linux \u5185\u6838\u6e90\u7801 by \u6e05\u534e\u955c\u50cf\u7ad9\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/kernel/"},"https://mirrors.tuna.tsinghua.edu.cn/kernel/")))),(0,o.kt)("h2",{id:"fedora-\u6362\u5185\u6838"},"Fedora \u6362\u5185\u6838"),(0,o.kt)("p",null,"\u6b7b\u673a\u540e\u5173\u95ed\u7535\u6e90\u91cd\u542f\u51fa\u73b0\u5185\u6838\u9009\u62e9\u83dc\u5355\uff0c\u5c1d\u8bd5\u8fc7\u5f80\u53ef\u6210\u529f\u542f\u52a8\u7684\u5185\u6838\u542f\u52a8\u3002\u6210\u529f\u542f\u52a8\u540e\uff0c\u66f4\u6362\u53ef\u7528\u7684\u5185\u6838\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5185\u6838\u5217\u8868\nls /boot/vmlinuz-*\n\nsudo grubby --set-default <kernel_path>\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ask.fedoraproject.org/t/fedora-new-kernel-not-working-after-dnf-upgrade-refresh/2222/3"},"\u8be6\u89c1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5217\u51fa\u5386\u53f2\u7248\u672c\ndnf --showduplicates list kernel\n\n# \u963b\u6b62\u66f4\u65b0\nsudo dnf in 'dnf-command(versionlock)'\nsudo dnf versionlock add kernel-5.14.10-300.fc35\n# add \u4e3a\u9501\u5b9a\u6a21\u5f0f\uff0cexclude \u4e3a\u6392\u9664\u6a21\u5f0f\uff0cdelete \u89e3\u9664\u9501\u5b9a\n")),(0,o.kt)("h2",{id:"ubuntu-\u9884\u7f16\u8bd1\u5185\u6838"},"Ubuntu \u9884\u7f16\u8bd1\u5185\u6838"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://kernel.ubuntu.com/~kernel-ppa/mainline/"},"https://kernel.ubuntu.com/~kernel-ppa/mainline/")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6e90\u7801\u6821\u9a8c")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gpg2 --locate-keys torvalds@kernel.org gregkh@kernel.org\nxz -cd linux-*.tar.xz | gpg2 --verify linux-*.tar.sign -\n")),(0,o.kt)("p",{parentName:"div"},"\u8bf4\u660e\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/signature.html"},"https://www.kernel.org/signature.html")))))}d.isMDXComponent=!0}}]);