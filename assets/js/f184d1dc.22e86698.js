"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[2931],{2360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(6010),r="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),o=n(7294),r=n(2389),l=n(7392),i=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,f=e.block,m=e.defaultValue,v=e.values,b=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==x&&!g.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,Z=(0,o.useState)(x),T=Z[0],P=Z[1],D=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=N[b];null!=_&&_!==T&&g.some((function(e){return e.value===_}))&&P(_)}var C=function(e){var t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==T&&(I(t),P(a),null!=b&&E(b,a))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;n=D[o]||D[D.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,u.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":f},h)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return D.push(e)},onKeyDown:L,onFocus:C,onClick:C},r,{className:(0,u.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,o.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),o=n(9877),r=n(2360),l=n(5710),i=n(6010),s="root_WbTl",u="sole_DVUS";function c(e){var t=e.items,n=e.expression,o=e.key,i=e.label,s=e.hint,u=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(r.Z,{attributes:{title:s},key:o,value:o,label:i},a.createElement(l.Z,{className:"language-shell"},c+" "+(!0===n?u:n))))}function p(e){var t=e.name,n=e.choco,r=e.scoop,l=e.winget,p=e.flatpak,d=e.apt,f=e.pacman,m=e.dnf,v=e.pipx,b=e.yarn,h=e.longBanner,k=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),r&&e.push("scoop"),l&&e.push("winget"),p&&e.push("flatpak"),d&&e.push("apt"),f&&e.push("pacman"),m&&e.push("dnf"),v&&e.push("pipx"),b&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,m,r,l,f,v,b]),g=[];if(c({items:g,expression:p,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),c({items:g,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),c({items:g,expression:m,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),c({items:g,expression:r,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),c({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),c({items:g,expression:l,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),c({items:g,expression:f,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),c({items:g,expression:v,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),c({items:g,expression:b,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:u},g[0]):a.createElement(o.Z,{className:(0,i.Z)(h&&"tabs--block",s),groupId:k},g)}},3597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=n(7717),i=["components"],s={title:"pandoc"},u=void 0,c={unversionedId:"goodsoft/cli/pandoc",id:"goodsoft/cli/pandoc",title:"pandoc",description:"",source:"@site/docs/goodsoft/cli/pandoc.md",sourceDirName:"goodsoft/cli",slug:"/goodsoft/cli/pandoc",permalink:"/devbook/docs/goodsoft/cli/pandoc",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/goodsoft/cli/pandoc.md",tags:[],version:"current",frontMatter:{title:"pandoc"},sidebar:"goodsoft",previous:{title:"\u4f11\u606f\u63d0\u9192",permalink:"/devbook/docs/goodsoft/rsi"},next:{title:"\u8bcd\u5178",permalink:"/devbook/docs/goodsoft/dictionary"}},p={},d=[],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{winget:!0,choco:!0,scoop:!0,apt:!0,dnf:!0,pacman:!0,mdxType:"GetPkg"}))}m.isMDXComponent=!0}}]);