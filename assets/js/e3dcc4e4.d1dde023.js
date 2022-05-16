"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[2547],{2360:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),o=t(6010),l="tabItem_OmH5";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),o=t(7294),l=t(2389),r=t(7392),i=t(7094),s=t(2466),u=t(6010),p="tabList_uSqn",d="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,m=e.block,f=e.defaultValue,v=e.values,h=e.groupId,k=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,r.l)(x,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==y&&!x.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,z=w.setTabGroupChoices,E=(0,o.useState)(y),P=E[0],T=E[1],Z=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=N[h];null!=I&&I!==P&&x.some((function(e){return e.value===I}))&&T(I)}var D=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=x[t].value;a!==P&&(S(n),T(a),null!=h&&z(h,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var o=Z.indexOf(e.currentTarget)-1;t=Z[o]||Z[Z.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,u.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},k)},x.map((function(e){var n=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:C,onFocus:D,onClick:D},l,{className:(0,u.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),c?(0,o.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function m(e){var n=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7294),o=t(9877),l=t(2360),r=t(5710),i=t(6010),s="root_WbTl",u="sole_DVUS";function p(e){var n=e.items,t=e.expression,o=e.key,i=e.label,s=e.hint,u=e.defaultPkgName,p=e.prefix;t&&n.push(a.createElement(l.Z,{attributes:{title:s},key:o,value:o,label:i},a.createElement(r.Z,{className:"language-shell"},p+" "+(!0===t?u:t))))}function d(e){var n=e.name,t=e.choco,l=e.scoop,r=e.winget,d=e.flatpak,c=e.apt,m=e.pacman,f=e.dnf,v=e.pipx,h=e.yarn,k=e.longBanner,b=(0,a.useMemo)((function(){var e=[];return t&&e.push("choco"),l&&e.push("scoop"),r&&e.push("winget"),d&&e.push("flatpak"),c&&e.push("apt"),m&&e.push("pacman"),f&&e.push("dnf"),v&&e.push("pipx"),h&&e.push("yarn"),"getpkg-"+e.join("&")}),[c,f,l,r,m,v,h]),x=[];if(p({items:x,expression:d,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),p({items:x,expression:c,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo apt install -y"}),p({items:x,expression:f,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo dnf install -y"}),p({items:x,expression:l,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"scoop install"}),p({items:x,expression:t,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo choco install"}),p({items:x,expression:r,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"winget install"}),p({items:x,expression:m,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),p({items:x,expression:v,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:n,prefix:"pipx install"}),p({items:x,expression:h,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"yarn global add"}),x.length<=0)throw"Empty GetPkg";return 1==x.length?a.createElement("div",{className:u},x[0]):a.createElement(o.Z,{className:(0,i.Z)(k&&"tabs--block",s),groupId:b},x)}},6549:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(3117),o=t(102),l=(t(7294),t(3905)),r=t(7717),i=["components"],s={},u=void 0,p={unversionedId:"devenv/modern-cli/zoxide",id:"devenv/modern-cli/zoxide",title:"zoxide",description:"pwd \u76ee\u5f55\u5207\u6362\u8f85\u52a9",source:"@site/docs/devenv/30-modern-cli/zoxide.md",sourceDirName:"devenv/30-modern-cli",slug:"/devenv/modern-cli/zoxide",permalink:"/devbook/docs/devenv/modern-cli/zoxide",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/devenv/30-modern-cli/zoxide.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"tmux",permalink:"/devbook/docs/devenv/modern-cli/tmux"},next:{title:"neovim",permalink:"/devbook/docs/devenv/neovim"}},d={},c=[{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"fzf",id:"fzf",level:3}],m={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pwd \u76ee\u5f55\u5207\u6362\u8f85\u52a9"),(0,l.kt)(r.Z,{name:"zoxide",dnf:!0,apt:!0,scoop:!0,pacman:!0,mdxType:"GetPkg"}),(0,l.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,l.kt)("p",null,"bash/zsh:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"printf 'eval \"$(zoxide init bash)\"\\n' >> ~/.bashrc\nprintf 'eval \"$(zoxide init zsh)\"\\n' >> ~/.zshrc\n")),(0,l.kt)("p",null,"PowerShell ",(0,l.kt)("inlineCode",{parentName:"p"},"$profile"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"## For zoxide v0.8.0+\nInvoke-Expression (& {\n    $hook = if ($PSVersionTable.PSVersion.Major -lt 6) { 'prompt' } else { 'pwd' }\n    (zoxide init --hook $hook powershell | Out-String)\n})\n\n## For older versions of zoxide\nInvoke-Expression (& {\n    $hook = if ($PSVersionTable.PSVersion.Major -lt 6) { 'prompt' } else { 'pwd' }\n    (zoxide init --hook $hook powershell) -join \"`n\"\n})\n")),(0,l.kt)("h3",{id:"fzf"},"fzf"),(0,l.kt)("p",null,"\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"zi")," \u641c\u7d22\u8bb0\u5f55"))}f.isMDXComponent=!0}}]);