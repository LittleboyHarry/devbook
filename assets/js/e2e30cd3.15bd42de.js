"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[2822],{8394:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),l=t(7462),r=t(2389),u=t(9443);var o=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3810),s=t(6010),c="tabItem_vU9c";function d(e){var n,t,r,u=e.lazy,d=e.block,f=e.defaultValue,v=e.values,p=e.groupId,m=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===f?f:null!=(n=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),E=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(g),T=N[0],Z=N[1],x=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var D=E[p];null!=D&&D!==T&&h.some((function(e){return e.value===D}))&&Z(D)}var I=function(e){var n=e.currentTarget,t=x.indexOf(n),a=h[t].value;a!==T&&(C(n),Z(a),null!=p&&w(p,a))},z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},m)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:z,onFocus:I,onClick:I},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function f(e){var n=(0,r.Z)();return a.createElement(d,(0,l.Z)({key:String(n)},e))}var v=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)},p=t(9055);function m(e){var n=e.name,t=e.dnf,l=e.apt,r=e.scoop,u=e.winget,o=[];return t&&o.push(a.createElement(v,{key:"dnf",value:"dnf",label:"rpm (Linux)"},a.createElement(p.Z,{className:"language-shell"},"sudo dnf install -y "+(!0===t?n:t)))),l&&o.push(a.createElement(v,{key:"apt",value:"apt",label:"deb (Linux)"},a.createElement(p.Z,{className:"language-shell"},"sudo apt install -y "+(!0===l?n:l)))),r&&o.push(a.createElement(v,{key:"scoop",value:"scoop",label:"scoop (Windows)"},a.createElement(p.Z,{className:"language-batch"},"scoop install "+(!0===r?n:r)))),u&&o.push(a.createElement(v,{key:"winget",value:"winget",label:"winget (Windows)"},a.createElement(p.Z,{className:"language-batch"},"winget install "+(!0===u?n:u)))),a.createElement(f,{groupId:"package-manager"},o)}},2636:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),u=t(8394),o=["components"],i={},s=void 0,c={unversionedId:"dev/cli/fd",id:"dev/cli/fd",title:"fd",description:"\u5b89\u88dd",source:"@site/docs/dev/30-cli/fd.md",sourceDirName:"dev/30-cli",slug:"/dev/cli/fd",permalink:"/geekbook/docs/dev/cli/fd",editUrl:"https://gitee.com/littleboyharry/geekbook/edit/main/docs/dev/30-cli/fd.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"delta",permalink:"/geekbook/docs/dev/cli/delta"},next:{title:"fzf",permalink:"/geekbook/docs/dev/cli/fzf"}},d=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",children:[],level:2}],f={toc:d};function v(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,r.kt)(u.Z,{name:"fd",dnf:"fd-find",apt:!0,scoop:!0,mdxType:"GetPkg"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9488\u5bf9 Debian"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fdfind")," \u624d\u662f Debian \u4e13\u7528\u7684\u7a0b\u5e8f\u540d\uff0c\u6b64\u662f\u6280\u672f\u95ee\u9898\u3002\u53ef\u8c03\u6574\u8fc7\u6765\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo alias fd=fdfind | tee -a ~/.bashrc ~/.zshrc > /dev/null\n"))))}v.isMDXComponent=!0}}]);