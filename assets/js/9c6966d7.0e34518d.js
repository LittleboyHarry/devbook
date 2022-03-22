"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[204],{8394:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(7294),l=t(7462),r=t(2389),o=t(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3810),s=t(6010),c="tabItem_vU9c";function d(e){var n,t,r,o=e.lazy,d=e.block,p=e.defaultValue,v=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,u.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),x=w.tabGroupChoices,E=w.setTabGroupChoices,y=(0,a.useState)(g),z=y[0],N=y[1],T=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=x[m];null!=C&&C!==z&&k.some((function(e){return e.value===C}))&&N(C)}var I=function(e){var n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==z&&(Z(n),N(a),null!=m&&E(m,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;t=T[l]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:z===n?0:-1,"aria-selected":z===n,key:n,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:I,onClick:I},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":z===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===z}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==z})}))))}function p(e){var n=(0,r.Z)();return a.createElement(d,(0,l.Z)({key:String(n)},e))}var v=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)},m=t(9055);function f(e){var n=e.name,t=e.dnf,l=e.apt,r=e.scoop,o=e.winget,i=[];return t&&i.push(a.createElement(v,{key:"dnf",value:"dnf",label:"rpm (Linux)"},a.createElement(m.Z,{className:"language-shell"},"sudo dnf install -y "+(!0===t?n:t)))),l&&i.push(a.createElement(v,{key:"apt",value:"apt",label:"deb (Linux)"},a.createElement(m.Z,{className:"language-shell"},"sudo apt install -y "+(!0===l?n:l)))),r&&i.push(a.createElement(v,{key:"scoop",value:"scoop",label:"scoop (Windows)"},a.createElement(m.Z,{className:"language-batch"},"scoop install "+(!0===r?n:r)))),o&&i.push(a.createElement(v,{key:"winget",value:"winget",label:"winget (Windows)"},a.createElement(m.Z,{className:"language-batch"},"winget install "+(!0===o?n:o)))),a.createElement(p,{groupId:"package-manager"},i)}},2649:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=t(8394),i=["components"],u={},s=void 0,c={unversionedId:"dev/cli/zoxide",id:"dev/cli/zoxide",title:"zoxide",description:"pwd \u76ee\u5f55\u5207\u6362\u8f85\u52a9",source:"@site/docs/dev/30-cli/zoxide.md",sourceDirName:"dev/30-cli",slug:"/dev/cli/zoxide",permalink:"/geekbook/docs/dev/cli/zoxide",editUrl:"https://gitee.com/littleboyharry/geekbook/edit/main/docs/dev/30-cli/zoxide.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"tmux",permalink:"/geekbook/docs/dev/cli/tmux"},next:{title:"neovim",permalink:"/geekbook/docs/dev/neovim"}},d=[{value:"\u96c6\u6210",id:"\u96c6\u6210",children:[{value:"fzf",id:"fzf",children:[],level:3}],level:2}],p={toc:d};function v(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pwd \u76ee\u5f55\u5207\u6362\u8f85\u52a9"),(0,r.kt)(o.Z,{name:"zoxide",dnf:!0,apt:!0,scoop:!0,mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,r.kt)("p",null,"bash/zsh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"printf 'eval \"$(zoxide init bash)\"\\n' >> ~/.bashrc\nprintf 'eval \"$(zoxide init zsh)\"\\n' >> ~/.zshrc\n")),(0,r.kt)("p",null,"PowerShell ",(0,r.kt)("inlineCode",{parentName:"p"},"$profile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"## For zoxide v0.8.0+\nInvoke-Expression (& {\n    $hook = if ($PSVersionTable.PSVersion.Major -lt 6) { 'prompt' } else { 'pwd' }\n    (zoxide init --hook $hook powershell | Out-String)\n})\n\n## For older versions of zoxide\nInvoke-Expression (& {\n    $hook = if ($PSVersionTable.PSVersion.Major -lt 6) { 'prompt' } else { 'pwd' }\n    (zoxide init --hook $hook powershell) -join \"`n\"\n})\n")),(0,r.kt)("h3",{id:"fzf"},"fzf"),(0,r.kt)("p",null,"\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"zi")," \u641c\u7d22\u8bb0\u5f55"))}v.isMDXComponent=!0}}]);