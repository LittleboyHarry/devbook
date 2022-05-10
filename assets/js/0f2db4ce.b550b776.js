"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[7145],{2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(2389),o=n(7392),i=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,m=e.block,f=e.defaultValue,b=e.values,v=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==x&&!g.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,Z=(0,r.useState)(x),T=Z[0],P=Z[1],D=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var _=w[v];null!=_&&_!==T&&g.some((function(e){return e.value===_}))&&P(_)}var C=function(e){var t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==T&&(I(t),P(a),null!=v&&E(v,a))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return D.push(e)},onKeyDown:L,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9877),l=n(2360),o=n(5710),i=n(6010),u="root_WbTl",s="sole_DVUS";function c(e){var t=e.items,n=e.expression,r=e.key,i=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(l.Z,{attributes:{title:u},key:r,value:r,label:i},a.createElement(o.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function d(e){var t=e.name,n=e.choco,l=e.scoop,o=e.winget,d=e.flatpak,p=e.apt,m=e.pacman,f=e.dnf,b=e.pipx,v=e.yarn,h=e.longBanner,k=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),l&&e.push("scoop"),o&&e.push("winget"),d&&e.push("flatpak"),p&&e.push("apt"),m&&e.push("pacman"),f&&e.push("dnf"),b&&e.push("pipx"),v&&e.push("yarn"),"getpkg-"+e.join("&")}),[p,f,l,o,m,b,v]),g=[];if(c({items:g,expression:d,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),c({items:g,expression:p,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),c({items:g,expression:f,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),c({items:g,expression:l,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),c({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),c({items:g,expression:o,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),c({items:g,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),c({items:g,expression:b,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),c({items:g,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:s},g[0]):a.createElement(r.Z,{className:(0,i.Z)(h&&"tabs--block",u),groupId:k},g)}},1564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(7717),i=["components"],u={title:"\u4ee3\u7801\u5f69\u663e bat"},s=void 0,c={unversionedId:"dev/modern-cli/bat",id:"dev/modern-cli/bat",title:"\u4ee3\u7801\u5f69\u663e bat",description:"\u5b89\u88c5",source:"@site/docs/dev/30-modern-cli/16-bat.md",sourceDirName:"dev/30-modern-cli",slug:"/dev/modern-cli/bat",permalink:"/geekbook/docs/dev/modern-cli/bat",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/30-modern-cli/16-bat.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"\u4ee3\u7801\u5f69\u663e bat"},sidebar:"dev",previous:{title:"\u6469\u767b\u547d\u4ee4\u884c\u7d22\u5f15",permalink:"/geekbook/docs/dev/modern-cli/index"},next:{title:"\u4ee3\u7801\u6bd4\u5bf9 delta",permalink:"/geekbook/docs/dev/modern-cli/delta"}},d={},p=[{value:"Debian \u5b89\u88c5",id:"debian-\u5b89\u88c5",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b89\u88c5"),(0,l.kt)(o.Z,{name:"bat",dnf:!0,scoop:!0,pacman:!0,mdxType:"GetPkg"}),(0,l.kt)("h2",{id:"debian-\u5b89\u88c5"},"Debian \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt install -y bat\necho alias bat=batcat | tee -a ~/.bashrc ~/.zshrc > /dev/null\n")))}f.isMDXComponent=!0}}]);