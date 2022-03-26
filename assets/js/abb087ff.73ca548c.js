"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[9697],{8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},6396:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(7462),r=t(7294),i=t(2389),l=t(9443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3810),u=t(6010),d="tabItem_vU9c";function c(e){var a,t,i,l=e.lazy,c=e.block,v=e.defaultValue,p=e.values,m=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,s.lx)(h,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===v?v:null!=(a=null!=v?v:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),x=N.tabGroupChoices,w=N.setTabGroupChoices,y=(0,r.useState)(g),E=y[0],V=y[1],C=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var L=x[m];null!=L&&L!==E&&h.some((function(e){return e.value===L}))&&V(L)}var T=function(e){var a=e.currentTarget,t=C.indexOf(a),n=h[t].value;n!==E&&(Z(a),V(n),null!=m&&w(m,n))},P=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},k)},h.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,key:a,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:T,onClick:T},i,{className:(0,u.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===a})}),null!=t?t:a)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})}))))}function v(e){var a=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(a)},e))}},4211:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7294),r=t(6396),i=t(8215),l=t(9055);function o(e){var a=e.tabs,t=e.expression,r=e.key,o=e.label,s=e.defaultPkgName,u=e.prefix;t&&a.push(n.createElement(i.Z,{key:r,value:r,label:o},n.createElement(l.Z,{className:"language-shell"},u+" "+(!0===t?s:t))))}function s(e){var a=e.name,t=e.dnf,i=e.apt,l=e.scoop,s=e.winget,u=e.pacman,d=e.pipx,c=e.yarn,v=e.longBanner,p=[];return o({tabs:p,expression:t,key:"dnf",label:"rpm (Linux)",defaultPkgName:a,prefix:"sudo dnf install -y"}),o({tabs:p,expression:i,key:"apt",label:"deb (Linux)",defaultPkgName:a,prefix:"sudo apt install -y"}),o({tabs:p,expression:l,key:"scoop",label:"scoop (Windows)",defaultPkgName:a,prefix:"scoop install"}),o({tabs:p,expression:s,key:"winget",label:"winget (Windows)",defaultPkgName:a,prefix:"winget install"}),o({tabs:p,expression:u,key:"pacman",label:"pacman",defaultPkgName:a,prefix:"yes | sudo pacman -S"}),o({tabs:p,expression:d,key:"pipx",label:"pipx (Python)",defaultPkgName:a,prefix:"pipx install"}),o({tabs:p,expression:c,key:"yarn",label:"yarn (Node.js)",defaultPkgName:a,prefix:"yarn global add"}),n.createElement(r.Z,{className:v&&"tabs--block",groupId:"package-manager"},p)}},7965:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(4211),o=["components"],s={title:"Vagrant"},u=void 0,d={unversionedId:"dev/virtual/vagrant",id:"dev/virtual/vagrant",title:"Vagrant",description:"\u8bf7\u53c2\u89c1\u524d\u6587\uff0c\u9009\u62e9 VirtualBox, libvirt \u4e2d\u7684\u4efb\u610f\u4e00\u6b3e\u5b89\u88c5\u5e76\u4f5c\u865a\u62df\u5316\u652f\u6301\u6280\u672f",source:"@site/docs/dev/64-virtual/3-vagrant.md",sourceDirName:"dev/64-virtual",slug:"/dev/virtual/vagrant",permalink:"/geekbook/docs/dev/virtual/vagrant",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/64-virtual/3-vagrant.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Vagrant"},sidebar:"dev",previous:{title:"libvirt",permalink:"/geekbook/docs/dev/virtual/libvirt"},next:{title:"Node.js",permalink:"/geekbook/docs/dev/nodejs"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u6dfb\u52a0\u4e0b\u8f7d box",id:"\u7b2c\u4e00\u6b65\u6dfb\u52a0\u4e0b\u8f7d-box",children:[],level:2},{value:"\u95ee\u9898",id:"\u95ee\u9898",children:[],level:2}],v={toc:c};function p(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8bf7\u53c2\u89c1\u524d\u6587\uff0c\u9009\u62e9 VirtualBox, libvirt \u4e2d\u7684\u4efb\u610f\u4e00\u6b3e\u5b89\u88c5\u5e76\u4f5c\u865a\u62df\u5316\u652f\u6301\u6280\u672f"),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)(l.Z,{name:"vagrant",dnf:!0,winget:!0,mdxType:"GetPkg"}),(0,i.kt)("p",null,"\u65b9\u6cd5\u4e8c\uff1a\u5b98\u65b9\u5b89\u88c5\u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://releases.hashicorp.com/vagrant"},"https://releases.hashicorp.com/vagrant")),(0,i.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u6dfb\u52a0\u4e0b\u8f7d-box"},"\u7b2c\u4e00\u6b65\uff1a\u6dfb\u52a0\u4e0b\u8f7d box"),(0,i.kt)("p",null,"\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vagrant box add --provider libvirt generic/debian11\n")),(0,i.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u62a5\u9519")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Call to virDomainCreateWithFlags failed: \u2026\u2026 bridge `virbr0': No such device"))),(0,i.kt)("p",null,"\u89e3\u51b3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl restart virtnetworkd\nsudo systemctl enable virtnetworkd\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u62a5\u9519")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Call to virConnectOpenReadOnly failed: Failed to connect socket to '/var/run/libvirt/virtqemud-sock-ro': No such file or directory (Libvirt::ConnectionError)"))),(0,i.kt)("p",null,"\u89e3\u51b3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl enable libvirtd\nsudo systemctl start libvirtd\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5bf9\u4e8e Windows\uff1a\u82e5\u6fc0\u6d3b\u4e86 HyperV\uff0c\u91c7\u7528 VirtualBox \u4f5c\u540e\u7aef"),(0,i.kt)("p",{parentName:"div"},"HyperV \u6280\u672f\u5305\u62ec\uff1aWSL\u3001\u4e13\u4e1a\u7248\u6c99\u76d2\u3001docker \u684c\u9762\u7248\u7b49"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u5e94\u8be5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"bcdedit")," \u5173\u95ed HyperV \u91cd\u542f"),(0,i.kt)("li",{parentName:"ol"},"\u6216\u8005\u624b\u52a8\u8bbe\u7f6e VirtualBox \u865a\u62df\u786c\u4ef6\u52a0\u901f\u7684\u534a\u865a\u62df\u5316\u63a5\u53e3\u4e3a\u6700\u5c11"),(0,i.kt)("li",{parentName:"ol"},"\u6253\u5f00 VirtualBox \u754c\u9762\uff0c\u968f\u65f6\u76d1\u63a7\u865a\u62df\u673a\u7684\u72b6\u6001")),(0,i.kt)("p",{parentName:"div"},"\u8bf7\u6ce8\u610f\u4e0a\u8ff0\u8bbe\u7f6e\uff0c\u4ee5\u907f\u514d\u865a\u62df\u673a\u4ea7\u751f\u96be\u4ee5\u9884\u6599\u7684\u6545\u969c"))))}p.isMDXComponent=!0}}]);