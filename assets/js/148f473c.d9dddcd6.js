/*! For license information please see 148f473c.d9dddcd6.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[5569],{8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),o=t(2389),i=t(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3810),u=t(6010),p="tabItem_vU9c";function c(e){var n,t,o,i=e.lazy,c=e.block,d=e.defaultValue,m=e.values,v=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),y=N.tabGroupChoices,x=N.setTabGroupChoices,w=(0,r.useState)(b),E=w[0],T=w[1],Z=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=y[v];null!=C&&C!==E&&h.some((function(e){return e.value===C}))&&T(C)}var j=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=h[t].value;a!==E&&(P(n),T(a),null!=v&&x(v,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;t=Z[r]||Z[Z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:S,onFocus:j,onClick:j},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},7717:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(7294),r=t(6396),o=t(8215),i=t(9055),l=t(4184),s=t.n(l),u="root_63Tw";function p(e){var n=e.items,t=e.expression,r=e.key,l=e.label,s=e.hint,u=e.defaultPkgName,p=e.prefix;t&&n.push(a.createElement(o.Z,{attributes:{title:s},key:r,value:r,label:l},a.createElement(i.Z,{className:"language-shell"},p+" "+(!0===t?u:t))))}function c(e){var n,t=e.name,o=e.dnf,i=e.apt,l=e.scoop,c=e.winget,d=e.pacman,m=e.pipx,v=e.yarn,f=e.longBanner,k=(n=[],i&&n.push("apt"),o&&n.push("dnf"),l&&n.push("scoop"),c&&n.push("winget"),d&&n.push("pacman"),m&&n.push("pipx"),v&&n.push("yarn"),"getpkg-"+n.join("&")),h=[];return p({items:h,expression:i,key:"apt",label:"apt",hint:"debian \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo apt install -y"}),p({items:h,expression:o,key:"dnf",label:"dnf",hint:"RPM \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"sudo dnf install -y"}),p({items:h,expression:l,key:"scoop",label:"scoop",hint:"Windows \u793e\u533a\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"scoop install"}),p({items:h,expression:c,key:"winget",label:"winget",hint:"Windows \u5b98\u65b9\u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"winget install"}),p({items:h,expression:d,key:"pacman",label:"pacman",defaultPkgName:t,prefix:"yes | sudo pacman -S"}),p({items:h,expression:m,key:"pipx",label:"pipx",hint:"\u6539\u8fdb\u7684 pip",defaultPkgName:t,prefix:"pipx install"}),p({items:h,expression:v,key:"yarn",label:"yarn",hint:"Node.js \u5305\u7ba1\u7406\u5668",defaultPkgName:t,prefix:"yarn global add"}),a.createElement(r.Z,{className:s()(f&&"tabs--block",u),groupId:k},h)}},179:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(7717),l=["components"],s={},u=void 0,p={unversionedId:"dev/podman",id:"dev/podman",title:"podman",description:"\u5b89\u88c5",source:"@site/docs/dev/podman.md",sourceDirName:"dev",slug:"/dev/podman",permalink:"/geekbook/docs/dev/podman",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/podman.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Node.js",permalink:"/geekbook/docs/dev/nodejs"},next:{title:"python",permalink:"/geekbook/docs/dev/python"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u521d\u59cb\u914d\u7f6e",id:"\u521d\u59cb\u914d\u7f6e",children:[],level:2},{value:"\u63a8\u8350",id:"\u63a8\u8350",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)(i.Z,{name:"podman",dnf:!0,apt:!0,mdxType:"GetPkg"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pipx install podman-compose\n")),(0,o.kt)("p",null,"\u4ee3\u66ff docker \u7684\u811a\u672c\uff1a"),(0,o.kt)(i.Z,{name:"podman-docker",dnf:!0,apt:!0,mdxType:"GetPkg"}),(0,o.kt)("h2",{id:"\u521d\u59cb\u914d\u7f6e"},"\u521d\u59cb\u914d\u7f6e"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u975e Fedoar \u7cfb\u7edf\uff0c\u9ed8\u8ba4\u914d\u7f6e\u662f\u7a7a\u7684\u3001\u65e0\u6cd5\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sed "/^#/d" /etc/containers/registries.conf\n')),(0,o.kt)("p",null,"\u914d\u7f6e\u817e\u8baf\u4e91\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'unqualified-search-registries = [\"docker.io\"]' | sudo tee -a /etc/containers/registries.conf > /dev/null\necho -e '[[registry]]\\nlocation=\"mirror.ccs.tencentyun.com\"' | sudo tee -a /etc/containers/registries.conf > /dev/null\n\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6302\u8f7d\u5377\u7684\u6587\u4ef6\u8bbf\u95ee\u6743\u9650\u88ab\u62e6\u622a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u542b\u6709 SELinux \u7684\u7ea2\u5e3d\u7c7b\u7cfb\u7edf\u3002\u8bf7\u5411\u53c2\u6570\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},":z")," \u6807\u8bb0\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"-v ~/data:/data:z")))),(0,o.kt)("h2",{id:"\u63a8\u8350"},"\u63a8\u8350"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"VSCode \u6269\u5c55"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ext install ms-azuretools.vscode-docker\n")),(0,o.kt)("p",{parentName:"li"},"\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"docker.dockerPath": "podman",\n"docker.host": "unix:///run/user/1000/podman/podman.sock",\n')),(0,o.kt)("p",{parentName:"li"},"\u8fd0\u884c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"systemctl --user enable --now podman.socket\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/1500/containers/"},"GNOME \u6269\u5c55")))))}m.isMDXComponent=!0},4184:function(e,n){var t;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var l in t)a.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()}}]);