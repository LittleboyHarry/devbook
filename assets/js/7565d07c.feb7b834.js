"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5793],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),l=t(7294),r=t(2389),o=t(9443);var i=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3810),u=t(6010),p="tabItem_vU9c";function m(e){var n,t,r,o=e.lazy,m=e.block,c=e.defaultValue,d=e.values,g=e.groupId,k=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==x&&!f.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),b=N.tabGroupChoices,w=N.setTabGroupChoices,y=(0,l.useState)(x),E=y[0],C=y[1],T=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=b[g];null!=D&&D!==E&&f.some((function(e){return e.value===D}))&&C(D)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),a=f[t].value;a!==E&&(_(n),C(a),null!=g&&w(g,a))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;t=T[l]||T[T.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},k)},f.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:Z,onFocus:P,onClick:P},r,{className:(0,u.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},4211:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),l=t(6396),r=t(8215),o=t(9055);function i(e){var n=e.items,t=e.expression,l=e.key,i=e.label,s=e.defaultPkgName,u=e.prefix;t&&n.push(a.createElement(r.Z,{key:l,value:l,label:i},a.createElement(o.Z,{className:"language-shell"},u+" "+(!0===t?s:t))))}function s(e){var n,t=e.name,r=e.dnf,o=e.apt,s=e.scoop,u=e.winget,p=e.pacman,m=e.pipx,c=e.yarn,d=e.longBanner,g=(n=[],r&&n.push("dnf"),o&&n.push("apt"),s&&n.push("scoop"),u&&n.push("winget"),p&&n.push("pacman"),m&&n.push("pipx"),c&&n.push("yarn"),"getpkg-"+n.join("&")),k=[];return i({items:k,expression:r,key:"dnf",label:"rpm (Linux)",defaultPkgName:t,prefix:"sudo dnf install -y"}),i({items:k,expression:o,key:"apt",label:"deb (Linux)",defaultPkgName:t,prefix:"sudo apt install -y"}),i({items:k,expression:s,key:"scoop",label:"scoop (Windows)",defaultPkgName:t,prefix:"scoop install"}),i({items:k,expression:u,key:"winget",label:"winget (Windows)",defaultPkgName:t,prefix:"winget install"}),i({items:k,expression:p,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),i({items:k,expression:m,key:"pipx",label:"pipx (Python)",defaultPkgName:t,prefix:"pipx install"}),i({items:k,expression:c,key:"yarn",label:"yarn (Node.js)",defaultPkgName:t,prefix:"yarn global add"}),a.createElement(l.Z,{className:d&&"tabs--block",groupId:g},k)}},4345:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=t(4211),i=["components"],s={title:"\u6269\u5c55\u63a8\u8350"},u=void 0,p={unversionedId:"linux/gnome/extensions",id:"linux/gnome/extensions",title:"\u6269\u5c55\u63a8\u8350",description:"\u6269\u5c55\u7ba1\u7406\u5668",source:"@site/docs/linux/9-gnome/80-extensions.md",sourceDirName:"linux/9-gnome",slug:"/linux/gnome/extensions",permalink:"/geekbook/docs/linux/gnome/extensions",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/9-gnome/80-extensions.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"\u6269\u5c55\u63a8\u8350"},sidebar:"getstarted",previous:{title:"\u4efb\u52a1\u680f",permalink:"/geekbook/docs/linux/gnome/dash"},next:{title:"\u5e94\u7528\u63a8\u8350",permalink:"/geekbook/docs/linux/gnome/apps"}},m=[{value:"\u6269\u5c55\u7ba1\u7406\u5668",id:"\u6269\u5c55\u7ba1\u7406\u5668",children:[],level:2},{value:"\u63a8\u8350\u63d2\u4ef6",id:"\u63a8\u8350\u63d2\u4ef6",children:[],level:2},{value:"\u63a8\u8350\u914d\u7f6e",id:"\u63a8\u8350\u914d\u7f6e",children:[],level:2},{value:"\u5176\u5b83\u63a8\u8350",id:"\u5176\u5b83\u63a8\u8350",children:[],level:2},{value:"\u7248\u672c\u4e0d\u517c\u5bb9\uff1f",id:"\u7248\u672c\u4e0d\u517c\u5bb9",children:[],level:2}],c={toc:m};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6269\u5c55\u7ba1\u7406\u5668"},"\u6269\u5c55\u7ba1\u7406\u5668"),(0,r.kt)(o.Z,{name:"gnome-extensions-app",apt:!0,dnf:!0,mdxType:"GetPkg"}),(0,r.kt)("p",null,"\u4f5c\u7528\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://extensions.gnome.org"},"https://extensions.gnome.org")," \u7684 Chromium \u4f9d\u8d56",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep"},"\u6269\u5c55")),(0,r.kt)("h2",{id:"\u63a8\u8350\u63d2\u4ef6"},"\u63a8\u8350\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5916\u89c2\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec6\u8282\u5fae\u8c03: ",(0,r.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/3843/just-perfection/"},"Just Perfection")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6d3b\u52a8\u6982\u89c8\u89c6\u56fe\u65f6\uff0c\u4e2d\u952e\u5173\u95ed:\n",(0,r.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/352/middle-click-to-close-in-overview/"},"Quick Close in Overview")),(0,r.kt)("li",{parentName:"ul"},"\u591c\u95f4\u81ea\u52a8\u5207\u6362:\n",(0,r.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/2236/night-theme-switcher/"},"Night Theme Switcher"))),(0,r.kt)("p",null,"\u9876\u680f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4fe1\u606f\u76d1\u89c6\u5668: ",(0,r.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/1460/vitals/"},"Vitals")),(0,r.kt)("li",{parentName:"ul"},"\u6d3b\u52a8\u7a97\u53e3\u5217\u8868: ",(0,r.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/4000/babar/"},"BaBar Task Bar"))),(0,r.kt)("p",null,"\u7a0b\u5e8f\u5458\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u526a\u8d34\u677f:\n",(0,r.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/779/clipboard-indicator/"},"Clipboard Indicator")),(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + F10")," \u53ef\u4ee5\u6e05\u9664\u6240\u6709\u8bb0\u5f55"))),(0,r.kt)("p",null,"\u529f\u80fd\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e6\u6478\u677f\u624b\u52bf\u5f3a\u5316: ",(0,r.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/4245/gesture-improvements/"},"Gesture Improvements"))),(0,r.kt)("h2",{id:"\u63a8\u8350\u914d\u7f6e"},"\u63a8\u8350\u914d\u7f6e"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u4f5c\u8005\u504f\u597d"),(0,r.kt)("p",null,"Just Perfection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dconf write /org/gnome/shell/extensions/just-perfection/workspace-switcher-size 9\n")),(0,r.kt)("p",null,"BaBar Task Bar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/babar/\n[/]\ndisplay-activities=true\ndisplay-app-grid=false\ndisplay-favorites=false\nfavorites-first=true\nicon-size=38\nreduce-padding=false\nright-click=false\nEND\n")),(0,r.kt)("p",null,"Night Theme Switcher:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/nightthemeswitcher/\n[time]\nalways-enable-ondemand=true\nnightthemeswitcher-ondemand-keybinding=['']\n[gtk-variants]\nenabled=true\nEND\n")),(0,r.kt)("p",null,"Clipboard Indicator: ( Super + V \u9009\u62e9 )"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gsettings set org.gnome.shell.keybindings toggle-message-tray \"['<Super>m']\"\ndconf write /org/gnome/shell/extensions/clipboard-indicator/toggle-menu \"['<Super>v']\"\ndconf write /org/gnome/shell/extensions/clipboard-indicator/cache-only-favorites true\n")),(0,r.kt)("p",null,"Gesture Improvements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/gestureImprovements/\n[/]\ndefault-overview=true\ndefault-session-workspace=true\ntouchpad-pinch-speed=2.0\nenable-alttab-gesture=false\nallow-minimize-window=true\ntouchpad-speed-scale=1.25\nEND\n")),(0,r.kt)("p",null,"Vitals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dconf write /org/gnome/shell/extensions/vitals/hot-sensors \"['_memory_usage_', '_processor_average_', '__network-rx_max__']\"\ndconf write /org/gnome/shell/extensions/vitals/fixed-widths false\n"))),(0,r.kt)("h2",{id:"\u5176\u5b83\u63a8\u8350"},"\u5176\u5b83\u63a8\u8350"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7535\u6e90\u83dc\u5355\u6309\u94ae: ",(0,r.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/"},"https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8e GNOME \u7684 KDE Connect \u79fb\u52a8\u8bbe\u5907\u4e92\u8054\u4e92\u901a:\n",(0,r.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/1319/gsconnect/"},"GSConnect"),"\uff0c\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo dnf in -y openssl\n")))),(0,r.kt)("h2",{id:"\u7248\u672c\u4e0d\u517c\u5bb9"},"\u7248\u672c\u4e0d\u517c\u5bb9\uff1f"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u672c\u65b9\u6cd5\u53ef\u80fd\u4f1a\u53d1\u751f\u96be\u4ee5\u9884\u6599\u7684\u540e\u679c")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e00\u79cd\u7ed5\u5f00\u7cfb\u7edf\u76d1\u6d4b\u7684\u65b9\u6cd5\uff0c\u8c28\u614e\u8bd5\u7528\uff1a"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5e94\u7528\u6700\u65b0\u7248\u5b89\u88c5\u5305\uff0c\u5e76\u89e3\u538b"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata.json")," \u7248\u672c\u53f7"),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u811a\u672c"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u767b\u9646")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'uuid=$(grep \'"uuid"\' metadata.json | sed \'s@^[ ]*"uuid":[ ]*"\\(.\\+\\)",[ ]*@\\1@\')\ntarget=~/.local/share/gnome-shell/extensions/$uuid/\nmkdir $target\ncp -r * $target\n')))}d.isMDXComponent=!0}}]);