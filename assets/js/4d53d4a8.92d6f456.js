"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[1578],{7717:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),s=n(9877),i=n(2360),l=n(5710),p=n(6010),o="root_WbTl",r="sole_DVUS";function m(e){var t=e.items,n=e.expression,s=e.key,p=e.label,o=e.hint,r=e.defaultPkgName,m=e.prefix;n&&t.push(a.createElement(i.Z,{attributes:{title:o},key:s,value:s,label:p},a.createElement(l.Z,{className:"language-shell"},m+" "+(!0===n?r:n))))}function d(e){var t=e.name,n=e.choco,i=e.scoop,l=e.winget,d=e.flatpak,u=e.apt,c=e.pacman,f=e.dnf,k=e.pipx,g=e.yarn,h=e.longBanner,v=(0,a.useMemo)((function(){var e=[];return n&&e.push("choco"),i&&e.push("scoop"),l&&e.push("winget"),d&&e.push("flatpak"),u&&e.push("apt"),c&&e.push("pacman"),f&&e.push("dnf"),k&&e.push("pipx"),g&&e.push("yarn"),"getpkg-"+e.join("&")}),[u,f,i,l,c,k,g]),b=[];if(m({items:b,expression:d,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),m({items:b,expression:u,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),m({items:b,expression:f,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),m({items:b,expression:i,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),m({items:b,expression:n,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),m({items:b,expression:l,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),m({items:b,expression:c,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),m({items:b,expression:k,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),m({items:b,expression:g,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),b.length<=0)throw"Empty GetPkg";return 1==b.length?a.createElement("div",{className:r},b[0]):a.createElement(s.Z,{className:(0,p.Z)(h&&"tabs--block",o),groupId:v},b)}},8013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var a=n(3117),s=n(102),i=n(7294),l=n(3905),p=n(6066),o=n.p+"assets/images/1-f3531be947741e81a7c0a8348da0f6d9.png",r=n.p+"assets/images/2-9a2eee15d149b4340f212c157eff4e32.png",m=n.p+"assets/images/3-812ca6926bfef01a36f6e23fc3a4788e.png";function d(){return i.createElement("div",{style:{width:"100%",padding:"0 40px 60px"}},i.createElement(p.Z,{dots:!0,infinite:!1},i.createElement("div",null,i.createElement("img",{src:o,style:{margin:"0 auto"}})),i.createElement("div",null,i.createElement("img",{src:r,style:{margin:"0 auto"}})),i.createElement("div",null,i.createElement("img",{src:m,style:{margin:"0 auto"}}))))}var u=n(7717),c=["components"],f={title:"AltSnap"},k=void 0,g={unversionedId:"setup-mswin/dev/altsnap",id:"setup-mswin/dev/altsnap",title:"AltSnap",description:"\u6765\u81ea\u5f00\u6e90\u9879\u76ee",source:"@site/docs/setup-mswin/22-dev/altsnap.md",sourceDirName:"setup-mswin/22-dev",slug:"/setup-mswin/dev/altsnap",permalink:"/devbook/docs/setup-mswin/dev/altsnap",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/setup-mswin/22-dev/altsnap.md",tags:[],version:"current",frontMatter:{title:"AltSnap"},sidebar:"setupWindows",previous:{title:"Sysinternals",permalink:"/devbook/docs/setup-mswin/dev/sysinternals"},next:{title:"Windows \u5f00\u53d1\u95ee\u9898",permalink:"/devbook/docs/setup-mswin/dev/problems"}},h={},v=[{value:"bug",id:"bug",level:2}],b={toc:v};function x(e){var t=e.components,n=(0,s.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6765\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://github.com/RamonUnch/AltSnap"},"\u5f00\u6e90\u9879\u76ee")),(0,l.kt)(u.Z,{name:"altsnap",winget:!0,choco:!0,mdxType:"GetPkg"}),(0,l.kt)("p",null,"\u53f3\u952e\u6258\u76d8\u56fe\u6807\uff0c\u5982\u56fe\u4e3a\u63a8\u8350\u914d\u7f6e\uff1a"),(0,l.kt)(d,{mdxType:"AltSnapScreenshot"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"BUG")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u622a\u81f3 2021/12/14 WSLg \u7a97\u53e3\u8fd8\u4e0d\u53d7\u652f\u6301\uff0c\u9700\u8981\u6dfb\u52a0\u5230\u6392\u9664\u5217\u8868"))),(0,l.kt)("h2",{id:"bug"},"bug"),(0,l.kt)("p",null,"Win \u952e\u5931\u7075\u3001\u5361\u4f4f\uff1a\u53f3\u952e AltSnap \u6258\u76d8\u56fe\u6807\u5173\u95ed\u91cd\u542f"))}x.isMDXComponent=!0}}]);