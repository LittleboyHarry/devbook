(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"f3433b880f3b227afb87cbbb6ff4849c","url":"404.html"},{"revision":"0916a62dcab593beb13fd6870562b3c6","url":"assets/css/styles.0d8c4744.css"},{"revision":"8310c9a76e7de46b1faf687029db6fda","url":"assets/js/0f16aff4.01263b01.js"},{"revision":"6090237859146e5173ed6e76daeebaff","url":"assets/js/1250136b.634ba756.js"},{"revision":"e452aaf1ba3e8baf5869476f27bbbba1","url":"assets/js/1337.c42dc935.js"},{"revision":"2b2f251dc469e5fcd21bf5915c64d6d1","url":"assets/js/1417.9c9d0bc1.js"},{"revision":"e04725c513a772757b558fc6291e9e8c","url":"assets/js/148f473c.be6ce4a1.js"},{"revision":"0c7f62ccca81099b77b57f26a42b7fd8","url":"assets/js/17896441.b61d9ef5.js"},{"revision":"9ab87aa6ff371591089211b271753ca3","url":"assets/js/1a1b643e.9d2031ad.js"},{"revision":"7df44cc304b7f308c12918ab242f6062","url":"assets/js/1a4c2e58.91d527e6.js"},{"revision":"46d33a84d2d7b701a51be4b613e77071","url":"assets/js/1a4e3797.e253c38a.js"},{"revision":"db91e0302f30a64a3ab6621bf208e224","url":"assets/js/1be78505.9f2d4e6b.js"},{"revision":"7b476ce6534010f8a11da5ac8fc72ae3","url":"assets/js/1c200ee5.09fd091d.js"},{"revision":"1c1e01a21429b4a93f684a054de3f719","url":"assets/js/1cca77fa.4ff8010f.js"},{"revision":"f1acc84c667f22301aea737c0e87e625","url":"assets/js/1df93b7f.1f6a23ce.js"},{"revision":"16d78de430c22d2a98cc0ea8f31c49b9","url":"assets/js/1df9be45.1ff94641.js"},{"revision":"a45e1af4f0f29308f343cecccd4ee21f","url":"assets/js/1f391b9e.499a590f.js"},{"revision":"69e28ed0804384c1aa8dbfe1e669cdcf","url":"assets/js/230.5545b187.js"},{"revision":"0817b449e77bcf390de47445a8032a00","url":"assets/js/24117c8a.2f56fd94.js"},{"revision":"3bb7eb4c010bb23fc0f4ebdae16a51f4","url":"assets/js/24e5030a.ea1489fe.js"},{"revision":"b174d12107904295c28f44246c482db6","url":"assets/js/251cf535.9a792c29.js"},{"revision":"e842861ee0a22a5e33ca374762b03f90","url":"assets/js/2681f1b1.1bc10ca9.js"},{"revision":"0ebed2af9e49a05103c2b2e51bbb8347","url":"assets/js/27912143.b292d00d.js"},{"revision":"b6939d1a859c18332a877b5bc9c15e93","url":"assets/js/299ac74a.95a71e06.js"},{"revision":"afa672fcc6c73b853e2322ad550f6abf","url":"assets/js/2c24658f.338d5032.js"},{"revision":"d7bb77b0a28b0dcc06f8d79d7a8ba7e3","url":"assets/js/2ce51fe6.4d1ed411.js"},{"revision":"8fb5372e32c1ca966c586e16b2c26322","url":"assets/js/303984c2.5e11f625.js"},{"revision":"68667ae0747cb1f0a83e7b2325b8cd3e","url":"assets/js/3065f3f6.7fba2b37.js"},{"revision":"0d0d2a6b6647f4a20a31635bf79f5316","url":"assets/js/33d5bf00.60040746.js"},{"revision":"cd8193f9df6793bffb667afa1231d229","url":"assets/js/33f06f9b.3ce0c5c4.js"},{"revision":"8964581467945cab2248d97e43c96ed3","url":"assets/js/3720c009.45f18a81.js"},{"revision":"180a5946c590d8736bd9e94a8c319eab","url":"assets/js/374e4158.30d6a187.js"},{"revision":"9afd3228b611f99ed037bc96896e03fa","url":"assets/js/399fd006.b10f6490.js"},{"revision":"dcad3cfb76bcfaaa8df309212058b3cd","url":"assets/js/3ad9b984.3736bd6a.js"},{"revision":"4d3810db85f280c6f4a9cb9d687d2851","url":"assets/js/3f6cfc63.e966a77a.js"},{"revision":"6f3c338e68850db9f381ecd44219d0e4","url":"assets/js/4016ce13.03c0592e.js"},{"revision":"859ecc47a6b068a095d2d329778cc8b3","url":"assets/js/420d7957.6a87fe0c.js"},{"revision":"0fcbe263353303171602ac95f0d7a74d","url":"assets/js/4249927b.9fda6dbb.js"},{"revision":"0280f88e30d39f63af8c94e062679147","url":"assets/js/430874fc.ff6462ff.js"},{"revision":"029b05f1affb414c4e1dfedc9b573790","url":"assets/js/43b4557b.ec099854.js"},{"revision":"7e1604df04f9dcc99ec0ff32034c8ac5","url":"assets/js/4608.64048e68.js"},{"revision":"a477b2444904c29799b0443391dd8bfd","url":"assets/js/46f2b027.26a751c3.js"},{"revision":"5ad8510b8db0941652bdb829c6d9e046","url":"assets/js/5048.9ad9bec4.js"},{"revision":"22195b4519f1580771bd095f83d1f1b4","url":"assets/js/510bfa6a.5f57c63d.js"},{"revision":"fca7253879381ab8a17556cd8dd07501","url":"assets/js/5131.9d25201f.js"},{"revision":"a2fbd3f3954ef418fdecbf62929da933","url":"assets/js/5244d3c1.d60a44c6.js"},{"revision":"3643458b7a8c58f10633f2c8e29e1c4f","url":"assets/js/5283.b15056ee.js"},{"revision":"76d647b764720aeff075d1433a440bbf","url":"assets/js/54401ef4.15a96024.js"},{"revision":"ed371bb3936c573dab2de5fd01607336","url":"assets/js/54b7bfbf.91388fd1.js"},{"revision":"7a05ce710f1113ff70021aa675c200df","url":"assets/js/5525.a135b73a.js"},{"revision":"cc8cc230c83446de34510417fc906850","url":"assets/js/55960ee5.f64a3632.js"},{"revision":"507062968fd228eec4c201cbad1547be","url":"assets/js/57da3733.d68b1d79.js"},{"revision":"3c1700e106c2f722bb93132704cf721c","url":"assets/js/5ae75735.95b7611a.js"},{"revision":"527ceb2ace1a842beaee8134c9833254","url":"assets/js/5b8ecb52.7b13b6eb.js"},{"revision":"33e5ead3f6a9519d3e10344a64fb8bdb","url":"assets/js/5bf8d6d7.4753c784.js"},{"revision":"dea34d2d66c318423841f6bfe3a558ce","url":"assets/js/5c6fca7a.2db270a2.js"},{"revision":"e5d036afe27b2ea9d98cc6e01aca1327","url":"assets/js/5da2933e.7a9229a5.js"},{"revision":"8db54aa64bab39fcd29d8cb7aacf54ae","url":"assets/js/5e136e46.72f4f0c4.js"},{"revision":"5ca9b02095c2ab0a17e7322680883eff","url":"assets/js/5ebc5ef6.696cbd38.js"},{"revision":"58d4beca4b283694f3006039be7760dc","url":"assets/js/6035ec75.2889d3e1.js"},{"revision":"74e7239849667aa6abd53fa4e82a193d","url":"assets/js/639526ce.7910a003.js"},{"revision":"f9d5fdbc1aa6fb45663f6031d8ad7240","url":"assets/js/66d6d806.6639c7a3.js"},{"revision":"56d3837a55627c2398f2a6974594d7f5","url":"assets/js/6b6710aa.c0939505.js"},{"revision":"a998be67862f5d8d0acac527b2aad003","url":"assets/js/6bc72304.f223337b.js"},{"revision":"e24c7a6dd61911f0c1f68f7744793f60","url":"assets/js/6c2fbe81.4bd2dad3.js"},{"revision":"7e05f1b26fa4f6f5f126e9431da27045","url":"assets/js/6ea097ec.f8f3af82.js"},{"revision":"a56b07dfad91d0a2aa9256db79c847f9","url":"assets/js/6ffa9bf1.59e335aa.js"},{"revision":"624bdee6059ab258f8da4968ed2b3fb7","url":"assets/js/7565d07c.feb7b834.js"},{"revision":"869e813156a343a6a8d7900c242723d4","url":"assets/js/77ed06f9.127b7984.js"},{"revision":"4c860fa3a9108bdcbbc8c0f2712adc3d","url":"assets/js/78eb4c4a.2efc33f8.js"},{"revision":"f71a0df45e00e00280b803d7de45e7ae","url":"assets/js/7aaa7993.32e58afd.js"},{"revision":"3481a12d998ccf73d68ccd7bf19e1442","url":"assets/js/7c4d70d4.b10c92c4.js"},{"revision":"8a6a45e6c786fd04f02c670b62fec5f7","url":"assets/js/7c70d6c8.df1a2ae7.js"},{"revision":"f537e8a72f1afff71e94a8b3722796f2","url":"assets/js/8443.66ba7d5c.js"},{"revision":"d093d571e6ea33ffa2224b3a0e081492","url":"assets/js/857bdef3.d67fe65b.js"},{"revision":"35bccef00db55ce1690aa60519c310f2","url":"assets/js/8a2f82a2.d40d979b.js"},{"revision":"7d4ec50a4e99839405363f23b82e27a3","url":"assets/js/8a8a3318.a3d7a999.js"},{"revision":"12197b504fd2a132e283cd7d63ce6d6f","url":"assets/js/8ade9b72.1ec78a45.js"},{"revision":"d8fef12610141afb05a5816e13f3679a","url":"assets/js/8bbf0c5d.822bd55a.js"},{"revision":"724c42a20cf5fb82bb6b04ccf659d78d","url":"assets/js/8bc941e3.cbbd9041.js"},{"revision":"cd66082ccbf57d6f50bc0512f7eb4624","url":"assets/js/90eef112.9f489591.js"},{"revision":"607bdd06021b6b7fd02261463e8b4b5e","url":"assets/js/919eaccb.ac881c08.js"},{"revision":"960cfc2e2994c232862965e9d5937cac","url":"assets/js/935f2afb.0649a2cd.js"},{"revision":"3f553d56633c403bc0a20d7303bcd8f7","url":"assets/js/94df4a48.2eebe116.js"},{"revision":"753b789e94175ad1018a28eef1a6393f","url":"assets/js/9627da5d.7b7fd577.js"},{"revision":"9619a336ba4149b50a62f1d105e04eda","url":"assets/js/97c78280.7e29e87a.js"},{"revision":"b52de329ac53ff9368f3e0fe9ca1cec6","url":"assets/js/9c6966d7.7b86baa2.js"},{"revision":"6c8aae2ce21136dee11f4b634e59f842","url":"assets/js/9e4087bc.c208e971.js"},{"revision":"1bee3d5dac8e9aefb3924eb6ba755868","url":"assets/js/9e6f3119.8dd3c1a4.js"},{"revision":"80692d193d7803efa9ab5c1877087d23","url":"assets/js/a07ab0a1.dc4fed46.js"},{"revision":"7ef564919b716f011485533acf652fd9","url":"assets/js/a08cf3c8.9bc65996.js"},{"revision":"56d7d4d9c8e2353fc10b00446daea5c5","url":"assets/js/a16e4402.df0dcaf7.js"},{"revision":"c816d255bd08eafa8660d0d1c5326009","url":"assets/js/a24afeb3.598d24b2.js"},{"revision":"a05747be4aa3b71cfc60513d801855f6","url":"assets/js/a30f5914.59ad7f9b.js"},{"revision":"3bf1d6039b717f67c760e6db78b01d5a","url":"assets/js/a52932f5.cac8782f.js"},{"revision":"d77fa10a95646c7aa887e9bd6a18984f","url":"assets/js/a7f64267.ac535819.js"},{"revision":"14823d44a10a4b845aca53ce256d7f39","url":"assets/js/b0bece54.ce672862.js"},{"revision":"908dd14ba4404efafc3cd3cc6cbe8189","url":"assets/js/b40edb54.071ea0a3.js"},{"revision":"5206f099664df9930cd3a81b57950c2b","url":"assets/js/b4f07b74.ee0d98db.js"},{"revision":"c2cbe9584d7e71be5b2b6b9e3841f496","url":"assets/js/bd1dbdef.9bc46035.js"},{"revision":"08c009b9f6df5c58e35eaf1dddc47220","url":"assets/js/bea7f9be.9b872d37.js"},{"revision":"8e7f54357130d094c88efeaa9caf99d5","url":"assets/js/bfe15008.bb71a09c.js"},{"revision":"5bfc0ce49daf62e74b8da909d7017495","url":"assets/js/c3323945.827f4e75.js"},{"revision":"a7147a7346b8b960aa2c2c45bd9507b4","url":"assets/js/c7ad42cd.b31f7f00.js"},{"revision":"23148280033bba03dacc22cfd3c3b965","url":"assets/js/c88e5946.9a477af1.js"},{"revision":"03442940a725ef67dc9318029647d348","url":"assets/js/ce725bbc.c88782d1.js"},{"revision":"06125d7dee82feeb754267ae652660ae","url":"assets/js/d27936b2.862a9884.js"},{"revision":"f7c237b17e68bc0e64258b43080012c6","url":"assets/js/ddc0723c.4532b65b.js"},{"revision":"51168ba42d44271cad5d4cd47cc1dc59","url":"assets/js/de56acc9.6e84a2b5.js"},{"revision":"0a40e1bbdd6bb9247e963d591b1a47d3","url":"assets/js/df203c0f.c57eeb6c.js"},{"revision":"f84c6f2c955afe4866b5080f88fc1b88","url":"assets/js/e33f5301.c413215a.js"},{"revision":"f3221da3fd91a30bf5c61d8da4cb6c02","url":"assets/js/e84ddc6d.9eb47e74.js"},{"revision":"0233753e742898aa42b524ea69208749","url":"assets/js/eac550ad.8b9a9400.js"},{"revision":"f8cf7d82175c71cb42fdd3312d4b7864","url":"assets/js/eb8ef020.96351e92.js"},{"revision":"ad4fcf7c1d62cb504d40a29337aec46b","url":"assets/js/ed541119.019a4386.js"},{"revision":"203f751fd8c9b5d1906234dc5736f8d1","url":"assets/js/ee14c687.b496689a.js"},{"revision":"c5e0d3d2e30db4a0fadce281006cb5c2","url":"assets/js/eeb96c1e.f92a592b.js"},{"revision":"798784a7f8482b0a7799ba12e76b27eb","url":"assets/js/eef8edd9.009451e4.js"},{"revision":"5c8563822222aba2eeab777e64637f10","url":"assets/js/efc2a3ab.96461c1c.js"},{"revision":"56a12c6fc68466502acf2876c6274041","url":"assets/js/f07f7269.0d0d7217.js"},{"revision":"f5ef8dc8e27a27693722389dbc31afd4","url":"assets/js/f19159e5.53a1e07c.js"},{"revision":"f9e008f5f50acea7087336912c09bb5e","url":"assets/js/f5563378.3b0bce9f.js"},{"revision":"a024b0afaf0015db673999dfb124c6c6","url":"assets/js/f5719145.4bad7915.js"},{"revision":"e9d78d21fca56fdc82ab685b46ff1af8","url":"assets/js/f7282d6e.1cbe0226.js"},{"revision":"d10e6fbaf127f8c3a437f2389422527e","url":"assets/js/f7c693a4.7bf68eb5.js"},{"revision":"95fb2ab6d7548210c13999c208a2dcfb","url":"assets/js/fad03a1a.18ce6357.js"},{"revision":"1882f0ef92951c018260ac038130d2f2","url":"assets/js/fb65f1f2.9185f4d0.js"},{"revision":"00417e996a196d5f8d84218eae0fa589","url":"assets/js/fb7a4e09.c10d079f.js"},{"revision":"dd0487f81393256639db77b0d8f14a2e","url":"assets/js/fdf931b6.9ff46fad.js"},{"revision":"02e4f562d6aabd8b396f2eebe0f92b76","url":"assets/js/ff7dd346.8efbbc2f.js"},{"revision":"0f77453ea8367b53bf97456b8580acfa","url":"assets/js/ffcb521f.d6e1bf53.js"},{"revision":"e66d0a0742d267baf17ef83e16887a6e","url":"assets/js/main.f8c8fd68.js"},{"revision":"02ca8bb6bd6729659d9a3006b33ade20","url":"assets/js/runtime~main.8f27a674.js"},{"revision":"104bb90a917211397244de63e470264f","url":"blog/archive.html"},{"revision":"3be54f9ef05c462b9ccaecc204b8b57a","url":"docs/browser/edge-for-linux.html"},{"revision":"380da4302b019e2badae14ceb6b606d2","url":"docs/browser/extensions.html"},{"revision":"b6b4777679348329d0b38399cc31c759","url":"docs/browser/intro.html"},{"revision":"d266ee010b3661ddaf75df32610d910e","url":"docs/browser/no-adtrack.html"},{"revision":"722c3bb51a2add8773f74649d41e6981","url":"docs/browser/search.html"},{"revision":"49e1220a593cb69d3b2e52a2bf1850dd","url":"docs/browser/tips.html"},{"revision":"0351b112310f170fdb79e0466ef5b4b5","url":"docs/common/dictionary.html"},{"revision":"ad71bd8dd0349528853ee2ac5342966f","url":"docs/common/email.html"},{"revision":"fe06845a3f2b3e35f994f5150ba6cec1","url":"docs/common/intro.html"},{"revision":"e5c6bd745975cb93c800478dd8a7eec6","url":"docs/common/workrave.html"},{"revision":"44cf42d68cf5888933fb0a91e89e5fda","url":"docs/dev/cli/bat.html"},{"revision":"410925eb2e7a79e4df5b3680d2c85495","url":"docs/dev/cli/delta.html"},{"revision":"e8d29c966e97d382faec0a40f1f1c8e2","url":"docs/dev/cli/fd.html"},{"revision":"a233c035a7eefd15a54cea9bb4f88505","url":"docs/dev/cli/fzf.html"},{"revision":"29a92e2b904cdfb9abebfe50f6bc776d","url":"docs/dev/cli/index.html"},{"revision":"0b2bda897f67093c840aa31b9535ccd6","url":"docs/dev/cli/network.html"},{"revision":"b76b0d1ebf1f43cd9ad04108377f1e4b","url":"docs/dev/cli/pandoc.html"},{"revision":"b6274c0108fbf36967c92616094165a9","url":"docs/dev/cli/pipx.html"},{"revision":"3d570761e10606b727926ebb91f78dc5","url":"docs/dev/cli/ripgrep.html"},{"revision":"2a24d381b72b780472ae78cff6b69d6a","url":"docs/dev/cli/tldr.html"},{"revision":"73b28d033adfa594daa34126386246c5","url":"docs/dev/cli/tmux.html"},{"revision":"d5b401d87e6e949cf3269dcf58a957e2","url":"docs/dev/cli/zoxide.html"},{"revision":"d1d544d43ff5952e7d6c33fcbfc199eb","url":"docs/dev/deploy-my-dotfiles.html"},{"revision":"f58df7fe74966816ea8139098de11e93","url":"docs/dev/font.html"},{"revision":"5464c3d63a09ef956cefc11c47f6a146","url":"docs/dev/git.html"},{"revision":"29ad5d2ba072dc2b33f46ab8c364e646","url":"docs/dev/intro.html"},{"revision":"9b1877ff9201b13e49f2a5fce6d99024","url":"docs/dev/jetbrains/config.html"},{"revision":"ac3e8cec89eea4a076a6529442ff5201","url":"docs/dev/jetbrains/plugins.html"},{"revision":"17a0845b1935a6681b5b55e5a1d98861","url":"docs/dev/jetbrains/tips.html"},{"revision":"3ed58be64912de69a099bbcb7fc8d0de","url":"docs/dev/jetbrains/toolbox.html"},{"revision":"1af687f4e854c01e8b14f92c0f844abd","url":"docs/dev/keymap.html"},{"revision":"196bc5d0e4efc334cb8b75c536b0cee9","url":"docs/dev/neovim.html"},{"revision":"e53114f6e13946926cf306e759065a96","url":"docs/dev/nodejs.html"},{"revision":"e1c4bed858e364ed275cbfd16e6a2109","url":"docs/dev/podman.html"},{"revision":"ccd2fa6be1b8beff54ffc4165b679beb","url":"docs/dev/python.html"},{"revision":"38fd9170e47c8b132bcc623fc01a5c67","url":"docs/dev/rust.html"},{"revision":"d06017a667efb20fa89704af2bff505b","url":"docs/dev/shell.html"},{"revision":"210882350346b6c75f53639f7c75dc06","url":"docs/dev/virtual/introduce.html"},{"revision":"25486881b65f3b03c098a605f3e8d632","url":"docs/dev/virtual/libvirt.html"},{"revision":"914c2542dc205113fef254bb8d574523","url":"docs/dev/virtual/vagrant.html"},{"revision":"68b5c526ec943bac41f4e65c953b4fd6","url":"docs/dev/virtual/virtualbox.html"},{"revision":"85cbad76b2738f097ae667fdc013a34c","url":"docs/dev/vscode/advanced.html"},{"revision":"ed0b289f93b4ebcaeecf0ff6a8074ee5","url":"docs/dev/vscode/extensions.html"},{"revision":"11d6646422348828f4e996e485a55fca","url":"docs/dev/vscode/install.html"},{"revision":"4847f8353a9a3406d74af49867de1ea2","url":"docs/dev/vscode/settings.html"},{"revision":"d33f4b1eb0972332fc946ba7fd65bd1d","url":"docs/dev/vscode/vim.html"},{"revision":"1f6d8648f43f26a1d617f7d1071e750a","url":"docs/dev/zeal.html"},{"revision":"6388c138af3b0561394163f900bcadcc","url":"docs/dev/zsh.html"},{"revision":"98c6e8e26938d14e94f18cd88496fb29","url":"docs/linux/advanced.html"},{"revision":"c9ed1acc2f394f110a0b0bcdf6e8b13c","url":"docs/linux/chinese.html"},{"revision":"a312b66cebf919ecfe6baa4c85cad471","url":"docs/linux/cockpit.html"},{"revision":"bb342a812de08b30529f1c8e7b5e5e1d","url":"docs/linux/deepin.html"},{"revision":"699816e9c22440ffa3b9899c3778da21","url":"docs/linux/dual-os.html"},{"revision":"69679c41962c329d39539b994e551009","url":"docs/linux/firewall.html"},{"revision":"7dfdf3f81efa0dc46e40145034fd2d5c","url":"docs/linux/flatpak.html"},{"revision":"8931b62b60431afe5dc5226481e26b41","url":"docs/linux/gnome/apps.html"},{"revision":"a6669fb165c7691a0ec15c616ad9d363","url":"docs/linux/gnome/dash.html"},{"revision":"958f487471acbc99537107fcb4aed588","url":"docs/linux/gnome/extensions.html"},{"revision":"ecdfe11bf40c5a307f1662e1da688aa1","url":"docs/linux/gnome/features.html"},{"revision":"899d5c6b4c6980c05779ddb50f2e4fc2","url":"docs/linux/gnome/optimize.html"},{"revision":"369670fc1f0b0f4329ae79cd570fddcc","url":"docs/linux/gnome/panel.html"},{"revision":"00a335d9fe17d4ce8bbbcd7b7ab90b2f","url":"docs/linux/gnome/theme.html"},{"revision":"6c50927f502b0cedf5c89c4b120af776","url":"docs/linux/gnome/tips.html"},{"revision":"82de16a55bb669c43a0dea91dad2220c","url":"docs/linux/gnome/ubuntu.html"},{"revision":"7965a1216ab4fd1bedd3efd21d71d463","url":"docs/linux/install.html"},{"revision":"54af9886009bd33f67f70fd148596a51","url":"docs/linux/kde/config.html"},{"revision":"81d85a2ace97dca4b2d40187b0073e53","url":"docs/linux/kde/features.html"},{"revision":"75218fa2947a55448e07e77177a32c59","url":"docs/linux/kde/keymap.html"},{"revision":"205df35df282ce3aaa1b0b272f40115f","url":"docs/linux/kde/kwrite.html"},{"revision":"24698af08ffaf5870786cc48f80d0fc3","url":"docs/linux/kde/recommend.html"},{"revision":"9da372a9e651ea6266395b07b65e47ae","url":"docs/linux/kde/tips.html"},{"revision":"13752a3babd44388d3851ad89b48c169","url":"docs/linux/kernel.html"},{"revision":"09b840993957d3b2e5ae064750c60de8","url":"docs/linux/optimize.html"},{"revision":"53bf96b732f924f9f373fcbd909e1a2f","url":"docs/linux/overview.html"},{"revision":"f980bea0ca268c889c44ebf350e0cc8d","url":"docs/linux/pkgmgr.html"},{"revision":"9421be69823b43bb5e86cbac3fd02bf5","url":"docs/linux/recommend.html"},{"revision":"996d79a18c38a9e1b855047b1855178c","url":"docs/linux/tips.html"},{"revision":"794287bd865e968172aabbce4a53cd19","url":"docs/tags.html"},{"revision":"3a6870bab7082b9dc7f334cec8dcce02","url":"docs/tags/cloud-init.html"},{"revision":"c787c5d3a0abb097b00f5dd775e0c10e","url":"docs/tags/libvirt.html"},{"revision":"4c5c5f37c9012cbecb4520c0f1419469","url":"docs/tags/linux.html"},{"revision":"2d61fe79b5e8f9acba5467c2eefc6013","url":"docs/win/dev/cli.html"},{"revision":"ca171d5b7d1c381544fa3ef4ebf958e8","url":"docs/win/dev/getstarted.html"},{"revision":"05dbe119f5ef06df6723dca8ae112cb1","url":"docs/win/dev/green.html"},{"revision":"5e201e68dccc7a3e62facf73a3510747","url":"docs/win/dev/nirsoft.html"},{"revision":"3be20665cebef888f5b0e431f38ccf7a","url":"docs/win/dev/powershell.html"},{"revision":"a7996cbdb23936b68d5d5775e4f002bd","url":"docs/win/dev/pro.html"},{"revision":"8f6b7dfa9e3bba6ff28b9daf8efb981d","url":"docs/win/dev/problems.html"},{"revision":"9b5ca155c27de083e65940d3a74e4a53","url":"docs/win/dev/scoop/install.html"},{"revision":"5d6815e4db10c7c4f6ca1b7a7cfa2378","url":"docs/win/dev/scoop/recommend.html"},{"revision":"c1b2091260a66cfb0e2bf9738fe554d5","url":"docs/win/dev/sysinternals.html"},{"revision":"0005fb63d6a830ae34c9f208fb425410","url":"docs/win/dev/visual-studio.html"},{"revision":"b3d815f4f4f2c924ff18566558837f3e","url":"docs/win/dev/vm.html"},{"revision":"c84e85d229a0778aca605f6055252330","url":"docs/win/dev/wsl.html"},{"revision":"2432caa27ad8209b7b6a30957e69557a","url":"docs/win/effective.html"},{"revision":"6fd6281ceb1ad81603f930e2689fabff","url":"docs/win/first-run.html"},{"revision":"de391808ce655294a0f6bf309934d87d","url":"docs/win/helper/altsnap.html"},{"revision":"e969300706e0fd75c81f4485cb6aff85","url":"docs/win/helper/other.html"},{"revision":"5709daaa05036af8d99f6fa7645efe8e","url":"docs/win/helper/registry.html"},{"revision":"9ef9a4378de35dc65f5a9d8ea21ae8c8","url":"docs/win/index.html"},{"revision":"134471a01328da9a671aa4dd5316681a","url":"docs/win/install.html"},{"revision":"242f780e3d7e7bb4e9c9be956e366760","url":"docs/win/laptop.html"},{"revision":"c5248ea2eb475c4d12ce3873bd38beb4","url":"docs/win/optimze/component.html"},{"revision":"1bc3846420f9eebc2d0e2892d4c3296d","url":"docs/win/optimze/input.html"},{"revision":"5455aa976c80745d70c97fc790a2dccc","url":"docs/win/optimze/network.html"},{"revision":"36d2219b79df2bbea81e49436a0a89ab","url":"docs/win/optimze/win11.html"},{"revision":"e8058f11b74ed91c243982b6ad6b34dc","url":"docs/win/recommend.html"},{"revision":"eb06afe25ab2ca2accfe5c9691e1616f","url":"docs/win/tips.html"},{"revision":"02146ce066c75dac43c36f148d2de803","url":"docs/win/unuse.html"},{"revision":"df6a14e7747c6349f0c78a4380546cca","url":"index.html"},{"revision":"7227c7ec26ec6b4f95cb36ae0e47bf34","url":"manifest.json"},{"revision":"3c2214c55d2e9477918ab192f506a15f","url":"search-index.json"},{"revision":"3296b8465de7de41bdb8b18d0b8305b6","url":"search.html"},{"revision":"2ee95011fc61e1f188c0dc47350c82bd","url":"thanks.html"},{"revision":"1cb1c94b2b44f0f0cfa462dd3cfc6b89","url":"assets/images/conf-1-7ce4c47f20f2842cac0bac2c85cd5d4b.png"},{"revision":"7f3c09b9cb3ddb8118f3d544be245fe6","url":"assets/images/conf-2-1da23f06e0292be4d842235e7f360d0f.png"},{"revision":"87f7c483c6def8a921f17473158f5145","url":"assets/images/conf-3-5a2111e89bae976b711b02f39d652f42.png"},{"revision":"3a7487bea291d3f60784043c646549c2","url":"assets/images/conf-4-2ecbe3025976025d5f903122739c2049.png"},{"revision":"5ee16b3a2fb89c38c71b8e361b2415bc","url":"assets/images/conf-5-ea1c32392ce49905d6ed033037da9305.png"},{"revision":"4cd2129ca8d83b359570898e7e0deff3","url":"assets/images/vscode-cfg-d2d21c67f62ca53f2e5889328928586f.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"49b3e95d107648fe8e595cebdd3482f9","url":"img/icons/icon_x128.png"},{"revision":"2ddd222f3bf66e5f0dbb1fee15404431","url":"img/icons/icon_x192.png"},{"revision":"d108652d40ba49e91be9dd4e97ddb648","url":"img/icons/icon_x384.png"},{"revision":"da289d923c5e4ddd323a1e5d5a55e973","url":"img/icons/icon_x512.png"},{"revision":"3a4bc8c0caba3841bb2448baa8e64d44","url":"img/icons/icon_x72.png"},{"revision":"5e7f7b3043419e04f7f1622aa500eb01","url":"img/icons/icon_x96.png"},{"revision":"c54ea2865a9e4f44f23bc4b36d45ae7a","url":"img/index/icon_browser.svg"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"img/index/icon_chromium.svg"},{"revision":"a0f33ad8ad533f1dd3a77bf2f100edae","url":"img/index/icon_dev.svg"},{"revision":"08f35addd299ba7289df97370ac24e64","url":"img/index/icon_foss.svg"},{"revision":"aec3e073b62e888ebe45d946f6882de2","url":"img/index/icon_gnome.svg"},{"revision":"0b04d9dcc410a57b748c0a67e52e9ae3","url":"img/index/icon_linux.svg"},{"revision":"ee03fbe1400c11407bf7f82eeb8ba6bb","url":"img/index/icon_win.svg"},{"revision":"69dee7201bed5cc557a66a6e5c809d5c","url":"img/index/undraw_community_re_cyrm.svg"},{"revision":"fcd6165cc1920ede6a9931846c7cac0e","url":"img/index/undraw_order_delivered_re_v4ab.svg"},{"revision":"be5b96aa9a74a81431c8a44e385bd234","url":"img/index/undraw_qa_engineers_dg-5-p.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();