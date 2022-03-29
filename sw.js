(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"b515179b51363d6be5b2daa61a89c3b3","url":"404.html"},{"revision":"0916a62dcab593beb13fd6870562b3c6","url":"assets/css/styles.0d8c4744.css"},{"revision":"8310c9a76e7de46b1faf687029db6fda","url":"assets/js/0f16aff4.01263b01.js"},{"revision":"6090237859146e5173ed6e76daeebaff","url":"assets/js/1250136b.634ba756.js"},{"revision":"e452aaf1ba3e8baf5869476f27bbbba1","url":"assets/js/1337.c42dc935.js"},{"revision":"5e23622d8e4e029dc45cc655ea9dccca","url":"assets/js/1403b206.3cd0be11.js"},{"revision":"2b2f251dc469e5fcd21bf5915c64d6d1","url":"assets/js/1417.9c9d0bc1.js"},{"revision":"6df8b8665c4f7b5e2ce2192e8c13c374","url":"assets/js/148f473c.b13121ca.js"},{"revision":"76d335733a00f5f0c4c65ebe14f76081","url":"assets/js/163e0558.b3d91be3.js"},{"revision":"0c7f62ccca81099b77b57f26a42b7fd8","url":"assets/js/17896441.b61d9ef5.js"},{"revision":"d62044da9afa093ea6049d1dda76a894","url":"assets/js/1a1b643e.77b47d01.js"},{"revision":"7df44cc304b7f308c12918ab242f6062","url":"assets/js/1a4c2e58.91d527e6.js"},{"revision":"46d33a84d2d7b701a51be4b613e77071","url":"assets/js/1a4e3797.e253c38a.js"},{"revision":"db91e0302f30a64a3ab6621bf208e224","url":"assets/js/1be78505.9f2d4e6b.js"},{"revision":"7b476ce6534010f8a11da5ac8fc72ae3","url":"assets/js/1c200ee5.09fd091d.js"},{"revision":"047ea91d8d9f2c9009b96e0def19ed7c","url":"assets/js/1cca77fa.9b366539.js"},{"revision":"3e37e5c478b2574551d097ae1219cc59","url":"assets/js/1df93b7f.55185a29.js"},{"revision":"16d78de430c22d2a98cc0ea8f31c49b9","url":"assets/js/1df9be45.1ff94641.js"},{"revision":"a45e1af4f0f29308f343cecccd4ee21f","url":"assets/js/1f391b9e.499a590f.js"},{"revision":"69e28ed0804384c1aa8dbfe1e669cdcf","url":"assets/js/230.5545b187.js"},{"revision":"0817b449e77bcf390de47445a8032a00","url":"assets/js/24117c8a.2f56fd94.js"},{"revision":"381d13777cc6a0eaf2a9d7f825063b14","url":"assets/js/24e5030a.6c3b39df.js"},{"revision":"b174d12107904295c28f44246c482db6","url":"assets/js/251cf535.9a792c29.js"},{"revision":"72d91155f5d3f275c4634a7dec3a3136","url":"assets/js/2681f1b1.eb927841.js"},{"revision":"0ebed2af9e49a05103c2b2e51bbb8347","url":"assets/js/27912143.b292d00d.js"},{"revision":"212396c881131919cd77313e8c2852ed","url":"assets/js/299ac74a.4b4c860e.js"},{"revision":"afa672fcc6c73b853e2322ad550f6abf","url":"assets/js/2c24658f.338d5032.js"},{"revision":"62f1548841fe2a09e0fd4b907a6b193b","url":"assets/js/2ce51fe6.d8843bb0.js"},{"revision":"fa12f159ad0f92b2b00f1bef55639b82","url":"assets/js/2eb69518.ab65a6e8.js"},{"revision":"fcbbf1fc2dad55b81efd333e781bfd53","url":"assets/js/303984c2.c3acede3.js"},{"revision":"68667ae0747cb1f0a83e7b2325b8cd3e","url":"assets/js/3065f3f6.7fba2b37.js"},{"revision":"a1afb54f4acae4f90ed4b726b8975d3d","url":"assets/js/33f06f9b.fa52157e.js"},{"revision":"8964581467945cab2248d97e43c96ed3","url":"assets/js/3720c009.45f18a81.js"},{"revision":"9afd3228b611f99ed037bc96896e03fa","url":"assets/js/399fd006.b10f6490.js"},{"revision":"2eb2f8fc19a9e864d6a537feb54d2e59","url":"assets/js/3a69e847.a8951e93.js"},{"revision":"dcad3cfb76bcfaaa8df309212058b3cd","url":"assets/js/3ad9b984.3736bd6a.js"},{"revision":"51622b4124eae09cade73fc0959a78db","url":"assets/js/3bb2edc6.17ead313.js"},{"revision":"56eb8c4709ab8549f46d8ed5c7b72ce4","url":"assets/js/3c3f88ad.d604c709.js"},{"revision":"4d3810db85f280c6f4a9cb9d687d2851","url":"assets/js/3f6cfc63.e966a77a.js"},{"revision":"6f3c338e68850db9f381ecd44219d0e4","url":"assets/js/4016ce13.03c0592e.js"},{"revision":"859ecc47a6b068a095d2d329778cc8b3","url":"assets/js/420d7957.6a87fe0c.js"},{"revision":"0fcbe263353303171602ac95f0d7a74d","url":"assets/js/4249927b.9fda6dbb.js"},{"revision":"5cfcfed54bf0e2fb8bf42b27090694e8","url":"assets/js/430874fc.d012552e.js"},{"revision":"7e1604df04f9dcc99ec0ff32034c8ac5","url":"assets/js/4608.64048e68.js"},{"revision":"a477b2444904c29799b0443391dd8bfd","url":"assets/js/46f2b027.26a751c3.js"},{"revision":"21416d176313a2e905903cb09a516e6c","url":"assets/js/4c9ab9fd.207ff8d2.js"},{"revision":"b6579abe5686705bb2b966053385970d","url":"assets/js/4e45225c.a10db45e.js"},{"revision":"5ad8510b8db0941652bdb829c6d9e046","url":"assets/js/5048.9ad9bec4.js"},{"revision":"e0417b081e24301ce262ba2fbaef1874","url":"assets/js/510bfa6a.c8cf769a.js"},{"revision":"fca7253879381ab8a17556cd8dd07501","url":"assets/js/5131.9d25201f.js"},{"revision":"3643458b7a8c58f10633f2c8e29e1c4f","url":"assets/js/5283.b15056ee.js"},{"revision":"76d647b764720aeff075d1433a440bbf","url":"assets/js/54401ef4.15a96024.js"},{"revision":"ed371bb3936c573dab2de5fd01607336","url":"assets/js/54b7bfbf.91388fd1.js"},{"revision":"7a05ce710f1113ff70021aa675c200df","url":"assets/js/5525.a135b73a.js"},{"revision":"1d0d07c55c8875fe831bedd76cdd0f99","url":"assets/js/5532975d.ead21a1c.js"},{"revision":"cc8cc230c83446de34510417fc906850","url":"assets/js/55960ee5.f64a3632.js"},{"revision":"507062968fd228eec4c201cbad1547be","url":"assets/js/57da3733.d68b1d79.js"},{"revision":"3c1700e106c2f722bb93132704cf721c","url":"assets/js/5ae75735.95b7611a.js"},{"revision":"527ceb2ace1a842beaee8134c9833254","url":"assets/js/5b8ecb52.7b13b6eb.js"},{"revision":"f61c67ae8f94f925553124e71afd069d","url":"assets/js/5bf8d6d7.1f7f17b7.js"},{"revision":"dea34d2d66c318423841f6bfe3a558ce","url":"assets/js/5c6fca7a.2db270a2.js"},{"revision":"f0389643a151fd3e45f9e340d54f0985","url":"assets/js/5da2933e.727030ab.js"},{"revision":"8db54aa64bab39fcd29d8cb7aacf54ae","url":"assets/js/5e136e46.72f4f0c4.js"},{"revision":"5ca9b02095c2ab0a17e7322680883eff","url":"assets/js/5ebc5ef6.696cbd38.js"},{"revision":"58d4beca4b283694f3006039be7760dc","url":"assets/js/6035ec75.2889d3e1.js"},{"revision":"74e7239849667aa6abd53fa4e82a193d","url":"assets/js/639526ce.7910a003.js"},{"revision":"10b57ccbb5ebfd8beb1d3736c4725d68","url":"assets/js/66d3ab42.f283bb83.js"},{"revision":"09fee41c01d8d89c0c20c8ef8f694c1c","url":"assets/js/66d6d806.b5832504.js"},{"revision":"eb5209c9abc8fafdf0ae0a11188e406c","url":"assets/js/6b6710aa.b69c469d.js"},{"revision":"557f87b6af5f9443521ea016c905630a","url":"assets/js/6bc72304.add4e7c4.js"},{"revision":"e24c7a6dd61911f0c1f68f7744793f60","url":"assets/js/6c2fbe81.4bd2dad3.js"},{"revision":"f0ce57cbd8263acec951ba04ed4b0b2b","url":"assets/js/6ea097ec.6be42173.js"},{"revision":"a56b07dfad91d0a2aa9256db79c847f9","url":"assets/js/6ffa9bf1.59e335aa.js"},{"revision":"21f027ca53422d1d8c081ca2a2ec4ea0","url":"assets/js/7380f56e.206aaf56.js"},{"revision":"df3a10636764d8c05d9a10d55a02a1ef","url":"assets/js/7565d07c.0e18b5b9.js"},{"revision":"869e813156a343a6a8d7900c242723d4","url":"assets/js/77ed06f9.127b7984.js"},{"revision":"6cb7131681720b6627a5b019e642d1b4","url":"assets/js/7aaa7993.90fdb984.js"},{"revision":"7fb13e2f5509d6197f97b04f2046cd57","url":"assets/js/7c4d70d4.1aa7f68e.js"},{"revision":"8a6a45e6c786fd04f02c670b62fec5f7","url":"assets/js/7c70d6c8.df1a2ae7.js"},{"revision":"f537e8a72f1afff71e94a8b3722796f2","url":"assets/js/8443.66ba7d5c.js"},{"revision":"729326628770063deb23c9c21b908e17","url":"assets/js/857bdef3.0719cb83.js"},{"revision":"5e881d2adba7c5ec0926c8ed48b907e4","url":"assets/js/89d93f35.af80e03a.js"},{"revision":"d6f7f687277429d17d6c04b8e8cd67b6","url":"assets/js/8a2f82a2.3c990bd2.js"},{"revision":"7d4ec50a4e99839405363f23b82e27a3","url":"assets/js/8a8a3318.a3d7a999.js"},{"revision":"4f4816d4a8ffbbb148d96174f65aea69","url":"assets/js/8ade9b72.f57fc4bd.js"},{"revision":"d8fef12610141afb05a5816e13f3679a","url":"assets/js/8bbf0c5d.822bd55a.js"},{"revision":"83570ed769053f2c87a9d56c9757e1e3","url":"assets/js/8c08e452.3e906008.js"},{"revision":"cd66082ccbf57d6f50bc0512f7eb4624","url":"assets/js/90eef112.9f489591.js"},{"revision":"9bfe5742ec48c687f28a501cd406e442","url":"assets/js/919eaccb.7679d6ca.js"},{"revision":"b80d442f3b1a5a6caf2544f4e9933a43","url":"assets/js/935f2afb.8088b49e.js"},{"revision":"eae9d27e04830de9502c8a6a2a613ab5","url":"assets/js/94df4a48.50059f16.js"},{"revision":"2d2a3a9aab9f0535fb778f82bb4f16fd","url":"assets/js/9627da5d.addee8ee.js"},{"revision":"ad18194c7ce18574ca4ff78fc9534b84","url":"assets/js/97c78280.f8568078.js"},{"revision":"b52de329ac53ff9368f3e0fe9ca1cec6","url":"assets/js/9c6966d7.7b86baa2.js"},{"revision":"6c8aae2ce21136dee11f4b634e59f842","url":"assets/js/9e4087bc.c208e971.js"},{"revision":"5f43fc26b94ee327b683f0d8417af005","url":"assets/js/9e6f3119.b4b2b4b0.js"},{"revision":"7ef564919b716f011485533acf652fd9","url":"assets/js/a08cf3c8.9bc65996.js"},{"revision":"56d7d4d9c8e2353fc10b00446daea5c5","url":"assets/js/a16e4402.df0dcaf7.js"},{"revision":"0ccb3e4e8083ae5571d55ae15dfca61a","url":"assets/js/a52932f5.5035f52b.js"},{"revision":"d77fa10a95646c7aa887e9bd6a18984f","url":"assets/js/a7f64267.ac535819.js"},{"revision":"76479dfd26ec25c9a4d5218b3fdfb4b4","url":"assets/js/b0bece54.7d96e4b5.js"},{"revision":"4c98688413e61e6ff346b1352e042455","url":"assets/js/b40edb54.685ce948.js"},{"revision":"5206f099664df9930cd3a81b57950c2b","url":"assets/js/b4f07b74.ee0d98db.js"},{"revision":"c2cbe9584d7e71be5b2b6b9e3841f496","url":"assets/js/bd1dbdef.9bc46035.js"},{"revision":"08c009b9f6df5c58e35eaf1dddc47220","url":"assets/js/bea7f9be.9b872d37.js"},{"revision":"893d02f2e459177398c93acaf93b8d65","url":"assets/js/bfe15008.c93e4db2.js"},{"revision":"5bfc0ce49daf62e74b8da909d7017495","url":"assets/js/c3323945.827f4e75.js"},{"revision":"4380d13d26abafab3662c62a75d20f1e","url":"assets/js/c590bad8.c18da0eb.js"},{"revision":"d80f640f0eac536d347b86e38e4249fa","url":"assets/js/c7ad42cd.029b49ed.js"},{"revision":"a5f26b09378d065b17e434fda14cad6f","url":"assets/js/c88e5946.4c7b5d18.js"},{"revision":"03442940a725ef67dc9318029647d348","url":"assets/js/ce725bbc.c88782d1.js"},{"revision":"06125d7dee82feeb754267ae652660ae","url":"assets/js/d27936b2.862a9884.js"},{"revision":"8e92836f325198d0f689f8e8d322989e","url":"assets/js/d687a59a.53c9ed6e.js"},{"revision":"51168ba42d44271cad5d4cd47cc1dc59","url":"assets/js/de56acc9.6e84a2b5.js"},{"revision":"0a40e1bbdd6bb9247e963d591b1a47d3","url":"assets/js/df203c0f.c57eeb6c.js"},{"revision":"f84c6f2c955afe4866b5080f88fc1b88","url":"assets/js/e33f5301.c413215a.js"},{"revision":"f3221da3fd91a30bf5c61d8da4cb6c02","url":"assets/js/e84ddc6d.9eb47e74.js"},{"revision":"0233753e742898aa42b524ea69208749","url":"assets/js/eac550ad.8b9a9400.js"},{"revision":"f8cf7d82175c71cb42fdd3312d4b7864","url":"assets/js/eb8ef020.96351e92.js"},{"revision":"c16514d0687f6c17727262e72d97efd4","url":"assets/js/eca9fdf8.95b13bf2.js"},{"revision":"ad4fcf7c1d62cb504d40a29337aec46b","url":"assets/js/ed541119.019a4386.js"},{"revision":"203f751fd8c9b5d1906234dc5736f8d1","url":"assets/js/ee14c687.b496689a.js"},{"revision":"c5e0d3d2e30db4a0fadce281006cb5c2","url":"assets/js/eeb96c1e.f92a592b.js"},{"revision":"5c8563822222aba2eeab777e64637f10","url":"assets/js/efc2a3ab.96461c1c.js"},{"revision":"56a12c6fc68466502acf2876c6274041","url":"assets/js/f07f7269.0d0d7217.js"},{"revision":"f5ef8dc8e27a27693722389dbc31afd4","url":"assets/js/f19159e5.53a1e07c.js"},{"revision":"8740ac40526229c5b720c3401b90ffd4","url":"assets/js/f5563378.823d358b.js"},{"revision":"04b63148cf3188664b17054765d901d3","url":"assets/js/f5719145.dd34a530.js"},{"revision":"d8f06197abd227d247e827d96a06e7da","url":"assets/js/f7282d6e.8e3fce1e.js"},{"revision":"a15c270ff992ccad480a66d74948085f","url":"assets/js/f7c693a4.15f053e0.js"},{"revision":"c0b532260ed7421495061a4223356cc0","url":"assets/js/fa6aa3b8.4ae007f7.js"},{"revision":"95fb2ab6d7548210c13999c208a2dcfb","url":"assets/js/fad03a1a.18ce6357.js"},{"revision":"0d40b7fe767a39132d247b2458920c38","url":"assets/js/fb65f1f2.8a00bd20.js"},{"revision":"4b26f3dfebab2320b5526fc4f4f07d6c","url":"assets/js/fb7a4e09.187cb1cd.js"},{"revision":"dd0487f81393256639db77b0d8f14a2e","url":"assets/js/fdf931b6.9ff46fad.js"},{"revision":"7df83c6d20f93591629e944a6d939a15","url":"assets/js/ff7dd346.cd15301d.js"},{"revision":"0f77453ea8367b53bf97456b8580acfa","url":"assets/js/ffcb521f.d6e1bf53.js"},{"revision":"d34707445292c6414c5d16ff6eeab627","url":"assets/js/main.1236f5ad.js"},{"revision":"89988a42949d0f34ada0c8569661d955","url":"assets/js/runtime~main.91511341.js"},{"revision":"daee9363e5a707efe6fbea0470e459ef","url":"blog/archive.html"},{"revision":"26b008e7bfd3233ee263a51ea0e86bc8","url":"docs/browser/edge-for-linux.html"},{"revision":"03ffe2d49fb25c1aa3ae632733e24da3","url":"docs/browser/extensions.html"},{"revision":"854c2fa06147d3d323c429d532480e6e","url":"docs/browser/intro.html"},{"revision":"0f5f132d1439852cf5743966ca6705cd","url":"docs/browser/no-adtrack.html"},{"revision":"96c347205fc33442d0e3d934288fe041","url":"docs/browser/search.html"},{"revision":"f4160e78a823355b20d6dda9d4e50de7","url":"docs/browser/tips.html"},{"revision":"d37111fc3c8db3c7ab43991c5dc48d67","url":"docs/common/dictionary.html"},{"revision":"c2f51349abd54cf827c5135996b3e01c","url":"docs/common/email.html"},{"revision":"b915afecdf2c6b24661ecbe9f5a12d26","url":"docs/common/intro.html"},{"revision":"823e20fdff7e786469936d6af82de87d","url":"docs/common/workrave.html"},{"revision":"91d9dcb1874e3ffbb04f1cecad83ceb8","url":"docs/dev/cli/bat.html"},{"revision":"9c79d8abfc6216ea95569e53d3c4b2d5","url":"docs/dev/cli/delta.html"},{"revision":"be46bb2828b136a8cc2eb65bebfcc863","url":"docs/dev/cli/fd.html"},{"revision":"729ecb572addb2e491999821507ea646","url":"docs/dev/cli/fzf.html"},{"revision":"51025ad7eac167c1c53ea74fcd0bd916","url":"docs/dev/cli/index.html"},{"revision":"fa92f8b444535074ac5391ab46dc9cb5","url":"docs/dev/cli/network.html"},{"revision":"6b420ac34778999ffee4f9bd1767c66b","url":"docs/dev/cli/pandoc.html"},{"revision":"2699f4266f7422d23259cf3bca535e63","url":"docs/dev/cli/pipx.html"},{"revision":"124f1c624a2bccaabc71319dc0cdbb0f","url":"docs/dev/cli/ripgrep.html"},{"revision":"563aa710255f0bfd44d637def3f46618","url":"docs/dev/cli/tldr.html"},{"revision":"42850af50fc1cf1a521dacf2b2d5efc3","url":"docs/dev/cli/tmux.html"},{"revision":"387e273d6a7560c28ef33f3ce05d375d","url":"docs/dev/cli/zoxide.html"},{"revision":"c268d158df670fcd766ec62e3a97949f","url":"docs/dev/deploy-my-dotfiles.html"},{"revision":"5162933cb9ae45514239eadb73b4bcb3","url":"docs/dev/font.html"},{"revision":"139e287875dc6bb9be7641fd48437965","url":"docs/dev/git.html"},{"revision":"f604dd06de644ab34ca4743f9eb5bad3","url":"docs/dev/intro.html"},{"revision":"6bd45bad798e2b656beb11c7a93ed9fc","url":"docs/dev/jetbrains/config.html"},{"revision":"f22b4dd4782239b88537f0fc87f00dac","url":"docs/dev/jetbrains/plugins.html"},{"revision":"e3345015a4ccb64458412f04f9087c7a","url":"docs/dev/jetbrains/tips.html"},{"revision":"73d36279d9bdd3517e847d929a68bcb9","url":"docs/dev/jetbrains/toolbox.html"},{"revision":"1768427d64fb81ed107d2a2d003001cd","url":"docs/dev/keymap.html"},{"revision":"1e941ef633d36503c0465bf7ded8bdfa","url":"docs/dev/neovim.html"},{"revision":"babebb34abd38d5bb9a9a07bc902591b","url":"docs/dev/nodejs.html"},{"revision":"913eb18578de408fd50e2530ef3a1b5a","url":"docs/dev/podman.html"},{"revision":"e09571e44f607764827dd3b799029e05","url":"docs/dev/python.html"},{"revision":"db74d1269a97e072a9b0a26cba8c0105","url":"docs/dev/rust.html"},{"revision":"6d40cd17ac0dca56f8aaacea50e5f5ec","url":"docs/dev/shell.html"},{"revision":"92344261bf35118b846ac5abad2d51e1","url":"docs/dev/virtual/introduce.html"},{"revision":"d770b6d0579b241a12bca8e3f2682585","url":"docs/dev/virtual/libvirt.html"},{"revision":"66d6cbfec390015b3b5f9efa318a0c69","url":"docs/dev/virtual/vagrant.html"},{"revision":"b9cb67b4b64c6ae13d65ba29a499b7eb","url":"docs/dev/virtual/virtualbox.html"},{"revision":"83f26bccb3f2ec0e23c016134996a5ad","url":"docs/dev/vscode/advanced.html"},{"revision":"116a6eea899a9404bf5bc8b85bc0c49f","url":"docs/dev/vscode/appearance.html"},{"revision":"a377bbdd364cc029539aba2b9efe434e","url":"docs/dev/vscode/extensions.html"},{"revision":"013671aaed32cc769b28f013e43c8f0b","url":"docs/dev/vscode/install.html"},{"revision":"eac242da6b3c216ca251fb0e487c0599","url":"docs/dev/vscode/settings.html"},{"revision":"8f868062036263b1c64d822789fea533","url":"docs/dev/vscode/vim.html"},{"revision":"eaaf021463c553fcc826aff21f6d239f","url":"docs/dev/zeal.html"},{"revision":"9c238f71f56298df8fd0c399c9542119","url":"docs/dev/zsh.html"},{"revision":"d205423a4c923da9dea526cc2ae95153","url":"docs/linux/advanced.html"},{"revision":"0eb75460b3ab710ef2ea2465ca58abef","url":"docs/linux/chinese.html"},{"revision":"d0354c57daae58f5ebdb0ae8822b897a","url":"docs/linux/cockpit.html"},{"revision":"1b052971b28459f83f3724ece479d15a","url":"docs/linux/deepin.html"},{"revision":"7c98df99249b58f09aa44d9927d9f52e","url":"docs/linux/dual-os.html"},{"revision":"52141c6df414eda4f275aba5fe85ca31","url":"docs/linux/firewall.html"},{"revision":"05261204f1bba7f8c7af72cf92c29f53","url":"docs/linux/flatpak.html"},{"revision":"ce1114a77071ba206290c39cdb0674ec","url":"docs/linux/gnome/apps.html"},{"revision":"da7ad5b9c4dc671ced6ab4700e750ee9","url":"docs/linux/gnome/dash.html"},{"revision":"30096a81b7a53a0f75940b97dcd043ee","url":"docs/linux/gnome/extensions.html"},{"revision":"c88f462205f3c965decd65b2543d31c0","url":"docs/linux/gnome/features.html"},{"revision":"e9f8929e40369b41311f9b6438cdf1f2","url":"docs/linux/gnome/optimize.html"},{"revision":"3a4221a37762117a8ff1e25ab48c3ef2","url":"docs/linux/gnome/panel.html"},{"revision":"18693e090464bea5d55269b04b6860d9","url":"docs/linux/gnome/theme.html"},{"revision":"bed2ac0ffe24e472005ba667c2a9f94d","url":"docs/linux/gnome/tips.html"},{"revision":"f3f743b6c5c4025fa73f028f7a33e48b","url":"docs/linux/gnome/ubuntu.html"},{"revision":"2e8b98e8baeef25a3e67032dda2fb29c","url":"docs/linux/install.html"},{"revision":"52c6de90db0fcd700bc7a36a926e1970","url":"docs/linux/kde/config.html"},{"revision":"5ab1a0939128435cf18588555159f855","url":"docs/linux/kde/features.html"},{"revision":"97239ecb07ef0f8ba2fc2a030028f89d","url":"docs/linux/kde/keymap.html"},{"revision":"b5c3e2a244a6c0ec7cfdea66efcf33a6","url":"docs/linux/kde/kwrite.html"},{"revision":"3db89a5f133eab6a1baa748236e9070c","url":"docs/linux/kde/recommend.html"},{"revision":"6780b127c253e1996f3cde40b81c75fd","url":"docs/linux/kde/tips.html"},{"revision":"02955954f772acb1d2541997c7af7a86","url":"docs/linux/kernel.html"},{"revision":"1d0ec79ddfa24d78c45fc959653c10dc","url":"docs/linux/optimize.html"},{"revision":"664877b5faa5fbd20a006c0428c5b876","url":"docs/linux/overview.html"},{"revision":"fd4794cb9f8bb0c2c122b0410a2e1db7","url":"docs/linux/pkgmgr.html"},{"revision":"44a2f2ec2c4a07b84ffdc981bef22c34","url":"docs/linux/recommend.html"},{"revision":"bd07582c2aca44c8a6b6a0f0e3075507","url":"docs/linux/tips.html"},{"revision":"494ee5f166493b215c01d3eff511b88f","url":"docs/tags.html"},{"revision":"670477ca86b062b64e04e1876fc221ca","url":"docs/tags/cloud-init.html"},{"revision":"e3d333c1410305aeaae2c8699179e54a","url":"docs/tags/libvirt.html"},{"revision":"e64cf57be353ed34236e293b8be3aa97","url":"docs/tags/linux.html"},{"revision":"4043e3c9ce03afcb1a940ac314ed48f6","url":"docs/win/dev/cli.html"},{"revision":"17c9185b40dda83ac4755ace71c37dde","url":"docs/win/dev/getstarted.html"},{"revision":"2186cbf34819407e4c7246301cd0e078","url":"docs/win/dev/green.html"},{"revision":"79bfc2c5da8981c8543b7ca21151e908","url":"docs/win/dev/nirsoft.html"},{"revision":"33005d907823c6b3b948ad7f67a395b7","url":"docs/win/dev/powershell.html"},{"revision":"fc046fd4dff1eb02b78e5abb8cf221fc","url":"docs/win/dev/problems.html"},{"revision":"8ee6b282bf369c27786ae1f751d27af2","url":"docs/win/dev/scoop.html"},{"revision":"911f26b7b986403c7e1db5cbd0b2ae46","url":"docs/win/dev/sysinternals.html"},{"revision":"1abaa4de2f74f7511fe652ec48ba882e","url":"docs/win/dev/visual-studio.html"},{"revision":"947ddb0af9411d09247cdc0486a8316b","url":"docs/win/dev/vm.html"},{"revision":"a1074604b4f15003f80c231f6bec085b","url":"docs/win/dev/wsl.html"},{"revision":"e0ca6dd2ade008d11c52d1ededb2ddb9","url":"docs/win/effective.html"},{"revision":"758a8d7294474e79487e6454de52f163","url":"docs/win/first-run.html"},{"revision":"43967fac2be924ee938b30cb47ae0d66","url":"docs/win/focus.html"},{"revision":"fedeb84a56c90f56e4d8343d079fcbed","url":"docs/win/helper/altsnap.html"},{"revision":"ccb3cdbb6e04595a3837122aad0f990e","url":"docs/win/helper/color.html"},{"revision":"ba1afef52aca9ad73f48f0f86fbeac47","url":"docs/win/helper/other.html"},{"revision":"6d498fe2f8dda641e804e7483d3603b8","url":"docs/win/helper/powertoys.html"},{"revision":"c62a4d4fbdebefe113b8f5acbf3f1680","url":"docs/win/helper/registry.html"},{"revision":"92d097a36f3b3bbae0adbf57c2786e3d","url":"docs/win/index.html"},{"revision":"4537128bce9f8452eb7cf68df2dbadf8","url":"docs/win/input.html"},{"revision":"ea6ea8eae5d35c6e26a1ceecda517591","url":"docs/win/install.html"},{"revision":"49fdb9b292ef72482bc61e7dd5bf30fb","url":"docs/win/laptop.html"},{"revision":"e3d65d83b44a5f3406419b96ad31aa68","url":"docs/win/optimize/explorer.html"},{"revision":"249d95ba9826cb416d5260d5b6a82074","url":"docs/win/optimize/other.html"},{"revision":"7b92866e57a3779e47ed05da4890a42f","url":"docs/win/optimize/protect-eye.html"},{"revision":"58997fa1c64f62f4f3f0c21a8c5699d1","url":"docs/win/optimize/startmenu.html"},{"revision":"e66a1abccc9e63cb01131306f58a0b45","url":"docs/win/optimize/taskbar.html"},{"revision":"1a79603a186588b940474d9ca20dc92d","url":"docs/win/privacy.html"},{"revision":"d17310023b7306bf587daa90ace168d0","url":"docs/win/pro.html"},{"revision":"2ec6c45fb4075a025151e05b528eef6d","url":"docs/win/recommend.html"},{"revision":"f98a88148cdeb1013b262a0848a1b157","url":"docs/win/security.html"},{"revision":"f5e15f43220290a5422f3a5ab1d1b87d","url":"docs/win/tips.html"},{"revision":"42d9ab2e89ed2d5c4c0b3d25827f9289","url":"index.html"},{"revision":"7227c7ec26ec6b4f95cb36ae0e47bf34","url":"manifest.json"},{"revision":"372f0c889b9d8ac757e4fc5a43741f0c","url":"search-index.json"},{"revision":"54c082ee6079097059d79ed8d81b8110","url":"search.html"},{"revision":"0264020107e27816a00120eee8370e41","url":"thanks.html"},{"revision":"1cb1c94b2b44f0f0cfa462dd3cfc6b89","url":"assets/images/conf-1-7ce4c47f20f2842cac0bac2c85cd5d4b.png"},{"revision":"7f3c09b9cb3ddb8118f3d544be245fe6","url":"assets/images/conf-2-1da23f06e0292be4d842235e7f360d0f.png"},{"revision":"87f7c483c6def8a921f17473158f5145","url":"assets/images/conf-3-5a2111e89bae976b711b02f39d652f42.png"},{"revision":"3a7487bea291d3f60784043c646549c2","url":"assets/images/conf-4-2ecbe3025976025d5f903122739c2049.png"},{"revision":"5ee16b3a2fb89c38c71b8e361b2415bc","url":"assets/images/conf-5-ea1c32392ce49905d6ed033037da9305.png"},{"revision":"4cd2129ca8d83b359570898e7e0deff3","url":"assets/images/vscode-cfg-d2d21c67f62ca53f2e5889328928586f.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"49b3e95d107648fe8e595cebdd3482f9","url":"img/icons/icon_x128.png"},{"revision":"2ddd222f3bf66e5f0dbb1fee15404431","url":"img/icons/icon_x192.png"},{"revision":"d108652d40ba49e91be9dd4e97ddb648","url":"img/icons/icon_x384.png"},{"revision":"da289d923c5e4ddd323a1e5d5a55e973","url":"img/icons/icon_x512.png"},{"revision":"3a4bc8c0caba3841bb2448baa8e64d44","url":"img/icons/icon_x72.png"},{"revision":"5e7f7b3043419e04f7f1622aa500eb01","url":"img/icons/icon_x96.png"},{"revision":"c54ea2865a9e4f44f23bc4b36d45ae7a","url":"img/index/icon_browser.svg"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"img/index/icon_chromium.svg"},{"revision":"a0f33ad8ad533f1dd3a77bf2f100edae","url":"img/index/icon_dev.svg"},{"revision":"08f35addd299ba7289df97370ac24e64","url":"img/index/icon_foss.svg"},{"revision":"aec3e073b62e888ebe45d946f6882de2","url":"img/index/icon_gnome.svg"},{"revision":"0b04d9dcc410a57b748c0a67e52e9ae3","url":"img/index/icon_linux.svg"},{"revision":"ee03fbe1400c11407bf7f82eeb8ba6bb","url":"img/index/icon_win.svg"},{"revision":"69dee7201bed5cc557a66a6e5c809d5c","url":"img/index/undraw_community_re_cyrm.svg"},{"revision":"fcd6165cc1920ede6a9931846c7cac0e","url":"img/index/undraw_order_delivered_re_v4ab.svg"},{"revision":"be5b96aa9a74a81431c8a44e385bd234","url":"img/index/undraw_qa_engineers_dg-5-p.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();