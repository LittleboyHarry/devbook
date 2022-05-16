"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[3676],{2360:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),r=t(6010),i="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),r=t(7294),i=t(2389),l=t(7392),o=t(7094),s=t(2466),p=t(6010),u="tabList_uSqn",c="tabItem_LplD";function d(e){var n,t,i,d=e.lazy,m=e.block,v=e.defaultValue,f=e.values,h=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),x=(0,l.l)(g,(function(e,n){return e.value===n.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===v?v:null!=(n=null!=v?v:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=b[0])?void 0:i.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,P=(0,r.useState)(y),Z=P[0],T=P[1],I=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=w[h];null!=M&&M!==Z&&g.some((function(e){return e.value===M}))&&T(M)}var _=function(e){var n=e.currentTarget,t=I.indexOf(n),a=g[t].value;a!==Z&&(D(n),T(a),null!=h&&E(h,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return I.push(e)},onKeyDown:C,onFocus:_,onClick:_},i,{className:(0,p.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function m(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),r=t(9877),i=t(2360),l=t(5710),o=t(6010),s="root_WbTl",p="sole_DVUS";function u(e){var n=e.items,t=e.expression,r=e.key,o=e.label,s=e.hint,p=e.defaultPkgName,u=e.prefix;t&&n.push(a.createElement(i.Z,{attributes:{title:s},key:r,value:r,label:o},a.createElement(l.Z,{className:"language-shell"},u+" "+(!0===t?p:t))))}function c(e){var n=e.name,t=e.choco,i=e.scoop,l=e.winget,c=e.flatpak,d=e.apt,m=e.pacman,v=e.dnf,f=e.pipx,h=e.yarn,k=e.longBanner,b=(0,a.useMemo)((function(){var e=[];return t&&e.push("choco"),i&&e.push("scoop"),l&&e.push("winget"),c&&e.push("flatpak"),d&&e.push("apt"),m&&e.push("pacman"),v&&e.push("dnf"),f&&e.push("pipx"),h&&e.push("yarn"),"getpkg-"+e.join("&")}),[d,v,i,l,m,f,h]),g=[];if(u({items:g,expression:c,key:"flatpak",label:"Flatpak",hint:"Linux \u5f00\u653e\u5e94\u7528\u5206\u53d1\u6280\u672f",prefix:"flatpak install flathub "}),u({items:g,expression:d,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo apt install -y"}),u({items:g,expression:v,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo dnf install -y"}),u({items:g,expression:i,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"scoop install"}),u({items:g,expression:t,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"sudo choco install"}),u({items:g,expression:l,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"winget install"}),u({items:g,expression:m,key:"pacman",label:"pacman",defaultPkgName:n,prefix:"yes | sudo pacman -S"}),u({items:g,expression:f,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:n,prefix:"pipx install"}),u({items:g,expression:h,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:n,prefix:"yarn global add"}),g.length<=0)throw"Empty GetPkg";return 1==g.length?a.createElement("div",{className:p},g[0]):a.createElement(r.Z,{className:(0,o.Z)(k&&"tabs--block",s),groupId:b},g)}},5461:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=t(7717),o=["components"],s={},p=void 0,u={unversionedId:"devenv/modern-cli/pipx",id:"devenv/modern-cli/pipx",title:"pipx",description:"\u9694\u79bb\u5316\u5b89\u88c5 Python \u547d\u4ee4\u884c\u5de5\u5177\u3002Python >= 3.7",source:"@site/docs/devenv/30-modern-cli/pipx.md",sourceDirName:"devenv/30-modern-cli",slug:"/devenv/modern-cli/pipx",permalink:"/devbook/docs/devenv/modern-cli/pipx",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/devenv/30-modern-cli/pipx.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"\u7f51\u7edc\u95ee\u9898",permalink:"/devbook/docs/devenv/modern-cli/network"},next:{title:"\u547d\u4ee4\u7528\u6cd5\u901f\u67e5 tldr",permalink:"/devbook/docs/devenv/modern-cli/tldr"}},c={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}],m={toc:d};function v(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9694\u79bb\u5316\u5b89\u88c5 Python \u547d\u4ee4\u884c\u5de5\u5177\u3002Python >= 3.7"),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)(l.Z,{name:"pipx",dnf:!0,apt:!0,pacman:"python-pipx",mdxType:"GetPkg"}),(0,i.kt)("div",{className:"no-admonition-uppercase-title"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4ece PyPI \u955c\u50cf\u6e90\u83b7\u53d6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u6b21\u6027\u53c2\u6570\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"-i https://mirrors.cloud.tencent.com/pypi/simple\n")),(0,i.kt)("p",{parentName:"div"},"\u5168\u5c40\u8bbe\u7f6e\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"pip config set global.index-url https://mirrors.cloud.tencent.com/pypi/simple\n"))))),(0,i.kt)("p",null,"\u7528 pip \u5b89\u88c5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --user pipx\npython3 -m pipx ensurepath\n\n")),(0,i.kt)("p",null,"UNIX \u73af\u5883\u81ea\u52a8\u8865\u5168\u6307\u5f15\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pipx completions | less\n")))}v.isMDXComponent=!0}}]);