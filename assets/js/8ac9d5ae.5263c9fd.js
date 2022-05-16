"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[3731],{2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),o=n(6010),r="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),o=n(7294),r=n(2389),i=n(7392),l=n(7094),s=n(2466),u=n(6010),p="tabList_uSqn",d="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,m=e.block,h=e.defaultValue,k=e.values,v=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),x=N.tabGroupChoices,E=N.setTabGroupChoices,T=(0,o.useState)(y),Z=T[0],P=T[1],D=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var B=x[v];null!=B&&B!==Z&&b.some((function(e){return e.value===B}))&&P(B)}var I=function(e){var t=e.currentTarget,n=D.indexOf(t),a=b[n].value;a!==Z&&(C(t),P(a),null!=v&&E(v,a))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;n=D[o]||D[D.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,u.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return D.push(e)},onKeyDown:z,onFocus:I,onClick:I},r,{className:(0,u.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(g.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},7717:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),o=n(9877),r=n(2360),i=n(5710),l=n(6010),s="root_WbTl",u="sole_DVUS";function p(e){var t=e.items,n=e.expression,o=e.key,l=e.label,s=e.hint,u=e.defaultPkgName,p=e.prefix;n&&t.push(a.createElement(r.Z,{attributes:{title:s},key:o,value:o,label:l},a.createElement(i.Z,{className:"language-shell"},p+" "+(!0===n?u:n))))}function d(e){var t=e.name,n=e.choco,r=e.scoop,i=e.winget,d=e.flatpak,c=e.apt,m=e.pacman,h=e.dnf,k=e.pipx,v=e.yarn,f=e.longBanner,g=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),r&&e.push("scoop"),i&&e.push("winget"),d&&e.push("flatpak"),c&&e.push("apt"),m&&e.push("pacman"),h&&e.push("dnf"),k&&e.push("pipx"),v&&e.push("yarn"),"getpkg-"+e.join("&")}),[c,h,r,i,m,k,v]),b=[];if(p({items:b,expression:d,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),p({items:b,expression:c,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),p({items:b,expression:h,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),p({items:b,expression:r,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),p({items:b,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),p({items:b,expression:i,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),p({items:b,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),p({items:b,expression:k,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),p({items:b,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),b.length<=0)throw"Empty GetPkg";return 1==b.length?a.createElement("div",{className:u},b[0]):a.createElement(o.Z,{className:(0,l.Z)(f&&"tabs--block",s),groupId:g},b)}},8e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(7717),l=["components"],s={title:"Windows \u63a8\u8350\u8f6f\u4ef6"},u=void 0,p={unversionedId:"setup-mswin/dev/recommend",id:"setup-mswin/dev/recommend",title:"Windows \u63a8\u8350\u8f6f\u4ef6",description:"\u4ee5\u4e0b\u5747\u4e3a\u81ea\u7531\u8f6f\u4ef6\uff1a",source:"@site/docs/setup-mswin/22-dev/4-recommend.md",sourceDirName:"setup-mswin/22-dev",slug:"/setup-mswin/dev/recommend",permalink:"/devbook/docs/setup-mswin/dev/recommend",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/setup-mswin/22-dev/4-recommend.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Windows \u63a8\u8350\u8f6f\u4ef6"},sidebar:"setupWindows",previous:{title:"Windows \u5f00\u53d1\u5fc5\u505a",permalink:"/devbook/docs/setup-mswin/dev/mustdo"},next:{title:"WSL \u5b89\u88c5",permalink:"/devbook/docs/setup-mswin/dev/wsl/install"}},d={},c=[{value:"\u538b\u7f29\u8f6f\u4ef6",id:"\u538b\u7f29\u8f6f\u4ef6",level:2},{value:"\u6570\u636e\u9632\u76d7",id:"\u6570\u636e\u9632\u76d7",level:2},{value:"\u54c8\u5e0c\u6587\u4ef6\u6821\u9a8c",id:"\u54c8\u5e0c\u6587\u4ef6\u6821\u9a8c",level:2},{value:"\u5168\u76d8\u641c\u7d22",id:"\u5168\u76d8\u641c\u7d22",level:2},{value:"\u6587\u4ef6\u4f20\u8f93",id:"\u6587\u4ef6\u4f20\u8f93",level:2},{value:"BT \u4e0b\u8f7d\u5668",id:"bt-\u4e0b\u8f7d\u5668",level:2},{value:"RamDisk \u4e0e\u955c\u50cf\u5de5\u5177",id:"ramdisk-\u4e0e\u955c\u50cf\u5de5\u5177",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5747\u4e3a\u81ea\u7531\u8f6f\u4ef6\uff1a"),(0,r.kt)("h2",{id:"\u538b\u7f29\u8f6f\u4ef6"},"\u538b\u7f29\u8f6f\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.7-zip.org/download.html"},"7zip")),(0,r.kt)(i.Z,{name:"7zip",choco:!0,scoop:!0,winget:"7zip.7zip",mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"\u6570\u636e\u9632\u76d7"},"\u6570\u636e\u9632\u76d7"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.veracrypt.fr/en/Downloads.html"},"VeraCrypt")," \u52a0\u5bc6"),(0,r.kt)(i.Z,{name:"veracrypt",choco:!0,winget:!0,mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"\u54c8\u5e0c\u6587\u4ef6\u6821\u9a8c"},"\u54c8\u5e0c\u6587\u4ef6\u6821\u9a8c"),(0,r.kt)("p",null,"\u5f00\u6e90\u8f6f\u4ef6 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/namazso/OpenHashTab"},"openhashtab")),(0,r.kt)(i.Z,{name:"openhashtab",winget:!0,choco:!0,mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"\u5168\u76d8\u641c\u7d22"},"\u5168\u76d8\u641c\u7d22"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.voidtools.com/zh-cn/downloads/#:~:text=%E4%B8%8B%E8%BD%BD%E7%B2%BE%E7%AE%80%E7%89%88%E5%AE%89%E8%A3%85%E7%89%88%E6%9C%AC%2064%20%E4%BD%8D"},"Everything")),(0,r.kt)(i.Z,{winget:"voidtools.Everything.Lite",choco:"everything",mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"\u6587\u4ef6\u4f20\u8f93"},"\u6587\u4ef6\u4f20\u8f93"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://winscp.net/eng/index.php"},"WinSCP")),(0,r.kt)(i.Z,{name:"winscp",winget:!0,choco:!0,mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"bt-\u4e0b\u8f7d\u5668"},"BT \u4e0b\u8f7d\u5668"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/c0re100/qBittorrent-Enhanced-Edition"},"qBittorrent-Enhanced-Edition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# for scoop only:\nscoop bucket add dorado https://github.com/chawyehsu/dorado\n")),(0,r.kt)(i.Z,{name:"qbittorrent-enhanced",choco:!0,scoop:!0,mdxType:"GetPkg"}),(0,r.kt)("h2",{id:"ramdisk-\u4e0e\u955c\u50cf\u5de5\u5177"},"RamDisk \u4e0e\u955c\u50cf\u5de5\u5177"),(0,r.kt)("p",null,"\u6765\u81ea\u5f00\u6e90\u9879\u76ee ",(0,r.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/imdisk-toolkit/"},"imdisk-toolkit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'sudo choco install imdisk imdisk-toolkit\n\n# \u4fee\u590d\u754c\u9762\u6a21\u7cca\u7684\u95ee\u9898\nforeach ($_ in @("config", "MountImg", "RamDiskUI")) {\n    reg add "HKCU\\Software\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers" /v "C:\\Program Files\\ImDisk\\$_.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"\n}\n\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6765\u81ea\u524d\u6587")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"../store"},"\u5546\u5e97\u53ef\u83b7\u53d6\u7684\u5e94\u7528"),":"),(0,r.kt)(i.Z,{name:"auto-dark-mode",choco:!0,mdxType:"GetPkg"}),(0,r.kt)("p",{parentName:"div"},"\u5176\u4ed6\uff1a"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/docs/goodsoft/rsi",target:"_blank"},"workrave"))))))}h.isMDXComponent=!0}}]);