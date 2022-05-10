"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[3833],{2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(6010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),i=n(7294),l=n(2389),o=n(7392),r=n(7094),s=n(2466),u=n(6010),p="tabList_uSqn",d="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,m=e.block,h=e.defaultValue,v=e.values,f=e.groupId,k=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,r.U)(),x=w.tabGroupChoices,z=w.setTabGroupChoices,E=(0,i.useState)(y),Z=E[0],T=E[1],I=[],M=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=x[f];null!=P&&P!==Z&&g.some((function(e){return e.value===P}))&&T(P)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==Z&&(M(t),T(a),null!=f&&z(f,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;n=I[i]||I[I.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,u.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:S,onClick:S},l,{className:(0,u.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,l.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),i=n(9877),l=n(2360),o=n(5710),r=n(6010),s="root_WbTl",u="sole_DVUS";function p(e){var t=e.items,n=e.expression,i=e.key,r=e.label,s=e.hint,u=e.defaultPkgName,p=e.prefix;n&&t.push(a.createElement(l.Z,{attributes:{title:s},key:i,value:i,label:r},a.createElement(o.Z,{className:"language-shell"},p+" "+(!0===n?u:n))))}function d(e){var t=e.name,n=e.choco,l=e.scoop,o=e.winget,d=e.flatpak,c=e.apt,m=e.pacman,h=e.dnf,v=e.pipx,f=e.yarn,k=e.longBanner,b=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),l&&e.push("scoop"),o&&e.push("winget"),d&&e.push("flatpak"),c&&e.push("apt"),m&&e.push("pacman"),h&&e.push("dnf"),v&&e.push("pipx"),f&&e.push("yarn"),"getpkg-"+e.join("&")}),[c,h,l,o,m,v,f]),g=[];if(p({items:g,expression:d,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),p({items:g,expression:c,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),p({items:g,expression:h,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),p({items:g,expression:l,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),p({items:g,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),p({items:g,expression:o,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),p({items:g,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),p({items:g,expression:v,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),p({items:g,expression:f,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:u},g[0]):a.createElement(i.Z,{className:(0,r.Z)(k&&"tabs--block",s),groupId:b},g)}},5918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),o=n(7717),r=["components"],s={title:"Zsh"},u=void 0,p={unversionedId:"dev/zsh",id:"dev/zsh",title:"Zsh",description:"\u5b89\u88c5",source:"@site/docs/dev/3-zsh.md",sourceDirName:"dev",slug:"/dev/zsh",permalink:"/geekbook/docs/dev/zsh",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/3-zsh.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Zsh"},sidebar:"dev",previous:{title:"\u5b57\u4f53",permalink:"/geekbook/docs/dev/font"},next:{title:"deploy-my-dotfiles",permalink:"/geekbook/docs/dev/deploy-my-dotfiles"}},d={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8c03\u4f18",id:"\u8c03\u4f18",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)(o.Z,{name:"zsh",dnf:!0,apt:!0,pacman:!0,mdxType:"GetPkg"}),(0,l.kt)("p",null,"\u66f4\u6539 GNOME/KDE \u7ec8\u7aef\u9ed8\u8ba4\u547d\u4ee4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/zsh"),"\uff1a\n\u8fd8\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u80cc\u666f\u900f\u660e\u5ea6\u3001\u4e3b\u9898\u8272\u8c03"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u4e3a\u767b\u5f55 Shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"chsh -s $(which zsh)\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u4e3a tmux \u9ed8\u8ba4\u7ec8\u7aef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf\n')),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u914d\u7f6e\uff0c\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zsh\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f5c\u8005\u7684\u914d\u7f6e")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"touch ~/.zshrc && vi +star ~/.zshrc\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Lines configured by zsh-newuser-install\nHISTFILE=~/.histfile\nHISTSIZE=1000000\nSAVEHIST=1000000\nsetopt autocd beep nomatch notify\nunsetopt extendedglob\nbindkey -e\n## End of lines configured by zsh-newuser-install\n## The following lines were added by compinstall\nautoload -Uz compinit\ncompinit\n## End of lines added by compinstall\n")))),(0,l.kt)("h2",{id:"\u8c03\u4f18"},"\u8c03\u4f18"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63a8\u8350\u7684\u81ea\u52a8\u914d\u7f6e")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528\u4f5c\u8005\u7f16\u5199\u7684 ",(0,l.kt)("a",{parentName:"p",href:"deploy-my-dotfiles"},"deploy-my-dotfiles"),"\uff0c\u5305\u542b\u4e0b\u6587\u914d\u7f6e\uff1a"))),(0,l.kt)("p",null,"\u5ffd\u7565\u6ce8\u91ca:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"echo 'setopt interactivecomments' >> ~/.zshrc\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u91cd\u542f\u7a0b\u5e8f\u4ee5\u751f\u6548")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"exec zsh\n")))))}h.isMDXComponent=!0}}]);