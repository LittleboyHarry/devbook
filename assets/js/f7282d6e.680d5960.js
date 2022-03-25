/*! For license information please see f7282d6e.680d5960.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[34],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7019:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7462),o=n(7294),i=n(4184),a=n.n(i),l="card_mJZ9",u="cardTitle_S5ri",c="logoSlot_epit";function p(e){var t=e.name,n=e.to,i=e.logo,p=e.newtab,s=e.label,d=e.onClick;return o.createElement("a",(0,r.Z)({className:a()("card",l),href:n||"#"},p&&{target:"_blank"},s&&{title:s},{onClick:d}),o.createElement("div",{className:c},i),o.createElement("p",{className:u,style:{textAlign:"center",marginBottom:"0.5rem"}},t))}p.Container=function(e){var t=e.children;return o.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t)}},1410:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(7019),l=["components"],u={title:"\u6982\u8ff0"},c=void 0,p={unversionedId:"linux/overview",id:"linux/overview",title:"\u6982\u8ff0",description:"\u672c\u624b\u518c\u5bf9\u7684 Linux \u9002\u7528\u8303\u56f4\uff1a",source:"@site/docs/linux/0-overview.md",sourceDirName:"linux",slug:"/linux/overview",permalink:"/geekbook/docs/linux/overview",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/0-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u6982\u8ff0"},sidebar:"getstarted",next:{title:"\u5b89\u88c5",permalink:"/geekbook/docs/linux/install"}},s=[{value:"\u4e0b\u8f7d\u83b7\u53d6",id:"\u4e0b\u8f7d\u83b7\u53d6",children:[],level:2},{value:"\u63a8\u8350\u786c\u4ef6",id:"\u63a8\u8350\u786c\u4ef6",children:[],level:2}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u624b\u518c\u5bf9\u7684 Linux \u9002\u7528\u8303\u56f4\uff1a\n\u4e0a\u7f51\u67e5\u8d44\u6599\u3001\u7b80\u5355\u591a\u5a92\u4f53\u5904\u7406\u3001\u7f16\u7a0b\u5f00\u53d1\u7b49\u65e5\u5e38\u7528\u9014\u3002\n( \u6e38\u620f\u9700\u6c42\u8bf7\u4f18\u5148\u8003\u8651\u88c5 Windows \u53cc\u7cfb\u7edf )"),(0,i.kt)("h2",{id:"\u4e0b\u8f7d\u83b7\u53d6"},"\u4e0b\u8f7d\u83b7\u53d6"),(0,i.kt)(a.Z.Container,null,(0,i.kt)(a.Z,{name:"Fedora",newtab:!0,label:"RPM \u7c7b Linux \u7cfb\u7edf",to:"https://getfedora.org/zh_Hans_CN/workstation/download/",logo:(0,i.kt)("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg"}),mdxType:"LogoCard"}),(0,i.kt)(a.Z,{name:"Ubuntu",newtab:!0,label:"Debian \u7c7b Linux \u7cfb\u7edf",to:"https://cn.ubuntu.com/download/desktop",logo:(0,i.kt)("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"}),mdxType:"LogoCard"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u5176\u4ed6\u684c\u9762\u7248\u672c\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://spins.fedoraproject.org/"},"https://spins.fedoraproject.org/")),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u5b9a\u5236\u7248\u5b89\u88c5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://getfedora.org/en/server/download/"},"https://getfedora.org/en/server/download/")),(0,i.kt)("h2",{id:"\u63a8\u8350\u786c\u4ef6"},"\u63a8\u8350\u786c\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PC \u5f53\u4eca\u7684\u4e3b\u6d41 CPU \u67b6\u6784: amd64 (x86_64)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u91c7\u7528 GPT \u5206\u533a\u683c\u5f0f\u3001\u652f\u6301 EFI \u542f\u52a8"),(0,i.kt)("p",{parentName:"li"},"\uff08 MBR \u5bf9\u591a\u5206\u533a\u9650\u5236\u975e\u5e38\u4e0d\u4fbf\uff0cBIOS \u4f20\u7edf\u542f\u52a8\u5bf9\u591a\u7cfb\u7edf\u542f\u52a8\u652f\u6301\u8fdc\u900a EFI \uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u975eN\u5361\u7c7b\u5f00\u6e90\u663e\u5361\uff08 N\u5361\u5b89\u88c5\u4f1a\u7a0d\u591a\u4e9b\u6b65\u9aa4 \uff09"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u6ce8\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ubuntu \u662f Debian \u540c\u6784\u54c1\uff0c\u5982\u65e0\u4f8b\u5916\u5219\uff0c\u4e24\u672f\u8bed\u7b49\u6548\u6216\u8fd1\u4f3c\u3002Fedora \u4e0e CentOS \u7b49\u540c\u7406")))}f.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);