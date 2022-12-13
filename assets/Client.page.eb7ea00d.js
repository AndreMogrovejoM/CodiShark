import{s as S,j as d,a as e,af as re,a4 as st,a2 as lt,E as ve,r as j,C as M,ag as ce,F as Z}from"./index.31b587f7.js";import{u as T,g as ct}from"./i18n.hooks.9f88aeab.js";import{u as de,r as dt,i as mt,a as ut,L as ht}from"./Layout.container.8472f269.js";import{l as ft}from"./logoKonecta.1cf1b85e.js";import{p as pt,q as _t,r as gt,M as we}from"./auth.service.hooks.48119834.js";import{b as xe,d as bt,a as yt,c as vt}from"./Remove.9d725046.js";import{B as Ce}from"./Box.909ad549.js";import{B as se}from"./Button.d1000baa.js";import{T as wt}from"./Table.ac9292d3.js";import{d as xt,e as Ct}from"./validations.utils.e668c228.js";import{g as Nt,a as Pt}from"./common.utils.834bf330.js";import{S as G}from"./SkeletonComponent.1458dcd8.js";import"./useQuery.412ed980.js";import"./users.service.7920b3c4.js";const It="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",St=S.div`
  position: relative;
  max-width: 32rem;
  max-height: 30rem;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  .CardImageOne {
    &__title {
      position: absolute;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 2.4rem;
      top: 3.2rem;
      left: 3.2rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      position: absolute;
      font-weight: 300;
      font-size: 1rem;
      line-height: 2.4rem;
      top: 1rem;
      left: 3.2rem;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
`,Ne=r=>{const n=T().signIn.CardImageOne;return d(St,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:It,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:n.subtitle}),e("h2",{className:"CardImageOne__title",children:n.title})]})};Ne.defaultProps={};const Rt="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",Tt=S.div`
  position: relative;
  max-width: 32rem;
  max-height: 30rem;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  @media screen and (max-width: 1366px) {
    width: 20rem;
  }

  .CardImageTwo {
    &__section {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 36rem;
      left: 4rem;
      @media screen and (max-width: 1515px) {
        top: 34rem;
      }
      @media screen and (max-width: 1470px) {
        top: 32rem;
        left: 3.6rem;
      }
      @media screen and (max-width: 1410px) {
        left: 3.2rem;
        top: 30rem;
      }
    }

    &__subtitle1 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
    }

    &__subtitle2 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
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
    }
  }
`,Pe=r=>{const n=T().signIn.CardImageTwo;return d(Tt,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:Rt,alt:"fotoMujerOne"}),d("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:n.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:n.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:n.subtitle3})]})]})};Pe.defaultProps={};const kt="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",Ot="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",jt="/CodiShark/assets/imagePayInformation.de64d6a1.svg",Et="/CodiShark/assets/lineInformation.84349c20.svg";var Ie={},Se={};function zt(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Re={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(r,n){(function(l,s){r.exports=s()})(re,function(){function l(t){var i=typeof t;return t!==null&&(i==="object"||i==="function")}function s(t){return typeof t=="function"}var o=void 0;Array.isArray?o=Array.isArray:o=function(t){return Object.prototype.toString.call(t)==="[object Array]"};var h=o,p=0,y=void 0,f=void 0,g=function(i,a){B[p]=i,B[p+1]=a,p+=2,p===2&&(f?f($):K())};function _(t){f=t}function b(t){g=t}var C=typeof window<"u"?window:void 0,v=C||{},P=v.MutationObserver||v.WebKitMutationObserver,x=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",k=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function E(){return function(){return process.nextTick($)}}function O(){return typeof y<"u"?function(){y($)}:J()}function w(){var t=0,i=new P($),a=document.createTextNode("");return i.observe(a,{characterData:!0}),function(){a.data=t=++t%2}}function D(){var t=new MessageChannel;return t.port1.onmessage=$,function(){return t.port2.postMessage(0)}}function J(){var t=setTimeout;return function(){return t($,1)}}var B=new Array(1e3);function $(){for(var t=0;t<p;t+=2){var i=B[t],a=B[t+1];i(a),B[t]=void 0,B[t+1]=void 0}p=0}function Ye(){try{var t=Function("return this")().require("vertx");return y=t.runOnLoop||t.runOnContext,O()}catch{return J()}}var K=void 0;x?K=E():P?K=w():k?K=D():C===void 0&&typeof zt=="function"?K=Ye():K=J();function X(t,i){var a=this,c=new this.constructor(U);c[H]===void 0&&_e(c);var m=a._state;if(m){var u=arguments[m-1];g(function(){return fe(m,c,u,a._result)})}else te(a,c,t,i);return c}function ee(t){var i=this;if(t&&typeof t=="object"&&t.constructor===i)return t;var a=new i(U);return q(a,t),a}var H=Math.random().toString(36).substring(2);function U(){}var F=void 0,V=1,L=2;function Ve(){return new TypeError("You cannot resolve a promise with itself")}function qe(){return new TypeError("A promises callback cannot return that same promise.")}function Ge(t,i,a,c){try{t.call(i,a,c)}catch(m){return m}}function We(t,i,a){g(function(c){var m=!1,u=Ge(a,i,function(N){m||(m=!0,i!==N?q(c,N):z(c,N))},function(N){m||(m=!0,I(c,N))},"Settle: "+(c._label||" unknown promise"));!m&&u&&(m=!0,I(c,u))},t)}function He(t,i){i._state===V?z(t,i._result):i._state===L?I(t,i._result):te(i,void 0,function(a){return q(t,a)},function(a){return I(t,a)})}function he(t,i,a){i.constructor===t.constructor&&a===X&&i.constructor.resolve===ee?He(t,i):a===void 0?z(t,i):s(a)?We(t,i,a):z(t,i)}function q(t,i){if(t===i)I(t,Ve());else if(l(i)){var a=void 0;try{a=i.then}catch(c){I(t,c);return}he(t,i,a)}else z(t,i)}function Qe(t){t._onerror&&t._onerror(t._result),ne(t)}function z(t,i){t._state===F&&(t._result=i,t._state=V,t._subscribers.length!==0&&g(ne,t))}function I(t,i){t._state===F&&(t._state=L,t._result=i,g(Qe,t))}function te(t,i,a,c){var m=t._subscribers,u=m.length;t._onerror=null,m[u]=i,m[u+V]=a,m[u+L]=c,u===0&&t._state&&g(ne,t)}function ne(t){var i=t._subscribers,a=t._state;if(i.length!==0){for(var c=void 0,m=void 0,u=t._result,N=0;N<i.length;N+=3)c=i[N],m=i[N+a],c?fe(a,c,m,u):m(u);t._subscribers.length=0}}function fe(t,i,a,c){var m=s(a),u=void 0,N=void 0,Y=!0;if(m){try{u=a(c)}catch(Q){Y=!1,N=Q}if(i===u){I(i,qe());return}}else u=c;i._state!==F||(m&&Y?q(i,u):Y===!1?I(i,N):t===V?z(i,u):t===L&&I(i,u))}function Ze(t,i){try{i(function(c){q(t,c)},function(c){I(t,c)})}catch(a){I(t,a)}}var pe=0;function Je(){return pe++}function _e(t){t[H]=pe++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Xe(){return new Error("Array Methods must be provided an Array")}var et=function(){function t(i,a){this._instanceConstructor=i,this.promise=new i(U),this.promise[H]||_e(this.promise),h(a)?(this.length=a.length,this._remaining=a.length,this._result=new Array(this.length),this.length===0?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(a),this._remaining===0&&z(this.promise,this._result))):I(this.promise,Xe())}return t.prototype._enumerate=function(a){for(var c=0;this._state===F&&c<a.length;c++)this._eachEntry(a[c],c)},t.prototype._eachEntry=function(a,c){var m=this._instanceConstructor,u=m.resolve;if(u===ee){var N=void 0,Y=void 0,Q=!1;try{N=a.then}catch(ae){Q=!0,Y=ae}if(N===X&&a._state!==F)this._settledAt(a._state,c,a._result);else if(typeof N!="function")this._remaining--,this._result[c]=a;else if(m===R){var ie=new m(U);Q?I(ie,Y):he(ie,a,N),this._willSettleAt(ie,c)}else this._willSettleAt(new m(function(ae){return ae(a)}),c)}else this._willSettleAt(u(a),c)},t.prototype._settledAt=function(a,c,m){var u=this.promise;u._state===F&&(this._remaining--,a===L?I(u,m):this._result[c]=m),this._remaining===0&&z(u,this._result)},t.prototype._willSettleAt=function(a,c){var m=this;te(a,void 0,function(u){return m._settledAt(V,c,u)},function(u){return m._settledAt(L,c,u)})},t}();function tt(t){return new et(this,t).promise}function nt(t){var i=this;return h(t)?new i(function(a,c){for(var m=t.length,u=0;u<m;u++)i.resolve(t[u]).then(a,c)}):new i(function(a,c){return c(new TypeError("You must pass an array to race."))})}function it(t){var i=this,a=new i(U);return I(a,t),a}function at(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function rt(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var R=function(){function t(i){this[H]=Je(),this._result=this._state=void 0,this._subscribers=[],U!==i&&(typeof i!="function"&&at(),this instanceof t?Ze(this,i):rt())}return t.prototype.catch=function(a){return this.then(null,a)},t.prototype.finally=function(a){var c=this,m=c.constructor;return s(a)?c.then(function(u){return m.resolve(a()).then(function(){return u})},function(u){return m.resolve(a()).then(function(){throw u})}):c.then(a,a)},t}();R.prototype.then=X,R.all=tt,R.race=nt,R.resolve=ee,R.reject=it,R._setScheduler=_,R._setAsap=b,R._asap=g;function ot(){var t=void 0;if(typeof re<"u")t=re;else if(typeof self<"u")t=self;else try{t=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var i=t.Promise;if(i){var a=null;try{a=Object.prototype.toString.call(i.resolve())}catch{}if(a==="[object Promise]"&&!i.cast)return}t.Promise=R}return R.polyfill=ot,R.Promise=R,R})})(Re);Re.exports.polyfill();var Te={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=function(s,o,h){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,y=function f(){s[o]?h():setTimeout(f,p)};setTimeout(y,0)};r.default=n})(Te);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=l(Te);function l(f){return f&&f.__esModule?f:{default:f}}function s(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")}function o(f,g){for(var _=0;_<g.length;_++){var b=g[_];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(f,b.key,b)}}function h(f,g,_){return g&&o(f.prototype,g),_&&o(f,_),Object.defineProperty(f,"prototype",{writable:!1}),f}var p=function(){function f(){return s(this,f),f.instance?f.instance:(f.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return h(f,[{key:"loadLibrary",value:function(_,b){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,v=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,P=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(b):_?b?v.test(_)?P.test(b)?(this.domain=_,this.publicKey=b,this.formToken=C,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(b,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(_,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var _=this;if(!this.loading){var b=this.publicKey,C=this.domain;this.loading=!0;var v=document.createElement("script");v.type="text/javascript",/^.+\/$/.test(C)||(C+="/"),v.src="".concat(C,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),v.setAttribute("kr-public-key",b),v.setAttribute("kr-spa-mode","true"),this.formToken&&v.setAttribute("kr-form-token",this.formToken);var P=document.querySelector('script[src="'.concat(v.src,'"]'));!P&&document.body?document.body.appendChild(v):document.body||console.warn("document.body is undefined")}return new Promise(function(x){(0,n.default)(window,"KR",function(){(0,n.default)(window.KR,"ready",function(){_.loaded=!0,_.loading=!1,x({KR:window.KR})})})})}},{key:"getKrypton",value:function(_){var b=this;return new Promise(function(C,v){_&&_!==b.publicKey?window.KR.setFormConfig({publicKey:_}).then(C).catch(v):C({KR:window.KR})})}}]),f}(),y=new p;r.default=y})(Se);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=l(Se);function l(o){return o&&o.__esModule?o:{default:o}}var s=n.default;r.default=s})(Ie);const Mt=st(Ie),Dt=async r=>{const{amount:n,debtId:l,operationNumber:s}=r;console.log("ENTER TO validateIziPayPayment");try{return await pt.post("/operations/validate",{debt_id:l,amount:n,operation_number:s},{headers:_t()})}catch(o){throw console.log(o),new Error(o.message)}},At=()=>{const r=lt();return gt(Dt,{onMutate:async()=>{await r.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{r.invalidateQueries("iziPay")}})},Bt=S.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  .IziPayForm {
  }
`,$t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,height:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:Kt}=M,{IZI_PAY_PUBLIC_KEY:Ut,REACT_APP_IZI_PAY_URL:Ft}=Kt,ke=r=>{const{open:n,setOpen:l,userDebt:s}=r,{id:o,amount_cancellation:h}=s!=null?s:{},{mutateAsync:p,isLoading:y}=xe(),{mutateAsync:f}=At(),{user:g}=ve(),{setIsLoading:_,setPaymentStatus:b}=de(),C=j.exports.useCallback(async()=>{let v,P;if(!(!g||!o||!h))try{await p({amount:h,debtId:o,type:2}).then(x=>{const{izipay:k,data:E}=x!=null?x:{},{operation_number:O}=E!=null?E:{},{answer:w}=k!=null?k:{},{formToken:D}=w!=null?w:{};return P=O,v=D,Mt.loadLibrary(Ft,Ut)}).then(({KR:x})=>x.setFormConfig({formToken:v,"kr-language":"es-PE"})).then(({KR:x})=>x.onSubmit(k=>{if(!P)throw new Error("Operation Number Error");return f({debtId:o,operationNumber:P,amount:322.22}),l(!1),b("SUCCESS"),!1})).then(({KR:x})=>x.addForm("#myPaymentForm")).then(({KR:x,result:k})=>{x.showForm(k.formId),_(!1)}).catch(x=>{throw new Error(x)})}catch(x){console.log(x.response),b("ERROR")}},[h,o,p,_,l,b,g,f]);return j.exports.useEffect(()=>{_(y)},[y,_]),j.exports.useEffect(()=>{n&&C()},[C,n]),e(we,{open:n&&!y,onClose:()=>l(!n),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ce,{sx:$t,children:d(Bt,{className:"IziPayForm",children:[e("img",{src:ft,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})})]})})})};ke.defaultProps={};var me={},Lt=mt.exports;Object.defineProperty(me,"__esModule",{value:!0});var Oe=me.default=void 0,Yt=Lt(dt()),Vt=ut,qt=(0,Yt.default)((0,Vt.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");Oe=me.default=qt;const Gt=S.div`
  .OperationNumberModal {
    &__content {
      display: flex;
      justify-content: space-between;
      margin-top: 2.4rem;
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
`,Wt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:640,height:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:Ht,ACCOUNT_NUMBER:Qt}=M,je=r=>{const n=T().signIn.OperationNumberModal,{open:l,setOpen:s,operationNumber:o,userDebt:h}=r,{amount_dscto_cancellation:p,limit_date:y}=h!=null?h:{},f=()=>d("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:n.operation}),e("h1",{className:"OperationNumberModal__h1",children:o!=null?o:""}),d("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(o!=null?o:"")},children:[e(Oe,{}),n.copy]}),e("p",{className:"OperationNumberModal__p",children:n.current}),e("h2",{className:"OperationNumberModal__h2",children:Qt}),e("p",{className:"OperationNumberModal__p",children:n.interbank}),e("h2",{className:"OperationNumberModal__h2",children:Ht})]}),g=()=>d("div",{className:"OperationNumberModal__section",children:[e("h3",{children:n.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${p!=null?p:""}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${n.offer}: ${ce(y).format("DD/MM/YYYY")}`})]});return e(we,{open:l,onClose:()=>s(!l),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ce,{sx:Wt,children:e(Gt,{className:"OperationNumberModal",children:d("div",{className:"OperationNumberModal__container",children:[e("p",{className:"OperationNumberModal__paragraph",children:n.paragraph}),d("div",{className:"OperationNumberModal__content",children:[f(),g()]})]})})})})};je.defaultProps={};const{BREAKPOINTS:A}=M,Zt=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin: 2.4rem auto;
  gap: 2rem;

  @media screen and (min-width: ${A.tablet}px) {
    padding: 1.6rem 2.4rem;
  }

  @media screen and (min-width: ${A.desktop}px) {
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

      @media screen and (min-width: ${A.desktop}px) {
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
      background-color: var(--palette-limeGreen);
      width: 12rem;
      margin-top: 2.6rem;
    }

    &__text1 {
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__button2 {
      display: flex;
      background-color: var(--palette-primary);
      width: 24rem;
    }

    &__container {
      &--button {
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${A.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${A.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${A.desktop}px) {
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

      @media screen and (min-width: ${A.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:Jt,ACCOUNT_NUMBER:Xt}=M,Ee=r=>{const n=T().signIn.InformationClient,{userDebt:l}=r,[s,o]=j.exports.useState(!1),[h,p]=j.exports.useState(!1),[y,f]=j.exports.useState(),{id:g,amount_cancellation:_}=l!=null?l:{},{mutateAsync:b,reset:C,isLoading:v}=xe(),{setIsLoading:P,setPaymentStatus:x}=de();j.exports.useEffect(()=>{P(v)},[v,P]);const k=()=>{p(!h)},E=async()=>{try{_&&g&&(await b({amount:_,debtId:g}).then(O=>{const{data:w}=O!=null?O:{},{operation_number:D}=w!=null?w:{};f(D)}).catch(),o(!s),C())}catch(O){x("ERROR"),console.log(O)}};return d(Zt,{className:"InformationClient",children:[d("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:n.title}),e("h2",{className:"InformationClient__subtitle",children:n.subtitle}),e("img",{className:"InformationClient__image1",src:jt,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:n.subtitle2}),d("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:Ot,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:kt,alt:"iconMasterCardInformation"})]}),e(se,{className:"InformationClient__button",variant:"contained",disabled:v,onClick:k,children:e("h3",{className:"InformationClient__text1",children:n.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:Et,alt:"lineInformation"}),d("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:n.title2}),d("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:n.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:Xt}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:Jt}),e("p",{className:"InformationClient__paragraph",children:n.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:n.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(se,{className:"InformationClient__button2",variant:"contained",onClick:E,disabled:v,children:e("h3",{className:"InformationClient__text2",children:n.button2.toLocaleUpperCase()})})})]}),e(ke,{open:h,setOpen:p,operationNumber:y,userDebt:l}),e(je,{open:s,setOpen:o,operationNumber:y,userDebt:l})]})};Ee.defaultProps={};const ze="/CodiShark/assets/lineSucces.23eb9802.svg",en="/CodiShark/assets/rejectedImage.25910230.svg",tn=S.div`
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
      width: 25%;
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
      width: 25%;
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

    &__p1div {
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

    &__p4div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p4 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span4 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`,Me=r=>{const n=T().signIn.PaymentRejected;return e(tn,{className:"PaymentRejected",children:d("div",{className:"PaymentRejected__container",children:[d("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:en,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:n.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:n.disapproved}),e(se,{className:"PaymentRejected__button",variant:"contained",children:e("h3",{className:"PaymentRejected__text",children:n.button})})]}),e("img",{className:"PaymentRejected__line",src:ze,alt:"lineSuccess"}),d("div",{className:"PaymentRejected__section2",children:[e("h2",{className:"PaymentRejected__title2",children:n.title}),d("div",{className:"PaymentRejected__paragraph",children:[d("div",{className:"PaymentRejected__p1div",children:[e("p",{className:"PaymentRejected__p1",children:n.paragraph1}),e("span",{className:"PaymentRejected__span1",children:"S/. 1.750.00"})]}),e("div",{className:"PaymentRejected__p2div",children:d("p",{className:"PaymentRejected__p2",children:[n.paragraph2," ",e("span",{className:"PaymentRejected__span2",children:"05/09/2022"})]})}),e("div",{className:"PaymentRejected__p3div",children:d("p",{className:"PaymentRejected__p3",children:[n.paragraph3," ",e("span",{className:"PaymentRejected__span3",children:"17:45 horas"})]})}),e("div",{className:"PaymentRejected__p4div",children:d("p",{className:"PaymentRejected__p4",children:[n.paragraph4," ",e("span",{className:"PaymentRejected__span4",children:"S/. 1.750.00"})]})})]})]})]})})};Me.defaultProps={};const nn="/CodiShark/assets/successImage.38cb00ed.svg",an=S.div`
  .PaymentSuccess {
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
      width: 25%;
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
      width: 25%;
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

    &__p1div {
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

    &__p4div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p4 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span4 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`,De=r=>{const n=T().signIn.PaymentRejected;return e(an,{className:"PaymentSuccess",children:d("div",{className:"PaymentSuccess__container",children:[d("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:nn,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:n.success}),e("h2",{className:"PaymentSuccess__subtitle",children:n.approved})]}),e("img",{src:ze,alt:"lineSuccess"}),d("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:n.title}),d("div",{className:"PaymentSuccess__paragraph",children:[d("div",{className:"PaymentSuccess__p1div",children:[e("p",{className:"PaymentSuccess__p1",children:n.paragraph1}),e("span",{className:"PaymentSuccess__span1",children:"S/. 1.750.00"})]}),e("div",{className:"PaymentSuccess__p2div",children:d("p",{className:"PaymentSuccess__p2",children:[n.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:"05/09/2022"})]})}),e("div",{className:"PaymentSuccess__p3div",children:d("p",{className:"PaymentSuccess__p3",children:[n.paragraph3,e("span",{className:"PaymentSuccess__span3",children:"17:45 horas"})]})}),e("div",{className:"PaymentSuccess__p4div",children:d("p",{className:"PaymentSuccess__p4",children:[n.paragraph4,e("span",{className:"PaymentSuccess__span4",children:"S/. 1.750.00"})]})})]})]})]})})};De.defaultProps={};const rn=S.div`
  .DebtExpandableRowsComponent {
    &__container {
      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-blueText);

        &-bold {
          font-weight: 700;
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
`,Ae=r=>{const{data:n}=r,{paymentStatus:l}=de();console.log(l);const s=ct().global.table.TableDebtUser.TableRowsExpand,o=(p,y)=>d("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${p} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:y!=null?y:"-"})]}),h=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return d(rn,{className:"DebtExpandableRowsComponent",children:[d("div",{className:"DebtExpandableRowsComponent__container__expand",children:[o(s.entity,n==null?void 0:n.banking_entity),h(),o(s.typeDebt,n==null?void 0:n.product),h(),o(s.typeExchange,n==null?void 0:n.currency),h(),o(s.date,ce(n==null?void 0:n.date_last_contact).format("DD / MM / YYYY"))]}),l==="SUCCESS"&&e(De,{}),l==="ERROR"&&e(Me,{}),l==="NONE"&&e(Ee,{userDebt:n})]})};Ae.defaultProps={};const{BREAKPOINTS:ge}=M,on=S.div`
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

        @media screen and (max-width: ${ge.mobile}px) {
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

      @media screen and (max-width: ${ge.mobile}px) {
        display: none;
      }

      &--bold {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        background-color: var(--palette-greyBackground);
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
`,Be=r=>{const{rowsPerPage:n,rowCount:l}=r,{currentPage:s,onChangePage:o}=r,h=T().global.table.TableDebtUser.Pagination,p=Pt(l,n),y=Nt(p),g=s*n-n+1,_=s===1,b=s===p,C=j.exports.useCallback(()=>o(s-1),[s,o]),v=j.exports.useCallback(()=>o(s+1),[s,o]),P=j.exports.useCallback(w=>o(w),[o]),x=w=>e("div",{...w,children:w==null?void 0:w.value}),k=h.legend(g,l,l),E=w=>`Pagination__text--bold ${w?"Pagination__text--disabled":""}`,O=w=>`Pagination__container--numbers ${w===s?"Pagination__container--numbers-activated":""}`;return e(on,{className:"Pagination",children:d("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:k}),d("div",{className:"Pagination__container--pagination",children:[e("button",{className:E(_),"aria-disabled":_,onClick:C,disabled:_,children:h.back}),y.map((w,D)=>e(x,{value:w,className:O(w),onClick:()=>P(w)},D)),e("button",{className:E(b),"aria-disabled":b,onClick:v,disabled:b,children:h.next})]})]})})};Be.defaultProps={};const{BREAKPOINTS:sn}=M,W=S.div`
  .DebtTable {
    &__container {
      &--middle {
        display: flex;
        gap: 0.64rem;
        align-items: center;
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

    &__component {
      &--discount {
        display: flex;
        font-weight: 700;
        align-items: center;
        line-height: 1.6rem;
        font-size: 0.8rem;
        background-color: var(--palette-yellow);
        border-radius: 0.8rem;
        padding: 0 0.8rem;
        justify-content: center;
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

        @media screen and (min-width: ${sn.mobile}px) {
          padding: 0.8rem 1rem;
        }
      }
    }
    &__text {
      &--title {
        color: var(--palette-grayText);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.4rem;
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
`,ln=r=>e(Be,{...r}),$e=r=>{const{data:n,columns:l,expandableRows:s,expandableRowsComponent:o}=r,{progressPending:h,expandOnRowClicked:p,expandableRowExpanded:y}=r;return e(W,{className:"DebtTable",children:e(wt,{columns:l,data:n,expandableRows:s,expandableRowsComponent:o,expandOnRowClicked:p,paginationPerPage:xt,paginationRowsPerPageOptions:Ct,expandableRowExpanded:y,paginationComponent:ln,expandableIcon:{collapsed:null,expanded:null},progressPending:h,hiddenHeadRow:!0})})};$e.defaultProps={};const cn=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .IndicatorsClientOne {
    &__component {
      &--card {
        background-color: var(--palette-white);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem;
        padding-right: 4rem;
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
`,Ke=r=>{const n=T().signIn.IndicatorsClientOne,{user:l}=ve(),{first_name:s,last_name:o,mother_last_name:h}=l!=null?l:{};return e(cn,{className:"IndicatorsClientOne",children:d("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:n.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${s!=null?s:""} ${o} ${h}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:"DNI N\xB0 86752459"})]})})};Ke.defaultProps={};const dn=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .IndicatorsClientTwo {
    &__component {
      &--card {
        background-color: var(--palette-white);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem;
        padding-right: 4rem;
        height: 100%;
        justify-content: center;
      }
    }

    &__text {
      &--bold {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--blue {
        color: var(--palette-primary);
        font-weight: 800;
        font-size: 2.2rem;
        line-height: 2.4rem;
      }
    }
  }
`,Ue=r=>{var s;const n=T().signIn.IndicatorsClientTwo,{total_debts:l}=r;return e(dn,{className:"IndicatorsClientTwo",children:d("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:n.debt}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(s=l.toFixed(2))!=null?s:""}`})]})})};Ue.defaultProps={};const mn="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",un=S.div`
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

      &--component {
        width: 100%;
        display: flex;
        align-items: flex-start;
        background-color: var(--palette-primary);
        border-radius: 0.8rem;
        padding: 1.2rem 2.4rem;
      }
    }

    &__title {
      display: flex;
      font-size: 22px;
      font-weight: 900;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      font-size: 22px;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6rem;
      gap: 0.24rem;
    }

    &__image {
      position: absolute;
      top: -3rem;

      @media screen and (min-width: 960px) {
        position: absolute;
        top: -3rem;
      }
    }
  }
`,Fe=r=>{const n=T().signIn.PanelBannerClient;return e(un,{className:"PanelBannerClient",children:d("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:mn,alt:"personIcon"})}),d("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:n.title}),d("div",{className:"PanelBannerClient__section",children:[e("p",{children:n.paragraph1}),e("p",{children:n.paragraph2}),e("p",{children:n.paragraph3})]})]})]})})};Fe.defaultProps={};const hn=S.div`
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
`,ue=r=>{const{title:n,children:l}=r;return d(hn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:n}),e("div",{className:"SummaryCard__subtitle",children:l})]})};ue.defaultProps={};const le=r=>{const{content:n,isDate:l}=r,s=T().global.table.TableDebtUser.TableRows,o=()=>l?s.deadline:s.amount,h=()=>l?n:`S/. ${n!=null?n:""}`,p=()=>l?"DebtTable__text--date":"DebtTable__text--title";return e(W,{className:"DebtTable",children:e(ue,{title:o(),children:e("h3",{className:p(),children:h()})})})};le.defaultProps={isDate:!1};const fn=r=>{var o;const{price:n,discount:l}=r,s=T().global.table.TableDebtUser.TableRows;return e(W,{className:"DebtTable",children:e(ue,{title:s.discount,children:d("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${(o=n.toFixed(2))!=null?o:""}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${l*100} %`})})]})})})},pn=r=>{const{expand:n}=r,l=T().global.table.TableDebtUser.TableRows,[s,o]=j.exports.useState(n),h=()=>s?e(bt,{}):e(yt,{});return e(W,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>o(!s),children:d("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[l.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:h()})]})})},be=()=>e(W,{className:"DebtTable__container--divider"}),{BREAKPOINTS:ye}=M,_n=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:r=>e(le,{content:r==null?void 0:r.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:ye.desktop,cell:()=>e(be,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:r=>e(fn,{price:r==null?void 0:r.amount_cancellation,discount:r==null?void 0:r.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:ye.desktop,cell:()=>e(be,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:r=>e(le,{content:ce(r==null?void 0:r.date_last_contact).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:r=>{var n;return e(pn,{expand:(n=r==null?void 0:r.defaultExpanded)!=null?n:!1})}}],{BREAKPOINTS:oe}=M,gn=S.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  display: flex;
  gap: 2%;
  background-color: var(--palette-greyBackground);
  padding-bottom: 6.4rem;

  @media screen and (max-width: ${oe.wide}px) {
    flex-direction: column;
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
    }

    &__section2 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.6rem;

      @media screen and (min-width: ${oe.tablet}px) {
        flex-direction: row;
      }
    }

    &__section3 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 0.8rem;

      @media screen and (min-width: 1366px) {
        width: 70%;
        margin: 0 auto;
      }
    }

    &__section4 {
      width: 28%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-wrap: wrap;
      display: none;

      @media screen and (min-width: ${oe.wide}px) {
        display: block;
      }
    }
  }
`,Le=r=>{const n=T().signIn.ClientContainer,{data:l,isLoading:s}=vt(),{data:o,total_debts:h}=l!=null?l:{};o&&(o[0].defaultExpanded=!0);const p=()=>s?d(Z,{children:[e(G,{variant:"rounded",height:124,width:"100%"}),e(G,{variant:"rounded",height:124,width:"100%"})]}):d(Z,{children:[e(Ke,{}),e(Ue,{total_debts:h})]}),y=()=>s?e(G,{variant:"rounded",height:400,width:"100%"}):e($e,{data:o!=null?o:[],columns:_n,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Ae,expandableRowExpanded:g=>g.defaultExpanded,progressPending:s}),f=()=>s?d(Z,{children:[e(G,{variant:"rounded",height:280,width:"100%"}),e(G,{variant:"rounded",height:480,width:"100%"})]}):d(Z,{children:[e(Ne,{}),e(Pe,{})]});return e(ht,{children:d(gn,{className:"ClientContainer",children:[d("div",{className:"ClientContainer__section3",children:[d("div",{className:"ClientContainer__section1",children:[e(Fe,{}),e("div",{className:"ClientContainer__section2",children:p()})]}),e("h2",{className:"ClientContainer__title",children:n.title}),y()]}),e("div",{className:"ClientContainer__section4",children:f()})]})})};Le.defaultProps={};const jn=Le;export{jn as default};
