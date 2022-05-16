"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[8813],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),c=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),k=a,s=d["".concat(m,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(s,l(l({ref:e},p),{},{components:n})):r.createElement(s,l({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3883:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(7294),a=n(2814),o=n(1436),l="button_B4O8",i="icon_sAIS",m="card_Uz0K",c="name_vG00",p=n(6010),u=n(4996);function d(t){var e=t.name,n=t.path,d=t.icon,k=t.hint,f=t.button,b=(0,u.Z)(n),h=(k?k+"\uff0c":"")+"\u70b9\u51fb\u6216\u62d6\u62fd\u4e0b\u8f7d\u6587\u4ef6";return r.createElement("a",{download:!0,href:b,className:(0,p.Z)(f?l:m,f?"button button--lg button--outline button--secondary":"card"),title:h,onDragStartCapture:function(t){if(t.target instanceof HTMLAnchorElement){var e=s(t.target.getAttribute("href"));t.dataTransfer.setData("DownloadURL",":"+function(t,e){var n=t.getAttribute("download");if(n)return n;var r=t.textContent.trim().replace(/\:/g,"");if(r&&g.test(r))return r;var a=o(e.pathname.split("/"));if(a&&g.test(a))return decodeURI(a);return decodeURI(a)||r;function o(t){return t[t.length-1]}}(t.target,e)+":"+e.href)}}},r.createElement("span",{className:i},d||r.createElement(a.G,{icon:o.gMD})),r.createElement("span",{className:c},e))}var k,s=function(t){return k||(k=document.createElement("a")),k.href=t,new URL(k.href)},g=/\.[\w-]+$/},5440:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=n(1436),i=n(2814),m=n(3883),c=["components"],p={title:"\u6269\u5c55\u63a8\u8350"},u=void 0,d={unversionedId:"goodsoft/browser/extensions",id:"goodsoft/browser/extensions",title:"\u6269\u5c55\u63a8\u8350",description:"\u83b7\u53d6",source:"@site/docs/goodsoft/1-browser/21-extensions.md",sourceDirName:"goodsoft/1-browser",slug:"/goodsoft/browser/extensions",permalink:"/devbook/docs/goodsoft/browser/extensions",draft:!1,editUrl:"https://github.com/LittleboyHarry/devbook/edit/main/docs/goodsoft/1-browser/21-extensions.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"\u6269\u5c55\u63a8\u8350"},sidebar:"goodsoft",previous:{title:"\u5b89\u88c5 Chromium",permalink:"/devbook/docs/goodsoft/browser/chromium"},next:{title:"\u641c\u7d22\u5f15\u64ce\u63a8\u8350",permalink:"/devbook/docs/goodsoft/browser/search"}},k={},s=[{value:"\u83b7\u53d6",id:"\u83b7\u53d6",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u9002\u7528\u8303\u56f4",id:"\u9002\u7528\u8303\u56f4",level:2},{value:"\u7ed1\u5b9a\u5feb\u6377\u952e",id:"\u7ed1\u5b9a\u5feb\u6377\u952e",level:2},{value:"\u5176\u5b83\u914d\u7f6e",id:"\u5176\u5b83\u914d\u7f6e",level:2},{value:"uBlock Origin",id:"ublock-origin",level:3},{value:"Linkclump",id:"linkclump",level:3}],g={toc:s};function f(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u83b7\u53d6"},"\u83b7\u53d6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6269\u5c55\u540d"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Chrome \u5546\u5e97"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Edge \u5916\u63a5\u7a0b\u5e8f"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vimium C"),(0,o.kt)("td",{parentName:"tr",align:null},"\u514d\u9f20\u6807\u3001\u952e\u76d8\u4fa0\u4e13\u7528"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg"},"Get")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://microsoftedge.microsoft.com/addons/detail/vimium-c-all-by-keyboar/aibcglbfblnogfjhbcmmpobjhnomhcdo"},"Get"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dark Reader"),(0,o.kt)("td",{parentName:"tr",align:null},"\u62a4\u773c\u6a21\u5f0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh"},"Get")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc"},"Get"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uBlock Origin"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53bb\u5e7f\u544a"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"},"Get")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak"},"Get"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linkclump"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6846\u9009\u591a\u5f00"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj"},"Get")),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("p",null,"\u4e13\u7528\u7c7b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6269\u5c55\u540d"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Chrome \u5546\u5e97"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Edge \u5916\u63a5\u7a0b\u5e8f"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gitako"),(0,o.kt)("td",{parentName:"tr",align:null},"GitHub \u5bfc\u822a\u680f"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/gitako-github-file-tree/giljefjcheohhamkjphiebfjnlphnokk"},"Get")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://microsoftedge.microsoft.com/addons/detail/gitako-github-file-tree/alpoloddcggjhakjemghahlkofjekbca"},"Get"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9644\uff1a\u9ad8\u7ea7\u7bc7 - ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/littleboyharry-crx/ohmycrx/blob/master/README.md"},"\u81ea\u7f16\u8bd1\u6253\u5305\u6269\u5c55"),"\uff0c\u53ef\u7701\u53bb\u4e0b\u6587\u624b\u52a8\u914d\u7f6e\u7684\u90e8\u5206\u8fc7\u7a0b")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u53ef\u5bfc\u5165\uff1a",(0,o.kt)(m.Z,{button:!0,name:"vimium_c.json",path:"/config/vimium_c.json",icon:(0,o.kt)(i.G,{icon:l.tx1,mdxType:"FontAwesomeIcon"}),mdxType:"FileItem"})),(0,o.kt)("h2",{id:"\u9002\u7528\u8303\u56f4"},"\u9002\u7528\u8303\u56f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"about:extensions\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6269\u5c55"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dark Reader"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7ad9\u70b9\uff1a\u65e0\u75d5\u6a21\u5f0f\u3001\u672c\u5730\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uBlock Origin"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7ad9\u70b9\uff1a\u65e0\u75d5\u6a21\u5f0f\u3001\u672c\u5730\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vimium C"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7ad9\u70b9\uff1a\u65e0\u75d5\u6a21\u5f0f\u3001\u672c\u5730\u6587\u4ef6")))),(0,o.kt)("div",{className:"autoselect-item-of-list"},(0,o.kt)("p",null,"Gitako:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"github.com")),(0,o.kt)("p",null,"Linkclump:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.baidu.com"},"www.baidu.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.google.com"},"www.google.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.google.com.hk"},"www.google.com.hk")))),(0,o.kt)("h2",{id:"\u7ed1\u5b9a\u5feb\u6377\u952e"},"\u7ed1\u5b9a\u5feb\u6377\u952e"),(0,o.kt)("p",null,"Dark Reader:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alt + Shift + A")," \u6fc0\u6d3b\u6269\u5c55"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alt + Shift + D")," \u5207\u6362\u5f53\u524d\u7f51\u7ad9"),(0,o.kt)("p",null,"Vimium C:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alt + V")," \u6fc0\u6d3b\u6269\u5c55"),(0,o.kt)("p",null,"uBlock Origin:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alt + Delete")," \u8fdb\u5165\u4e34\u65f6\u79fb\u9664\u5143\u7d20\u6a21\u5f0f"),(0,o.kt)("h2",{id:"\u5176\u5b83\u914d\u7f6e"},"\u5176\u5b83\u914d\u7f6e"),(0,o.kt)("h3",{id:"ublock-origin"},"uBlock Origin"),(0,o.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=littleboyharry&repo=oh-my-blockrules&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"180",height:"32",title:"GitHub",style:{float:"right"}}),(0,o.kt)("p",null,"\u6211\u7684\u8fc7\u6ee4\u89c4\u5219\u96c6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LittleboyHarry/oh-my-blockrules"},"oh-my-blockrules")),(0,o.kt)("h3",{id:"linkclump"},"Linkclump"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 z \u952e\u6fc0\u6d3b"),(0,o.kt)("li",{parentName:"ul"},"\u63a8\u8350\u52fe\u9009 ",(0,o.kt)("inlineCode",{parentName:"li"},"open tabs at the end"))))}f.isMDXComponent=!0}}]);