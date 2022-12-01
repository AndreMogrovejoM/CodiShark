import{C as pe}from"./constants.03d913e0.js";import{t as xe,u as Q,v as we,w as We,p as Me,x as ze,P as je}from"./auth.service.hooks.7d2206e7.js";import{u as re}from"./i18n.hooks.02144d44.js";import{an as Ue,ao as Ge,r as E,ap as qe,k as Ce,a as d,_ as Y,l as Ne,aq as Ke,a6 as He,b as Ye,g as Ze,c as Je,i as Qe,$ as Xe,ar as ie,as as fe,m as et,p as G,V as tt,s as ae,u as Oe,D as nt,j as P,F as ke}from"./index.d266eea9.js";import{B as me}from"./Button.9fe5d7ca.js";import{f as rt}from"./common.utils.834bf330.js";import{m as it,v as at,d as ot}from"./validations.utils.cdf78647.js";import{u as Pe,C as le,T as ue,I as _e,i as st}from"./index.esm.aa522baa.js";const ct=["className","component"];function lt(t={}){const{defaultTheme:a,defaultClassName:l="MuiBox-root",generateClassName:r,styleFunctionSx:o=Ge}=t,n=Ue("div",{shouldForwardProp:I=>I!=="theme"&&I!=="sx"&&I!=="as"})(o);return E.exports.forwardRef(function(S,_){const v=qe(a),w=xe(S),{className:x,component:b="div"}=w,h=Ce(w,ct);return d(n,Y({as:b,ref:_,className:Ne(x,r?r(l):l),theme:v},h))})}const ut=Ke(),dt=lt({defaultTheme:ut,defaultClassName:"MuiBox-root",generateClassName:He.generate}),ne=dt,pt=E.exports.createContext(),be=pt;function ft(t){return Ye("MuiGrid",t)}const mt=[0,1,2,3,4,5,6,7,8,9,10],gt=["column-reverse","column","row-reverse","row"],ht=["nowrap","wrap-reverse","wrap"],J=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],X=Ze("MuiGrid",["root","container","item","zeroMinWidth",...mt.map(t=>`spacing-xs-${t}`),...gt.map(t=>`direction-xs-${t}`),...ht.map(t=>`wrap-xs-${t}`),...J.map(t=>`grid-xs-${t}`),...J.map(t=>`grid-sm-${t}`),...J.map(t=>`grid-md-${t}`),...J.map(t=>`grid-lg-${t}`),...J.map(t=>`grid-xl-${t}`)]),St=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(t){const a=parseFloat(t);return`${a}${String(t).replace(String(a),"")||"px"}`}function vt({theme:t,ownerState:a}){let l;return t.breakpoints.keys.reduce((r,o)=>{let n={};if(a[o]&&(l=a[o]),!l)return r;if(l===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(l==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const g=ie({values:a.columns,breakpoints:t.breakpoints.values}),I=typeof g=="object"?g[o]:g;if(I==null)return r;const S=`${Math.round(l/I*1e8)/1e6}%`;let _={};if(a.container&&a.item&&a.columnSpacing!==0){const v=t.spacing(a.columnSpacing);if(v!=="0px"){const w=`calc(${S} + ${Z(v)})`;_={flexBasis:w,maxWidth:w}}}n=Y({flexBasis:S,flexGrow:0,maxWidth:S},_)}return t.breakpoints.values[o]===0?Object.assign(r,n):r[t.breakpoints.up(o)]=n,r},{})}function It({theme:t,ownerState:a}){const l=ie({values:a.direction,breakpoints:t.breakpoints.values});return fe({theme:t},l,r=>{const o={flexDirection:r};return r.indexOf("column")===0&&(o[`& > .${X.item}`]={maxWidth:"none"}),o})}function $e({breakpoints:t,values:a}){let l="";Object.keys(a).forEach(o=>{l===""&&a[o]!==0&&(l=o)});const r=Object.keys(t).sort((o,n)=>t[o]-t[n]);return r.slice(0,r.indexOf(l))}function yt({theme:t,ownerState:a}){const{container:l,rowSpacing:r}=a;let o={};if(l&&r!==0){const n=ie({values:r,breakpoints:t.breakpoints.values});let g;typeof n=="object"&&(g=$e({breakpoints:t.breakpoints.values,values:n})),o=fe({theme:t},n,(I,S)=>{var _;const v=t.spacing(I);return v!=="0px"?{marginTop:`-${Z(v)}`,[`& > .${X.item}`]:{paddingTop:Z(v)}}:(_=g)!=null&&_.includes(S)?{}:{marginTop:0,[`& > .${X.item}`]:{paddingTop:0}}})}return o}function _t({theme:t,ownerState:a}){const{container:l,columnSpacing:r}=a;let o={};if(l&&r!==0){const n=ie({values:r,breakpoints:t.breakpoints.values});let g;typeof n=="object"&&(g=$e({breakpoints:t.breakpoints.values,values:n})),o=fe({theme:t},n,(I,S)=>{var _;const v=t.spacing(I);return v!=="0px"?{width:`calc(100% + ${Z(v)})`,marginLeft:`-${Z(v)}`,[`& > .${X.item}`]:{paddingLeft:Z(v)}}:(_=g)!=null&&_.includes(S)?{}:{width:"100%",marginLeft:0,[`& > .${X.item}`]:{paddingLeft:0}}})}return o}function bt(t,a,l={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[l[`spacing-xs-${String(t)}`]];const r=[];return a.forEach(o=>{const n=t[o];Number(n)>0&&r.push(l[`spacing-${o}-${String(n)}`])}),r}const xt=Je("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:l}=t,{container:r,direction:o,item:n,spacing:g,wrap:I,zeroMinWidth:S,breakpoints:_}=l;let v=[];r&&(v=bt(g,_,a));const w=[];return _.forEach(x=>{const b=l[x];b&&w.push(a[`grid-${x}-${String(b)}`])}),[a.root,r&&a.container,n&&a.item,S&&a.zeroMinWidth,...v,o!=="row"&&a[`direction-xs-${String(o)}`],I!=="wrap"&&a[`wrap-xs-${String(I)}`],...w]}})(({ownerState:t})=>Y({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),It,yt,_t,vt);function wt(t,a){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const l=[];return a.forEach(r=>{const o=t[r];if(Number(o)>0){const n=`spacing-${r}-${String(o)}`;l.push(n)}}),l}const Ct=t=>{const{classes:a,container:l,direction:r,item:o,spacing:n,wrap:g,zeroMinWidth:I,breakpoints:S}=t;let _=[];l&&(_=wt(n,S));const v=[];S.forEach(x=>{const b=t[x];b&&v.push(`grid-${x}-${String(b)}`)});const w={root:["root",l&&"container",o&&"item",I&&"zeroMinWidth",..._,r!=="row"&&`direction-xs-${String(r)}`,g!=="wrap"&&`wrap-xs-${String(g)}`,...v]};return et(w,ft,a)},Nt=E.exports.forwardRef(function(a,l){const r=Qe({props:a,name:"MuiGrid"}),{breakpoints:o}=Xe(),n=xe(r),{className:g,columns:I,columnSpacing:S,component:_="div",container:v=!1,direction:w="row",item:x=!1,rowSpacing:b,spacing:h=0,wrap:m="wrap",zeroMinWidth:B=!1}=n,A=Ce(n,St),C=b||h,L=S||h,O=E.exports.useContext(be),F=v?I||12:O,$={},T=Y({},A);o.keys.forEach(K=>{A[K]!=null&&($[K]=A[K],delete T[K])});const R=Y({},n,{columns:F,container:v,direction:w,item:x,rowSpacing:C,columnSpacing:L,wrap:m,zeroMinWidth:B,spacing:h},$,{breakpoints:o.keys}),V=Ct(R);return d(be.Provider,{value:F,children:d(xt,Y({ownerState:R,className:Ne(V.root,g),as:_,ref:l},T))})}),q=Nt;function Ot(t,a){t===void 0&&(t=6e4),a===void 0&&(a=1e3);var l=G.useState(0),r=l[0],o=l[1],n=G.useRef({}),g=function x(b){n.current.started||(n.current.started=b,n.current.lastInterval=b);var h=Math.min(a,n.current.timeLeft||1/0);b-n.current.lastInterval>=h&&(n.current.lastInterval+=h,o(function(m){return n.current.timeLeft=m-h,n.current.timeLeft})),b-n.current.started<n.current.timeToCount?n.current.requestId=window.requestAnimationFrame(x):(n.current={},o(0))},I=G.useCallback(function(x){window.cancelAnimationFrame(n.current.requestId);var b=x!==void 0?x:t;n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=b,n.current.requestId=window.requestAnimationFrame(g),o(b)},[]),S=G.useCallback(function(){window.cancelAnimationFrame(n.current.requestId),n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=n.current.timeLeft},[]),_=G.useCallback(function(){!n.current.started&&n.current.timeLeft>0&&(window.cancelAnimationFrame(n.current.requestId),n.current.requestId=window.requestAnimationFrame(g))},[]),v=G.useCallback(function(){n.current.timeLeft&&(window.cancelAnimationFrame(n.current.requestId),n.current={},o(0))},[]),w=G.useMemo(function(){return{start:I,pause:S,resume:_,reset:v}},[]);return G.useEffect(function(){return function(){return window.cancelAnimationFrame(n.current.requestId)}},[]),[r,w]}var Ae={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(E.exports),l=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(i){if(typeof WeakMap!="function")return null;var u=new WeakMap,p=new WeakMap;return(r=function(s){return s?p:u})(i)}function o(i,u){if(!u&&i&&i.__esModule)return i;if(i===null||L(i)!=="object"&&typeof i!="function")return{default:i};var p=r(u);if(p&&p.has(i))return p.get(i);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in i)if(y!=="default"&&Object.prototype.hasOwnProperty.call(i,y)){var N=s?Object.getOwnPropertyDescriptor(i,y):null;N&&(N.get||N.set)?Object.defineProperty(e,y,N):e[y]=i[y]}return e.default=i,p&&p.set(i,e),e}function n(){return n=Object.assign||function(i){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(i[e]=p[e])}return i},n.apply(this,arguments)}function g(i,u){if(i==null)return{};var p=I(i,u),e,s;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(i);for(s=0;s<y.length;s++)e=y[s],!(u.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,e)||(p[e]=i[e]))}return p}function I(i,u){if(i==null)return{};var p={},e=Object.keys(i),s,y;for(y=0;y<e.length;y++)s=e[y],!(u.indexOf(s)>=0)&&(p[s]=i[s]);return p}function S(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function _(i,u){for(var p=0;p<u.length;p++){var e=u[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function v(i,u,p){return u&&_(i.prototype,u),p&&_(i,p),i}function w(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&x(i,u)}function x(i,u){return x=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},x(i,u)}function b(i){var u=B();return function(){var e=A(i),s;if(u){var y=A(this).constructor;s=Reflect.construct(e,arguments,y)}else s=e.apply(this,arguments);return h(this,s)}}function h(i,u){return u&&(L(u)==="object"||typeof u=="function")?u:m(i)}function m(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function B(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(i){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},A(i)}function C(i,u,p){return u in i?Object.defineProperty(i,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):i[u]=p,i}function L(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(p){return typeof p}:L=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},L(i)}var O=8,F=37,$=39,T=46,R=32,V=function(u){return L(u)==="object"},K=function(i){w(p,i);var u=b(p);function p(e){var s;return S(this,p),s=u.call(this,e),C(m(s),"getClasses",function(){for(var y=arguments.length,N=new Array(y),c=0;c<y;c++)N[c]=arguments[c];return N.filter(function(f){return!V(f)&&f!==!1}).join(" ")}),C(m(s),"getType",function(){var y=s.props,N=y.isInputSecure,c=y.isInputNum;return N?"password":c?"tel":"text"}),s.input=a.default.createRef(),s}return v(p,[{key:"componentDidMount",value:function(){var s=this.props,y=s.focus,N=s.shouldAutoFocus,c=this.input.current;c&&y&&N&&c.focus()}},{key:"componentDidUpdate",value:function(s){var y=this.props.focus,N=this.input.current;s.focus!==y&&N&&y&&(N.focus(),N.select())}},{key:"render",value:function(){var s=this.props,y=s.placeholder,N=s.separator,c=s.isLastChild,f=s.inputStyle,k=s.focus,M=s.isDisabled,H=s.hasErrored,z=s.errorStyle,D=s.focusStyle,j=s.disabledStyle;s.shouldAutoFocus;var U=s.isInputNum,ee=s.index,te=s.value,oe=s.className;s.isInputSecure;var se=g(s,l);return a.default.createElement("div",{className:oe,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",n({"aria-label":"".concat(ee===0?"Please enter verification code. ":"").concat(U?"Digit":"Character"," ").concat(ee+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},V(f)&&f,k&&V(D)&&D,M&&V(j)&&j,H&&V(z)&&z),placeholder:y,className:this.getClasses(f,k&&D,M&&j,H&&z),type:this.getType(),maxLength:"1",ref:this.input,disabled:M,value:te||""},se)),!c&&N)}}]),p}(a.PureComponent),ge=function(i){w(p,i);var u=b(p);function p(){var e;S(this,p);for(var s=arguments.length,y=new Array(s),N=0;N<s;N++)y[N]=arguments[N];return e=u.call.apply(u,[this].concat(y)),C(m(e),"state",{activeInput:0}),C(m(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),C(m(e),"getPlaceholderValue",function(){var c=e.props,f=c.placeholder,k=c.numInputs;if(typeof f=="string"){if(f.length===k)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),C(m(e),"handleOtpChange",function(c){var f=e.props.onChange,k=c.join("");f(k)}),C(m(e),"isInputValueValid",function(c){var f=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return f&&c.trim().length===1}),C(m(e),"focusInput",function(c){var f=e.props.numInputs,k=Math.max(Math.min(f-1,c),0);e.setState({activeInput:k})}),C(m(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),C(m(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),C(m(e),"changeCodeAtFocus",function(c){var f=e.state.activeInput,k=e.getOtpValue();k[f]=c[0],e.handleOtpChange(k)}),C(m(e),"handleOnPaste",function(c){c.preventDefault();var f=e.state.activeInput,k=e.props,M=k.numInputs,H=k.isDisabled;if(!H){for(var z=e.getOtpValue(),D=f,j=c.clipboardData.getData("text/plain").slice(0,M-f).split(""),U=0;U<M;++U)U>=f&&j.length>0&&(z[U]=j.shift(),D++);e.setState({activeInput:D},function(){e.focusInput(D),e.handleOtpChange(z)})}}),C(m(e),"handleOnChange",function(c){var f=c.target.value;e.isInputValueValid(f)&&e.changeCodeAtFocus(f)}),C(m(e),"handleOnKeyDown",function(c){c.keyCode===O||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===T||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===F||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===$||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===R||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),C(m(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var f=c.nativeEvent;f.data===null&&f.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),C(m(e),"renderInputs",function(){for(var c=e.state.activeInput,f=e.props,k=f.numInputs,M=f.inputStyle,H=f.focusStyle,z=f.separator,D=f.isDisabled,j=f.disabledStyle,U=f.hasErrored,ee=f.errorStyle,te=f.shouldAutoFocus,oe=f.isInputNum,se=f.isInputSecure,Ee=f.className,he=[],Se=e.getOtpValue(),ve=e.getPlaceholderValue(),Ie=e.props["data-cy"],ye=e.props["data-testid"],Be=function(W){he.push(a.default.createElement(K,{placeholder:ve&&ve[W],key:W,index:W,focus:c===W,value:Se&&Se[W],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(De){e.setState({activeInput:W}),De.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:z,inputStyle:M,focusStyle:H,isLastChild:W===k-1,isDisabled:D,disabledStyle:j,hasErrored:U,errorStyle:ee,shouldAutoFocus:te,isInputNum:oe,isInputSecure:se,className:Ee,"data-cy":Ie&&"".concat(Ie,"-").concat(W),"data-testid":ye&&"".concat(ye,"-").concat(W)}))},ce=0;ce<k;ce++)Be(ce);return he}),e}return v(p,[{key:"render",value:function(){var s=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},V(s)&&s),className:V(s)?"":s},this.renderInputs())}}]),p}(a.Component);C(ge,"defaultProps",{numInputs:4,onChange:function(u){return console.log(u)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Ve=ge;t.default=Ve})(Ae);const kt=tt(Ae),Pt=ae.div`
  .SignInCode {
    &__container {
      &--OTP {
        display: flex;
        justify-content: center;
      }

      &--button {
        padding: 1rem 0;
        margin-bottom: 1.6rem;
      }

      &--separator {
        width: 1.2rem;
      }

      &--text > * {
        margin-bottom: 0.8rem;
      }

      &--time {
        margin: 1rem auto;
        text-align: center;
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
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`,{ENTRY_PATH:$t}=pe.ROUTES,{INTERVAL:At,INITIAL_TIME:Lt}=pe,Le=t=>{const a=re().signIn.SignInFormCode,[l,r]=E.exports.useState(!1),[o,n]=E.exports.useState(""),g=Oe(),{setSignInStep:I,user:S,setUser:_}=Q(),{signInMethod:v}=Q(),[,w]=nt("user"),{mutateAsync:x,reset:b}=we(),{mutateAsync:h,reset:m}=We(),[B,{start:A}]=Ot(Lt,At),C=$=>n($),L=async()=>{try{r(!0),x({dni:S==null?void 0:S.dni,type:v}),A(),b(),r(!1)}catch{r(!1)}},O=async()=>{try{r(!0),await h({password:o,dni:S==null?void 0:S.dni}).then($=>{const{access_token:T,user:R}=$!=null?$:{};_(R),w(R),Me.setCookie("token",T)}),m(),r(!1),I(0),g($t)}catch{r(!1)}},F=()=>d("span",{className:"SignInCode__container--separator"});return E.exports.useEffect(()=>{A()},[A]),P(Pt,{className:"SignInCode",children:[d(kt,{value:o,onChange:C,numInputs:it,separator:F(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),d("div",{className:"SignInCode__container--time",children:P("p",{className:"SignInCode__text SignInCode__text--time",children:["(",rt(B/1e3),")"]})}),d(me,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:O,disabled:l,className:"SignInCode__container--button",children:a.button}),P("div",{className:"SignInCode__container--text",children:[P("p",{className:"SignInCode__text",children:[a.question,d("span",{onClick:L,className:"SignInCode__text--color SignInCode__text--clickable",children:a.answer})]}),d("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>I(1),children:a.method})]})]})};Le.defaultProps={};const Ft="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Tt=ae.div`
  .SignInForm {
    &__container {
      &--button {
        padding: 1rem 0;
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }
    }
  }
`,de=t=>{const a=re().signIn.SignInFormUser,[l,r,o]=at(),[n,g]=E.exports.useState(!1),{setSignInStep:I,setUser:S}=Q(),{mutateAsync:_,reset:v}=ze(),{control:w,handleSubmit:x}=Pe();return d(Tt,{className:"SignInForm",children:P(ne,{component:"form",noValidate:!0,onSubmit:x(async h=>{try{g(!0);const m={dni:h==null?void 0:h.dni,cod_verifier:h==null?void 0:h.cod,emision_date:h==null?void 0:h.date_begin};await _(m).then(B=>S(B)),v(),g(!1),I(1)}catch{g(!1)}}),children:[P(q,{container:!0,spacing:2,children:[d(q,{item:!0,xs:8,md:8,children:d(le,{name:l.name,control:w,rules:l.rules,defaultValue:"",render:({field:h,fieldState:m})=>d(ue,{field:h,fields:m,config:{type:l.type,label:l.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:l==null?void 0:l.maxLength,InputProps:{endAdornment:d(_e,{position:"end",children:d("img",{className:"SignInForm__icon",src:st,alt:"iconPerson"})})}}})})}),d(q,{item:!0,xs:4,md:4,children:d(le,{name:r.name,control:w,rules:r.rules,defaultValue:"",render:({field:h,fieldState:m})=>d(ue,{field:h,fields:m,config:{type:r.type,label:r.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:r==null?void 0:r.maxLength,InputProps:{endAdornment:d(_e,{position:"end",children:d("img",{className:"SignInForm__icon",src:Ft,alt:"iconAlert"})})}}})})}),d(q,{item:!0,xs:12,md:12,children:d(le,{name:o.name,control:w,rules:o.rules,defaultValue:"",render:({field:h,fieldState:m})=>d(ue,{field:h,fields:m,config:{type:o.type,label:o.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),d(ne,{children:d(me,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInForm__container--button",children:a.button})})]})})};de.defaultProps={};const Vt=ae.div`
  .SignInValidate {
    &__container {
      &--button {
        padding: 1rem 0;
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
        width: 38.4rem;
      }

      & > * {
        margin-bottom: 1.6rem;
      }

      &__form {
        margin-bottom: 1.6rem;

        & > * {
          margin-bottom: 0.8rem;
        }
      }
    }

    &__text {
      &--greeting {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &__bold {
          font-weight: bold;
        }
      }

      &--indication {
        font-size: 1.2rem;
      }

      &--color {
        color: var(--palette-skyBlue);
      }
    }
  }

  input[type="radio"] {
    height: 1.16rem;
    width: 1.16rem;
    margin-right: 0.8rem;
  }
`,Fe=t=>{const a=re().signIn.SignInValidation,l=ot(),[r,o]=E.exports.useState(!1),{setSignInStep:n,user:g,setSignInMethod:I}=Q(),{register:S,handleSubmit:_}=Pe(),{mutateAsync:v,reset:w}=we(),{first_name:x,last_name:b,phone:h,email:m}=g!=null?g:{},B=async O=>{try{o(!0),await v({dni:g==null?void 0:g.dni,type:O==null?void 0:O.verifyMethod}),w(),I(O==null?void 0:O.verifyMethod),o(!1),n(2)}catch{o(!1)}},A=O=>{const{id:F,value:$,label:T,name:R,labelExtension:V}=O;return d("div",{children:P("label",{htmlFor:F,children:[d("input",{className:"SignInValidate__container__input",type:"radio",value:$,id:F,...S(R,{required:!0})}),T,d("span",{className:"SignInValidate__text--color",children:V})]})})},C=()=>P("form",{onSubmit:_(B),children:[d("div",{className:"SignInValidate__container__form",children:l.map((O,F)=>{var $,T;return d(A,{id:O.id,name:O.name,value:O.value,label:O.label,labelExtension:O.value==="SMS"?` *** *** ${($=h==null?void 0:h.slice((h==null?void 0:h.length)-3))!=null?$:""}`:` ********${(T=m==null?void 0:m.slice((m==null?void 0:m.length)-15))!=null?T:""}`},F)})}),d(me,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:r,className:"SignInValidate__container--button",children:a.button})]});return d(Vt,{className:"SignInValidate",children:P("div",{className:"SignInValidate__container__global",children:[d("div",{className:"SignInValidate__container",children:(()=>P(ke,{children:[P("p",{className:"SignInValidate__text--greeting",children:[a.greeting,d("span",{className:"SignInValidate__text--greeting__bold",children:` ${x!=null?x:""} ${b!=null?b:""}`})]}),d("p",{className:"SignInValidate__text--indication",children:a.instructions})]}))()}),C()]})})};Fe.defaultProps={};const Et="/CodiShark/assets/loginImageUser.fd914332.jpg",Bt="/CodiShark/assets/loginImageUser.93122b01.webp",Rt=ae.div`
  .SignIn {
    &__renderList {
      width: 48%;
      margin-left: 4rem;
      position: absolute;
      top: calc(48% - 3.2rem);
      color: var(--palette-white);

      &--ul {
        margin: 1.6rem 2.4rem;
      }

      &--h1 {
        color: inherit;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 3.2rem;
      }

      &--h2 {
        color: inherit;
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }

    &__container {
      height: 100vh;

      &--center {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &--content {
        margin-bottom: 5.6rem;
      }

      &--content > * {
        margin-bottom: 0.8rem;
      }

      &--copyright {
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-weight: 300;
        margin-top: 8rem;
        text-align: center;
      }

      &--form {
        margin-top: 6.4rem;
        margin-bottom: 6.4rem;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
      }
    }

    &__image {
      background-image: url(${Et});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      background-image: -webkit-image-set(url(${Bt}));
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
`,Dt="./logoKonecta.png",{ENTRY_PATH:Wt}=pe.ROUTES,Te=t=>{const{isAnonymous:a,signInStep:l}=Q(),r=re().signIn.SignInFormUser,o=Oe();E.exports.useEffect(()=>{if(!a){o(Wt);return}},[a,o]);const n=()=>{switch(l){case 0:return d(de,{});case 1:return d(Fe,{});case 2:return d(Le,{});default:return d(de,{})}},g=()=>P(ke,{children:[d("img",{src:Dt,alt:r.altLogo,width:188}),d("h1",{className:"SignIn__title",children:l!==2?r.title.toUpperCase():r.titleAlt.toUpperCase()}),d("p",{className:"SignIn__subtitle",children:l!==2?r.subtitle:r.subtitleAlt}),l===2&&d("p",{className:"SignIn__subtitle",children:r.subtitleAltTwo})]}),I=()=>d("p",{className:"SignIn__container--copyright",children:r.copyright});return d(Rt,{className:"SignIn",children:P(q,{container:!0,component:"main",className:"SignIn__container",children:[d(q,{item:!0,xs:!1,sm:4,md:6,className:"SignIn__image",children:(()=>P("div",{className:"SignIn__renderList",children:[d("h2",{className:"SignIn__renderList--h2",children:r.benefitTitle}),d("h1",{className:"SignIn__renderList--h1",children:r.benefitSubTitle}),P("ul",{className:"SignIn__renderList--ul",children:[d("li",{className:"SignIn__renderList--h2",children:r.ul1}),d("li",{className:"SignIn__renderList--h2",children:r.ul2}),d("li",{className:"SignIn__renderList--h2",children:r.ul3}),d("li",{className:"SignIn__renderList--h2",children:r.ul4})]})]}))()}),P(q,{item:!0,xs:12,sm:8,md:6,component:je,elevation:4,square:!0,container:!0,alignItems:"center",justifyContent:"center",flexDirection:"column",children:[P(ne,{className:"SignIn__container--form",children:[d(ne,{className:"SignIn__container--center   SignIn__container--content",children:g()}),n()]}),I()]})]})})};Te.defaultProps={};const Zt=Te;export{Zt as default};
