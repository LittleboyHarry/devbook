"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[8156],{2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(6010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),o=n(2389),i=n(7392),r=n(7094),u=n(2466),s=n(6010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,k=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(x,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===k?k:null!=(t=null!=k?k:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==N&&!x.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,r.U)(),w=y.tabGroupChoices,E=y.setTabGroupChoices,T=(0,l.useState)(N),Z=T[0],P=T[1],C=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=w[v];null!=D&&D!==Z&&x.some((function(e){return e.value===D}))&&P(D)}var L=function(e){var t=e.currentTarget,n=C.indexOf(t),a=x[n].value;a!==Z&&(I(t),P(a),null!=v&&E(v,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var l=C.indexOf(e.currentTarget)-1;n=C[l]||C[C.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},h)},x.map((function(e){var t=e.value,n=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:L,onClick:L},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(9877),o=n(2360),i=n(5710),r=n(6010),u="root_WbTl",s="sole_DVUS";function p(e){var t=e.items,n=e.expression,l=e.key,r=e.label,u=e.hint,s=e.defaultPkgName,p=e.prefix;n&&t.push(a.createElement(o.Z,{attributes:{title:u},key:l,value:l,label:r},a.createElement(i.Z,{className:"language-shell"},p+" "+(!0===n?s:n))))}function c(e){var t=e.name,n=e.choco,o=e.scoop,i=e.winget,c=e.flatpak,d=e.apt,m=e.pacman,k=e.dnf,f=e.pipx,v=e.yarn,h=e.longBanner,b=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),o&&e.push("scoop"),i&&e.push("winget"),c&&e.push("flatpak"),d&&e.push("apt"),m&&e.push("pacman"),k&&e.push("dnf"),f&&e.push("pipx"),v&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,k,o,i,m,f,v]),x=[];if(p({items:x,expression:c,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),p({items:x,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),p({items:x,expression:k,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),p({items:x,expression:o,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),p({items:x,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),p({items:x,expression:i,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),p({items:x,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),p({items:x,expression:f,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),p({items:x,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),x.length<=0)throw"Empty GetPkg";return 1==x.length?a.createElement("div",{className:s},x[0]):a.createElement(l.Z,{className:(0,r.Z)(h&&"tabs--block",u),groupId:b},x)}},4748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),i=n(9877),r=n(2360),u=n(7717),s=["components"],p={title:"Cockpit"},c="Linux \u673a\u5ea7\u8231",d={unversionedId:"setup-linux/recommend/cockpit",id:"setup-linux/recommend/cockpit",title:"Cockpit",description:"\u672c\u5730\u8bbf\u95ee\uff1a",source:"@site/docs/setup-linux/32-recommend/cockpit.md",sourceDirName:"setup-linux/32-recommend",slug:"/setup-linux/recommend/cockpit",permalink:"/devbook/docs/setup-linux/recommend/cockpit",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/setup-linux/32-recommend/cockpit.md",tags:[],version:"current",frontMatter:{title:"Cockpit"},sidebar:"setupLinux",previous:{title:"virtual \u6df1\u5ea6\u7cfb\u7edf",permalink:"/devbook/docs/setup-linux/recommend/deepin"},next:{title:"Linux \u63a8\u8350\u8f6f\u4ef6",permalink:"/devbook/docs/setup-linux/recommend/software"}},m={},k=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"podman \u5bb9\u5668",id:"podman-\u5bb9\u5668",level:3}],f={toc:k};function v(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linux-\u673a\u5ea7\u8231"},"Linux \u673a\u5ea7\u8231"),(0,o.kt)("p",null,"\u672c\u5730\u8bbf\u95ee\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:9090/\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5f00\u542f\u9632\u706b\u5899")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5b89\u88c5\u524d\uff0c\u8bf7\u786e\u8ba4\u9632\u706b\u5899\u80fd\u591f\u62e6\u622a\u5916\u90e8\u8bbe\u5907\u7684\u6076\u610f\u8bbf\u95ee\u3002\u6216\u8005\n",(0,o.kt)("a",{parentName:"p",href:"https://cockpit-project.org/guide/latest/listen"},"\u7ed1\u5b9a\u672c\u5730\u7aef\u53e3"),"\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo systemctl edit cockpit.socket --full\n")))),(0,o.kt)(i.Z,{className:"tabs--block",groupId:"linux-distro",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"debian",label:"Ubuntu / Debian",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},". /etc/os-release\nsudo apt install -t ${VERSION_CODENAME}-backports cockpit\n"))),(0,o.kt)(r.Z,{value:"centos",label:"Fedora",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo dnf install cockpit\nsudo systemctl enable --now cockpit.socket\n")))),(0,o.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,o.kt)("h3",{id:"podman-\u5bb9\u5668"},"podman \u5bb9\u5668"),(0,o.kt)(u.Z,{name:"cockpit-podman",apt:!0,dnf:!0,mdxType:"GetPkg"}),(0,o.kt)(u.Z,{name:"cockpit-machines",apt:!0,dnf:!0,mdxType:"GetPkg"}))}v.isMDXComponent=!0}}]);