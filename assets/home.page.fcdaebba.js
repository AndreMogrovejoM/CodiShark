import{A as bt}from"./AdministratorPanel.container.f259dfcd.js";import{g as vt,b as yt,c as wt,e as V,_ as Q,f as xe,r as z,i as xt,k as Ct,a as e,l as Nt,m as Pt,s as k,j as u,af as de,a4 as It,a2 as kt,E as fe,C as A,ag as ie,G as ne}from"./index.9af5e57e.js";import{B as St,u as O,g as Rt}from"./i18n.hooks.95fc6568.js";import{u as Z,r as Se,i as Re,a as Oe,L as Ot}from"./Layout.container.9056670d.js";import{l as Tt}from"./logoKonecta.e24675a9.js";import{p as zt,q as Et,r as Mt,M as Te}from"./auth.service.hooks.6abcf1c4.js";import{u as ze,a as jt}from"./users.service.hooks.69e80bb1.js";import{B as Ee}from"./Box.c1a97a1b.js";import{n as J,g as $t,a as At}from"./common.utils.106d572f.js";import{B as ue}from"./Button.cf3005dc.js";import{T as Bt}from"./Table.20fe0d71.js";import{e as Dt,f as Ft}from"./validations.utils.2a36a592.js";import{S as H}from"./SkeletonComponent.0b6fb7e6.js";import{d as Kt,a as Ut}from"./Remove.1f62b974.js";import Lt from"./404.page.01f256a3.js";import"./administrator.service.hooks.bcfacd4a.js";import"./sweetalert2.all.96059b0d.js";function Yt(i){return yt("MuiIconButton",i)}const qt=vt("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Vt=qt,Wt=["edge","children","className","color","disabled","disableFocusRipple","size"],Gt=i=>{const{classes:t,disabled:o,color:l,edge:s,size:d}=i,m={root:["root",o&&"disabled",l!=="default"&&`color${V(l)}`,s&&`edge${V(s)}`,`size${V(d)}`]};return Pt(m,Yt,t)},Ht=wt(St,{name:"MuiIconButton",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:o}=i;return[t.root,o.color!=="default"&&t[`color${V(o.color)}`],o.edge&&t[`edge${V(o.edge)}`],t[`size${V(o.size)}`]]}})(({theme:i,ownerState:t})=>Q({textAlign:"center",flex:"0 0 auto",fontSize:i.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(i.vars||i).palette.action.active,transition:i.transitions.create("background-color",{duration:i.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:i.vars?`rgba(${i.vars.palette.action.activeChannel} / ${i.vars.palette.action.hoverOpacity})`:xe(i.palette.action.active,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:i,ownerState:t})=>Q({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&Q({color:(i.vars||i).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:i.vars?`rgba(${i.vars.palette[t.color].mainChannel} / ${i.vars.palette.action.hoverOpacity})`:xe(i.palette[t.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),t.size==="small"&&{padding:5,fontSize:i.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:i.typography.pxToRem(28)},{[`&.${Vt.disabled}`]:{backgroundColor:"transparent",color:(i.vars||i).palette.action.disabled}})),Qt=z.exports.forwardRef(function(t,o){const l=xt({props:t,name:"MuiIconButton"}),{edge:s=!1,children:d,className:m,color:g="default",disabled:h=!1,disableFocusRipple:f=!1,size:b="medium"}=l,v=Ct(l,Wt),C=Q({},l,{edge:s,color:g,disabled:h,disableFocusRipple:f,size:b}),w=Gt(C);return e(Ht,Q({className:Nt(w.root,m),centerRipple:!0,focusRipple:!f,disabled:h,ref:o,ownerState:C},v,{children:d}))}),Zt=Qt,Jt="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",Xt=k.div`
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
`,Me=i=>{const t=O().signIn.CardImageOne;return u(Xt,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:Jt,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:t.subtitle}),e("h2",{className:"CardImageOne__title",children:t.title})]})};Me.defaultProps={};const en="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",tn=k.div`
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
`,je=i=>{const t=O().signIn.CardImageTwo;return u(tn,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:en,alt:"fotoMujerOne"}),u("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:t.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:t.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:t.subtitle3})]})]})};je.defaultProps={};const nn="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",rn="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",an="/CodiShark/assets/imagePayInformation.de64d6a1.svg",on="/CodiShark/assets/lineInformation.84349c20.svg";var $e={},Ae={};function sn(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Be={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(i,t){(function(o,l){i.exports=l()})(de,function(){function o(n){var r=typeof n;return n!==null&&(r==="object"||r==="function")}function l(n){return typeof n=="function"}var s=void 0;Array.isArray?s=Array.isArray:s=function(n){return Object.prototype.toString.call(n)==="[object Array]"};var d=s,m=0,g=void 0,h=void 0,f=function(r,a){$[m]=r,$[m+1]=a,m+=2,m===2&&(h?h(F):K())};function b(n){h=n}function v(n){f=n}var C=typeof window<"u"?window:void 0,w=C||{},S=w.MutationObserver||w.WebKitMutationObserver,T=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",E=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function x(){return function(){return process.nextTick(F)}}function N(){return typeof g<"u"?function(){g(F)}:B()}function y(){var n=0,r=new S(F),a=document.createTextNode("");return r.observe(a,{characterData:!0}),function(){a.data=n=++n%2}}function M(){var n=new MessageChannel;return n.port1.onmessage=F,function(){return n.port2.postMessage(0)}}function B(){var n=setTimeout;return function(){return n(F,1)}}var $=new Array(1e3);function F(){for(var n=0;n<m;n+=2){var r=$[n],a=$[n+1];r(a),$[n]=void 0,$[n+1]=void 0}m=0}function tt(){try{var n=Function("return this")().require("vertx");return g=n.runOnLoop||n.runOnContext,N()}catch{return B()}}var K=void 0;T?K=x():S?K=y():E?K=M():C===void 0&&typeof sn=="function"?K=tt():K=B();function re(n,r){var a=this,c=new this.constructor(U);c[ee]===void 0&&we(c);var p=a._state;if(p){var _=arguments[p-1];f(function(){return ve(p,c,_,a._result)})}else oe(a,c,n,r);return c}function ae(n){var r=this;if(n&&typeof n=="object"&&n.constructor===r)return n;var a=new r(U);return G(a,n),a}var ee=Math.random().toString(36).substring(2);function U(){}var L=void 0,W=1,Y=2;function nt(){return new TypeError("You cannot resolve a promise with itself")}function it(){return new TypeError("A promises callback cannot return that same promise.")}function rt(n,r,a,c){try{n.call(r,a,c)}catch(p){return p}}function at(n,r,a){f(function(c){var p=!1,_=rt(a,r,function(P){p||(p=!0,r!==P?G(c,P):j(c,P))},function(P){p||(p=!0,I(c,P))},"Settle: "+(c._label||" unknown promise"));!p&&_&&(p=!0,I(c,_))},n)}function ot(n,r){r._state===W?j(n,r._result):r._state===Y?I(n,r._result):oe(r,void 0,function(a){return G(n,a)},function(a){return I(n,a)})}function be(n,r,a){r.constructor===n.constructor&&a===re&&r.constructor.resolve===ae?ot(n,r):a===void 0?j(n,r):l(a)?at(n,r,a):j(n,r)}function G(n,r){if(n===r)I(n,nt());else if(o(r)){var a=void 0;try{a=r.then}catch(c){I(n,c);return}be(n,r,a)}else j(n,r)}function st(n){n._onerror&&n._onerror(n._result),se(n)}function j(n,r){n._state===L&&(n._result=r,n._state=W,n._subscribers.length!==0&&f(se,n))}function I(n,r){n._state===L&&(n._state=Y,n._result=r,f(st,n))}function oe(n,r,a,c){var p=n._subscribers,_=p.length;n._onerror=null,p[_]=r,p[_+W]=a,p[_+Y]=c,_===0&&n._state&&f(se,n)}function se(n){var r=n._subscribers,a=n._state;if(r.length!==0){for(var c=void 0,p=void 0,_=n._result,P=0;P<r.length;P+=3)c=r[P],p=r[P+a],c?ve(a,c,p,_):p(_);n._subscribers.length=0}}function ve(n,r,a,c){var p=l(a),_=void 0,P=void 0,q=!0;if(p){try{_=a(c)}catch(te){q=!1,P=te}if(r===_){I(r,it());return}}else _=c;r._state!==L||(p&&q?G(r,_):q===!1?I(r,P):n===W?j(r,_):n===Y&&I(r,_))}function lt(n,r){try{r(function(c){G(n,c)},function(c){I(n,c)})}catch(a){I(n,a)}}var ye=0;function ct(){return ye++}function we(n){n[ee]=ye++,n._state=void 0,n._result=void 0,n._subscribers=[]}function dt(){return new Error("Array Methods must be provided an Array")}var mt=function(){function n(r,a){this._instanceConstructor=r,this.promise=new r(U),this.promise[ee]||we(this.promise),d(a)?(this.length=a.length,this._remaining=a.length,this._result=new Array(this.length),this.length===0?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(a),this._remaining===0&&j(this.promise,this._result))):I(this.promise,dt())}return n.prototype._enumerate=function(a){for(var c=0;this._state===L&&c<a.length;c++)this._eachEntry(a[c],c)},n.prototype._eachEntry=function(a,c){var p=this._instanceConstructor,_=p.resolve;if(_===ae){var P=void 0,q=void 0,te=!1;try{P=a.then}catch(ce){te=!0,q=ce}if(P===re&&a._state!==L)this._settledAt(a._state,c,a._result);else if(typeof P!="function")this._remaining--,this._result[c]=a;else if(p===R){var le=new p(U);te?I(le,q):be(le,a,P),this._willSettleAt(le,c)}else this._willSettleAt(new p(function(ce){return ce(a)}),c)}else this._willSettleAt(_(a),c)},n.prototype._settledAt=function(a,c,p){var _=this.promise;_._state===L&&(this._remaining--,a===Y?I(_,p):this._result[c]=p),this._remaining===0&&j(_,this._result)},n.prototype._willSettleAt=function(a,c){var p=this;oe(a,void 0,function(_){return p._settledAt(W,c,_)},function(_){return p._settledAt(Y,c,_)})},n}();function ut(n){return new mt(this,n).promise}function ht(n){var r=this;return d(n)?new r(function(a,c){for(var p=n.length,_=0;_<p;_++)r.resolve(n[_]).then(a,c)}):new r(function(a,c){return c(new TypeError("You must pass an array to race."))})}function ft(n){var r=this,a=new r(U);return I(a,n),a}function pt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function _t(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var R=function(){function n(r){this[ee]=ct(),this._result=this._state=void 0,this._subscribers=[],U!==r&&(typeof r!="function"&&pt(),this instanceof n?lt(this,r):_t())}return n.prototype.catch=function(a){return this.then(null,a)},n.prototype.finally=function(a){var c=this,p=c.constructor;return l(a)?c.then(function(_){return p.resolve(a()).then(function(){return _})},function(_){return p.resolve(a()).then(function(){throw _})}):c.then(a,a)},n}();R.prototype.then=re,R.all=ut,R.race=ht,R.resolve=ae,R.reject=ft,R._setScheduler=b,R._setAsap=v,R._asap=f;function gt(){var n=void 0;if(typeof de<"u")n=de;else if(typeof self<"u")n=self;else try{n=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var r=n.Promise;if(r){var a=null;try{a=Object.prototype.toString.call(r.resolve())}catch{}if(a==="[object Promise]"&&!r.cast)return}n.Promise=R}return R.polyfill=gt,R.Promise=R,R})})(Be);Be.exports.polyfill();var De={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=function(l,s,d){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:150,g=function h(){l[s]?d():setTimeout(h,m)};setTimeout(g,0)};i.default=t})(De);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=o(De);function o(h){return h&&h.__esModule?h:{default:h}}function l(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function s(h,f){for(var b=0;b<f.length;b++){var v=f[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}function d(h,f,b){return f&&s(h.prototype,f),b&&s(h,b),Object.defineProperty(h,"prototype",{writable:!1}),h}var m=function(){function h(){return l(this,h),h.instance?h.instance:(h.instance=this,this._name="Krypton Glue",this.configuration={},this.domain=null,this.formToken=null,this.publicKey=null,this.loaded=!1,this.loading=!1,this)}return d(h,[{key:"loadLibrary",value:function(b,v){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,w=/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g,S=/^\d{2,8}:(|test)publickey_.+$/g;return this.loaded?this.getKrypton(v):b?v?w.test(b)?S.test(v)?(this.domain=b,this.publicKey=v,this.formToken=C,this.domain&&this.publicKey?this.loadKryptonClient():Promise.reject("The library cannot be loaded")):(console.error("Public key format should be shopId:[test]publickey_*"),Promise.reject("[".concat(v,"] is not a valid public key"))):(console.error("Domain format should be https://domain.name"),Promise.reject("[".concat(b,"] is not a valid endpoint domain"))):Promise.reject("Public key not defined"):Promise.reject("Domain not defined")}},{key:"loadKryptonClient",value:function(){var b=this;if(!this.loading){var v=this.publicKey,C=this.domain;this.loading=!0;var w=document.createElement("script");w.type="text/javascript",/^.+\/$/.test(C)||(C+="/"),w.src="".concat(C,"static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"),w.setAttribute("kr-public-key",v),w.setAttribute("kr-spa-mode","true"),this.formToken&&w.setAttribute("kr-form-token",this.formToken);var S=document.querySelector('script[src="'.concat(w.src,'"]'));!S&&document.body?document.body.appendChild(w):document.body||console.warn("document.body is undefined")}return new Promise(function(T){(0,t.default)(window,"KR",function(){(0,t.default)(window.KR,"ready",function(){b.loaded=!0,b.loading=!1,T({KR:window.KR})})})})}},{key:"getKrypton",value:function(b){var v=this;return new Promise(function(C,w){b&&b!==v.publicKey?window.KR.setFormConfig({publicKey:b}).then(C).catch(w):C({KR:window.KR})})}}]),h}(),g=new m;i.default=g})(Ae);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=o(Ae);function o(s){return s&&s.__esModule?s:{default:s}}var l=t.default;i.default=l})($e);const ln=It($e),cn="/CodiShark/assets/americanExpress.04220897.svg",dn="/CodiShark/assets/dinersClub.c0623661.svg",mn="/CodiShark/assets/masterCard.c474b58f.svg",un="/CodiShark/assets/visa.82da6032.svg",hn=async i=>{const{amount:t,debtId:o,operationNumber:l,hash:s,rawClientAnswer:d}=i;console.log(i);try{return await zt.post("/operations/validate",{debt_id:o,amount:t,operation_number:l,hash:s,rawClientAnswer:d},{headers:Et()})}catch(m){throw console.log(m),new Error(m.message)}},fn=()=>{const i=kt();return Mt(hn,{onMutate:async()=>{await i.cancelQueries("iziPay")},onError:()=>{console.error("")},onSettled:()=>{i.invalidateQueries("iziPay")}})},pn=k.div`
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
`,_n={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:320,minHeight:480,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{API:gn}=A,{IZI_PAY_PUBLIC_KEY:bn,REACT_APP_IZI_PAY_URL:vn}=gn,Fe=i=>{const{open:t,setOpen:o,userDebt:l}=i,{id:s,amount_cancellation:d}=l!=null?l:{},{mutateAsync:m,isLoading:g}=ze(),{mutateAsync:h}=fn(),{setIsLoading:f,setPaymentStatus:b,currentDebtId:v,setOperationUserDebt:C}=Z(),{user:w}=fe(),S=z.exports.useCallback(async()=>{let T,E;if(!(!w||!s||!d)){v.current=s;try{await m({amount:d,debtId:s,type:2}).then(x=>{const{izipay:N,data:y}=x!=null?x:{},{operation_number:M}=y!=null?y:{},{answer:B}=N!=null?N:{},{formToken:$}=B!=null?B:{};return C(y),E=M,T=$,ln.loadLibrary(vn,bn)}).then(({KR:x})=>x.setFormConfig({formToken:T,"kr-language":"es-PE"})).then(({KR:x})=>x.onSubmit(N=>{const{clientAnswer:y,hash:M}=N!=null?N:{};if(!E)throw new Error("Operation Number Error");return h({debtId:s,operationNumber:E,amount:d,rawClientAnswer:JSON.stringify(y),hash:M}),o(!1),b("SUCCESS"),!1})).then(({KR:x})=>x.addForm("#myPaymentForm")).then(({KR:x,result:N})=>{x.showForm(N.formId),f(!1)}).catch(x=>{throw new Error(x)})}catch(x){console.log(x.response),o(!1),f(!1),b("ERROR")}}},[d,v,s,m,f,o,C,b,w,h]);return z.exports.useEffect(()=>{f(g)},[g,f]),z.exports.useEffect(()=>{t&&S()},[S,t]),e(Te,{open:t&&!g,onClose:()=>o(!t),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ee,{sx:_n,children:u(pn,{className:"IziPayForm",children:[e("img",{src:Tt,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e("div",{className:"form",children:e("div",{className:"container",children:e("div",{id:"myPaymentForm"})})}),u("div",{className:"IziPayForm__images",children:[e("img",{className:"IziPayForm__image",src:un,alt:"visa"}),e("img",{className:"IziPayForm__image",src:cn,alt:"americanExpress"}),e("img",{className:"IziPayForm__image",src:dn,alt:"dinersClub"}),e("img",{className:"IziPayForm__image",src:mn,alt:"masterCard"})]})]})})})};Fe.defaultProps={};var pe={},yn=Re.exports;Object.defineProperty(pe,"__esModule",{value:!0});var Ke=pe.default=void 0,wn=yn(Se()),xn=Oe,Cn=(0,wn.default)((0,xn.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");Ke=pe.default=Cn;var _e={},Nn=Re.exports;Object.defineProperty(_e,"__esModule",{value:!0});var Ue=_e.default=void 0,Pn=Nn(Se()),In=Oe,kn=(0,Pn.default)((0,In.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");Ue=_e.default=kn;const Sn=k.div`
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
`,Rn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:320,maxWidth:640,minHeight:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:Ce,ACCOUNT_NUMBER:Ne}=A,Le=i=>{const t=O().signIn.OperationNumberModal,{open:o,setOpen:l,operationNumber:s,userDebt:d}=i,{amount_cancellation:m,limit_date:g}=d!=null?d:{},h=()=>u("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:t.operation}),e("h1",{className:"OperationNumberModal__h1",children:s!=null?s:""}),u("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(`${t.operation}: 
`+(s!=null?s:"")+`
${t.current}:
${Ne}
${t.interbank}:
${Ce}`)},children:[e(Ke,{}),t.copy]}),e("p",{className:"OperationNumberModal__p",children:t.current}),e("h2",{className:"OperationNumberModal__h2",children:Ne}),e("p",{className:"OperationNumberModal__p",children:t.interbank}),e("h2",{className:"OperationNumberModal__h2",children:Ce})]}),f=()=>u("div",{className:"OperationNumberModal__section",children:[e("h3",{children:t.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${J(m!=null?m:0)}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${t.offer}: ${ie(g).format("DD/MM/YYYY")}`})]});return e(Te,{open:o,onClose:()=>l(!o),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(Ee,{sx:Rn,children:u(Sn,{className:"OperationNumberModal",children:[e(Zt,{className:"OperationNumberModal__closeIcon",onClick:()=>l(!o),children:e(Ue,{className:"OperationNumberModal__closeIcon--icon",fontSize:"large",color:"error"})}),e("p",{className:"OperationNumberModal__paragraph",children:t.paragraph}),u("div",{className:"OperationNumberModal__content",children:[h(),f()]})]})})})};Le.defaultProps={};const{BREAKPOINTS:D}=A,On=k.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin: 2.4rem auto;
  gap: 2rem;

  @media screen and (min-width: ${D.tablet}px) {
    padding: 1.6rem 2.4rem;
  }

  @media screen and (min-width: ${D.desktop}px) {
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

      @media screen and (min-width: ${D.desktop}px) {
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

        @media screen and (min-width: ${D.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${D.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${D.desktop}px) {
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

      @media screen and (min-width: ${D.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:Tn,ACCOUNT_NUMBER:zn}=A,Ye=i=>{const t=O().signIn.InformationClient,{userDebt:o}=i,[l,s]=z.exports.useState(!1),[d,m]=z.exports.useState(!1),[g,h]=z.exports.useState(),{id:f,amount_cancellation:b}=o!=null?o:{},{mutateAsync:v,reset:C,isLoading:w}=ze(),{setIsLoading:S,setPaymentStatus:T}=Z();z.exports.useEffect(()=>{S(w)},[w,S]);const E=()=>{T("NONE"),m(!d)},x=async()=>{T("NONE");try{b&&f&&(await v({amount:b,debtId:f}).then(N=>{const{data:y}=N!=null?N:{},{operation_number:M}=y!=null?y:{};h(M)}).catch(),s(!l),C())}catch(N){T("ERROR"),console.log(N)}};return u(On,{className:"InformationClient",children:[u("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:t.title}),e("h2",{className:"InformationClient__subtitle",children:t.subtitle}),e("img",{className:"InformationClient__image1",src:an,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:t.subtitle2}),u("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:rn,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:nn,alt:"iconMasterCardInformation"})]}),e(ue,{className:"InformationClient__button",variant:"contained",disabled:w,onClick:E,children:e("h3",{className:"InformationClient__text1",children:t.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:on,alt:"lineInformation"}),u("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:t.title2}),u("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:t.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:zn}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:Tn}),e("p",{className:"InformationClient__paragraph",children:t.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:t.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(ue,{className:"InformationClient__button2",variant:"contained",onClick:x,disabled:w,children:e("h3",{className:"InformationClient__text2",children:t.button2.toLocaleUpperCase()})})})]}),e(Fe,{open:d,setOpen:m,operationNumber:g,userDebt:o}),e(Le,{open:l,setOpen:s,operationNumber:g,userDebt:o})]})};Ye.defaultProps={};const En="/CodiShark/assets/rejectedImage.25910230.svg",Mn=k.div`
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
`,qe=i=>{const t=O().signIn.PaymentRejected,{setPaymentStatus:o}=Z();return e(Mn,{className:"PaymentRejected",children:e("div",{className:"PaymentRejected__container",children:u("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:En,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:t.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:t.disapproved}),e(ue,{className:"PaymentRejected__button",variant:"contained",onClick:()=>o("NONE"),children:e("h3",{className:"PaymentRejected__text",children:t.button})})]})})})};qe.defaultProps={};const jn="/CodiShark/assets/lineSucces.23eb9802.svg",$n="/CodiShark/assets/successImage.38cb00ed.svg",An=k.div`
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
`,Ve=i=>{var g;const t=O().signIn.PaymentRejected,{operationUserDebt:o}=Z(),{amount_paid:l,operation_date:s,operation_time:d}=o!=null?o:{},m=ie(s).format("DD/MM/YYYY");return e(An,{className:"PaymentSuccess",children:u("div",{className:"PaymentSuccess__container",children:[u("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:$n,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:t.success}),e("h2",{className:"PaymentSuccess__subtitle",children:t.approved})]}),e("img",{src:jn,alt:"lineSuccess"}),u("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:t.title}),u("div",{className:"PaymentSuccess__paragraph",children:[e("div",{className:"PaymentSuccess__package",children:u("p",{className:"PaymentSuccess__p1",children:[t.paragraph4,e("span",{className:"PaymentSuccess__span1",children:(g=`S./ ${J(l!=null?l:0)}`)!=null?g:"-"})]})}),e("div",{className:"PaymentSuccess__p2div",children:u("p",{className:"PaymentSuccess__p2",children:[t.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:m})]})}),e("div",{className:"PaymentSuccess__p3div",children:u("p",{className:"PaymentSuccess__p3",children:[t.paragraph3,e("span",{className:"PaymentSuccess__span3",children:d!=null?d:"-"})]})})]})]})]})})};Ve.defaultProps={};const Bn=k.div`
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
`,We=i=>{const{data:t}=i,{paymentStatus:o,currentDebtId:l}=Z(),{id:s}=t!=null?t:{},d=Rt().global.table.TableDebtUser.TableRowsExpand,m=(h,f)=>u("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${h} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:f!=null?f:"-"})]}),g=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return u(Bn,{className:"DebtExpandableRowsComponent",children:[u("div",{className:"DebtExpandableRowsComponent__container__expand",children:[m(d.entity,t==null?void 0:t.banking_entity),g(),m(d.typeDebt,t==null?void 0:t.product),g(),m(d.typeExchange,t==null?void 0:t.currency),g(),m(d.date,ie(t==null?void 0:t.limit_date).format("DD / MM / YYYY"))]}),o==="SUCCESS"&&l.current===s&&e(Ve,{}),o==="ERROR"&&l.current===s&&e(qe,{}),(o==="NONE"||l.current!==s)&&e(Ye,{userDebt:t})]})};We.defaultProps={};const{BREAKPOINTS:Pe}=A,Dn=k.div`
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

        @media screen and (max-width: ${Pe.mobile}px) {
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

      @media screen and (max-width: ${Pe.mobile}px) {
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
`,Ge=i=>{const{rowsPerPage:t,rowCount:o}=i,{currentPage:l,onChangePage:s}=i,d=O().global.table.TableDebtUser.Pagination,m=At(o,t),g=$t(m),f=l*t-t+1,b=l===1,v=l===m,C=z.exports.useCallback(()=>s(l-1),[l,s]),w=z.exports.useCallback(()=>s(l+1),[l,s]),S=z.exports.useCallback(y=>s(y),[s]),T=y=>e("div",{...y,children:y==null?void 0:y.value}),E=d.legend(f,o,o),x=y=>`Pagination__text--bold ${y?"Pagination__text--disabled":""}`,N=y=>`Pagination__container--numbers ${y===l?"Pagination__container--numbers-activated":""}`;return e(Dn,{className:"Pagination",children:u("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:E}),u("div",{className:"Pagination__container--pagination",children:[e("button",{className:x(b),"aria-disabled":b,onClick:C,disabled:b,children:d.back}),g.map((y,M)=>e(T,{value:y,className:N(y),onClick:()=>S(y)},M)),e("button",{className:x(v),"aria-disabled":v,onClick:w,disabled:v,children:d.next})]})]})})};Ge.defaultProps={};const{BREAKPOINTS:Fn}=A,X=k.div`
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

        @media screen and (min-width: ${Fn.mobile}px) {
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
`,Kn=i=>e(Ge,{...i}),He=i=>{const{data:t,columns:o,expandableRows:l,expandableRowsComponent:s}=i,{progressPending:d,expandOnRowClicked:m,expandableRowExpanded:g}=i;return e(X,{className:"DebtTable",children:e(Bt,{columns:o,data:t,expandableRows:l,expandableRowsComponent:s,expandOnRowClicked:m,paginationPerPage:Dt,paginationRowsPerPageOptions:Ft,expandableRowExpanded:g,paginationComponent:Kn,expandableIcon:{collapsed:null,expanded:null},progressPending:d,hiddenHeadRow:!0})})};He.defaultProps={};const Un=k.div`
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
`,Qe=i=>{const t=O().signIn.IndicatorsClientOne,{user:o}=fe(),{first_name:l,last_name:s,mother_last_name:d,dni:m}=o!=null?o:{};return e(Un,{className:"IndicatorsClientOne",children:u("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:t.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${l!=null?l:""} ${s!=null?s:""} ${d!=null?d:""}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:`DNI N\xB0 ${m!=null?m:""}`})]})})};Qe.defaultProps={};const Ln=k.div`
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
`,Ze=i=>{var l;const t=O().signIn.IndicatorsClientTwo,{total_debts:o}=i;return e(Ln,{className:"IndicatorsClientTwo",children:u("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:t.debt}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${(l=J(o!=null?o:0))!=null?l:""}`})]})})};Ze.defaultProps={};const Yn="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",qn=k.div`
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
`,Je=i=>{const t=O().signIn.PanelBannerClient;return e(qn,{className:"PanelBannerClient",children:u("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:Yn,alt:"personIcon"})}),u("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:t.title}),u("div",{className:"PanelBannerClient__section",children:[e("p",{children:t.paragraph1}),e("p",{children:t.paragraph2}),e("p",{children:t.paragraph3})]})]})]})})};Je.defaultProps={};const Vn=k.div`
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
`,ge=i=>{const{title:t,children:o}=i;return u(Vn,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:t}),e("div",{className:"SummaryCard__subtitle",children:o})]})};ge.defaultProps={};const he=i=>{const{content:t,isDate:o}=i,l=O().global.table.TableDebtUser.TableRows,s=()=>o?l.deadline:l.amount,d=()=>{var g;return o?t:`S/. ${(g=J(+t))!=null?g:""}`},m=()=>o?"DebtTable__text--date":"DebtTable__text--title";return e(X,{className:"DebtTable",children:e(ge,{title:s(),children:e("h3",{className:m(),children:d()})})})};he.defaultProps={isDate:!1};const Wn=i=>{var s;const{price:t,discount:o}=i,l=O().global.table.TableDebtUser.TableRows;return e(X,{className:"DebtTable",children:e(ge,{title:l.discount,children:u("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${J(t!=null?t:0)}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${(s=Math.round(o*100))!=null?s:""} %`})})]})})})},Gn=i=>{const{expand:t}=i,o=O().global.table.TableDebtUser.TableRows,[l,s]=z.exports.useState(t),d=()=>l?e(Kt,{}):e(Ut,{});return e(X,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>s(!l),children:u("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[o.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:d()})]})})},Ie=()=>e(X,{className:"DebtTable__container--divider"}),{BREAKPOINTS:ke}=A,Hn=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:i=>e(he,{content:i==null?void 0:i.capital_debt})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:ke.desktop,cell:()=>e(Ie,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"24rem",cell:i=>e(Wn,{price:i==null?void 0:i.amount_cancellation,discount:i==null?void 0:i.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:ke.desktop,cell:()=>e(Ie,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:i=>e(he,{content:ie(i==null?void 0:i.limit_date).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:i=>{var t;return e(Gn,{expand:(t=i==null?void 0:i.defaultExpanded)!=null?t:!1})}}],{BREAKPOINTS:me}=A,Qn=k.div`
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

  @media screen and (max-width: ${me.wide}px) {
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

      @media screen and (min-width: ${me.tablet}px) {
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

      @media screen and (min-width: ${me.wide}px) {
        display: block;
      }
    }
  }
`,Xe=i=>{const t=O().signIn.ClientContainer,{data:o,isLoading:l}=jt(),{data:s,total_debts:d}=o!=null?o:{};s&&(s==null?void 0:s.length)>0&&(s[0].defaultExpanded=!0);const m=()=>l?u(ne,{children:[e(H,{variant:"rounded",height:124,width:"100%"}),e(H,{variant:"rounded",height:124,width:"100%"})]}):u(ne,{children:[e(Qe,{}),e(Ze,{total_debts:d})]}),g=()=>l?e(H,{variant:"rounded",height:400,width:"100%"}):e(He,{data:s!=null?s:[],columns:Hn,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:We,expandableRowExpanded:f=>f.defaultExpanded,progressPending:l}),h=()=>l?u(ne,{children:[e(H,{variant:"rounded",height:280,width:"100%"}),e(H,{variant:"rounded",height:480,width:"100%"})]}):u(ne,{children:[e(Me,{}),e(je,{})]});return u(Ot,{children:[u(Qn,{className:"ClientContainer",children:[u("div",{className:"ClientContainer__section3",children:[u("div",{className:"ClientContainer__section1",children:[e(Je,{}),e("div",{className:"ClientContainer__section2",children:m()})]}),e("h2",{className:"ClientContainer__title",children:t.title}),g()]}),e("div",{className:"ClientContainer__section4",children:h()})]}),e("h6",{children:t.copyright})]})};Xe.defaultProps={};const et=i=>{const{user:t}=fe(),{rol:o}=t!=null?t:{};return o===10?e(bt,{}):o===1?e(Xe,{}):e(Lt,{})};et.defaultProps={};const fi=et;export{fi as default};
