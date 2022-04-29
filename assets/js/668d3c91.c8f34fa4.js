/*! For license information please see 668d3c91.c8f34fa4.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5374],{8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},6396:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(7462),l=t(7294),r=t(2389),u=t(9443);var o=function(){var e=(0,l.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3616),s=t(6010),p="tabItem_vU9c";function c(e){var n,t,r,u=e.lazy,c=e.block,d=e.defaultValue,f=e.values,m=e.groupId,k=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=o(),y=x.tabGroupChoices,N=x.setTabGroupChoices,w=(0,l.useState)(g),E=w[0],T=w[1],Z=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var G=y[m];null!=G&&G!==E&&b.some((function(e){return e.value===G}))&&T(G)}var M=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=b[t].value;a!==E&&(P(n),T(a),null!=m&&N(m,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var l=Z.indexOf(e.currentTarget)-1;t=Z[l]||Z[Z.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:O,onFocus:M,onClick:M},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),u?(0,l.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,r.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(7294),l=t(6396),r=t(8215),u=t(9055),o=t(4184),i=t.n(o),s="root_63Tw";function p(e){var n=e.items,t=e.expression,l=e.key,o=e.label,i=e.hint,s=e.defaultPkgName,p=e.prefix;t&&n.push(a.createElement(r.Z,{attributes:{title:i},key:l,value:l,label:o},a.createElement(u.Z,{className:"language-shell"},p+" "+(!0===t?s:t))))}function c(e){var n,t=e.name,r=e.dnf,u=e.apt,o=e.scoop,c=e.choco,d=e.winget,f=e.pacman,m=e.pipx,k=e.yarn,v=e.longBanner,b=(n=[],u&&n.push("apt"),r&&n.push("dnf"),o&&n.push("scoop"),d&&n.push("winget"),f&&n.push("pacman"),m&&n.push("pipx"),k&&n.push("yarn"),"getpkg-"+n.join("&")),h=[];return p({items:h,expression:u,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),p({items:h,expression:r,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),p({items:h,expression:o,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),p({items:h,expression:c,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"choco install"}),p({items:h,expression:d,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),p({items:h,expression:f,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),p({items:h,expression:m,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),p({items:h,expression:k,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),a.createElement(l.Z,{className:i()(v&&"tabs--block",s),groupId:b},h)}},2798:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),u=t(7717),o=["components"],i={title:"GNOME \u5e94\u7528\u63a8\u8350"},s=void 0,p={unversionedId:"linux/gnome/apps",id:"linux/gnome/apps",title:"GNOME \u5e94\u7528\u63a8\u8350",description:"Fedora \u5fc5\u88c5",source:"@site/docs/linux/17-gnome/apps.md",sourceDirName:"linux/17-gnome",slug:"/linux/gnome/apps",permalink:"/geekbook/docs/linux/gnome/apps",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/17-gnome/apps.md",tags:[],version:"current",frontMatter:{title:"GNOME \u5e94\u7528\u63a8\u8350"},sidebar:"getstarted",previous:{title:"GNOME \u63a8\u8350\u6269\u5c55",permalink:"/geekbook/docs/linux/gnome/extensions"},next:{title:"GNOME of Ubuntu",permalink:"/geekbook/docs/linux/gnome/ubuntu"}},c=[{value:"Fedora \u5fc5\u88c5",id:"fedora-\u5fc5\u88c5",children:[],level:2},{value:"Ubuntu \u5fc5\u88c5",id:"ubuntu-\u5fc5\u88c5",children:[],level:2},{value:"\u66f4\u591a\u63a8\u8350",id:"\u66f4\u591a\u63a8\u8350",children:[],level:2}],d={toc:c};function f(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fedora-\u5fc5\u88c5"},"Fedora \u5fc5\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"\u538b\u7f29\u8f6f\u4ef6"),(0,r.kt)(u.Z,{name:"file-roller",dnf:!0,mdxType:"GetPkg"}))),(0,r.kt)("h2",{id:"ubuntu-\u5fc5\u88c5"},"Ubuntu \u5fc5\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"\u7a7a\u95f4\u5206\u6790\u5668"),(0,r.kt)(u.Z,{name:"baobab",dnf:!0,apt:!0,mdxType:"GetPkg"})),(0,r.kt)("li",null,(0,r.kt)("p",null,"\u76f8\u673a"),(0,r.kt)(u.Z,{name:"cheese",dnf:!0,apt:!0,mdxType:"GetPkg"}))),(0,r.kt)("h2",{id:"\u66f4\u591a\u63a8\u8350"},"\u66f4\u591a\u63a8\u8350"),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"\u54c8\u5e0c\u6821\u9a8c"),(0,r.kt)(u.Z,{name:"gtkhash",dnf:!0,apt:!0,mdxType:"GetPkg"})),(0,r.kt)("li",null,(0,r.kt)("p",null,"\u5206\u533a\u52a9\u624b"),(0,r.kt)(u.Z,{name:"gparted",dnf:!0,apt:!0,mdxType:"GetPkg"})),(0,r.kt)("li",null,(0,r.kt)("p",null,"\u5e94\u7528\u5217\u8868\u7f16\u8f91\u5668"),(0,r.kt)(u.Z,{name:"menulibre",dnf:!0,apt:!0,mdxType:"GetPkg"}))))}f.isMDXComponent=!0},4184:function(e,n){var t;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var u=l.apply(null,t);u&&e.push(u)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var o in t)a.call(t,o)&&t[o]&&e.push(o);else e.push(t.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(t=function(){return l}.apply(n,[]))||(e.exports=t)}()}}]);