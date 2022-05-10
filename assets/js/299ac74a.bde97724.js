"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[3203],{2360:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(6010),r="tabItem_OmH5";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3117),l=a(7294),r=a(2389),i=a(7392),u=a(7094),o=a(2466),s=a(6010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var t,a,r,d=e.lazy,f=e.block,m=e.defaultValue,k=e.values,h=e.groupId,v=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,Z=(0,l.useState)(y),P=Z[0],T=Z[1],I=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=w[h];null!=C&&C!==P&&g.some((function(e){return e.value===C}))&&T(C)}var M=function(e){var t=e.currentTarget,a=I.indexOf(t),n=g[a].value;n!==P&&(D(t),T(n),null!=h&&E(h,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var l=I.indexOf(e.currentTarget)-1;a=I[l]||I[I.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":f},v)},g.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:M,onClick:M},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),d?(0,l.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function f(e){var t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},7717:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(9877),r=a(2360),i=a(5710),u=a(6010),o="root_WbTl",s="sole_DVUS";function p(e){var t=e.items,a=e.expression,l=e.key,u=e.label,o=e.hint,s=e.defaultPkgName,p=e.prefix;a&&t.push(n.createElement(r.Z,{attributes:{title:o},key:l,value:l,label:u},n.createElement(i.Z,{className:"language-shell"},p+" "+(!0===a?s:a))))}function c(e){var t=e.name,a=e.choco,r=e.scoop,i=e.winget,c=e.flatpak,d=e.apt,f=e.pacman,m=e.dnf,k=e.pipx,h=e.yarn,v=e.longBanner,b=(0,n.useMemo)((function(){var e=[];return a&&e.push("choco"),r&&e.push("scoop"),i&&e.push("winget"),c&&e.push("flatpak"),d&&e.push("apt"),f&&e.push("pacman"),m&&e.push("dnf"),k&&e.push("pipx"),h&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,m,r,i,f,k,h]),g=[];if(p({items:g,expression:c,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),p({items:g,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),p({items:g,expression:m,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),p({items:g,expression:r,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),p({items:g,expression:a,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),p({items:g,expression:i,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),p({items:g,expression:f,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),p({items:g,expression:k,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),p({items:g,expression:h,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?n.createElement("div",{className:s},g[0]):n.createElement(l.Z,{className:(0,u.Z)(v&&"tabs--block",o),groupId:b},g)}},3775:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),i=a(7717),u=["components"],o={},s=void 0,p={unversionedId:"linux/flatpak",id:"linux/flatpak",title:"flatpak",description:"\u5b89\u88c5",source:"@site/docs/linux/20-flatpak.md",sourceDirName:"linux",slug:"/linux/flatpak",permalink:"/geekbook/docs/linux/flatpak",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/20-flatpak.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"linux",previous:{title:"GNOME of Ubuntu",permalink:"/geekbook/docs/linux/gnome/ubuntu"},next:{title:"\u8fdb\u9636\u914d\u7f6e",permalink:"/geekbook/docs/linux/advanced"}},c={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u6dfb\u52a0\u6e90",id:"\u6dfb\u52a0\u6e90",level:2},{value:"\u63a8\u8350\u8f6f\u4ef6",id:"\u63a8\u8350\u8f6f\u4ef6",level:2},{value:"\u89c6\u9891\u64ad\u653e",id:"\u89c6\u9891\u64ad\u653e",level:3},{value:"\u56fe\u50cf\u7f16\u8f91",id:"\u56fe\u50cf\u7f16\u8f91",level:3},{value:"\u89c6\u9891\u526a\u8f91",id:"\u89c6\u9891\u526a\u8f91",level:3}],f={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(i.Z,{name:"flatpak",apt:!0,dnf:!0,pacman:!0,mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u6e90"},"\u6dfb\u52a0\u6e90"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n")),(0,r.kt)("h2",{id:"\u63a8\u8350\u8f6f\u4ef6"},"\u63a8\u8350\u8f6f\u4ef6"),(0,r.kt)("p",null,"\u5bf9\u4f9d\u8d56\u590d\u6742\u3001\u65e0\u9700\u9891\u7e41\u66f4\u65b0\u7684\u8f6f\u4ef6\uff0c\u53ef\u4ee5\u9009\u62e9 Flatpak \u6765\u5b89\u88c5\u3002"),(0,r.kt)("h3",{id:"\u89c6\u9891\u64ad\u653e"},"\u89c6\u9891\u64ad\u653e"),(0,r.kt)("p",null,"VLC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flatpak install flathub org.videolan.VLC\n")),(0,r.kt)("h3",{id:"\u56fe\u50cf\u7f16\u8f91"},"\u56fe\u50cf\u7f16\u8f91"),(0,r.kt)("p",null,"GIMP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flatpak install flathub org.gimp.GIMP\n")),(0,r.kt)("h3",{id:"\u89c6\u9891\u526a\u8f91"},"\u89c6\u9891\u526a\u8f91"),(0,r.kt)("p",null,"Kdenlive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flatpak install flathub org.kde.kdenlive\n")))}m.isMDXComponent=!0}}]);