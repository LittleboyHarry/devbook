"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[6870],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6313:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"GNOME \u9876\u680f"},s=void 0,c={unversionedId:"linux/gnome/panel",id:"linux/gnome/panel",title:"GNOME \u9876\u680f",description:"\u4f18\u5316",source:"@site/docs/linux/17-gnome/11-panel.md",sourceDirName:"linux/17-gnome",slug:"/linux/gnome/panel",permalink:"/geekbook/docs/linux/gnome/panel",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/17-gnome/11-panel.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"GNOME \u9876\u680f"},sidebar:"getstarted",previous:{title:"GNOME \u8c03\u4f18",permalink:"/geekbook/docs/linux/gnome/optimize"},next:{title:"GNOME \u5916\u89c2",permalink:"/geekbook/docs/linux/gnome/theme"}},p=[{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[],level:2},{value:"\u6269\u5c55\u63a8\u8350",id:"\u6269\u5c55\u63a8\u8350",children:[{value:"\u6258\u76d8\u56fe\u6807",id:"\u6258\u76d8\u56fe\u6807",children:[],level:3},{value:"Just Perfection",id:"just-perfection",children:[],level:3},{value:"Hot Corners",id:"hot-corners",children:[],level:3},{value:"\u9690\u85cf\u6807\u9898\u680f",id:"\u9690\u85cf\u6807\u9898\u680f",children:[],level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,a.kt)("p",null,"\u663e\u793a\u7535\u91cf\u767e\u5206\u6bd4\u3001\u661f\u671f\u51e0\u3001\u5468\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/desktop/\n[interface]\nshow-battery-percentage=true\nclock-show-weekday=true\n\n[calendar]\nshow-weekdate=true\nEND\n")),(0,a.kt)("h2",{id:"\u6269\u5c55\u63a8\u8350"},"\u6269\u5c55\u63a8\u8350"),(0,a.kt)("h3",{id:"\u6258\u76d8\u56fe\u6807"},"\u6258\u76d8\u56fe\u6807"),(0,a.kt)("p",null,"\u975e Ubuntu \u7cfb\u7edf\u8bf7\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/615/appindicator-support/"},"\u652f\u6301\u6269\u5c55"),"\uff0c\u4f5c\u8005\u504f\u597d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/appindicator/\n[/]\nicon-size=24\ntray-pos='left'\nEND\n")),(0,a.kt)("h3",{id:"just-perfection"},(0,a.kt)("a",{parentName:"h3",href:"https://extensions.gnome.org/extension/3843/just-perfection/"},"Just Perfection")),(0,a.kt)("p",null,"\u53ef\u8c03\u5404\u79cd\u7ec6\u8282\uff0c\u63a8\u8350\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u539f\u5728\u4e2d\u95f4\u5f39\u51fa\u7684\u901a\u77e5\u4fe1\u606f\u56fa\u5b9a\u5728\u53f3\u8fb9\u4f4d\u7f6e\ndconf write /org/gnome/shell/extensions/just-perfection/notification-banner-position 2\n\n# \u9690\u85cf\u4f5c\u7528\u4e0d\u5927\u7684\u5e94\u7528\u83dc\u5355\ndconf write /org/gnome/shell/extensions/just-perfection/app-menu false\n\n# \u81ea\u52a8\u5207\u6362\u81f3\u540e\u53f0\u65b0\u4ea7\u751f\u7684\u7a97\u53e3\ndconf write /org/gnome/shell/extensions/just-perfection/window-demands-attention-focus true\n\n# \u8c03\u4f4e\u9876\u680f\u5bf9\u5c4f\u5e55\u7a7a\u95f4\u7684\u5360\u7528\ndconf write /org/gnome/shell/extensions/just-perfection/panel-size 36\n")),(0,a.kt)("details",{className:"let-details-to-gray"},(0,a.kt)("summary",null,"\u628a\u9876\u680f\u7f6e\u4e8e\u5c4f\u5e55\u4e0b\u65b9"),(0,a.kt)("p",null,"\u7f3a\u70b9: \u53ef\u80fd\u5bfc\u81f4\u201c\u9876\u680f\u8d85\u957f\u83dc\u5355\u680f\u65e0\u6cd5\u663e\u793a\u201d \u7684 BUG\uff0c\u614e\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dconf write /org/gnome/shell/extensions/just-perfection/top-panel-position 1\n"))),(0,a.kt)("h3",{id:"hot-corners"},"Hot Corners"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u9f20\u6807\u5de6\u4e0a\u89d2\u60ac\u505c\u4f1a\u89e6\u53d1\u201c\u6982\u89c8\u89c6\u56fe\u201d")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Fedora \u521d\u59cb\u5df2\u6fc0\u6d3b\u8be5\u529f\u80fd\uff0c\u82e5\u8981\u7981\u7528\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"gsettings set org.gnome.desktop enable-hot-corners false\n")),(0,a.kt)("p",{parentName:"div"},"Ubuntu \u9ed8\u8ba4\u5df2\u5c4f\u853d\u8be5\u529f\u80fd\u3002\u82e5\u8981\u542f\u7528\u8be5\u529f\u80fd\uff0c\u9700\u8981\u6dfb\u52a0\u4e0a\u8ff0 Just Perfection \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"dconf write /org/gnome/shell/extensions/just-perfection/hot-corner true\n")))),(0,a.kt)("h3",{id:"\u9690\u85cf\u6807\u9898\u680f"},"\u9690\u85cf\u6807\u9898\u680f"),(0,a.kt)("p",null,"\u652f\u6301\u90e8\u5206\u5e94\u7528\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/723/pixel-saver/"},"Pixel Saver")," \u6269\u5c55\uff0c\n\u524d\u7f6e\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo dnf in -y xprop\n")),(0,a.kt)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5e38\u7528\u6587\u4ef6\u5939\u83dc\u5355")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/8/places-status-indicator/"},"Places Status Indicator")," ( Fedora \u81ea\u5e26 )"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"gnome-extensions enable places-menu@gnome-shell-extensions.gcampax.github.com\n")))))}u.isMDXComponent=!0}}]);