"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5090],{2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(6010),r="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),r=n(2389),i=n(7392),o=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,m=e.block,f=e.defaultValue,h=e.values,k=e.groupId,b=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,Z=(0,l.useState)(y),T=Z[0],D=Z[1],P=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var C=w[k];null!=C&&C!==T&&g.some((function(e){return e.value===C}))&&D(C)}var S=function(e){var t=e.currentTarget,n=P.indexOf(t),a=g[n].value;a!==T&&(I(t),D(a),null!=k&&E(k,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var l=P.indexOf(e.currentTarget)-1;n=P[l]||P[P.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:_,onFocus:S,onClick:S},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),l=n(9877),r=n(2360),i=n(5710),o=n(6010),u="root_WbTl",s="sole_DVUS";function c(e){var t=e.items,n=e.expression,l=e.key,o=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(r.Z,{attributes:{title:u},key:l,value:l,label:o},a.createElement(i.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function p(e){var t=e.name,n=e.choco,r=e.scoop,i=e.winget,p=e.flatpak,d=e.apt,m=e.pacman,f=e.dnf,h=e.pipx,k=e.yarn,b=e.longBanner,v=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),r&&e.push("scoop"),i&&e.push("winget"),p&&e.push("flatpak"),d&&e.push("apt"),m&&e.push("pacman"),f&&e.push("dnf"),h&&e.push("pipx"),k&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,f,r,i,m,h,k]),g=[];if(c({items:g,expression:p,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),c({items:g,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),c({items:g,expression:f,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),c({items:g,expression:r,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),c({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),c({items:g,expression:i,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),c({items:g,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),c({items:g,expression:h,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),c({items:g,expression:k,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:s},g[0]):a.createElement(l.Z,{className:(0,o.Z)(b&&"tabs--block",u),groupId:v},g)}},164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=n(7717),o=["components"],u={title:"\u8bbe\u5907\u9002\u914d"},s=void 0,c={unversionedId:"linux/device",id:"linux/device",title:"\u8bbe\u5907\u9002\u914d",description:"\u7b14\u8bb0\u672c\u7701\u7535",source:"@site/docs/linux/31-device.md",sourceDirName:"linux",slug:"/linux/device",permalink:"/geekbook/docs/linux/device",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/31-device.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"\u8bbe\u5907\u9002\u914d"},sidebar:"linux",previous:{title:"GNOME of Ubuntu",permalink:"/geekbook/docs/linux/mustdo/gnome/ubuntu"},next:{title:"\u6dfb\u52a0 homebrew",permalink:"/geekbook/docs/linux/recommend/homebrew"}},p={},d=[{value:"\u7b14\u8bb0\u672c\u7701\u7535",id:"\u7b14\u8bb0\u672c\u7701\u7535",level:2},{value:"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f",id:"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f",level:2},{value:"\u5916\u754c\u663e\u793a\u5668\u4eae\u5ea6",id:"\u5916\u754c\u663e\u793a\u5668\u4eae\u5ea6",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b14\u8bb0\u672c\u7701\u7535"},"\u7b14\u8bb0\u672c\u7701\u7535"),(0,r.kt)(i.Z,{name:"tlp",apt:!0,dnf:!0,pacman:"tlp tlp-rdw",mdxType:"GetPkg"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tlp start\n\n# \u53ef\u80fd\u9700\u8981\u7981\u7528\uff1a\nsudo systemctl mask systemd-rfkill.service --now\n")),(0,r.kt)("h2",{id:"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f"},"\u5173\u673a\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/256481066"},"\u6539 90s \u4e3a 10s \u7684\u547d\u4ee4"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sed -i '/DefaultTimeoutStopSec/{s/#//;s/=90s/=10s/}' /etc/systemd/system.conf\n")),(0,r.kt)("h2",{id:"\u5916\u754c\u663e\u793a\u5668\u4eae\u5ea6"},"\u5916\u754c\u663e\u793a\u5668\u4eae\u5ea6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo dnf in -y ddcutil\n")),(0,r.kt)("p",null,"\u6280\u672f\u539f\u7406\uff1aDDC/CI \u534f\u8bae\u3002\u5e02\u9762\u591a\u6570\u663e\u793a\u5668\u5747\u652f\u6301\u8be5\u534f\u8bae\uff0c\u5176\u4e2d\u90e8\u5206\u663e\u793a\u5668\u9700\u8981\u6253\u5f00 OSD \u8c03\u8282\u83dc\u5355\u6fc0\u6d3b\u8be5\u534f\u8bae\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u514d root \u6743\u9650\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/daitj/gnome-display-brightness-ddcutil#setup-ddcutil"},"https://github.com/daitj/gnome-display-brightness-ddcutil#setup-ddcutil")),(0,r.kt)("p",null,"GNOME \u6269\u5c55\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/2645/brightness-control-using-ddcutil/"},"https://extensions.gnome.org/extension/2645/brightness-control-using-ddcutil/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u83b7\u53d6\u4eae\u5ea6\uff0c\u4ee3\u53f7 10\nddcutil getvcp 10\n# \u8bbe\u7f6e\u4eae\u5ea6\uff0c0 \uff5e 100\nddcutil setvcp 10 0\n\n# \u8bbe\u7f6e\u5bf9\u6bd4\u5ea6\nddcutil setvcp 12 100\n")))}f.isMDXComponent=!0}}]);