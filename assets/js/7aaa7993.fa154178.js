"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[1124],{2360:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),o=t(6010),l="tabItem_OmH5";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),o=t(7294),l=t(2389),r=t(7392),i=t(7094),u=t(2466),s=t(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,l,p=e.lazy,m=e.block,f=e.defaultValue,v=e.values,h=e.groupId,b=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,r.l)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===f?f:null!=(n=null!=f?f:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=k[0])?void 0:l.props.value;if(null!==x&&!g.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,T=(0,o.useState)(x),Z=T[0],P=T[1],D=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=w[h];null!=_&&_!==Z&&g.some((function(e){return e.value===_}))&&P(_)}var C=function(e){var n=e.currentTarget,t=D.indexOf(n),a=g[t].value;a!==Z&&(I(n),P(a),null!=h&&E(h,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;t=D[o]||D[D.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return D.push(e)},onKeyDown:S,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),p?(0,o.cloneElement)(k.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function m(e){var n=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),o=t(9877),l=t(2360),r=t(5710),i=t(6010),u="root_WbTl";function s(e){var n=e.items,t=e.expression,o=e.key,i=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;t&&n.push(a.createElement(l.Z,{attributes:{title:u},key:o,value:o,label:i},a.createElement(r.Z,{className:"language-shell"},c+" "+(!0===t?s:t))))}function c(e){var n,t=e.name,l=e.dnf,r=e.apt,c=e.scoop,d=e.choco,p=e.winget,m=e.pacman,f=e.pipx,v=e.yarn,h=e.longBanner,b=(n=[],r&&n.push("apt"),l&&n.push("dnf"),c&&n.push("scoop"),p&&n.push("winget"),m&&n.push("pacman"),f&&n.push("pipx"),v&&n.push("yarn"),"getpkg-"+n.join("&")),k=[];if(s({items:k,expression:r,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),s({items:k,expression:l,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),s({items:k,expression:c,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),s({items:k,expression:d,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),s({items:k,expression:p,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),s({items:k,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),s({items:k,expression:f,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),s({items:k,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),k.length<=0)throw"Empty GetPkg";return 1==k.length?k[0]:a.createElement(o.Z,{className:(0,i.Z)(h&&"tabs--block",u),groupId:b},k)}},6756:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=t(3117),o=t(102),l=(t(7294),t(3905)),r=t(7717),i=["components"],u={title:"neovim"},s=void 0,c={unversionedId:"dev/neovim",id:"dev/neovim",title:"neovim",description:"\u5b89\u88c5",source:"@site/docs/dev/31-neovim.md",sourceDirName:"dev",slug:"/dev/neovim",permalink:"/geekbook/docs/dev/neovim",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/31-neovim.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"neovim"},sidebar:"dev",previous:{title:"zoxide",permalink:"/geekbook/docs/dev/modern-cli/zoxide"},next:{title:"\u4e0b\u8f7d\u5b89\u88c5",permalink:"/geekbook/docs/dev/vscode/download"}},d={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u81ea\u52a8\u914d\u7f6e",id:"\u81ea\u52a8\u914d\u7f6e",level:2}],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)(r.Z,{name:"neovim",dnf:!0,apt:!0,scoop:!0,mdxType:"GetPkg"}),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u9996\u9009\u6587\u672c\u7f16\u8f91\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global core.editor nvim\necho export SYSTEMD_EDITOR=nvim | tee -a ~/.bashrc ~/.zshrc\n")),(0,l.kt)("h2",{id:"\u81ea\u52a8\u914d\u7f6e"},"\u81ea\u52a8\u914d\u7f6e"),(0,l.kt)("p",null,"\u4f7f\u7528\u4f5c\u8005\u7684\u81ea\u52a8\u811a\u672c\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/dev/deploy-my-dotfiles"},(0,l.kt)("inlineCode",{parentName:"a"},"deploy-my-dotfiles"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(cd ~/deploy-my-dotfiles;./deploy modules/neovim/)\n")))}f.isMDXComponent=!0}}]);