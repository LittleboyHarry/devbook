"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[6419],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a,r=n(3117),o=n(102),i=(n(7294),n(3905)),l=["components"],p={title:"\u5b89\u88c5 Chromium"},c=void 0,m={unversionedId:"goodsoft/browser/chromium",id:"goodsoft/browser/chromium",title:"\u5b89\u88c5 Chromium",description:"\u7279\u70b9",source:"@site/docs/goodsoft/1-browser/2-chromium.md",sourceDirName:"goodsoft/1-browser",slug:"/goodsoft/browser/chromium",permalink:"/devbook/docs/goodsoft/browser/chromium",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/goodsoft/1-browser/2-chromium.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5 Chromium"},sidebar:"goodsoft",previous:{title:"\u8bf4\u660e",permalink:"/devbook/docs/goodsoft/intro"},next:{title:"\u6269\u5c55\u63a8\u8350",permalink:"/devbook/docs/goodsoft/browser/extensions"}},d={},s=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8bbe\u4e3a\u9ed8\u8ba4\u6d4f\u89c8\u5668",id:"\u8bbe\u4e3a\u9ed8\u8ba4\u6d4f\u89c8\u5668",level:2},{value:"\u542f\u52a8\u53c2\u6570",id:"\u542f\u52a8\u53c2\u6570",level:2},{value:"GPU \u89c6\u9891\u52a0\u901f",id:"gpu-\u89c6\u9891\u52a0\u901f",level:3},{value:"\u662f\u5426\u4f7f\u7528 wayland\uff1f",id:"\u662f\u5426\u4f7f\u7528-wayland",level:3},{value:"\u81ea\u5b9a\u4e49\u4e13\u7528\u542f\u52a8\u5668",id:"\u81ea\u5b9a\u4e49\u4e13\u7528\u542f\u52a8\u5668",level:3},{value:"GPU \u56fe\u5f62\u5904\u7406\u52a0\u901f",id:"gpu-\u56fe\u5f62\u5904\u7406\u52a0\u901f",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2}],u=(a="GetPkg",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),k={toc:s};function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,i.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u6346\u7ed1 0 \u540e\u53f0"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u7b80\u6d01\u3001\u6807\u51c6\u610f\u4e0a\u624b"),(0,i.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u66f4\u65b0\u9891\u7387\u5feb"),(0,i.kt)("li",{parentName:"ul"},"\u7535\u91cf\u4e0e\u6027\u80fd\u4f18\u4e8e\u706b\u72d0\u7684 Gecko"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u5951\u5408\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b89\u88c5\u7b2c\u4e09\u65b9\u63d2\u4ef6")),(0,i.kt)("p",null,"\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8c37\u6b4c\u540c\u6b65\u670d\u52a1")),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)(u,{name:"chromium",pacman:!0,dnf:!0,mdxType:"GetPkg"}),(0,i.kt)("h2",{id:"\u8bbe\u4e3a\u9ed8\u8ba4\u6d4f\u89c8\u5668"},"\u8bbe\u4e3a\u9ed8\u8ba4\u6d4f\u89c8\u5668"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GNOME:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gnome-control-center default-apps\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"KDE:")," \u641c\u7d22\u5173\u952e\u8bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"compon")," \u8fdb\u5165\u8bbe\u7f6e"),(0,i.kt)("h2",{id:"\u542f\u52a8\u53c2\u6570"},"\u542f\u52a8\u53c2\u6570"),(0,i.kt)("p",null,"\u7f16\u8f91\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/.config/chromium-flags.conf\n")),(0,i.kt)("h3",{id:"gpu-\u89c6\u9891\u52a0\u901f"},"GPU \u89c6\u9891\u52a0\u901f"),(0,i.kt)("p",null,"\u63d0\u9ad8\u6027\u80fd\u3001\u53ef\u907f\u514d CPU \u89e3\u7801\u5927\u91cf\u8017\u7535"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--enable-features=VaapiVideoDecoder,VaapiVideoEncoder\n")),(0,i.kt)("h3",{id:"\u662f\u5426\u4f7f\u7528-wayland"},"\u662f\u5426\u4f7f\u7528 wayland\uff1f"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0d\u4f7f\u7528 wayland")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f18\u70b9\uff1a\u53ef\u653e\u5927\u754c\u9762\u7f29\u653e\u6bd4\u4f8b\uff0c\u542f\u52a8\u53c2\u6570"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"--force-device-scale-factor=1.15\n")),(0,i.kt)("p",{parentName:"div"},"\u7f3a\u70b9\uff1a\u6682\u65f6\u4e0d\u652f\u6301\u7b14\u8bb0\u672c\u89e6\u6478\u677f\u624b\u52bf\u52a8\u4f5c"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f7f\u7528 wayland")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u914d\u7f6e\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"--enable-features=UseOzonePlatform\n--ozone-platform=wayland\n--gtk-version=4\n")),(0,i.kt)("p",{parentName:"div"},"\u4f18\u70b9\uff1a\u652f\u6301\u7b14\u8bb0\u672c\u89e6\u6478\u677f\u624b\u52bf\u52a8\u4f5c"),(0,i.kt)("p",{parentName:"div"},"\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6cd5\u53ef\u7528\u4f46\u517c\u5bb9\u6027\u6709\u5f85\u6539\u8fdb\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"GNOME \u4f9d\u8d56\u5b89\u88c5\u6269\u5c55 ",(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/261/kimpanel/"},"kimpanel")),(0,i.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u5728\u5176\u4ed6\u7a97\u53e3\u5185\u5207\u6362\u8f93\u5165\u6cd5"),(0,i.kt)("li",{parentName:"ol"},"\u82e5\u4ecd\u65e0\u53cd\u5e94\uff0c\u5207\u6362\u6216\u5173\u95ed\u6240\u6709\u6d4f\u89c8\u5668\u7a97\u53e3\u91cd\u8bd5"))),(0,i.kt)("li",{parentName:"ul"},"\u754c\u9762\u7f29\u653e\u6bd4\u7387\u4ec5\u4e3a\u6574\u6570\uff0c\u53ea\u80fd\u901a\u8fc7 \u201c\u8bbe\u7f6e > \u5916\u89c2 > \u9875\u9762\u7f29\u653e\u201d \u8865\u6551\u8c03\u6574")))),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u4e13\u7528\u542f\u52a8\u5668"},"\u81ea\u5b9a\u4e49\u4e13\u7528\u542f\u52a8\u5668"),(0,i.kt)("p",null,"\u5efa\u8bae\u4e86\u89e3\u5e76\u4f7f\u7528\u591a\u914d\u7f6e\u673a\u5236\u3002\u4f5c\u8005\u559c\u6b22\u4f7f\u7528\u4e24\u4e2a\u914d\u7f6e\u8eab\u4efd\uff0c\u4e00\u4e2a\u7528\u4e8e\u65e5\u5e38\u533f\u540d\u6d4f\u89c8\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e\u4e2a\u4eba\u767b\u9646"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'printf "new chromium desktop file name: " && read filename\ncp /usr/share/applications/chromium.desktop ~/.local/share/applications/$filename.desktop\nxdg-open ~/.local/share/applications/$filename.desktop\n')),(0,i.kt)("p",null,"\u7f16\u8f91\u65b9\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Name")," \u4e3a\u81ea\u5b9a\u4e49\u5e94\u7528\u540d\u79f0")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Exec=")," \u6dfb\u52a0\u542f\u52a8\u53c2\u6570\uff0c\u7ed1\u5b9a\u6d4f\u89c8\u5668\u9ed8\u8ba4\u7684\u542f\u52a8\u914d\u7f6e\u540d\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Default")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile 1")," ..."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'--profile-directory="Default"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Actions=...")," \u4ee5\u53ca\u4e0b\u65b9 ",(0,i.kt)("inlineCode",{parentName:"p"},"[Desktop Action *]")," \u63cf\u8ff0\u4e86\u52a8\u4f5c\u83dc\u5355\u4fe1\u606f\uff0c\u65e0\u9700\u53ef\u5220"))),(0,i.kt)("h2",{id:"gpu-\u56fe\u5f62\u5904\u7406\u52a0\u901f"},"GPU \u56fe\u5f62\u5904\u7406\u52a0\u901f"),(0,i.kt)("p",null,"Win Mac \u9ed8\u8ba4\u5df2\u7ecf\u6fc0\u6d3b\u4f18\u5316\u7279\u6027\uff0c\u4f46 Linux \u9700\u8981\u624b\u52a8\u5f00\u542f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"about:flags/#enable-gpu-rasterization\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"about:flags/#enable-zero-copy\n")),(0,i.kt)("p",null,"\u91cd\u542f\u6d4f\u89c8\u5668\u5b8c\u6210\uff0c\u8be6\u7ec6\u4fe1\u606f\u89c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"about:gpu")),(0,i.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u4e0b\u65b9\u547d\u4ee4\u6267\u884c\u540e\uff0c\u5982\u679c\u6ca1\u6709\u663e\u793a\uff0c\u9700\u91cd\u65b0\u767b\u5f55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo $PATH | grep --color /.local/bin\n")),(0,i.kt)("p",null,"\u968f\u540e\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u6211\u4eec\u770b\u770b\u201c\u547d\u4ee4\u884c\u201d\u91cc\u7684\u542f\u52a8\u53c2\u6570\u662f\u5426\u5b58\u5728\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"about:vesion\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u603b\u7ed3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u7bc7\u6559\u5927\u5bb6\u5982\u4f55\u89e3\u9501\u6d4f\u89c8\u5668\u7684\u5e38\u7528\u529f\u80fd\u3002\u901a\u8fc7\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u4e0e Win/Mac \u4f53\u9a8c\u76f8\u5f53\u7684 Edge \u6d4f\u89c8\u5668\u3002"))))}v.isMDXComponent=!0}}]);