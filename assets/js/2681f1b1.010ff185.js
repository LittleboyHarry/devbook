"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9169],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,s=d["".concat(c,".").concat(f)]||d[f]||v[f]||o;return r?n.createElement(s,a(a({ref:t},p),{},{components:r})):n.createElement(s,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2048:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"libvirt",tags:["Fedora"]},c=void 0,u={unversionedId:"dev/virtual/libvirt",id:"dev/virtual/libvirt",title:"libvirt",description:"libvirt",source:"@site/docs/dev/64-virtual/2-libvirt.md",sourceDirName:"dev/64-virtual",slug:"/dev/virtual/libvirt",permalink:"/geekbook/docs/dev/virtual/libvirt",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/64-virtual/2-libvirt.md",tags:[{label:"Fedora",permalink:"/geekbook/docs/tags/fedora"}],version:"current",sidebarPosition:2,frontMatter:{title:"libvirt",tags:["Fedora"]},sidebar:"dev",previous:{title:"VirtualBox",permalink:"/geekbook/docs/dev/virtual/virtualbox"},next:{title:"Vagrant",permalink:"/geekbook/docs/dev/virtual/vagrant"}},p=[{value:"libvirt",id:"libvirt",children:[],level:2}],v={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"libvirt"},"libvirt"),(0,o.kt)("p",null,"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo dnf in -y @virtualization\n")))}d.isMDXComponent=!0}}]);