"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[806],{2360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),r=t(7294),o=t(2389),i=t(7392),l=t(7094),s=t(2466),u=t(6010),m="tabList_uSqn",p="tabItem_LplD";function d(e){var n,t,o,d=e.lazy,c=e.block,g=e.defaultValue,k=e.values,h=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.l)(N,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(n=null!=g?g:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,E=w.setTabGroupChoices,S=(0,r.useState)(y),z=S[0],M=S[1],Z=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=x[h];null!=T&&T!==z&&N.some((function(e){return e.value===T}))&&M(T)}var D=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=N[t].value;a!==z&&(P(n),M(a),null!=h&&E(h,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;t=Z[r]||Z[Z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},v)},N.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===n?0:-1,"aria-selected":z===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:C,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":z===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(f.filter((function(e){return e.props.value===z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==z})}))))}function c(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),r=t(9877),o=t(2360),i=t(5710),l=t(6010),s="root_WbTl";function u(e){var n=e.items,t=e.expression,r=e.key,l=e.label,s=e.hint,u=e.defaultPkgName,m=e.prefix;t&&n.push(a.createElement(o.Z,{attributes:{title:s},key:r,value:r,label:l},a.createElement(i.Z,{className:"language-shell"},m+" "+(!0===t?u:t))))}function m(e){var n,t=e.name,o=e.dnf,i=e.apt,m=e.scoop,p=e.choco,d=e.winget,c=e.pacman,g=e.pipx,k=e.yarn,h=e.longBanner,v=(n=[],i&&n.push("apt"),o&&n.push("dnf"),m&&n.push("scoop"),d&&n.push("winget"),c&&n.push("pacman"),g&&n.push("pipx"),k&&n.push("yarn"),"getpkg-"+n.join("&")),f=[];if(u({items:f,expression:i,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),u({items:f,expression:o,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),u({items:f,expression:m,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),u({items:f,expression:p,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),u({items:f,expression:d,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),u({items:f,expression:c,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),u({items:f,expression:g,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),u({items:f,expression:k,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),f.length<=0)throw"Empty GetPkg";return 1==f.length?f[0]:a.createElement(r.Z,{className:(0,l.Z)(h&&"tabs--block",s),groupId:v},f)}},3282:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=t(7717),l=["components"],s={title:"GNOME \u8c03\u4f18"},u=void 0,m={unversionedId:"linux/gnome/optimize",id:"linux/gnome/optimize",title:"GNOME \u8c03\u4f18",description:"\u6ce8\uff1a&! \u662f zsh \u53ef\u5206\u79bb\u5f0f\u6267\u884c\u7684\u4e13\u5c5e\u7279\u6027",source:"@site/docs/linux/17-gnome/2-optimize.md",sourceDirName:"linux/17-gnome",slug:"/linux/gnome/optimize",permalink:"/geekbook/docs/linux/gnome/optimize",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/17-gnome/2-optimize.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"GNOME \u8c03\u4f18"},sidebar:"getstarted",previous:{title:"GNOME \u7279\u6027",permalink:"/geekbook/docs/linux/gnome/features"},next:{title:"GNOME \u9876\u680f",permalink:"/geekbook/docs/linux/gnome/panel"}},p={},d=[{value:"\u8c03\u4f18",id:"\u8c03\u4f18",level:2},{value:"\u63a8\u8350\u7684\u5feb\u6377\u952e",id:"\u63a8\u8350\u7684\u5feb\u6377\u952e",level:2},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:2},{value:"\u8f85\u52a9\u5de5\u5177",id:"\u8f85\u52a9\u5de5\u5177",level:2}],c={toc:d};function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6ce8\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"&!")," \u662f zsh \u53ef\u5206\u79bb\u5f0f\u6267\u884c\u7684\u4e13\u5c5e\u7279\u6027"),(0,o.kt)("h2",{id:"\u8c03\u4f18"},"\u8c03\u4f18"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u81ea\u52a8\u767b\u9646\uff0c\u514d\u8f93\u5bc6\u7801")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5df2\u8bbe\u5168\u76d8\u52a0\u5bc6\u7684\u7528\u6237\u63a8\u8350\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"gnome-control-center user-accounts &!\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5141\u8bb8 Super + \u53f3\u952e \u62d6\u62fd\u66f4\u6539\u7a97\u53e3\u5927\u5c0f\ngsettings set org.gnome.desktop.wm.preferences resize-with-right-button true\n\n# \u6fc0\u6d3b\u89e6\u6478\u677f\u8f7b\u89e6\u70b9\u51fb\ngsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true\n\n# \u6309\u4e0b\u7535\u6e90\u952e\u9ed8\u8ba4\u4f1a\u6302\u8d77\u7cfb\u7edf\uff0c\u82e5\u8981\u6539\u4e3a\u5173\u673a\u884c\u4e3a\uff1a\ngsettings set org.gnome.settings-daemon.plugins.power power-button-action interactive\n\n# \u65e0\u9700\u5173\u673a\u524d 60s \u7b49\u5f85\u786e\u8ba4\ngsettings set org.gnome.SessionManager logout-prompt false\n\n# \u663e\u793a\u6700\u5c0f\u6700\u5927\u5316\u7a97\u53e3\u6309\u94ae\ngsettings set org.gnome.desktop.wm.preferences button-layout appmenu:minimize,maximize,close\n\n# \u9650\u5236\u5e94\u7528\u5207\u6362\u5668\u4f5c\u7528\u4e8e\u5f53\u524d\u5de5\u4f5c\u533a\ngsettings set org.gnome.shell.app-switcher current-workspace-only true\n\n# \u7981\u7528\u5b57\u7b26\u641c\u7d22\u652f\u6301\uff0c\u907f\u514d\u5e72\u6270\u3002\ngsettings set org.gnome.desktop.search-providers disabled \"['org.gnome.Characters.desktop']\"\n\n# `Super + D` \u663e\u793a\u684c\u9762\ngsettings set org.gnome.desktop.wm.keybindings show-desktop \"['<Super>d']\"\n\n# \u4efb\u52a1\u7ba1\u7406\u5668\uff1a\u4f7f\u7528\u6811\u89c6\u56fe\ndconf write /org/gnome/gnome-system-monitor/show-dependencies true\n\n# \u5f3a\u5316\u540c\u5e94\u7528\u7a97\u53e3\u5207\u6362 Alt + ` \u952e\ncat << END | dconf load /org/gnome/desktop/wm/keybindings/\n[/]\ncycle-group=['<Alt>grave']\ncycle-group-backward=['<Shift><Alt>grave']\nEND\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5de7\u7528\u89e6\u6478\u677f\u8c03\u6574\u7a97\u53e3\u5927\u5c0f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"Super + Z")," \u89e6\u53d1\uff0c\u81ea\u884c\u6478\u7d22\u9002\u5e94\u4e00\u4e0b~"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"dconf write /org/gnome/desktop/wm/keybindings/begin-resize \"['<Super>z']\"\n")))),(0,o.kt)("h2",{id:"\u63a8\u8350\u7684\u5feb\u6377\u952e"},"\u63a8\u8350\u7684\u5feb\u6377\u952e"),(0,o.kt)("p",null,"\u6765\u81ea Windows \u98ce\u683c\u7684\u5feb\u6377\u952e\uff1a"),(0,o.kt)("div",{className:"autoselect-cell-of-table"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,o.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6309\u952e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u7ec8\u7aef"),(0,o.kt)("td",{parentName:"tr",align:null},"gnome-terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Super + X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7ba1\u7406\u5668"),(0,o.kt)("td",{parentName:"tr",align:null},"nautilus"),(0,o.kt)("td",{parentName:"tr",align:null},"Super + E")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:null},"gnome-control-center"),(0,o.kt)("td",{parentName:"tr",align:null},"Super + I")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u622a\u56fe ","*"),(0,o.kt)("td",{parentName:"tr",align:null},"gnome-screenshot --interactive"),(0,o.kt)("td",{parentName:"tr",align:null},"Super + Shift + S"))))),(0,o.kt)("p",null,"*","\u6ce8\uff1aGNOME 42 \u5df2\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"gnome-screenshot")," \u5e76\u5f3a\u5316\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"PrtScr")," \u622a\u56fe\u952e\u7684\u529f\u80fd\u3001\u652f\u6301\u5f55\u5c4f"),(0,o.kt)("details",{className:"let-details-to-gray"},(0,o.kt)("summary",null,"\u5bf9\u5e94\u7684\u914d\u7f6e\u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/\n[custom0]\nbinding='<Super>x'\ncommand='gnome-terminal'\nname='\u6253\u5f00\u7ec8\u7aef'\n\n[custom1]\nbinding='<Super>e'\ncommand='nautilus'\nname='\u6587\u4ef6\u7ba1\u7406\u5668'\n\n[custom2]\nbinding='<Super>i'\ncommand='gnome-control-center'\nname='\u8bbe\u7f6e'\n\n[custom3]\nbinding='<Shift><Super>s'\ncommand='gnome-screenshot --interactive'\nname='\u622a\u56fe'\nEND\n\ndconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings \"['/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/', '/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom1/', '/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom2/', '/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom3/']\"\n"))),(0,o.kt)("h2",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6df1\u591c\u62a4\u773c\uff1a\u70b9\u51fb\u591c\u706f\uff0c\u6fc0\u6d3b\u6696\u8272\u6548\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gnome-control-center display &!\n")),(0,o.kt)("h2",{id:"\u8f85\u52a9\u5de5\u5177"},"\u8f85\u52a9\u5de5\u5177"),(0,o.kt)("p",null,"\u7c7b Windows \u6ce8\u518c\u8868\u7f16\u8f91\u5668\uff1a"),(0,o.kt)(i.Z,{name:"dconf-editor",apt:!0,dnf:!0,mdxType:"GetPkg"}))}g.isMDXComponent=!0}}]);