import{n as q,_ as $,Q as G,ac as _,ad as L,ae as V,af as H,ag as M,ah as B,ai as z,aj as J,N as S,S as X,p as O,P as Y,ak as Z}from"./index.dca11cd2.js";import{s as ee,q as R,r as g,p as C}from"./auth.service.hooks.7ae8d686.js";import{C as te}from"./constants.03d913e0.js";var re=function(t){q(a,t);function a(i,r){var e;return e=t.call(this)||this,e.client=i,e.options=r,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(r),e}var s=a.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),N(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return w(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return w(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(r,e){var u=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(r),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=u.queryKey),this.updateQuery();var c=this.hasListeners();c&&D(this.currentQuery,n,this.options,u)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==n||this.options.enabled!==u.enabled||this.options.staleTime!==u.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==n||this.options.enabled!==u.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},s.getOptimisticResult=function(r){var e=this.client.defaultQueryObserverOptions(r),u=this.client.getQueryCache().build(this.client,e);return this.createResult(u,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(r,e){var u=this,n={},c=function(h){u.trackedProps.includes(h)||u.trackedProps.push(h)};return Object.keys(r).forEach(function(o){Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:function(){return c(o),r[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),n},s.getNextResult=function(r){var e=this;return new Promise(function(u,n){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(r==null?void 0:r.throwOnError)?n(o.error):u(o))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(r){return this.fetch($({},r,{meta:{refetchPage:r==null?void 0:r.refetchPage}}))},s.fetchOptimistic=function(r){var e=this,u=this.client.defaultQueryObserverOptions(r),n=this.client.getQueryCache().build(this.client,u);return n.fetch().then(function(){return e.createResult(n,u)})},s.fetch=function(r){var e=this;return this.executeFetch(r).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(r){this.updateQuery();var e=this.currentQuery.fetch(this.options,r);return r!=null&&r.throwOnError||(e=e.catch(G)),e},s.updateStaleTimeout=function(){var r=this;if(this.clearStaleTimeout(),!(_||this.currentResult.isStale||!L(this.options.staleTime))){var e=V(this.currentResult.dataUpdatedAt,this.options.staleTime),u=e+1;this.staleTimeoutId=setTimeout(function(){r.currentResult.isStale||r.updateResult()},u)}},s.computeRefetchInterval=function(){var r;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(r=this.options.refetchInterval)!=null?r:!1},s.updateRefetchInterval=function(r){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=r,!(_||this.options.enabled===!1||!L(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||H.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(r,e){var u=this.currentQuery,n=this.options,c=this.currentResult,o=this.currentResultState,h=this.currentResultOptions,f=r!==u,y=f?r.state:this.currentQueryInitialState,b=f?this.currentResult:this.previousQueryResult,l=r.state,E=l.dataUpdatedAt,P=l.error,U=l.errorUpdatedAt,I=l.isFetching,d=l.status,x=!1,k=!1,p;if(e.optimisticResults){var A=this.hasListeners(),j=!A&&N(r,e),K=A&&D(r,u,e,n);(j||K)&&(I=!0,E||(d="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(b==null?void 0:b.isSuccess)&&d!=="error")p=b.data,E=b.dataUpdatedAt,d=b.status,x=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(o==null?void 0:o.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(l.data),e.structuralSharing!==!1&&(p=M(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(Q){B().error(Q),this.selectError=Q}else p=l.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&(d==="loading"||d==="idle")){var m;if((c==null?void 0:c.isPlaceholderData)&&e.placeholderData===(h==null?void 0:h.placeholderData))m=c.data;else if(m=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof m<"u")try{m=e.select(m),e.structuralSharing!==!1&&(m=M(c==null?void 0:c.data,m)),this.selectError=null}catch(Q){B().error(Q),this.selectError=Q}typeof m<"u"&&(d="success",p=m,k=!0)}this.selectError&&(P=this.selectError,p=this.selectResult,U=Date.now(),d="error");var W={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:p,dataUpdatedAt:E,error:P,errorUpdatedAt:U,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>y.dataUpdateCount||l.errorUpdateCount>y.errorUpdateCount,isFetching:I,isRefetching:I&&d!=="loading",isLoadingError:d==="error"&&l.dataUpdatedAt===0,isPlaceholderData:k,isPreviousData:x,isRefetchError:d==="error"&&l.dataUpdatedAt!==0,isStale:F(r,e),refetch:this.refetch,remove:this.remove};return W},s.shouldNotifyListeners=function(r,e){if(!e)return!0;var u=this.options,n=u.notifyOnChangeProps,c=u.notifyOnChangePropsExclusions;if(!n&&!c||n==="tracked"&&!this.trackedProps.length)return!0;var o=n==="tracked"?this.trackedProps:n;return Object.keys(r).some(function(h){var f=h,y=r[f]!==e[f],b=o==null?void 0:o.some(function(E){return E===h}),l=c==null?void 0:c.some(function(E){return E===h});return y&&!l&&(!o||b)})},s.updateResult=function(r){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!z(this.currentResult,e)){var u={cache:!0};(r==null?void 0:r.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(u.listeners=!0),this.notify($({},u,r))}},s.updateQuery=function(){var r=this.client.getQueryCache().build(this.client,this.options);if(r!==this.currentQuery){var e=this.currentQuery;this.currentQuery=r,this.currentQueryInitialState=r.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),r.addObserver(this))}},s.onQueryUpdate=function(r){var e={};r.type==="success"?e.onSuccess=!0:r.type==="error"&&!J(r.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(r){var e=this;S.batch(function(){r.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):r.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),r.listeners&&e.listeners.forEach(function(u){u(e.currentResult)}),r.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},a}(X);function se(t,a){return a.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&a.retryOnMount===!1)}function N(t,a){return se(t,a)||t.state.dataUpdatedAt>0&&w(t,a,a.refetchOnMount)}function w(t,a,s){if(a.enabled!==!1){var i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&F(t,a)}return!1}function D(t,a,s,i){return s.enabled!==!1&&(t!==a||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&F(t,s)}function F(t,a){return t.isStaleByTime(a.staleTime)}function ne(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var ie=O.createContext(ne()),ae=function(){return O.useContext(ie)};function ue(t,a){var s=O.useRef(!1),i=O.useState(0),r=i[1],e=Y(),u=ae(),n=e.defaultQueryObserverOptions(t);n.optimisticResults=!0,n.onError&&(n.onError=S.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=S.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=S.batchCalls(n.onSettled)),n.suspense&&(typeof n.staleTime!="number"&&(n.staleTime=1e3),n.cacheTime===0&&(n.cacheTime=1)),(n.suspense||n.useErrorBoundary)&&(u.isReset()||(n.retryOnMount=!1));var c=O.useState(function(){return new a(e,n)}),o=c[0],h=o.getOptimisticResult(n);if(O.useEffect(function(){s.current=!0,u.clearReset();var f=o.subscribe(S.batchCalls(function(){s.current&&r(function(y){return y+1})}));return o.updateResult(),function(){s.current=!1,f()}},[u,o]),O.useEffect(function(){o.setOptions(n,{listeners:!1})},[n,o]),n.suspense&&h.isLoading)throw o.fetchOptimistic(n).then(function(f){var y=f.data;n.onSuccess==null||n.onSuccess(y),n.onSettled==null||n.onSettled(y,null)}).catch(function(f){u.clearReset(),n.onError==null||n.onError(f),n.onSettled==null||n.onSettled(void 0,f)});if(h.isError&&!u.isReset()&&!h.isFetching&&ee(n.suspense,n.useErrorBoundary,[h.error,o.getCurrentQuery()]))throw h.error;return n.notifyOnChangeProps==="tracked"&&(h=o.trackResult(h,n)),h}function T(t,a,s){var i=Z(t,a,s);return ue(i,re)}const{API:oe}=te,{REACT_APP_API_URL:v}=oe,ce=async()=>{try{const t=await R.get(`${v}/admin/home/panel/month`,{headers:g()});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},le=async t=>{const{dateIni:a,dateEnd:s}=t;try{const i=await R.get(`${v}/admin/home/panel?dateIni=${a}&dateEnd=${s}`,{headers:g()});return i==null?void 0:i.data}catch(i){throw new Error(i.message)}},he=async(t,a)=>{try{const s=await R.get(`${v}/admin/users?rol=${t}&take=${a}`,{headers:g()});return s==null?void 0:s.data}catch(s){throw new Error(s.message)}},de=async(t,a=4)=>{const s=t?`${v}/admin/operations?status=${t}&take=${a}`:`${v}/admin/operations?take=${a}`;try{const i=await R.get(s,{headers:g()});return i==null?void 0:i.data}catch(i){throw new Error(i.message)}},fe=async t=>{try{const a=await R.get(`${v}/admin/home/grafic/income?year=${t}`,{headers:g()});return a==null?void 0:a.data}catch(a){throw new Error(a.message)}},me=async()=>{try{const t=await R.get(`${v}/admin/export/users/pdf`,{responseType:"blob",headers:g()});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},Re=async()=>{try{const t=await R.get(`${v}/admin/export/users/excel`,{responseType:"blob",headers:g()});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},ge=async()=>{try{const t=await R.get(`${v}/admin/export/operations/pdf`,{responseType:"blob",headers:g()});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},be=async()=>{try{const t=await R.get(`${v}/admin/export/operations/excel`,{responseType:"blob",headers:g()});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},Ee=()=>{const t=C.getCookie("token");return T(["panel-month"],()=>ce(),{enabled:!!t,staleTime:15*1e3*60})},Oe=(t,a)=>{const s=C.getCookie("token");return T(["panel",t,a],()=>le({dateIni:t,dateEnd:a}),{enabled:!!s&&!!t&&!!a,staleTime:15*1e3*60})},Qe=(t=1,a=4)=>{const s=C.getCookie("token");return T(["users-list",t,a],()=>he(t,a),{enabled:!!s,staleTime:15*1e3*60})},Se=(t,a=4)=>{const s=C.getCookie("token");return T(["operations-list",t,a],()=>de(t,a),{enabled:!!s,staleTime:15*1e3*60})},Ce=t=>{const a=C.getCookie("token");return T(["graphics-income",t],()=>fe(t),{enabled:!!a,staleTime:15*1e3*60})};export{Oe as a,Se as b,Ee as c,Qe as d,me as e,Re as f,ge as g,be as h,Ce as u};
