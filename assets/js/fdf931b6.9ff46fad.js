"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[4601],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||l;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<l;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5018:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),c=["components"],a={},i=void 0,u={unversionedId:"dev/shell",id:"dev/shell",title:"shell",description:"\u4ee3\u7801\u683c\u5f0f\u5316",source:"@site/docs/dev/shell.md",sourceDirName:"dev",slug:"/dev/shell",permalink:"/geekbook/docs/dev/shell",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/shell.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"rust",permalink:"/geekbook/docs/dev/rust"},next:{title:"zeal",permalink:"/geekbook/docs/dev/zeal"}},p=[{value:"\u4ee3\u7801\u683c\u5f0f\u5316",id:"\u4ee3\u7801\u683c\u5f0f\u5316",children:[],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ee3\u7801\u683c\u5f0f\u5316"},"\u4ee3\u7801\u683c\u5f0f\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo dnf in -y shfmt\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-w")," \u53c2\u6570\u628a\u683c\u5f0f\u5316\u7ed3\u679c\u5199\u5165\u539f\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"shfmt -w <script>\n")),(0,l.kt)("p",null,"\u683c\u5f0f\u5316\u5f53\u524d\u76ee\u5f55\u6240\u6709\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"shfmt -w -l .\n")),(0,l.kt)("p",null,"VSCode \u6269\u5c55\u652f\u6301"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"code --install-extension foxundermoon.shell-format --force\n")))}f.isMDXComponent=!0}}]);