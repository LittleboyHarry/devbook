"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[4523],{2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(6010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),i=n(2389),o=n(7392),r=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,m=e.block,f=e.defaultValue,h=e.values,v=e.groupId,b=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,r.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,Z=(0,l.useState)(y),P=Z[0],T=Z[1],D=[],L=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=w[v];null!=I&&I!==P&&g.some((function(e){return e.value===I}))&&T(I)}var C=function(e){var t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==P&&(L(t),T(a),null!=v&&E(v,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var l=D.indexOf(e.currentTarget)-1;n=D[l]||D[D.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return D.push(e)},onKeyDown:_,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(k.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(9877),i=n(2360),o=n(5710),r=n(6010),u="root_WbTl";function s(e){var t=e.items,n=e.expression,l=e.key,r=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(i.Z,{attributes:{title:u},key:l,value:l,label:r},a.createElement(o.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function c(e){var t,n=e.name,i=e.dnf,o=e.apt,c=e.scoop,p=e.choco,d=e.winget,m=e.pacman,f=e.pipx,h=e.yarn,v=e.longBanner,b=(t=[],o&&t.push("apt"),i&&t.push("dnf"),c&&t.push("scoop"),d&&t.push("winget"),m&&t.push("pacman"),f&&t.push("pipx"),h&&t.push("yarn"),"getpkg-"+t.join("&")),k=[];if(s({items:k,expression:o,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo apt install -y"}),s({items:k,expression:i,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo dnf install -y"}),s({items:k,expression:c,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"scoop install"}),s({items:k,expression:p,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo choco install"}),s({items:k,expression:d,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"winget install"}),s({items:k,expression:m,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),s({items:k,expression:f,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:n,prefix:"pipx install"}),s({items:k,expression:h,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"yarn global add"}),k.length<=0)throw"Empty GetPkg";return 1==k.length?k[0]:a.createElement(l.Z,{className:(0,r.Z)(v&&"tabs--block",u),groupId:b},k)}},2709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(3117),l=n(102),i=(n(7294),n(3905)),o=n(7717),r=["components"],u={title:"\u5236\u4f5c\u542f\u52a8\u76d8"},s=void 0,c={unversionedId:"linux/install/bootable",id:"linux/install/bootable",title:"\u5236\u4f5c\u542f\u52a8\u76d8",description:"Ventoy",source:"@site/docs/linux/2-install/4-bootable.md",sourceDirName:"linux/2-install",slug:"/linux/install/bootable",permalink:"/geekbook/docs/linux/install/bootable",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/2-install/4-bootable.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5236\u4f5c\u542f\u52a8\u76d8"},sidebar:"linux",previous:{title:"Arch Linux",permalink:"/geekbook/docs/linux/install/arch"},next:{title:"\u5b89\u88c5 Linux",permalink:"/geekbook/docs/linux/install/advice"}},p={},d=[],m={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ventoy.net/cn/download.html"},"Ventoy"),"\n\u53ef\u652f\u6301\u4e00\u76d8\u5185\u591a\u7cfb\u7edf\u7684\u542f\u52a8"),(0,i.kt)(o.Z,{name:"ventoy",scoop:!0,choco:!0,mdxType:"GetPkg"}),(0,i.kt)("p",null,"\u5c11\u6570\u5176\u5b83\u53d1\u884c\u7248\u4ec5\u652f\u6301\u5355\u4e00\u7cfb\u7edf\u542f\u52a8\u76d8"),(0,i.kt)(o.Z,{name:"etcher",scoop:!0,choco:!0,mdxType:"GetPkg"}),(0,i.kt)("p",null,"\u82e5\u5728\u7ebf\u5b89\u88c5\uff0c\u9700\u8981\u6709\u7ebf\u7f51\u6216\u5df2\u77e5 WiFi \u5bc6\u7801\uff0c\u5176\u5b83\u7279\u7528\u7f51\u7edc\u5de5\u5177\u81ea\u5907"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u4fdd\u7559 LiveCD \u6216 WinPE U\u76d8\uff0c\u4ee5\u4fbf\u65e5\u540e\u4fee\u590d\u3001\u8c03\u8bd5\u4e4b\u9700"))))}f.isMDXComponent=!0}}]);