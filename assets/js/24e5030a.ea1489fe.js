/*! For license information please see 24e5030a.ea1489fe.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[4551],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5441:function(e,t,n){"use strict";n.d(t,{T6:function(){return m},nT:function(){return f},rg:function(){return d},Rm:function(){return u}});var r=n(7294),a=n(4184),i=n.n(a),o="choice_9LTZ",l=n(2389),c="custom.preferPkgMgr",p=(0,r.createContext)({active:"dnf",setActive:function(e){},options:{}});function u(e){var t=e.apt,n=e.dnf,a=e.children,i=(0,l.Z)(),o=(0,r.useState)("dnf"),u=o[0],s=o[1];return(0,r.useEffect)((function(){i&&s(window.localStorage.getItem(c))}),[i]),r.createElement(p.Provider,{value:{active:u,setActive:function(e){window.localStorage.setItem(c,e),s(e)},options:{apt:t,dnf:n}}},a)}function s(e){var t=e.test,n=e.type,a=e.label,l=(0,r.useContext)(p),c=l.active,u=l.setActive,s=c===n;return t&&r.createElement("label",{className:i()(o,"pills__item",s&&"pills__item--active")},r.createElement("input",{type:"radio",value:n,name:"prefer-pkgmgr",checked:s,onChange:function(e){var t=e.target.value;return u(t)}}),a)}function d(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=(0,r.useContext)(p).options,n=t.apt,a=t.dnf;return r.createElement("div",{className:"pills pills--block",style:{marginBottom:"1rem"}},r.createElement(s,{test:n,type:"apt",label:"apt"}),r.createElement(s,{test:a,type:"dnf",label:"dnf"}))}function m(e){var t=e.children;return"apt"===(0,r.useContext)(p).active&&t}function f(e){var t=e.children;return"dnf"===(0,r.useContext)(p).active&&t}},5816:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5441),l=["components"],c={title:"\u5305\u7ba1\u7406\u5668"},p=void 0,u={unversionedId:"linux/pkgmgr",id:"linux/pkgmgr",title:"\u5305\u7ba1\u7406\u5668",description:"\x3c!--",source:"@site/docs/linux/64-pkgmgr.md",sourceDirName:"linux",slug:"/linux/pkgmgr",permalink:"/geekbook/docs/linux/pkgmgr",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/64-pkgmgr.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{title:"\u5305\u7ba1\u7406\u5668"},sidebar:"getstarted",previous:{title:"flatpak",permalink:"/geekbook/docs/linux/flatpak"},next:{title:"\u9632\u706b\u5899",permalink:"/geekbook/docs/linux/firewall"}},s=[{value:"dpkg",id:"dpkg",children:[{value:"\u56fe\u5f62\u5316\u52a9\u624b synaptic",id:"\u56fe\u5f62\u5316\u52a9\u624b-synaptic",children:[],level:3}],level:2},{value:"RPM",id:"rpm",children:[{value:"\u7ec4\u7ba1\u7406",id:"\u7ec4\u7ba1\u7406",children:[],level:3},{value:"\u5305\u964d\u7ea7",id:"\u5305\u964d\u7ea7",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Rm,{dnf:!0,apt:!0,mdxType:"PreferPkgMgrScope"},(0,i.kt)(o.rg,{mdxType:"PkgMgrSelector"}),(0,i.kt)(o.T6,{mdxType:"ForApt"},(0,i.kt)("h2",{id:"dpkg"},"dpkg"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u65e5\u5fd7\u8bb0\u5f55")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"less /var/log/dpkg.log\n")))),(0,i.kt)("h3",{id:"\u56fe\u5f62\u5316\u52a9\u624b-synaptic"},"\u56fe\u5f62\u5316\u52a9\u624b synaptic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt install -y synaptic\n"))),(0,i.kt)(o.nT,{mdxType:"ForDnf"},(0,i.kt)("h2",{id:"rpm"},"RPM"),(0,i.kt)("p",null,"\u4e0b\u8f7d\u5347\u7ea7\uff0c\u7f13\u5b58\u4ee5\u5907\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dnf upgrade --downloadonly\n")),(0,i.kt)("p",null,"\u5217\u51fa\u914d\u7f6e\u72b6\u6001\uff0c\u65b9\u4fbf\u8c03\u8bd5\u6216\u5bfc\u51fa\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dnf config-manager --dump\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u8fdc\u7a0b\u8f6f\u4ef6\u4ed3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u679a\u4e3e"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"dnf repolist\n")),(0,i.kt)("p",{parentName:"div"},"\u7981\u7528"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"sudo dnf config-manager --set-disabled <repo>\n")))),(0,i.kt)("h3",{id:"\u7ec4\u7ba1\u7406"},"\u7ec4\u7ba1\u7406"),(0,i.kt)("p",null,"\u5217\u51fa\u5305\u7ec4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dnf grouplist --ids\n")),(0,i.kt)("h3",{id:"\u5305\u964d\u7ea7"},"\u5305\u964d\u7ea7"),(0,i.kt)("p",null,"\u53ef\u907f\u514d\u8f6f\u4ef6\u65b0\u7248\u51fa\u73b0\u7684 bug\uff0c\u6458\u6284\u81ea\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/q/266888"},"https://unix.stackexchange.com/q/266888")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf downgrade <package>\n\n# \u65b9\u6cd5\u4e8c\uff1a\n\n# \u5217\u51fa\u5176\u5b83\u53ef\u7528\u7248\u672c\ndnf --showduplicates list <package>\n\nsudo dnf install <package>-<version>\n")))))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);