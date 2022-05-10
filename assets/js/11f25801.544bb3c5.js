"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[1912],{2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(6010),r="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),l=n(7294),r=n(2389),i=n(7392),u=n(7094),o=n(2466),s=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,f=e.block,m=e.defaultValue,k=e.values,b=e.groupId,h=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,T=(0,l.useState)(y),Z=T[0],P=T[1],C=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=w[b];null!=I&&I!==Z&&g.some((function(e){return e.value===I}))&&P(I)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==Z&&(D(t),P(a),null!=b&&E(b,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var l=C.indexOf(e.currentTarget)-1;n=C[l]||C[C.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":f},h)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:_,onClick:_},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function f(e){var t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),l=n(9877),r=n(2360),i=n(5710),u=n(6010),o="root_WbTl",s="sole_DVUS";function c(e){var t=e.items,n=e.expression,l=e.key,u=e.label,o=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(r.Z,{attributes:{title:o},key:l,value:l,label:u},a.createElement(i.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function p(e){var t=e.name,n=e.choco,r=e.scoop,i=e.winget,p=e.flatpak,d=e.apt,f=e.pacman,m=e.dnf,k=e.pipx,b=e.yarn,h=e.longBanner,v=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),r&&e.push("scoop"),i&&e.push("winget"),p&&e.push("flatpak"),d&&e.push("apt"),f&&e.push("pacman"),m&&e.push("dnf"),k&&e.push("pipx"),b&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,m,r,i,f,k,b]),g=[];if(c({items:g,expression:p,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),c({items:g,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),c({items:g,expression:m,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),c({items:g,expression:r,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),c({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),c({items:g,expression:i,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),c({items:g,expression:f,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),c({items:g,expression:k,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),c({items:g,expression:b,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:s},g[0]):a.createElement(l.Z,{className:(0,u.Z)(h&&"tabs--block",o),groupId:v},g)}},9023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=n(7717),u=["components"],o={title:"\u7cfb\u7edf\u5907\u4efd"},s=void 0,c={unversionedId:"linux/backup",id:"linux/backup",title:"\u7cfb\u7edf\u5907\u4efd",description:"\u5bf9\u4e8e BTRFS \u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u4eec\u53ef\u7528\u5177\u6709\u56fe\u5f62\u5316\u754c\u9762\u7684\u81ea\u52a8\u5907\u4efd\u52a9\u624b\uff1a",source:"@site/docs/linux/99-backup.md",sourceDirName:"linux",slug:"/linux/backup",permalink:"/geekbook/docs/linux/backup",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/99-backup.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"\u7cfb\u7edf\u5907\u4efd"},sidebar:"linux",previous:{title:"\u865a\u62df\u5316\u5e73\u53f0",permalink:"/geekbook/docs/linux/libvirt"},next:{title:"Cockpit",permalink:"/geekbook/docs/linux/cockpit"}},p={},d=[],f={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u4e8e BTRFS \u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u4eec\u53ef\u7528\u5177\u6709\u56fe\u5f62\u5316\u754c\u9762\u7684\u81ea\u52a8\u5907\u4efd\u52a9\u624b\uff1a"),(0,r.kt)(i.Z,{name:"timeshift",apt:!0,dnf:!0,mdxType:"GetPkg"}),(0,r.kt)("p",null,"AUR: ",(0,r.kt)("inlineCode",{parentName:"p"},"timeshift")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u666e\u901a\u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u4eec\u6253\u5f00\u7ec8\u7aef\u5907\u4efd\u7cfb\u7edf\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc")," \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir backup && cd backup\nsudo tar cpzf etc.tar.gz /etc\n")))}m.isMDXComponent=!0}}]);