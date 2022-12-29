import{l as Ne}from"./logoKonecta.892a9f49.js";import{B as je,S as Ge,P as Ue,A as qe,a as J,i as Q}from"./SwipperComponent.442af814.js";import{r as R,b as Ke,g as He,c as Ye,_ as ee,i as Ze,V as Je,k as Qe,a as i,l as Xe,aJ as se,aK as Se,m as et,q,a4 as tt,s as ce,C as Z,u as Oe,E as te,F as nt,j as P,G as Pe}from"./index.9ad24540.js";import{u as le}from"./i18n.hooks.009c0aa7.js";import{B as _e}from"./Button.95393443.js";import{E as rt,F as Ae,G as it,H as at,d as ot,v as st,I as ct,J as lt}from"./validations.utils.034110a4.js";import{f as ut}from"./common.utils.106d572f.js";import{u as Ee,C as me,T as fe,I as Ce,i as dt}from"./index.esm.6a3cd6ec.js";const pt=R.exports.createContext(),ke=pt;function mt(t){return Ke("MuiGrid",t)}const ft=[0,1,2,3,4,5,6,7,8,9,10],gt=["column-reverse","column","row-reverse","row"],ht=["nowrap","wrap-reverse","wrap"],X=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ne=He("MuiGrid",["root","container","item","zeroMinWidth",...ft.map(t=>`spacing-xs-${t}`),...gt.map(t=>`direction-xs-${t}`),...ht.map(t=>`wrap-xs-${t}`),...X.map(t=>`grid-xs-${t}`),...X.map(t=>`grid-sm-${t}`),...X.map(t=>`grid-md-${t}`),...X.map(t=>`grid-lg-${t}`),...X.map(t=>`grid-xl-${t}`)]),St=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Y(t){const o=parseFloat(t);return`${o}${String(t).replace(String(o),"")||"px"}`}function _t({theme:t,ownerState:o}){let u;return t.breakpoints.keys.reduce((n,l)=>{let r={};if(o[l]&&(u=o[l]),!u)return n;if(u===!0)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(u==="auto")r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const f=se({values:o.columns,breakpoints:t.breakpoints.values}),b=typeof f=="object"?f[l]:f;if(b==null)return n;const h=`${Math.round(u/b*1e8)/1e6}%`;let I={};if(o.container&&o.item&&o.columnSpacing!==0){const g=t.spacing(o.columnSpacing);if(g!=="0px"){const x=`calc(${h} + ${Y(g)})`;I={flexBasis:x,maxWidth:x}}}r=ee({flexBasis:h,flexGrow:0,maxWidth:h},I)}return t.breakpoints.values[l]===0?Object.assign(n,r):n[t.breakpoints.up(l)]=r,n},{})}function vt({theme:t,ownerState:o}){const u=se({values:o.direction,breakpoints:t.breakpoints.values});return Se({theme:t},u,n=>{const l={flexDirection:n};return n.indexOf("column")===0&&(l[`& > .${ne.item}`]={maxWidth:"none"}),l})}function Fe({breakpoints:t,values:o}){let u="";Object.keys(o).forEach(l=>{u===""&&o[l]!==0&&(u=l)});const n=Object.keys(t).sort((l,r)=>t[l]-t[r]);return n.slice(0,n.indexOf(u))}function It({theme:t,ownerState:o}){const{container:u,rowSpacing:n}=o;let l={};if(u&&n!==0){const r=se({values:n,breakpoints:t.breakpoints.values});let f;typeof r=="object"&&(f=Fe({breakpoints:t.breakpoints.values,values:r})),l=Se({theme:t},r,(b,h)=>{var I;const g=t.spacing(b);return g!=="0px"?{marginTop:`-${Y(g)}`,[`& > .${ne.item}`]:{paddingTop:Y(g)}}:(I=f)!=null&&I.includes(h)?{}:{marginTop:0,[`& > .${ne.item}`]:{paddingTop:0}}})}return l}function yt({theme:t,ownerState:o}){const{container:u,columnSpacing:n}=o;let l={};if(u&&n!==0){const r=se({values:n,breakpoints:t.breakpoints.values});let f;typeof r=="object"&&(f=Fe({breakpoints:t.breakpoints.values,values:r})),l=Se({theme:t},r,(b,h)=>{var I;const g=t.spacing(b);return g!=="0px"?{width:`calc(100% + ${Y(g)})`,marginLeft:`-${Y(g)}`,[`& > .${ne.item}`]:{paddingLeft:Y(g)}}:(I=f)!=null&&I.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${ne.item}`]:{paddingLeft:0}}})}return l}function bt(t,o,u={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[u[`spacing-xs-${String(t)}`]];const n=[];return o.forEach(l=>{const r=t[l];Number(r)>0&&n.push(u[`spacing-${l}-${String(r)}`])}),n}const wt=Ye("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:u}=t,{container:n,direction:l,item:r,spacing:f,wrap:b,zeroMinWidth:h,breakpoints:I}=u;let g=[];n&&(g=bt(f,I,o));const x=[];return I.forEach(w=>{const y=u[w];y&&x.push(o[`grid-${w}-${String(y)}`])}),[o.root,n&&o.container,r&&o.item,h&&o.zeroMinWidth,...g,l!=="row"&&o[`direction-xs-${String(l)}`],b!=="wrap"&&o[`wrap-xs-${String(b)}`],...x]}})(({ownerState:t})=>ee({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),vt,It,yt,_t);function xt(t,o){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const u=[];return o.forEach(n=>{const l=t[n];if(Number(l)>0){const r=`spacing-${n}-${String(l)}`;u.push(r)}}),u}const Nt=t=>{const{classes:o,container:u,direction:n,item:l,spacing:r,wrap:f,zeroMinWidth:b,breakpoints:h}=t;let I=[];u&&(I=xt(r,h));const g=[];h.forEach(w=>{const y=t[w];y&&g.push(`grid-${w}-${String(y)}`)});const x={root:["root",u&&"container",l&&"item",b&&"zeroMinWidth",...I,n!=="row"&&`direction-xs-${String(n)}`,f!=="wrap"&&`wrap-xs-${String(f)}`,...g]};return et(x,mt,o)},Ct=R.exports.forwardRef(function(o,u){const n=Ze({props:o,name:"MuiGrid"}),{breakpoints:l}=Je(),r=rt(n),{className:f,columns:b,columnSpacing:h,component:I="div",container:g=!1,direction:x="row",item:w=!1,rowSpacing:y,spacing:$=0,wrap:_="wrap",zeroMinWidth:N=!1}=r,C=Qe(r,St),v=y||$,L=h||$,O=R.exports.useContext(ke),T=g?b||12:O,F={},V=ee({},C);l.keys.forEach(K=>{C[K]!=null&&(F[K]=C[K],delete V[K])});const D=ee({},r,{columns:T,container:g,direction:x,item:w,rowSpacing:v,columnSpacing:L,wrap:_,zeroMinWidth:N,spacing:$},F,{breakpoints:l.keys}),B=Nt(D);return i(ke.Provider,{value:T,children:i(wt,ee({ownerState:D,className:Xe(B.root,f),as:I,ref:u},V))})}),ae=Ct;function kt(t,o){t===void 0&&(t=6e4),o===void 0&&(o=1e3);var u=q.useState(0),n=u[0],l=u[1],r=q.useRef({}),f=function w(y){r.current.started||(r.current.started=y,r.current.lastInterval=y);var $=Math.min(o,r.current.timeLeft||1/0);y-r.current.lastInterval>=$&&(r.current.lastInterval+=$,l(function(_){return r.current.timeLeft=_-$,r.current.timeLeft})),y-r.current.started<r.current.timeToCount?r.current.requestId=window.requestAnimationFrame(w):(r.current={},l(0))},b=q.useCallback(function(w){window.cancelAnimationFrame(r.current.requestId);var y=w!==void 0?w:t;r.current.started=null,r.current.lastInterval=null,r.current.timeToCount=y,r.current.requestId=window.requestAnimationFrame(f),l(y)},[]),h=q.useCallback(function(){window.cancelAnimationFrame(r.current.requestId),r.current.started=null,r.current.lastInterval=null,r.current.timeToCount=r.current.timeLeft},[]),I=q.useCallback(function(){!r.current.started&&r.current.timeLeft>0&&(window.cancelAnimationFrame(r.current.requestId),r.current.requestId=window.requestAnimationFrame(f))},[]),g=q.useCallback(function(){r.current.timeLeft&&(window.cancelAnimationFrame(r.current.requestId),r.current={},l(0))},[]),x=q.useMemo(function(){return{start:b,pause:h,resume:I,reset:g}},[]);return q.useEffect(function(){return function(){return window.cancelAnimationFrame(r.current.requestId)}},[]),[n,x]}var Le={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(R.exports),u=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function n(a){if(typeof WeakMap!="function")return null;var d=new WeakMap,p=new WeakMap;return(n=function(s){return s?p:d})(a)}function l(a,d){if(!d&&a&&a.__esModule)return a;if(a===null||L(a)!=="object"&&typeof a!="function")return{default:a};var p=n(d);if(p&&p.has(a))return p.get(a);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in a)if(S!=="default"&&Object.prototype.hasOwnProperty.call(a,S)){var k=s?Object.getOwnPropertyDescriptor(a,S):null;k&&(k.get||k.set)?Object.defineProperty(e,S,k):e[S]=a[S]}return e.default=a,p&&p.set(a,e),e}function r(){return r=Object.assign||function(a){for(var d=1;d<arguments.length;d++){var p=arguments[d];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(a[e]=p[e])}return a},r.apply(this,arguments)}function f(a,d){if(a==null)return{};var p=b(a,d),e,s;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(a);for(s=0;s<S.length;s++)e=S[s],!(d.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(p[e]=a[e]))}return p}function b(a,d){if(a==null)return{};var p={},e=Object.keys(a),s,S;for(S=0;S<e.length;S++)s=e[S],!(d.indexOf(s)>=0)&&(p[s]=a[s]);return p}function h(a,d){if(!(a instanceof d))throw new TypeError("Cannot call a class as a function")}function I(a,d){for(var p=0;p<d.length;p++){var e=d[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function g(a,d,p){return d&&I(a.prototype,d),p&&I(a,p),a}function x(a,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(d&&d.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),d&&w(a,d)}function w(a,d){return w=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},w(a,d)}function y(a){var d=N();return function(){var e=C(a),s;if(d){var S=C(this).constructor;s=Reflect.construct(e,arguments,S)}else s=e.apply(this,arguments);return $(this,s)}}function $(a,d){return d&&(L(d)==="object"||typeof d=="function")?d:_(a)}function _(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function N(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function C(a){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},C(a)}function v(a,d,p){return d in a?Object.defineProperty(a,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):a[d]=p,a}function L(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(p){return typeof p}:L=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},L(a)}var O=8,T=37,F=39,V=46,D=32,B=function(d){return L(d)==="object"},K=function(a){x(p,a);var d=y(p);function p(e){var s;return h(this,p),s=d.call(this,e),v(_(s),"getClasses",function(){for(var S=arguments.length,k=new Array(S),c=0;c<S;c++)k[c]=arguments[c];return k.filter(function(m){return!B(m)&&m!==!1}).join(" ")}),v(_(s),"getType",function(){var S=s.props,k=S.isInputSecure,c=S.isInputNum;return k?"password":c?"tel":"text"}),s.input=o.default.createRef(),s}return g(p,[{key:"componentDidMount",value:function(){var s=this.props,S=s.focus,k=s.shouldAutoFocus,c=this.input.current;c&&S&&k&&c.focus()}},{key:"componentDidUpdate",value:function(s){var S=this.props.focus,k=this.input.current;s.focus!==S&&k&&S&&(k.focus(),k.select())}},{key:"render",value:function(){var s=this.props,S=s.placeholder,k=s.separator,c=s.isLastChild,m=s.inputStyle,A=s.focus,M=s.isDisabled,H=s.hasErrored,j=s.errorStyle,W=s.focusStyle,G=s.disabledStyle;s.shouldAutoFocus;var U=s.isInputNum,re=s.index,ie=s.value,ue=s.className;s.isInputSecure;var de=f(s,u);return o.default.createElement("div",{className:ue,style:{display:"flex",alignItems:"center"}},o.default.createElement("input",r({"aria-label":"".concat(re===0?"Please enter verification code. ":"").concat(U?"Digit":"Character"," ").concat(re+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},B(m)&&m,A&&B(W)&&W,M&&B(G)&&G,H&&B(j)&&j),placeholder:S,className:this.getClasses(m,A&&W,M&&G,H&&j),type:this.getType(),maxLength:"1",ref:this.input,disabled:M,value:ie||""},de)),!c&&k)}}]),p}(o.PureComponent),ve=function(a){x(p,a);var d=y(p);function p(){var e;h(this,p);for(var s=arguments.length,S=new Array(s),k=0;k<s;k++)S[k]=arguments[k];return e=d.call.apply(d,[this].concat(S)),v(_(e),"state",{activeInput:0}),v(_(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),v(_(e),"getPlaceholderValue",function(){var c=e.props,m=c.placeholder,A=c.numInputs;if(typeof m=="string"){if(m.length===A)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),v(_(e),"handleOtpChange",function(c){var m=e.props.onChange,A=c.join("");m(A)}),v(_(e),"isInputValueValid",function(c){var m=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return m&&c.trim().length===1}),v(_(e),"focusInput",function(c){var m=e.props.numInputs,A=Math.max(Math.min(m-1,c),0);e.setState({activeInput:A})}),v(_(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),v(_(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),v(_(e),"changeCodeAtFocus",function(c){var m=e.state.activeInput,A=e.getOtpValue();A[m]=c[0],e.handleOtpChange(A)}),v(_(e),"handleOnPaste",function(c){c.preventDefault();var m=e.state.activeInput,A=e.props,M=A.numInputs,H=A.isDisabled;if(!H){for(var j=e.getOtpValue(),W=m,G=c.clipboardData.getData("text/plain").slice(0,M-m).split(""),U=0;U<M;++U)U>=m&&G.length>0&&(j[U]=G.shift(),W++);e.setState({activeInput:W},function(){e.focusInput(W),e.handleOtpChange(j)})}}),v(_(e),"handleOnChange",function(c){var m=c.target.value;e.isInputValueValid(m)&&e.changeCodeAtFocus(m)}),v(_(e),"handleOnKeyDown",function(c){c.keyCode===O||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===V||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===T||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===F||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===D||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),v(_(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var m=c.nativeEvent;m.data===null&&m.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),v(_(e),"renderInputs",function(){for(var c=e.state.activeInput,m=e.props,A=m.numInputs,M=m.inputStyle,H=m.focusStyle,j=m.separator,W=m.isDisabled,G=m.disabledStyle,U=m.hasErrored,re=m.errorStyle,ie=m.shouldAutoFocus,ue=m.isInputNum,de=m.isInputSecure,De=m.className,Ie=[],ye=e.getOtpValue(),be=e.getPlaceholderValue(),we=e.props["data-cy"],xe=e.props["data-testid"],We=function(z){Ie.push(o.default.createElement(K,{placeholder:be&&be[z],key:z,index:z,focus:c===z,value:ye&&ye[z],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Me){e.setState({activeInput:z}),Me.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:j,inputStyle:M,focusStyle:H,isLastChild:z===A-1,isDisabled:W,disabledStyle:G,hasErrored:U,errorStyle:re,shouldAutoFocus:ie,isInputNum:ue,isInputSecure:de,className:De,"data-cy":we&&"".concat(we,"-").concat(z),"data-testid":xe&&"".concat(xe,"-").concat(z)}))},pe=0;pe<A;pe++)We(pe);return Ie}),e}return g(p,[{key:"render",value:function(){var s=this.props.containerStyle;return o.default.createElement("div",{style:Object.assign({display:"flex"},B(s)&&s),className:B(s)?"":s},this.renderInputs())}}]),p}(o.Component);v(ve,"defaultProps",{numInputs:4,onChange:function(d){return console.log(d)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Re=ve;t.default=Re})(Le);const $t=tt(Le),{BREAKPOINTS:ge}=Z,Ot=ce.div`
  .SignInCode {
    &__container {
      &--OTP {
        display: flex;
        justify-content: center;
      }

      &--button {
        margin: 3.2rem 0;

        @media screen and (min-width: ${ge.desktop}px) {
          margin-top: 1.2rem;
          margin-bottom: 1.6rem;
        }
      }

      &--separator {
        width: 1.2rem;
      }

      &--text > * {
        margin-bottom: 2.4rem;
        text-align: center;

        @media screen and (min-width: ${ge.desktop}px) {
          margin-bottom: 0.8rem;
          text-align: left;
        }
      }

      &--time {
        margin: 1rem auto;
        text-align: center;
      }
    }

    &__component {
      &--button {
        padding: 0.8rem 0;
      }
    }
    &__input {
      background: var(--palette-white);
      border: 0.04rem solid var(--palette-black);
      border-radius: 0.8rem;
      width: 4.8rem !important;
      height: 4.8rem !important;

      &--text {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
        color: var(--palette-darkText);
      }

      &--focus {
        border: 0.04rem solid var(--palette-skyBlue);
        color: var(--palette-skyBlue);
      }

      &--time {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }

    &__text {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.6rem;

      &--color {
        color: var(--palette-skyBlue);
      }

      &--clickable {
        display: block;

        @media screen and (min-width: ${ge.desktop}px) {
          display: inline-block;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`,{ENTRY_PATH:Pt}=Z.ROUTES,{INTERVAL:At,INITIAL_TIME:Et}=Z,Te=t=>{const o=le().signIn.SignInFormCode,[u,n]=R.exports.useState(!1),[l,r]=R.exports.useState(""),f=Oe(),{setSignInStep:b,user:h,setUser:I}=te(),{signInMethod:g}=te(),[,x]=nt("user"),{mutateAsync:w,reset:y}=Ae(),{mutateAsync:$,reset:_}=it(),[N,{start:C}]=kt(Et,At),v=F=>r(F),L=async()=>{try{n(!0),w({dni:h==null?void 0:h.dni,type:g}),C(),y(),n(!1)}catch{n(!1)}},O=async()=>{try{n(!0),await $({password:l,dni:h==null?void 0:h.dni}).then(F=>{const{access_token:V,user:D}=F!=null?F:{};I(D),x(D),ot.setCookie("token",V)}),_(),n(!1),b(0),f(Pt)}catch{n(!1)}},T=()=>i("span",{className:"SignInCode__container--separator"});return R.exports.useEffect(()=>{C()},[C]),P(Ot,{className:"SignInCode",children:[i($t,{value:l,onChange:v,numInputs:at,separator:T(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),i("div",{className:"SignInCode__container--time",children:P("p",{className:"SignInCode__text SignInCode__text--time",children:["(",ut(N/1e3),")"]})}),i("div",{className:"SignInCode__container--button",children:i(_e,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:O,disabled:u,className:"SignInCode__component--button",children:o.button})}),P("div",{className:"SignInCode__container--text",children:[P("p",{className:"SignInCode__text",children:[`${o.question} `,i("span",{onClick:L,className:"SignInCode__text--color SignInCode__text--clickable",children:o.answer})]}),i("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>b(1),children:o.method})]})]})};Te.defaultProps={};const Ft="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Lt=ce.div`
  .SignInForm {
    &__container {
      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }
    }

    &__component {
      &--button {
        padding: 0.8rem 0;
      }
    }

    &__error {
      color: var(--palette-error);
      font-weight: 600;
      text-align: center;
      margin-top: 0.4rem;
    }
  }
`,he=t=>{const o=le().signIn.SignInFormUser,[u,n,l]=st(),[r,f]=R.exports.useState(!1),{setSignInStep:b,setUser:h}=te(),{mutateAsync:I,reset:g}=ct(),[x,w]=R.exports.useState(""),{control:y,handleSubmit:$}=Ee();return i(Lt,{className:"SignInForm",children:P(je,{component:"form",noValidate:!0,onSubmit:$(async N=>{var C;try{f(!0),w("");const v={dni:N==null?void 0:N.dni,cod_verifier:N==null?void 0:N.cod,emision_date:N==null?void 0:N.date_begin};await I(v).then(L=>h(L)),g(),f(!1),b(1)}catch(v){(C=v==null?void 0:v.toString())!=null&&C.includes("422")?w("No se encontr\xF3 el usuario en el registro."):w("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),f(!1)}}),children:[P(ae,{container:!0,spacing:2,children:[i(ae,{item:!0,xs:12,sm:8,md:8,children:i(me,{name:u.name,control:y,rules:u.rules,defaultValue:"",render:({field:N,fieldState:C})=>i(fe,{field:N,fields:C,config:{type:u.type,label:u.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:u==null?void 0:u.maxLength,InputProps:{endAdornment:i(Ce,{position:"end",children:i("img",{className:"SignInForm__icon",src:dt,alt:"iconPerson"})})}}})})}),i(ae,{item:!0,xs:12,sm:4,md:4,children:i(me,{name:n.name,control:y,rules:n.rules,defaultValue:"",render:({field:N,fieldState:C})=>i(fe,{field:N,fields:C,config:{type:n.type,label:n.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:n==null?void 0:n.maxLength,InputProps:{endAdornment:i(Ce,{position:"end",children:i("img",{className:"SignInForm__icon",src:Ft,alt:"iconAlert"})})}}})})}),i(ae,{item:!0,xs:12,md:12,children:i(me,{name:l.name,control:y,rules:l.rules,defaultValue:"",render:({field:N,fieldState:C})=>i(fe,{field:N,fields:C,config:{type:l.type,label:l.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),i("div",{className:"SignInForm__container--button",children:i(_e,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:r,className:"SignInForm__component--button",children:o.button})}),(x==null?void 0:x.length)>0?i("h3",{className:"SignInForm__error",children:x}):null]})})};he.defaultProps={};const{BREAKPOINTS:oe}=Z,Tt=ce.div`
  .SignInValidate {
    &__container {
      &--button {
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
      }

      &__input {
        outline: 0.1rem solid var(--palette-skyBlue);
        appearance: none;
        -webkit-appearance: none;
        border: 0.2rem solid var(--palette-white);
        background-color: var(--palette-white);
        border-radius: 50%;

        &:hover {
          outline-color: var(--palette-skyBlue);
        }

        &:checked {
          outline-color: var(--palette-skyBlue);
          background-color: var(--palette-skyBlue);
          animation: outline-checked;
          animation-duration: 0.1s;
          animation-iteration-count: 4;
          animation-direction: alternate;
          animation-timing-function: linear;
        }

        @keyframes outline-checked {
          0% {
            outline-offset: 0;
          }

          100% {
            outline-offset: -0.16rem;
          }
        }
      }

      &__global {
        width: auto;

        @media screen and (min-width: ${oe.desktop}px) {
          width: 38.4rem;
        }
      }

      & > * {
        margin-bottom: 1.6rem;
      }

      &__form {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        background-color: var(--palette-greyBackgroundSecond);
        padding: 2.4rem;
        border-radius: 1.6rem;

        @media screen and (min-width: ${oe.mobile}px) {
          background-color: unset;
          padding: 0;
          border-radius: 0;
        }
      }
    }

    &__component {
      &--button {
        padding: 0.8rem 0;
      }
    }

    &__text {
      &--greeting {
        font-weight: 400;
        font-size: 1.6rem;

        @media screen and (min-width: ${oe.mobile}px) {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.6rem;
        }

        &__bold {
          font-weight: bold;
        }
      }

      &--indication {
        font-size: 1.2rem;
      }

      &--color {
        color: var(--palette-skyBlue);
        white-space: nowrap;
      }

      &--block {
        display: block;

        @media screen and (min-width: ${oe.mobile}px) {
          display: inline-block;
        }
      }
    }
  }

  input[type="radio"] {
    height: 1.16rem;
    width: 1.16rem;
    margin-right: 0.8rem;
  }
`,Ve=t=>{const o=le().signIn.SignInValidation,u=lt(),[n,l]=R.exports.useState(!1),{setSignInStep:r,user:f,setSignInMethod:b}=te(),{register:h,handleSubmit:I}=Ee(),{mutateAsync:g,reset:x}=Ae(),{first_name:w,last_name:y,phone:$,email:_}=f!=null?f:{},N=async O=>{try{l(!0),await g({dni:f==null?void 0:f.dni,type:O==null?void 0:O.verifyMethod}),x(),b(O==null?void 0:O.verifyMethod),l(!1),r(2)}catch{l(!1)}},C=O=>{const{id:T,value:F,label:V,name:D,labelExtension:B}=O;return i("div",{children:P("label",{htmlFor:T,children:[i("input",{className:"SignInValidate__container__input",type:"radio",value:F,id:T,...h(D,{required:!0})}),V,i("span",{className:"SignInValidate__text--color",children:B})]})})},v=()=>P(Pe,{children:[P("p",{className:"SignInValidate__text--greeting",children:[`${o.greeting} `,i("span",{className:"SignInValidate__text--greeting__bold SignInValidate__text--block",children:`${w!=null?w:""} ${y!=null?y:""}`})]}),i("p",{className:"SignInValidate__text--indication",children:o.instructions})]});return i(Tt,{className:"SignInValidate",children:i("div",{className:"SignInValidate__container__global",children:(()=>P("form",{onSubmit:I(N),children:[P("div",{className:"SignInValidate__container__form",children:[v(),u.map((O,T)=>{var F,V;return i(C,{id:O.id,name:O.name,value:O.value,label:O.label,labelExtension:O.value==="SMS"?` *** *** ${(F=$==null?void 0:$.slice(($==null?void 0:$.length)-3))!=null?F:""}`:` *** *** ${(V=_==null?void 0:_.slice((_==null?void 0:_.length)-15))!=null?V:""}`},T)})]}),i("div",{className:"SignInValidate__container--button",children:i(_e,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInValidate__component--button",children:o.button})})]}))()})})};Ve.defaultProps={};const Vt="/CodiShark/assets/loginImageUser.fd914332.jpg",Bt="/CodiShark/assets/loginImageUser.93122b01.webp",{BREAKPOINTS:E}=Z,$e=ce.div`
  .SignIn {
    &__renderList {
      display: none;

      @media screen and (min-width: ${E.tablet}px) {
        display: block;
        margin-left: 4rem;
        position: absolute;
        top: calc(48% - 3.2rem);
        color: var(--palette-white);
      }

      &--ul {
        margin: 1.6rem 2.4rem;
      }

      &--h1 {
        color: inherit;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 3.2rem;

        @media screen and (min-width: ${E.desktop}px) {
          font-size: 3.2rem;
          line-height: 4rem;
        }

        @media screen and (min-width: 1600px) {
          font-size: 4.8rem;
          line-height: 6.4rem;
        }
      }

      &--h2 {
        color: inherit;
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.4rem;

        @media screen and (min-width: ${E.desktop}px) {
          font-size: 2.4rem;
          line-height: 3.2rem;
        }

        @media screen and (min-width: 1600px) {
          font-size: 3.2rem;
          line-height: 4.8rem;
        }
      }
    }

    &__component {
      &--copyright {
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;
      }

      &--form {
        display: flex;
        flex-direction: inherit;
        width: 100vw;
        gap: 3rem;

        @media screen and (min-width: ${E.mobile}px) {
          gap: 5.6rem;
          width: 90vw;
        }

        @media screen and (min-width: ${E.tablet}px) {
          width: 32rem;
        }

        @media screen and (min-width: ${E.desktop}px) {
          width: 38rem;
        }

        @media screen and (min-width: ${E.wide}px) {
          width: 48rem;
        }

        &-content {
          display: flex;
          justify-content: center;
          width: inherit;

          @media screen and (min-width: ${E.mobile}px) {
            justify-content: none;
          }

          & > * {
            width: ${t=>t.signInStep===void 0||t.signInStep===0?"80vw":"90vw"};

            @media screen and (min-width: ${E.mobile}px) {
              width: auto;
            }
          }
        }

        &-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.6rem;

          @media screen and (min-width: ${E.mobile}px) {
            gap: 0;
          }
        }

        &-logo {
          position: absolute;
          top: 0;
          width: 18rem;
          margin-top: 4rem;

          @media screen and (min-width: ${E.mobile}px) {
            display: none;
          }
        }
      }

      &--swipper {
        width: 96vw;

        @media screen and (min-width: ${E.mobile}px) {
          display: none;
        }

        &-image {
          width: 30rem;
          height: 18rem;
          border-radius: 1.6rem;
          object-fit: cover;
          object-position: center;
        }
      }

      &--logo {
        display: none;

        @media screen and (min-width: ${E.mobile}px) {
          display: block;
          width: 32rem;
          height: 8.8rem;
        }
      }
    }

    &__container {
      &--components {
        display: flex;
        align-items: center;
        height: 100vh;
      }

      &--content {
        margin-bottom: 5.6rem;
      }

      &--content > * {
        margin-bottom: 0.8rem;
      }

      &--copyright {
        position: absolute;
        bottom: 0;
        padding: 0;
        padding: 1.6rem 0;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        background-color: var(--palette-blue);
        color: var(--palette-white);

        @media screen and (min-width: ${E.mobile}px) {
          padding-bottom: 1.6rem;
          background-color: inherit;
          color: var(--palette-darkText);
        }
      }

      &--form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100vw;
        height: 100vh;

        @media screen and (min-width: ${E.mobile}px) {
          justify-content: center;
        }

        @media screen and (min-width: ${E.tablet}px) {
          width: 50vw;
        }
      }

      &--image {
        display: none;

        @media screen and (min-width: ${E.tablet}px) {
          display: block;
          background-image: url(${Vt});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          position: relative;
          background-image: -webkit-image-set(url(${Bt}));
          height: inherit;
          width: 60vw;
        }
      }

      &--separate {
        margin-top: 1.6rem;
      }
    }

    &__title {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 700;
    }

    &__subtitle {
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-weight: 400;
      text-align: center;
    }
  }
`,{ENTRY_PATH:Rt}=Z.ROUTES,Be=t=>{const{isAnonymous:o,signInStep:u}=te(),n=le().signIn.SignInFormUser,l=Oe();R.exports.useEffect(()=>{if(!o){l(Rt);return}},[o,l]);const r=()=>{switch(u){case 0:return i(he,{});case 1:return i(Ve,{});case 2:return i(Te,{});default:return i(he,{})}},f=()=>i($e,{className:"SignIn__component--swipper",children:P(Ge,{slidesPerView:"auto",pagination:{clickable:!0},autoPlay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,spaceBetween:8,modules:[Ue,qe],children:[i(J,{children:i("img",{src:Q,alt:`${n.image} - 1`,className:"SignIn__component--swipper-image"})}),i(J,{children:i("img",{src:Q,alt:`${n.image} - 2`,className:"SignIn__component--swipper-image"})}),i(J,{children:i("img",{src:Q,alt:`${n.image} - 3`,className:"SignIn__component--swipper-image"})}),i(J,{children:i("img",{src:Q,alt:`${n.image} - 4`,className:"SignIn__component--swipper-image"})}),i(J,{children:i("img",{src:Q,alt:`${n.image} - 5`,className:"SignIn__component--swipper-image"})})]})}),b=()=>{const g=()=>u===2?"SignIn__container--separate":"";return P(Pe,{children:[i("img",{src:Ne,alt:n.altLogo,className:"SignIn__component--logo"}),f(),i("h1",{className:"SignIn__title",children:u!==2?n.title.toUpperCase():n.titleAlt.toUpperCase()}),P("div",{className:g(),children:[i("p",{className:"SignIn__subtitle",children:u!==2?n.subtitle:n.subtitleAlt}),u===2&&i("p",{className:"SignIn__subtitle SignIn__subtitle-sepa",children:n.subtitleAltTwo})]})]})},h=()=>i("p",{className:"SignIn__component--copyright",children:n.copyright});return i($e,{className:"SignIn",signInStep:u,children:P("div",{className:"SignIn__container--components",children:[i("div",{className:"SignIn__container--image",children:(()=>P("div",{className:"SignIn__renderList",children:[i("h2",{className:"SignIn__renderList--h2",children:n.benefitTitle}),i("h1",{className:"SignIn__renderList--h1",children:n.benefitSubTitle}),P("ul",{className:"SignIn__renderList--ul",children:[i("li",{className:"SignIn__renderList--h2",children:n.ul1}),i("li",{className:"SignIn__renderList--h2",children:n.ul2}),i("li",{className:"SignIn__renderList--h2",children:n.ul3}),i("li",{className:"SignIn__renderList--h2",children:n.ul4})]})]}))()}),P("div",{className:"SignIn__container--form",children:[i("div",{className:"SignIn__component--form-logo",children:i("img",{src:Ne,alt:n.altLogo})}),P("div",{className:"SignIn__component--form",children:[i("div",{className:"SignIn__component--form-header",children:b()}),i("div",{className:"SignIn__component--form-content",children:r()})]}),i("div",{className:"SignIn__container--copyright",children:h()})]})]})})};Be.defaultProps={};const Ht=Be;export{Ht as default};
