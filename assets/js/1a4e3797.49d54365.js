"use strict";(self.webpackChunkdevbook=self.webpackChunkdevbook||[]).push([[7920],{8374:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(4035),r=n(1720),c=n.n(r),u=n(7294),l=n(2263),s=n(8949),o=n(5742),m=n(9960),i=n(6775),h=n(412);var f=function(){var e=(0,i.k6)(),t=(0,i.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(22),d=n(8202),E=n(2539),v=n(726),_=n(2775),g=n(311),k=n(1029);function y(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var I="searchQueryInput_CFBF",S="searchResultItem_U687",b="searchResultItemPath_uIbk",w="searchResultItemSummary_oZHr",C=n(3926);function Z(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===a,o=2===a,i=(s?n.b:r.b).slice(),h=o?n.s:n.t;return s||i.push(r.t),u.createElement("article",{className:S},u.createElement("h2",null,u.createElement(m.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,E.C)(h,c):(0,v.o)(h,(0,_.m)(l,"t"),c,100)}})),i.length>0&&u.createElement("p",{className:b},(0,C.e)(i)),o&&u.createElement("p",{className:w,dangerouslySetInnerHTML:{__html:(0,v.o)(n.t,(0,_.m)(l,"t"),c,100)}}))}var R=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,m=(0,u.useState)(n),i=m[0],h=m[1],E=(0,u.useState)(),v=E[0],_=E[1],S=(0,u.useState)(),b=S[0],w=S[1],C=(0,u.useMemo)((function(){return i?y(k.Iz.search_results_for,{keyword:i}):k.Iz.search_the_documentation}),[i]);(0,u.useEffect)((function(){r(i),v&&(i?v(i,(function(e){w(e)})):w(void 0))}),[i,v]);var R=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==i&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,_((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(s.Z,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,C)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,C),u.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:R,value:i,autoComplete:"off",autoFocus:!0}),!v&&i&&u.createElement("div",null,u.createElement(g.Z,null)),b&&(b.length>0?u.createElement("p",null,y(1===b.length?k.Iz.count_documents_found:k.Iz.count_documents_found_plural,{count:b.length})):u.createElement("p",null,k.Iz.no_documents_were_found)),u.createElement("section",null,b&&b.map((function(e){return u.createElement(Z,{key:e.document.i,searchResult:e})})))))}}}]);