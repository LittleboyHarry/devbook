"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9598],{2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),r=n(7294),l=n(2389),i=n(7392),o=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,f=e.block,m=e.defaultValue,h=e.values,b=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),N=x.tabGroupChoices,E=x.setTabGroupChoices,Z=(0,r.useState)(w),T=Z[0],P=Z[1],D=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=N[b];null!=_&&_!==T&&g.some((function(e){return e.value===_}))&&P(_)}var M=function(e){var t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==T&&(I(t),P(a),null!=b&&E(b,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":f},v)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return D.push(e)},onKeyDown:C,onFocus:M,onClick:M},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9877),l=n(2360),i=n(5710),o=n(6010),u="root_WbTl",s="sole_DVUS";function c(e){var t=e.items,n=e.expression,r=e.key,o=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(l.Z,{attributes:{title:u},key:r,value:r,label:o},a.createElement(i.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function p(e){var t=e.name,n=e.choco,l=e.scoop,i=e.winget,p=e.flatpak,d=e.apt,f=e.pacman,m=e.dnf,h=e.pipx,b=e.yarn,v=e.longBanner,k=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),l&&e.push("scoop"),i&&e.push("winget"),p&&e.push("flatpak"),d&&e.push("apt"),f&&e.push("pacman"),m&&e.push("dnf"),h&&e.push("pipx"),b&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,m,l,i,f,h,b]),g=[];if(c({items:g,expression:p,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),c({items:g,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),c({items:g,expression:m,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),c({items:g,expression:l,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),c({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),c({items:g,expression:i,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),c({items:g,expression:f,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),c({items:g,expression:h,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),c({items:g,expression:b,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:s},g[0]):a.createElement(r.Z,{className:(0,o.Z)(v&&"tabs--block",u),groupId:k},g)}},6080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(7717),o=["components"],u={title:"\u7535\u5b50\u90ae\u4ef6"},s=void 0,c={unversionedId:"software/email",id:"software/email",title:"\u7535\u5b50\u90ae\u4ef6",description:"\u63a8\u8350 Mozilla \u51fa\u54c1\u7684\u901a\u7528\u5ba2\u6237\u7aef",source:"@site/docs/software/email.md",sourceDirName:"software",slug:"/software/email",permalink:"/geekbook/docs/software/email",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/software/email.md",tags:[],version:"current",frontMatter:{title:"\u7535\u5b50\u90ae\u4ef6"},sidebar:"software",previous:{title:"\u8bcd\u5178",permalink:"/geekbook/docs/software/dictionary"}},p={},d=[{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2}],f={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u63a8\u8350 Mozilla \u51fa\u54c1\u7684\u901a\u7528\u5ba2\u6237\u7aef"),(0,l.kt)(i.Z,{name:"thunderbird",dnf:!0,winget:!0,pacman:"thunderbird thunderbird-i18n-zh-cn",flatpak:"org.mozilla.Thunderbird",mdxType:"GetPkg"}),(0,l.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u5bbd\u5c4f\u63a8\u8350\uff1a\u83dc\u5355 -> \u67e5\u770b -> \u5e03\u5c40 -> \u76f4\u89c6\u56fe"))}m.isMDXComponent=!0}}]);