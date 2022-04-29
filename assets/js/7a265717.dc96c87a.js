/*! For license information please see 7a265717.dc96c87a.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9598],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),s=n(6010),c="tabItem_vU9c";function p(e){var t,n,o,l=e.lazy,p=e.block,f=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,r.useState)(g),E=N[0],T=N[1],Z=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=w[m];null!=C&&C!==E&&b.some((function(e){return e.value===C}))&&T(C)}var D=function(e){var t=e.currentTarget,n=Z.indexOf(t),a=b[n].value;a!==E&&(P(t),T(a),null!=m&&x(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;n=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;n=Z[r]||Z[Z.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:I,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function f(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(6396),o=n(8215),l=n(9055),i=n(4184),u=n.n(i),s="root_63Tw";function c(e){var t=e.items,n=e.expression,r=e.key,i=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(o.Z,{attributes:{title:u},key:r,value:r,label:i},a.createElement(l.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function p(e){var t,n=e.name,o=e.dnf,l=e.apt,i=e.scoop,p=e.choco,f=e.winget,d=e.pacman,m=e.pipx,v=e.yarn,h=e.longBanner,b=(t=[],l&&t.push("apt"),o&&t.push("dnf"),i&&t.push("scoop"),f&&t.push("winget"),d&&t.push("pacman"),m&&t.push("pipx"),v&&t.push("yarn"),"getpkg-"+t.join("&")),k=[];return c({items:k,expression:l,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo apt install -y"}),c({items:k,expression:o,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo dnf install -y"}),c({items:k,expression:i,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"scoop install"}),c({items:k,expression:p,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"choco install"}),c({items:k,expression:f,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"winget install"}),c({items:k,expression:d,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),c({items:k,expression:m,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:n,prefix:"pipx install"}),c({items:k,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"yarn global add"}),a.createElement(r.Z,{className:u()(h&&"tabs--block",s),groupId:b},k)}},6080:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(7717),i=["components"],u={title:"\u7535\u5b50\u90ae\u4ef6"},s=void 0,c={unversionedId:"software/email",id:"software/email",title:"\u7535\u5b50\u90ae\u4ef6",description:"\u63a8\u8350 Mozilla \u51fa\u54c1\u7684\u901a\u7528\u5ba2\u6237\u7aef",source:"@site/docs/software/email.md",sourceDirName:"software",slug:"/software/email",permalink:"/geekbook/docs/software/email",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/software/email.md",tags:[],version:"current",frontMatter:{title:"\u7535\u5b50\u90ae\u4ef6"},sidebar:"software",previous:{title:"\u8bcd\u5178",permalink:"/geekbook/docs/software/dictionary"}},p=[{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",children:[],level:2}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u63a8\u8350 Mozilla \u51fa\u54c1\u7684\u901a\u7528\u5ba2\u6237\u7aef"),(0,o.kt)(l.Z,{name:"thunderbird",dnf:!0,winget:!0,mdxType:"GetPkg"}),(0,o.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u5bbd\u5c4f\u63a8\u8350\uff1a\u83dc\u5355 -> \u67e5\u770b -> \u5e03\u5c40 -> \u76f4\u89c6\u56fe"))}d.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);