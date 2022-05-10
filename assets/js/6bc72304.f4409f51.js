"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5867],{2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(6010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),i=n(2389),o=n(7392),r=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,m=e.block,v=e.defaultValue,k=e.values,h=e.groupId,f=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===v?v:null!=(t=null!=v?v:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==x&&!g.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,r.U)(),N=w.tabGroupChoices,P=w.setTabGroupChoices,T=(0,l.useState)(x),Z=T[0],E=T[1],G=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=N[h];null!=S&&S!==Z&&g.some((function(e){return e.value===S}))&&E(S)}var M=function(e){var t=e.currentTarget,n=G.indexOf(t),a=g[n].value;a!==Z&&(D(t),E(a),null!=h&&P(h,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=G.indexOf(e.currentTarget)+1;n=G[a]||G[0];break;case"ArrowLeft":var l=G.indexOf(e.currentTarget)-1;n=G[l]||G[G.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return G.push(e)},onKeyDown:C,onFocus:M,onClick:M},i,{className:(0,u.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),p?(0,l.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),l=n(9877),i=n(2360),o=n(5710),r=n(6010),s="root_WbTl",u="sole_DVUS";function c(e){var t=e.items,n=e.expression,l=e.key,r=e.label,s=e.hint,u=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(i.Z,{attributes:{title:s},key:l,value:l,label:r},a.createElement(o.Z,{className:"language-shell"},c+" "+(!0===n?u:n))))}function d(e){var t=e.name,n=e.choco,i=e.scoop,o=e.winget,d=e.flatpak,p=e.apt,m=e.pacman,v=e.dnf,k=e.pipx,h=e.yarn,f=e.longBanner,b=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),i&&e.push("scoop"),o&&e.push("winget"),d&&e.push("flatpak"),p&&e.push("apt"),m&&e.push("pacman"),v&&e.push("dnf"),k&&e.push("pipx"),h&&e.push("yarn"),"getpkg-"+e.join("&")}),[p,v,i,o,m,k,h]),g=[];if(c({items:g,expression:d,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),c({items:g,expression:p,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),c({items:g,expression:v,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),c({items:g,expression:i,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),c({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),c({items:g,expression:o,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),c({items:g,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),c({items:g,expression:k,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),c({items:g,expression:h,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:u},g[0]):a.createElement(l.Z,{className:(0,r.Z)(f&&"tabs--block",s),groupId:b},g)}},7764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),l=n(102),i=(n(7294),n(3905)),o=n(7717),r=["components"],s={title:"Sysinternals"},u=void 0,c={unversionedId:"win/dev/sysinternals",id:"win/dev/sysinternals",title:"Sysinternals",description:"\u7531\u5fae\u8f6f\u51fa\u54c1\u7684\u4e00\u7ec4\u7528\u4e8e Windows \u7684\u4e13\u4e1a\u5c0f\u7a0b\u5e8f\u3002\u89c1\u5b98\u65b9\u6587\u6863",source:"@site/docs/win/22-dev/64-sysinternals.md",sourceDirName:"win/22-dev",slug:"/win/dev/sysinternals",permalink:"/geekbook/docs/win/dev/sysinternals",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/win/22-dev/64-sysinternals.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{title:"Sysinternals"},sidebar:"win",previous:{title:"SDK \u5b89\u88c5 by scoop",permalink:"/geekbook/docs/win/dev/scoop-sdk"},next:{title:"AltSnap",permalink:"/geekbook/docs/win/dev/altsnap"}},d={},p=[{value:"\u7ba1\u7406\u9762\u677f\u7c7b",id:"\u7ba1\u7406\u9762\u677f\u7c7b",level:2},{value:"\u81ea\u52a8\u52a0\u8f7d\u7ba1\u7406",id:"\u81ea\u52a8\u52a0\u8f7d\u7ba1\u7406",level:3},{value:"\u8fdb\u7a0b\u7ba1\u7406\u5668",id:"\u8fdb\u7a0b\u7ba1\u7406\u5668",level:3},{value:"\u76d1\u63a7\u89c6\u56fe\u7c7b",id:"\u76d1\u63a7\u89c6\u56fe\u7c7b",level:2},{value:"\u8fdb\u7a0b\u76d1\u63a7\u5668",id:"\u8fdb\u7a0b\u76d1\u63a7\u5668",level:3},{value:"TCP \u8fde\u63a5\u76d1\u63a7",id:"tcp-\u8fde\u63a5\u76d1\u63a7",level:3},{value:"\u5b9e\u7528\u5de5\u5177\u7c7b",id:"\u5b9e\u7528\u5de5\u5177\u7c7b",level:2},{value:"\u81ea\u52a8\u767b\u5f55\u5668",id:"\u81ea\u52a8\u767b\u5f55\u5668",level:3},{value:"\u865a\u62df\u684c\u9762",id:"\u865a\u62df\u684c\u9762",level:3},{value:"\u547d\u4ee4\u5de5\u5177\u7c7b",id:"\u547d\u4ee4\u5de5\u5177\u7c7b",level:2},{value:"\u6ce8\u518c\u8868\u8df3\u8f6c",id:"\u6ce8\u518c\u8868\u8df3\u8f6c",level:3},{value:"\u5b89\u5168\u64e6\u9664\u6587\u4ef6",id:"\u5b89\u5168\u64e6\u9664\u6587\u4ef6",level:3}],m={toc:p};function v(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7531\u5fae\u8f6f\u51fa\u54c1\u7684\u4e00\u7ec4\u7528\u4e8e Windows \u7684\u4e13\u4e1a\u5c0f\u7a0b\u5e8f\u3002\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/sysinternals/"},"\u5b98\u65b9\u6587\u6863")),(0,i.kt)("h2",{id:"\u7ba1\u7406\u9762\u677f\u7c7b"},"\u7ba1\u7406\u9762\u677f\u7c7b"),(0,i.kt)("h3",{id:"\u81ea\u52a8\u52a0\u8f7d\u7ba1\u7406"},"\u81ea\u52a8\u52a0\u8f7d\u7ba1\u7406"),(0,i.kt)(o.Z,{choco:"autoruns",mdxType:"GetPkg"}),(0,i.kt)("h3",{id:"\u8fdb\u7a0b\u7ba1\u7406\u5668"},"\u8fdb\u7a0b\u7ba1\u7406\u5668"),(0,i.kt)(o.Z,{choco:"procexp",mdxType:"GetPkg"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u76d1\u63a7\u89c6\u56fe\u7c7b"},"\u76d1\u63a7\u89c6\u56fe\u7c7b"),(0,i.kt)("h3",{id:"\u8fdb\u7a0b\u76d1\u63a7\u5668"},"\u8fdb\u7a0b\u76d1\u63a7\u5668"),(0,i.kt)(o.Z,{choco:"procmon",mdxType:"GetPkg"}),(0,i.kt)("h3",{id:"tcp-\u8fde\u63a5\u76d1\u63a7"},"TCP \u8fde\u63a5\u76d1\u63a7"),(0,i.kt)(o.Z,{choco:"tcpview",mdxType:"GetPkg"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5b9e\u7528\u5de5\u5177\u7c7b"},"\u5b9e\u7528\u5de5\u5177\u7c7b"),(0,i.kt)("h3",{id:"\u81ea\u52a8\u767b\u5f55\u5668"},"\u81ea\u52a8\u767b\u5f55\u5668"),(0,i.kt)(o.Z,{choco:"autologon",mdxType:"GetPkg"}),(0,i.kt)("h3",{id:"\u865a\u62df\u684c\u9762"},"\u865a\u62df\u684c\u9762"),(0,i.kt)("p",null,"\u4e3a XP \u548c Win7 \u8001\u7cfb\u7edf\u684c\u9762\u6dfb\u52a0\u591a\u5de5\u4f5c\u7a7a\u95f4\u652f\u6301"),(0,i.kt)(o.Z,{choco:"desktops",mdxType:"GetPkg"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u547d\u4ee4\u5de5\u5177\u7c7b"},"\u547d\u4ee4\u5de5\u5177\u7c7b"),(0,i.kt)("h3",{id:"\u6ce8\u518c\u8868\u8df3\u8f6c"},"\u6ce8\u518c\u8868\u8df3\u8f6c"),(0,i.kt)(o.Z,{choco:"regjump",mdxType:"GetPkg"}),(0,i.kt)("h3",{id:"\u5b89\u5168\u64e6\u9664\u6587\u4ef6"},"\u5b89\u5168\u64e6\u9664\u6587\u4ef6"),(0,i.kt)(o.Z,{choco:"sdelete",mdxType:"GetPkg"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5168\u91cf\u5b89\u88c5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(o.Z,{name:"sysinternals",winget:!0,choco:!0,scoop:!0,mdxType:"GetPkg"}))))}v.isMDXComponent=!0}}]);