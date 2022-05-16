"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[2148],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),b=o,f=m["".concat(u,".").concat(b)]||m[b]||p[b]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},452:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={title:"\u6dfb\u52a0 homebrew"},u=void 0,l={unversionedId:"setup-linux/recommend/homebrew",id:"setup-linux/recommend/homebrew",title:"\u6dfb\u52a0 homebrew",description:"\u5b89\u88c5\uff1a",source:"@site/docs/setup-linux/32-recommend/3-homebrew.md",sourceDirName:"setup-linux/32-recommend",slug:"/setup-linux/recommend/homebrew",permalink:"/devbook/docs/setup-linux/recommend/homebrew",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/setup-linux/32-recommend/3-homebrew.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6dfb\u52a0 homebrew"},sidebar:"setupLinux",previous:{title:"\u8bbe\u5907\u9002\u914d",permalink:"/devbook/docs/setup-linux/device"},next:{title:"flatpak",permalink:"/devbook/docs/setup-linux/recommend/flatpak"}},s={},p=[],m={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b89\u88c5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.kt)("p",null,"\u4f7f\u7528\u963f\u91cc\u4e91\u955c\u50cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' | tee -a ~/.bash_profile ~/.zshrc\nexec $SHELL\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/brew.git"\nexport HOMEBREW_CORE_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/homebrew-core.git"\n\n/bin/bash -c "$(curl -fsSL https://gitcode.net/mirrors/Homebrew/install/-/raw/master/install.sh)"\n')),(0,i.kt)("p",null,"\u5b89\u88c5\u540e\u8bf7\u7559\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"==> Installation successful!")," \u4e0b\u65b9\u7684\u63d0\u793a\u4fe1\u606f"))}b.isMDXComponent=!0}}]);