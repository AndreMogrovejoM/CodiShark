import{s as S,j as u,a as e,af as se,a4 as ot,a2 as st,E as ye,r as E,C as D,ag as ee,G as X}from"./index.78f16c0f.js";import{u as O,g as lt}from"./i18n.hooks.dcfdf754.js";import{u as H,r as ct,i as dt,a as mt,L as ut}from"./Layout.container.47df2272.js";import{l as ht}from"./logoKonecta.83374eb9.js";import{p as ft,q as pt,r as _t,M as we}from"./auth.service.hooks.59ab2c5f.js";import{u as xe,d as gt,a as bt,b as vt}from"./Remove.109d4b91.js";import{B as Ce}from"./Box.87f85892.js";import{B as ce}from"./Button.f3688821.js";import{T as yt}from"./Table.b5b7a31b.js";import{e as wt,f as xt}from"./validations.utils.0743643c.js";import{g as Ct,a as Nt}from"./common.utils.834bf330.js";import{S as W}from"./SkeletonComponent.5f3a8237.js";import"./useQuery.78699b7d.js";import"./users.service.27dcf0aa.js";const Pt="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",It=S.div`
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
`,Ne=a=>{const n=O().signIn.CardImageOne;return u(It,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:Pt,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:n.subtitle}),e("h2",{className:"CardImageOne__title",children:n.title})]})};Ne.defaultProps={};const St="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",kt=S.div`
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
`,Pe=a=>{const n=O().signIn.CardImageTwo;return u(kt,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:St,alt:"fotoMujerOne"}),u("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:n.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:n.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:n.subtitle3})]})]})};Pe.defaultProps={};const Tt="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",Ot="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",Rt="/CodiShark/assets/imagePayInformation.de64d6a1.svg",Et="/CodiShark/assets/lineInformation.84349c20.svg";var Ie={},Se={};function zt(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ke={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(a,n){(function(s,l){a.exports=l()})(se,function(){function s(t){var i=typeof t;return t!==null&&(i==="object"||i==="function")}function l(t){return typeof t=="function"}var o=void 0;Array.isArray?o=Array.isArray:o=function(t){return Object.prototype.toString.call(t)==="[object Array]"};var d=o,m=0,b=void 0,f=void 0,p=function(i,r){A[m]=i,A[m+1]=r,m+=2,m===2&&(f?f(K):F())};function g(t){f=t}function v(t){p=t}var N=typeof window<"u"?window:void 0,w=N||{},k=w.MutationObserver||w.WebKitMutationObserver,R=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",z=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function x(){return function(){return process.nextTick(K)}}function C(){return typeof b<"u"?function(){b(K)}:B()}function y(){var t=0,i=new k(K),r=document.createTextNode("");return i.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function M(){var t=new MessageChannel;return t.port1.onmessage=K,function(){return t.port2.postMessage(0)}}function B(){var t=setTimeout;return function(){return t(K,1)}}var A=new Array(1e3);function K(){for(var t=0;t<m;t+=2){var i=A[t],r=A[t+1];i(r),A[t]=void 0,A[t+1]=void 0}m=0}function Le(){try{var t=Function("return this")().require("vertx");return b=t.runOnLoop||t.runOnContext,C()}catch{return B()}}var F=void 0;R?F=x():k?F=y():z?F=M():N===void 0&&typeof zt=="function"?F=Le():F=B();function te(t,i){var r=this,c=new this.constructor(U);c[J]===void 0&&_e(c);var h=r._state;if(h){var _=arguments[h-1];p(function(){return fe(h,c,_,r._result)})}else ie(r,c,t,i);return c}function ne(t){var i=this;if(t&&typeof t=="object"&&t.constructor===i)return t;var r=new i(U);return G(r,t),r}var J=Math.random().toString(36).substring(2);function U(){}var L=void 0,q=1,Y=2;function Ye(){return new TypeError("You cannot resolve a promise with itself")}function Ve(){return new TypeError("A promises callback cannot return that same promise.")}function qe(t,i,r,c){try{t.call(i,r,c)}catch(h){return h}}function Ge(t,i,r){p(function(c){var h=!1,_=qe(r,i,function(P){h||(h=!0,i!==P?G(c,P):j(c,P))},function(P){h||(h=!0,I(c,P))},"Settle: "+(c._label||" unknown promise"));!h&&_&&(h=!0,I(c,_))},t)}function We(t,i){i._state===q?j(t,i._result):i._state===Y?I(t,i._result):ie(i,void 0,function(r){return G(t,r)},function(r){return I(t,r)})}function he(t,i,r){i.constructor===t.constructor&&r===te&&i.constructor.resolve===ne?We(t,i):r===void 0?j(t,i):l(r)?Ge(t,i,r):j(t,i)}function G(t,i){if(t===i)I(t,Ye());else if(s(i)){var r=void 0;try{r=i.then}catch(c){I(t,c);return}he(t,i,r)}else j(t,i)}function He(t){t._onerror&&t._onerror(t._result),re(t)}function j(t,i){t._state===L&&(t._result=i,t._state=q,t._subscribers.length!==0&&p(re,t))}function I(t,i){t._state===L&&(t._state=Y,t._result=i,p(He,t))}function ie(t,i,r,c){var h=t._subscribers,_=h.length;t._onerror=null,h[_]=i,h[_+q]=r,h[_+Y]=c,_===0&&t._state&&p(re,t)}function re(t){var i=t._subscribers,r=t._state;if(i.length!==0){for(var c=void 0,h=void 0,_=t._result,P=0;P<i.length;P+=3)c=i[P],h=i[P+r],c?fe(r,c,h,_):h(_);t._subscribers.length=0}}function fe(t,i,r,c){var h=l(r),_=void 0,P=void 0,V=!0;if(h){try{_=r(c)}catch(Z){V=!1,P=Z}if(i===_){I(i,Ve());return}}else _=c;i._state!==L||(h&&V?G(i,_):V===!1?I(i,P):t===q?j(i,_):t===Y&&I(i,_))}function Qe(t,i){try{i(function(c){G(t,c)},function(c){I(t,c)})}catch(r){I(t,r)}}var pe=0;function Je(){return pe++}function _e(t){t[J]=pe++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Ze(){return new Error("Array Methods must be provided an Array")}var Xe=function(){function t(i,r){this._instanceConstructor=i,this.promise=new i(U),this.promise[J]||_e(this.promise),d(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),this.length===0?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),this._remaining===0&&j(this.promise,this._result))):I(this.promise,Ze())}return t.prototype._enumerate=function(r){for(var c=0;this._state===L&&c<r.length;c++)this._eachEntry(r[c],c)},t.prototype._eachEntry=function(r,c){var h=this._instanceConstructor,_=h.resolve;if(_===ne){var P=void 0,V=void 0,Z=!1;try{P=r.then}catch(oe){Z=!0,V=oe}if(P===te&&r._state!==L)this._settledAt(r._state,c,r._result);else if(typeof P!="function")this._remaining--,this._result[c]=r;else if(h===T){var ae=new h(U);Z?I(ae,V):he(ae,r,P),this._willSettleAt(ae,c)}else this._willSettleAt(new h(function(oe){return oe(r)}),c)}else this._willSettleAt(_(r),c)},t.prototype._settledAt=function(r,c,h){var _=this.promise;_._state===L&&(this._remaining--,r===Y?I(_,h):this._result[c]=h),this._remaining===0&&j(_,this._result)},t.prototype._willSettleAt=function(r,c){var h=this;ie(r,void 0,function(_){return h._settledAt(q,c,_)},function(_){return h._settledAt(Y,c,_)})},t}();function et(t){return new Xe(this,t).promise}function tt(t){var i=this;return d(t)?new i(function(r,c){for(var h=t.length,_=0;_<h;_++)i.resolve(t[_]).then(r,c)}):new i(function(r,c){return c(new TypeError("You must pass an array to race."))})}function nt(t){var i=this,r=new i(U);return I(r,t),r}function it(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function rt(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var T=function(){function t(i){this[J]=Je(),this._result=this._state=void 0,this._subscribers=[],U!==i&&(typeof i!="function"&&it(),this instanceof t?Qe(this,i):rt())}return t.prototype.catch=function(r){return this.then(null,r)},t.prototype.finally=function(r){var c=this,h=c.constructor;return l(r)?c.then(function(_){return h.resolve(r()).then(function(){return _})},function(_){return h.resolve(r()).then(function(){throw _})}):c.then(r,r)},t}();T.prototype.then=te,T.all=et,T.race=tt,T.resolve=ne,T.reject=nt,T._setScheduler=g,T._setAsap=v,T._asap=p;function at(){var t=void 0;if(typeof se<"u")t=se;else if(typeof self<"u")t=self;else try{t=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var i=t.Promise;if(i){var r=null;try{r=Object.prototype.toString.call(i.resolve())}catch{}if(r==="[object Promise]"&&!i.cast)return}t.Promise=T}return T.polyfill=at,T.Promise=T,T})})(ke);ke.exports.polyfill();var Te={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(l,o,d){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,b=function f(){l[o]?d():setTimeout(f,m)};setTimeout(b,0)};a.default=n})(Te);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(Te);function s(f){return f&&f.__esModule?f:{default:f}}function l(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function o(f,p){for(var g=0;g<p.length;g++){var v=p[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}function d(f,p,g){return p&&o(f.prototype,p),g&&o(f,g),Object.defineProperty(f,"prototype",{writable:!1}),f}var m=function(){function f(){return l(this,f),f.instance?f.instance:(f.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return d(f,[{key:"loadLibrary",value:function(g,v){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,w=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,k=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(v):g?v?w.test(g)?k.test(v)?(this.domain=g,this.publicKey=v,this.formToken=N,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(v,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(g,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var g=this;if(!this.loading){var v=this.publicKey,N=this.domain;this.loading=!0;var w=document.createElement("script");w.type="text/javascript",/^.+\/$/.test(N)||(N+="/"),w.src="".concat(N,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),w.setAttribute("kr-public-key",v),w.setAttribute("kr-spa-mode","true"),this.formToken&&w.setAttribute("kr-form-token",this.formToken);var k=document.querySelector('script[src="'.concat(w.src,'"]'));!k&&document.body?document.body.appendChild(w):document.body||console.warn("document.body is undefined")}return new Promise(function(R){(0,n.default)(window,"KR",function(){(0,n.default)(window.KR,"ready",function(){g.loaded=!0,g.loading=!1,R({KR:window.KR})})})})}},{key:"getKrypton",value:function(g){var v=this;return new Promise(function(N,w){g&&g!==v.publicKey?window.KR.setFormConfig({publicKey:g}).then(N).catch(w):N({KR:window.KR})})}}]),f}(),b=new m;a.default=b})(Se);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(Se);function s(o){return o&&o.__esModule?o:{default:o}}var l=n.default;a.default=l})(Ie);const Mt=ot(Ie),jt=async a=>{const{amount:n,debtId:s,operationNumber:l,hash:o,rawClientAnswer:d}=a;console.log(a);try{return await ft.post("/operations/validate",{debt_id:s,amount:n,operation_number:l,hash:o,rawClientAnswer:d},{headers:pt()})}catch(m){throw console.log(m),new Error(m.message)}},At=()=>{const a=st();return _t(jt,{onMutate:async()=>{await a.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{a.invalidateQueries("iziPay")}})},Dt=S.div`
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
`,Bt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,height:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:$t}=D,{IZI_PAY_PUBLIC_KEY:Kt,REACT_APP_IZI_PAY_URL:Ft}=$t,Oe=a=>{const{open:n,setOpen:s,userDebt:l}=a,{id:o,amount_cancellation:d}=l!=null?l:{},{mutateAsync:m,isLoading:b}=xe(),{mutateAsync:f}=At(),{setIsLoading:p,setPaymentStatus:g,currentDebtId:v,setOperationUserDebt:N}=H(),{user:w}=ye(),k=E.exports.useCallback(async()=>{let R,z;if(!(!w||!o||!d)){v.current=o;try{await m({amount:d,debtId:o,type:2}).then(x=>{const{izipay:C,data:y}=x!=null?x:{},{operation_number:M}=y!=null?y:{},{answer:B}=C!=null?C:{},{formToken:A}=B!=null?B:{};return N(y),z=M,R=A,Mt.loadLibrary(Ft,Kt)}).then(({KR:x})=>x.setFormConfig({formToken:R,"kr-language":"es-PE"})).then(({KR:x})=>x.onSubmit(C=>{const{clientAnswer:y,hash:M}=C!=null?C:{};if(!z)throw new Error("Operation Number Error");return f({debtId:o,operationNumber:z,amount:d,rawClientAnswer:JSON.stringify(y),hash:M}),s(!1),g("SUCCESS"),!1})).then(({KR:x})=>x.addForm("#myPaymentForm")).then(({KR:x,result:C})=>{x.showForm(C.formId),p(!1)}).catch(x=>{throw new Error(x)})}catch(x){console.log(x.response),s(!1),p(!1),g("ERROR")}}},[d,v,o,m,p,s,N,g,w,f]);return E.exports.useEffect(()=>{p(b)},[b,p]),E.exports.useEffect(()=>{n&&k()},[k,n]),e(we,{open:n&&!b,onClose:()=>s(!n),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ce,{sx:Bt,children:u(Dt,{className:"IziPayForm",children:[e("img",{src:ht,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})})]})})})};Oe.defaultProps={};var me={},Ut=dt.exports;Object.defineProperty(me,"__esModule",{value:!0});var Re=me.default=void 0,Lt=Ut(ct()),Yt=mt,Vt=(0,Lt.default)((0,Yt.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");Re=me.default=Vt;const qt=S.div`
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
`,Gt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:640,height:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:Wt,ACCOUNT_NUMBER:Ht}=D,Ee=a=>{const n=O().signIn.OperationNumberModal,{open:s,setOpen:l,operationNumber:o,userDebt:d}=a,{amount_cancellation:m,limit_date:b}=d!=null?d:{},f=()=>u("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:n.operation}),e("h1",{className:"OperationNumberModal__h1",children:o!=null?o:""}),u("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(o!=null?o:"")},children:[e(Re,{}),n.copy]}),e("p",{className:"OperationNumberModal__p",children:n.current}),e("h2",{className:"OperationNumberModal__h2",children:Ht}),e("p",{className:"OperationNumberModal__p",children:n.interbank}),e("h2",{className:"OperationNumberModal__h2",children:Wt})]}),p=()=>{var g;return u("div",{className:"OperationNumberModal__section",children:[e("h3",{children:n.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${(g=m==null?void 0:m.toFixed(2))!=null?g:""}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${n.offer}: ${ee(b).format("DD/MM/YYYY")}`})]})};return e(we,{open:s,onClose:()=>l(!s),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ce,{sx:Gt,children:e(qt,{className:"OperationNumberModal",children:u("div",{className:"OperationNumberModal__container",children:[e("p",{className:"OperationNumberModal__paragraph",children:n.paragraph}),u("div",{className:"OperationNumberModal__content",children:[f(),p()]})]})})})})};Ee.defaultProps={};const{BREAKPOINTS:$}=D,Qt=S.div`
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
`,{CCI_ACCOUNT_NUMBER:Jt,ACCOUNT_NUMBER:Zt}=D,ze=a=>{const n=O().signIn.InformationClient,{userDebt:s}=a,[l,o]=E.exports.useState(!1),[d,m]=E.exports.useState(!1),[b,f]=E.exports.useState(),{id:p,amount_cancellation:g}=s!=null?s:{},{mutateAsync:v,reset:N,isLoading:w}=xe(),{setIsLoading:k,setPaymentStatus:R}=H();E.exports.useEffect(()=>{k(w)},[w,k]);const z=()=>{R("NONE"),m(!d)},x=async()=>{R("NONE");try{g&&p&&(await v({amount:g,debtId:p}).then(C=>{const{data:y}=C!=null?C:{},{operation_number:M}=y!=null?y:{};f(M)}).catch(),o(!l),N())}catch(C){R("ERROR"),console.log(C)}};return u(Qt,{className:"InformationClient",children:[u("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:n.title}),e("h2",{className:"InformationClient__subtitle",children:n.subtitle}),e("img",{className:"InformationClient__image1",src:Rt,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:n.subtitle2}),u("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:Ot,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:Tt,alt:"iconMasterCardInformation"})]}),e(ce,{className:"InformationClient__button",variant:"contained",disabled:w,onClick:z,children:e("h3",{className:"InformationClient__text1",children:n.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:Et,alt:"lineInformation"}),u("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:n.title2}),u("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:n.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:Zt}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:Jt}),e("p",{className:"InformationClient__paragraph",children:n.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:n.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(ce,{className:"InformationClient__button2",variant:"contained",onClick:x,disabled:w,children:e("h3",{className:"InformationClient__text2",children:n.button2.toLocaleUpperCase()})})})]}),e(Oe,{open:d,setOpen:m,operationNumber:b,userDebt:s}),e(Ee,{open:l,setOpen:o,operationNumber:b,userDebt:s})]})};ze.defaultProps={};const Xt="/CodiShark/assets/rejectedImage.25910230.svg",en=S.div`
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
`,Me=a=>{const n=O().signIn.PaymentRejected,{setPaymentStatus:s}=H();return e(en,{className:"PaymentRejected",children:e("div",{className:"PaymentRejected__container",children:u("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:Xt,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:n.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:n.disapproved}),e(ce,{className:"PaymentRejected__button",variant:"contained",onClick:()=>s("NONE"),children:e("h3",{className:"PaymentRejected__text",children:n.button})})]})})})};Me.defaultProps={};const tn="/CodiShark/assets/lineSucces.23eb9802.svg",nn="/CodiShark/assets/successImage.38cb00ed.svg",rn=S.div`
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
`,je=a=>{var b;const n=O().signIn.PaymentRejected,{operationUserDebt:s}=H(),{amount_paid:l,operation_date:o,operation_time:d}=s!=null?s:{},m=ee(o).format("DD/MM/YYYY");return e(rn,{className:"PaymentSuccess",children:u("div",{className:"PaymentSuccess__container",children:[u("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:nn,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:n.success}),e("h2",{className:"PaymentSuccess__subtitle",children:n.approved})]}),e("img",{src:tn,alt:"lineSuccess"}),u("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:n.title}),u("div",{className:"PaymentSuccess__paragraph",children:[u("div",{className:"PaymentSuccess__p1div",children:[e("p",{className:"PaymentSuccess__p1",children:n.paragraph1}),e("span",{className:"PaymentSuccess__span1",children:(b=`S./ ${l==null?void 0:l.toFixed(2)}`)!=null?b:"-"})]}),e("div",{className:"PaymentSuccess__p2div",children:u("p",{className:"PaymentSuccess__p2",children:[n.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:m})]})}),e("div",{className:"PaymentSuccess__p3div",children:u("p",{className:"PaymentSuccess__p3",children:[n.paragraph3,e("span",{className:"PaymentSuccess__span3",children:d})]})})]})]})]})})};je.defaultProps={};const an=S.div`
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
`,Ae=a=>{const{data:n}=a,{paymentStatus:s,currentDebtId:l}=H(),{id:o}=n!=null?n:{},d=lt().global.table.TableDebtUser.TableRowsExpand,m=(f,p)=>u("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${f} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:p!=null?p:"-"})]}),b=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return u(an,{className:"DebtExpandableRowsComponent",children:[u("div",{className:"DebtExpandableRowsComponent__container__expand",children:[m(d.entity,n==null?void 0:n.banking_entity),b(),m(d.typeDebt,n==null?void 0:n.product),b(),m(d.typeExchange,n==null?void 0:n.currency),b(),m(d.date,ee(n==null?void 0:n.limit_date).format("DD / MM / YYYY"))]}),s==="SUCCESS"&&l.current===o&&e(je,{}),s==="ERROR"&&l.current===o&&e(Me,{}),(s==="NONE"||l.current!==o)&&e(ze,{userDebt:n})]})};Ae.defaultProps={};const{BREAKPOINTS:ge}=D,on=S.div`
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
`,De=a=>{const{rowsPerPage:n,rowCount:s}=a,{currentPage:l,onChangePage:o}=a,d=O().global.table.TableDebtUser.Pagination,m=Nt(s,n),b=Ct(m),p=l*n-n+1,g=l===1,v=l===m,N=E.exports.useCallback(()=>o(l-1),[l,o]),w=E.exports.useCallback(()=>o(l+1),[l,o]),k=E.exports.useCallback(y=>o(y),[o]),R=y=>e("div",{...y,children:y==null?void 0:y.value}),z=d.legend(p,s,s),x=y=>`Pagination__text--bold ${y?"Pagination__text--disabled":""}`,C=y=>`Pagination__container--numbers ${y===l?"Pagination__container--numbers-activated":""}`;return e(on,{className:"Pagination",children:u("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:z}),u("div",{className:"Pagination__container--pagination",children:[e("button",{className:x(g),"aria-disabled":g,onClick:N,disabled:g,children:d.back}),b.map((y,M)=>e(R,{value:y,className:C(y),onClick:()=>k(y)},M)),e("button",{className:x(v),"aria-disabled":v,onClick:w,disabled:v,children:d.next})]})]})})};De.defaultProps={};const{BREAKPOINTS:sn}=D,Q=S.div`
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
`,ln=a=>e(De,{...a}),Be=a=>{const{data:n,columns:s,expandableRows:l,expandableRowsComponent:o}=a,{progressPending:d,expandOnRowClicked:m,expandableRowExpanded:b}=a;return e(Q,{className:"DebtTable",children:e(yt,{columns:s,data:n,expandableRows:l,expandableRowsComponent:o,expandOnRowClicked:m,paginationPerPage:wt,paginationRowsPerPageOptions:xt,expandableRowExpanded:b,paginationComponent:ln,expandableIcon:{collapsed:null,expanded:null},progressPending:d,hiddenHeadRow:!0})})};Be.defaultProps={};const cn=S.div`
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
`,$e=a=>{const n=O().signIn.IndicatorsClientOne,{user:s}=ye(),{first_name:l,last_name:o,mother_last_name:d,dni:m}=s!=null?s:{};return e(cn,{className:"IndicatorsClientOne",children:u("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:n.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${l!=null?l:""} ${o!=null?o:""} ${d!=null?d:""}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:`DNI N\xB0 ${m!=null?m:""}`})]})})};$e.defaultProps={};const dn=S.div`
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
`,Ke=a=>{var l;const n=O().signIn.IndicatorsClientTwo,{total_debts:s}=a;return e(dn,{className:"IndicatorsClientTwo",children:u("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:n.debt}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(l=s==null?void 0:s.toFixed(2))!=null?l:""}`})]})})};Ke.defaultProps={};const mn="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",un=S.div`
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
`,Fe=a=>{const n=O().signIn.PanelBannerClient;return e(un,{className:"PanelBannerClient",children:u("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:mn,alt:"personIcon"})}),u("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:n.title}),u("div",{className:"PanelBannerClient__section",children:[e("p",{children:n.paragraph1}),e("p",{children:n.paragraph2}),e("p",{children:n.paragraph3})]})]})]})})};Fe.defaultProps={};const hn=S.div`
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
`,ue=a=>{const{title:n,children:s}=a;return u(hn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:n}),e("div",{className:"SummaryCard__subtitle",children:s})]})};ue.defaultProps={};const de=a=>{const{content:n,isDate:s}=a,l=O().global.table.TableDebtUser.TableRows,o=()=>s?l.deadline:l.amount,d=()=>s?n:`S/. ${n!=null?n:""}`,m=()=>s?"DebtTable__text--date":"DebtTable__text--title";return e(Q,{className:"DebtTable",children:e(ue,{title:o(),children:e("h3",{className:m(),children:d()})})})};de.defaultProps={isDate:!1};const fn=a=>{var o,d;const{price:n,discount:s}=a,l=O().global.table.TableDebtUser.TableRows;return e(Q,{className:"DebtTable",children:e(ue,{title:l.discount,children:u("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${(o=n==null?void 0:n.toFixed(2))!=null?o:""}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${(d=Math.round(s*100))!=null?d:""} %`})})]})})})},pn=a=>{const{expand:n}=a,s=O().global.table.TableDebtUser.TableRows,[l,o]=E.exports.useState(n),d=()=>l?e(gt,{}):e(bt,{});return e(Q,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>o(!l),children:u("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[s.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:d()})]})})},be=()=>e(Q,{className:"DebtTable__container--divider"}),{BREAKPOINTS:ve}=D,_n=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(de,{content:a==null?void 0:a.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:ve.desktop,cell:()=>e(be,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"24rem",cell:a=>e(fn,{price:a==null?void 0:a.amount_cancellation,discount:a==null?void 0:a.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:ve.desktop,cell:()=>e(be,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(de,{content:ee(a==null?void 0:a.limit_date).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:a=>{var n;return e(pn,{expand:(n=a==null?void 0:a.defaultExpanded)!=null?n:!1})}}],{BREAKPOINTS:le}=D,gn=S.div`
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
`,Ue=a=>{const n=O().signIn.ClientContainer,{data:s,isLoading:l}=vt(),{data:o,total_debts:d}=s!=null?s:{};o&&(o==null?void 0:o.length)>0&&(o[0].defaultExpanded=!0);const m=()=>l?u(X,{children:[e(W,{variant:"rounded",height:124,width:"100%"}),e(W,{variant:"rounded",height:124,width:"100%"})]}):u(X,{children:[e($e,{}),e(Ke,{total_debts:d})]}),b=()=>l?e(W,{variant:"rounded",height:400,width:"100%"}):e(Be,{data:o!=null?o:[],columns:_n,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Ae,expandableRowExpanded:p=>p.defaultExpanded,progressPending:l}),f=()=>l?u(X,{children:[e(W,{variant:"rounded",height:280,width:"100%"}),e(W,{variant:"rounded",height:480,width:"100%"})]}):u(X,{children:[e(Ne,{}),e(Pe,{})]});return e(ut,{children:u(gn,{className:"ClientContainer",children:[u("div",{className:"ClientContainer__section3",children:[u("div",{className:"ClientContainer__section1",children:[e(Fe,{}),e("div",{className:"ClientContainer__section2",children:m()})]}),e("h2",{className:"ClientContainer__title",children:n.title}),b()]}),e("div",{className:"ClientContainer__section4",children:f()})]})})};Ue.defaultProps={};const En=Ue;export{En as default};
