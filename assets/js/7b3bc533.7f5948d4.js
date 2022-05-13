"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[6331],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,u(u({ref:r},s),{},{components:t})):n.createElement(m,u({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},569:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),u=["components"],c={title:"for Arch"},i=void 0,l={unversionedId:"linux/mustdo/for-arch",id:"linux/mustdo/for-arch",title:"for Arch",description:"zsh",source:"@site/docs/linux/10-mustdo/4-for-arch.md",sourceDirName:"linux/10-mustdo",slug:"/linux/mustdo/for-arch",permalink:"/geekbook/docs/linux/mustdo/for-arch",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/10-mustdo/4-for-arch.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"for Arch"},sidebar:"linux",previous:{title:"\u521d\u59cb\u4f18\u5316",permalink:"/geekbook/docs/linux/mustdo/getstarted"},next:{title:"for Fedora",permalink:"/geekbook/docs/linux/mustdo/for-fedora"}},s={},p=[{value:"zsh",id:"zsh",level:2},{value:"AUR \u52a9\u624b",id:"aur-\u52a9\u624b",level:2}],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"zsh"},"zsh"),(0,a.kt)("p",null,"\u4e3a\u627e\u4e0d\u5230\u7684\u547d\u4ee4\u67e5\u8be2\u53ef\u80fd\u5339\u914d\u7684\u5305\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S pkgfile\nsudo pkgfile -u\necho source /usr/share/doc/pkgfile/command-not-found.zsh >> ~/.zshrc\nexec zsh\n")),(0,a.kt)("h2",{id:"aur-\u52a9\u624b"},"AUR \u52a9\u624b"),(0,a.kt)("p",null,"\u7f51\u7ea2\u5de5\u5177 paru \u63a8\u8350\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S --needed base-devel\ngit clone https://aur.archlinux.org/paru.git\ncd paru\nmakepkg -si\n")))}d.isMDXComponent=!0}}]);