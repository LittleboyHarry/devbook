"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9149],{2360:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),l=t(6010),i="tabItem_OmH5";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(3117),l=t(7294),i=t(2389),r=t(7392),o=t(7094),s=t(2466),u=t(6010),p="tabList_uSqn",m="tabItem_LplD";function c(e){var n,t,i,c=e.lazy,d=e.block,g=e.defaultValue,h=e.values,k=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,r.l)(N,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(n=null!=g?g:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==x&&!N.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),y=w.tabGroupChoices,E=w.setTabGroupChoices,T=(0,l.useState)(x),Z=T[0],P=T[1],C=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var M=y[k];null!=M&&M!==Z&&N.some((function(e){return e.value===M}))&&P(M)}var G=function(e){var n=e.currentTarget,t=C.indexOf(n),a=N[t].value;a!==Z&&(D(n),P(a),null!=k&&E(k,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var l=C.indexOf(e.currentTarget)-1;t=C[l]||C[C.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},N.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:G,onClick:G},i,{className:(0,u.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),c?(0,l.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function d(e){var n=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7294),l=t(9877),i=t(2360),r=t(5710),o=t(6010),s="root_WbTl";function u(e){var n=e.items,t=e.expression,l=e.key,o=e.label,s=e.hint,u=e.defaultPkgName,p=e.prefix;t&&n.push(a.createElement(i.Z,{attributes:{title:s},key:l,value:l,label:o},a.createElement(r.Z,{className:"language-shell"},p+" "+(!0===t?u:t))))}function p(e){var n,t=e.name,i=e.dnf,r=e.apt,p=e.scoop,m=e.choco,c=e.winget,d=e.pacman,g=e.pipx,h=e.yarn,k=e.longBanner,f=(n=[],r&&n.push("apt"),i&&n.push("dnf"),p&&n.push("scoop"),c&&n.push("winget"),d&&n.push("pacman"),g&&n.push("pipx"),h&&n.push("yarn"),"getpkg-"+n.join("&")),v=[];if(u({items:v,expression:r,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),u({items:v,expression:i,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),u({items:v,expression:p,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),u({items:v,expression:m,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),u({items:v,expression:c,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),u({items:v,expression:d,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),u({items:v,expression:g,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),u({items:v,expression:h,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),v.length<=0)throw"Empty GetPkg";return 1==v.length?v[0]:a.createElement(l.Z,{className:(0,o.Z)(k&&"tabs--block",s),groupId:f},v)}},4523:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(3117),l=t(102),i=(t(7294),t(3905)),r=t(7717),o=["components"],s={title:"GNOME \u63a8\u8350\u6269\u5c55"},u=void 0,p={unversionedId:"linux/gnome/extensions",id:"linux/gnome/extensions",title:"GNOME \u63a8\u8350\u6269\u5c55",description:"\u6269\u5c55\u7ba1\u7406\u5668",source:"@site/docs/linux/17-gnome/80-extensions.md",sourceDirName:"linux/17-gnome",slug:"/linux/gnome/extensions",permalink:"/geekbook/docs/linux/gnome/extensions",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/17-gnome/80-extensions.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"GNOME \u63a8\u8350\u6269\u5c55"},sidebar:"linux",previous:{title:"GNOME \u5916\u89c2",permalink:"/geekbook/docs/linux/gnome/theme"},next:{title:"GNOME \u5e94\u7528\u63a8\u8350",permalink:"/geekbook/docs/linux/gnome/apps"}},m={},c=[{value:"\u6269\u5c55\u7ba1\u7406\u5668",id:"\u6269\u5c55\u7ba1\u7406\u5668",level:2},{value:"\u63a8\u8350\u63d2\u4ef6",id:"\u63a8\u8350\u63d2\u4ef6",level:2},{value:"\u4f5c\u8005\u504f\u597d\u7684\u914d\u7f6e",id:"\u4f5c\u8005\u504f\u597d\u7684\u914d\u7f6e",level:2},{value:"\u5176\u5b83\u63a8\u8350",id:"\u5176\u5b83\u63a8\u8350",level:2},{value:"\u7248\u672c\u4e0d\u517c\u5bb9\uff1f",id:"\u7248\u672c\u4e0d\u517c\u5bb9",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6269\u5c55\u7ba1\u7406\u5668"},"\u6269\u5c55\u7ba1\u7406\u5668"),(0,i.kt)(r.Z,{name:"gnome-extensions-app",apt:!0,dnf:!0,mdxType:"GetPkg"}),(0,i.kt)("p",null,"\u4f5c\u7528\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://extensions.gnome.org"},"https://extensions.gnome.org")," \u7684 Chromium \u4f9d\u8d56",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep"},"\u6269\u5c55")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u65b0\u578b\u7ba1\u7406\u5668\uff0c\u4ec5",(0,i.kt)("a",{parentName:"h5",href:"https://repology.org/badge/vertical-allrepos/extension-manager.svg"},"\u65b0\u4ed3\u5e93"),"\u63d0\u4f9b")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u65e0\u9700\u501f\u52a9\u6d4f\u89c8\u5668\u6765\u5b89\u88c5\u6269\u5c55\uff1a"),(0,i.kt)(r.Z,{name:"gnome-shell-extension-manager",apt:!0,mdxType:"GetPkg"}))),(0,i.kt)("h2",{id:"\u63a8\u8350\u63d2\u4ef6"},"\u63a8\u8350\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5916\u89c2\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ec6\u8282\u5fae\u8c03: ",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/3843/just-perfection/"},"Just Perfection")),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6d3b\u52a8\u6982\u89c8\u89c6\u56fe\u65f6\uff0c\u4e2d\u952e\u5173\u95ed:\n",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/352/middle-click-to-close-in-overview/"},"Quick Close in Overview")),(0,i.kt)("li",{parentName:"ul"},"\u591c\u95f4\u81ea\u52a8\u5207\u6362:\n",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/2236/night-theme-switcher/"},"Night Theme Switcher"))),(0,i.kt)("p",null,"\u9876\u680f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4fe1\u606f\u76d1\u89c6\u5668: ",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/1460/vitals/"},"Vitals")),(0,i.kt)("li",{parentName:"ul"},"\u6d3b\u52a8\u7a97\u53e3\u5217\u8868: ",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/4000/babar/"},"BaBar Task Bar"))),(0,i.kt)("p",null,"\u7a0b\u5e8f\u5458\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u526a\u8d34\u677f:\n",(0,i.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/779/clipboard-indicator/"},"Clipboard Indicator")),(0,i.kt)("p",{parentName:"li"},"\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + F10")," \u53ef\u4ee5\u6e05\u9664\u6240\u6709\u8bb0\u5f55"))),(0,i.kt)("p",null,"\u529f\u80fd\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u89e6\u6478\u677f\u624b\u52bf\u5f3a\u5316: ",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/4245/gesture-improvements/"},"Gesture Improvements"))),(0,i.kt)("h2",{id:"\u4f5c\u8005\u504f\u597d\u7684\u914d\u7f6e"},"\u4f5c\u8005\u504f\u597d\u7684\u914d\u7f6e"),(0,i.kt)("details",{className:"let-details-to-gray"},(0,i.kt)("summary",null,"\u4ec5\u4f9b\u53c2\u8003\uff0c\u70b9\u51fb\u5c55\u5f00 "),(0,i.kt)("p",null,"Just Perfection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dconf write /org/gnome/shell/extensions/just-perfection/workspace-switcher-size 9\n")),(0,i.kt)("p",null,"BaBar Task Bar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/babar/\n[/]\ndisplay-activities=true\ndisplay-app-grid=false\ndisplay-favorites=false\nfavorites-first=true\nicon-size=38\nreduce-padding=false\nright-click=false\nEND\n")),(0,i.kt)("p",null,"Night Theme Switcher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/nightthemeswitcher/\n[time]\nalways-enable-ondemand=true\nnightthemeswitcher-ondemand-keybinding=['']\n[gtk-variants]\nenabled=true\nEND\n")),(0,i.kt)("p",null,"Clipboard Indicator: ( Super + V \u9009\u62e9 )"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gsettings set org.gnome.shell.keybindings toggle-message-tray \"['<Super>m']\"\ndconf write /org/gnome/shell/extensions/clipboard-indicator/toggle-menu \"['<Super>v']\"\ndconf write /org/gnome/shell/extensions/clipboard-indicator/cache-only-favorites true\n")),(0,i.kt)("p",null,"Gesture Improvements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/gestureImprovements/\n[/]\ndefault-overview=true\ndefault-session-workspace=true\ntouchpad-pinch-speed=2.0\nenable-alttab-gesture=false\nallow-minimize-window=true\ntouchpad-speed-scale=1.25\nEND\n"))),(0,i.kt)("h2",{id:"\u5176\u5b83\u63a8\u8350"},"\u5176\u5b83\u63a8\u8350"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8e GNOME \u7684 KDE Connect \u79fb\u52a8\u8bbe\u5907\u4e92\u8054\u4e92\u901a:\n",(0,i.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/1319/gsconnect/"},"GSConnect"),"\uff0c\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo dnf in -y openssl\n")))),(0,i.kt)("h2",{id:"\u7248\u672c\u4e0d\u517c\u5bb9"},"\u7248\u672c\u4e0d\u517c\u5bb9\uff1f"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u672c\u65b9\u6cd5\u53ef\u80fd\u4f1a\u53d1\u751f\u96be\u4ee5\u9884\u6599\u7684\u540e\u679c")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u79cd\u7ed5\u5f00\u7cfb\u7edf\u76d1\u6d4b\u7684\u65b9\u6cd5\uff0c\u8c28\u614e\u8bd5\u7528\uff1a"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5e94\u7528\u6700\u65b0\u7248\u5b89\u88c5\u5305\uff0c\u5e76\u89e3\u538b"),(0,i.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.json")," \u7248\u672c\u53f7"),(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c\u811a\u672c"),(0,i.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u767b\u9646")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'uuid=$(grep \'"uuid"\' metadata.json | sed \'s@^[ ]*"uuid":[ ]*"\\(.\\+\\)",[ ]*@\\1@\')\ntarget=~/.local/share/gnome-shell/extensions/$uuid/\nmkdir $target\ncp -r * $target\n')))}g.isMDXComponent=!0}}]);