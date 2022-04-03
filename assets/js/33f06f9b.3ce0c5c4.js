"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[8743],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3072:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"\u5b89\u88c5"},p=void 0,s={unversionedId:"linux/install",id:"linux/install",title:"\u5b89\u88c5",description:"\u955c\u50cf\u6821\u9a8c",source:"@site/docs/linux/1-install.md",sourceDirName:"linux",slug:"/linux/install",permalink:"/geekbook/docs/linux/install",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/1-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5b89\u88c5"},sidebar:"getstarted",previous:{title:"\u6982\u8ff0",permalink:"/geekbook/docs/linux/overview"},next:{title:"\u8c03\u4f18",permalink:"/geekbook/docs/linux/optimize"}},m=[{value:"\u955c\u50cf\u6821\u9a8c",id:"\u955c\u50cf\u6821\u9a8c",children:[],level:2},{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[],level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",children:[],level:2},{value:"\u9996\u6b21\u8fd0\u884c",id:"\u9996\u6b21\u8fd0\u884c",children:[{value:"\u7b2c\u4e00\u6b65\uff1a\u5907\u4efd",id:"\u7b2c\u4e00\u6b65\u5907\u4efd",children:[],level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u66f4\u65b0\u7cfb\u7edf",id:"\u7b2c\u4e8c\u6b65\u66f4\u65b0\u7cfb\u7edf",children:[],level:3}],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u955c\u50cf\u6821\u9a8c"},"\u955c\u50cf\u6821\u9a8c"),(0,i.kt)("p",null,"Fedora"),(0,i.kt)("p",null,"\u6307\u7eb9\u9a8c\u8bc1\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://getfedora.org/zh_Hans_CN/security/"},"https://getfedora.org/zh_Hans_CN/security/")),(0,i.kt)("p",null,"\u6240\u6709\u54c8\u5e0c\u7801\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums"},"https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums")),(0,i.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,i.kt)("p",null,":::warn \u5b89\u88c5\u524d\uff0c\u52a1\u5fc5\u6821\u9a8c\u7cfb\u7edf\u955c\u50cf\u7684\u5b8c\u6574\u6027"),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ventoy.net/cn/download.html"},"Ventoy"),":\n\u591a\u7cfb\u7edf\u955c\u50cf\u652f\u6301\u7684\u542f\u52a8\u76d8\u5236\u4f5c\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scoop install ventoy\n")),(0,i.kt)("p",null,"\u5c11\u6570\u5176\u5b83\u53d1\u884c\u7248\u4ec5\u652f\u6301\u5355\u4e00\u542f\u52a8\u76d8\u5236\u4f5c\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scoop install rufus\n")),(0,i.kt)("p",null,"\u82e5\u5728\u7ebf\u5b89\u88c5\uff0c\u9700\u8981\u6709\u7ebf\u7f51\u6216\u5df2\u77e5 WiFi \u5bc6\u7801\uff0c\u5176\u5b83\u7279\u7528\u7f51\u7edc\u5de5\u5177\u81ea\u5907"),(0,i.kt)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u9632\u7b14\u8bb0\u672c\u4e22\u5931\u5bfc\u81f4\u6570\u636e\u6cc4\u9732\uff0c\u5efa\u8bae\u5168\u76d8\u52a0\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5206\u533a\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a Windows \u7cfb\u7edf\u5206\u533a\u540e\u90fd\u4fdd\u7559\u7740\u4e00\u4e2a MSR \u6062\u590d\u5206\u533a\uff0c\u5fae\u8f6f\u5efa\u8bae\u4e0d\u8981\u5220\u9664"),(0,i.kt)("li",{parentName:"ul"},"Fedora \u624b\u52a8\u5206\u533a\u65f6\uff0c\u4e3a\u652f\u6301\u591a\u7cfb\u7edf\u542f\u52a8\uff0c\u5fc5\u987b\u8f7d\u5165 EFI \u5206\u533a\u4ee5\u5237\u5165\u542f\u52a8\u9879"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5206\u533a\u96be\u4ee5\u52a0\u5bc6\uff0c\u5168\u76d8\u52a0\u5bc6\u524d\u5fc5\u987b\u989d\u5916\u5212\u5b9a /boot \u5206\u533a\u5e76\u6302\u8f7d"))),(0,i.kt)("li",{parentName:"ul"},"\u82e5\u5b89\u88c5\u524d\u624b\u52a8\u6302\u8f7d\u8fc7\u4efb\u4f55\u786c\u76d8\u5206\u533a\uff0c\u9700\u5148\u5378\u8f7d"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e13\u4e1a\u7528\u6237\u800c\u8a00 Ubuntu \u4f18\u5148\u9009\u62e9\u6700\u5c0f\u5316\u5b89\u88c5\uff0c\u901f\u5ea6\u66f4\u5feb"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\u4e0d\u5efa\u8bae\u592a\u957f\uff0c\u907f\u514d\u65e5\u540e\u8f93\u5165\u547d\u4ee4\u884c\u7684\u9ebb\u70e6")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5efa\u8bae")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4fdd\u7559\u597d LiveCD U \u76d8\uff0c\u4ee5\u4fbf\u65e5\u540e\u4e4b\u9700"))),(0,i.kt)("h2",{id:"\u9996\u6b21\u8fd0\u884c"},"\u9996\u6b21\u8fd0\u884c"),(0,i.kt)("p",null,"\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u6e90\u542b\u6709\uff1aN \u5361\u9a71\u52a8\u3001Chrome \u6d4f\u89c8\u5668\u3001PyCharm\u3001Steam\u3002\u6309\u9700\u5f00\u542f\u3002\n\u7a0d\u540e\u53ef\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"gnome-software")," \u4e2d\u83dc\u5355\u7684\u8f6f\u4ef6\u4ed3\u5e93\u9875\u5c3e\u5904\u7981\u7528\u7b2c\u4e09\u65b9\u6e90\uff0c\u4ee5\u907f\u514d\u591a\u4f59\u8017\u65f6\u7684\u7f51\u7edc\u8bf7\u6c42"),(0,i.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\u7684\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GNOME: \u70b9\u51fb\u5de6\u4e0a\u89d2 \u201c\u6d3b\u52a8\u201d \u6309\u94ae\uff0c\u8f93\u5165 \u201cterminal\u201d \u6253\u5f00"),(0,i.kt)("li",{parentName:"ul"},"KDE: \u5f00\u59cb\u83dc\u5355\uff0c\u9009\u62e9 \u201cKonsole\u201d")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4f5c\u8005\u7559\u8a00")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 GNOME \u4e2d\uff0c\u6309\u4f4f Super \u952e + \u9f20\u6807\u6eda\u8f6e\u53ef\u4ee5\u5207\u6362\u5de5\u4f5c\u533a\uff0c\u4ee5\u65b9\u4fbf\u6574\u7406\u591a\u5e94\u7528\u7a97\u53e3"),(0,i.kt)("p",{parentName:"div"},"\u53ef\u9009\u7684\u4f18\u5316\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:"/docs/dev/keymap"},"\u952e\u4f4d\u91cd\u6620\u5c04\u8c03\u6574"),(0,i.kt)("p",{parentName:"li"},"\u9700\u8981\u4e00\u6bb5\u9002\u5e94\u65f6\u95f4\u4ee5\u63d0\u9ad8\u64cd\u4f5c\u6548\u7387")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63a8\u8350 ",(0,i.kt)("a",{target:"_blank",href:"/docs/dev/zsh"},"\u4f7f\u7528 Zsh \u4f5c\u4e3a\u9ed8\u8ba4 Shell"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63a8\u8350 ",(0,i.kt)("a",{target:"_blank",href:"/docs/browser/edge-for-linux"},"\u4f7f\u7528\u5fae\u8f6f Edge \u6d4f\u89c8\u5668")))))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5907\u4efd"},"\u7b2c\u4e00\u6b65\uff1a\u5907\u4efd"),(0,i.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\u5907\u4efd\u7cfb\u7edf\u9ed8\u8ba4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir backup && cd backup\nsudo tar cpzf etc.tar.gz /etc\n")),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u66f4\u65b0\u7cfb\u7edf"},"\u7b2c\u4e8c\u6b65\uff1a\u66f4\u65b0\u7cfb\u7edf"),(0,i.kt)("div",{className:"let-tipbg-to-yellow no-admonition-uppercase-title"},(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7b80\u6613\u7684 Ubuntu \u56fe\u5f62\u5316\u64cd\u4f5c")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00 \u201c\u8f6f\u4ef6\u548c\u66f4\u65b0\u201d ( \u641c\u7d22\u5173\u952e\u8bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"sof")," )\uff0c\u9009\u62e9\u5408\u9002\u7684\u4e0b\u8f7d\u6e90"),(0,i.kt)("p",{parentName:"li"},"Ubuntu \u4e0b\u8f7d -> \u4e0b\u8f7d\u81ea ( \u9ed8\u8ba4\u201c\u4e2d\u56fd\u7684\u670d\u52a1\u5668\u201d\u6307\u7684\u662f cn.archive.ubuntu.com )")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00 \u201c\u8f6f\u4ef6\u66f4\u65b0\u5668\u201d ( \u641c\u7d22\u5173\u952e\u8bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"upd")," ) \u66f4\u65b0\u7cfb\u7edf"))),(0,i.kt)("p",{parentName:"div"},"\u5176\u5b83\u7cfb\u7edf\u89c1\u4e0b\u6587\uff0c\u4ee5 Fedora \u4e3a\u4f8b\uff1a")))),(0,i.kt)("p",null,"\u6fc0\u6d3b\u955c\u50cf\u6e90\uff0c\u52a0\u901f\u4e0b\u8f7d",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "fastestmirror=1" | sudo tee -a /etc/dnf/dnf.conf > /dev/null\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0d\u9700\u8981\u7684\u66f4\u65b0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5982\u679c\u4e0d\u9700\u8981\u5f00\u6e90\u7248 office\nsudo dnf remove libreoffice*\n")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u4fdd\u6301\u7f51\u7edc\u7545\u901a\uff0c\u5b89\u88c5\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u907f\u514d\u5176\u5b83\u64cd\u4f5c\u3001\u5f85\u5176\u5b8c\u6210\u540e\u81ea\u52a8\u91cd\u542f",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("p",null,"\u65b9\u6cd5\u4e00\uff1a\u901a\u8fc7\u547d\u4ee4\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo dnf upgrade -y\n")),(0,i.kt)("p",null,"\u65b9\u6cd5\u4e8c\uff1a"),(0,i.kt)("p",null,"\u6253\u5f00 GNOME \u8f6f\u4ef6\u4e2d\u5fc3\u66f4\u65b0"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"\u82e5\u955c\u50cf\u7ad9\u53d1\u751f\u6545\u969c\uff0c\u53ef\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," \u5c06\u5176\u57df\u540d\u5c4f\u853d ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"\u82e5\u53d1\u751f Linux \u5185\u6838\u6545\u969c\uff0c\u8bf7\u770b",(0,i.kt)("a",{parentName:"li",href:"./kernel"},"\u5185\u6838\u95ee\u9898"),"\u6587\u6863",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);