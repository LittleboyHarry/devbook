"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[1379],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Git"},l=void 0,p={unversionedId:"devenv/git",id:"devenv/git",title:"Git",description:"\u6765\u6e90\uff1aohmyzsh-git \u63d2\u4ef6 \u76f8\u5173\u522b\u540d",source:"@site/docs/devenv/5-git.md",sourceDirName:"devenv",slug:"/devenv/git",permalink:"/devbook/docs/devenv/git",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/devenv/5-git.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Git"},sidebar:"dev",previous:{title:"deploy-my-dotfiles",permalink:"/devbook/docs/devenv/deploy-my-dotfiles"},next:{title:"\u6469\u767b\u547d\u4ee4\u884c\u7d22\u5f15",permalink:"/devbook/docs/devenv/modern-cli/index"}},c={},m=[{value:"\u8c03\u4f18",id:"\u8c03\u4f18",level:2},{value:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f",id:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f",level:2},{value:"\u914d\u7f6e SSH \u5bc6\u94a5",id:"\u914d\u7f6e-ssh-\u5bc6\u94a5",level:2},{value:"\u7f51\u7edc\u95ee\u9898",id:"\u7f51\u7edc\u95ee\u9898",level:2},{value:"\u4ee3\u7406 SSH \u534f\u8bae",id:"\u4ee3\u7406-ssh-\u534f\u8bae",level:3},{value:"\u767b\u5f55\u6d4b\u8bd5",id:"\u767b\u5f55\u6d4b\u8bd5",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6307\u4ee4\u901f\u67e5\u8868")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6765\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/mirrors/oh-my-zsh/blob/master/plugins/git/README.md"},"ohmyzsh-git \u63d2\u4ef6")," \u76f8\u5173\u522b\u540d"))),(0,r.kt)("h2",{id:"\u8c03\u4f18"},"\u8c03\u4f18"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u66f4\u6539\u9ed8\u8ba4\u4e3b\u5206\u652f\u540d\ngit config --global init.defaultBranch main\n\n# \u5408\u5e76\u53d8\u57fa\u65f6\u81ea\u52a8\u6682\u5b58\u5f53\u524d\u4fee\u6539\uff0c\u53c2\u8003\uff1a\n# https://stackoverflow.com/questions/30208928\ngit config --global rebase.autostash true\ngit config --global merge.autostash true\n\n")),(0,r.kt)("h2",{id:"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f"},"\u5f55\u5165\u4e2a\u4eba\u63d0\u4ea4\u4fe1\u606f"),(0,r.kt)("p",null,"\u4f7f\u7528 Git ",(0,r.kt)("strong",{parentName:"p"},"Bash")," \u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo &&\nprintf "Enter your git name: " && read git_name &&\ngit config --global user.name "$git_name" &&\nprintf "Enter your git email: " && read git_email &&\ngit config --global user.email "$git_email"\n')),(0,r.kt)("h2",{id:"\u914d\u7f6e-ssh-\u5bc6\u94a5"},"\u914d\u7f6e SSH \u5bc6\u94a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519\ncat ~/.ssh/id_ed25519.pub\n")),(0,r.kt)("p",null,"\u590d\u5236\u516c\u94a5\u4fe1\u606f\uff0c\u968f\u540e\u4e0a\u4f20\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/ssh/new"},"https://github.com/settings/ssh/new")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/profile/sshkeys"},"https://gitee.com/profile/sshkeys"))),(0,r.kt)("h2",{id:"\u7f51\u7edc\u95ee\u9898"},"\u7f51\u7edc\u95ee\u9898"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"fatal: unable to access '",(0,r.kt)("a",{parentName:"p",href:"https://github.com/.....'"},"https://github.com/.....'"),": OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to gist.github.com:443")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git config --global http.proxy 127.0.0.1:<port>\n")),(0,r.kt)("p",null,"Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipconfig /flushdns\n")),(0,r.kt)("h3",{id:"\u4ee3\u7406-ssh-\u534f\u8bae"},"\u4ee3\u7406 SSH \u534f\u8bae"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"code %homepath%/.ssh/config\n")),(0,r.kt)("p",null,"\u8f93\u5165\u5185\u5bb9\u5e76\u4fdd\u5b58\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Host github.com\n    ProxyCommand connect -S 127.0.0.1:1089 %h %p\n")),(0,r.kt)("p",null,"-S \u4ee3\u8868 socks \u4ee3\u7406\uff0c-H \u4ee3\u8868 http \u4ee3\u7406\uff0c\u540e\u9644\u5730\u5740\u7aef\u53e3"),(0,r.kt)("h2",{id:"\u767b\u5f55\u6d4b\u8bd5"},"\u767b\u5f55\u6d4b\u8bd5"),(0,r.kt)("div",{className:"no-admonition-uppercase-title"},(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"ssh -T git@github.com\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints"},"\u5b98\u65b9\u8ba4\u8bc1"),"\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"RSA\nSHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8\n\nECDSA\nSHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM\n\nEd25519\nSHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Gitee")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"ssh -T git@gitee.com\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"Ed25519\nSHA256:+ULzij2u99B9eWYFTw1Q4ErYG/aepHLbu96PAUCoV88\n"))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("a",{parentName:"h5",href:"https://chrome.google.com/webstore/detail/notifier-for-github/lmjdlojahmbbcodnpecnjnmlddbkjhnn"},"\u6d4f\u89c8\u5668\u6269\u5c55"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u6d4f\u89c8\u5668\u63a5\u53d7 GitHub \u63a8\u9001\u901a\u77e5\u3002\n( ",(0,r.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/zh-CN/firefox/addon/notifier-for-github"},"firefox \u7248")," )"))))}u.isMDXComponent=!0}}]);