"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[257],{8394:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(7462),o=n(2389),l=n(9443);var s=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(3810),u=n(6010),d="tabItem_vU9c";function c(e){var t,n,o,l=e.lazy,c=e.block,p=e.defaultValue,m=e.values,k=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=s(),w=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,a.useState)(b),E=C[0],T=C[1],x=[],F=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=w[k];null!=S&&S!==E&&h.some((function(e){return e.value===S}))&&T(S)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==E&&(F(t),T(a),null!=k&&y(k,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:Z,onClick:Z},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}var m=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},k=n(9055);function f(e){var t=e.name,n=e.dnf,r=e.apt,o=e.scoop,l=e.winget,s=[];return n&&s.push(a.createElement(m,{key:"dnf",value:"dnf",label:"rpm (Linux)"},a.createElement(k.Z,{className:"language-shell"},"sudo dnf install -y "+(!0===n?t:n)))),r&&s.push(a.createElement(m,{key:"apt",value:"apt",label:"deb (Linux)"},a.createElement(k.Z,{className:"language-shell"},"sudo apt install -y "+(!0===r?t:r)))),o&&s.push(a.createElement(m,{key:"scoop",value:"scoop",label:"scoop (Windows)"},a.createElement(k.Z,{className:"language-batch"},"scoop install "+(!0===o?t:o)))),l&&s.push(a.createElement(m,{key:"winget",value:"winget",label:"winget (Windows)"},a.createElement(k.Z,{className:"language-batch"},"winget install "+(!0===l?t:l)))),a.createElement(p,{groupId:"package-manager"},s)}},387:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(8394),s=["components"],i={title:"\u5b57\u4f53"},u=void 0,d={unversionedId:"dev/font",id:"dev/font",title:"\u5b57\u4f53",description:"\u63a8\u8350",source:"@site/docs/dev/2-font.md",sourceDirName:"dev",slug:"/dev/font",permalink:"/geekbook/docs/dev/font",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/2-font.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b57\u4f53"},sidebar:"dev",previous:{title:"\u952e\u4f4d\u8c03\u6574",permalink:"/geekbook/docs/dev/keymap"},next:{title:"Git",permalink:"/geekbook/docs/dev/git"}},c=[{value:"\u63a8\u8350",id:"\u63a8\u8350",children:[{value:"JetBrains Mono",id:"jetbrains-mono",children:[],level:3},{value:"CascadiaCode NerdFont",id:"cascadiacode-nerdfont",children:[],level:3},{value:"\u7b49\u8ddd\u66f4\u7eb1",id:"\u7b49\u8ddd\u66f4\u7eb1",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u63a8\u8350"},"\u63a8\u8350"),(0,o.kt)("p",null,"\u7531\u5927\u516c\u53f8\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u51fa\u6765\u7684\u7f16\u7a0b\u5b57\u4f53\uff0c\u6216\u5f00\u6e90\u793e\u533a\u597d\u8bc4\u5b57\u4f53"),(0,o.kt)("p",null,"Windows Scoop \u4f9d\u8d56\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scoop bucket add nerd-fonts\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"KDE wayland bug"),(0,o.kt)("p",null,"\u4fee\u590d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cd ~/.local/share/applications/\ncp /usr/share/applications/org.kde.kfontview.desktop .\nsed -i "/Exec/ s/=/=env QT_QPA_PLATFORM=xcb /" org.kde.kfontview.desktop\ncd -\n')),(0,o.kt)("p",null,"\u8ddf\u8fdb\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://bugs.kde.org/show_bug.cgi?id=439470"},"https://bugs.kde.org/show_bug.cgi?id=439470"))),(0,o.kt)("h3",{id:"jetbrains-mono"},"JetBrains Mono"),(0,o.kt)("p",null,"\u4ecb\u7ecd ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/zh-cn/lp/mono/"},"https://www.jetbrains.com/zh-cn/lp/mono/")," \u5b89\u88c5\uff1a"),(0,o.kt)(l.Z,{name:"goldendict",dnf:"jetbrains-mono-fonts",scoop:"JetBrains-Mono",mdxType:"GetPkg"}),(0,o.kt)("h3",{id:"cascadiacode-nerdfont"},"CascadiaCode NerdFont"),(0,o.kt)("p",null,"\u5fae\u8f6f\u51fa\u54c1\uff0c\u9002\u7528\u4e8e\u7ec8\u7aef"),(0,o.kt)("p",null,"Nerd Font \u652f\u6301\u7248\u4e0b\u8f7d: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ryanoasis/nerd-fonts/releases/latest/download/CascadiaCode.zip"},"https://github.com/ryanoasis/nerd-fonts/releases/latest/download/CascadiaCode.zip")),(0,o.kt)("p",null,"Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scoop install CascadiaCode-NF\n")),(0,o.kt)("p",null,"\u53c2\u89c1\u5173\u4e8e\u56fe\u6807\u5b57\u4f53 Nerd Font \u7684",(0,o.kt)("a",{parentName:"p",href:"https://www.nerdfonts.com/"},"\u5b98\u65b9\u4ecb\u7ecd")),(0,o.kt)("p",null,"VSCode ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," \u8bbe\u7f6e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Linux"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"terminal.integrated.fontFamily": "CaskaydiaCove Nerd Font"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Windows"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"terminal.integrated.fontFamily": "CaskaydiaCove NF"\n')))),(0,o.kt)("p",null,"Windows Terminal: ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," ",(0,o.kt)("inlineCode",{parentName:"p"},".profiles.defaults.fontFace")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"CaskaydiaCove NF"')),(0,o.kt)("h3",{id:"\u7b49\u8ddd\u66f4\u7eb1"},"\u7b49\u8ddd\u66f4\u7eb1"),(0,o.kt)("p",null,"\u4f18\u70b9\uff1a\u4e2d\u82f1\u7b49\u5bbd\u3001\u53ef\u9009\u8fde\u4f53\u3001\u7a84\u5b57"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/M17N:fonts/openSUSE_Tumbleweed/M17N:fonts.repo\ndnf download sarasa-gothic-fonts\nsudo dnf config-manager --set-disabled M17N_fonts\nsudo dnf in -y sarasa-gothic-fonts-*.rpm\n")),(0,o.kt)("p",null,"Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"winget install 7zip.7zip\nscoop install SarasaGothic-SC\n")),(0,o.kt)("p",null,"\u6e05\u534e\u955c\u50cf\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/github-release/be5invis/Sarasa-Gothic/LatestRelease/"},"https://mirrors.tuna.tsinghua.edu.cn/github-release/be5invis/Sarasa-Gothic/LatestRelease/")," \u9009",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u5e26")," unhinted \u7684 ttc \u7248\u5b89\u88c5"),(0,o.kt)("p",null,"\u4e3a VSCode ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," \u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"editor.fontFamily": "Sarasa Term SC",\n"editor.fontLigatures": true,\n')))}m.isMDXComponent=!0}}]);