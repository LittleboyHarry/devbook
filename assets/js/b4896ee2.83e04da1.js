"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[3687],{2360:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),r=t(6010),l="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(3117),r=t(7294),l=t(2389),o=t(7392),i=t(7094),s=t(2466),u=t(6010),p="tabList_uSqn",c="tabItem_LplD";function m(e){var n,t,l,m=e.lazy,d=e.block,v=e.defaultValue,f=e.values,k=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.l)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===v?v:null!=(n=null!=v?v:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==x&&!b.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,T=(0,r.useState)(x),P=T[0],j=T[1],Z=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var _=w[k];null!=_&&_!==P&&b.some((function(e){return e.value===_}))&&j(_)}var S=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=b[t].value;a!==P&&(C(n),j(a),null!=k&&E(k,a))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;t=Z[r]||Z[Z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:L,onFocus:S,onClick:S},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),m?(0,r.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function d(e){var n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),r=t(9877),l=t(2360),o=t(5710),i=t(6010),s="root_WbTl",u="sole_DVUS";function p(e){var n=e.items,t=e.expression,r=e.key,i=e.label,s=e.hint,u=e.defaultPkgName,p=e.prefix;t&&n.push(a.createElement(l.Z,{attributes:{title:s},key:r,value:r,label:i},a.createElement(o.Z,{className:"language-shell"},p+" "+(!0===t?u:t))))}function c(e){var n=e.name,t=e.choco,l=e.scoop,o=e.winget,c=e.flatpak,m=e.apt,d=e.pacman,v=e.dnf,f=e.pipx,k=e.yarn,h=e.longBanner,g=(0,a.useMemo)((function(){var e=[];return t&&e.push("choco"),l&&e.push("scoop"),o&&e.push("winget"),c&&e.push("flatpak"),m&&e.push("apt"),d&&e.push("pacman"),v&&e.push("dnf"),f&&e.push("pipx"),k&&e.push("yarn"),"getpkg-"+e.join("&")}),[m,v,l,o,d,f,k]),b=[];if(p({items:b,expression:c,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),p({items:b,expression:m,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo apt install -y"}),p({items:b,expression:v,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo dnf install -y"}),p({items:b,expression:l,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"scoop install"}),p({items:b,expression:t,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo choco install"}),p({items:b,expression:o,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"winget install"}),p({items:b,expression:d,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),p({items:b,expression:f,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:n,prefix:"pipx install"}),p({items:b,expression:k,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"yarn global add"}),b.length<=0)throw"Empty GetPkg";return 1==b.length?a.createElement("div",{className:u},b[0]):a.createElement(r.Z,{className:(0,i.Z)(h&&"tabs--block",s),groupId:g},b)}},1378:function(e,n,t){t.d(n,{T6:function(){return p},nT:function(){return c},kn:function(){return m},n2:function(){return s}});var a=t(7294),r=t(6010),l="choice_izPm",o=t(2389),i=(0,a.createContext)({active:"dnf",setActive:function(e){},options:{}});function s(e){var n=e.apt,t=e.dnf,r=e.pacman,l=e.children,s=(0,o.Z)(),p=(0,a.useState)("dnf"),c=p[0],m=p[1],d=(0,a.useMemo)((function(){var e=[];return n&&e.push("apt"),t&&e.push("dnf"),r&&e.push("pacman"),"cpreferPkgMgr-"+e.join("&")}),[n,t,r]);return(0,a.useEffect)((function(){s&&m(window.localStorage.getItem(d))}),[s,d]),a.createElement(i.Provider,{value:{active:c,setActive:(0,a.useCallback)((function(e){window.localStorage.setItem(d,e),m(e)}),[d]),options:{apt:n,dnf:t,pacman:r}}},a.createElement("div",{className:"pills pills--block",style:{marginBottom:"1rem"}},n&&a.createElement(u,{type:"apt",label:"dpkg - apt"}),t&&a.createElement(u,{type:"dnf",label:"RPM - dnf"}),r&&a.createElement(u,{type:"pacman",label:"pacman"})),l)}function u(e){var n=e.type,t=e.label,o=(0,a.useContext)(i),s=o.active,u=o.setActive,p=s===n;return a.createElement("label",{className:(0,r.Z)(l,"pills__item",p&&"pills__item--active")},a.createElement("input",{type:"radio",value:n,name:"prefer-pkgmgr",checked:p,onChange:function(e){var n=e.target.value;return u(n)}}),t)}function p(e){var n=e.children;return"apt"===(0,a.useContext)(i).active&&n}function c(e){var n=e.children;return"dnf"===(0,a.useContext)(i).active&&n}function m(e){var n=e.children;return"pacman"===(0,a.useContext)(i).active&&n}},2415:function(e,n,t){t.r(n),t.d(n,{assets:function(){return N},contentTitle:function(){return y},default:function(){return T},frontMatter:function(){return b},metadata:function(){return x},toc:function(){return w}});var a=t(3117),r=t(102),l=t(7294),o=t(3905),i=t(1378),s=t(6010),u="choice_Y3f1",p=t(2389),c="custom.preferMirror",m=(0,l.createContext)({active:"origin",setActive:function(e){},options:{}});function d(e){var n=e.origin,t=e.gitee,a=e.children,r=(0,p.Z)(),o=(0,l.useState)(),i=o[0],s=o[1];return(0,l.useEffect)((function(){r&&s(window.localStorage.getItem(c)||"origin")}),[r]),l.createElement(m.Provider,{value:{active:i,setActive:function(e){window.localStorage.setItem(c,e),s(e)},options:{origin:n,gitee:t}}},l.createElement("div",{className:"pills pills--block",style:{marginBottom:"1rem"}},n&&l.createElement(v,{type:"origin",label:"\u4ece\u539f\u6e20\u9053\u83b7\u53d6"}),t&&l.createElement(v,{type:"gitee",label:"\u4ece Gitee"})),a)}function v(e){var n=e.type,t=e.label,a=(0,l.useContext)(m),r=a.active,o=a.setActive,i=r===n;return l.createElement("label",{className:(0,s.Z)(u,"pills__item",i&&"pills__item--active")},l.createElement("input",{type:"radio",value:n,name:"prefer-mirror",checked:i,onChange:function(e){var n=e.target.value;return o(n)}}),t)}function f(e){var n=e.children;return"origin"===(0,l.useContext)(m).active&&n}function k(e){var n=e.children;return"gitee"===(0,l.useContext)(m).active&&n}var h=t(7717),g=["components"],b={title:"Node.js"},y=void 0,x={unversionedId:"devenv/nodejs",id:"devenv/nodejs",title:"Node.js",description:"nodejs \u5076\u6570\u7248\u53f7\u4ee3\u8868\u7a33\u5b9a\u6027\uff0c\u6211\u4eec\u5e94\u8be5\u9009\u62e9\u5076\u6570\u7248\u3002",source:"@site/docs/devenv/nodejs.md",sourceDirName:"devenv",slug:"/devenv/nodejs",permalink:"/devbook/docs/devenv/nodejs",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/devenv/nodejs.md",tags:[],version:"current",frontMatter:{title:"Node.js"},sidebar:"dev",previous:{title:"Vagrant",permalink:"/devbook/docs/devenv/virtual/vagrant"},next:{title:"podman",permalink:"/devbook/docs/devenv/podman"}},N={},w=[{value:"\u5b89\u88c5\u5230 Linux",id:"\u5b89\u88c5\u5230-linux",level:2},{value:"\u5b89\u88c5\u5230 Windows",id:"\u5b89\u88c5\u5230-windows",level:2},{value:"npmmirror \u4e2d\u56fd\u955c\u50cf\u7ad9",id:"npmmirror-\u4e2d\u56fd\u955c\u50cf\u7ad9",level:2},{value:"\u4f7f\u7528 yarn",id:"\u4f7f\u7528-yarn",level:2},{value:"\u4f7f\u7528 PNPM",id:"\u4f7f\u7528-pnpm",level:2}],E={toc:w};function T(e){var n=e.components,t=(0,r.Z)(e,g);return(0,o.kt)("wrapper",(0,a.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"nodejs \u5076\u6570\u7248\u53f7\u4ee3\u8868\u7a33\u5b9a\u6027\uff0c\u6211\u4eec\u5e94\u8be5\u9009\u62e9\u5076\u6570\u7248\u3002\n\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"\u53d1\u884c\u65f6\u95f4\u8868")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u5230-linux"},"\u5b89\u88c5\u5230 Linux"),(0,o.kt)(i.n2,{dnf:!0,apt:!0,pacman:!0,mdxType:"PreferPkgMgr"},(0,o.kt)(i.nT,{mdxType:"ForDnf"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dnf module list nodejs\n")),(0,o.kt)("p",null,"Fedora 35 \u9ed8\u8ba4\u4e3a 16 \u7248\u3002\u82e5\u8981\u5207\u6362\u5176\u5b83\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf module enable -y nodejs:X\nsudo dnf in -y nodejs\n"))),(0,o.kt)(i.T6,{mdxType:"ForApt"},(0,o.kt)("p",null,"Debian \u9ed8\u8ba4\u63d0\u4f9b\u7684 nodejs 12 \u7248\u672c\u592a\u4f4e\uff0c\u5f88\u591a npm \u4f9d\u8d56\u5305\u4e0d\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u5728 Debian \u4e2d\uff0c\u63a8\u8350\u4f7f\u7528 nvm \u5b89\u88c5 LTS \u65b0\u7248\uff1a"),(0,o.kt)(d,{origin:!0,gitee:!0,mdxType:"PreferMirror"},(0,o.kt)(f,{mdxType:"FromOrigin"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nbash -i -c "nvm install --lts"\nexec $SHELL\n'))),(0,o.kt)(k,{mdxType:"FromGitee"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://gitee.com/mirrors/nvm/raw/v0.39.1/install.sh | bash\n( source ~/.nvm/nvm.sh && nvm install --lts )\nexec $SHELL\n"))))),(0,o.kt)(i.kn,{mdxType:"ForPacman"},(0,o.kt)("p",null,"LTS 16:"),(0,o.kt)(h.Z,{pacman:"nodejs-lts-gallium",mdxType:"GetPkg"}),(0,o.kt)("p",null,"LTS 14:"),(0,o.kt)(h.Z,{pacman:"nodejs-lts-fermium\t",mdxType:"GetPkg"}),(0,o.kt)("p",null,"\u6700\u65b0\u7248\uff1a"),(0,o.kt)(h.Z,{pacman:"nodejs",mdxType:"GetPkg"}))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u5b89\u88c5\u5230-windows"},"\u5b89\u88c5\u5230 Windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop bucket add versions\nscoop search nodejs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scoop install nodejs?\n")),(0,o.kt)("h2",{id:"npmmirror-\u4e2d\u56fd\u955c\u50cf\u7ad9"},"npmmirror \u4e2d\u56fd\u955c\u50cf\u7ad9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -qO- https://cdn.jsdelivr.net/gh/littleboyharry-contrib/hooks@master/example/taro/.npmrc >> ~/.npmrc\n")),(0,o.kt)("p",null,"\u4e00\u6b21\u6027\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--registry=https://registry.npmmirror.com\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528-yarn"},"\u4f7f\u7528 yarn"),(0,o.kt)("p",null,"\u6bd4 npm \u66f4\u597d\u7684\u5305\u7ba1\u7406\u5de5\u5177"),(0,o.kt)(h.Z,{name:"yarn",pacman:!0,choco:!0,scoop:!0,mdxType:"GetPkg"}),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528 npm \u5168\u5c40\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo npm install --global yarn\n")),(0,o.kt)("p",null,"\u624b\u52a8 Windows \u5b89\u88c5\u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'$newpath = [Environment]::GetEnvironmentVariable("PATH", "User") + ";$(yarn global bin)"\n[Environment]::SetEnvironmentVariable("PATH", $newpath, "User")\n\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528-pnpm"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"h2",href:"https://pnpm.io/zh/motivation"},"PNPM")),(0,o.kt)("p",null,"\u6bd4 npm \u66f4\u597d\u7684\u5305\u7ba1\u7406\u5de5\u5177"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo npm install -g pnpm\n")))}T.isMDXComponent=!0}}]);