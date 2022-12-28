import{A as St}from"./AdministratorPanel.container.067ea42f.js";import{B as Le,S as Ye,P as kt,A as Ot,a as oe,i as re}from"./SwipperComponent.5d78f643.js";import{a as e,s as O,j as c,af as _e,a4 as Rt,a2 as Tt,E as xe,r as k,C as A,ag as de,G as D}from"./index.a3dc70de.js";import{u as z,g as Et}from"./i18n.hooks.9d5c239d.js";import{u as Z,r as Ve,i as qe,a as We,I as zt,L as Mt}from"./Layout.container.33c3d07e.js";import{l as $t}from"./logoKonecta.7deaf569.js";import{g as Dt,t as jt,w as At,x as Bt,n as Ge,B as Kt,C as Ft,D as Ut}from"./validations.utils.84d5da41.js";import{u as Ce,a as Lt}from"./users.service.hooks.400ee271.js";import{S as Yt}from"./sweetalert2.all.e7f7635f.js";import{n as te,g as Vt,a as qt}from"./common.utils.106d572f.js";import{B as Q}from"./Button.504dfbe8.js";import{T as Wt}from"./Table.b206c3a2.js";import{d as He,a as ce}from"./Remove.cd43bf2e.js";import{S as q}from"./SkeletonComponent.5f7752aa.js";import Gt from"./404.page.624094d4.js";import"./administrator.service.hooks.a9b4f567.js";const Ht=Dt(e("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline"),Qt="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",Zt=O.div`
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
`,Qe=a=>{const n=z().signIn.CardImageOne;return c(Zt,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:Qt,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:n.subtitle}),e("h2",{className:"CardImageOne__title",children:n.title})]})};Qe.defaultProps={};const Jt="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",Xt=O.div`
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
`,Ze=a=>{const n=z().signIn.CardImageTwo;return c(Xt,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:Jt,alt:"fotoMujerOne"}),c("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:n.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:n.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:n.subtitle3})]})]})};Ze.defaultProps={};const en="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",tn="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",nn="/CodiShark/assets/imagePayInformation.de64d6a1.svg",an="/CodiShark/assets/lineInformation.84349c20.svg";var Je={},Xe={};function rn(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var et={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(a,n){(function(i,l){a.exports=l()})(_e,function(){function i(t){var r=typeof t;return t!==null&&(r==="object"||r==="function")}function l(t){return typeof t=="function"}var s=void 0;Array.isArray?s=Array.isArray:s=function(t){return Object.prototype.toString.call(t)==="[object Array]"};var m=s,u=0,v=void 0,h=void 0,f=function(r,o){B[u]=r,B[u+1]=o,u+=2,u===2&&(h?h(T):G())};function g(t){h=t}function y(t){f=t}var w=typeof window<"u"?window:void 0,x=w||{},N=x.MutationObserver||x.WebKitMutationObserver,S=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",P=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function R(){return function(){return process.nextTick(T)}}function j(){return typeof v<"u"?function(){v(T)}:M()}function p(){var t=0,r=new N(T),o=document.createTextNode("");return r.observe(o,{characterData:!0}),function(){o.data=t=++t%2}}function C(){var t=new MessageChannel;return t.port1.onmessage=T,function(){return t.port2.postMessage(0)}}function M(){var t=setTimeout;return function(){return t(T,1)}}var B=new Array(1e3);function T(){for(var t=0;t<u;t+=2){var r=B[t],o=B[t+1];r(o),B[t]=void 0,B[t+1]=void 0}u=0}function ne(){try{var t=Function("return this")().require("vertx");return v=t.runOnLoop||t.runOnContext,j()}catch{return M()}}var G=void 0;S?G=R():N?G=p():P?G=C():w===void 0&&typeof rn=="function"?G=ne():G=M();function ie(t,r){var o=this,d=new this.constructor(L);d[H]===void 0&&$e(d);var _=o._state;if(_){var b=arguments[_-1];f(function(){return ze(_,d,b,o._result)})}else ue(o,d,t,r);return d}function J(t){var r=this;if(t&&typeof t=="object"&&t.constructor===r)return t;var o=new r(L);return ae(o,t),o}var H=Math.random().toString(36).substring(2);function L(){}var Y=void 0,F=1,U=2;function me(){return new TypeError("You cannot resolve a promise with itself")}function ut(){return new TypeError("A promises callback cannot return that same promise.")}function ht(t,r,o,d){try{t.call(r,o,d)}catch(_){return _}}function pt(t,r,o){f(function(d){var _=!1,b=ht(o,r,function(I){_||(_=!0,r!==I?ae(d,I):V(d,I))},function(I){_||(_=!0,E(d,I))},"Settle: "+(d._label||" unknown promise"));!_&&b&&(_=!0,E(d,b))},t)}function ft(t,r){r._state===F?V(t,r._result):r._state===U?E(t,r._result):ue(r,void 0,function(o){return ae(t,o)},function(o){return E(t,o)})}function Ee(t,r,o){r.constructor===t.constructor&&o===ie&&r.constructor.resolve===J?ft(t,r):o===void 0?V(t,r):l(o)?pt(t,r,o):V(t,r)}function ae(t,r){if(t===r)E(t,me());else if(i(r)){var o=void 0;try{o=r.then}catch(d){E(t,d);return}Ee(t,r,o)}else V(t,r)}function _t(t){t._onerror&&t._onerror(t._result),he(t)}function V(t,r){t._state===Y&&(t._result=r,t._state=F,t._subscribers.length!==0&&f(he,t))}function E(t,r){t._state===Y&&(t._state=U,t._result=r,f(_t,t))}function ue(t,r,o,d){var _=t._subscribers,b=_.length;t._onerror=null,_[b]=r,_[b+F]=o,_[b+U]=d,b===0&&t._state&&f(he,t)}function he(t){var r=t._subscribers,o=t._state;if(r.length!==0){for(var d=void 0,_=void 0,b=t._result,I=0;I<r.length;I+=3)d=r[I],_=r[I+o],d?ze(o,d,_,b):_(b);t._subscribers.length=0}}function ze(t,r,o,d){var _=l(o),b=void 0,I=void 0,X=!0;if(_){try{b=o(d)}catch(le){X=!1,I=le}if(r===b){E(r,ut());return}}else b=d;r._state!==Y||(_&&X?ae(r,b):X===!1?E(r,I):t===F?V(r,b):t===U&&E(r,b))}function gt(t,r){try{r(function(d){ae(t,d)},function(d){E(t,d)})}catch(o){E(t,o)}}var Me=0;function bt(){return Me++}function $e(t){t[H]=Me++,t._state=void 0,t._result=void 0,t._subscribers=[]}function yt(){return new Error("Array Methods must be provided an Array")}var vt=function(){function t(r,o){this._instanceConstructor=r,this.promise=new r(L),this.promise[H]||$e(this.promise),m(o)?(this.length=o.length,this._remaining=o.length,this._result=new Array(this.length),this.length===0?V(this.promise,this._result):(this.length=this.length||0,this._enumerate(o),this._remaining===0&&V(this.promise,this._result))):E(this.promise,yt())}return t.prototype._enumerate=function(o){for(var d=0;this._state===Y&&d<o.length;d++)this._eachEntry(o[d],d)},t.prototype._eachEntry=function(o,d){var _=this._instanceConstructor,b=_.resolve;if(b===J){var I=void 0,X=void 0,le=!1;try{I=o.then}catch(fe){le=!0,X=fe}if(I===ie&&o._state!==Y)this._settledAt(o._state,d,o._result);else if(typeof I!="function")this._remaining--,this._result[d]=o;else if(_===$){var pe=new _(L);le?E(pe,X):Ee(pe,o,I),this._willSettleAt(pe,d)}else this._willSettleAt(new _(function(fe){return fe(o)}),d)}else this._willSettleAt(b(o),d)},t.prototype._settledAt=function(o,d,_){var b=this.promise;b._state===Y&&(this._remaining--,o===U?E(b,_):this._result[d]=_),this._remaining===0&&V(b,this._result)},t.prototype._willSettleAt=function(o,d){var _=this;ue(o,void 0,function(b){return _._settledAt(F,d,b)},function(b){return _._settledAt(U,d,b)})},t}();function wt(t){return new vt(this,t).promise}function xt(t){var r=this;return m(t)?new r(function(o,d){for(var _=t.length,b=0;b<_;b++)r.resolve(t[b]).then(o,d)}):new r(function(o,d){return d(new TypeError("You must pass an array to race."))})}function Ct(t){var r=this,o=new r(L);return E(o,t),o}function Nt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Pt(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var $=function(){function t(r){this[H]=bt(),this._result=this._state=void 0,this._subscribers=[],L!==r&&(typeof r!="function"&&Nt(),this instanceof t?gt(this,r):Pt())}return t.prototype.catch=function(o){return this.then(null,o)},t.prototype.finally=function(o){var d=this,_=d.constructor;return l(o)?d.then(function(b){return _.resolve(o()).then(function(){return b})},function(b){return _.resolve(o()).then(function(){throw b})}):d.then(o,o)},t}();$.prototype.then=ie,$.all=wt,$.race=xt,$.resolve=J,$.reject=Ct,$._setScheduler=g,$._setAsap=y,$._asap=f;function It(){var t=void 0;if(typeof _e<"u")t=_e;else if(typeof self<"u")t=self;else try{t=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var r=t.Promise;if(r){var o=null;try{o=Object.prototype.toString.call(r.resolve())}catch{}if(o==="[object Promise]"&&!r.cast)return}t.Promise=$}return $.polyfill=It,$.Promise=$,$})})(et);et.exports.polyfill();var tt={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(l,s,m){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,v=function h(){l[s]?m():setTimeout(h,u)};setTimeout(v,0)};a.default=n})(tt);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(tt);function i(h){return h&&h.__esModule?h:{default:h}}function l(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function s(h,f){for(var g=0;g<f.length;g++){var y=f[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}function m(h,f,g){return f&&s(h.prototype,f),g&&s(h,g),Object.defineProperty(h,"prototype",{writable:!1}),h}var u=function(){function h(){return l(this,h),h.instance?h.instance:(h.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return m(h,[{key:"loadLibrary",value:function(g,y){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,x=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,N=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(y):g?y?x.test(g)?N.test(y)?(this.domain=g,this.publicKey=y,this.formToken=w,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(y,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(g,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var g=this;if(!this.loading){var y=this.publicKey,w=this.domain;this.loading=!0;var x=document.createElement("script");x.type="text/javascript",/^.+\/$/.test(w)||(w+="/"),x.src="".concat(w,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),x.setAttribute("kr-public-key",y),x.setAttribute("kr-spa-mode","true"),this.formToken&&x.setAttribute("kr-form-token",this.formToken);var N=document.querySelector('script[src="'.concat(x.src,'"]'));!N&&document.body?document.body.appendChild(x):document.body||console.warn("document.body is undefined")}return new Promise(function(S){(0,n.default)(window,"KR",function(){(0,n.default)(window.KR,"ready",function(){g.loaded=!0,g.loading=!1,S({KR:window.KR})})})})}},{key:"getKrypton",value:function(g){var y=this;return new Promise(function(w,x){g&&g!==y.publicKey?window.KR.setFormConfig({publicKey:g}).then(w).catch(x):w({KR:window.KR})})}}]),h}(),v=new u;a.default=v})(Xe);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(Xe);function i(s){return s&&s.__esModule?s:{default:s}}var l=n.default;a.default=l})(Je);const on=Rt(Je),sn="/CodiShark/assets/americanExpress.04220897.svg",ln="/CodiShark/assets/dinersClub.c0623661.svg",cn="/CodiShark/assets/masterCard.c474b58f.svg",dn="/CodiShark/assets/visa.82da6032.svg",mn=async a=>{const{amount:n,debtId:i,operationNumber:l,hash:s,rawClientAnswer:m}=a;console.log(a);try{return await jt.post("/operations/validate",{debt_id:i,amount:n,operation_number:l,hash:s,rawClientAnswer:m},{headers:At()})}catch(u){throw console.log(u),new Error(u.message)}},un=()=>{const a=Tt();return Bt(mn,{onMutate:async()=>{await a.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{a.invalidateQueries("iziPay")}})},hn=O.div`
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
`,pn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,minHeight:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:fn}=A,{IZI_PAY_PUBLIC_KEY:_n,REACT_APP_IZI_PAY_URL:gn}=fn,Ne=a=>{const{open:n,setOpen:i,userDebt:l}=a,{id:s,amount_cancellation:m}=l!=null?l:{},{mutateAsync:u,isLoading:v}=Ce(),{mutateAsync:h,reset:f}=un(),{currentDebtId:g,setOperationUserDebt:y}=Z(),{setIsLoading:w,setPaymentStatus:x}=Z(),{user:N}=xe(),S=k.exports.useCallback(R=>{console.warn(R),i(!1),w(!1),x("ERROR"),Yt.fire("Error",R,"error")},[w,i,x]),P=k.exports.useCallback(async()=>{let R,j;if(!(!N||!s||!m)){g.current=s;try{await u({amount:m,debtId:s,type:2}).then(p=>{const{izipay:C,data:M}=p!=null?p:{},{operation_number:B}=M!=null?M:{},{answer:T}=C!=null?C:{},{formToken:ne}=T!=null?T:{};return y(M),j=B,R=ne,on.loadLibrary(gn,_n)}).then(({KR:p})=>p.setFormConfig({formToken:R,"kr-language":"es-PE"})).then(({KR:p})=>p.onSubmit(C=>{console.log(C);const{clientAnswer:M,hash:B}=C!=null?C:{};if(!j)throw new Error("Operation Number Error");return h({debtId:s,operationNumber:j,amount:m,rawClientAnswer:JSON.stringify(M),hash:B}),f(),i(!1),x("SUCCESS"),!1})).then(({KR:p})=>p.onError(C=>{throw S(C.detailedErrorMessage),new Error("detailedErrorMessage")})).then(({KR:p})=>p.addForm("#myPaymentForm")).then(({KR:p,result:C})=>{p.showForm(C.formId),w(!1)}).catch(p=>{throw new Error(p)})}catch(p){S(p)}}},[m,g,s,S,u,f,w,i,y,x,N,h]);return k.exports.useEffect(()=>{w(v)},[v,w]),k.exports.useEffect(()=>{n&&P()},[P,n]),e(Ge,{open:n&&!v,onClose:()=>i(!n),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Le,{sx:pn,children:c(hn,{className:"IziPayForm",children:[e("img",{src:$t,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})}),c("div",{className:"IziPayForm__images",children:[e("img",{className:"IziPayForm__image",src:dn,alt:"visa"}),e("img",{className:"IziPayForm__image",src:sn,alt:"americanExpress"}),e("img",{className:"IziPayForm__image",src:ln,alt:"dinersClub"}),e("img",{className:"IziPayForm__image",src:cn,alt:"masterCard"})]})]})})})};Ne.defaultProps={};var Pe={},bn=qe.exports;Object.defineProperty(Pe,"__esModule",{value:!0});var nt=Pe.default=void 0,yn=bn(Ve()),vn=We,wn=(0,yn.default)((0,vn.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");nt=Pe.default=wn;var Ie={},xn=qe.exports;Object.defineProperty(Ie,"__esModule",{value:!0});var it=Ie.default=void 0,Cn=xn(Ve()),Nn=We,Pn=(0,Cn.default)((0,Nn.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");it=Ie.default=Pn;const In=O.div`
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
`,Sn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:320,maxWidth:640,minHeight:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:De,ACCOUNT_NUMBER:je}=A,Se=a=>{const n=z().signIn.OperationNumberModal,{open:i,setOpen:l,operationNumber:s,userDebt:m}=a,{amount_cancellation:u,limit_date:v}=m!=null?m:{},h=()=>c("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:n.operation}),e("h1",{className:"OperationNumberModal__h1",children:s!=null?s:""}),c("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(`${n.operation}: 
`+(s!=null?s:"")+`
${n.current}:
${je}
${n.interbank}:
${De}`)},children:[e(nt,{}),n.copy]}),e("p",{className:"OperationNumberModal__p",children:n.current}),e("h2",{className:"OperationNumberModal__h2",children:je}),e("p",{className:"OperationNumberModal__p",children:n.interbank}),e("h2",{className:"OperationNumberModal__h2",children:De})]}),f=()=>c("div",{className:"OperationNumberModal__section",children:[e("h3",{children:n.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${te(u!=null?u:0)}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${n.offer}: ${de(v).format("DD/MM/YYYY")}`})]});return e(Ge,{open:i,onClose:()=>l(!i),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Le,{sx:Sn,children:c(In,{className:"OperationNumberModal",children:[e(zt,{className:"OperationNumberModal__closeIcon",onClick:()=>l(!i),children:e(it,{className:"OperationNumberModal__closeIcon--icon",fontSize:"large",color:"error"})}),e("p",{className:"OperationNumberModal__paragraph",children:n.paragraph}),c("div",{className:"OperationNumberModal__content",children:[h(),f()]})]})})})};Se.defaultProps={};const{BREAKPOINTS:W}=A,kn=O.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin-top: 2.4rem;
  gap: 2rem;

  @media screen and (min-width: ${W.tablet}px) {
    padding: 1.6rem 2.4rem;
    margin: 2.4rem auto;
  }

  @media screen and (min-width: ${W.desktop}px) {
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

      @media screen and (min-width: ${W.desktop}px) {
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

      @media screen and (min-width: ${W.mobile}px) {
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

      @media screen and (min-width: ${W.mobile}px) {
        display: flex;
      }
    }

    &__container {
      &--button {
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${W.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${W.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${W.desktop}px) {
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

      @media screen and (min-width: ${W.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:On,ACCOUNT_NUMBER:Rn}=A,at=a=>{const n=z().signIn.InformationClient,{userDebt:i,hiddenMobile:l}=a,[s,m]=k.exports.useState(!1),[u,v]=k.exports.useState(!1),[h,f]=k.exports.useState(),{id:g,amount_cancellation:y}=i!=null?i:{},{mutateAsync:w,reset:x,isLoading:N}=Ce(),{setIsLoading:S,setPaymentStatus:P}=Z();k.exports.useEffect(()=>{S(N)},[N,S]);const R=()=>{P("NONE"),v(!u)},j=async()=>{P("NONE");try{y&&g&&(await w({amount:y,debtId:g}).then(p=>{const{data:C}=p!=null?p:{},{operation_number:M}=C!=null?C:{};f(M)}).catch(),m(!s),x())}catch(p){P("ERROR"),console.log(p)}};return c(kn,{className:"InformationClient",hiddenMobile:l,children:[c("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:n.title}),e("h2",{className:"InformationClient__subtitle",children:n.subtitle}),e("img",{className:"InformationClient__image1",src:nn,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:n.subtitle2}),c("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:tn,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:en,alt:"iconMasterCardInformation"})]}),e(Q,{className:"InformationClient__button",variant:"contained",disabled:N,onClick:R,children:e("h3",{className:"InformationClient__text1",children:n.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:an,alt:"lineInformation"}),c("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:n.title2}),c("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:n.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:Rn}),e("h2",{className:"InformationClient__subtitle4",children:n.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:On}),e("p",{className:"InformationClient__paragraph",children:n.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:n.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(Q,{className:"InformationClient__button2",variant:"contained",onClick:j,disabled:N,children:e("h3",{className:"InformationClient__text2",children:n.button2.toLocaleUpperCase()})})})]}),e(Ne,{open:u,setOpen:v,operationNumber:h,userDebt:i}),e(Se,{open:s,setOpen:m,operationNumber:h,userDebt:i})]})};at.defaultProps={};const Tn="/CodiShark/assets/rejectedImage.25910230.svg",En=O.div`
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
`,ke=a=>{const n=z().signIn.PaymentRejected,{setPaymentStatus:i}=Z();return e(En,{className:"PaymentRejected",children:e("div",{className:"PaymentRejected__container",children:c("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:Tn,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:n.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:n.disapproved}),e(Q,{className:"PaymentRejected__button",variant:"contained",onClick:()=>i("NONE"),children:e("h3",{className:"PaymentRejected__text",children:n.button})})]})})})};ke.defaultProps={};const zn="/CodiShark/assets/successImage.38cb00ed.svg",{BREAKPOINTS:ee}=A,Mn=O.div`
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

      @media screen and (min-width: ${ee.mobile}px) {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.4rem;

      @media screen and (min-width: ${ee.mobile}px) {
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

      @media screen and (min-width: ${ee.mobile}px) {
        gap: 3.2rem;
      }
    }

    &__title2 {
      font-weight: 540;
      font-size: 1.6rem;
      text-align: center;

      @media screen and (min-width: ${ee.mobile}px) {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }

    &__divider {
      border-top: 0.04rem solid var(--palette-darkShadow);

      @media screen and (min-width: ${ee.mobile}px) {
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

        @media screen and (min-width: ${ee.mobile}px) {
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
`,Oe=a=>{var v;const n=z().signIn.PaymentRejected,{operationUserDebt:i}=Z(),{amount_paid:l,operation_date:s,operation_time:m}=i!=null?i:{},u=de(s).format("DD/MM/YYYY");return e(Mn,{className:"PaymentSuccess",children:c("div",{className:"PaymentSuccess__container",children:[c("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:zn,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:n.success}),e("h2",{className:"PaymentSuccess__subtitle",children:n.approved})]}),e("div",{className:"PaymentSuccess__divider"}),c("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:n.title}),c("div",{className:"PaymentSuccess__paragraph",children:[e("div",{className:"PaymentSuccess__package",children:c("p",{className:"PaymentSuccess__p1",children:[n.paragraph4,e("span",{className:"PaymentSuccess__span1",children:(v=`S./ ${te(l!=null?l:0)}`)!=null?v:"-"})]})}),e("div",{className:"PaymentSuccess__p2div",children:c("p",{className:"PaymentSuccess__p2",children:[n.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:u})]})}),e("div",{className:"PaymentSuccess__p3div",children:c("p",{className:"PaymentSuccess__p3",children:[n.paragraph3,e("span",{className:"PaymentSuccess__span3",children:m!=null?m:"-"})]})})]})]})]})})};Oe.defaultProps={};const $n=O.div`
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
`,Re=a=>{const{data:n}=a,{paymentStatus:i,currentDebtId:l}=Z(),{id:s}=n!=null?n:{},m=Et().global.table.TableDebtUser.TableRowsExpand,u=(h,f)=>c("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${h} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:f!=null?f:"-"})]}),v=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return c($n,{className:"DebtExpandableRowsComponent",children:[c("div",{className:"DebtExpandableRowsComponent__container__expand",children:[u(m.entity,n==null?void 0:n.banking_entity),v(),u(m.typeDebt,n==null?void 0:n.product),v(),u(m.typeExchange,n==null?void 0:n.currency),v(),u(m.date,de(n==null?void 0:n.limit_date).format("DD / MM / YYYY"))]}),i==="SUCCESS"&&l.current===s&&e(Oe,{}),i==="ERROR"&&l.current===s&&e(ke,{}),(i==="NONE"||l.current!==s)&&e(at,{userDebt:n,hiddenMobile:!0})]})};Re.defaultProps={};const{BREAKPOINTS:Ae}=A,Dn=O.div`
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

        @media screen and (max-width: ${Ae.mobile}px) {
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

      @media screen and (max-width: ${Ae.mobile}px) {
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
`,rt=a=>{const{rowsPerPage:n,rowCount:i}=a,{currentPage:l,onChangePage:s}=a,m=z().global.table.TableDebtUser.Pagination,u=qt(i,n),v=Vt(u),f=l*n-n+1,g=l===1,y=l===u,w=k.exports.useCallback(()=>s(l-1),[l,s]),x=k.exports.useCallback(()=>s(l+1),[l,s]),N=k.exports.useCallback(p=>s(p),[s]),S=p=>e("div",{...p,children:p==null?void 0:p.value}),P=m.legend(f,i,i),R=p=>`Pagination__text--bold ${p?"Pagination__text--disabled":""}`,j=p=>`Pagination__container--numbers ${p===l?"Pagination__container--numbers-activated":""}`;return e("div",{className:"DebtTable__component--pagination",children:e(Dn,{className:"Pagination",children:c("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:P}),c("div",{className:"Pagination__container--pagination",children:[e("button",{className:R(g),"aria-disabled":g,onClick:w,disabled:g,children:m.back}),v.map((p,C)=>e(S,{value:p,className:j(p),onClick:()=>N(p)},C)),e("button",{className:R(y),"aria-disabled":y,onClick:x,disabled:y,children:m.next})]})]})})})};rt.defaultProps={};const{BREAKPOINTS:Be}=A,se=O.div`
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

        @media screen and (min-width: ${Be.mobile}px) {
          padding: 0.8rem 1rem;
        }
      }

      &--pagination {
        display: ${a=>a.hiddenMobile?"none":"block"};

        @media screen and (min-width: ${Be.mobile}px) {
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
`,jn=a=>e(rt,{...a}),ot=a=>{const{data:n,columns:i,expandableRows:l,expandableRowsComponent:s}=a,{progressPending:m,expandOnRowClicked:u,expandableRowExpanded:v}=a,{hiddenMobile:h}=a;return e(se,{className:"DebtTable",hiddenMobile:h,children:e(Wt,{columns:i,data:n,expandableRows:l,expandableRowsComponent:s,expandOnRowClicked:u,paginationPerPage:Kt,paginationRowsPerPageOptions:Ft,expandableRowExpanded:v,paginationComponent:jn,expandableIcon:{collapsed:null,expanded:null},progressPending:m,hiddenHeadRow:!0,hiddenMobile:h})})};ot.defaultProps={};const{BREAKPOINTS:ge}=A,An=O.div`
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
`,ye=a=>{const n=z().signIn.IndicatorsClientOne,{user:i}=xe(),{first_name:l,last_name:s,mother_last_name:m,dni:u}=i!=null?i:{};return e(An,{className:"IndicatorsClientOne",children:c("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:n.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${l!=null?l:""} ${s!=null?s:""} ${m!=null?m:""}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:`DNI N\xB0 ${u!=null?u:""}`})]})})};ye.defaultProps={};const{BREAKPOINTS:be}=A,Bn=O.div`
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
`,ve=a=>{var l;const n=z().signIn.IndicatorsClientTwo,{total_debts:i}=a;return e(Bn,{className:"IndicatorsClientTwo",children:c("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:n.debt}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(l=te(i!=null?i:0))!=null?l:""}`})]})})};ve.defaultProps={};const Kn="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",Fn=O.div`
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
`,st=a=>{const n=z().signIn.PanelBannerClient;return e(Fn,{className:"PanelBannerClient",children:c("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:Kn,alt:"personIcon"})}),c("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:n.title}),c("div",{className:"PanelBannerClient__section",children:[e("p",{children:n.paragraph1}),e("p",{children:n.paragraph2}),e("p",{children:n.paragraph3})]})]})]})})};st.defaultProps={};const{BREAKPOINTS:Ke}=A,Un=O.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: ${Ke.mobile}px) {
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

      @media screen and (min-width: ${Ke.mobile}px) {
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
`,lt=a=>{var J,H,L,Y;const n=z().components.CardDebts,{data:i}=a,[l,s]=k.exports.useState(!1),[m,u]=k.exports.useState(!1),[v,h]=k.exports.useState(),{paymentStatus:f,currentDebtId:g,setIsLoading:y,setPaymentStatus:w}=Z(),{mutateAsync:x,reset:N,isLoading:S}=Ce(),{id:P,amount_cancellation:R}=i!=null?i:{},[j,p]=k.exports.useState(!1);k.exports.useEffect(()=>{y(S)},[S,y]);const C=()=>{w("NONE"),u(!m)},M=async()=>{w("NONE");try{R&&P&&(await x({amount:R,debtId:P}).then(F=>{const{data:U}=F!=null?F:{},{operation_number:me}=U!=null?U:{};h(me)}).catch(),s(!l),N(),p(!0))}catch(F){w("ERROR"),p(!0),console.log(F)}},B=()=>p(!j),T=()=>"CardDebts__component--button CardDebts__text--button",ne=()=>e(Q,{variant:"contained",className:`${T()}`,onClick:B,children:c(D,{children:[n.buttonExpand,j?e(He,{fontSize:"small"}):e(ce,{fontSize:"small"})]})}),G=()=>j&&c(D,{children:[(f==="NONE"||g.current!==P)&&e(Re,{data:i}),f==="SUCCESS"&&g.current===P&&e(Oe,{}),f==="ERROR"&&g.current===P&&e(ke,{})]}),ie=()=>c("div",{className:"CardDebts__container--buttons",children:[(f==="NONE"||f==="ERROR"||g.current!==P)&&c(D,{children:[e(Q,{variant:"contained",className:`${T()} CardDebts__component--button-blue  CardDebts__text--button-pay`,disabled:S,onClick:C,children:c(D,{children:[n.button,e(ce,{className:"CardDebts__component--icon"})]})}),e(Q,{variant:"contained",className:`${T()} CardDebts__component--button-blue  CardDebts__text--button-pay`,onClick:M,disabled:S,children:c(D,{children:[n.button2,e(ce,{className:"CardDebts__component--icon"})]})})]}),f==="SUCCESS"&&g.current===P&&e(Q,{variant:"contained",className:`${T()} CardDebts__component--button-blue  CardDebts__text--button-pay`,children:c(D,{children:["Pagado",e(Ht,{className:"CardDebts__component--icon"})]})})]});return c(Un,{className:"CardDebts",children:[c("div",{className:"CardDebts__component",children:[c("div",{className:"CardDebts__container--components",children:[e("p",{className:"CardDebts__text--title CardDebts__text--blue",children:(J=i==null?void 0:i.banking_entity)!=null?J:"-"}),ne()]}),c("div",{className:"CardDebts__container--prices",children:[c("div",{className:"CardDebts__container--price",children:[e("p",{className:"CardDebts__text--subtitle",children:n.amount}),e("p",{className:"CardDebts__text--price CardDebts__text--gray",children:`S/. ${(H=i==null?void 0:i.capital_debt)!=null?H:"00.00"}`})]}),e("div",{className:"CardDebts__component--divider"}),c("div",{className:"CardDebts__container--price",children:[e("p",{className:"CardDebts__text--subtitle",children:n.discount}),c("div",{className:"CardDebts__container--offer",children:[e("h3",{className:"CardDebts__text--price CardDebts__text--skyBlue",children:`S/. ${te((L=i==null?void 0:i.amount_cancellation)!=null?L:0)}`}),e("div",{children:e("span",{className:"CardDebts__component--discount",children:` - ${(Y=Math.round((i==null?void 0:i.pct_dscto_cancellation)*100))!=null?Y:""} %`})})]})]})]}),G()]}),ie(),e(Ne,{open:m,setOpen:u,operationNumber:v,userDebt:i}),e(Se,{open:l,setOpen:s,operationNumber:v,userDebt:i})]})};lt.defaultProps={};const{BREAKPOINTS:Ln}=A,Yn=O.div`
  .Carrousel {
    @media screen and (min-width: ${Ln.mobile}px) {
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
`,ct=a=>{const{images:n}=a;return e(Yn,{className:"Carrousel",children:e(Ye,{slidesPerView:"auto",pagination:{clickable:!0},autoPlay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,spaceBetween:8,modules:[kt,Ot],children:n.map((i,l)=>e(oe,{children:e("img",{src:i,alt:i,className:"Carrousel__image"})},l))})})};ct.defaultProps={};const Vn=O.div`
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
`,Te=a=>{const{title:n,children:i}=a;return c(Vn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:n}),e("div",{className:"SummaryCard__subtitle",children:i})]})};Te.defaultProps={};const we=a=>{const{content:n,isDate:i}=a,l=z().global.table.TableDebtUser.TableRows,s=()=>i?l.deadline:l.amount,m=()=>{var v;return i?n:`S/. ${(v=te(+n))!=null?v:""}`},u=()=>i?"DebtTable__text--date":"DebtTable__text--title";return e(se,{className:"DebtTable",children:e(Te,{title:s(),children:e("h3",{className:u(),children:m()})})})};we.defaultProps={isDate:!1};const qn=a=>{var s;const{price:n,discount:i}=a,l=z().global.table.TableDebtUser.TableRows;return e(se,{className:"DebtTable",children:e(Te,{title:l.discount,children:c("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${te(n!=null?n:0)}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${(s=Math.round(i*100))!=null?s:""} %`})})]})})})},Wn=a=>{const{expand:n}=a,i=z().global.table.TableDebtUser.TableRows,[l,s]=k.exports.useState(n),m=()=>l?e(He,{}):e(ce,{});return e(se,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>s(!l),children:c("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[i.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:m()})]})})},Fe=()=>e(se,{className:"DebtTable__container--divider"}),{BREAKPOINTS:Ue}=A,Gn=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(we,{content:a==null?void 0:a.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:Ue.desktop,cell:()=>e(Fe,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"24rem",cell:a=>e(qn,{price:a==null?void 0:a.amount_cancellation,discount:a==null?void 0:a.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:Ue.desktop,cell:()=>e(Fe,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:a=>e(we,{content:de(a==null?void 0:a.limit_date).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:a=>{var n;return e(Wn,{expand:(n=a==null?void 0:a.defaultExpanded)!=null?n:!1})}}],{BREAKPOINTS:K}=A,Hn=O.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  gap: 2%;
  background-color: var(--palette-white);

  @media screen and (min-width: ${K.mobile}px) {
    background-color: var(--palette-greyBackground);
  }

  @media screen and (min-width: ${K.tablet}px) {
    min-height: 90vh;
  }

  @media screen and (max-width: ${K.wide}px) {
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
      color: var(--palette-blue);
      text-align: center;

      @media screen and (min-width: ${K.mobile}px) {
        text-align: left;
        color: var(--palette-darkText);
      }
    }

    &__section2 {
      display: none;

      @media screen and (min-width: ${K.mobile}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1.6rem;
      }

      @media screen and (min-width: ${K.tablet}px) {
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

      @media screen and (min-width: ${K.mobile}px) {
        gap: 0.8rem;
      }

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

      @media screen and (min-width: ${K.wide}px) {
        display: block;
      }
    }

    &__container {
      &--banner {
        display: none;

        @media screen and (min-width: ${K.tablet}px) {
          display: block;
        }
      }

      &--carrousel {
        display: block;

        @media screen and (min-width: ${K.tablet}px) {
          display: none;
        }

        &-indicators {
          display: block;

          @media screen and (min-width: ${K.mobile}px) {
            display: none;
          }
        }
      }

      &--debts {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        @media screen and (min-width: ${K.tablet}px) {
          display: none;
        }
      }
    }
  }
`,dt=a=>{const n=z().signIn.ClientContainer,{data:i,isLoading:l}=Lt(),{data:s,total_debts:m}=i!=null?i:{};s&&(s==null?void 0:s.length)>0&&(s[0].defaultExpanded=!0);const u=()=>e(Ye,{slidesPerView:"auto",widthFull:!0,children:l?c(D,{children:[e(oe,{children:e(q,{variant:"rounded",height:124,width:"100%"})}),e(oe,{children:e(q,{variant:"rounded",height:124,width:"100%"})})]}):c(D,{children:[e(oe,{children:e(ye,{})}),e(oe,{children:e(ve,{total_debts:m})})]})}),v=()=>l?c(D,{children:[e(q,{variant:"rounded",height:124,width:"100%"}),e(q,{variant:"rounded",height:124,width:"100%"})]}):c(D,{children:[e(ye,{}),e(ve,{total_debts:m})]}),h=()=>l?e(q,{variant:"rounded",height:400,width:"100%"}):e(ot,{data:s!=null?s:[],columns:Gn,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Re,expandableRowExpanded:y=>y.defaultExpanded,progressPending:l,hiddenMobile:!0}),f=()=>l?c(D,{children:[e(q,{variant:"rounded",height:280,width:"100%"}),e(q,{variant:"rounded",height:480,width:"100%"})]}):c(D,{children:[e(Qe,{}),e(Ze,{})]}),g=()=>{var y;return l?c(D,{children:[e(q,{variant:"rounded",height:320,width:"100%"}),"320",e(q,{variant:"rounded",height:320,width:"100%"})]}):e(D,{children:(y=s==null?void 0:s.slice(Ut))==null?void 0:y.map((w,x)=>e(lt,{data:w},x))})};return e(Mt,{children:c(Hn,{className:"ClientContainer",children:[c("div",{className:"ClientContainer__section3",children:[c("div",{className:"ClientContainer__section1",children:[e("div",{className:"ClientContainer__container--carrousel",children:e(ct,{images:[re,re,re,re,re]})}),e("div",{className:"ClientContainer__container--banner",children:e(st,{})}),e("div",{className:"ClientContainer__container--carrousel-indicators",children:u()}),e("div",{className:"ClientContainer__section2",children:v()})]}),e("h2",{className:"ClientContainer__title",children:n.title}),h(),e("div",{className:"ClientContainer__container--debts",children:g()})]}),e("div",{className:"ClientContainer__section4",children:f()})]})})};dt.defaultProps={};const mt=a=>{const{user:n}=xe(),{rol:i}=n!=null?n:{};return i===10?e(St,{}):i===1?e(dt,{}):e(Gt,{})};mt.defaultProps={};const ui=mt;export{ui as default};
