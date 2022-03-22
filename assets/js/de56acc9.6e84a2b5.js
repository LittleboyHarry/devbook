"use strict";(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[4078],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||a;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4961:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"\u684c\u9762\u73af\u5883 KDE"},p=void 0,c={unversionedId:"linux/kde/config",id:"linux/kde/config",title:"\u684c\u9762\u73af\u5883 KDE",description:"\u5982\u679c\u4f60\u5b89\u88c5\u7684\u662f Fedora Workspace \u9ed8\u8ba4\u7248\u3002\u81ea\u5e26 GNOME \u5374\u60f3\u8981\u5b89\u88c5 KDE\uff0c\u8bf7\u6267\u884c\uff1a",source:"@site/docs/linux/10-kde/1-config.md",sourceDirName:"linux/10-kde",slug:"/linux/kde/config",permalink:"/geekbook/docs/linux/kde/config",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/10-kde/1-config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u684c\u9762\u73af\u5883 KDE"},sidebar:"getstarted",previous:{title:"\u7279\u70b9",permalink:"/geekbook/docs/linux/kde/features"},next:{title:"\u5feb\u6377\u952e",permalink:"/geekbook/docs/linux/kde/keymap"}},s=[{value:"Konsole \u7ec8\u7aef",id:"konsole-\u7ec8\u7aef",children:[],level:2},{value:"KWrite",id:"kwrite",children:[],level:2},{value:"\u5feb\u901f\u5fae\u8c03",id:"\u5feb\u901f\u5fae\u8c03",children:[],level:2}],k={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5b89\u88c5\u7684\u662f Fedora Workspace \u9ed8\u8ba4\u7248\u3002\u81ea\u5e26 GNOME \u5374\u60f3\u8981\u5b89\u88c5 KDE\uff0c\u8bf7\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo dnf in -y @kde-desktop-environment\n")),(0,a.kt)("p",null,"\u63a8\u8350\u4e0b\u8f7d Fedora Spins - KDE \u7248\u955c\u50cf\u4ee5\u5b89\u88c5\u7cfb\u7edf\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://spins.fedoraproject.org/zh_Hans_CN/kde/"},"https://spins.fedoraproject.org/zh_Hans_CN/kde/")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4ece\u641c\u7d22\u5f00\u59cb")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"Alt + Space")," \u6fc0\u6d3b KRunner\uff0c\u6309\u672c\u6587\u5b8c\u6210\u57fa\u672c\u914d\u7f6e\uff1a"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521d\u6b65\uff1a\u82e5\u9700\u8981\u4e3a\u9ad8\u5206\u8fa8\u7387\u5c4f\u5e55\u8c03\u6574\u5b57\u4f53\u5927\u5c0f\uff0c\u8bf7\u641c\u7d22\u5173\u952e\u8bcd ",(0,a.kt)("inlineCode",{parentName:"p"},"fonts")," \u8bbe\u7f6e\uff0c\u9009\u62e9\u7edf\u4e00\u8c03\u6574\u5b57\u4f53\u3001\u4e14\u8bb0\u4f4f\u5408\u9002\u7684\u5b57\u53f7")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u680f\uff1a\u53f3\u952e\u83dc\u5355\u201c\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\u201d"),(0,a.kt)("p",{parentName:"li"},"\u5bbd\u5c4f\u8bbe\u5907\u63a8\u8350\u79fb\u52a8\u5230\u5de6\u4fa7\u3001\u8c03\u6574\u5408\u9002\u5bbd\u5ea6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u56fe\u6807\u4efb\u52a1\u7ba1\u7406\u5668\uff1a\u53f3\u952e\u83dc\u5355\u201c\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\u201d\uff0c\u8fdb\u5165\u201c\u884c\u4e3a\u201d\u9762\u677f"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4e2d\u952e\u70b9\u51fb\u4efb\u610f\u4efb\u52a1\uff1a\u5207\u6362\u4efb\u52a1\u5206\u7ec4 -> \u9009\u62e9"),(0,a.kt)("li",{parentName:"ol"},"\u9f20\u6807\u6eda\u8f6e\uff1a\u5faa\u73af\u5207\u6362\u4efb\u52a1 -> \u5173\u95ed"),(0,a.kt)("li",{parentName:"ol"},"\u4ec5\u663e\u793a\u4efb\u52a1: \u6765\u81ea\u5f53\u524d\u5c4f\u5e55 -> \u6fc0\u6d3b"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u89e6\u6478\u677f\u8bbe\u7f6e\uff08\u641c\u7d22\u5173\u952e\u8bcd ",(0,a.kt)("inlineCode",{parentName:"p"},"touchpad"),"\uff09"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u624b\u6307\u8f7b\u89e6\uff1a\u8f7b\u89e6\u70b9\u51fb -> \u6fc0\u6d3b"),(0,a.kt)("li",{parentName:"ol"},"\u53cd\u5411\u6eda\u52a8 (\u81ea\u7136\u6eda\u52a8) -> \u6fc0\u6d3b")))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5feb\u901f\u8bbf\u95ee\u4efb\u52a1\u680f\u5e94\u7528")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Super + \u6570\u5b57\u952e \u7c7b\u4f3c Windows \u4efb\u52a1\u680f\u6548\u679c\uff0c\u63a8\u8350\u7a0b\u5e8f\u5458\u56fa\u5b9a\u6d4f\u89c8\u5668\u548c\u7ec8\u7aef\u5230\u4e00\u3001\u4e8c\u53f7\u4f4d"))),(0,a.kt)("h2",{id:"konsole-\u7ec8\u7aef"},"Konsole \u7ec8\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'printf "[General]\\nName=custom\\nParent=FALLBACK/\\n" >> ~/.local/share/konsole/custom.profile\nkwriteconfig5 --file konsolerc --group "Desktop Entry" --key DefaultProfile custom.profile\n')),(0,a.kt)("p",null,"\u66f4\u6539\u9ed8\u8ba4 Shell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kwriteconfig5 --file ~/.local/share/konsole/custom.profile --group General --key Command /bin/zsh\n")),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u5b57\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kwriteconfig5 --file ~/.local/share/konsole/custom.profile --group Appearance --key Font "Noto Sans Mono,16"\n')),(0,a.kt)("p",null,"\u91cd\u542f\u7a0b\u5e8f\u540e\u751f\u6548"),(0,a.kt)("h2",{id:"kwrite"},"KWrite"),(0,a.kt)("p",null,"\u4fee\u6539\u5b57\u4f53\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kwriteconfig5 --file kwriterc --group "KTextEditor Renderer" --key Font "Noto Sans Mono,18"\n')),(0,a.kt)("h2",{id:"\u5feb\u901f\u5fae\u8c03"},"\u5feb\u901f\u5fae\u8c03"),(0,a.kt)("p",null,"\u5916\u89c2\u4f18\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kwriteconfig5 --file kwinrc --group Plugins --key kwin4_effect_dimscreenEnabled true\n")),(0,a.kt)("p",null,"\u6ce8\u9500\u524d\u514d\u4e8c\u6b21\u786e\u8ba4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kwriteconfig5 --file ksmserverrc --group General --key confirmLogout false\n")),(0,a.kt)("p",null,"\u9009\u8c03\uff1a\u6700\u5927\u5316\u7a97\u53e3\u65f6\uff0c\u9690\u85cf\u6807\u9898\u680f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true\nqdbus org.kde.KWin /KWin reconfigure\n")),(0,a.kt)("p",null,"\u90e8\u5206\u5e94\u7528\u9700\u8981\u6309\u4f4f Super \u952e\u79fb\u52a8\u6765\u6062\u590d\u6700\u5927\u5316"),(0,a.kt)("p",null,"\u684c\u9762\u603b\u89c8\u56fe\uff085.24 \u4ee5\u4e0a\u7248\u672c\u53ef\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kwriteconfig5 --file kwinrc --group Plugins --key overviewEnabled true\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u8bf7\u6ce8\u9500\u56de\u8bdd\u4ee5\u751f\u6548"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Super + W")," \u89e6\u53d1\u6982\u89c8\u56fe"))}d.isMDXComponent=!0}}]);