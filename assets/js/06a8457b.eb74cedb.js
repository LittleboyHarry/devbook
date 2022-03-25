"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5466],{8394:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(7294),a=t(7462),l=t(2389),o=t(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3810),s=t(6010),c="tabItem_vU9c";function p(e){var n,t,l,o=e.lazy,p=e.block,d=e.defaultValue,f=e.values,v=e.groupId,m=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.lx)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),x=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(h),E=N[0],T=N[1],Z=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=x[v];null!=P&&P!==E&&k.some((function(e){return e.value===P}))&&T(P)}var D=function(e){var n=e.currentTarget,t=Z.indexOf(n),r=k[t].value;r!==E&&(C(n),T(r),null!=v&&w(v,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=Z.indexOf(e.currentTarget)+1;t=Z[r]||Z[0];break;case"ArrowLeft":var a=Z.indexOf(e.currentTarget)-1;t=Z[a]||Z[Z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},m)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:I,onFocus:D,onClick:D},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}var f=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)},v=t(9055);function m(e){var n=e.tabs,t=e.expression,a=e.key,l=e.label,o=e.defaultPkgName,i=e.prefix;t&&n.push(r.createElement(f,{key:a,value:a,label:l},r.createElement(v.Z,{className:"language-shell"},i+" "+(!0===t?o:t))))}function b(e){var n=e.name,t=e.dnf,a=e.apt,l=e.scoop,o=(e.winget,e.pacman),i=e.longBanner,u=[];return m({tabs:u,expression:t,key:"dnf",label:"rpm (Linux)",defaultPkgName:n,prefix:"sudo dnf install -y"}),m({tabs:u,expression:a,key:"apt",label:"deb (Linux)",defaultPkgName:n,prefix:"sudo apt install -y"}),m({tabs:u,expression:l,key:"scoop",label:"scoop (Windows)",defaultPkgName:n,prefix:"scoop install"}),m({tabs:u,expression:l,key:"winget",label:"winget (Windows)",defaultPkgName:n,prefix:"winget install"}),m({tabs:u,expression:o,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),r.createElement(d,{className:i&&"tabs--block",groupId:"package-manager"},u)}},6700:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=t(8394),i=["components"],u={},s=void 0,c={unversionedId:"dev/cli/ripgrep",id:"dev/cli/ripgrep",title:"ripgrep",description:"\u5b89\u88dd",source:"@site/docs/dev/30-cli/ripgrep.md",sourceDirName:"dev/30-cli",slug:"/dev/cli/ripgrep",permalink:"/geekbook/docs/dev/cli/ripgrep",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/30-cli/ripgrep.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"pipx",permalink:"/geekbook/docs/dev/cli/pipx"},next:{title:"tldr",permalink:"/geekbook/docs/dev/cli/tldr"}},p=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",children:[],level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,l.kt)(o.Z,{name:"ripgrep",dnf:!0,apt:!0,scoop:!0,mdxType:"GetPkg"}))}f.isMDXComponent=!0}}]);