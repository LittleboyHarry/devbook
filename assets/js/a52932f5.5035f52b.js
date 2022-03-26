"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[7848],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6535:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={},p=void 0,s={unversionedId:"dev/deploy-my-dotfiles",id:"dev/deploy-my-dotfiles",title:"deploy-my-dotfiles",description:"\u7531\u7b14\u8005\u521b\u4f5c\u7684\u7efc\u5408\u8c03\u4f18\u7684\u65b9\u6848\uff0c\u6db5\u76d6 ohmyzsh \u63d2\u4ef6\u7b49\u5176\u5b83\u8c03\u4f18\u7684\u89e3\u51b3\u65b9\u6848",source:"@site/docs/dev/4-deploy-my-dotfiles.md",sourceDirName:"dev",slug:"/dev/deploy-my-dotfiles",permalink:"/geekbook/docs/dev/deploy-my-dotfiles",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/dev/4-deploy-my-dotfiles.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"dev",previous:{title:"Zsh",permalink:"/geekbook/docs/dev/zsh"},next:{title:"Git",permalink:"/geekbook/docs/dev/git"}},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u7279\u4f9b\u7248\u5b89\u88c5",id:"\u7279\u4f9b\u7248\u5b89\u88c5",children:[],level:2},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=littleboyharry&repo=deploy-my-dotfiles&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"180",height:"32",title:"GitHub",style:{float:"right"}}),(0,l.kt)("p",null,"\u7531\u7b14\u8005\u521b\u4f5c\u7684\u7efc\u5408\u8c03\u4f18\u7684\u65b9\u6848\uff0c\u6db5\u76d6 ohmyzsh \u63d2\u4ef6\u7b49\u5176\u5b83\u8c03\u4f18\u7684\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u4f9d\u8d56\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"git")," ",(0,l.kt)("inlineCode",{parentName:"li"},"python3")),(0,l.kt)("li",{parentName:"ul"},"\u590d\u5236\u529f\u80fd\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"xclip")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"xsel"))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone https://github.com/LittleboyHarry/deploy-my-dotfiles\ncd deploy-my-dotfiles\n")),(0,l.kt)("p",null,"\u5b89\u88c5 zsh \u6a21\u5757\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./deploy modules/zsh/\nexec zsh\n")),(0,l.kt)("h2",{id:"\u7279\u4f9b\u7248\u5b89\u88c5"},"\u7279\u4f9b\u7248\u5b89\u88c5"),(0,l.kt)("p",null,"\u4ece gitee \u955c\u50cf\u514b\u9686\uff0c\u5185\u5bb9\u65e0\u5dee\u5f02\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone https://gitee.com/LittleboyHarry/deploy-my-dotfiles\ncd deploy-my-dotfiles\n\n# \u7279\u4f9b\u7248\u53c2\u6570\uff1a\n./deploy modules/zsh/ atmainland\n\nexec zsh\n")),(0,l.kt)("h2",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,l.kt)("p",null,"\u63a8\u8350\uff1apowerlevel10k"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"BUG: \u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u9020\u6210\u6392\u7248\u9519\u4e71")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/romkatv/powerlevel10k/blob/master/README.md#the-anatomy-of-the-problem"},"\u5b98\u65b9\u89e3\u51b3\u65b9\u6cd5"),"\uff1a\n\u7981\u6b62\u81ea\u52a8\u91cd\u6392\u7248"),(0,l.kt)("p",{parentName:"div"},"Konsole \u9009\u9879\u5728 \u201c\u7f16\u8f91\u914d\u7f6e\u65b9\u6848\u201d>\u201c\u6eda\u52a8\u201d \u5185\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5176\u5b83\u4e3b\u9898\u63a8\u8350\uff1aohmyzsh \u7684 steeef"),(0,l.kt)("p",{parentName:"div"},"\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy-my-dotfiles")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," \u914d\u7f6e\uff1a"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/git.zsh\nsource ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/themes/steeef.zsh-theme\n"))))),(0,l.kt)("p",null,"\u9700\u8981\u5148\u5b89\u88c5\u597d Nerd Font \u5b57\u4f53\uff0c",(0,l.kt)("a",{parentName:"p",href:"./font#cascadiacode-nerdfont"},"\u53c2\u89c1")),(0,l.kt)("p",null,"\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k\n# \u56fd\u5185:\n# git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k\n\necho 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc\n# \u5f00\u59cb\u914d\u7f6e\nexec zsh\n")),(0,l.kt)("p",null,"\u9009\u8c03\uff1a\u9690\u85cf\u7cfb\u7edf\u56fe\u6807"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sed -i "/# os identifier/ s/^/#&/" ~/.p10k.zsh\nexec zsh\n')))}m.isMDXComponent=!0}}]);