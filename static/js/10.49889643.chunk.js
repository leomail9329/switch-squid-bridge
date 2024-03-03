"use strict";(self.webpackChunktyche=self.webpackChunktyche||[]).push([[10],{72355:(e,t,n)=>{n.d(t,{AccountCtrl:()=>O,Id:()=>m,ConfigCtrl:()=>L,zv:()=>C,uA:()=>I,ExplorerCtrl:()=>x,jb:()=>K,OptionsCtrl:()=>j,AV:()=>w,ThemeCtrl:()=>X,ToastCtrl:()=>Z,WcConnectionCtrl:()=>B});Symbol();const s=Symbol();const o=Object.getPrototypeOf,a=new WeakMap,i=e=>e&&(a.has(e)?a.get(e):o(e)===Object.prototype||o(e)===Array.prototype),r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;const s=a.get(e);if((null==s?void 0:s[0])===t)return s[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(i,!0),a.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const s=Reflect.get(e,t),o={value:s,enumerable:!0,configurable:!0};if(d.has(s))r(s,!1);else if(s instanceof Promise)delete o.value,o.get=()=>n(s);else if(c.has(s)){const[e,t]=c.get(s);o.value=u(e,t(),n)}Object.defineProperty(i,t,o)})),i},h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,p=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:o=>{if(!l(o))throw new Error("object required");const a=h.get(o);if(a)return a;let r=p[0];const f=new Set,v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++p[0];r!==t&&(r=t,f.forEach((n=>n(e,t))))};let m=p[1];const b=e=>(t,n)=>{const s=[...t];s[1]=[e,...s[1]],v(s,n)},w=new Map,C=e=>{var t;const n=w.get(e);n&&(w.delete(e),null==(t=n[1])||t.call(n))},y=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),I={deleteProperty(e,t){const n=Reflect.get(e,t);C(t);const s=Reflect.deleteProperty(e,t);return s&&v(["delete",[t],n]),s},set(t,o,a,r){const u=Reflect.has(t,o),p=Reflect.get(t,o,r);if(u&&(e(p,a)||h.has(a)&&e(p,h.get(a))))return!0;C(o),l(a)&&(a=(e=>i(e)&&e[s]||null)(a)||a);let m=a;if(a instanceof Promise)a.then((e=>{a.status="fulfilled",a.value=e,v(["resolve",[o],e])})).catch((e=>{a.status="rejected",a.reason=e,v(["reject",[o],e])}));else{!c.has(a)&&n(a)&&(m=g(a));const e=!d.has(m)&&c.get(m);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(f.size){const n=t[3](b(e));w.set(e,[t,n])}else w.set(e,[t])})(o,e)}return Reflect.set(t,o,m,r),v(["set",[o],a,p]),!0}},E=t(y,I);h.set(o,E);const j=[y,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++p[1];return m===e||f.size||(m=e,w.forEach((t=>{let[n]=t;const s=n[1](e);s>r&&(r=s)}))),r},u,e=>{f.add(e),1===f.size&&w.forEach(((e,t)=>{let[n,s]=e;if(s)throw new Error("remove already exists");const o=n[3](b(t));w.set(t,[n,o])}));return()=>{f.delete(e),0===f.size&&w.forEach(((e,t)=>{let[n,s]=e;s&&(s(),w.set(t,[n]))}))}}];return c.set(E,j),Reflect.ownKeys(o).forEach((e=>{const t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(E[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(y,e,t)})),E};return[g,c,d,e,t,n,o,a,u,h,p]},[h]=u();function p(){return h(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function g(e,t,n){const s=c.get(e);let o;s||console.warn("Please use proxy object");const a=[],i=s[3];let r=!1;const l=i((e=>{a.push(e),n?t(a.splice(0)):o||(o=Promise.resolve().then((()=>{o=void 0,r&&t(a.splice(0))})))}));return r=!0,()=>{r=!1,l()}}var f=n(53979);let v;const m={ethereumClient:void 0,setEthereumClient(e){v=e},client(){if(v)return v;throw new Error("ClientCtrl has no client set")}},b=p({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),w={state:b,subscribe:e=>g(b,(()=>e(b))),push(e,t){e!==b.view&&(b.view=e,t&&(b.data=t),b.history.push(e))},reset(e){b.view=e,b.history=[e]},replace(e){b.history.length>1&&(b.history[b.history.length-1]=e,b.view=e)},goBack(){if(b.history.length>1){b.history.pop();const[e]=b.history.slice(-1);b.view=e}},setData(e){b.data=e}},C={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>C.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return C.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,n){if(C.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let s=e;s.includes("://")||(s=e.replaceAll("/","").replaceAll(":",""),s="".concat(s,"://")),this.setWalletConnectDeepLink(s,n);const o=encodeURIComponent(t);return"".concat(s,"wc?uri=").concat(o)},formatUniversalUrl(e,t,n){if(!C.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let s=e;e.endsWith("/")&&(s=e.slice(0,-1)),this.setWalletConnectDeepLink(s,n);const o=encodeURIComponent(t);return"".concat(s,"/wc?uri=").concat(o)},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(C.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(C.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(C.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(C.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=null==(e=w.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=null==(e=w.state.data)?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag:()=>typeof location<"u"&&new URLSearchParams(location.search).has(C.W3M_PREFER_INJECTED_URL_FLAG)},y=p({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),I={state:y,subscribe:e=>g(y.events,(()=>e(function(e,t){const n=c.get(e);n||console.warn("Please use proxy object");const[s,o,a]=n;return a(s,o(),t)}(y.events[y.events.length-1])))),initialize(){y.enabled&&typeof crypto<"u"&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){const t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){const t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){const t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},E=p({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),j={state:E,subscribe:e=>g(E,(()=>e(E))),setChains(e){E.chains=e},setStandaloneChains(e){E.standaloneChains=e},setStandaloneUri(e){E.standaloneUri=e},getSelectedChain(){const e=m.client().getNetwork().chain;return e&&(E.selectedChain=e),E.selectedChain},setSelectedChain(e){E.selectedChain=e},setIsStandalone(e){E.isStandalone=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setWalletConnectVersion(e){E.walletConnectVersion=e},setIsPreferInjected(e){E.isPreferInjected=e},setIsAuth(e){E.isAuth=e}},W=p({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),L={state:W,subscribe:e=>g(W,(()=>e(W))),setConfig(e){var t,n,s,o;I.initialize(),j.setStandaloneChains(e.standaloneChains),j.setIsStandalone(!(null==(t=e.standaloneChains)||!t.length)||!!e.enableStandaloneMode),j.setIsAuth(!!e.enableAuthMode),j.setIsCustomMobile(!(null==(n=e.mobileWallets)||!n.length)),j.setIsCustomDesktop(!(null==(s=e.desktopWallets)||!s.length)),j.setWalletConnectVersion(null!=(o=e.walletConnectVersion)?o:1),j.state.isStandalone||(j.setChains(m.client().chains),j.setIsPreferInjected(m.client().isInjectedProviderInstalled()&&C.isPreferInjectedFlag())),e.defaultChain&&j.setSelectedChain(e.defaultChain),C.setWeb3ModalVersionInStorage(),Object.assign(W,e)}},A=p({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),O={state:A,subscribe:e=>g(A,(()=>e(A))),getAccount(){const e=m.client().getAccount();A.address=e.address,A.isConnected=e.isConnected},async fetchProfile(e,t){var n;try{A.profileLoading=!0;const s=null!==t&&void 0!==t?t:A.address,o=null==(n=j.state.chains)?void 0:n.find((e=>1===e.id));if(s&&o){const t=await m.client().fetchEnsName({address:s,chainId:1});if(t){const n=await m.client().fetchEnsAvatar({name:t,chainId:1});n&&await e(n),A.profileAvatar=n}A.profileName=t}}finally{A.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=m.client().getNetwork(),{tokenContracts:n}=L.state;let s;t&&n&&(s=n[t.id]),A.balanceLoading=!0;const o=null!==e&&void 0!==e?e:A.address;if(o){const e=await m.client().fetchBalance({address:o,token:s});A.balance={amount:e.formatted,symbol:e.symbol}}}finally{A.balanceLoading=!1}},setAddress(e){A.address=e},setIsConnected(e){A.isConnected=e},resetBalance(){A.balance=void 0},resetAccount(){A.address=void 0,A.isConnected=!1,A.profileName=void 0,A.profileAvatar=void 0,A.balance=void 0}},S="https://explorer-api.walletconnect.com";async function P(e,t){const n=new URL(e,S);return n.searchParams.append("projectId",L.state.projectId),Object.entries(t).forEach((e=>{let[t,s]=e;s&&n.searchParams.append(t,String(s))})),(await fetch(n)).json()}const M={getDesktopListings:async e=>P("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>P("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>P("/w3m/v1/getInjectedListings",e),getAllListings:async e=>P("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>"".concat(S,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(L.state.projectId),getAssetImageUrl:e=>"".concat(S,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(L.state.projectId)};var k=Object.defineProperty,U=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const T=C.isMobile(),_=p({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),x={state:_,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=L.state;if("NONE"===e||"ALL"===t&&!e)return _.recomendedWallets;if(C.isArray(e)){const t={recommendedIds:e.join(",")},{listings:n}=await M.getAllListings(t),s=Object.values(n);s.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id))),_.recomendedWallets=s}else{const{standaloneChains:e,walletConnectVersion:n,isAuth:s}=j.state,o=null===e||void 0===e?void 0:e.join(","),a=C.isArray(t),i={page:1,sdks:s?"auth_v1":void 0,entries:C.RECOMMENDED_WALLET_AMOUNT,chains:o,version:n,excludedIds:a?t.join(","):void 0},{listings:r}=T?await M.getMobileListings(i):await M.getDesktopListings(i);_.recomendedWallets=Object.values(r)}return _.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var n in t||(t={}))N.call(t,n)&&R(e,n,t[n]);if(U)for(var n of U(t))D.call(t,n)&&R(e,n,t[n]);return e})({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:s}=L.state,{recomendedWallets:o}=_;if("ALL"===s)return _.wallets;t.search||(o.length?t.excludedIds=o.map((e=>e.id)).join(","):C.isArray(n)&&(t.excludedIds=n.join(","))),C.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),j.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:i}=e,{listings:r,total:l}=T?await M.getMobileListings(t):await M.getDesktopListings(t),c=Object.values(r),d=i?"search":"wallets";return _[d]={listings:[..._[d].listings,...c],total:l,page:null!==a&&void 0!==a?a:1},{listings:c,total:l}},async getInjectedWallets(){const{listings:e}=await M.getInjectedListings({}),t=Object.values(e);return _.injectedWallets=t,_.injectedWallets},getWalletImageUrl:e=>M.getWalletImageUrl(e),getAssetImageUrl:e=>M.getAssetImageUrl(e),resetSearch(){_.search={listings:[],total:0,page:1}}},V=p({pairingUri:"",pairingError:!1}),B={state:V,subscribe:e=>g(V,(()=>e(V))),setPairingUri(e){V.pairingUri=e},setPairingError(e){V.pairingError=e}},H=p({open:!1}),K={state:H,subscribe:e=>g(H,(()=>e(H))),open:async e=>new Promise((t=>{const{isStandalone:n,isUiLoaded:s,isDataLoaded:o,isPreferInjected:a,selectedChain:i}=j.state,{isConnected:r}=O.state,{enableNetworkView:l}=L.state;if(n)j.setStandaloneUri(null===e||void 0===e?void 0:e.uri),j.setStandaloneChains(null===e||void 0===e?void 0:e.standaloneChains),w.reset("ConnectWallet");else if(null!=e&&e.route)w.reset(e.route);else if(r)w.reset("Account");else if(l)w.reset("SelectNetwork");else{if(a)return m.client().connectConnector("injected",null===i||void 0===i?void 0:i.id).catch((e=>console.error(e))),void t();w.reset("ConnectWallet")}const{pairingUri:c}=B.state;if(s&&o&&(n||c||r))H.open=!0,t();else{const e=setInterval((()=>{const n=j.state,s=B.state;n.isUiLoaded&&n.isDataLoaded&&(n.isStandalone||s.pairingUri||r)&&(clearInterval(e),H.open=!0,t())}),200)}})),close(){H.open=!1}};var z=Object.defineProperty,F=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Q=p({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),X={state:Q,subscribe:e=>g(Q,(()=>e(Q))),setThemeConfig(e){const{themeMode:t,themeVariables:n}=e;t&&(Q.themeMode=t),n&&(Q.themeVariables=((e,t)=>{for(var n in t||(t={}))J.call(t,n)&&q(e,n,t[n]);if(F)for(var n of F(t))G.call(t,n)&&q(e,n,t[n]);return e})({},n))}},Y=p({open:!1,message:"",variant:"success"}),Z={state:Y,subscribe:e=>g(Y,(()=>e(Y))),openToast(e,t){Y.open=!0,Y.message=e,Y.variant=t},closeToast(){Y.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=f.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))},12010:(e,t,n)=>{n.d(t,{Web3Modal:()=>c});var s=n(72355),o=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;class c{constructor(e){this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.ThemeCtrl.setThemeConfig,s.ThemeCtrl.setThemeConfig(e),s.ConfigCtrl.setConfig(((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&l(e,n,t[n]);return e})({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await n.e(622).then(n.bind(n,60622));const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),s.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=10.49889643.chunk.js.map