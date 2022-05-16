"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[2009],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,d=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2782:function(e,n,t){t.d(n,{cA:function(){return d},Qj:function(){return f},Bp:function(){return p},YI:function(){return m}});var r=t(3117),o=t(7294),a=t(2814),i=t(1436),l=t(6010),c="linkButton_pNme",u="icon_TF3d";function m(e){var n=e.id,t=e.name;return o.createElement(d,{href:s(n)},o.createElement(a.G,{icon:i.Cdv}),"\xa0",t)}function p(e){var n=e.id,t=e.name;return o.createElement(f,{name:o.createElement(o.Fragment,null,o.createElement(a.G,{icon:i.Cdv,style:{margin:"0 0.5rem 0 -0.5rem"}}),t),href:s(n)})}function s(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function f(e){var n=e.name,t=e.href,m=e.outline,p=e.hint,s=e.attr,f=e.style,d=e.small,y=e.icon;return!0===y&&(y=o.createElement(a.G,{icon:i.g4A})),o.createElement("a",(0,r.Z)({href:t,className:(0,l.Z)(c,"button",!d&&"button--lg",m?"button--outline button--secondary":"button--primary"),title:p},s,{style:Object.assign({cursor:p?"help":"pointer",verticalAlign:"baseline"},f)}),y&&o.createElement("span",{className:u},y),n)}function d(e){var n=e.href,t=e.className,r=e.style,a=e.children;return o.createElement("a",{style:r,className:t,href:n},a)}},5413:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=(t(2782),["components"]),l={title:"PowerShell"},c=void 0,u={unversionedId:"manual/win/pwsh",id:"manual/win/pwsh",title:"PowerShell",description:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4",source:"@site/docs/manual/17-win/pwsh.md",sourceDirName:"manual/17-win",slug:"/manual/win/pwsh",permalink:"/devbook/docs/manual/win/pwsh",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/manual/17-win/pwsh.md",tags:[],version:"current",frontMatter:{title:"PowerShell"},sidebar:"manual",previous:{title:"\u5236\u4f5c\u7eff\u5316\u8f6f\u4ef6 (\u9ad8\u7ea7)",permalink:"/devbook/docs/manual/win/green"},next:{title:"\u4e07\u80fd\u5f15\u5bfc\u5668 refind",permalink:"/devbook/docs/manual/win/refind"}},m={},p=[{value:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4",id:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4",level:2}],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4"},"\u5185\u7f6e\u7684\u5b9e\u7528\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"r")," \u91cd\u590d\u4e0a\u4e00\u6761\u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"h")," \u5386\u53f2\u8bb0\u5f55\uff08\u5f53\u524d\u4f1a\u8bdd\uff09")))}f.isMDXComponent=!0}}]);