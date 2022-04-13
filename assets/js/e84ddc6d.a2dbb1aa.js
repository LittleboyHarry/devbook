/*! For license information please see e84ddc6d.a2dbb1aa.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[1066],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),i=n(2389),l=n(9443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3810),s=n(6010),c="tabItem_vU9c";function p(e){var t,n,i,l=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=o(),y=x.tabGroupChoices,N=x.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],E=w[1],Z=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=y[f];null!=P&&P!==T&&h.some((function(e){return e.value===P}))&&E(P)}var I=function(e){var t=e.currentTarget,n=Z.indexOf(t),a=h[n].value;a!==T&&(C(t),E(a),null!=f&&N(f,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;n=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;n=Z[r]||Z[Z.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},k)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,s.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(6396),i=n(8215),l=n(9055),o=n(4184),u=n.n(o),s="root_63Tw";function c(e){var t=e.items,n=e.expression,r=e.key,o=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;n&&t.push(a.createElement(i.Z,{attributes:{title:u},key:r,value:r,label:o},a.createElement(l.Z,{className:"language-shell"},c+" "+(!0===n?s:n))))}function p(e){var t,n=e.name,i=e.dnf,l=e.apt,o=e.scoop,p=e.winget,d=e.pacman,m=e.pipx,f=e.yarn,k=e.longBanner,v=(t=[],l&&t.push("apt"),i&&t.push("dnf"),o&&t.push("scoop"),p&&t.push("winget"),d&&t.push("pacman"),m&&t.push("pipx"),f&&t.push("yarn"),"getpkg-"+t.join("&")),h=[];return c({items:h,expression:l,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo apt install -y"}),c({items:h,expression:i,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo dnf install -y"}),c({items:h,expression:o,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"scoop install"}),c({items:h,expression:p,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"winget install"}),c({items:h,expression:d,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),c({items:h,expression:m,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:n,prefix:"pipx install"}),c({items:h,expression:f,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"yarn global add"}),a.createElement(r.Z,{className:u()(k&&"tabs--block",s),groupId:v},h)}},6765:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(6396),o=n(8215),u=n(7717),s=["components"],c={title:"Cockpit"},p="Linux \u673a\u5ea7\u8231",d={unversionedId:"linux/cockpit",id:"linux/cockpit",title:"Cockpit",description:"\u672c\u5730\u8bbf\u95ee\uff1a",source:"@site/docs/linux/cockpit.md",sourceDirName:"linux",slug:"/linux/cockpit",permalink:"/geekbook/docs/linux/cockpit",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/cockpit.md",tags:[],version:"current",frontMatter:{title:"Cockpit"},sidebar:"getstarted",previous:{title:"\u8fdb\u9636\u914d\u7f6e",permalink:"/geekbook/docs/linux/advanced"},next:{title:"deepin \u865a\u62df\u673a",permalink:"/geekbook/docs/linux/deepin"}},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[{value:"podman \u5bb9\u5668",id:"podman-\u5bb9\u5668",children:[],level:3}],level:2}],f={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linux-\u673a\u5ea7\u8231"},"Linux \u673a\u5ea7\u8231"),(0,i.kt)("p",null,"\u672c\u5730\u8bbf\u95ee\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:9090/\n")),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5f00\u542f\u9632\u706b\u5899")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5b89\u88c5\u524d\uff0c\u8bf7\u786e\u8ba4\u9632\u706b\u5899\u80fd\u591f\u62e6\u622a\u5916\u90e8\u8bbe\u5907\u7684\u6076\u610f\u8bbf\u95ee\u3002\u6216\u8005\n",(0,i.kt)("a",{parentName:"p",href:"https://cockpit-project.org/guide/latest/listen"},"\u7ed1\u5b9a\u672c\u5730\u7aef\u53e3"),"\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"sudo systemctl edit cockpit.socket --full\n")))),(0,i.kt)(l.Z,{groupId:"linux-distro",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"debian",label:"Ubuntu / Debian",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},". /etc/os-release\nsudo apt install -t ${VERSION_CODENAME}-backports cockpit\n"))),(0,i.kt)(o.Z,{value:"centos",label:"Fedora",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo dnf install cockpit\nsudo systemctl enable --now cockpit.socket\n")))),(0,i.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,i.kt)("h3",{id:"podman-\u5bb9\u5668"},"podman \u5bb9\u5668"),(0,i.kt)(u.Z,{name:"cockpit-podman",apt:!0,dnf:!0,mdxType:"GetPkg"}),(0,i.kt)(u.Z,{name:"cockpit-machines",apt:!0,dnf:!0,mdxType:"GetPkg"}))}k.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);