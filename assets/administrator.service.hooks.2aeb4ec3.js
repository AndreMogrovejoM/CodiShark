import{A as W,_ as k,$ as G,a6 as $,a7 as _,a8 as V,a9 as q,aa as L,ab as M,ac as z,ad as X,W as Q,X as Z,z as E,Z as H,ae as J}from"./index.f98bbdbf.js";import{v as Y,w as R,m as S}from"./auth.service.hooks.bea03bd7.js";import{C as ee}from"./constants.00022566.js";var te=function(t){W(a,t);function a(i,r){var e;return e=t.call(this)||this,e.client=i,e.options=r,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(r),e}var s=a.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),B(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(r,e){var u=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(r),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=u.queryKey),this.updateQuery();var c=this.hasListeners();c&&N(this.currentQuery,n,this.options,u)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==n||this.options.enabled!==u.enabled||this.options.staleTime!==u.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==n||this.options.enabled!==u.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},s.getOptimisticResult=function(r){var e=this.client.defaultQueryObserverOptions(r),u=this.client.getQueryCache().build(this.client,e);return this.createResult(u,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(r,e){var u=this,n={},c=function(h){u.trackedProps.includes(h)||u.trackedProps.push(h)};return Object.keys(r).forEach(function(o){Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:function(){return c(o),r[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),n},s.getNextResult=function(r){var e=this;return new Promise(function(u,n){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(r==null?void 0:r.throwOnError)?n(o.error):u(o))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(r){return this.fetch(k({},r,{meta:{refetchPage:r==null?void 0:r.refetchPage}}))},s.fetchOptimistic=function(r){var e=this,u=this.client.defaultQueryObserverOptions(r),n=this.client.getQueryCache().build(this.client,u);return n.fetch().then(function(){return e.createResult(n,u)})},s.fetch=function(r){var e=this;return this.executeFetch(r).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(r){this.updateQuery();var e=this.currentQuery.fetch(this.options,r);return r!=null&&r.throwOnError||(e=e.catch(G)),e},s.updateStaleTimeout=function(){var r=this;if(this.clearStaleTimeout(),!($||this.currentResult.isStale||!_(this.options.staleTime))){var e=V(this.currentResult.dataUpdatedAt,this.options.staleTime),u=e+1;this.staleTimeoutId=setTimeout(function(){r.currentResult.isStale||r.updateResult()},u)}},s.computeRefetchInterval=function(){var r;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(r=this.options.refetchInterval)!=null?r:!1},s.updateRefetchInterval=function(r){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=r,!($||this.options.enabled===!1||!_(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||q.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(r,e){var u=this.currentQuery,n=this.options,c=this.currentResult,o=this.currentResultState,h=this.currentResultOptions,f=r!==u,y=f?r.state:this.currentQueryInitialState,b=f?this.currentResult:this.previousQueryResult,l=r.state,g=l.dataUpdatedAt,F=l.error,P=l.errorUpdatedAt,T=l.isFetching,d=l.status,U=!1,x=!1,p;if(e.optimisticResults){var A=this.hasListeners(),D=!A&&B(r,e),j=A&&N(r,u,e,n);(D||j)&&(T=!0,g||(d="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(b==null?void 0:b.isSuccess)&&d!=="error")p=b.data,g=b.dataUpdatedAt,d=b.status,U=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(o==null?void 0:o.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(l.data),e.structuralSharing!==!1&&(p=L(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(O){M().error(O),this.selectError=O}else p=l.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&(d==="loading"||d==="idle")){var m;if((c==null?void 0:c.isPlaceholderData)&&e.placeholderData===(h==null?void 0:h.placeholderData))m=c.data;else if(m=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof m<"u")try{m=e.select(m),e.structuralSharing!==!1&&(m=L(c==null?void 0:c.data,m)),this.selectError=null}catch(O){M().error(O),this.selectError=O}typeof m<"u"&&(d="success",p=m,x=!0)}this.selectError&&(F=this.selectError,p=this.selectResult,P=Date.now(),d="error");var K={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:p,dataUpdatedAt:g,error:F,errorUpdatedAt:P,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>y.dataUpdateCount||l.errorUpdateCount>y.errorUpdateCount,isFetching:T,isRefetching:T&&d!=="loading",isLoadingError:d==="error"&&l.dataUpdatedAt===0,isPlaceholderData:x,isPreviousData:U,isRefetchError:d==="error"&&l.dataUpdatedAt!==0,isStale:w(r,e),refetch:this.refetch,remove:this.remove};return K},s.shouldNotifyListeners=function(r,e){if(!e)return!0;var u=this.options,n=u.notifyOnChangeProps,c=u.notifyOnChangePropsExclusions;if(!n&&!c||n==="tracked"&&!this.trackedProps.length)return!0;var o=n==="tracked"?this.trackedProps:n;return Object.keys(r).some(function(h){var f=h,y=r[f]!==e[f],b=o==null?void 0:o.some(function(g){return g===h}),l=c==null?void 0:c.some(function(g){return g===h});return y&&!l&&(!o||b)})},s.updateResult=function(r){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!z(this.currentResult,e)){var u={cache:!0};(r==null?void 0:r.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(u.listeners=!0),this.notify(k({},u,r))}},s.updateQuery=function(){var r=this.client.getQueryCache().build(this.client,this.options);if(r!==this.currentQuery){var e=this.currentQuery;this.currentQuery=r,this.currentQueryInitialState=r.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),r.addObserver(this))}},s.onQueryUpdate=function(r){var e={};r.type==="success"?e.onSuccess=!0:r.type==="error"&&!X(r.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(r){var e=this;Q.batch(function(){r.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):r.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),r.listeners&&e.listeners.forEach(function(u){u(e.currentResult)}),r.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},a}(Z);function re(t,a){return a.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&a.retryOnMount===!1)}function B(t,a){return re(t,a)||t.state.dataUpdatedAt>0&&I(t,a,a.refetchOnMount)}function I(t,a,s){if(a.enabled!==!1){var i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&w(t,a)}return!1}function N(t,a,s,i){return s.enabled!==!1&&(t!==a||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&w(t,s)}function w(t,a){return t.isStaleByTime(a.staleTime)}function se(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var ne=E.createContext(se()),ie=function(){return E.useContext(ne)};function ae(t,a){var s=E.useRef(!1),i=E.useState(0),r=i[1],e=H(),u=ie(),n=e.defaultQueryObserverOptions(t);n.optimisticResults=!0,n.onError&&(n.onError=Q.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=Q.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=Q.batchCalls(n.onSettled)),n.suspense&&(typeof n.staleTime!="number"&&(n.staleTime=1e3),n.cacheTime===0&&(n.cacheTime=1)),(n.suspense||n.useErrorBoundary)&&(u.isReset()||(n.retryOnMount=!1));var c=E.useState(function(){return new a(e,n)}),o=c[0],h=o.getOptimisticResult(n);if(E.useEffect(function(){s.current=!0,u.clearReset();var f=o.subscribe(Q.batchCalls(function(){s.current&&r(function(y){return y+1})}));return o.updateResult(),function(){s.current=!1,f()}},[u,o]),E.useEffect(function(){o.setOptions(n,{listeners:!1})},[n,o]),n.suspense&&h.isLoading)throw o.fetchOptimistic(n).then(function(f){var y=f.data;n.onSuccess==null||n.onSuccess(y),n.onSettled==null||n.onSettled(y,null)}).catch(function(f){u.clearReset(),n.onError==null||n.onError(f),n.onSettled==null||n.onSettled(void 0,f)});if(h.isError&&!u.isReset()&&!h.isFetching&&Y(n.suspense,n.useErrorBoundary,[h.error,o.getCurrentQuery()]))throw h.error;return n.notifyOnChangeProps==="tracked"&&(h=o.trackResult(h,n)),h}function C(t,a,s){var i=J(t,a,s);return ae(i,te)}const{API:ue}=ee,{REACT_APP_API_URL:v}=ue,oe=async()=>{try{const t=await R.get(`${v}/admin/home/panel/month`);return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},ce=async t=>{const{dateIni:a,dateEnd:s}=t;try{const i=await R.get(`${v}/admin/home/panel?dateIni=${a}&dateEnd=${s}`);return i==null?void 0:i.data}catch(i){throw new Error(i.message)}},le=async(t,a)=>{try{const s=await R.get(`${v}/admin/users?rol=${t}&take=${a}`);return s==null?void 0:s.data}catch(s){throw new Error(s.message)}},he=async(t,a=4)=>{const s=t?`${v}/admin/operations?status=${t}&take=${a}`:`${v}/admin/operations?take=${a}`;try{const i=await R.get(s);return i==null?void 0:i.data}catch(i){throw new Error(i.message)}},de=async t=>{try{const a=await R.get(`${v}/admin/home/grafic/income?year=${t}`);return a==null?void 0:a.data}catch(a){throw new Error(a.message)}},ye=async()=>{try{const t=await R.get(`${v}/admin/export/users/pdf`,{responseType:"blob"});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},me=async()=>{try{const t=await R.get(`${v}/admin/export/users/excel`,{responseType:"blob"});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},Re=async()=>{try{const t=await R.get(`${v}/admin/export/operations/pdf`,{responseType:"blob"});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},be=async()=>{try{const t=await R.get(`${v}/admin/export/operations/excel`,{responseType:"blob"});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},ge=()=>{const t=S.getCookie("token");return C(["panel-month"],()=>oe(),{enabled:!!t,staleTime:15*1e3*60})},Ee=(t,a)=>{const s=S.getCookie("token");return C(["panel",t,a],()=>ce({dateIni:t,dateEnd:a}),{enabled:!!s&&!!t&&!!a,staleTime:15*1e3*60})},Oe=(t=1,a=4)=>{const s=S.getCookie("token");return C(["users-list",t,a],()=>le(t,a),{enabled:!!s,staleTime:15*1e3*60})},Qe=(t,a=4)=>{const s=S.getCookie("token");return C(["operations-list",t,a],()=>he(t,a),{enabled:!!s,staleTime:15*1e3*60})},Se=t=>{const a=S.getCookie("token");return C(["graphics-income",t],()=>de(t),{enabled:!!a,staleTime:15*1e3*60})};export{Ee as a,Qe as b,ge as c,Oe as d,ye as e,me as f,Re as g,be as h,Se as u};
