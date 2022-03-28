"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[7809],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3810),s=t(6010),c="tabItem_vU9c";function p(e){var n,t,o,l=e.lazy,p=e.block,d=e.defaultValue,f=e.values,m=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),x=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(g),E=N[0],Z=N[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=x[m];null!=C&&C!==E&&b.some((function(e){return e.value===C}))&&Z(C)}var D=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==E&&(P(n),Z(a),null!=m&&w(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},4211:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7294),r=t(6396),o=t(8215),l=t(9055);function i(e){var n=e.items,t=e.expression,r=e.key,i=e.label,u=e.defaultPkgName,s=e.prefix;t&&n.push(a.createElement(o.Z,{key:r,value:r,label:i},a.createElement(l.Z,{className:"language-shell"},s+" "+(!0===t?u:t))))}function u(e){var n,t=e.name,o=e.dnf,l=e.apt,u=e.scoop,s=e.winget,c=e.pacman,p=e.pipx,d=e.yarn,f=e.longBanner,m=(n=[],o&&n.push("dnf"),l&&n.push("apt"),u&&n.push("scoop"),s&&n.push("winget"),c&&n.push("pacman"),p&&n.push("pipx"),d&&n.push("yarn"),"getpkg-"+n.join("&")),v=[];return i({items:v,expression:o,key:"dnf",label:"rpm (Linux)",defaultPkgName:t,prefix:"sudo dnf install -y"}),i({items:v,expression:l,key:"apt",label:"deb (Linux)",defaultPkgName:t,prefix:"sudo apt install -y"}),i({items:v,expression:u,key:"scoop",label:"scoop (Windows)",defaultPkgName:t,prefix:"scoop install"}),i({items:v,expression:s,key:"winget",label:"winget (Windows)",defaultPkgName:t,prefix:"winget install"}),i({items:v,expression:c,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),i({items:v,expression:p,key:"pipx",label:"pipx (Python)",defaultPkgName:t,prefix:"pipx install"}),i({items:v,expression:d,key:"yarn",label:"yarn (Node.js)",defaultPkgName:t,prefix:"yarn global add"}),a.createElement(r.Z,{className:f&&"tabs--block",groupId:m},v)}},6749:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=t(4211),i=["components"],u={},s=void 0,c={unversionedId:"dev/cli/network",id:"dev/cli/network",title:"network",description:"\u89e3\u51b3\u56fd\u5185\u5f00\u53d1\u9047\u5230\u7684\u7f51\u7edc\u95ee\u9898",source:"@site/docs/dev/30-cli/network.md",sourceDirName:"dev/30-cli",slug:"/dev/cli/network",permalink:"/geekbook/docs/dev/cli/network",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/30-cli/network.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"\u6587\u672c\u67e5\u627e",permalink:"/geekbook/docs/dev/cli/ripgrep"},next:{title:"pipx",permalink:"/geekbook/docs/dev/cli/pipx"}},p=[],d={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u89e3\u51b3\u56fd\u5185\u5f00\u53d1\u9047\u5230\u7684\u7f51\u7edc\u95ee\u9898"),(0,o.kt)(l.Z,{name:"proxychains-ng",dnf:!0,apt:!0,mdxType:"GetPkg"}),(0,o.kt)("p",null,"\u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# fedora\nsudo vi +$ /etc/proxychains.conf\n\n# debian\nsudo vi +$ /etc/proxychains4.conf\n")),(0,o.kt)("p",null,"\u66ff\u4ee3\u54c1\uff1atsocks"),(0,o.kt)("p",null,"Windows\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/sockscap64/files/latest/download"},"https://sourceforge.net/projects/sockscap64/files/latest/download")))}f.isMDXComponent=!0}}]);