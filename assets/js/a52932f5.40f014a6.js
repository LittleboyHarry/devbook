/*! For license information please see a52932f5.40f014a6.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[7848],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1378:function(e,t,n){"use strict";n.d(t,{T6:function(){return d},nT:function(){return m},n2:function(){return c}});var r=n(7294),o=n(4184),l=n.n(o),a="choice_9LTZ",i=n(2389),s="custom.preferPkgMgr",p=(0,r.createContext)({active:"dnf",setActive:function(e){},options:{}});function c(e){var t=e.apt,n=e.dnf,o=e.children,l=(0,i.Z)(),a=(0,r.useState)("dnf"),c=a[0],d=a[1];return(0,r.useEffect)((function(){l&&d(window.localStorage.getItem(s))}),[l]),r.createElement(p.Provider,{value:{active:c,setActive:function(e){window.localStorage.setItem(s,e),d(e)},options:{apt:t,dnf:n}}},r.createElement("div",{className:"pills pills--block",style:{marginBottom:"1rem"}},t&&r.createElement(u,{type:"apt",label:"dpkg - apt"}),n&&r.createElement(u,{type:"dnf",label:"RPM - dnf"})),o)}function u(e){var t=e.type,n=e.label,o=(0,r.useContext)(p),i=o.active,s=o.setActive,c=i===t;return r.createElement("label",{className:l()(a,"pills__item",c&&"pills__item--active")},r.createElement("input",{type:"radio",value:t,name:"prefer-pkgmgr",checked:c,onChange:function(e){var t=e.target.value;return s(t)}}),n)}function d(e){var t=e.children;return"apt"===(0,r.useContext)(p).active&&t}function m(e){var t=e.children;return"dnf"===(0,r.useContext)(p).active&&t}},6535:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=n(1378),i=["components"],s={},p=void 0,c={unversionedId:"dev/deploy-my-dotfiles",id:"dev/deploy-my-dotfiles",title:"deploy-my-dotfiles",description:"\u7531\u7b14\u8005\u521b\u4f5c\u7684\u7efc\u5408\u8c03\u4f18\u7684\u65b9\u6848\uff0c\u6db5\u76d6 ohmyzsh \u63d2\u4ef6\u7b49\u5176\u5b83\u8c03\u4f18\u7684\u89e3\u51b3\u65b9\u6848",source:"@site/docs/dev/4-deploy-my-dotfiles.md",sourceDirName:"dev",slug:"/dev/deploy-my-dotfiles",permalink:"/geekbook/docs/dev/deploy-my-dotfiles",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/4-deploy-my-dotfiles.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"dev",previous:{title:"Zsh",permalink:"/geekbook/docs/dev/zsh"},next:{title:"Git",permalink:"/geekbook/docs/dev/git"}},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u7279\u4f9b\u7248\u5b89\u88c5",id:"\u7279\u4f9b\u7248\u5b89\u88c5",children:[],level:2},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=littleboyharry&repo=deploy-my-dotfiles&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"180",height:"32",title:"GitHub",style:{float:"right"}}),(0,l.kt)("p",null,"\u7531\u7b14\u8005\u521b\u4f5c\u7684\u7efc\u5408\u8c03\u4f18\u7684\u65b9\u6848\uff0c\u6db5\u76d6 ohmyzsh \u63d2\u4ef6\u7b49\u5176\u5b83\u8c03\u4f18\u7684\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u4f9d\u8d56\u5305\uff1a"),(0,l.kt)(a.n2,{dnf:!0,apt:!0,mdxType:"PreferPkgMgr"},(0,l.kt)(a.T6,{mdxType:"ForApt"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install -y git python-is-python3\n\n# \u7c98\u8d34\u677f\uff1ax11 or wayland\nsudo apt install -y xclip\nsudo apt install -y wl-clipboard\n"))),(0,l.kt)(a.nT,{mdxType:"ForDnf"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install -y git\n\n# \u7c98\u8d34\u677f\uff1ax11 or wayland\nsudo dnf install -y xclip\nsudo dnf install -y wl-clipboard\n")))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone https://github.com/LittleboyHarry/deploy-my-dotfiles\ncd deploy-my-dotfiles\n")),(0,l.kt)("p",null,"\u5b89\u88c5 zsh \u6a21\u5757\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./deploy modules/zsh/\nexec zsh\n")),(0,l.kt)("h2",{id:"\u7279\u4f9b\u7248\u5b89\u88c5"},"\u7279\u4f9b\u7248\u5b89\u88c5"),(0,l.kt)("p",null,"\u4ece gitee \u955c\u50cf\u514b\u9686\uff0c\u5185\u5bb9\u65e0\u5dee\u5f02\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone https://gitee.com/LittleboyHarry/deploy-my-dotfiles\ncd deploy-my-dotfiles\n\n# \u7279\u4f9b\u7248\u53c2\u6570\uff1a\n./deploy modules/zsh/ atmainland\n\nexec zsh\n")),(0,l.kt)("h2",{id:"\u6837\u5f0f"},"\u6837\u5f0f"),(0,l.kt)("p",null,"\u76ee\u524d\u4e2a\u4eba\u504f\u597d\u4e3b\u9898\uff1ays \uff0c\u57fa\u4e8e deploy-my-dotfiles \u5199\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," \u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},"source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/git.zsh\nsource ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/prompt_info_functions.zsh\nsource ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/theme-and-appearance.zsh\nsource ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/themes/ys.zsh-theme\n")),(0,l.kt)("div",{className:"alert alert--secondary",role:"alert"},(0,l.kt)("p",null,"\u5176\u4ed6\u63a8\u8350\uff1apowerlevel10k"),(0,l.kt)("p",null,"\u5b89\u88c5\uff1a\u4f9d\u8d56 Nerd Font \u5b57\u4f53\uff0c",(0,l.kt)("a",{parentName:"p",href:"./font#cascadiacode-nerdfont"},"\u53c2\u89c1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k\n# \u56fd\u5185:\n# git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k\n\necho 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc\n# \u5f00\u59cb\u914d\u7f6e\nexec zsh\n")),(0,l.kt)("p",null,"\u9009\u8c03\uff1a\u9690\u85cf\u7cfb\u7edf\u56fe\u6807"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sed -i "/# os identifier/ s/^/#&/" ~/.p10k.zsh\nexec zsh\n')),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\n\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u4f1a\u9020\u6210\u6392\u7248\u9519\u4e71\uff0c\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/romkatv/powerlevel10k/blob/master/README.md#the-anatomy-of-the-problem"},"\u5b98\u65b9\u89e3\u51b3\u65b9\u6cd5"),"\n\u662f\u7981\u6b62\u81ea\u52a8\u91cd\u6392\u7248 \uff08 \u90e8\u5206\u7ec8\u7aef\u652f\u6301\uff0c\u5982 Konsole \uff09")))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);