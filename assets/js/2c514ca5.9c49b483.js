"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[2943],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],u={title:"VirtualBox \u7684\u4f7f\u7528"},l=void 0,c={unversionedId:"manual/win/vbox",id:"manual/win/vbox",title:"VirtualBox \u7684\u4f7f\u7528",description:"Windows PATH \u6dfb\u52a0\uff1a",source:"@site/docs/manual/17-win/vbox.md",sourceDirName:"manual/17-win",slug:"/manual/win/vbox",permalink:"/devbook/docs/manual/win/vbox",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/manual/17-win/vbox.md",tags:[],version:"current",frontMatter:{title:"VirtualBox \u7684\u4f7f\u7528"},sidebar:"manual",previous:{title:"\u622a\u56fe\u8bc6\u5b57 tesseract",permalink:"/devbook/docs/manual/win/tesseract"},next:{title:"VirtualBox \u4e91\u955c\u50cf",permalink:"/devbook/docs/manual/win/vboximg"}},p={},s=[{value:"\u81ea\u52a8\u5316\u547d\u4ee4",id:"\u81ea\u52a8\u5316\u547d\u4ee4",level:2},{value:"\u5feb\u7167\u7ba1\u7406",id:"\u5feb\u7167\u7ba1\u7406",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Windows PATH \u6dfb\u52a0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'shim "C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe"\n')),(0,a.kt)("h2",{id:"\u81ea\u52a8\u5316\u547d\u4ee4"},"\u81ea\u52a8\u5316\u547d\u4ee4"),(0,a.kt)("p",null,"\u5217\u51fa\u865a\u62df\u673a\u540d\u79f0\u548c uuid"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vboxmanage list vms\n")),(0,a.kt)("h2",{id:"\u5feb\u7167\u7ba1\u7406"},"\u5feb\u7167\u7ba1\u7406"),(0,a.kt)("p",null,"\u7167\u76f8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vboxmanage snapshot <uuid|vmname> take <snapshot-name>\nvboxmanage snapshot <uuid|vmname> take <snapshot-name> [--live]\n")),(0,a.kt)("p",null,"\u6062\u590d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vboxmanage snapshot <uuid|vmname> restorecurrent\n")))}d.isMDXComponent=!0}}]);