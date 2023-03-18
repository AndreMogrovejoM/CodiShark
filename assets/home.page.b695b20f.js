import{A as Rt}from"./AdministratorPanel.container.9dd478c3.js";import{S as Ve,P as zt,A as Et,a as oe,i as re}from"./SwipperComponent.6eb87648.js";import{a as e,s as O,C as E,j as c,af as ge,a4 as $t,a2 as qe,E as Ce,r as k,ag as me,G as j}from"./index.b54eacfb.js";import{u as $,g as Dt}from"./i18n.hooks.45a62a30.js";import{u as ee,r as We,i as Ge,a as He,I as Mt,L as jt}from"./Layout.container.43b54f64.js";import{l as At}from"./logoKonecta.45ccee3a.js";import{g as Bt,t as Kt,w as Ft,x as Ut,n as Qe,C as Lt,D as Yt,E as Vt}from"./validations.utils.032e510f.js";import{u as Ne,a as qt,b as Ze}from"./users.service.hooks.97b75379.js";import{S as Wt}from"./sweetalert2.all.53ab14b7.js";import{B as Je}from"./Box.9b8acb2a.js";import{n as te,g as Gt,a as Ht}from"./common.utils.106d572f.js";import{B as X}from"./Button.e61c5d17.js";import{T as Qt}from"./Table.02a4a393.js";import{d as Xe,a as de}from"./Remove.f0b98125.js";import{S as H}from"./SkeletonComponent.d30e425c.js";import Zt from"./404.page.0e626a78.js";import"./administrator.service.hooks.5aaaf7d9.js";const Jt=Bt(e("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline"),Xt="/CodiShark/assets/cardImageOne.27ab76fa.svg",{BREAKPOINTS:be}=E,en=O.div`
  position: relative;
  width: 100%;
  height: 30rem;
  max-height: 30rem;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${be.wide}px) {
    max-width: 32rem;
  }

  @media screen and (max-width: ${be.wide}px) {
    height: 28rem;
  }

  @media screen and (max-width: 1200px) {
    height: 24rem;
  }

  @media screen and (max-width: 1100px) {
    height: 22rem;
  }

  @media screen and (max-width: ${be.desktop}px) {
    height: 22rem;
    width: 38%;
  }

  .CardImageOne {
    &__textContainer {
      position: absolute;
      background-color: var(--palette-greyBackgroundSecond);
      width: 88%;
      height: 88%;
      transform: translate(6%, 6%);
      z-index: 99;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      text-align: center;
    }

    &__title {
      color: var(--palette-deepBlue);
      font-weight: 800;
      font-size: 4.8rem;
      line-height: 2.4rem;
      opacity: 1;
      font-weight: bold;

      @media screen and (max-width: 1100px) {
        font-size: 3.2rem;
      }
    }

    &__subtitle {
      color: var(--palette-deepBlue);
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 2.4rem;
      opacity: 1;
      margin-bottom: 2.4rem;
      font-weight: bold;

      @media screen and (max-width: 1100px) {
        font-size: 1.8rem;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`,et=a=>{const n=$().signIn.CardImageOne;return c(en,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:Xt,alt:"cardImageOne"}),c("div",{className:"CardImageOne__textContainer",children:[e("h2",{className:"CardImageOne__subtitle",children:n.subtitle}),e("h2",{className:"CardImageOne__title",children:n.title})]})]})};et.defaultProps={};const tn="/CodiShark/assets/cardImageTwo.12b28896.svg",{BREAKPOINTS:ce}=E,nn=O.div`
  position: relative;
  width: 100%;
  height: 45rem;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${ce.wide}px) {
    max-width: 32rem;
    height: 40;
  }

  @media screen and (max-width: ${ce.wide}px) {
    height: 40rem;
  }

  @media screen and (max-width: 1200px) {
    height: 36rem;
  }

  @media screen and (max-width: 1100px) {
    height: 32rem;
  }

  @media screen and (max-width: ${ce.desktop}px) {
    height: 22rem;
    width: 38%;
  }

  .CardImageTwo {
    &__sectionContainer {
      background-color: var(--palette-darkShadow);
      position: absolute;
      width: 88%;
      height: 14rem;
      transform: translateX(6%);
      bottom: 2.4rem;
      padding: 0.8rem;
    }

    &__section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      bottom: 2.4rem;
      left: 1.6rem;
      background-color: var(--palette-darkShadow);
      gap: 1.2rem;
      padding: 0 2.6rem;

      @media screen and (min-width: ${ce.wide}px) {
        left: 4rem;
      }
    }

    &__subtitle1 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: bold;

      @media screen and (max-width: 1200px) {
        font-size: 1.6rem;
      }
    }

    &__subtitle2 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
      padding: 0 1.8rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
      }
    }

    &__subtitle3 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.2rem;
    }

    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`,tt=a=>{const n=$().signIn.CardImageTwo;return c(nn,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:tn,alt:"fotoMujerOne"}),e("div",{className:"CardImageTwo__sectionContainer",children:c("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:n.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:n.subtitle2})]})})]})};tt.defaultProps={};const an="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",rn="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",on="/CodiShark/assets/imagePayInformation.de64d6a1.svg",sn="/CodiShark/assets/lineInformation.84349c20.svg";var nt={},it={};function ln(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var at={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(a,n){(function(i,l){a.exports=l()})(ge,function(){function i(t){var r=typeof t;return t!==null&&(r==="object"||r==="function")}function l(t){return typeof t=="function"}var o=void 0;Array.isArray?o=Array.isArray:o=function(t){return Object.prototype.toString.call(t)==="[object Array]"};var m=o,h=0,_=void 0,u=void 0,p=function(r,s){C[h]=r,C[h+1]=s,h+=2,h===2&&(u?u(N):F())};function g(t){u=t}function w(t){p=t}var x=typeof window<"u"?window:void 0,v=x||{},I=v.MutationObserver||v.WebKitMutationObserver,T=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",P=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function D(){return function(){return process.nextTick(N)}}function A(){return typeof _<"u"?function(){_(N)}:K()}function y(){var t=0,r=new I(N),s=document.createTextNode("");return r.observe(s,{characterData:!0}),function(){s.data=t=++t%2}}function R(){var t=new MessageChannel;return t.port1.onmessage=N,function(){return t.port2.postMessage(0)}}function K(){var t=setTimeout;return function(){return t(N,1)}}var C=new Array(1e3);function N(){for(var t=0;t<h;t+=2){var r=C[t],s=C[t+1];r(s),C[t]=void 0,C[t+1]=void 0}h=0}function L(){try{var t=Function("return this")().require("vertx");return _=t.runOnLoop||t.runOnContext,A()}catch{return K()}}var F=void 0;T?F=D():I?F=y():P?F=R():x===void 0&&typeof ln=="function"?F=L():F=K();function V(t,r){var s=this,d=new this.constructor(q);d[J]===void 0&&Me(d);var f=s._state;if(f){var b=arguments[f-1];p(function(){return $e(f,d,b,s._result)})}else ue(s,d,t,r);return d}function Z(t){var r=this;if(t&&typeof t=="object"&&t.constructor===r)return t;var s=new r(q);return ae(s,t),s}var J=Math.random().toString(36).substring(2);function q(){}var W=void 0,U=1,Y=2;function he(){return new TypeError("You cannot resolve a promise with itself")}function _t(){return new TypeError("A promises callback cannot return that same promise.")}function gt(t,r,s,d){try{t.call(r,s,d)}catch(f){return f}}function bt(t,r,s){p(function(d){var f=!1,b=gt(s,r,function(S){f||(f=!0,r!==S?ae(d,S):G(d,S))},function(S){f||(f=!0,z(d,S))},"Settle: "+(d._label||" unknown promise"));!f&&b&&(f=!0,z(d,b))},t)}function wt(t,r){r._state===U?G(t,r._result):r._state===Y?z(t,r._result):ue(r,void 0,function(s){return ae(t,s)},function(s){return z(t,s)})}function Ee(t,r,s){r.constructor===t.constructor&&s===V&&r.constructor.resolve===Z?wt(t,r):s===void 0?G(t,r):l(s)?bt(t,r,s):G(t,r)}function ae(t,r){if(t===r)z(t,he());else if(i(r)){var s=void 0;try{s=r.then}catch(d){z(t,d);return}Ee(t,r,s)}else G(t,r)}function xt(t){t._onerror&&t._onerror(t._result),pe(t)}function G(t,r){t._state===W&&(t._result=r,t._state=U,t._subscribers.length!==0&&p(pe,t))}function z(t,r){t._state===W&&(t._state=Y,t._result=r,p(xt,t))}function ue(t,r,s,d){var f=t._subscribers,b=f.length;t._onerror=null,f[b]=r,f[b+U]=s,f[b+Y]=d,b===0&&t._state&&p(pe,t)}function pe(t){var r=t._subscribers,s=t._state;if(r.length!==0){for(var d=void 0,f=void 0,b=t._result,S=0;S<r.length;S+=3)d=r[S],f=r[S+s],d?$e(s,d,f,b):f(b);t._subscribers.length=0}}function $e(t,r,s,d){var f=l(s),b=void 0,S=void 0,ne=!0;if(f){try{b=s(d)}catch(le){ne=!1,S=le}if(r===b){z(r,_t());return}}else b=d;r._state!==W||(f&&ne?ae(r,b):ne===!1?z(r,S):t===U?G(r,b):t===Y&&z(r,b))}function vt(t,r){try{r(function(d){ae(t,d)},function(d){z(t,d)})}catch(s){z(t,s)}}var De=0;function yt(){return De++}function Me(t){t[J]=De++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Ct(){return new Error("Array Methods must be provided an Array")}var Nt=function(){function t(r,s){this._instanceConstructor=r,this.promise=new r(q),this.promise[J]||Me(this.promise),m(s)?(this.length=s.length,this._remaining=s.length,this._result=new Array(this.length),this.length===0?G(this.promise,this._result):(this.length=this.length||0,this._enumerate(s),this._remaining===0&&G(this.promise,this._result))):z(this.promise,Ct())}return t.prototype._enumerate=function(s){for(var d=0;this._state===W&&d<s.length;d++)this._eachEntry(s[d],d)},t.prototype._eachEntry=function(s,d){var f=this._instanceConstructor,b=f.resolve;if(b===Z){var S=void 0,ne=void 0,le=!1;try{S=s.then}catch(_e){le=!0,ne=_e}if(S===V&&s._state!==W)this._settledAt(s._state,d,s._result);else if(typeof S!="function")this._remaining--,this._result[d]=s;else if(f===M){var fe=new f(q);le?z(fe,ne):Ee(fe,s,S),this._willSettleAt(fe,d)}else this._willSettleAt(new f(function(_e){return _e(s)}),d)}else this._willSettleAt(b(s),d)},t.prototype._settledAt=function(s,d,f){var b=this.promise;b._state===W&&(this._remaining--,s===Y?z(b,f):this._result[d]=f),this._remaining===0&&G(b,this._result)},t.prototype._willSettleAt=function(s,d){var f=this;ue(s,void 0,function(b){return f._settledAt(U,d,b)},function(b){return f._settledAt(Y,d,b)})},t}();function It(t){return new Nt(this,t).promise}function Pt(t){var r=this;return m(t)?new r(function(s,d){for(var f=t.length,b=0;b<f;b++)r.resolve(t[b]).then(s,d)}):new r(function(s,d){return d(new TypeError("You must pass an array to race."))})}function St(t){var r=this,s=new r(q);return z(s,t),s}function kt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var M=function(){function t(r){this[J]=yt(),this._result=this._state=void 0,this._subscribers=[],q!==r&&(typeof r!="function"&&kt(),this instanceof t?vt(this,r):Ot())}return t.prototype.catch=function(s){return this.then(null,s)},t.prototype.finally=function(s){var d=this,f=d.constructor;return l(s)?d.then(function(b){return f.resolve(s()).then(function(){return b})},function(b){return f.resolve(s()).then(function(){throw b})}):d.then(s,s)},t}();M.prototype.then=V,M.all=It,M.race=Pt,M.resolve=Z,M.reject=St,M._setScheduler=g,M._setAsap=w,M._asap=p;function Tt(){var t=void 0;if(typeof ge<"u")t=ge;else if(typeof self<"u")t=self;else try{t=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var r=t.Promise;if(r){var s=null;try{s=Object.prototype.toString.call(r.resolve())}catch{}if(s==="[object Promise]"&&!r.cast)return}t.Promise=M}return M.polyfill=Tt,M.Promise=M,M})})(at);at.exports.polyfill();var rt={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(l,o,m){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,_=function u(){l[o]?m():setTimeout(u,h)};setTimeout(_,0)};a.default=n})(rt);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(rt);function i(u){return u&&u.__esModule?u:{default:u}}function l(u,p){if(!(u instanceof p))throw new TypeError("Cannot call a class as a function")}function o(u,p){for(var g=0;g<p.length;g++){var w=p[g];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(u,w.key,w)}}function m(u,p,g){return p&&o(u.prototype,p),g&&o(u,g),Object.defineProperty(u,"prototype",{writable:!1}),u}var h=function(){function u(){return l(this,u),u.instance?u.instance:(u.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return m(u,[{key:"loadLibrary",value:function(g,w){var x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,v=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,I=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(w):g?w?v.test(g)?I.test(w)?(this.domain=g,this.publicKey=w,this.formToken=x,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(w,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(g,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var g=this;if(!this.loading){var w=this.publicKey,x=this.domain;this.loading=!0;var v=document.createElement("script");v.type="text/javascript",/^.+\/$/.test(x)||(x+="/"),v.src="".concat(x,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),v.setAttribute("kr-public-key",w),v.setAttribute("kr-spa-mode","true"),this.formToken&&v.setAttribute("kr-form-token",this.formToken);var I=document.querySelector('script[src="'.concat(v.src,'"]'));!I&&document.body?document.body.appendChild(v):document.body||console.warn("document.body is undefined")}return new Promise(function(T){(0,n.default)(window,"KR",function(){(0,n.default)(window.KR,"ready",function(){g.loaded=!0,g.loading=!1,T({KR:window.KR})})})})}},{key:"getKrypton",value:function(g){var w=this;return new Promise(function(x,v){g&&g!==w.publicKey?window.KR.setFormConfig({publicKey:g}).then(x).catch(v):x({KR:window.KR})})}}]),u}(),_=new h;a.default=_})(it);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(it);function i(o){return o&&o.__esModule?o:{default:o}}var l=n.default;a.default=l})(nt);const cn=$t(nt),dn="/CodiShark/assets/americanExpress.04220897.svg",mn="/CodiShark/assets/dinersClub.c0623661.svg",hn="/CodiShark/assets/masterCard.c474b58f.svg",un="/CodiShark/assets/visa.82da6032.svg",pn=async a=>{const{amount:n,debtId:i,operationNumber:l,hash:o,rawClientAnswer:m}=a;console.log(a);try{return await Kt.post("/operations/validate",{debt_id:i,amount:n,operation_number:l,hash:o,rawClientAnswer:m},{headers:Ft()})}catch(h){throw console.log(h),new Error(h.message)}},fn=()=>{const a=qe();return Ut(pn,{onMutate:async()=>{await a.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{a.invalidateQueries("iziPay")}})},_n=O.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  .IziPayForm {
    &__images {
      padding: 0.8rem 0;
      display: flex;
      gap: 2rem;
    }

    &__image {
      width: 4rem;
    }
  }
`,gn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,minHeight:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:bn}=E,{IZI_PAY_PUBLIC_KEY:wn,REACT_APP_IZI_PAY_URL:xn}=bn,Ie=a=>{const{open:n,setOpen:i,userDebt:l}=a,{id:o,amount_cancellation:m}=l!=null?l:{},{mutateAsync:h,isLoading:_}=Ne(),{mutateAsync:u}=qt(),{mutateAsync:p,reset:g}=fn(),{currentDebtId:w,setOperationUserDebt:x}=ee(),{setIsLoading:v,setPaymentStatus:I}=ee(),{user:T}=Ce(),{refetch:P}=Ze(),D=qe(),A=k.exports.useCallback(R=>{console.warn(R),i(!1),v(!1),I("ERROR"),Wt.fire("Error",R,"error")},[v,i,I]),y=k.exports.useCallback(async()=>{let R,K;if(!(!T||!o||!m)){w.current=o;try{await h({amount:m,debtId:o,type:2}).then(C=>{const{izipay:N,data:L}=C!=null?C:{},{operation_number:F}=L!=null?L:{},{answer:V}=N!=null?N:{},{formToken:Z}=V!=null?V:{};return x(L),K=F,R=Z,cn.loadLibrary(xn,wn)}).then(({KR:C})=>C.setFormConfig({formToken:R,"kr-language":"es-PE"})).then(({KR:C})=>C.onSubmit(async N=>{const{clientAnswer:L,hash:F}=N!=null?N:{};if(!K)throw new Error("Operation Number Error");return p({debtId:o,operationNumber:K,amount:m,rawClientAnswer:JSON.stringify(L),hash:F}),P(),g(),i(!1),D.invalidateQueries("debts"),D.invalidateQueries("debt"),D.invalidateQueries("user-operations-list"),I("SUCCESS"),!1})).then(({KR:C})=>C.onError(async N=>{throw await u({debtId:o,operationNumber:K}),A(N.detailedErrorMessage),new Error("detailedErrorMessage")})).then(({KR:C})=>C.addForm("#myPaymentForm")).then(({KR:C,result:N})=>{C.showForm(N.formId),v(!1)}).catch(C=>{throw new Error(C)})}catch(C){A(C)}}},[m,w,o,u,A,h,D,P,g,v,i,x,I,T,p]);return k.exports.useEffect(()=>{v(_)},[_,v]),k.exports.useEffect(()=>{n&&y()},[y,n]),e(Qe,{open:n&&!_,onClose:()=>i(!n),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Je,{sx:gn,children:c(_n,{className:"IziPayForm",children:[e("img",{src:At,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})}),c("div",{className:"IziPayForm__images",children:[e("img",{className:"IziPayForm__image",src:un,alt:"visa"}),e("img",{className:"IziPayForm__image",src:dn,alt:"americanExpress"}),e("img",{className:"IziPayForm__image",src:mn,alt:"dinersClub"}),e("img",{className:"IziPayForm__image",src:hn,alt:"masterCard"})]})]})})})};Ie.defaultProps={};var Pe={},vn=Ge.exports;Object.defineProperty(Pe,"__esModule",{value:!0});var ot=Pe.default=void 0,yn=vn(We()),Cn=He,Nn=(0,yn.default)((0,Cn.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");ot=Pe.default=Nn;var Se={},In=Ge.exports;Object.defineProperty(Se,"__esModule",{value:!0});var st=Se.default=void 0,Pn=In(We()),Sn=He,kn=(0,Pn.default)((0,Sn.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");st=Se.default=kn;const On=O.div`
  padding-top: 1.2rem;

  .OperationNumberModal {
    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 2.4rem;
      gap: 1.2rem;
    }

    &__closeIcon {
      position: absolute;
      top: 0.4rem;
      right: 0.4rem;

      &--icon {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    &__copy {
      background-color: var(--palette-greyBackgroundSearch);
      color: var(--palette-grayText);
      width: 6rem;
      border-radius: 0.4rem;
      padding: 0.4rem;
      display: flex;

      &:hover {
        cursor: pointer;
      }
    }

    &__h1 {
      font-size: 3rem;
      font-weight: 800;
    }

    &__h2 {
      font-weight: 700;
    }

    &__h3 {
      font-size: 1.2rem;
      font-weight: 700;
    }

    &__p {
      color: var(--palette-grayText);
      font-weight: 300;
    }

    &__section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__h1 {
      line-height: 2.4rem;
      font-weight: 700;
    }

    &__paragraph {
      font-weight: 500;
    }

    &__red {
      &-color {
        color: var(--palette-error);
      }
    }

    &__primary {
      &-color {
        color: var(--palette-primary);
      }
    }
  }
`,Tn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:320,maxWidth:640,minHeight:320,bgcolor:"var(--palette-white)",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:je,ACCOUNT_NUMBER:Ae}=E,ke=a=>{const n=$().signIn.OperationNumberModal,{open:i,setOpen:l,operationNumber:o,userDebt:m}=a,{amount_cancellation:h,limit_date:_}=m!=null?m:{},u=()=>c("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:n.operation}),e("h1",{className:"OperationNumberModal__h1",children:o!=null?o:""}),c("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(`${n.operation}: 
`+(o!=null?o:"")+`
${n.current}:
${Ae}
${n.interbank}:
${je}`)},children:[e(ot,{}),n.copy]}),e("p",{className:"OperationNumberModal__p",children:n.current}),e("h2",{className:"OperationNumberModal__h2",children:Ae}),e("p",{className:"OperationNumberModal__p",children:n.interbank}),e("h2",{className:"OperationNumberModal__h2",children:je})]}),p=()=>c("div",{className:"OperationNumberModal__section",children:[e("h3",{children:n.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${te(h!=null?h:0)}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${n.offer}: ${me(_).format("DD/MM/YYYY")}`})]});return e(Qe,{open:i,onClose:()=>l(!i),children:e(Je,{sx:Tn,children:c(On,{className:"OperationNumberModal",children:[e(Mt,{className:"OperationNumberModal__closeIcon",onClick:()=>l(!i),children:e(st,{className:"OperationNumberModal__closeIcon--icon",fontSize:"large",color:"error"})}),e("p",{className:"OperationNumberModal__paragraph",children:n.paragraph}),c("div",{className:"OperationNumberModal__content",children:[u(),p()]})]})})})};ke.defaultProps={};const{BREAKPOINTS:Q}=E,Rn=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin-top: 2.4rem;
  gap: 2rem;

  @media screen and (min-width: ${Q.tablet}px) {
    padding: 1.6rem 2.4rem;
    margin: 2.4rem auto;
  }

  @media screen and (min-width: ${Q.desktop}px) {
    flex-direction: row;
    gap: 4rem;
  }

  .InformationClient {
    &__section1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__section2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: 1rem;
    }

    &__title2 {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 1rem;

      @media screen and (min-width: ${Q.desktop}px) {
        flex-direction: row;
        gap: 4rem;
      }

      text-align: center;
    }

    &__subtitle {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
      margin-bottom: 1rem;
    }

    &__subtitle2 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-top: 1rem;
    }

    &__subtitle3 {
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    &__subtitle4 {
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__cuenta1 {
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      margin-top: 1rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__button {
      display: ${a=>a.hiddenMobile?"none":"block"};
      background-color: var(--palette-limeGreen);
      width: 12rem;
      margin-top: 2.6rem;

      @media screen and (min-width: ${Q.mobile}px) {
        display: block;
      }
    }

    &__text1 {
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__button2 {
      display: ${a=>a.hiddenMobile?"none":"flex"};
      background-color: var(--palette-primary);
      width: 24rem;

      @media screen and (min-width: ${Q.mobile}px) {
        display: flex;
      }
    }

    &__container {
      &--button {
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${Q.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${Q.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${Q.desktop}px) {
          padding: 0;
        }
      }
    }

    &__text2 {
      color: var(--palette-white);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image1 {
      width: 30rem;
      height: 6.5rem;
    }

    &__imageSection {
      gap: 4rem;
      display: flex;
      margin-top: 2rem;
    }

    &__line {
      display: none;

      @media screen and (min-width: ${Q.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:zn,ACCOUNT_NUMBER:En}=E,lt=a=>{const n=$().signIn.InformationClient,{userDebt:i,hiddenMobile:l}=a,[o,m]=k.exports.useState(!1),[h,_]=k.exports.useState(!1),[u,p]=k.exports.useState(),{id:g,amount_cancellation:w}=i!=null?i:{},{mutateAsync:x,reset:v,isLoading:I}=Ne(),{setIsLoading:T,setPaymentStatus:P}=ee();k.exports.useEffect(()=>{T(I)},[I,T]);const D=()=>{P("NONE"),_(!h)},A=async()=>{P("NONE");try{w&&g&&(await x({amount:w,debtId:g}).then(y=>{const{data:R}=y!=null?y:{},{operation_number:K}=R!=null?R:{};p(K)}).catch(),m(!o),v())}catch(y){P("ERROR"),console.log(y)}};return c(Rn,{className:"InformationClient",hiddenMobile:l,children:[c("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:n.title}),e("h2",{className:"InformationClient__subtitle",children:n.subtitle}),e("img",{className:"InformationClient__image1",src:on,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:n.subtitle2}),c("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:rn,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:an,alt:"iconMasterCardInformation"})]}),e(X,{className:"InformationClient__button",variant:"contained",disabled:I,onClick:D,children:e("h3",{className:"InformationClient__text1",children:n.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:sn,alt:"lineInformation"}),c("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:n.title2}),c("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:n.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:En}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:zn}),e("p",{className:"InformationClient__paragraph",children:n.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:n.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(X,{className:"InformationClient__button2",variant:"contained",onClick:A,disabled:I,children:e("h3",{className:"InformationClient__text2",children:n.button2.toLocaleUpperCase()})})})]}),e(Ie,{open:h,setOpen:_,operationNumber:u,userDebt:i}),e(ke,{open:o,setOpen:m,operationNumber:u,userDebt:i})]})};lt.defaultProps={};const $n="/CodiShark/assets/rejectedImage.25910230.svg",Dn=O.div`
  .PaymentRejected {
    &__container {
      width: 100%;
      display: flex;
      background-color: var(--palette-white);
      border-radius: 0.8rem;
      padding: 4rem 2.4rem;
      margin: 3.2rem auto;
      justify-content: space-evenly;
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.6rem;
    }

    &__button {
      background-color: var(--palette-primary);
    }

    &__text {
      color: var(--palette-white);
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__section2 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 3.2rem;
    }

    &__title2 {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__image {
      display: flex;
      align-self: center;
      width: 6.4rem;
      height: 6.4rem;
    }

    &__package {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p1 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span1 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p2div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p2 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p3div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p3 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span3 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-flow: column wrap;

      @media screen and (min-width: 967px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`,Oe=a=>{const n=$().signIn.PaymentRejected,{setPaymentStatus:i}=ee();return e(Dn,{className:"PaymentRejected",children:e("div",{className:"PaymentRejected__container",children:c("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:$n,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:n.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:n.disapproved}),e(X,{className:"PaymentRejected__button",variant:"contained",onClick:()=>i("NONE"),children:e("h3",{className:"PaymentRejected__text",children:n.button})})]})})})};Oe.defaultProps={};const Mn="/CodiShark/assets/successImage.38cb00ed.svg",{BREAKPOINTS:ie}=E,jn=O.div`
  .PaymentSuccess {
    &__container {
      width: 100%;
      display: flex;
      background-color: var(--palette-white);
      border-radius: 0.8rem;
      padding: 4rem 2.4rem;
      margin: 3.2rem auto;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;

      @media screen and (min-width: ${ie.mobile}px) {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.4rem;

      @media screen and (min-width: ${ie.mobile}px) {
        gap: 0;
      }
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__section2 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 0.8rem;

      @media screen and (min-width: ${ie.mobile}px) {
        gap: 3.2rem;
      }
    }

    &__title2 {
      font-weight: 540;
      font-size: 1.6rem;
      text-align: center;

      @media screen and (min-width: ${ie.mobile}px) {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }

    &__divider {
      border-top: 0.04rem solid var(--palette-darkShadow);

      @media screen and (min-width: ${ie.mobile}px) {
        border-left: 0.24rem solid var(--palette-darkShadow);
      }
    }

    &__image {
      display: flex;
      align-self: center;
      width: 6.4rem;
      height: 6.4rem;

      &--divider {
        display: none;

        @media screen and (min-width: ${ie.mobile}px) {
          display: block;
        }
      }
    }

    &__package {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p1 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span1 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p2div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p2 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p3div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p3 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span3 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-flow: column wrap;

      @media screen and (min-width: 967px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`,Te=a=>{var _;const n=$().signIn.PaymentRejected,{operationUserDebt:i}=ee(),{amount_paid:l,operation_date:o,operation_time:m}=i!=null?i:{},h=me(o).format("DD/MM/YYYY");return e(jn,{className:"PaymentSuccess",children:c("div",{className:"PaymentSuccess__container",children:[c("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:Mn,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:n.success}),e("h2",{className:"PaymentSuccess__subtitle",children:n.approved})]}),e("div",{className:"PaymentSuccess__divider"}),c("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:n.title}),c("div",{className:"PaymentSuccess__paragraph",children:[e("div",{className:"PaymentSuccess__package",children:c("p",{className:"PaymentSuccess__p1",children:[n.paragraph4,e("span",{className:"PaymentSuccess__span1",children:(_=`S/. ${te(l!=null?l:0)}`)!=null?_:"-"})]})}),e("div",{className:"PaymentSuccess__p2div",children:c("p",{className:"PaymentSuccess__p2",children:[n.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:h})]})}),e("div",{className:"PaymentSuccess__p3div",children:c("p",{className:"PaymentSuccess__p3",children:[n.paragraph3,e("span",{className:"PaymentSuccess__span3",children:m!=null?m:"-"})]})})]})]})]})})};Te.defaultProps={};const An=O.div`
  .DebtExpandableRowsComponent {
    &__container {
      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-grayText);

        &-bold {
          font-weight: 700;
          color: var(--palette-blueText);
        }

        &-expand {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.2rem;
          width: 100%;
        }
      }

      &__expand {
        &-static {
          width: 10rem;
        }

        &-text {
          display: -webkit-box;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
        }
      }
    }

    &__component {
      &--divider {
        border-bottom: 0.06rem solid var(--palette-grey);
      }
    }
  }
`,Re=a=>{const{data:n}=a,{paymentStatus:i,currentDebtId:l}=ee(),{id:o}=n!=null?n:{},m=Dt().global.table.TableDebtUser.TableRowsExpand,h=(u,p)=>c("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${u} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:p!=null?p:"-"})]}),_=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return c(An,{className:"DebtExpandableRowsComponent",children:[c("div",{className:"DebtExpandableRowsComponent__container__expand",children:[h(m.entity,n==null?void 0:n.banking_entity),_(),h(m.typeDebt,n==null?void 0:n.product),_(),h(m.typeExchange,n==null?void 0:n.currency),_(),h(m.date,me(n==null?void 0:n.limit_date).format("DD / MM / YYYY"))]}),i==="SUCCESS"&&l.current===o&&e(Te,{}),i==="ERROR"&&l.current===o&&e(Oe,{}),(i==="NONE"||l.current!==o)&&e(lt,{userDebt:n,hiddenMobile:!0})]})};Re.defaultProps={};const{BREAKPOINTS:Be}=E,Bn=O.div`
  .Pagination {
    background-color: var(--palette-greyBackground);
    padding: 0.8rem 0;

    &__container {
      display: flex;
      justify-content: space-between;

      &--pagination {
        display: flex;
        justify-content: space-between;
        gap: 2.4rem;

        @media screen and (max-width: ${Be.mobile}px) {
          width: 100%;
          justify-content: space-evenly;
        }
      }

      &--numbers {
        font-size: 1rem;
        color: var(--palette-darkText);
        padding: 0.4rem 0.8rem;
        cursor: pointer;

        &-activated {
          background-color: var(--palette-whiteBackgroundTree);
          border: 1px solid var(--palette-greyBackgroundBorder);
          border-radius: 50%;
        }
      }
    }

    &__text {
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.4rem;
      display: flex;
      align-items: center;

      @media screen and (max-width: ${Be.mobile}px) {
        display: none;
      }

      &--bold {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        background-color: inherit;
        border: none;

        &:focus {
          outline: none;
        }
      }

      &--disabled {
        color: var(--palette-whiteBackgroundTwo);
      }
    }
  }
`,ct=a=>{const{rowsPerPage:n,rowCount:i}=a,{currentPage:l,onChangePage:o}=a,m=$().global.table.TableDebtUser.Pagination,h=Ht(i,n),_=Gt(h),p=l*n-n+1,g=l===1,w=l===h,x=k.exports.useCallback(()=>o(l-1),[l,o]),v=k.exports.useCallback(()=>o(l+1),[l,o]),I=k.exports.useCallback(y=>o(y),[o]),T=y=>e("div",{...y,children:y==null?void 0:y.value}),P=m.legend(p,i,i),D=y=>`Pagination__text--bold ${y?"Pagination__text--disabled":""}`,A=y=>`Pagination__container--numbers ${y===l?"Pagination__container--numbers-activated":""}`;return e("div",{className:"DebtTable__component--pagination",children:e(Bn,{className:"Pagination",children:c("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:P}),c("div",{className:"Pagination__container--pagination",children:[e("button",{className:D(g),"aria-disabled":g,onClick:x,disabled:g,children:m.back}),_.map((y,R)=>e(T,{value:y,className:A(y),onClick:()=>I(y)},R)),e("button",{className:D(w),"aria-disabled":w,onClick:v,disabled:w,children:m.next})]})]})})})};ct.defaultProps={};const{BREAKPOINTS:Ke}=E,se=O.div`
  .DebtTable {
    &__container {
      &--middle {
        display: flex;
        gap: 0.64rem;
        align-items: center;
        position: relative;
        width: 20rem;

        @media screen and (max-width: 1400px) {
          width: 16rem;
        }
      }

      &--button {
        &-content {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 0.4rem;
          padding-left: 1.6rem;
          padding-right: 1.6rem;
        }
      }

      &--divider {
        border-right: 0.01rem solid var(--palette-darkText);
        height: 80%;
      }

      &--icon {
        pointer-events: none;
      }
    }

    &__discountContainer {
      background-color: var(--palette-yellow);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      width: 8rem;
      height: 4.8rem;
      margin-left: 2.4rem;
      position: absolute;
      right: 0%;
      top: -1.8rem;
      border-radius: 0.4rem;
    }

    &__component {
      &--discountTitle {
        font-weight: bold;
        line-height: 1.6rem;
        font-size: 2rem;
      }

      &--discount {
        font-weight: 700;
        line-height: 1.6rem;
        font-size: 1rem;
      }

      &--button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0.8rem;
        background-color: var(--palette-greyBackground);
        color: var(--palette-blueText);
        text-align: center;
        padding: 0.2rem;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.2rem;
        min-width: 12rem;

        @media screen and (min-width: ${Ke.mobile}px) {
          padding: 0.8rem 1rem;
        }
      }

      &--pagination {
        display: ${a=>a.hiddenMobile?"none":"block"};

        @media screen and (min-width: ${Ke.mobile}px) {
          display: "block";
        }
      }
    }

    &__text {
      &--title {
        color: var(--palette-grayText);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.4rem;
        display: block;
      }

      &--color {
        color: var(--palette-primary);
      }

      &--date {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
  }

  .rdt_TableRow {
    height: 6.4rem !important;
  }
`,Kn=a=>e(ct,{...a}),dt=a=>{const{data:n,columns:i,expandableRows:l,expandableRowsComponent:o}=a,{progressPending:m,expandOnRowClicked:h,expandableRowExpanded:_}=a,{hiddenMobile:u}=a;return e(se,{className:"DebtTable",hiddenMobile:u,children:e(Qt,{columns:i,data:n,expandableRows:l,expandableRowsComponent:o,expandOnRowClicked:h,paginationPerPage:Lt,paginationRowsPerPageOptions:Yt,expandableRowExpanded:_,paginationComponent:Kn,expandableIcon:{collapsed:null,expanded:null},progressPending:m,hiddenHeadRow:!0,hiddenMobile:u})})};dt.defaultProps={};const{BREAKPOINTS:we}=E,Fn=O.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${we.mobile}px) {
    width: 100%;
  }

  .IndicatorsClientOne {
    &__component {
      &--card {
        background-color: var(--palette-greyBackgroundSecond);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem 1.2rem;

        @media screen and (min-width: ${we.mobile}px) {
          padding: 2.4rem 1.6rem;
          background-color: var(--palette-white);
        }

        @media screen and (min-width: ${we.desktop}px) {
          padding: 2.4rem;
        }
      }
    }

    &__text {
      &--bold {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--normal {
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1.6rem;
      }

      &--light {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2rem;
      }

      &--extraLight {
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }
  }
`,xe=a=>{const n=$().signIn.IndicatorsClientOne,{user:i}=Ce(),{first_name:l,last_name:o,mother_last_name:m,dni:h}=i!=null?i:{};return e(Fn,{className:"IndicatorsClientOne",children:c("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:n.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${l!=null?l:""} ${o!=null?o:""} ${m!=null?m:""}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:`DNI N\xB0 ${h!=null?h:""}`})]})})};xe.defaultProps={};const{BREAKPOINTS:Fe}=E,Un=O.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  overflow: hidden;
  padding: 0rem 1.2rem;

  @media screen and (max-width: 1200px) {
    padding: 0rem 0.6rem;
  }

  @media screen and (max-width: ${Fe.mobile}px) {
    width: 88%;
    height: auto;
    background-color: var(--palette-greyBackgroundSecond);
    padding: 1.2rem;
  }

  .IndicatorsClientTwo {
    &__card {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 40%;
      height: 100%;
      justify-content: center;

      @media screen and (max-width: 1200px) {
        width: 50%;
      }

      @media screen and (min-width: ${Fe.mobile}px) {
        background-color: var(--palette-white);
      }
    }

    &__discountContainer {
      background-color: var(--palette-yellow);
      display: flex;
      align-items: center;
      border-radius: 0.8rem;
      padding: 1.2rem;
      gap: 1.2rem;
      align-self: center;

      @media screen and (max-width: 1300px) {
        padding: 1.2rem 0.4rem;
        gap: 1rem;
      }
    }

    &__text {
      &--bold {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--bold2 {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2rem;

        @media screen and (max-width: 1200px) {
          font-size: 1.4rem;
        }
      }

      &--p {
        font-size: 1.4rem;
        line-height: 1.2rem;

        @media screen and (max-width: 1200px) {
          font-size: 1.2rem;
        }
      }

      &--discount {
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 2.4rem;

        @media screen and (max-width: 1200px) {
          font-size: 2.4rem;
        }
      }

      &--percent {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;
        margin-left: -1.2rem;
        margin-top: 0.64rem;

        @media screen and (max-width: 1200px) {
          font-size: 1.6rem;
          margin-left: -1rem;
        }
      }

      &--tached {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-decoration: line-through;
        color: var(--palette-whiteBackgroundTwo);
      }

      &--blue {
        color: var(--palette-primary);
        font-weight: 900;
        font-size: 2.4rem;
        line-height: 2.4rem;
      }
    }
  }
`,ve=a=>{var h,_;const n=$().signIn.IndicatorsClientTwo,{total_debts:i,discount:l}=a,o=l!=null?l:0,m=l&&i?i*(1-l):0;return c(Un,{className:"IndicatorsClientTwo",children:[c("div",{className:"IndicatorsClientTwo__card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:n.debt}),i&&e("h2",{className:"IndicatorsClientTwo__text--tached",children:`S/. ${(h=te(i!=null?i:0))!=null?h:""}`}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(_=te(Math.ceil(m)))!=null?_:""}`})]}),c("div",{className:"IndicatorsClientTwo__discountContainer",children:[e("h2",{className:"IndicatorsClientTwo__text--discount",children:`-${o*100}`}),e("h3",{className:"IndicatorsClientTwo__text--percent",children:"%"}),c("div",{children:[e("p",{className:"IndicatorsClientTwo__text--p",children:"Ahorra hasta"}),e("h3",{className:"IndicatorsClientTwo__text--bold2",children:"Descuento"})]})]})]})};ve.defaultProps={};const Ln="/CodiShark/assets/pannelBannerClient.64cebcbb.svg",Yn=O.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--palette-deepBlue);
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .PanelBannerClient {
    &__container {
      margin-left: 2rem;

      &--image {
        display: none;

        @media screen and (min-width: 920px) {
          position: relative;
          width: 156px;
          height: inherit;
          display: block;
        }
      }
    }

    &__title {
      display: flex;
      font-size: 1.8rem !important;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 3.2rem;
      color: var(--palette-blueLightText);
      padding-top: 0.8;

      @media screen and (max-width: 1400px) {
        font-size: 1.6rem !important;
      }

      @media screen and (max-width: 1200px) {
        font-size: 1.4rem !important;
      }

      @media screen and (max-width: 1100px) {
        font-size: 1.2rem !important;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.4rem !important;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.2rem !important;
      }
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      font-size: 1.3rem !important;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6rem;
      gap: 0.24rem;
      color: var(--palette-white);
      padding-bottom: 0.8rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.2rem !important;
      }

      @media screen and (max-width: 1100px) {
        font-size: 1rem !important;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.4rem !important;
      }

      @media screen and (max-width: 800px) {
        font-size: 1rem !important;
      }
    }

    &__imageContainer {
      width: 32%;
      height: 100%;
      display: inline-block;
      background: -moz-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* Opera 11.10+ */
      background: -ms-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* IE10+ */
      background: linear-gradient(
        to right,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* W3C */

      @media screen and (max-width: 1400px) {
        height: 10rem;
      }
      @media screen and (max-width: 1200px) {
        height: 10rem;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: -1;
    }
  }
`,mt=a=>{const n=$().signIn.PanelBannerClient;return c(Yn,{className:"PanelBannerClient",children:[c("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:n.title}),c("div",{className:"PanelBannerClient__section",children:[e("p",{children:n.paragraph1}),e("p",{children:n.paragraph2}),e("p",{children:n.paragraph3})]})]}),e("div",{className:"PanelBannerClient__imageContainer",children:e("img",{className:"PanelBannerClient__image",src:Ln,alt:"pannelBannerClient"})})]})};mt.defaultProps={};const{BREAKPOINTS:Ue}=E,Vn=O.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: ${Ue.mobile}px) {
    display: none;
  }

  .CardDebts {
    &__component {
      background-color: var(--palette-greyBackgroundSecond);
      border-radius: 0.8rem;
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @media screen and (min-width: ${Ue.mobile}px) {
        display: none;
      }

      &--discount {
        display: flex;
        font-weight: 700;
        align-items: center;
        line-height: 1.6rem;
        font-size: 1.2rem;
        background-color: var(--palette-yellow);
        border-radius: 0.8rem;
        padding: 0 0.8rem;
        justify-content: center;
      }

      &--divider {
        border-left: 0.24rem solid var(--palette-black);
      }

      &--button {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;

        &-blue {
          background-color: var(--palette-blue);
          color: var(--palette-whiteBackgroundTwo);
          padding-top: 0.8rem;
          padding-bottom: 0.8rem;

          &:focus {
            outline: none;
          }
        }
      }

      &--icon {
        fill: var(--palette-skyBlue);
      }
    }

    &__container {
      &--components {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &--offer {
        display: flex;
        gap: 0.64rem;
        align-items: center;
      }

      &--price {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      &--prices {
        display: flex;
        justify-content: space-between;
      }

      &--buttons {
        display: flex;
        justify-content: space-around;
      }
    }

    &__text {
      &--title {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.4rem;
      }

      &--subtitle {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.4rem;
      }

      &--button {
        font-weight: 540;
        font-size: 1rem;
        line-height: 1.4rem;

        &-pay {
          font-weight: 400;
          font-size: 1.2rem;
        }

        &-large {
          font-weight: 560;
          font-size: 1.6rem;
        }
      }

      &--price {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--blue {
        color: var(--palette-blueText);
      }

      &--gray {
        color: var(--palette-grayText);
      }

      &--skyBlue {
        color: var(--palette-skyBlue);
      }
    }
  }
`,ht=a=>{var Z,J,q,W;const n=$().components.CardDebts,{data:i}=a,[l,o]=k.exports.useState(!1),[m,h]=k.exports.useState(!1),[_,u]=k.exports.useState(),{paymentStatus:p,currentDebtId:g,setIsLoading:w,setPaymentStatus:x}=ee(),{mutateAsync:v,reset:I,isLoading:T}=Ne(),{id:P,amount_cancellation:D}=i!=null?i:{},[A,y]=k.exports.useState(!1);k.exports.useEffect(()=>{w(T)},[T,w]);const R=()=>{x("NONE"),h(!m)},K=async()=>{x("NONE");try{D&&P&&(await v({amount:D,debtId:P}).then(U=>{const{data:Y}=U!=null?U:{},{operation_number:he}=Y!=null?Y:{};u(he),y(!0)}).catch(),o(!l),I())}catch(U){x("ERROR"),y(!0),console.log(U)}},C=()=>y(!A),N=()=>"CardDebts__component--button CardDebts__text--button",L=()=>e(X,{variant:"contained",className:`${N()}`,onClick:C,children:c(j,{children:[n.buttonExpand,A?e(Xe,{fontSize:"small"}):e(de,{fontSize:"small"})]})}),F=()=>A&&c(j,{children:[(p==="NONE"||g.current!==P)&&e(Re,{data:i}),p==="SUCCESS"&&g.current===P&&e(Te,{}),p==="ERROR"&&g.current===P&&e(Oe,{})]}),V=()=>c("div",{className:"CardDebts__container--buttons",children:[(p==="NONE"||p==="ERROR"||g.current!==P)&&c(j,{children:[e(X,{variant:"contained",className:`${N()} CardDebts__component--button-blue  CardDebts__text--button-pay`,disabled:T,onClick:R,children:c(j,{children:[n.button,e(de,{className:"CardDebts__component--icon"})]})}),e(X,{variant:"contained",className:`${N()} CardDebts__component--button-blue  CardDebts__text--button-pay`,onClick:K,disabled:T,children:c(j,{children:[n.button2,e(de,{className:"CardDebts__component--icon"})]})})]}),p==="SUCCESS"&&g.current===P&&e(X,{variant:"contained",className:`${N()} CardDebts__component--button-blue  CardDebts__text--button-large`,children:c(j,{children:[n.buttonPayment,e(Jt,{className:"CardDebts__component--icon",fontSize:"large"})]})})]});return c(Vn,{className:"CardDebts",children:[c("div",{className:"CardDebts__component",children:[c("div",{className:"CardDebts__container--components",children:[e("p",{className:"CardDebts__text--title CardDebts__text--blue",children:(Z=i==null?void 0:i.banking_entity)!=null?Z:"-"}),L()]}),c("div",{className:"CardDebts__container--prices",children:[c("div",{className:"CardDebts__container--price",children:[e("p",{className:"CardDebts__text--subtitle",children:n.amount}),e("p",{className:"CardDebts__text--price CardDebts__text--gray",children:`S/. ${(J=i==null?void 0:i.capital_debt)!=null?J:"00.00"}`})]}),e("div",{className:"CardDebts__component--divider"}),c("div",{className:"CardDebts__container--price",children:[e("p",{className:"CardDebts__text--subtitle",children:n.discount}),c("div",{className:"CardDebts__container--offer",children:[e("h3",{className:"CardDebts__text--price CardDebts__text--skyBlue",children:`S/. ${te((q=i==null?void 0:i.amount_cancellation)!=null?q:0)}`}),e("div",{children:e("span",{className:"CardDebts__component--discount",children:` - ${(W=Math.round((i==null?void 0:i.pct_dscto_cancellation)*100))!=null?W:""} %`})})]})]})]}),F()]}),V(),e(Ie,{open:m,setOpen:h,operationNumber:_,userDebt:i}),e(ke,{open:l,setOpen:o,operationNumber:_,userDebt:i})]})};ht.defaultProps={};const{BREAKPOINTS:qn}=E,Wn=O.div`
  .Carrousel {
    @media screen and (min-width: ${qn.mobile}px) {
      display: none;
    }

    &__image {
      width: 30rem;
      height: 18rem;
      border-radius: 1.6rem;
      object-fit: cover;
      object-position: center;
    }
  }
`,ut=a=>{const{images:n}=a;return e(Wn,{className:"Carrousel",children:e(Ve,{slidesPerView:"auto",pagination:{clickable:!0},autoPlay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,spaceBetween:8,modules:[zt,Et],children:n.map((i,l)=>e(oe,{children:e("img",{src:i,alt:i,className:"Carrousel__image"})},l))})})};ut.defaultProps={};const Gn=O.div`
  .SummaryCard {
    &__title {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle {
      font-size: 16px;
    }
  }
`,ze=a=>{const{title:n,children:i}=a;return c(Gn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:n}),e("div",{className:"SummaryCard__subtitle",children:i})]})};ze.defaultProps={};const ye=a=>{const{content:n,isDate:i}=a,l=$().global.table.TableDebtUser.TableRows,o=()=>i?l.deadline:l.amount,m=()=>{var _;return i?n:`S/. ${(_=te(+n))!=null?_:""}`},h=()=>i?"DebtTable__text--date":"DebtTable__text--title";return e(se,{className:"DebtTable",children:e(ze,{title:o(),children:e("h3",{className:h(),children:m()})})})};ye.defaultProps={isDate:!1};const Hn=a=>{var o;const{price:n,discount:i}=a,l=$().global.table.TableDebtUser.TableRows;return e(se,{className:"DebtTable",children:e(ze,{title:l.discount,children:c("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${te(n!=null?n:0)}`}),c("div",{className:"DebtTable__discountContainer",children:[e("h2",{className:"DebtTable__component--discountTitle",children:`-${(o=Math.round(i*100))!=null?o:""}%`}),e("span",{className:"DebtTable__component--discount",children:"Descuento"})]})]})})})},Qn=a=>{const{expand:n}=a,i=$().global.table.TableDebtUser.TableRows,[l,o]=k.exports.useState(n),m=()=>l?e(Xe,{}):e(de,{});return e(se,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>o(!l),children:c("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[i.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:m()})]})})},Le=()=>e(se,{className:"DebtTable__container--divider"}),{BREAKPOINTS:Ye}=E,Zn=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(ye,{content:a==null?void 0:a.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:Ye.desktop,cell:()=>e(Le,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"24rem",cell:a=>e(Hn,{price:a==null?void 0:a.amount_cancellation,discount:a==null?void 0:a.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:Ye.desktop,cell:()=>e(Le,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(ye,{content:me(a==null?void 0:a.limit_date).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:a=>{var n;return e(Qn,{expand:(n=a==null?void 0:a.defaultExpanded)!=null?n:!1})}}],{BREAKPOINTS:B}=E,Jn=O.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  gap: 2%;
  background-color: var(--palette-white);

  @media screen and (min-width: ${B.mobile}px) {
    background-color: var(--palette-greyBackground);
  }

  @media screen and (min-width: ${B.tablet}px) {
    min-height: 90vh;
  }

  .ClientContainer {
    &__section1 {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 100%;
    }

    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
      color: var(--palette-blue);
      text-align: center;

      @media screen and (min-width: ${B.mobile}px) {
        text-align: left;
        color: var(--palette-darkText);
      }
    }

    &__section2 {
      display: none;

      @media screen and (min-width: ${B.mobile}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1.6rem;
      }

      @media screen and (min-width: ${B.tablet}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 1.6rem;
        align-items: unset;
      }
    }

    &__section3 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 0.4rem;

      @media screen and (min-width: ${B.mobile}px) {
        gap: 0.8rem;
      }

      @media screen and (min-width: ${B.desktop}px) {
        width: 70%;
      }
    }

    &__section4 {
      display: flex;

      @media screen and (min-width: ${B.mobile}px) {
        width: 28%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-wrap: wrap;
      }

      @media screen and (min-width: ${B.wide}px) {
        display: block;
      }
    }

    &__container {
      &--banner {
        display: none;

        @media screen and (min-width: ${B.tablet}px) {
          display: block;
        }
      }

      &--carrousel {
        display: block;

        @media screen and (min-width: ${B.tablet}px) {
          display: none;
        }

        &-indicators {
          display: block;

          @media screen and (min-width: ${B.mobile}px) {
            display: none;
          }
        }
      }

      &--debts {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        @media screen and (min-width: ${B.tablet}px) {
          display: none;
        }
      }
    }
  }
`,pt=a=>{const n=$().signIn.ClientContainer,{data:i,isLoading:l}=Ze(),{data:o,total_debts:m}=i!=null?i:{};o&&(o==null?void 0:o.length)>0&&(o[0].defaultExpanded=!0);const h=o&&Math.max.apply(Math,o==null?void 0:o.map(function(x){return x.pct_dscto_cancellation})),_=()=>e(Ve,{slidesPerView:"auto",widthFull:!0,children:l?c(j,{children:[e(oe,{children:e(H,{variant:"rounded",height:124,width:"100%"})}),e(oe,{children:e(H,{variant:"rounded",height:124,width:"100%"})})]}):c(j,{children:[e(oe,{children:e(xe,{})}),e(oe,{children:e(ve,{total_debts:m,discount:h})})]})}),u=()=>l?c(j,{children:[e(H,{variant:"rounded",height:124,width:"100%"}),e(H,{variant:"rounded",height:124,width:"100%"})]}):c(j,{children:[e(xe,{}),e(ve,{total_debts:m,discount:h})]}),p=()=>l?e(H,{variant:"rounded",height:400,width:"100%"}):e(dt,{data:o!=null?o:[],columns:Zn,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Re,expandableRowExpanded:x=>x.defaultExpanded,progressPending:l,hiddenMobile:!0}),g=()=>l?c(j,{children:[e(H,{variant:"rounded",height:280,width:"100%"}),e(H,{variant:"rounded",height:480,width:"100%"})]}):c(j,{children:[e(et,{}),e(tt,{})]}),w=()=>{var x;return l?c(j,{children:[e(H,{variant:"rounded",height:320,width:"100%"}),e(H,{variant:"rounded",height:320,width:"100%"})]}):e(j,{children:(x=o==null?void 0:o.slice(Vt))==null?void 0:x.map((v,I)=>e(ht,{data:v},I))})};return e(jt,{children:c(Jn,{className:"ClientContainer",children:[c("div",{className:"ClientContainer__section3",children:[c("div",{className:"ClientContainer__section1",children:[e("div",{className:"ClientContainer__container--carrousel",children:e(ut,{images:[re,re,re,re,re]})}),e("div",{className:"ClientContainer__container--banner",children:e(mt,{})}),e("div",{className:"ClientContainer__container--carrousel-indicators",children:_()}),e("div",{className:"ClientContainer__section2",children:u()})]}),e("h2",{className:"ClientContainer__title",children:n.title}),p(),e("div",{className:"ClientContainer__container--debts",children:w()})]}),e("div",{className:"ClientContainer__section4",children:g()})]})})};pt.defaultProps={};const ft=a=>{const{user:n}=Ce(),{rol:i}=n!=null?n:{};return i===10?e(Rt,{}):i===1?e(pt,{}):e(Zt,{})};ft.defaultProps={};const _i=ft;export{_i as default};
