"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5569],{2360:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),r=t(6010),o="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),r=t(7294),o=t(2389),l=t(7392),i=t(7094),u=t(2466),s=t(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,o,p=e.lazy,m=e.block,f=e.defaultValue,v=e.values,k=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,l.l)(g,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),w=x.tabGroupChoices,E=x.setTabGroupChoices,Z=(0,r.useState)(y),T=Z[0],P=Z[1],C=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=w[k];null!=D&&D!==T&&g.some((function(e){return e.value===D}))&&P(D)}var L=function(e){var n=e.currentTarget,t=C.indexOf(n),a=g[t].value;a!==T&&(I(n),P(a),null!=k&&E(k,a))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:L,onClick:L},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),r=t(9877),o=t(2360),l=t(5710),i=t(6010),u="root_WbTl";function s(e){var n=e.items,t=e.expression,r=e.key,i=e.label,u=e.hint,s=e.defaultPkgName,c=e.prefix;t&&n.push(a.createElement(o.Z,{attributes:{title:u},key:r,value:r,label:i},a.createElement(l.Z,{className:"language-shell"},c+" "+(!0===t?s:t))))}function c(e){var n,t=e.name,o=e.dnf,l=e.apt,c=e.scoop,d=e.choco,p=e.winget,m=e.pacman,f=e.pipx,v=e.yarn,k=e.longBanner,h=(n=[],l&&n.push("apt"),o&&n.push("dnf"),c&&n.push("scoop"),p&&n.push("winget"),m&&n.push("pacman"),f&&n.push("pipx"),v&&n.push("yarn"),"getpkg-"+n.join("&")),b=[];if(s({items:b,expression:l,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),s({items:b,expression:o,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),s({items:b,expression:c,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),s({items:b,expression:d,key:"choco",label:"choco",hint:"Windows \u5546\u670d\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo choco install"}),s({items:b,expression:p,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),s({items:b,expression:m,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),s({items:b,expression:f,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),s({items:b,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),b.length<=0)throw"Empty GetPkg";return 1==b.length?b[0]:a.createElement(r.Z,{className:(0,i.Z)(k&&"tabs--block",u),groupId:h},b)}},2782:function(e,n,t){t.d(n,{o6:function(){return c},cA:function(){return p},Qj:function(){return d},Bp:function(){return u},YI:function(){return i}});var a=t(3117),r=t(7294),o=t(6010),l="linkButton_pNme";function i(e){var n=e.id,t=e.name;return r.createElement(p,{href:s(n)},t)}function u(e){var n=e.id,t=e.name;return r.createElement(d,{name:t,href:s(n)})}function s(e){return"ms-windows-store://pdp?mode=mini&productId="+e}function c(e){var n=e.name,t=e.href,a=e.hint;return r.createElement(d,{name:n,href:t,hint:a,attr:{download:!0}})}function d(e){var n=e.name,t=e.href,i=e.outline,u=e.hint,s=e.attr,c=e.small;return r.createElement("a",(0,a.Z)({href:t,className:(0,o.Z)(l,"button",!c&&"button--lg",i?"button--outline button--secondary":"button--primary"),title:u,style:{cursor:u?"help":"pointer",verticalAlign:"baseline"}},s),n)}function p(e){var n=e.href,t=e.className,a=e.style,o=e.children;return r.createElement("a",{style:a,className:t,href:n},o)}},179:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),l=t(7717),i=t(2782),u=["components"],s={},c=void 0,d={unversionedId:"dev/podman",id:"dev/podman",title:"podman",description:"\u5b89\u88c5",source:"@site/docs/dev/podman.md",sourceDirName:"dev",slug:"/dev/podman",permalink:"/geekbook/docs/dev/podman",draft:!1,editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/podman.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Node.js",permalink:"/geekbook/docs/dev/nodejs"},next:{title:"python",permalink:"/geekbook/docs/dev/python"}},p={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521d\u59cb\u914d\u7f6e",id:"\u521d\u59cb\u914d\u7f6e",level:2},{value:"VSCode",id:"vscode",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)(l.Z,{name:"podman",dnf:!0,apt:!0,mdxType:"GetPkg"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pipx install podman-compose\n")),(0,o.kt)("p",null,"\u4ee3\u66ff docker \u7684\u811a\u672c\uff1a"),(0,o.kt)(l.Z,{name:"podman-docker",dnf:!0,apt:!0,mdxType:"GetPkg"}),(0,o.kt)("h2",{id:"\u521d\u59cb\u914d\u7f6e"},"\u521d\u59cb\u914d\u7f6e"),(0,o.kt)("p",null,"\u914d\u7f6e\u817e\u8baf\u4e91\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'unqualified-search-registries = [\"docker.io\"]' | sudo tee -a /etc/containers/registries.conf > /dev/null\necho -e '[[registry]]\\nlocation=\"mirror.ccs.tencentyun.com\"' | sudo tee -a /etc/containers/registries.conf > /dev/null\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u6709\u6548\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sed "/^#/d" /etc/containers/registries.conf\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6302\u8f7d\u5377\u7684\u6587\u4ef6\u8bbf\u95ee\u6743\u9650\u88ab\u62e6\u622a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u542b\u6709 SELinux \u7684\u7ea2\u5e3d\u7c7b\u7cfb\u7edf\u3002\u8bf7\u5411\u53c2\u6570\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},":z")," \u6807\u8bb0\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"-v ~/data:/data:z")))),(0,o.kt)("h2",{id:"vscode"},"VSCode"),(0,o.kt)(i.Qj,{outline:!0,href:"vscode:extension/ms-azuretools.vscode-docker",name:"\u5b89\u88c5",mdxType:"LinkButton"}),(0,o.kt)("p",null,"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"docker.dockerPath": "podman",\n"docker.host": "unix:///run/user/1000/podman/podman.sock",\n')),(0,o.kt)("p",null,"\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl --user enable --now podman.socket\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/1500/containers/"},"GNOME \u6269\u5c55"))))}v.isMDXComponent=!0}}]);