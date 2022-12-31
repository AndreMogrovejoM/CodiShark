import{A as Ot}from"./AdministratorPanel.container.f1b03509.js";import{S as Ye,P as Rt,A as Tt,a as oe,i as re}from"./SwipperComponent.be848ee8.js";import{a as e,s as R,C as z,j as c,af as _e,a4 as Et,a2 as zt,E as xe,r as O,ag as de,G as j}from"./index.7494b9e3.js";import{u as $,g as $t}from"./i18n.hooks.710219a4.js";import{u as X,r as Ve,i as qe,a as We,I as Mt,L as Dt}from"./Layout.container.b855285e.js";import{l as jt}from"./logoKonecta.28094d6a.js";import{g as At,t as Bt,w as Kt,x as Ft,n as Ge,C as Ut,D as Lt,E as Yt}from"./validations.utils.3b06e1db.js";import{u as Ce,a as Vt,b as He}from"./users.service.hooks.8d1d8aca.js";import{S as qt}from"./sweetalert2.all.b54987f9.js";import{B as Qe}from"./Box.77cdc8b2.js";import{n as ie,g as Wt,a as Gt}from"./common.utils.106d572f.js";import{B as J}from"./Button.1ffb1947.js";import{T as Ht}from"./Table.75a5f2ce.js";import{d as Ze,a as ce}from"./Remove.2eb5323b.js";import{S as W}from"./SkeletonComponent.b3058608.js";import Qt from"./404.page.8aade60e.js";import"./administrator.service.hooks.363c98d6.js";const Zt=At(e("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline"),Jt="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",{BREAKPOINTS:Xt}=z,en=R.div`
  position: relative;
  width: 100%;
  max-height: 30rem;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;

  @media screen and (min-width: ${Xt.wide}px) {
    max-width: 32rem;
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
`,Je=a=>{const n=$().signIn.CardImageOne;return c(en,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:Jt,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:n.subtitle}),e("h2",{className:"CardImageOne__title",children:n.title})]})};Je.defaultProps={};const tn="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",{BREAKPOINTS:De}=z,nn=R.div`
  position: relative;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;

  @media screen and (min-width: ${De.wide}px) {
    max-width: 32rem;
  }

  .CardImageTwo {
    &__section {
      position: absolute;
      display: flex;
      flex-direction: column;
      bottom: 2.4rem;
      left: 1.6rem;

      @media screen and (min-width: ${De.wide}px) {
        left: 4rem;
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
`,Xe=a=>{const n=$().signIn.CardImageTwo;return c(nn,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:tn,alt:"fotoMujerOne"}),c("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:n.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:n.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:n.subtitle3})]})]})};Xe.defaultProps={};const an="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",rn="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",on="/CodiShark/assets/imagePayInformation.de64d6a1.svg",sn="/CodiShark/assets/lineInformation.84349c20.svg";var et={},tt={};function ln(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var nt={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(a,n){(function(i,l){a.exports=l()})(_e,function(){function i(t){var r=typeof t;return t!==null&&(r==="object"||r==="function")}function l(t){return typeof t=="function"}var s=void 0;Array.isArray?s=Array.isArray:s=function(t){return Object.prototype.toString.call(t)==="[object Array]"};var m=s,u=0,y=void 0,h=void 0,p=function(r,o){P[u]=r,P[u+1]=o,u+=2,u===2&&(h?h(S):F())};function _(t){h=t}function b(t){p=t}var C=typeof window<"u"?window:void 0,w=C||{},N=w.MutationObserver||w.WebKitMutationObserver,T=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",I=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function A(){return function(){return process.nextTick(S)}}function K(){return typeof y<"u"?function(){y(S)}:x()}function v(){var t=0,r=new N(S),o=document.createTextNode("");return r.observe(o,{characterData:!0}),function(){o.data=t=++t%2}}function M(){var t=new MessageChannel;return t.port1.onmessage=S,function(){return t.port2.postMessage(0)}}function x(){var t=setTimeout;return function(){return t(S,1)}}var P=new Array(1e3);function S(){for(var t=0;t<u;t+=2){var r=P[t],o=P[t+1];r(o),P[t]=void 0,P[t+1]=void 0}u=0}function H(){try{var t=Function("return this")().require("vertx");return y=t.runOnLoop||t.runOnContext,K()}catch{return x()}}var F=void 0;T?F=A():N?F=v():I?F=M():C===void 0&&typeof ln=="function"?F=H():F=x();function Q(t,r){var o=this,d=new this.constructor(Y);d[Z]===void 0&&Me(d);var f=o._state;if(f){var g=arguments[f-1];p(function(){return ze(f,d,g,o._result)})}else ue(o,d,t,r);return d}function ee(t){var r=this;if(t&&typeof t=="object"&&t.constructor===r)return t;var o=new r(Y);return ae(o,t),o}var Z=Math.random().toString(36).substring(2);function Y(){}var V=void 0,U=1,L=2;function me(){return new TypeError("You cannot resolve a promise with itself")}function pt(){return new TypeError("A promises callback cannot return that same promise.")}function ft(t,r,o,d){try{t.call(r,o,d)}catch(f){return f}}function _t(t,r,o){p(function(d){var f=!1,g=ft(o,r,function(k){f||(f=!0,r!==k?ae(d,k):q(d,k))},function(k){f||(f=!0,E(d,k))},"Settle: "+(d._label||" unknown promise"));!f&&g&&(f=!0,E(d,g))},t)}function gt(t,r){r._state===U?q(t,r._result):r._state===L?E(t,r._result):ue(r,void 0,function(o){return ae(t,o)},function(o){return E(t,o)})}function Ee(t,r,o){r.constructor===t.constructor&&o===Q&&r.constructor.resolve===ee?gt(t,r):o===void 0?q(t,r):l(o)?_t(t,r,o):q(t,r)}function ae(t,r){if(t===r)E(t,me());else if(i(r)){var o=void 0;try{o=r.then}catch(d){E(t,d);return}Ee(t,r,o)}else q(t,r)}function bt(t){t._onerror&&t._onerror(t._result),he(t)}function q(t,r){t._state===V&&(t._result=r,t._state=U,t._subscribers.length!==0&&p(he,t))}function E(t,r){t._state===V&&(t._state=L,t._result=r,p(bt,t))}function ue(t,r,o,d){var f=t._subscribers,g=f.length;t._onerror=null,f[g]=r,f[g+U]=o,f[g+L]=d,g===0&&t._state&&p(he,t)}function he(t){var r=t._subscribers,o=t._state;if(r.length!==0){for(var d=void 0,f=void 0,g=t._result,k=0;k<r.length;k+=3)d=r[k],f=r[k+o],d?ze(o,d,f,g):f(g);t._subscribers.length=0}}function ze(t,r,o,d){var f=l(o),g=void 0,k=void 0,te=!0;if(f){try{g=o(d)}catch(le){te=!1,k=le}if(r===g){E(r,pt());return}}else g=d;r._state!==V||(f&&te?ae(r,g):te===!1?E(r,k):t===U?q(r,g):t===L&&E(r,g))}function yt(t,r){try{r(function(d){ae(t,d)},function(d){E(t,d)})}catch(o){E(t,o)}}var $e=0;function vt(){return $e++}function Me(t){t[Z]=$e++,t._state=void 0,t._result=void 0,t._subscribers=[]}function wt(){return new Error("Array Methods must be provided an Array")}var xt=function(){function t(r,o){this._instanceConstructor=r,this.promise=new r(Y),this.promise[Z]||Me(this.promise),m(o)?(this.length=o.length,this._remaining=o.length,this._result=new Array(this.length),this.length===0?q(this.promise,this._result):(this.length=this.length||0,this._enumerate(o),this._remaining===0&&q(this.promise,this._result))):E(this.promise,wt())}return t.prototype._enumerate=function(o){for(var d=0;this._state===V&&d<o.length;d++)this._eachEntry(o[d],d)},t.prototype._eachEntry=function(o,d){var f=this._instanceConstructor,g=f.resolve;if(g===ee){var k=void 0,te=void 0,le=!1;try{k=o.then}catch(fe){le=!0,te=fe}if(k===Q&&o._state!==V)this._settledAt(o._state,d,o._result);else if(typeof k!="function")this._remaining--,this._result[d]=o;else if(f===D){var pe=new f(Y);le?E(pe,te):Ee(pe,o,k),this._willSettleAt(pe,d)}else this._willSettleAt(new f(function(fe){return fe(o)}),d)}else this._willSettleAt(g(o),d)},t.prototype._settledAt=function(o,d,f){var g=this.promise;g._state===V&&(this._remaining--,o===L?E(g,f):this._result[d]=f),this._remaining===0&&q(g,this._result)},t.prototype._willSettleAt=function(o,d){var f=this;ue(o,void 0,function(g){return f._settledAt(U,d,g)},function(g){return f._settledAt(L,d,g)})},t}();function Ct(t){return new xt(this,t).promise}function Nt(t){var r=this;return m(t)?new r(function(o,d){for(var f=t.length,g=0;g<f;g++)r.resolve(t[g]).then(o,d)}):new r(function(o,d){return d(new TypeError("You must pass an array to race."))})}function Pt(t){var r=this,o=new r(Y);return E(o,t),o}function It(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function St(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var D=function(){function t(r){this[Z]=vt(),this._result=this._state=void 0,this._subscribers=[],Y!==r&&(typeof r!="function"&&It(),this instanceof t?yt(this,r):St())}return t.prototype.catch=function(o){return this.then(null,o)},t.prototype.finally=function(o){var d=this,f=d.constructor;return l(o)?d.then(function(g){return f.resolve(o()).then(function(){return g})},function(g){return f.resolve(o()).then(function(){throw g})}):d.then(o,o)},t}();D.prototype.then=Q,D.all=Ct,D.race=Nt,D.resolve=ee,D.reject=Pt,D._setScheduler=_,D._setAsap=b,D._asap=p;function kt(){var t=void 0;if(typeof _e<"u")t=_e;else if(typeof self<"u")t=self;else try{t=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var r=t.Promise;if(r){var o=null;try{o=Object.prototype.toString.call(r.resolve())}catch{}if(o==="[object Promise]"&&!r.cast)return}t.Promise=D}return D.polyfill=kt,D.Promise=D,D})})(nt);nt.exports.polyfill();var it={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(l,s,m){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,y=function h(){l[s]?m():setTimeout(h,u)};setTimeout(y,0)};a.default=n})(it);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(it);function i(h){return h&&h.__esModule?h:{default:h}}function l(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function s(h,p){for(var _=0;_<p.length;_++){var b=p[_];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(h,b.key,b)}}function m(h,p,_){return p&&s(h.prototype,p),_&&s(h,_),Object.defineProperty(h,"prototype",{writable:!1}),h}var u=function(){function h(){return l(this,h),h.instance?h.instance:(h.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return m(h,[{key:"loadLibrary",value:function(_,b){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,w=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,N=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(b):_?b?w.test(_)?N.test(b)?(this.domain=_,this.publicKey=b,this.formToken=C,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(b,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(_,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var _=this;if(!this.loading){var b=this.publicKey,C=this.domain;this.loading=!0;var w=document.createElement("script");w.type="text/javascript",/^.+\/$/.test(C)||(C+="/"),w.src="".concat(C,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),w.setAttribute("kr-public-key",b),w.setAttribute("kr-spa-mode","true"),this.formToken&&w.setAttribute("kr-form-token",this.formToken);var N=document.querySelector('script[src="'.concat(w.src,'"]'));!N&&document.body?document.body.appendChild(w):document.body||console.warn("document.body is undefined")}return new Promise(function(T){(0,n.default)(window,"KR",function(){(0,n.default)(window.KR,"ready",function(){_.loaded=!0,_.loading=!1,T({KR:window.KR})})})})}},{key:"getKrypton",value:function(_){var b=this;return new Promise(function(C,w){_&&_!==b.publicKey?window.KR.setFormConfig({publicKey:_}).then(C).catch(w):C({KR:window.KR})})}}]),h}(),y=new u;a.default=y})(tt);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(tt);function i(s){return s&&s.__esModule?s:{default:s}}var l=n.default;a.default=l})(et);const cn=Et(et),dn="/CodiShark/assets/americanExpress.04220897.svg",mn="/CodiShark/assets/dinersClub.c0623661.svg",un="/CodiShark/assets/masterCard.c474b58f.svg",hn="/CodiShark/assets/visa.82da6032.svg",pn=async a=>{const{amount:n,debtId:i,operationNumber:l,hash:s,rawClientAnswer:m}=a;console.log(a);try{return await Bt.post("/operations/validate",{debt_id:i,amount:n,operation_number:l,hash:s,rawClientAnswer:m},{headers:Kt()})}catch(u){throw console.log(u),new Error(u.message)}},fn=()=>{const a=zt();return Ft(pn,{onMutate:async()=>{await a.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{a.invalidateQueries("iziPay")}})},_n=R.div`
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
`,gn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,minHeight:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:bn}=z,{IZI_PAY_PUBLIC_KEY:yn,REACT_APP_IZI_PAY_URL:vn}=bn,Ne=a=>{const{open:n,setOpen:i,userDebt:l}=a,{id:s,amount_cancellation:m}=l!=null?l:{},{mutateAsync:u,isLoading:y}=Ce(),{mutateAsync:h}=Vt(),{mutateAsync:p,reset:_}=fn(),{currentDebtId:b,setOperationUserDebt:C}=X(),{setIsLoading:w,setPaymentStatus:N}=X(),{user:T}=xe(),{refetch:I}=He(),A=O.exports.useCallback(v=>{console.warn(v),i(!1),w(!1),N("ERROR"),qt.fire("Error",v,"error")},[w,i,N]),K=O.exports.useCallback(async()=>{let v,M;if(!(!T||!s||!m)){b.current=s;try{await u({amount:m,debtId:s,type:2}).then(x=>{const{izipay:P,data:S}=x!=null?x:{},{operation_number:H}=S!=null?S:{},{answer:F}=P!=null?P:{},{formToken:Q}=F!=null?F:{};return C(S),M=H,v=Q,cn.loadLibrary(vn,yn)}).then(({KR:x})=>x.setFormConfig({formToken:v,"kr-language":"es-PE"})).then(({KR:x})=>x.onSubmit(async P=>{const{clientAnswer:S,hash:H}=P!=null?P:{};if(!M)throw new Error("Operation Number Error");return p({debtId:s,operationNumber:M,amount:m,rawClientAnswer:JSON.stringify(S),hash:H}),I(),_(),i(!1),N("SUCCESS"),!1})).then(({KR:x})=>x.onError(async P=>{throw await h({debtId:s,operationNumber:M}),A(P.detailedErrorMessage),new Error("detailedErrorMessage")})).then(({KR:x})=>x.addForm("#myPaymentForm")).then(({KR:x,result:P})=>{x.showForm(P.formId),w(!1)}).catch(x=>{throw new Error(x)})}catch(x){A(x)}}},[m,b,s,h,A,u,I,_,w,i,C,N,T,p]);return O.exports.useEffect(()=>{w(y)},[y,w]),O.exports.useEffect(()=>{n&&K()},[K,n]),e(Ge,{open:n&&!y,onClose:()=>i(!n),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Qe,{sx:gn,children:c(_n,{className:"IziPayForm",children:[e("img",{src:jt,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})}),c("div",{className:"IziPayForm__images",children:[e("img",{className:"IziPayForm__image",src:hn,alt:"visa"}),e("img",{className:"IziPayForm__image",src:dn,alt:"americanExpress"}),e("img",{className:"IziPayForm__image",src:mn,alt:"dinersClub"}),e("img",{className:"IziPayForm__image",src:un,alt:"masterCard"})]})]})})})};Ne.defaultProps={};var Pe={},wn=qe.exports;Object.defineProperty(Pe,"__esModule",{value:!0});var at=Pe.default=void 0,xn=wn(Ve()),Cn=We,Nn=(0,xn.default)((0,Cn.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");at=Pe.default=Nn;var Ie={},Pn=qe.exports;Object.defineProperty(Ie,"__esModule",{value:!0});var rt=Ie.default=void 0,In=Pn(Ve()),Sn=We,kn=(0,In.default)((0,Sn.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");rt=Ie.default=kn;const On=R.div`
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
`,Rn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:320,maxWidth:640,minHeight:320,bgcolor:"var(--palette-white)",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:je,ACCOUNT_NUMBER:Ae}=z,Se=a=>{const n=$().signIn.OperationNumberModal,{open:i,setOpen:l,operationNumber:s,userDebt:m}=a,{amount_cancellation:u,limit_date:y}=m!=null?m:{},h=()=>c("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:n.operation}),e("h1",{className:"OperationNumberModal__h1",children:s!=null?s:""}),c("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(`${n.operation}: 
`+(s!=null?s:"")+`
${n.current}:
${Ae}
${n.interbank}:
${je}`)},children:[e(at,{}),n.copy]}),e("p",{className:"OperationNumberModal__p",children:n.current}),e("h2",{className:"OperationNumberModal__h2",children:Ae}),e("p",{className:"OperationNumberModal__p",children:n.interbank}),e("h2",{className:"OperationNumberModal__h2",children:je})]}),p=()=>c("div",{className:"OperationNumberModal__section",children:[e("h3",{children:n.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${ie(u!=null?u:0)}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${n.offer}: ${de(y).format("DD/MM/YYYY")}`})]});return e(Ge,{open:i,onClose:()=>l(!i),children:e(Qe,{sx:Rn,children:c(On,{className:"OperationNumberModal",children:[e(Mt,{className:"OperationNumberModal__closeIcon",onClick:()=>l(!i),children:e(rt,{className:"OperationNumberModal__closeIcon--icon",fontSize:"large",color:"error"})}),e("p",{className:"OperationNumberModal__paragraph",children:n.paragraph}),c("div",{className:"OperationNumberModal__content",children:[h(),p()]})]})})})};Se.defaultProps={};const{BREAKPOINTS:G}=z,Tn=R.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin-top: 2.4rem;
  gap: 2rem;

  @media screen and (min-width: ${G.tablet}px) {
    padding: 1.6rem 2.4rem;
    margin: 2.4rem auto;
  }

  @media screen and (min-width: ${G.desktop}px) {
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

      @media screen and (min-width: ${G.desktop}px) {
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

      @media screen and (min-width: ${G.mobile}px) {
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

      @media screen and (min-width: ${G.mobile}px) {
        display: flex;
      }
    }

    &__container {
      &--button {
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${G.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${G.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${G.desktop}px) {
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

      @media screen and (min-width: ${G.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:En,ACCOUNT_NUMBER:zn}=z,ot=a=>{const n=$().signIn.InformationClient,{userDebt:i,hiddenMobile:l}=a,[s,m]=O.exports.useState(!1),[u,y]=O.exports.useState(!1),[h,p]=O.exports.useState(),{id:_,amount_cancellation:b}=i!=null?i:{},{mutateAsync:C,reset:w,isLoading:N}=Ce(),{setIsLoading:T,setPaymentStatus:I}=X();O.exports.useEffect(()=>{T(N)},[N,T]);const A=()=>{I("NONE"),y(!u)},K=async()=>{I("NONE");try{b&&_&&(await C({amount:b,debtId:_}).then(v=>{const{data:M}=v!=null?v:{},{operation_number:x}=M!=null?M:{};p(x)}).catch(),m(!s),w())}catch(v){I("ERROR"),console.log(v)}};return c(Tn,{className:"InformationClient",hiddenMobile:l,children:[c("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:n.title}),e("h2",{className:"InformationClient__subtitle",children:n.subtitle}),e("img",{className:"InformationClient__image1",src:on,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:n.subtitle2}),c("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:rn,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:an,alt:"iconMasterCardInformation"})]}),e(J,{className:"InformationClient__button",variant:"contained",disabled:N,onClick:A,children:e("h3",{className:"InformationClient__text1",children:n.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:sn,alt:"lineInformation"}),c("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:n.title2}),c("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:n.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:zn}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:En}),e("p",{className:"InformationClient__paragraph",children:n.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:n.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(J,{className:"InformationClient__button2",variant:"contained",onClick:K,disabled:N,children:e("h3",{className:"InformationClient__text2",children:n.button2.toLocaleUpperCase()})})})]}),e(Ne,{open:u,setOpen:y,operationNumber:h,userDebt:i}),e(Se,{open:s,setOpen:m,operationNumber:h,userDebt:i})]})};ot.defaultProps={};const $n="/CodiShark/assets/rejectedImage.25910230.svg",Mn=R.div`
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
`,ke=a=>{const n=$().signIn.PaymentRejected,{setPaymentStatus:i}=X();return e(Mn,{className:"PaymentRejected",children:e("div",{className:"PaymentRejected__container",children:c("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:$n,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:n.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:n.disapproved}),e(J,{className:"PaymentRejected__button",variant:"contained",onClick:()=>i("NONE"),children:e("h3",{className:"PaymentRejected__text",children:n.button})})]})})})};ke.defaultProps={};const Dn="/CodiShark/assets/successImage.38cb00ed.svg",{BREAKPOINTS:ne}=z,jn=R.div`
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

      @media screen and (min-width: ${ne.mobile}px) {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.4rem;

      @media screen and (min-width: ${ne.mobile}px) {
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

      @media screen and (min-width: ${ne.mobile}px) {
        gap: 3.2rem;
      }
    }

    &__title2 {
      font-weight: 540;
      font-size: 1.6rem;
      text-align: center;

      @media screen and (min-width: ${ne.mobile}px) {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }

    &__divider {
      border-top: 0.04rem solid var(--palette-darkShadow);

      @media screen and (min-width: ${ne.mobile}px) {
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

        @media screen and (min-width: ${ne.mobile}px) {
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
`,Oe=a=>{var y;const n=$().signIn.PaymentRejected,{operationUserDebt:i}=X(),{amount_paid:l,operation_date:s,operation_time:m}=i!=null?i:{},u=de(s).format("DD/MM/YYYY");return e(jn,{className:"PaymentSuccess",children:c("div",{className:"PaymentSuccess__container",children:[c("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:Dn,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:n.success}),e("h2",{className:"PaymentSuccess__subtitle",children:n.approved})]}),e("div",{className:"PaymentSuccess__divider"}),c("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:n.title}),c("div",{className:"PaymentSuccess__paragraph",children:[e("div",{className:"PaymentSuccess__package",children:c("p",{className:"PaymentSuccess__p1",children:[n.paragraph4,e("span",{className:"PaymentSuccess__span1",children:(y=`S/. ${ie(l!=null?l:0)}`)!=null?y:"-"})]})}),e("div",{className:"PaymentSuccess__p2div",children:c("p",{className:"PaymentSuccess__p2",children:[n.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:u})]})}),e("div",{className:"PaymentSuccess__p3div",children:c("p",{className:"PaymentSuccess__p3",children:[n.paragraph3,e("span",{className:"PaymentSuccess__span3",children:m!=null?m:"-"})]})})]})]})]})})};Oe.defaultProps={};const An=R.div`
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
`,Re=a=>{const{data:n}=a,{paymentStatus:i,currentDebtId:l}=X(),{id:s}=n!=null?n:{},m=$t().global.table.TableDebtUser.TableRowsExpand,u=(h,p)=>c("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${h} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:p!=null?p:"-"})]}),y=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return c(An,{className:"DebtExpandableRowsComponent",children:[c("div",{className:"DebtExpandableRowsComponent__container__expand",children:[u(m.entity,n==null?void 0:n.banking_entity),y(),u(m.typeDebt,n==null?void 0:n.product),y(),u(m.typeExchange,n==null?void 0:n.currency),y(),u(m.date,de(n==null?void 0:n.limit_date).format("DD / MM / YYYY"))]}),i==="SUCCESS"&&l.current===s&&e(Oe,{}),i==="ERROR"&&l.current===s&&e(ke,{}),(i==="NONE"||l.current!==s)&&e(ot,{userDebt:n,hiddenMobile:!0})]})};Re.defaultProps={};const{BREAKPOINTS:Be}=z,Bn=R.div`
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
`,st=a=>{const{rowsPerPage:n,rowCount:i}=a,{currentPage:l,onChangePage:s}=a,m=$().global.table.TableDebtUser.Pagination,u=Gt(i,n),y=Wt(u),p=l*n-n+1,_=l===1,b=l===u,C=O.exports.useCallback(()=>s(l-1),[l,s]),w=O.exports.useCallback(()=>s(l+1),[l,s]),N=O.exports.useCallback(v=>s(v),[s]),T=v=>e("div",{...v,children:v==null?void 0:v.value}),I=m.legend(p,i,i),A=v=>`Pagination__text--bold ${v?"Pagination__text--disabled":""}`,K=v=>`Pagination__container--numbers ${v===l?"Pagination__container--numbers-activated":""}`;return e("div",{className:"DebtTable__component--pagination",children:e(Bn,{className:"Pagination",children:c("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:I}),c("div",{className:"Pagination__container--pagination",children:[e("button",{className:A(_),"aria-disabled":_,onClick:C,disabled:_,children:m.back}),y.map((v,M)=>e(T,{value:v,className:K(v),onClick:()=>N(v)},M)),e("button",{className:A(b),"aria-disabled":b,onClick:w,disabled:b,children:m.next})]})]})})})};st.defaultProps={};const{BREAKPOINTS:Ke}=z,se=R.div`
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
`,Kn=a=>e(st,{...a}),lt=a=>{const{data:n,columns:i,expandableRows:l,expandableRowsComponent:s}=a,{progressPending:m,expandOnRowClicked:u,expandableRowExpanded:y}=a,{hiddenMobile:h}=a;return e(se,{className:"DebtTable",hiddenMobile:h,children:e(Ht,{columns:i,data:n,expandableRows:l,expandableRowsComponent:s,expandOnRowClicked:u,paginationPerPage:Ut,paginationRowsPerPageOptions:Lt,expandableRowExpanded:y,paginationComponent:Kn,expandableIcon:{collapsed:null,expanded:null},progressPending:m,hiddenHeadRow:!0,hiddenMobile:h})})};lt.defaultProps={};const{BREAKPOINTS:ge}=z,Fn=R.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${ge.mobile}px) {
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

        @media screen and (min-width: ${ge.mobile}px) {
          padding: 2.4rem 1.6rem;
          background-color: var(--palette-white);
        }

        @media screen and (min-width: ${ge.desktop}px) {
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
`,ye=a=>{const n=$().signIn.IndicatorsClientOne,{user:i}=xe(),{first_name:l,last_name:s,mother_last_name:m,dni:u}=i!=null?i:{};return e(Fn,{className:"IndicatorsClientOne",children:c("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:n.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${l!=null?l:""} ${s!=null?s:""} ${m!=null?m:""}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:`DNI N\xB0 ${u!=null?u:""}`})]})})};ye.defaultProps={};const{BREAKPOINTS:be}=z,Un=R.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (min-width: ${be.mobile}px) {
    width: 100%;
    height: auto;
  }

  .IndicatorsClientTwo {
    &__component {
      &--card {
        background-color: var(--palette-greyBackgroundSecond);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem 1.2rem;
        height: 100%;
        justify-content: center;

        @media screen and (min-width: ${be.mobile}px) {
          padding: 2.4rem 1.6rem;
          background-color: var(--palette-white);
        }

        @media screen and (min-width: ${be.desktop}px) {
          padding: 2.4rem;
        }
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
`,ve=a=>{var l;const n=$().signIn.IndicatorsClientTwo,{total_debts:i}=a;return e(Un,{className:"IndicatorsClientTwo",children:c("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:n.debt}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(l=ie(i!=null?i:0))!=null?l:""}`})]})})};ve.defaultProps={};const Ln="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",Yn=R.div`
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
`,ct=a=>{const n=$().signIn.PanelBannerClient;return e(Yn,{className:"PanelBannerClient",children:c("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:Ln,alt:"personIcon"})}),c("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:n.title}),c("div",{className:"PanelBannerClient__section",children:[e("p",{children:n.paragraph1}),e("p",{children:n.paragraph2}),e("p",{children:n.paragraph3})]})]})]})})};ct.defaultProps={};const{BREAKPOINTS:Fe}=z,Vn=R.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: ${Fe.mobile}px) {
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

      @media screen and (min-width: ${Fe.mobile}px) {
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
`,dt=a=>{var ee,Z,Y,V;const n=$().components.CardDebts,{data:i}=a,[l,s]=O.exports.useState(!1),[m,u]=O.exports.useState(!1),[y,h]=O.exports.useState(),{paymentStatus:p,currentDebtId:_,setIsLoading:b,setPaymentStatus:C}=X(),{mutateAsync:w,reset:N,isLoading:T}=Ce(),{id:I,amount_cancellation:A}=i!=null?i:{},[K,v]=O.exports.useState(!1);O.exports.useEffect(()=>{b(T)},[T,b]);const M=()=>{C("NONE"),u(!m)},x=async()=>{C("NONE");try{A&&I&&(await w({amount:A,debtId:I}).then(U=>{const{data:L}=U!=null?U:{},{operation_number:me}=L!=null?L:{};h(me),v(!0)}).catch(),s(!l),N())}catch(U){C("ERROR"),v(!0),console.log(U)}},P=()=>v(!K),S=()=>"CardDebts__component--button CardDebts__text--button",H=()=>e(J,{variant:"contained",className:`${S()}`,onClick:P,children:c(j,{children:[n.buttonExpand,K?e(Ze,{fontSize:"small"}):e(ce,{fontSize:"small"})]})}),F=()=>K&&c(j,{children:[(p==="NONE"||_.current!==I)&&e(Re,{data:i}),p==="SUCCESS"&&_.current===I&&e(Oe,{}),p==="ERROR"&&_.current===I&&e(ke,{})]}),Q=()=>c("div",{className:"CardDebts__container--buttons",children:[(p==="NONE"||p==="ERROR"||_.current!==I)&&c(j,{children:[e(J,{variant:"contained",className:`${S()} CardDebts__component--button-blue  CardDebts__text--button-pay`,disabled:T,onClick:M,children:c(j,{children:[n.button,e(ce,{className:"CardDebts__component--icon"})]})}),e(J,{variant:"contained",className:`${S()} CardDebts__component--button-blue  CardDebts__text--button-pay`,onClick:x,disabled:T,children:c(j,{children:[n.button2,e(ce,{className:"CardDebts__component--icon"})]})})]}),p==="SUCCESS"&&_.current===I&&e(J,{variant:"contained",className:`${S()} CardDebts__component--button-blue  CardDebts__text--button-large`,children:c(j,{children:[n.buttonPayment,e(Zt,{className:"CardDebts__component--icon",fontSize:"large"})]})})]});return c(Vn,{className:"CardDebts",children:[c("div",{className:"CardDebts__component",children:[c("div",{className:"CardDebts__container--components",children:[e("p",{className:"CardDebts__text--title CardDebts__text--blue",children:(ee=i==null?void 0:i.banking_entity)!=null?ee:"-"}),H()]}),c("div",{className:"CardDebts__container--prices",children:[c("div",{className:"CardDebts__container--price",children:[e("p",{className:"CardDebts__text--subtitle",children:n.amount}),e("p",{className:"CardDebts__text--price CardDebts__text--gray",children:`S/. ${(Z=i==null?void 0:i.capital_debt)!=null?Z:"00.00"}`})]}),e("div",{className:"CardDebts__component--divider"}),c("div",{className:"CardDebts__container--price",children:[e("p",{className:"CardDebts__text--subtitle",children:n.discount}),c("div",{className:"CardDebts__container--offer",children:[e("h3",{className:"CardDebts__text--price CardDebts__text--skyBlue",children:`S/. ${ie((Y=i==null?void 0:i.amount_cancellation)!=null?Y:0)}`}),e("div",{children:e("span",{className:"CardDebts__component--discount",children:` - ${(V=Math.round((i==null?void 0:i.pct_dscto_cancellation)*100))!=null?V:""} %`})})]})]})]}),F()]}),Q(),e(Ne,{open:m,setOpen:u,operationNumber:y,userDebt:i}),e(Se,{open:l,setOpen:s,operationNumber:y,userDebt:i})]})};dt.defaultProps={};const{BREAKPOINTS:qn}=z,Wn=R.div`
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
`,mt=a=>{const{images:n}=a;return e(Wn,{className:"Carrousel",children:e(Ye,{slidesPerView:"auto",pagination:{clickable:!0},autoPlay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,spaceBetween:8,modules:[Rt,Tt],children:n.map((i,l)=>e(oe,{children:e("img",{src:i,alt:i,className:"Carrousel__image"})},l))})})};mt.defaultProps={};const Gn=R.div`
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
`,Te=a=>{const{title:n,children:i}=a;return c(Gn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:n}),e("div",{className:"SummaryCard__subtitle",children:i})]})};Te.defaultProps={};const we=a=>{const{content:n,isDate:i}=a,l=$().global.table.TableDebtUser.TableRows,s=()=>i?l.deadline:l.amount,m=()=>{var y;return i?n:`S/. ${(y=ie(+n))!=null?y:""}`},u=()=>i?"DebtTable__text--date":"DebtTable__text--title";return e(se,{className:"DebtTable",children:e(Te,{title:s(),children:e("h3",{className:u(),children:m()})})})};we.defaultProps={isDate:!1};const Hn=a=>{var s;const{price:n,discount:i}=a,l=$().global.table.TableDebtUser.TableRows;return e(se,{className:"DebtTable",children:e(Te,{title:l.discount,children:c("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${ie(n!=null?n:0)}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${(s=Math.round(i*100))!=null?s:""} %`})})]})})})},Qn=a=>{const{expand:n}=a,i=$().global.table.TableDebtUser.TableRows,[l,s]=O.exports.useState(n),m=()=>l?e(Ze,{}):e(ce,{});return e(se,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>s(!l),children:c("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[i.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:m()})]})})},Ue=()=>e(se,{className:"DebtTable__container--divider"}),{BREAKPOINTS:Le}=z,Zn=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(we,{content:a==null?void 0:a.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:Le.desktop,cell:()=>e(Ue,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"24rem",cell:a=>e(Hn,{price:a==null?void 0:a.amount_cancellation,discount:a==null?void 0:a.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:Le.desktop,cell:()=>e(Ue,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(we,{content:de(a==null?void 0:a.limit_date).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:a=>{var n;return e(Qn,{expand:(n=a==null?void 0:a.defaultExpanded)!=null?n:!1})}}],{BREAKPOINTS:B}=z,Jn=R.div`
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
      display: none;

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
`,ut=a=>{const n=$().signIn.ClientContainer,{data:i,isLoading:l}=He(),{data:s,total_debts:m}=i!=null?i:{};s&&(s==null?void 0:s.length)>0&&(s[0].defaultExpanded=!0);const u=()=>e(Ye,{slidesPerView:"auto",widthFull:!0,children:l?c(j,{children:[e(oe,{children:e(W,{variant:"rounded",height:124,width:"100%"})}),e(oe,{children:e(W,{variant:"rounded",height:124,width:"100%"})})]}):c(j,{children:[e(oe,{children:e(ye,{})}),e(oe,{children:e(ve,{total_debts:m})})]})}),y=()=>l?c(j,{children:[e(W,{variant:"rounded",height:124,width:"100%"}),e(W,{variant:"rounded",height:124,width:"100%"})]}):c(j,{children:[e(ye,{}),e(ve,{total_debts:m})]}),h=()=>l?e(W,{variant:"rounded",height:400,width:"100%"}):e(lt,{data:s!=null?s:[],columns:Zn,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Re,expandableRowExpanded:b=>b.defaultExpanded,progressPending:l,hiddenMobile:!0}),p=()=>l?c(j,{children:[e(W,{variant:"rounded",height:280,width:"100%"}),e(W,{variant:"rounded",height:480,width:"100%"})]}):c(j,{children:[e(Je,{}),e(Xe,{})]}),_=()=>{var b;return l?c(j,{children:[e(W,{variant:"rounded",height:320,width:"100%"}),e(W,{variant:"rounded",height:320,width:"100%"})]}):e(j,{children:(b=s==null?void 0:s.slice(Yt))==null?void 0:b.map((C,w)=>e(dt,{data:C},w))})};return e(Dt,{children:c(Jn,{className:"ClientContainer",children:[c("div",{className:"ClientContainer__section3",children:[c("div",{className:"ClientContainer__section1",children:[e("div",{className:"ClientContainer__container--carrousel",children:e(mt,{images:[re,re,re,re,re]})}),e("div",{className:"ClientContainer__container--banner",children:e(ct,{})}),e("div",{className:"ClientContainer__container--carrousel-indicators",children:u()}),e("div",{className:"ClientContainer__section2",children:y()})]}),e("h2",{className:"ClientContainer__title",children:n.title}),h(),e("div",{className:"ClientContainer__container--debts",children:_()})]}),e("div",{className:"ClientContainer__section4",children:p()})]})})};ut.defaultProps={};const ht=a=>{const{user:n}=xe(),{rol:i}=n!=null?n:{};return i===10?e(Ot,{}):i===1?e(ut,{}):e(Qt,{})};ht.defaultProps={};const _i=ht;export{_i as default};
