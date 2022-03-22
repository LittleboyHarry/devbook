"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[3382],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9420:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Git"},c=void 0,p={unversionedId:"dev/git",id:"dev/git",title:"Git",description:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f",source:"@site/docs/dev/4-git.md",sourceDirName:"dev",slug:"/dev/git",permalink:"/geekbook/docs/dev/git",editUrl:"https://gitee.com/littleboyharry/geekbook/edit/main/docs/dev/4-git.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Git"},sidebar:"dev",previous:{title:"\u5b57\u4f53",permalink:"/geekbook/docs/dev/font"},next:{title:"ZSH",permalink:"/geekbook/docs/dev/zsh"}},u=[{value:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f",id:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f",children:[],level:2},{value:"\u914d\u7f6e SSH \u5bc6\u94a5",id:"\u914d\u7f6e-ssh-\u5bc6\u94a5",children:[],level:2},{value:"\u7f51\u7edc\u95ee\u9898",id:"\u7f51\u7edc\u95ee\u9898",children:[],level:2},{value:"\u8c03\u4f18",id:"\u8c03\u4f18",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f"},"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n')),(0,i.kt)("h2",{id:"\u914d\u7f6e-ssh-\u5bc6\u94a5"},"\u914d\u7f6e SSH \u5bc6\u94a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh-keygen -t ed25519\ncat ~/.ssh/id_ed25519.pub\n")),(0,i.kt)("p",null,"\u590d\u5236\uff0c\u7136\u540e\u767b\u9646\u4e0a\u4f20\u8be5\u516c\u94a5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/ssh/new"},"https://github.com/settings/ssh/new")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/profile/sshkeys"},"https://gitee.com/profile/sshkeys"))),(0,i.kt)("h2",{id:"\u7f51\u7edc\u95ee\u9898"},"\u7f51\u7edc\u95ee\u9898"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"fatal: unable to access '",(0,i.kt)("a",{parentName:"p",href:"https://github.com/.....'"},"https://github.com/.....'"),": OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to gist.github.com:443")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git config --global http.proxy 127.0.0.1:<port>\n")),(0,i.kt)("p",null,"Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipconfig /flushdns\n")),(0,i.kt)("h2",{id:"\u8c03\u4f18"},"\u8c03\u4f18"),(0,i.kt)("p",null,"\u66f4\u6539\u9ed8\u8ba4\u4e3b\u5206\u652f\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git config --global init.defaultBranch main\n")),(0,i.kt)("p",null,"\u5408\u5e76\u53d8\u57fa\u65f6\u81ea\u52a8\u6682\u5b58\u5f53\u524d\u4fee\u6539\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/30208928/can-git-pull-automatically-stash-and-pop-pending-changes"},"\u95ee\u9898\u6765\u6e90")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git config --global rebase.autostash true\ngit config --global merge.autostash true\n\n")))}d.isMDXComponent=!0}}]);