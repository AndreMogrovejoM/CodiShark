import{A as st}from"./AdministratorPanel.container.3d56573e.js";import{s as S,j as u,a as e,af as se,a4 as lt,a2 as ct,E as me,r as E,C as D,ag as ee,G as X}from"./index.222ffc61.js";import{u as R,g as dt}from"./i18n.hooks.7225a4b8.js";import{u as H,r as mt,i as ut,b as ht,L as ft}from"./Layout.container.764bc839.js";import{l as pt}from"./logoKonecta.1e992c79.js";import{p as _t,q as gt,r as bt,M as we}from"./auth.service.hooks.ec00bf56.js";import{u as xe,a as yt}from"./users.service.hooks.10f2e4c8.js";import{B as Ce}from"./Box.73af6741.js";import{B as ce}from"./Button.b5911129.js";import{T as vt}from"./Table.6c4ab444.js";import{e as wt,f as xt}from"./validations.utils.dd735354.js";import{g as Ct,a as Nt}from"./common.utils.cf38e105.js";import{S as G}from"./SkeletonComponent.14885b89.js";import{d as Pt,a as It}from"./Remove.05af6b1a.js";import St from"./500.page.0c8fca66.js";import"./administrator.service.hooks.d92d2c4f.js";const Tt="/assets/fotoMujerOne.cadd13a3.svg",Ot=S.div`
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
`,Ne=a=>{const n=R().signIn.CardImageOne;return u(Ot,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:Tt,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:n.subtitle}),e("h2",{className:"CardImageOne__title",children:n.title})]})};Ne.defaultProps={};const Rt="/assets/fotoMujerTwo.ed1bc8b5.svg",kt=S.div`
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
`,Pe=a=>{const n=R().signIn.CardImageTwo;return u(kt,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:Rt,alt:"fotoMujerOne"}),u("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:n.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:n.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:n.subtitle3})]})]})};Pe.defaultProps={};const Et="/assets/iconMasterCardInformation.1c2014dd.svg",zt="/assets/iconVisaInformation.b7bad2af.svg",Mt="/assets/imagePayInformation.de64d6a1.svg",jt="/assets/lineInformation.84349c20.svg";var Ie={},Se={};function At(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Te={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(a,n){(function(o,l){a.exports=l()})(se,function(){function o(t){var i=typeof t;return t!==null&&(i==="object"||i==="function")}function l(t){return typeof t=="function"}var s=void 0;Array.isArray?s=Array.isArray:s=function(t){return Object.prototype.toString.call(t)==="[object Array]"};var d=s,m=0,b=void 0,f=void 0,p=function(i,r){A[m]=i,A[m+1]=r,m+=2,m===2&&(f?f(F):K())};function g(t){f=t}function y(t){p=t}var N=typeof window<"u"?window:void 0,w=N||{},T=w.MutationObserver||w.WebKitMutationObserver,k=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",z=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function x(){return function(){return process.nextTick(F)}}function C(){return typeof b<"u"?function(){b(F)}:B()}function v(){var t=0,i=new T(F),r=document.createTextNode("");return i.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function M(){var t=new MessageChannel;return t.port1.onmessage=F,function(){return t.port2.postMessage(0)}}function B(){var t=setTimeout;return function(){return t(F,1)}}var A=new Array(1e3);function F(){for(var t=0;t<m;t+=2){var i=A[t],r=A[t+1];i(r),A[t]=void 0,A[t+1]=void 0}m=0}function Ye(){try{var t=Function("return this")().require("vertx");return b=t.runOnLoop||t.runOnContext,C()}catch{return B()}}var K=void 0;k?K=x():T?K=v():z?K=M():N===void 0&&typeof At=="function"?K=Ye():K=B();function te(t,i){var r=this,c=new this.constructor(U);c[Q]===void 0&&ge(c);var h=r._state;if(h){var _=arguments[h-1];p(function(){return pe(h,c,_,r._result)})}else ie(r,c,t,i);return c}function ne(t){var i=this;if(t&&typeof t=="object"&&t.constructor===i)return t;var r=new i(U);return W(r,t),r}var Q=Math.random().toString(36).substring(2);function U(){}var L=void 0,q=1,Y=2;function Ve(){return new TypeError("You cannot resolve a promise with itself")}function qe(){return new TypeError("A promises callback cannot return that same promise.")}function We(t,i,r,c){try{t.call(i,r,c)}catch(h){return h}}function Ge(t,i,r){p(function(c){var h=!1,_=We(r,i,function(P){h||(h=!0,i!==P?W(c,P):j(c,P))},function(P){h||(h=!0,I(c,P))},"Settle: "+(c._label||" unknown promise"));!h&&_&&(h=!0,I(c,_))},t)}function He(t,i){i._state===q?j(t,i._result):i._state===Y?I(t,i._result):ie(i,void 0,function(r){return W(t,r)},function(r){return I(t,r)})}function fe(t,i,r){i.constructor===t.constructor&&r===te&&i.constructor.resolve===ne?He(t,i):r===void 0?j(t,i):l(r)?Ge(t,i,r):j(t,i)}function W(t,i){if(t===i)I(t,Ve());else if(o(i)){var r=void 0;try{r=i.then}catch(c){I(t,c);return}fe(t,i,r)}else j(t,i)}function Ze(t){t._onerror&&t._onerror(t._result),re(t)}function j(t,i){t._state===L&&(t._result=i,t._state=q,t._subscribers.length!==0&&p(re,t))}function I(t,i){t._state===L&&(t._state=Y,t._result=i,p(Ze,t))}function ie(t,i,r,c){var h=t._subscribers,_=h.length;t._onerror=null,h[_]=i,h[_+q]=r,h[_+Y]=c,_===0&&t._state&&p(re,t)}function re(t){var i=t._subscribers,r=t._state;if(i.length!==0){for(var c=void 0,h=void 0,_=t._result,P=0;P<i.length;P+=3)c=i[P],h=i[P+r],c?pe(r,c,h,_):h(_);t._subscribers.length=0}}function pe(t,i,r,c){var h=l(r),_=void 0,P=void 0,V=!0;if(h){try{_=r(c)}catch(J){V=!1,P=J}if(i===_){I(i,qe());return}}else _=c;i._state!==L||(h&&V?W(i,_):V===!1?I(i,P):t===q?j(i,_):t===Y&&I(i,_))}function Qe(t,i){try{i(function(c){W(t,c)},function(c){I(t,c)})}catch(r){I(t,r)}}var _e=0;function Je(){return _e++}function ge(t){t[Q]=_e++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Xe(){return new Error("Array Methods must be provided an Array")}var et=function(){function t(i,r){this._instanceConstructor=i,this.promise=new i(U),this.promise[Q]||ge(this.promise),d(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),this.length===0?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),this._remaining===0&&j(this.promise,this._result))):I(this.promise,Xe())}return t.prototype._enumerate=function(r){for(var c=0;this._state===L&&c<r.length;c++)this._eachEntry(r[c],c)},t.prototype._eachEntry=function(r,c){var h=this._instanceConstructor,_=h.resolve;if(_===ne){var P=void 0,V=void 0,J=!1;try{P=r.then}catch(oe){J=!0,V=oe}if(P===te&&r._state!==L)this._settledAt(r._state,c,r._result);else if(typeof P!="function")this._remaining--,this._result[c]=r;else if(h===O){var ae=new h(U);J?I(ae,V):fe(ae,r,P),this._willSettleAt(ae,c)}else this._willSettleAt(new h(function(oe){return oe(r)}),c)}else this._willSettleAt(_(r),c)},t.prototype._settledAt=function(r,c,h){var _=this.promise;_._state===L&&(this._remaining--,r===Y?I(_,h):this._result[c]=h),this._remaining===0&&j(_,this._result)},t.prototype._willSettleAt=function(r,c){var h=this;ie(r,void 0,function(_){return h._settledAt(q,c,_)},function(_){return h._settledAt(Y,c,_)})},t}();function tt(t){return new et(this,t).promise}function nt(t){var i=this;return d(t)?new i(function(r,c){for(var h=t.length,_=0;_<h;_++)i.resolve(t[_]).then(r,c)}):new i(function(r,c){return c(new TypeError("You must pass an array to race."))})}function it(t){var i=this,r=new i(U);return I(r,t),r}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function at(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var O=function(){function t(i){this[Q]=Je(),this._result=this._state=void 0,this._subscribers=[],U!==i&&(typeof i!="function"&&rt(),this instanceof t?Qe(this,i):at())}return t.prototype.catch=function(r){return this.then(null,r)},t.prototype.finally=function(r){var c=this,h=c.constructor;return l(r)?c.then(function(_){return h.resolve(r()).then(function(){return _})},function(_){return h.resolve(r()).then(function(){throw _})}):c.then(r,r)},t}();O.prototype.then=te,O.all=tt,O.race=nt,O.resolve=ne,O.reject=it,O._setScheduler=g,O._setAsap=y,O._asap=p;function ot(){var t=void 0;if(typeof se<"u")t=se;else if(typeof self<"u")t=self;else try{t=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var i=t.Promise;if(i){var r=null;try{r=Object.prototype.toString.call(i.resolve())}catch{}if(r==="[object Promise]"&&!i.cast)return}t.Promise=O}return O.polyfill=ot,O.Promise=O,O})})(Te);Te.exports.polyfill();var Oe={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(l,s,d){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,b=function f(){l[s]?d():setTimeout(f,m)};setTimeout(b,0)};a.default=n})(Oe);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(Oe);function o(f){return f&&f.__esModule?f:{default:f}}function l(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function s(f,p){for(var g=0;g<p.length;g++){var y=p[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(f,y.key,y)}}function d(f,p,g){return p&&s(f.prototype,p),g&&s(f,g),Object.defineProperty(f,"prototype",{writable:!1}),f}var m=function(){function f(){return l(this,f),f.instance?f.instance:(f.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return d(f,[{key:"loadLibrary",value:function(g,y){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,w=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,T=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(y):g?y?w.test(g)?T.test(y)?(this.domain=g,this.publicKey=y,this.formToken=N,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(y,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(g,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var g=this;if(!this.loading){var y=this.publicKey,N=this.domain;this.loading=!0;var w=document.createElement("script");w.type="text/javascript",/^.+\/$/.test(N)||(N+="/"),w.src="".concat(N,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),w.setAttribute("kr-public-key",y),w.setAttribute("kr-spa-mode","true"),this.formToken&&w.setAttribute("kr-form-token",this.formToken);var T=document.querySelector('script[src="'.concat(w.src,'"]'));!T&&document.body?document.body.appendChild(w):document.body||console.warn("document.body is undefined")}return new Promise(function(k){(0,n.default)(window,"KR",function(){(0,n.default)(window.KR,"ready",function(){g.loaded=!0,g.loading=!1,k({KR:window.KR})})})})}},{key:"getKrypton",value:function(g){var y=this;return new Promise(function(N,w){g&&g!==y.publicKey?window.KR.setFormConfig({publicKey:g}).then(N).catch(w):N({KR:window.KR})})}}]),f}(),b=new m;a.default=b})(Se);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(Se);function o(s){return s&&s.__esModule?s:{default:s}}var l=n.default;a.default=l})(Ie);const Dt=lt(Ie),Bt="/assets/americanExpress.04220897.svg",$t="/assets/dinersClub.c0623661.svg",Ft="/assets/masterCard.c474b58f.svg",Kt="/assets/visa.82da6032.svg",Ut=async a=>{const{amount:n,debtId:o,operationNumber:l,hash:s,rawClientAnswer:d}=a;console.log(a);try{return await _t.post("/operations/validate",{debt_id:o,amount:n,operation_number:l,hash:s,rawClientAnswer:d},{headers:gt()})}catch(m){throw console.log(m),new Error(m.message)}},Lt=()=>{const a=ct();return bt(Ut,{onMutate:async()=>{await a.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{a.invalidateQueries("iziPay")}})},Yt=S.div`
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
`,Vt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,minHeight:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:qt}=D,{IZI_PAY_PUBLIC_KEY:Wt,REACT_APP_IZI_PAY_URL:Gt}=qt,Re=a=>{const{open:n,setOpen:o,userDebt:l}=a,{id:s,amount_cancellation:d}=l!=null?l:{},{mutateAsync:m,isLoading:b}=xe(),{mutateAsync:f}=Lt(),{setIsLoading:p,setPaymentStatus:g,currentDebtId:y,setOperationUserDebt:N}=H(),{user:w}=me(),T=E.exports.useCallback(async()=>{let k,z;if(!(!w||!s||!d)){y.current=s;try{await m({amount:d,debtId:s,type:2}).then(x=>{const{izipay:C,data:v}=x!=null?x:{},{operation_number:M}=v!=null?v:{},{answer:B}=C!=null?C:{},{formToken:A}=B!=null?B:{};return N(v),z=M,k=A,Dt.loadLibrary(Gt,Wt)}).then(({KR:x})=>x.setFormConfig({formToken:k,"kr-language":"es-PE"})).then(({KR:x})=>x.onSubmit(C=>{const{clientAnswer:v,hash:M}=C!=null?C:{};if(!z)throw new Error("Operation Number Error");return f({debtId:s,operationNumber:z,amount:d,rawClientAnswer:JSON.stringify(v),hash:M}),o(!1),g("SUCCESS"),!1})).then(({KR:x})=>x.addForm("#myPaymentForm")).then(({KR:x,result:C})=>{x.showForm(C.formId),p(!1)}).catch(x=>{throw new Error(x)})}catch(x){console.log(x.response),o(!1),p(!1),g("ERROR")}}},[d,y,s,m,p,o,N,g,w,f]);return E.exports.useEffect(()=>{p(b)},[b,p]),E.exports.useEffect(()=>{n&&T()},[T,n]),e(we,{open:n&&!b,onClose:()=>o(!n),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ce,{sx:Vt,children:u(Yt,{className:"IziPayForm",children:[e("img",{src:pt,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})}),u("div",{className:"IziPayForm__images",children:[e("img",{className:"IziPayForm__image",src:Kt,alt:"visa"}),e("img",{className:"IziPayForm__image",src:Bt,alt:"americanExpress"}),e("img",{className:"IziPayForm__image",src:$t,alt:"dinersClub"}),e("img",{className:"IziPayForm__image",src:Ft,alt:"masterCard"})]})]})})})};Re.defaultProps={};var ue={},Ht=ut.exports;Object.defineProperty(ue,"__esModule",{value:!0});var ke=ue.default=void 0,Zt=Ht(mt()),Qt=ht,Jt=(0,Zt.default)((0,Qt.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");ke=ue.default=Jt;const Xt=S.div`
  .OperationNumberModal {
    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 2.4rem;
      gap: 1.2rem;
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
`,en={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:320,maxWidth:640,minHeight:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:tn,ACCOUNT_NUMBER:nn}=D,Ee=a=>{const n=R().signIn.OperationNumberModal,{open:o,setOpen:l,operationNumber:s,userDebt:d}=a,{amount_cancellation:m,limit_date:b}=d!=null?d:{},f=()=>u("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:n.operation}),e("h1",{className:"OperationNumberModal__h1",children:s!=null?s:""}),u("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(s!=null?s:"")},children:[e(ke,{}),n.copy]}),e("p",{className:"OperationNumberModal__p",children:n.current}),e("h2",{className:"OperationNumberModal__h2",children:nn}),e("p",{className:"OperationNumberModal__p",children:n.interbank}),e("h2",{className:"OperationNumberModal__h2",children:tn})]}),p=()=>{var g;return u("div",{className:"OperationNumberModal__section",children:[e("h3",{children:n.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${(g=m==null?void 0:m.toFixed(2))!=null?g:""}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${n.offer}: ${ee(b).format("DD/MM/YYYY")}`})]})};return e(we,{open:o,onClose:()=>l(!o),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ce,{sx:en,children:u(Xt,{className:"OperationNumberModal",children:[e("p",{className:"OperationNumberModal__paragraph",children:n.paragraph}),u("div",{className:"OperationNumberModal__content",children:[f(),p()]})]})})})};Ee.defaultProps={};const{BREAKPOINTS:$}=D,rn=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin: 2.4rem auto;
  gap: 2rem;

  @media screen and (min-width: ${$.tablet}px) {
    padding: 1.6rem 2.4rem;
  }

  @media screen and (min-width: ${$.desktop}px) {
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

      @media screen and (min-width: ${$.desktop}px) {
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

        @media screen and (min-width: ${$.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${$.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${$.desktop}px) {
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

      @media screen and (min-width: ${$.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:an,ACCOUNT_NUMBER:on}=D,ze=a=>{const n=R().signIn.InformationClient,{userDebt:o}=a,[l,s]=E.exports.useState(!1),[d,m]=E.exports.useState(!1),[b,f]=E.exports.useState(),{id:p,amount_cancellation:g}=o!=null?o:{},{mutateAsync:y,reset:N,isLoading:w}=xe(),{setIsLoading:T,setPaymentStatus:k}=H();E.exports.useEffect(()=>{T(w)},[w,T]);const z=()=>{k("NONE"),m(!d)},x=async()=>{k("NONE");try{g&&p&&(await y({amount:g,debtId:p}).then(C=>{const{data:v}=C!=null?C:{},{operation_number:M}=v!=null?v:{};f(M)}).catch(),s(!l),N())}catch(C){k("ERROR"),console.log(C)}};return u(rn,{className:"InformationClient",children:[u("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:n.title}),e("h2",{className:"InformationClient__subtitle",children:n.subtitle}),e("img",{className:"InformationClient__image1",src:Mt,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:n.subtitle2}),u("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:zt,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:Et,alt:"iconMasterCardInformation"})]}),e(ce,{className:"InformationClient__button",variant:"contained",disabled:w,onClick:z,children:e("h3",{className:"InformationClient__text1",children:n.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:jt,alt:"lineInformation"}),u("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:n.title2}),u("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:n.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:on}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:an}),e("p",{className:"InformationClient__paragraph",children:n.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:n.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(ce,{className:"InformationClient__button2",variant:"contained",onClick:x,disabled:w,children:e("h3",{className:"InformationClient__text2",children:n.button2.toLocaleUpperCase()})})})]}),e(Re,{open:d,setOpen:m,operationNumber:b,userDebt:o}),e(Ee,{open:l,setOpen:s,operationNumber:b,userDebt:o})]})};ze.defaultProps={};const sn="/assets/rejectedImage.25910230.svg",ln=S.div`
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
`,Me=a=>{const n=R().signIn.PaymentRejected,{setPaymentStatus:o}=H();return e(ln,{className:"PaymentRejected",children:e("div",{className:"PaymentRejected__container",children:u("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:sn,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:n.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:n.disapproved}),e(ce,{className:"PaymentRejected__button",variant:"contained",onClick:()=>o("NONE"),children:e("h3",{className:"PaymentRejected__text",children:n.button})})]})})})};Me.defaultProps={};const cn="/assets/lineSucces.23eb9802.svg",dn="/assets/successImage.38cb00ed.svg",mn=S.div`
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
`,je=a=>{var b;const n=R().signIn.PaymentRejected,{operationUserDebt:o}=H(),{amount_paid:l,operation_date:s,operation_time:d}=o!=null?o:{},m=ee(s).format("DD/MM/YYYY");return e(mn,{className:"PaymentSuccess",children:u("div",{className:"PaymentSuccess__container",children:[u("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:dn,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:n.success}),e("h2",{className:"PaymentSuccess__subtitle",children:n.approved})]}),e("img",{src:cn,alt:"lineSuccess"}),u("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:n.title}),u("div",{className:"PaymentSuccess__paragraph",children:[e("div",{className:"PaymentSuccess__package",children:u("p",{className:"PaymentSuccess__p1",children:[n.paragraph4,e("span",{className:"PaymentSuccess__span1",children:(b=`S./ ${l==null?void 0:l.toFixed(2)}`)!=null?b:"-"})]})}),e("div",{className:"PaymentSuccess__p2div",children:u("p",{className:"PaymentSuccess__p2",children:[n.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:m})]})}),e("div",{className:"PaymentSuccess__p3div",children:u("p",{className:"PaymentSuccess__p3",children:[n.paragraph3,e("span",{className:"PaymentSuccess__span3",children:d!=null?d:"-"})]})})]})]})]})})};je.defaultProps={};const un=S.div`
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
`,Ae=a=>{const{data:n}=a,{paymentStatus:o,currentDebtId:l}=H(),{id:s}=n!=null?n:{},d=dt().global.table.TableDebtUser.TableRowsExpand,m=(f,p)=>u("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${f} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:p!=null?p:"-"})]}),b=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return u(un,{className:"DebtExpandableRowsComponent",children:[u("div",{className:"DebtExpandableRowsComponent__container__expand",children:[m(d.entity,n==null?void 0:n.banking_entity),b(),m(d.typeDebt,n==null?void 0:n.product),b(),m(d.typeExchange,n==null?void 0:n.currency),b(),m(d.date,ee(n==null?void 0:n.limit_date).format("DD / MM / YYYY"))]}),o==="SUCCESS"&&l.current===s&&e(je,{}),o==="ERROR"&&l.current===s&&e(Me,{}),(o==="NONE"||l.current!==s)&&e(ze,{userDebt:n})]})};Ae.defaultProps={};const{BREAKPOINTS:be}=D,hn=S.div`
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

        @media screen and (max-width: ${be.mobile}px) {
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

      @media screen and (max-width: ${be.mobile}px) {
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
`,De=a=>{const{rowsPerPage:n,rowCount:o}=a,{currentPage:l,onChangePage:s}=a,d=R().global.table.TableDebtUser.Pagination,m=Nt(o,n),b=Ct(m),p=l*n-n+1,g=l===1,y=l===m,N=E.exports.useCallback(()=>s(l-1),[l,s]),w=E.exports.useCallback(()=>s(l+1),[l,s]),T=E.exports.useCallback(v=>s(v),[s]),k=v=>e("div",{...v,children:v==null?void 0:v.value}),z=d.legend(p,o,o),x=v=>`Pagination__text--bold ${v?"Pagination__text--disabled":""}`,C=v=>`Pagination__container--numbers ${v===l?"Pagination__container--numbers-activated":""}`;return e(hn,{className:"Pagination",children:u("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:z}),u("div",{className:"Pagination__container--pagination",children:[e("button",{className:x(g),"aria-disabled":g,onClick:N,disabled:g,children:d.back}),b.map((v,M)=>e(k,{value:v,className:C(v),onClick:()=>T(v)},M)),e("button",{className:x(y),"aria-disabled":y,onClick:w,disabled:y,children:d.next})]})]})})};De.defaultProps={};const{BREAKPOINTS:fn}=D,Z=S.div`
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

        @media screen and (min-width: ${fn.mobile}px) {
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
`,pn=a=>e(De,{...a}),Be=a=>{const{data:n,columns:o,expandableRows:l,expandableRowsComponent:s}=a,{progressPending:d,expandOnRowClicked:m,expandableRowExpanded:b}=a;return e(Z,{className:"DebtTable",children:e(vt,{columns:o,data:n,expandableRows:l,expandableRowsComponent:s,expandOnRowClicked:m,paginationPerPage:wt,paginationRowsPerPageOptions:xt,expandableRowExpanded:b,paginationComponent:pn,expandableIcon:{collapsed:null,expanded:null},progressPending:d,hiddenHeadRow:!0})})};Be.defaultProps={};const _n=S.div`
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
`,$e=a=>{const n=R().signIn.IndicatorsClientOne,{user:o}=me(),{first_name:l,last_name:s,mother_last_name:d,dni:m}=o!=null?o:{};return e(_n,{className:"IndicatorsClientOne",children:u("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:n.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${l!=null?l:""} ${s!=null?s:""} ${d!=null?d:""}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:`DNI N\xB0 ${m!=null?m:""}`})]})})};$e.defaultProps={};const gn=S.div`
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
`,Fe=a=>{var l;const n=R().signIn.IndicatorsClientTwo,{total_debts:o}=a;return e(gn,{className:"IndicatorsClientTwo",children:u("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:n.debt}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(l=o==null?void 0:o.toFixed(2))!=null?l:""}`})]})})};Fe.defaultProps={};const bn="/assets/PersonIconPanelBannerClient.014016bb.svg",yn=S.div`
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
      width: 15.3rem;

      @media screen and (min-width: 960px) {
        position: absolute;
        top: -3rem;
      }
    }
  }
`,Ke=a=>{const n=R().signIn.PanelBannerClient;return e(yn,{className:"PanelBannerClient",children:u("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:bn,alt:"personIcon"})}),u("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:n.title}),u("div",{className:"PanelBannerClient__section",children:[e("p",{children:n.paragraph1}),e("p",{children:n.paragraph2}),e("p",{children:n.paragraph3})]})]})]})})};Ke.defaultProps={};const vn=S.div`
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
`,he=a=>{const{title:n,children:o}=a;return u(vn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:n}),e("div",{className:"SummaryCard__subtitle",children:o})]})};he.defaultProps={};const de=a=>{const{content:n,isDate:o}=a,l=R().global.table.TableDebtUser.TableRows,s=()=>o?l.deadline:l.amount,d=()=>o?n:`S/. ${n!=null?n:""}`,m=()=>o?"DebtTable__text--date":"DebtTable__text--title";return e(Z,{className:"DebtTable",children:e(he,{title:s(),children:e("h3",{className:m(),children:d()})})})};de.defaultProps={isDate:!1};const wn=a=>{var s,d;const{price:n,discount:o}=a,l=R().global.table.TableDebtUser.TableRows;return e(Z,{className:"DebtTable",children:e(he,{title:l.discount,children:u("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${(s=n==null?void 0:n.toFixed(2))!=null?s:""}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${(d=Math.round(o*100))!=null?d:""} %`})})]})})})},xn=a=>{const{expand:n}=a,o=R().global.table.TableDebtUser.TableRows,[l,s]=E.exports.useState(n),d=()=>l?e(Pt,{}):e(It,{});return e(Z,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>s(!l),children:u("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[o.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:d()})]})})},ye=()=>e(Z,{className:"DebtTable__container--divider"}),{BREAKPOINTS:ve}=D,Cn=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(de,{content:a==null?void 0:a.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:ve.desktop,cell:()=>e(ye,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"24rem",cell:a=>e(wn,{price:a==null?void 0:a.amount_cancellation,discount:a==null?void 0:a.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:ve.desktop,cell:()=>e(ye,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(de,{content:ee(a==null?void 0:a.limit_date).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:a=>{var n;return e(xn,{expand:(n=a==null?void 0:a.defaultExpanded)!=null?n:!1})}}],{BREAKPOINTS:le}=D,Nn=S.div`
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

  @media screen and (max-width: ${le.wide}px) {
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

      @media screen and (min-width: ${le.tablet}px) {
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

      @media screen and (min-width: ${le.wide}px) {
        display: block;
      }
    }
  }
`,Ue=a=>{const n=R().signIn.ClientContainer,{data:o,isLoading:l}=yt(),{data:s,total_debts:d}=o!=null?o:{};s&&(s==null?void 0:s.length)>0&&(s[0].defaultExpanded=!0);const m=()=>l?u(X,{children:[e(G,{variant:"rounded",height:124,width:"100%"}),e(G,{variant:"rounded",height:124,width:"100%"})]}):u(X,{children:[e($e,{}),e(Fe,{total_debts:d})]}),b=()=>l?e(G,{variant:"rounded",height:400,width:"100%"}):e(Be,{data:s!=null?s:[],columns:Cn,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Ae,expandableRowExpanded:p=>p.defaultExpanded,progressPending:l}),f=()=>l?u(X,{children:[e(G,{variant:"rounded",height:280,width:"100%"}),e(G,{variant:"rounded",height:480,width:"100%"})]}):u(X,{children:[e(Ne,{}),e(Pe,{})]});return u(ft,{children:[u(Nn,{className:"ClientContainer",children:[u("div",{className:"ClientContainer__section3",children:[u("div",{className:"ClientContainer__section1",children:[e(Ke,{}),e("div",{className:"ClientContainer__section2",children:m()})]}),e("h2",{className:"ClientContainer__title",children:n.title}),b()]}),e("div",{className:"ClientContainer__section4",children:f()})]}),e("h6",{children:n.copyright})]})};Ue.defaultProps={};const Le=a=>{const{user:n}=me(),{rol:o}=n!=null?n:{};return o===10?e(st,{}):o===1?e(Ue,{}):e(St,{})};Le.defaultProps={};const Kn=Le;export{Kn as default};
