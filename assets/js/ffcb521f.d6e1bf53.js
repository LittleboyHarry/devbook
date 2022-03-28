"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[2120],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),r=t(7294),l=t(2389),i=t(9443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3810),s=t(6010),c="tabItem_vU9c";function d(e){var n,t,l,i=e.lazy,d=e.block,p=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,u.lx)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),x=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(g),E=w[0],Z=w[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=x[m];null!=D&&D!==E&&k.some((function(e){return e.value===D}))&&Z(D)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==E&&(P(n),Z(a),null!=m&&N(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},v)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function p(e){var n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},4211:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7294),r=t(6396),l=t(8215),i=t(9055);function o(e){var n=e.items,t=e.expression,r=e.key,o=e.label,u=e.defaultPkgName,s=e.prefix;t&&n.push(a.createElement(l.Z,{key:r,value:r,label:o},a.createElement(i.Z,{className:"language-shell"},s+" "+(!0===t?u:t))))}function u(e){var n,t=e.name,l=e.dnf,i=e.apt,u=e.scoop,s=e.winget,c=e.pacman,d=e.pipx,p=e.yarn,f=e.longBanner,m=(n=[],l&&n.push("dnf"),i&&n.push("apt"),u&&n.push("scoop"),s&&n.push("winget"),c&&n.push("pacman"),d&&n.push("pipx"),p&&n.push("yarn"),"getpkg-"+n.join("&")),v=[];return o({items:v,expression:l,key:"dnf",label:"rpm (Linux)",defaultPkgName:t,prefix:"sudo dnf install -y"}),o({items:v,expression:i,key:"apt",label:"deb (Linux)",defaultPkgName:t,prefix:"sudo apt install -y"}),o({items:v,expression:u,key:"scoop",label:"scoop (Windows)",defaultPkgName:t,prefix:"scoop install"}),o({items:v,expression:s,key:"winget",label:"winget (Windows)",defaultPkgName:t,prefix:"winget install"}),o({items:v,expression:c,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),o({items:v,expression:d,key:"pipx",label:"pipx (Python)",defaultPkgName:t,prefix:"pipx install"}),o({items:v,expression:p,key:"yarn",label:"yarn (Node.js)",defaultPkgName:t,prefix:"yarn global add"}),a.createElement(r.Z,{className:f&&"tabs--block",groupId:m},v)}},8776:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=t(4211),o=["components"],u={title:"\u6587\u4ef6\u67e5\u627e"},s="fd",c={unversionedId:"dev/cli/fd",id:"dev/cli/fd",title:"\u6587\u4ef6\u67e5\u627e",description:"\u9488\u5bf9 Debian",source:"@site/docs/dev/30-cli/33-fd.md",sourceDirName:"dev/30-cli",slug:"/dev/cli/fd",permalink:"/geekbook/docs/dev/cli/fd",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/30-cli/33-fd.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"\u6587\u4ef6\u67e5\u627e"},sidebar:"dev",previous:{title:"fzf",permalink:"/geekbook/docs/dev/cli/fzf"},next:{title:"\u6587\u672c\u67e5\u627e",permalink:"/geekbook/docs/dev/cli/ripgrep"}},d=[],p={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fd"},"fd"),(0,l.kt)(i.Z,{name:"fd-find",dnf:!0,apt:!0,scoop:"fd",mdxType:"GetPkg"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u9488\u5bf9 Debian"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fdfind")," \u624d\u662f Debian \u4e13\u7528\u7684\u7a0b\u5e8f\u540d\uff0c\u6b64\u662f\u6280\u672f\u95ee\u9898\u3002\u53ef\u8c03\u6574\u8fc7\u6765\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"echo alias fd=fdfind | tee -a ~/.bashrc ~/.zshrc > /dev/null\n"))))}f.isMDXComponent=!0}}]);