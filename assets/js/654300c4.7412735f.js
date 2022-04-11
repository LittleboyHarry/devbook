/*! For license information please see 654300c4.7412735f.js.LICENSE.txt */
(self.webpackChunkgeekbook=self.webpackChunkgeekbook||[]).push([[3050],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5441:function(e,t,n){"use strict";n.d(t,{T6:function(){return d},nT:function(){return m},rg:function(){return f},Rm:function(){return u}});var i=n(7294),r=n(4184),o=n.n(r),a="choice_9LTZ",l=n(2389),c="custom.preferPkgMgr",s=(0,i.createContext)({active:"dnf",setActive:function(e){},options:{}});function u(e){var t=e.apt,n=e.dnf,r=e.children,o=(0,l.Z)(),a=(0,i.useState)("dnf"),u=a[0],p=a[1];return(0,i.useEffect)((function(){o&&p(window.localStorage.getItem(c))}),[o]),i.createElement(s.Provider,{value:{active:u,setActive:function(e){window.localStorage.setItem(c,e),p(e)},options:{apt:t,dnf:n}}},r)}function p(e){var t=e.test,n=e.type,r=e.label,l=(0,i.useContext)(s),c=l.active,u=l.setActive,p=c===n;return t&&i.createElement("label",{className:o()(a,"pills__item",p&&"pills__item--active")},i.createElement("input",{type:"radio",value:n,name:"prefer-pkgmgr",checked:p,onChange:function(e){var t=e.target.value;return u(t)}}),r)}function f(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=(0,i.useContext)(s).options,n=t.apt,r=t.dnf;return i.createElement("div",{className:"pills pills--block",style:{marginBottom:"1rem"}},i.createElement(p,{test:n,type:"apt",label:"apt"}),i.createElement(p,{test:r,type:"dnf",label:"dnf"}))}function d(e){var t=e.children;return"apt"===(0,i.useContext)(s).active&&t}function m(e){var t=e.children;return"dnf"===(0,i.useContext)(s).active&&t}},5354:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=n(5441),l=["components"],c={title:"\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5"},s=void 0,u={unversionedId:"linux/mustdo/chinese",id:"linux/mustdo/chinese",title:"\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5",description:"iBus \u4e2d\u6587\u8f93\u5165\u4f53\u9a8c\u6548\u679c\u5e76\u4e0d\u7406\u60f3\uff0c\u4f5c\u8005\u7ecf\u5e38\u9047\u5230\u5361\u987f\u3001\u8f93\u5165\u65e0\u54cd\u5e94\u7b49\u95ee\u9898\u3002fcitx5 \u53ef\u80fd\u662f\u66f4\u597d\u7684\u5f00\u6e90\u8f93\u5165\u6cd5\u6280\u672f\u3002",source:"@site/docs/linux/4-mustdo/32-chinese.md",sourceDirName:"linux/4-mustdo",slug:"/linux/mustdo/chinese",permalink:"/geekbook/docs/linux/mustdo/chinese",editUrl:"https://github.com/LittleboyHarry/geekbook/edit/main/docs/linux/4-mustdo/32-chinese.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"\u914d\u7f6e\u4e2d\u6587\u8f93\u5165\u6cd5"},sidebar:"getstarted",previous:{title:"Debian or Ubuntu",permalink:"/geekbook/docs/linux/mustdo/debian"},next:{title:"Grub",permalink:"/geekbook/docs/linux/grub"}},p=[{value:"fcitx5",id:"fcitx5",children:[{value:"\u81ea\u52a8\u914d\u7f6e",id:"\u81ea\u52a8\u914d\u7f6e",children:[{value:"\u5728 GNOME \u4e2d\u4f7f\u7528",id:"\u5728-gnome-\u4e2d\u4f7f\u7528",children:[],level:4}],level:3}],level:2}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"iBus \u4e2d\u6587\u8f93\u5165\u4f53\u9a8c\u6548\u679c\u5e76\u4e0d\u7406\u60f3\uff0c\u4f5c\u8005\u7ecf\u5e38\u9047\u5230\u5361\u987f\u3001\u8f93\u5165\u65e0\u54cd\u5e94\u7b49\u95ee\u9898\u3002fcitx5 \u53ef\u80fd\u662f\u66f4\u597d\u7684\u5f00\u6e90\u8f93\u5165\u6cd5\u6280\u672f\u3002"),(0,o.kt)("details",{className:"let-details-to-gray"},(0,o.kt)("summary",null,"\u5982\u679c\u8fd8\u662f\u6253\u7b97\u4f7f\u7528 iBus ..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5782\u76f4\u663e\u793a\ndconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/lookup-table-orientation 1\n# \u7981\u7528\u7b80\u7e41\u5207\u6362\u952e\ndconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/trad-switch \"''\"\n# \u7981\u7528\u534a\u89d2\u4e0e\u5168\u89d2\u5207\u6362\ndconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/punct-switch \"''\"\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u767e\u5ea6\u4e91\u62fc\u97f3\uff1a( \u9700\u8981\u4e0a\u4f20\u8f93\u5165\u6570\u636e\u4ee5\u4f9b\u5206\u6790 )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/enable-cloud-input true\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u5c0f\u9e64\u53cc\u62fc\uff1a\u63d0\u9ad8\u4e2d\u6587\u7801\u5b57\u6548\u7387"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /com/github/libpinyin/ibus-libpinyin/libpinyin/\n[/]\ndouble-pinyin=true\ndouble-pinyin-schema=5\nEND\n")),(0,o.kt)("p",null,"\u6539\u53d8\u5916\u89c2\uff1a\u5927\u53f7\u5b57\u4f53\u7ad6\u6392\u5019\u9009\u6846\uff0c\u9700\u8981 ",(0,o.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/4112/customize-ibus/"},"GNOME \u63d2\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dconf write /org/gnome/shell/extensions/customize-ibus/input-indicator-only-on-toggle true\ndconf write /desktop/ibus/panel/use-custom-font true\ndconf write /desktop/ibus/panel/custom-font 'Sans 16'\ndconf write /org/gnome/shell/extensions/customize-ibus/custom-font 'Sans 16'\n"))),(0,o.kt)("h2",{id:"fcitx5"},"fcitx5"),(0,o.kt)(a.Rm,{dnf:!0,apt:!0,mdxType:"PreferPkgMgrScope"},(0,o.kt)(a.rg,{mdxType:"PkgMgrSelector"}),(0,o.kt)(a.nT,{mdxType:"ForDnf"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo dnf in -y fcitx5-autostart fcitx5-chinese-addons fcitx5-configtool \\ # \u6838\u5fc3\u5305\n               kf5-kconfig-core                                           # \u81ea\u52a8\u811a\u672c\u914d\u7f6e\u5de5\u5177\ntest -n "$KDE_FULL_SESSION" && sudo dnf in -y kcm-fcitx5                  # KDE \u4f9d\u8d56\u6a21\u5757\n'))),(0,o.kt)(a.T6,{mdxType:"ForApt"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo apt install -y fcitx5-chinese-addons fcitx5-config-qt \\         # \u6838\u5fc3\u5305\n                    libkf5config-bin                                 # \u81ea\u52a8\u811a\u672c\u914d\u7f6e\u5de5\u5177\ntest -n "$KDE_FULL_SESSION" && sudo apt install -y kde-config-fcitx5 # KDE \u4f9d\u8d56\u6a21\u5757\n')))),(0,o.kt)("h3",{id:"\u81ea\u52a8\u914d\u7f6e"},"\u81ea\u52a8\u914d\u7f6e"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8bf7\u786e\u4fdd\u542f\u52a8\u8fc7\u4e00\u6b21\u8f93\u5165\u6cd5\u540e\u9000\u51fa")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u81ea\u52a8\u914d\u7f6e\u4ec5\u8003\u8651\u521d\u59cb\u5316\u73af\u5883\u3002\u82e5\u81ea\u5b9a\u4e49\u8fc7\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u5907\u4efd\u91cd\u7f6e\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"mv ~/.config/fcitx5 backupcfg-fcitx\n"))))),(0,o.kt)("p",null,"\u7a0b\u5e8f\u5f00\u53d1\u5fc5\u505a\uff1a\u89e3\u9664\u5feb\u6377\u952e\u51b2\u7a81"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ee5 Super+Space \u4ee3\u66ff Ctrl+Space"),(0,o.kt)("li",{parentName:"ul"},"\u89e3\u9664 Ctrl+Shift+F \u7b80\u7e41\u4f53\u5207\u6362\u952e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kwriteconfig5 --file fcitx5/config --group Hotkey/TriggerKeys --key 0 Super+space\nkwriteconfig5 --file fcitx5/conf/chttrans.conf --group Hotkey --key 0 ''\n")),(0,o.kt)("p",null,"\u7b14\u8005\u504f\u597d\uff0c\u53ef\u4f9b\u53c2\u8003\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e0d\u56e0\u5e94\u7528\u800c\u5207\u6362\u8bed\u8a00\uff1a\nkwriteconfig5 --file fcitx5/config --group Behavior --key ShareInputState All\n\n# \u5916\u89c2\u5fae\u8c03\uff1a\nkwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key PageSize 5\nkwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key "Vertical Candidate List" True\nkwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key Font "Noto Sans CJK SC 22"\n\n# \u5c0f\u9e64\u53cc\u62fc\uff1a\nkwriteconfig5 --file fcitx5/profile --group Groups/0 --key DefaultIM shuangpin\nkwriteconfig5 --file fcitx5/profile --group Groups/0/Items/1 --key Name shuangpin\nkwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key ShuangpinProfile Xiaohe\n')),(0,o.kt)("div",{className:"alert alert--warning"},"\u6240\u6709 kwriteconfig5 \u914d\u7f6e\u540e\uff0c\u518d\u6b21\u542f\u52a8\u8f93\u5165\u6cd5\u4ee5\u751f\u6548"),(0,o.kt)("h4",{id:"\u5728-gnome-\u4e2d\u4f7f\u7528"},"\u5728 GNOME \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u89e3\u9664 iBus \u5360\u7528 Ctrl+Space\ngsettings set org.gnome.desktop.wm.keybindings switch-input-source "[]"\ngsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward "[]"\n\n# \u89e3\u9664 Super+V \u7684\u5360\u7528\ngsettings set org.gnome.shell.keybindings toggle-message-tray "[\'<Super>m\']"\n\n')),(0,o.kt)("p",null,"\u6539\u5584 GNOME \u5916\u89c2\u7684",(0,o.kt)("a",{parentName:"p",href:"https://extensions.gnome.org/extension/261/kimpanel/"},"\u6269\u5c55"),"\uff1a\n\u5927\u53f7\u5b57\u4f53\u7ad6\u6392\u5019\u9009\u6846"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat << END | dconf load /org/gnome/shell/extensions/kimpanel/\n[/]\nfont='Noto Sans CJK SC 18'\nvertical=true\nEND\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5728 GNOME \u4e2d\u66f4\u6539\u8fc7\u952e\u4f4d\u91cd\u6620\u5c04")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"kwriteconfig5 --file ~/.config/fcitx5/conf/xcb.conf --group \"<default>\" --key 'Allow Overriding System XKB Settings' False\n")),(0,o.kt)("p",{parentName:"div"},"\u6267\u884c\u540e\uff0c\u53ef\u80fd\u9700\u8981\u91cd\u542f\u7cfb\u7edf\u4ee5\u6d88\u9664 bug"))))}d.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)i.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);