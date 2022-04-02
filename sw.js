(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"5c28752ebcf82673cf3953dee48379ac","url":"404.html"},{"revision":"0916a62dcab593beb13fd6870562b3c6","url":"assets/css/styles.0d8c4744.css"},{"revision":"8310c9a76e7de46b1faf687029db6fda","url":"assets/js/0f16aff4.01263b01.js"},{"revision":"6090237859146e5173ed6e76daeebaff","url":"assets/js/1250136b.634ba756.js"},{"revision":"e452aaf1ba3e8baf5869476f27bbbba1","url":"assets/js/1337.c42dc935.js"},{"revision":"2b2f251dc469e5fcd21bf5915c64d6d1","url":"assets/js/1417.9c9d0bc1.js"},{"revision":"6df8b8665c4f7b5e2ce2192e8c13c374","url":"assets/js/148f473c.b13121ca.js"},{"revision":"0c7f62ccca81099b77b57f26a42b7fd8","url":"assets/js/17896441.b61d9ef5.js"},{"revision":"99562a775daaad7def7a287120750e94","url":"assets/js/1a1b643e.6ffc121b.js"},{"revision":"7df44cc304b7f308c12918ab242f6062","url":"assets/js/1a4c2e58.91d527e6.js"},{"revision":"46d33a84d2d7b701a51be4b613e77071","url":"assets/js/1a4e3797.e253c38a.js"},{"revision":"db91e0302f30a64a3ab6621bf208e224","url":"assets/js/1be78505.9f2d4e6b.js"},{"revision":"7b476ce6534010f8a11da5ac8fc72ae3","url":"assets/js/1c200ee5.09fd091d.js"},{"revision":"1c1e01a21429b4a93f684a054de3f719","url":"assets/js/1cca77fa.4ff8010f.js"},{"revision":"e8792ec6c3c0ea93aeddd090c2178a1b","url":"assets/js/1df93b7f.8cf6f156.js"},{"revision":"16d78de430c22d2a98cc0ea8f31c49b9","url":"assets/js/1df9be45.1ff94641.js"},{"revision":"a45e1af4f0f29308f343cecccd4ee21f","url":"assets/js/1f391b9e.499a590f.js"},{"revision":"69e28ed0804384c1aa8dbfe1e669cdcf","url":"assets/js/230.5545b187.js"},{"revision":"0817b449e77bcf390de47445a8032a00","url":"assets/js/24117c8a.2f56fd94.js"},{"revision":"3bb7eb4c010bb23fc0f4ebdae16a51f4","url":"assets/js/24e5030a.ea1489fe.js"},{"revision":"b174d12107904295c28f44246c482db6","url":"assets/js/251cf535.9a792c29.js"},{"revision":"e842861ee0a22a5e33ca374762b03f90","url":"assets/js/2681f1b1.1bc10ca9.js"},{"revision":"0ebed2af9e49a05103c2b2e51bbb8347","url":"assets/js/27912143.b292d00d.js"},{"revision":"b6939d1a859c18332a877b5bc9c15e93","url":"assets/js/299ac74a.95a71e06.js"},{"revision":"afa672fcc6c73b853e2322ad550f6abf","url":"assets/js/2c24658f.338d5032.js"},{"revision":"1efd8a90cab2b723729f16a54965464a","url":"assets/js/2ce51fe6.078abad4.js"},{"revision":"968a88c7185da542a2e83114d478360e","url":"assets/js/303984c2.bbbec39e.js"},{"revision":"68667ae0747cb1f0a83e7b2325b8cd3e","url":"assets/js/3065f3f6.7fba2b37.js"},{"revision":"0d0d2a6b6647f4a20a31635bf79f5316","url":"assets/js/33d5bf00.60040746.js"},{"revision":"c6e2c9d786dd1f6c7281e60405e6aa20","url":"assets/js/33f06f9b.c2ad3e56.js"},{"revision":"8964581467945cab2248d97e43c96ed3","url":"assets/js/3720c009.45f18a81.js"},{"revision":"ccc23609c182d037fb075cc6b14eef83","url":"assets/js/374e4158.5a938456.js"},{"revision":"9afd3228b611f99ed037bc96896e03fa","url":"assets/js/399fd006.b10f6490.js"},{"revision":"dcad3cfb76bcfaaa8df309212058b3cd","url":"assets/js/3ad9b984.3736bd6a.js"},{"revision":"4d3810db85f280c6f4a9cb9d687d2851","url":"assets/js/3f6cfc63.e966a77a.js"},{"revision":"6f3c338e68850db9f381ecd44219d0e4","url":"assets/js/4016ce13.03c0592e.js"},{"revision":"859ecc47a6b068a095d2d329778cc8b3","url":"assets/js/420d7957.6a87fe0c.js"},{"revision":"0fcbe263353303171602ac95f0d7a74d","url":"assets/js/4249927b.9fda6dbb.js"},{"revision":"1fd6827c26094a3961a777af1ca1151c","url":"assets/js/430874fc.16b0eb85.js"},{"revision":"d401bbaca9c5ea7580bc81a93db9cb47","url":"assets/js/43b4557b.ae8ac629.js"},{"revision":"7e1604df04f9dcc99ec0ff32034c8ac5","url":"assets/js/4608.64048e68.js"},{"revision":"a477b2444904c29799b0443391dd8bfd","url":"assets/js/46f2b027.26a751c3.js"},{"revision":"5ad8510b8db0941652bdb829c6d9e046","url":"assets/js/5048.9ad9bec4.js"},{"revision":"08418f795797ea685728b77cf8caa478","url":"assets/js/510bfa6a.b82c4263.js"},{"revision":"fca7253879381ab8a17556cd8dd07501","url":"assets/js/5131.9d25201f.js"},{"revision":"44ddbcff6523df7cb85887ceedf0e0b7","url":"assets/js/5244d3c1.7627acfd.js"},{"revision":"3643458b7a8c58f10633f2c8e29e1c4f","url":"assets/js/5283.b15056ee.js"},{"revision":"f5378ea09a3f797f1bdc23abb0a401d8","url":"assets/js/52f034f9.f52f459d.js"},{"revision":"76d647b764720aeff075d1433a440bbf","url":"assets/js/54401ef4.15a96024.js"},{"revision":"ed371bb3936c573dab2de5fd01607336","url":"assets/js/54b7bfbf.91388fd1.js"},{"revision":"7a05ce710f1113ff70021aa675c200df","url":"assets/js/5525.a135b73a.js"},{"revision":"cc8cc230c83446de34510417fc906850","url":"assets/js/55960ee5.f64a3632.js"},{"revision":"507062968fd228eec4c201cbad1547be","url":"assets/js/57da3733.d68b1d79.js"},{"revision":"3c1700e106c2f722bb93132704cf721c","url":"assets/js/5ae75735.95b7611a.js"},{"revision":"527ceb2ace1a842beaee8134c9833254","url":"assets/js/5b8ecb52.7b13b6eb.js"},{"revision":"33e5ead3f6a9519d3e10344a64fb8bdb","url":"assets/js/5bf8d6d7.4753c784.js"},{"revision":"dea34d2d66c318423841f6bfe3a558ce","url":"assets/js/5c6fca7a.2db270a2.js"},{"revision":"e5d036afe27b2ea9d98cc6e01aca1327","url":"assets/js/5da2933e.7a9229a5.js"},{"revision":"8db54aa64bab39fcd29d8cb7aacf54ae","url":"assets/js/5e136e46.72f4f0c4.js"},{"revision":"5ca9b02095c2ab0a17e7322680883eff","url":"assets/js/5ebc5ef6.696cbd38.js"},{"revision":"58d4beca4b283694f3006039be7760dc","url":"assets/js/6035ec75.2889d3e1.js"},{"revision":"74e7239849667aa6abd53fa4e82a193d","url":"assets/js/639526ce.7910a003.js"},{"revision":"058356a028465636acb0e8afd57e8617","url":"assets/js/66d6d806.83987c6a.js"},{"revision":"56d3837a55627c2398f2a6974594d7f5","url":"assets/js/6b6710aa.c0939505.js"},{"revision":"a998be67862f5d8d0acac527b2aad003","url":"assets/js/6bc72304.f223337b.js"},{"revision":"e24c7a6dd61911f0c1f68f7744793f60","url":"assets/js/6c2fbe81.4bd2dad3.js"},{"revision":"7e05f1b26fa4f6f5f126e9431da27045","url":"assets/js/6ea097ec.f8f3af82.js"},{"revision":"a56b07dfad91d0a2aa9256db79c847f9","url":"assets/js/6ffa9bf1.59e335aa.js"},{"revision":"21f027ca53422d1d8c081ca2a2ec4ea0","url":"assets/js/7380f56e.206aaf56.js"},{"revision":"04f59a82a1c611eee3af925425a8217f","url":"assets/js/7565d07c.4c50d298.js"},{"revision":"869e813156a343a6a8d7900c242723d4","url":"assets/js/77ed06f9.127b7984.js"},{"revision":"4c860fa3a9108bdcbbc8c0f2712adc3d","url":"assets/js/78eb4c4a.2efc33f8.js"},{"revision":"6cb7131681720b6627a5b019e642d1b4","url":"assets/js/7aaa7993.90fdb984.js"},{"revision":"3481a12d998ccf73d68ccd7bf19e1442","url":"assets/js/7c4d70d4.b10c92c4.js"},{"revision":"8a6a45e6c786fd04f02c670b62fec5f7","url":"assets/js/7c70d6c8.df1a2ae7.js"},{"revision":"f537e8a72f1afff71e94a8b3722796f2","url":"assets/js/8443.66ba7d5c.js"},{"revision":"d093d571e6ea33ffa2224b3a0e081492","url":"assets/js/857bdef3.d67fe65b.js"},{"revision":"d6f7f687277429d17d6c04b8e8cd67b6","url":"assets/js/8a2f82a2.3c990bd2.js"},{"revision":"7d4ec50a4e99839405363f23b82e27a3","url":"assets/js/8a8a3318.a3d7a999.js"},{"revision":"12197b504fd2a132e283cd7d63ce6d6f","url":"assets/js/8ade9b72.1ec78a45.js"},{"revision":"d8fef12610141afb05a5816e13f3679a","url":"assets/js/8bbf0c5d.822bd55a.js"},{"revision":"634a3570af1fdfdbae9e420098aa6ab1","url":"assets/js/8bc941e3.d6fb0f1e.js"},{"revision":"cd66082ccbf57d6f50bc0512f7eb4624","url":"assets/js/90eef112.9f489591.js"},{"revision":"0a88727d25837260ca73a0578980075c","url":"assets/js/919eaccb.100ec2b5.js"},{"revision":"2649f36f97d31696521e232a27e958f6","url":"assets/js/935f2afb.5dc25a51.js"},{"revision":"3f553d56633c403bc0a20d7303bcd8f7","url":"assets/js/94df4a48.2eebe116.js"},{"revision":"753b789e94175ad1018a28eef1a6393f","url":"assets/js/9627da5d.7b7fd577.js"},{"revision":"9619a336ba4149b50a62f1d105e04eda","url":"assets/js/97c78280.7e29e87a.js"},{"revision":"b52de329ac53ff9368f3e0fe9ca1cec6","url":"assets/js/9c6966d7.7b86baa2.js"},{"revision":"6c8aae2ce21136dee11f4b634e59f842","url":"assets/js/9e4087bc.c208e971.js"},{"revision":"4e13fcb264a207213c10379f0c758004","url":"assets/js/9e6f3119.4b6c522a.js"},{"revision":"80692d193d7803efa9ab5c1877087d23","url":"assets/js/a07ab0a1.dc4fed46.js"},{"revision":"7ef564919b716f011485533acf652fd9","url":"assets/js/a08cf3c8.9bc65996.js"},{"revision":"56d7d4d9c8e2353fc10b00446daea5c5","url":"assets/js/a16e4402.df0dcaf7.js"},{"revision":"ebdfea81c2c20d43df870efef47fab7c","url":"assets/js/a24afeb3.9f14cb2d.js"},{"revision":"b8afaa1252f5a4141d4cc7fe25e1d717","url":"assets/js/a30f5914.10190668.js"},{"revision":"a026627c2b35d2ca6c4624c5577b9869","url":"assets/js/a52932f5.9e716443.js"},{"revision":"d77fa10a95646c7aa887e9bd6a18984f","url":"assets/js/a7f64267.ac535819.js"},{"revision":"14823d44a10a4b845aca53ce256d7f39","url":"assets/js/b0bece54.ce672862.js"},{"revision":"908dd14ba4404efafc3cd3cc6cbe8189","url":"assets/js/b40edb54.071ea0a3.js"},{"revision":"5206f099664df9930cd3a81b57950c2b","url":"assets/js/b4f07b74.ee0d98db.js"},{"revision":"c2cbe9584d7e71be5b2b6b9e3841f496","url":"assets/js/bd1dbdef.9bc46035.js"},{"revision":"08c009b9f6df5c58e35eaf1dddc47220","url":"assets/js/bea7f9be.9b872d37.js"},{"revision":"893d02f2e459177398c93acaf93b8d65","url":"assets/js/bfe15008.c93e4db2.js"},{"revision":"5bfc0ce49daf62e74b8da909d7017495","url":"assets/js/c3323945.827f4e75.js"},{"revision":"d1af9052b87ef296ddb3c779cfa78cd8","url":"assets/js/c590bad8.29ce87c8.js"},{"revision":"63c09d04f92bff5e6e53164ef1ab2c9c","url":"assets/js/c7ad42cd.07d52687.js"},{"revision":"1f90a7fd2a218f66a15d50fb31ccc3ec","url":"assets/js/c88e5946.fde2ebce.js"},{"revision":"03442940a725ef67dc9318029647d348","url":"assets/js/ce725bbc.c88782d1.js"},{"revision":"06125d7dee82feeb754267ae652660ae","url":"assets/js/d27936b2.862a9884.js"},{"revision":"8e92836f325198d0f689f8e8d322989e","url":"assets/js/d687a59a.53c9ed6e.js"},{"revision":"fae3956cbc0efc35ae8710e8b16b6c0d","url":"assets/js/ddc0723c.6032f204.js"},{"revision":"51168ba42d44271cad5d4cd47cc1dc59","url":"assets/js/de56acc9.6e84a2b5.js"},{"revision":"0a40e1bbdd6bb9247e963d591b1a47d3","url":"assets/js/df203c0f.c57eeb6c.js"},{"revision":"f84c6f2c955afe4866b5080f88fc1b88","url":"assets/js/e33f5301.c413215a.js"},{"revision":"f3221da3fd91a30bf5c61d8da4cb6c02","url":"assets/js/e84ddc6d.9eb47e74.js"},{"revision":"0233753e742898aa42b524ea69208749","url":"assets/js/eac550ad.8b9a9400.js"},{"revision":"f8cf7d82175c71cb42fdd3312d4b7864","url":"assets/js/eb8ef020.96351e92.js"},{"revision":"ad4fcf7c1d62cb504d40a29337aec46b","url":"assets/js/ed541119.019a4386.js"},{"revision":"203f751fd8c9b5d1906234dc5736f8d1","url":"assets/js/ee14c687.b496689a.js"},{"revision":"c5e0d3d2e30db4a0fadce281006cb5c2","url":"assets/js/eeb96c1e.f92a592b.js"},{"revision":"5c8563822222aba2eeab777e64637f10","url":"assets/js/efc2a3ab.96461c1c.js"},{"revision":"56a12c6fc68466502acf2876c6274041","url":"assets/js/f07f7269.0d0d7217.js"},{"revision":"f5ef8dc8e27a27693722389dbc31afd4","url":"assets/js/f19159e5.53a1e07c.js"},{"revision":"f9e008f5f50acea7087336912c09bb5e","url":"assets/js/f5563378.3b0bce9f.js"},{"revision":"a024b0afaf0015db673999dfb124c6c6","url":"assets/js/f5719145.4bad7915.js"},{"revision":"cbe1473f9db37ae83a66ce93c1361f30","url":"assets/js/f7282d6e.c5e74430.js"},{"revision":"a15c270ff992ccad480a66d74948085f","url":"assets/js/f7c693a4.15f053e0.js"},{"revision":"95fb2ab6d7548210c13999c208a2dcfb","url":"assets/js/fad03a1a.18ce6357.js"},{"revision":"1882f0ef92951c018260ac038130d2f2","url":"assets/js/fb65f1f2.9185f4d0.js"},{"revision":"00417e996a196d5f8d84218eae0fa589","url":"assets/js/fb7a4e09.c10d079f.js"},{"revision":"dd0487f81393256639db77b0d8f14a2e","url":"assets/js/fdf931b6.9ff46fad.js"},{"revision":"7df83c6d20f93591629e944a6d939a15","url":"assets/js/ff7dd346.cd15301d.js"},{"revision":"0f77453ea8367b53bf97456b8580acfa","url":"assets/js/ffcb521f.d6e1bf53.js"},{"revision":"a88c1ff349749beef96d180117f7fcce","url":"assets/js/main.2faba1b5.js"},{"revision":"30e99936c6432d74dbd3c047fc47fc82","url":"assets/js/runtime~main.b18baf80.js"},{"revision":"ab202324c361531d4cc00c804157fa76","url":"blog/archive.html"},{"revision":"e66f54c796956ce7c41374491c7360f7","url":"docs/browser/edge-for-linux.html"},{"revision":"4a2f4f63948784b9239a82508cf06ce4","url":"docs/browser/extensions.html"},{"revision":"261698b494cd7513efad74fb18e0db9e","url":"docs/browser/intro.html"},{"revision":"cfc5275c3daccf38b2c98f3a5ff12f35","url":"docs/browser/no-adtrack.html"},{"revision":"40f20b7c827b4b421d3be7667133521c","url":"docs/browser/search.html"},{"revision":"394dcfc454f22ac696878a7385375b6b","url":"docs/browser/tips.html"},{"revision":"e2c2c30133bd27a6f59a030a3a130309","url":"docs/common/dictionary.html"},{"revision":"1529cdeed6b9cd67795aa05644c80da8","url":"docs/common/email.html"},{"revision":"a3a27acfbb2043775a31de4dbe289a28","url":"docs/common/intro.html"},{"revision":"a8adf93a2eba0ca9f31b53c734bc0e8e","url":"docs/common/workrave.html"},{"revision":"f33e8bf04b4eb16fc1e9ace1f3dbcbb9","url":"docs/dev/cli/bat.html"},{"revision":"cc1543c637a382f03294326d94f4b9ec","url":"docs/dev/cli/delta.html"},{"revision":"6bf344cdeab05c318d57177706df66ee","url":"docs/dev/cli/fd.html"},{"revision":"c77a25c0cb9b666e95ad4ef1fe7db5cd","url":"docs/dev/cli/fzf.html"},{"revision":"5b4958cad08b918416874a0cff610a12","url":"docs/dev/cli/index.html"},{"revision":"04c0d8a94a5cbe2fb2fe929d000d2dec","url":"docs/dev/cli/network.html"},{"revision":"9a082f3e4e9a2ea65ef2f35d0cb43fc5","url":"docs/dev/cli/pandoc.html"},{"revision":"6ceebd32bac5b6ed370cc39d64568233","url":"docs/dev/cli/pipx.html"},{"revision":"551188d52a0969e6a7a17c45b157e671","url":"docs/dev/cli/ripgrep.html"},{"revision":"1b774edc47d037ca0bb26a97b8df3128","url":"docs/dev/cli/tldr.html"},{"revision":"eced2be8587386af0bea7af4005fd9df","url":"docs/dev/cli/tmux.html"},{"revision":"1bfda53a82043091902972074ce62497","url":"docs/dev/cli/zoxide.html"},{"revision":"22e9883a02d8e880f72a5317c3c50a76","url":"docs/dev/deploy-my-dotfiles.html"},{"revision":"83cac7d7dca3740069328061b0a63200","url":"docs/dev/font.html"},{"revision":"31db10be162600d63a5ecf77f80a0378","url":"docs/dev/git.html"},{"revision":"42052e4f5fe7cebe69481072465b3cea","url":"docs/dev/intro.html"},{"revision":"79da6e85f18d37c2baf9db078cee6b50","url":"docs/dev/jetbrains/config.html"},{"revision":"aeac33cf4fbde517960f78d9feb3e732","url":"docs/dev/jetbrains/plugins.html"},{"revision":"2cc7bfc2f64a9c7f104f8b0d0e7f6782","url":"docs/dev/jetbrains/tips.html"},{"revision":"573ca333544bdae3f9e686913dcb25fd","url":"docs/dev/jetbrains/toolbox.html"},{"revision":"92f63b8d9cb906df68466ff8d45605fd","url":"docs/dev/keymap.html"},{"revision":"9a4d156f706e2843fe4b8b56985788af","url":"docs/dev/neovim.html"},{"revision":"0833836b2470bceae96d077db77a884b","url":"docs/dev/nodejs.html"},{"revision":"542c266801f6aa811b00f52c824e35ba","url":"docs/dev/podman.html"},{"revision":"4f7db9c14569fb7d714225542bc98c28","url":"docs/dev/python.html"},{"revision":"0b882eca3829f42cb19f93deabf5b258","url":"docs/dev/rust.html"},{"revision":"e923a85e2ba780c6f2f5986a8ab3a782","url":"docs/dev/shell.html"},{"revision":"9417dec2d9d5ea6309cb91d6f3c57796","url":"docs/dev/virtual/introduce.html"},{"revision":"0bc56216f35100685bdc7092e4eea0a7","url":"docs/dev/virtual/libvirt.html"},{"revision":"c77e7726ea6ca4f52a0474f5acebb3db","url":"docs/dev/virtual/vagrant.html"},{"revision":"48191d9bfaf599ac06ec9307cfbcbf7e","url":"docs/dev/virtual/virtualbox.html"},{"revision":"434ec9869577ac709c68e7ec4fd20730","url":"docs/dev/vscode/advanced.html"},{"revision":"f38e229c25763098ada625584801e08f","url":"docs/dev/vscode/extensions.html"},{"revision":"2ec7d9a06d72c7e3bcc0e118d4915bd7","url":"docs/dev/vscode/install.html"},{"revision":"a30365144f21c73f3a22b7b14a66f37c","url":"docs/dev/vscode/settings.html"},{"revision":"a7586156ea8d412fba466329978a06e4","url":"docs/dev/vscode/vim.html"},{"revision":"65f2264bd67778ee2c66076a021d9171","url":"docs/dev/zeal.html"},{"revision":"f2380f2a438fcc69b4752893108676eb","url":"docs/dev/zsh.html"},{"revision":"6654e27d48eacb876b653e821762b920","url":"docs/linux/advanced.html"},{"revision":"ad8cdc1e52b7365c595bda31ce130759","url":"docs/linux/chinese.html"},{"revision":"7da7078fc4db9b07dcc7a9c4273a357f","url":"docs/linux/cockpit.html"},{"revision":"ec5843446f8cd9a651a40f684a78a951","url":"docs/linux/deepin.html"},{"revision":"bcc6402cd7d61b9d13a9b34d8720e908","url":"docs/linux/dual-os.html"},{"revision":"794868725d6f86503bc605fa55380f06","url":"docs/linux/firewall.html"},{"revision":"9ee94b1ed4fb0d4e73c2e95438356f72","url":"docs/linux/flatpak.html"},{"revision":"8ed067b1c77fe421dc80f7f93175b319","url":"docs/linux/gnome/apps.html"},{"revision":"3c37b23c00768abdaf72a3a3cf9e07af","url":"docs/linux/gnome/dash.html"},{"revision":"afe1efd435f5a337f231c231c32c003a","url":"docs/linux/gnome/extensions.html"},{"revision":"d2c04c999cfcfa260d050b6353f7ef19","url":"docs/linux/gnome/features.html"},{"revision":"7399452b36d5dbe6e97be506c54e1bba","url":"docs/linux/gnome/optimize.html"},{"revision":"875d15cf2889e6d00ebc31556dfae82b","url":"docs/linux/gnome/panel.html"},{"revision":"ecd1cdf85dff1fedea8bbfcac4810f5d","url":"docs/linux/gnome/theme.html"},{"revision":"da32d6bae401ff17043f9a3e45aebf8a","url":"docs/linux/gnome/tips.html"},{"revision":"639f632a5b438dc23e4d8b73e6608fc9","url":"docs/linux/gnome/ubuntu.html"},{"revision":"27c35523abbfa2f7b02784c3e24a589e","url":"docs/linux/install.html"},{"revision":"5b8cae56b8adef1eaf6b7bd0a551ebb8","url":"docs/linux/kde/config.html"},{"revision":"507484af9667301cd869611b1145b6d0","url":"docs/linux/kde/features.html"},{"revision":"f63994cbebcaebee3e1d120eb2de9e4f","url":"docs/linux/kde/keymap.html"},{"revision":"db569acb62af9caca0f0007284ac5d6a","url":"docs/linux/kde/kwrite.html"},{"revision":"bad47e87b163508e028d2c8207c449a6","url":"docs/linux/kde/recommend.html"},{"revision":"7ed5bc3648e5a0c1ce489303dc1234d8","url":"docs/linux/kde/tips.html"},{"revision":"f2f699f7eafb10a19e5d0b46fa5c812c","url":"docs/linux/kernel.html"},{"revision":"499246ee699aa28dd162164e3028d43f","url":"docs/linux/optimize.html"},{"revision":"2bb38104975b6005f559bba381529898","url":"docs/linux/overview.html"},{"revision":"10ac7510127f8d74901300642203f623","url":"docs/linux/pkgmgr.html"},{"revision":"18cec9ba7f721742c1b3764c735628dc","url":"docs/linux/recommend.html"},{"revision":"34bcde9a8cbc71613fd0e071b0b275aa","url":"docs/linux/tips.html"},{"revision":"4a6c6664911811a86405b1b264541d7a","url":"docs/tags.html"},{"revision":"d65b9daae6eb1efca4a0475a0a8d2a4c","url":"docs/tags/cloud-init.html"},{"revision":"c6295d441288e8688398fc014efc6789","url":"docs/tags/libvirt.html"},{"revision":"29d819b3b9c1db3b876d06f71c989b35","url":"docs/tags/linux.html"},{"revision":"1ccf42f96010c7dc7bed952f384d9564","url":"docs/win/dev/cli.html"},{"revision":"ed96e5e623631ab3afa4fa23e4599ab6","url":"docs/win/dev/getstarted.html"},{"revision":"896d8913a913d3360f65ccfb99ca1f1c","url":"docs/win/dev/green.html"},{"revision":"8f86ab87a08bae00bf86878cabdc7aac","url":"docs/win/dev/nirsoft.html"},{"revision":"d792181c8b87a81a8940c145efcc82cf","url":"docs/win/dev/powershell.html"},{"revision":"a5733a90e0a41fdf13b4aa1392b49e7c","url":"docs/win/dev/pro.html"},{"revision":"7ea4ee783e736742912bf099017a603e","url":"docs/win/dev/problems.html"},{"revision":"19de89d2b5f6f92db1bf740cc6cc5c2b","url":"docs/win/dev/scoop/install.html"},{"revision":"ebed267ca3038a750f8cdf1107f82b8f","url":"docs/win/dev/scoop/recommend.html"},{"revision":"5b9445fdb68ace67864924812fcc191d","url":"docs/win/dev/sysinternals.html"},{"revision":"0125c4024c88935aab1dc75459019415","url":"docs/win/dev/visual-studio.html"},{"revision":"9d58fbd0e0e3e249007171fcc6fb6aa2","url":"docs/win/dev/vm.html"},{"revision":"25c5b2e972381a091663b108f50ee680","url":"docs/win/dev/wsl.html"},{"revision":"aba00c734d9f337932a837940118aeeb","url":"docs/win/effective.html"},{"revision":"48e0c3a2c2ad17389e7ab074d4634e31","url":"docs/win/first-run.html"},{"revision":"37812cbed2fe66b545c0b1801422ad0c","url":"docs/win/helper/altsnap.html"},{"revision":"3ca7fb969c98980ef8eae72e1732afc5","url":"docs/win/helper/color.html"},{"revision":"71cc82bb17bb6116b6f6d1a9db1a89da","url":"docs/win/helper/other.html"},{"revision":"6f2a83faa814de7f040368348508458a","url":"docs/win/helper/powertoys.html"},{"revision":"e5f9d67dadb554d011eff1822fa1043d","url":"docs/win/helper/registry.html"},{"revision":"17ae1202b84e23a337386e80fe596d0d","url":"docs/win/index.html"},{"revision":"2cbf3044567666560df5258554c09497","url":"docs/win/install.html"},{"revision":"f160965a81c1073b4ca366b1f4f92d0f","url":"docs/win/laptop.html"},{"revision":"6a96c4e6ba7a464ea5c49ec6cb40edec","url":"docs/win/optimze/component.html"},{"revision":"e31eb9ed799664379ed522495ab26d99","url":"docs/win/optimze/input.html"},{"revision":"b97f49f5e13dee436c54e5ba96e28ce1","url":"docs/win/optimze/network.html"},{"revision":"3d2105bc55a27c6e02320ba6b910f82c","url":"docs/win/optimze/win11.html"},{"revision":"6355458c9d1a6d1b8d755218726781b3","url":"docs/win/protect-eye.html"},{"revision":"eaf10d650f9632edb93b5b65e7e2c868","url":"docs/win/recommend.html"},{"revision":"7032c6550ca678c65da169616b53ada0","url":"docs/win/tips.html"},{"revision":"03034889003cbdfa36a41400e7212c92","url":"docs/win/unuse.html"},{"revision":"a53d9eba963ecbf954601bfcca23e432","url":"index.html"},{"revision":"7227c7ec26ec6b4f95cb36ae0e47bf34","url":"manifest.json"},{"revision":"934f27022e559753fc9012b80f0ad923","url":"search-index.json"},{"revision":"90541a0a01a658ae2d6f89ef95e7d30a","url":"search.html"},{"revision":"10dff27b99c24b5e88c903ac3dd1c56a","url":"thanks.html"},{"revision":"1cb1c94b2b44f0f0cfa462dd3cfc6b89","url":"assets/images/conf-1-7ce4c47f20f2842cac0bac2c85cd5d4b.png"},{"revision":"7f3c09b9cb3ddb8118f3d544be245fe6","url":"assets/images/conf-2-1da23f06e0292be4d842235e7f360d0f.png"},{"revision":"87f7c483c6def8a921f17473158f5145","url":"assets/images/conf-3-5a2111e89bae976b711b02f39d652f42.png"},{"revision":"3a7487bea291d3f60784043c646549c2","url":"assets/images/conf-4-2ecbe3025976025d5f903122739c2049.png"},{"revision":"5ee16b3a2fb89c38c71b8e361b2415bc","url":"assets/images/conf-5-ea1c32392ce49905d6ed033037da9305.png"},{"revision":"4cd2129ca8d83b359570898e7e0deff3","url":"assets/images/vscode-cfg-d2d21c67f62ca53f2e5889328928586f.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"49b3e95d107648fe8e595cebdd3482f9","url":"img/icons/icon_x128.png"},{"revision":"2ddd222f3bf66e5f0dbb1fee15404431","url":"img/icons/icon_x192.png"},{"revision":"d108652d40ba49e91be9dd4e97ddb648","url":"img/icons/icon_x384.png"},{"revision":"da289d923c5e4ddd323a1e5d5a55e973","url":"img/icons/icon_x512.png"},{"revision":"3a4bc8c0caba3841bb2448baa8e64d44","url":"img/icons/icon_x72.png"},{"revision":"5e7f7b3043419e04f7f1622aa500eb01","url":"img/icons/icon_x96.png"},{"revision":"c54ea2865a9e4f44f23bc4b36d45ae7a","url":"img/index/icon_browser.svg"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"img/index/icon_chromium.svg"},{"revision":"a0f33ad8ad533f1dd3a77bf2f100edae","url":"img/index/icon_dev.svg"},{"revision":"08f35addd299ba7289df97370ac24e64","url":"img/index/icon_foss.svg"},{"revision":"aec3e073b62e888ebe45d946f6882de2","url":"img/index/icon_gnome.svg"},{"revision":"0b04d9dcc410a57b748c0a67e52e9ae3","url":"img/index/icon_linux.svg"},{"revision":"ee03fbe1400c11407bf7f82eeb8ba6bb","url":"img/index/icon_win.svg"},{"revision":"69dee7201bed5cc557a66a6e5c809d5c","url":"img/index/undraw_community_re_cyrm.svg"},{"revision":"fcd6165cc1920ede6a9931846c7cac0e","url":"img/index/undraw_order_delivered_re_v4ab.svg"},{"revision":"be5b96aa9a74a81431c8a44e385bd234","url":"img/index/undraw_qa_engineers_dg-5-p.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();