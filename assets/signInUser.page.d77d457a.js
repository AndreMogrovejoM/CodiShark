import{l as Ce}from"./logoKonecta.dff35306.js";import{S as qe,P as He,A as Xe,a as J,i as Q}from"./SwipperComponent.c2496e3d.js";import{r as T,b as Ye,g as Ze,c as Je,_ as te,i as Qe,V as et,k as tt,a as r,l as nt,aJ as ce,aK as Se,m as rt,q as U,a4 as it,s as ie,C as X,u as Fe,E as ne,F as at,j as w,G as Ae}from"./index.4d215d3b.js";import{u as le}from"./i18n.hooks.b18bfc08.js";import{B as ue}from"./Button.b7b90e42.js";import{y as ot,F as Re,G as st,H as ct,d as lt,v as Ee,I as ut,J as dt}from"./validations.utils.b4bff25c.js";import{f as pt}from"./common.utils.106d572f.js";import{u as ye,C as he,T as _e,I as ke,i as mt}from"./index.esm.1541634a.js";import{B as Le}from"./Box.85ba67d3.js";const ft=T.exports.createContext(),$e=ft;function gt(t){return Ye("MuiGrid",t)}const ht=[0,1,2,3,4,5,6,7,8,9,10],_t=["column-reverse","column","row-reverse","row"],vt=["nowrap","wrap-reverse","wrap"],ee=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],re=Ze("MuiGrid",["root","container","item","zeroMinWidth",...ht.map(t=>`spacing-xs-${t}`),..._t.map(t=>`direction-xs-${t}`),...vt.map(t=>`wrap-xs-${t}`),...ee.map(t=>`grid-xs-${t}`),...ee.map(t=>`grid-sm-${t}`),...ee.map(t=>`grid-md-${t}`),...ee.map(t=>`grid-lg-${t}`),...ee.map(t=>`grid-xl-${t}`)]),St=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(t){const o=parseFloat(t);return`${o}${String(t).replace(String(o),"")||"px"}`}function yt({theme:t,ownerState:o}){let l;return t.breakpoints.keys.reduce((n,u)=>{let i={};if(o[u]&&(l=o[u]),!l)return n;if(l===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(l==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const h=ce({values:o.columns,breakpoints:t.breakpoints.values}),y=typeof h=="object"?h[u]:h;if(y==null)return n;const _=`${Math.round(l/y*1e8)/1e6}%`;let S={};if(o.container&&o.item&&o.columnSpacing!==0){const g=t.spacing(o.columnSpacing);if(g!=="0px"){const N=`calc(${_} + ${Z(g)})`;S={flexBasis:N,maxWidth:N}}}i=te({flexBasis:_,flexGrow:0,maxWidth:_},S)}return t.breakpoints.values[u]===0?Object.assign(n,i):n[t.breakpoints.up(u)]=i,n},{})}function bt({theme:t,ownerState:o}){const l=ce({values:o.direction,breakpoints:t.breakpoints.values});return Se({theme:t},l,n=>{const u={flexDirection:n};return n.indexOf("column")===0&&(u[`& > .${re.item}`]={maxWidth:"none"}),u})}function Te({breakpoints:t,values:o}){let l="";Object.keys(o).forEach(u=>{l===""&&o[u]!==0&&(l=u)});const n=Object.keys(t).sort((u,i)=>t[u]-t[i]);return n.slice(0,n.indexOf(l))}function It({theme:t,ownerState:o}){const{container:l,rowSpacing:n}=o;let u={};if(l&&n!==0){const i=ce({values:n,breakpoints:t.breakpoints.values});let h;typeof i=="object"&&(h=Te({breakpoints:t.breakpoints.values,values:i})),u=Se({theme:t},i,(y,_)=>{var S;const g=t.spacing(y);return g!=="0px"?{marginTop:`-${Z(g)}`,[`& > .${re.item}`]:{paddingTop:Z(g)}}:(S=h)!=null&&S.includes(_)?{}:{marginTop:0,[`& > .${re.item}`]:{paddingTop:0}}})}return u}function xt({theme:t,ownerState:o}){const{container:l,columnSpacing:n}=o;let u={};if(l&&n!==0){const i=ce({values:n,breakpoints:t.breakpoints.values});let h;typeof i=="object"&&(h=Te({breakpoints:t.breakpoints.values,values:i})),u=Se({theme:t},i,(y,_)=>{var S;const g=t.spacing(y);return g!=="0px"?{width:`calc(100% + ${Z(g)})`,marginLeft:`-${Z(g)}`,[`& > .${re.item}`]:{paddingLeft:Z(g)}}:(S=h)!=null&&S.includes(_)?{}:{width:"100%",marginLeft:0,[`& > .${re.item}`]:{paddingLeft:0}}})}return u}function wt(t,o,l={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[l[`spacing-xs-${String(t)}`]];const n=[];return o.forEach(u=>{const i=t[u];Number(i)>0&&n.push(l[`spacing-${u}-${String(i)}`])}),n}const Nt=Je("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t,{container:n,direction:u,item:i,spacing:h,wrap:y,zeroMinWidth:_,breakpoints:S}=l;let g=[];n&&(g=wt(h,S,o));const N=[];return S.forEach(b=>{const I=l[b];I&&N.push(o[`grid-${b}-${String(I)}`])}),[o.root,n&&o.container,i&&o.item,_&&o.zeroMinWidth,...g,u!=="row"&&o[`direction-xs-${String(u)}`],y!=="wrap"&&o[`wrap-xs-${String(y)}`],...N]}})(({ownerState:t})=>te({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),bt,It,xt,yt);function Ct(t,o){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const l=[];return o.forEach(n=>{const u=t[n];if(Number(u)>0){const i=`spacing-${n}-${String(u)}`;l.push(i)}}),l}const kt=t=>{const{classes:o,container:l,direction:n,item:u,spacing:i,wrap:h,zeroMinWidth:y,breakpoints:_}=t;let S=[];l&&(S=Ct(i,_));const g=[];_.forEach(b=>{const I=t[b];I&&g.push(`grid-${b}-${String(I)}`)});const N={root:["root",l&&"container",u&&"item",y&&"zeroMinWidth",...S,n!=="row"&&`direction-xs-${String(n)}`,h!=="wrap"&&`wrap-xs-${String(h)}`,...g]};return rt(N,gt,o)},$t=T.exports.forwardRef(function(o,l){const n=Qe({props:o,name:"MuiGrid"}),{breakpoints:u}=et(),i=ot(n),{className:h,columns:y,columnSpacing:_,component:S="div",container:g=!1,direction:N="row",item:b=!1,rowSpacing:I,spacing:P=0,wrap:f="wrap",zeroMinWidth:C=!1}=i,O=tt(i,St),x=I||P,L=_||P,K=T.exports.useContext($e),q=g?y||12:K,$={},V=te({},O);u.keys.forEach(B=>{O[B]!=null&&($[B]=O[B],delete V[B])});const E=te({},i,{columns:q,container:g,direction:N,item:b,rowSpacing:x,columnSpacing:L,wrap:f,zeroMinWidth:C,spacing:P},$,{breakpoints:u.keys}),F=kt(E);return r($e.Provider,{value:q,children:r(Nt,te({ownerState:E,className:nt(F.root,h),as:S,ref:l},V))})}),fe=$t,Ot="/CodiShark/assets/loginImageUser.fd914332.jpg";function Pt(t,o){t===void 0&&(t=6e4),o===void 0&&(o=1e3);var l=U.useState(0),n=l[0],u=l[1],i=U.useRef({}),h=function b(I){i.current.started||(i.current.started=I,i.current.lastInterval=I);var P=Math.min(o,i.current.timeLeft||1/0);I-i.current.lastInterval>=P&&(i.current.lastInterval+=P,u(function(f){return i.current.timeLeft=f-P,i.current.timeLeft})),I-i.current.started<i.current.timeToCount?i.current.requestId=window.requestAnimationFrame(b):(i.current={},u(0))},y=U.useCallback(function(b){window.cancelAnimationFrame(i.current.requestId);var I=b!==void 0?b:t;i.current.started=null,i.current.lastInterval=null,i.current.timeToCount=I,i.current.requestId=window.requestAnimationFrame(h),u(I)},[]),_=U.useCallback(function(){window.cancelAnimationFrame(i.current.requestId),i.current.started=null,i.current.lastInterval=null,i.current.timeToCount=i.current.timeLeft},[]),S=U.useCallback(function(){!i.current.started&&i.current.timeLeft>0&&(window.cancelAnimationFrame(i.current.requestId),i.current.requestId=window.requestAnimationFrame(h))},[]),g=U.useCallback(function(){i.current.timeLeft&&(window.cancelAnimationFrame(i.current.requestId),i.current={},u(0))},[]),N=U.useMemo(function(){return{start:y,pause:_,resume:S,reset:g}},[]);return U.useEffect(function(){return function(){return window.cancelAnimationFrame(i.current.requestId)}},[]),[n,N]}var Ve={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(T.exports),l=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function n(a){if(typeof WeakMap!="function")return null;var d=new WeakMap,p=new WeakMap;return(n=function(s){return s?p:d})(a)}function u(a,d){if(!d&&a&&a.__esModule)return a;if(a===null||L(a)!=="object"&&typeof a!="function")return{default:a};var p=n(d);if(p&&p.has(a))return p.get(a);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in a)if(v!=="default"&&Object.prototype.hasOwnProperty.call(a,v)){var k=s?Object.getOwnPropertyDescriptor(a,v):null;k&&(k.get||k.set)?Object.defineProperty(e,v,k):e[v]=a[v]}return e.default=a,p&&p.set(a,e),e}function i(){return i=Object.assign||function(a){for(var d=1;d<arguments.length;d++){var p=arguments[d];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(a[e]=p[e])}return a},i.apply(this,arguments)}function h(a,d){if(a==null)return{};var p=y(a,d),e,s;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(s=0;s<v.length;s++)e=v[s],!(d.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(p[e]=a[e]))}return p}function y(a,d){if(a==null)return{};var p={},e=Object.keys(a),s,v;for(v=0;v<e.length;v++)s=e[v],!(d.indexOf(s)>=0)&&(p[s]=a[s]);return p}function _(a,d){if(!(a instanceof d))throw new TypeError("Cannot call a class as a function")}function S(a,d){for(var p=0;p<d.length;p++){var e=d[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function g(a,d,p){return d&&S(a.prototype,d),p&&S(a,p),a}function N(a,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(d&&d.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),d&&b(a,d)}function b(a,d){return b=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},b(a,d)}function I(a){var d=C();return function(){var e=O(a),s;if(d){var v=O(this).constructor;s=Reflect.construct(e,arguments,v)}else s=e.apply(this,arguments);return P(this,s)}}function P(a,d){return d&&(L(d)==="object"||typeof d=="function")?d:f(a)}function f(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(a){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},O(a)}function x(a,d,p){return d in a?Object.defineProperty(a,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):a[d]=p,a}function L(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(p){return typeof p}:L=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},L(a)}var K=8,q=37,$=39,V=46,E=32,F=function(d){return L(d)==="object"},B=function(a){N(p,a);var d=I(p);function p(e){var s;return _(this,p),s=d.call(this,e),x(f(s),"getClasses",function(){for(var v=arguments.length,k=new Array(v),c=0;c<v;c++)k[c]=arguments[c];return k.filter(function(m){return!F(m)&&m!==!1}).join(" ")}),x(f(s),"getType",function(){var v=s.props,k=v.isInputSecure,c=v.isInputNum;return k?"password":c?"tel":"text"}),s.input=o.default.createRef(),s}return g(p,[{key:"componentDidMount",value:function(){var s=this.props,v=s.focus,k=s.shouldAutoFocus,c=this.input.current;c&&v&&k&&c.focus()}},{key:"componentDidUpdate",value:function(s){var v=this.props.focus,k=this.input.current;s.focus!==v&&k&&v&&(k.focus(),k.select())}},{key:"render",value:function(){var s=this.props,v=s.placeholder,k=s.separator,c=s.isLastChild,m=s.inputStyle,A=s.focus,W=s.isDisabled,Y=s.hasErrored,M=s.errorStyle,D=s.focusStyle,j=s.disabledStyle;s.shouldAutoFocus;var G=s.isInputNum,ae=s.index,oe=s.value,de=s.className;s.isInputSecure;var pe=h(s,l);return o.default.createElement("div",{className:de,style:{display:"flex",alignItems:"center"}},o.default.createElement("input",i({"aria-label":"".concat(ae===0?"Please enter verification code. ":"").concat(G?"Digit":"Character"," ").concat(ae+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},F(m)&&m,A&&F(D)&&D,W&&F(j)&&j,Y&&F(M)&&M),placeholder:v,className:this.getClasses(m,A&&D,W&&j,Y&&M),type:this.getType(),maxLength:"1",ref:this.input,disabled:W,value:oe||""},pe)),!c&&k)}}]),p}(o.PureComponent),H=function(a){N(p,a);var d=I(p);function p(){var e;_(this,p);for(var s=arguments.length,v=new Array(s),k=0;k<s;k++)v[k]=arguments[k];return e=d.call.apply(d,[this].concat(v)),x(f(e),"state",{activeInput:0}),x(f(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),x(f(e),"getPlaceholderValue",function(){var c=e.props,m=c.placeholder,A=c.numInputs;if(typeof m=="string"){if(m.length===A)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),x(f(e),"handleOtpChange",function(c){var m=e.props.onChange,A=c.join("");m(A)}),x(f(e),"isInputValueValid",function(c){var m=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return m&&c.trim().length===1}),x(f(e),"focusInput",function(c){var m=e.props.numInputs,A=Math.max(Math.min(m-1,c),0);e.setState({activeInput:A})}),x(f(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),x(f(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),x(f(e),"changeCodeAtFocus",function(c){var m=e.state.activeInput,A=e.getOtpValue();A[m]=c[0],e.handleOtpChange(A)}),x(f(e),"handleOnPaste",function(c){c.preventDefault();var m=e.state.activeInput,A=e.props,W=A.numInputs,Y=A.isDisabled;if(!Y){for(var M=e.getOtpValue(),D=m,j=c.clipboardData.getData("text/plain").slice(0,W-m).split(""),G=0;G<W;++G)G>=m&&j.length>0&&(M[G]=j.shift(),D++);e.setState({activeInput:D},function(){e.focusInput(D),e.handleOtpChange(M)})}}),x(f(e),"handleOnChange",function(c){var m=c.target.value;e.isInputValueValid(m)&&e.changeCodeAtFocus(m)}),x(f(e),"handleOnKeyDown",function(c){c.keyCode===K||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===V||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===q||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===$||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===E||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),x(f(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var m=c.nativeEvent;m.data===null&&m.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),x(f(e),"renderInputs",function(){for(var c=e.state.activeInput,m=e.props,A=m.numInputs,W=m.inputStyle,Y=m.focusStyle,M=m.separator,D=m.isDisabled,j=m.disabledStyle,G=m.hasErrored,ae=m.errorStyle,oe=m.shouldAutoFocus,de=m.isInputNum,pe=m.isInputSecure,je=m.className,be=[],Ie=e.getOtpValue(),xe=e.getPlaceholderValue(),we=e.props["data-cy"],Ne=e.props["data-testid"],Ge=function(z){be.push(o.default.createElement(B,{placeholder:xe&&xe[z],key:z,index:z,focus:c===z,value:Ie&&Ie[z],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Ke){e.setState({activeInput:z}),Ke.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:M,inputStyle:W,focusStyle:Y,isLastChild:z===A-1,isDisabled:D,disabledStyle:j,hasErrored:G,errorStyle:ae,shouldAutoFocus:oe,isInputNum:de,isInputSecure:pe,className:je,"data-cy":we&&"".concat(we,"-").concat(z),"data-testid":Ne&&"".concat(Ne,"-").concat(z)}))},me=0;me<A;me++)Ge(me);return be}),e}return g(p,[{key:"render",value:function(){var s=this.props.containerStyle;return o.default.createElement("div",{style:Object.assign({display:"flex"},F(s)&&s),className:F(s)?"":s},this.renderInputs())}}]),p}(o.Component);x(H,"defaultProps",{numInputs:4,onChange:function(d){return console.log(d)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Me=H;t.default=Me})(Ve);const Ft=it(Ve),{BREAKPOINTS:ge}=X,At=ie.div`
  .SignInCode {
    &__error {
      color: var(--palette-error);
      font-weight: 600;
      text-align: center;
      margin-top: 0.8rem;
    }

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
`,{ENTRY_PATH:Rt}=X.ROUTES,{INTERVAL:Et,INITIAL_TIME:Lt}=X,Be=t=>{const o=le().signIn.SignInFormCode,[l,n]=T.exports.useState(!1),[u,i]=T.exports.useState(""),h=Fe(),{setSignInStep:y,user:_,setUser:S}=ne(),{signInMethod:g}=ne(),[,N]=at("user"),{mutateAsync:b,reset:I}=Re(),{mutateAsync:P,reset:f}=st(),[C,O]=T.exports.useState(""),[x,{start:L}]=Pt(Lt,Et),K=E=>i(E),q=async()=>{try{n(!0),b({dni:_==null?void 0:_.dni,type:g}),L(),I(),n(!1)}catch{n(!1)}},$=async()=>{var E;try{O(""),n(!0),await P({password:u,dni:_==null?void 0:_.dni}).then(F=>{const{access_token:B,user:H}=F!=null?F:{};S(H),N(H),lt.setCookie("token",B)}),f(),n(!1),y(0),h(Rt)}catch{(E=C==null?void 0:C.toString())!=null&&E.includes("422")?O("C\xF3digo de error incorrecto"):O("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),n(!1)}},V=()=>r("span",{className:"SignInCode__container--separator"});return T.exports.useEffect(()=>{L()},[L]),w(At,{className:"SignInCode",children:[r(Ft,{value:u,onChange:K,numInputs:ct,separator:V(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),r("div",{className:"SignInCode__container--time",children:w("p",{className:"SignInCode__text SignInCode__text--time",children:["(",pt(x/1e3),")"]})}),w("div",{className:"SignInCode__container--button",children:[r(ue,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:$,disabled:l,className:"SignInCode__component--button",children:o.button}),(C==null?void 0:C.length)>0?r("h3",{className:"SignInCode__error",children:C}):null]}),w("div",{className:"SignInCode__container--text",children:[w("p",{className:"SignInCode__text",children:[`${o.question} `,r("span",{onClick:q,className:"SignInCode__text--color SignInCode__text--clickable",children:o.answer})]}),r("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>y(1),children:o.method})]})]})};Be.defaultProps={};const Tt="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Vt=ie.div`
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
`,ve=t=>{const o=le().signIn.SignInFormUser,[l,n]=Ee(),[u,i]=T.exports.useState(!1),{setSignInStep:h,setUser:y}=ne(),{mutateAsync:_,reset:S}=ut(),[g,N]=T.exports.useState(""),{control:b,handleSubmit:I}=ye();return r(Vt,{className:"SignInForm",children:w(Le,{component:"form",noValidate:!0,onSubmit:I(async f=>{var C;try{i(!0),N("");const O={dni:f==null?void 0:f.dni,cod_verifier:f==null?void 0:f.cod};await _(O).then(x=>y(x)),S(),i(!1),h(1)}catch(O){(C=O==null?void 0:O.toString())!=null&&C.includes("422")?N("No se encontr\xF3 el usuario en el registro."):N("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),i(!1)}}),children:[w(fe,{container:!0,spacing:2,children:[r(fe,{item:!0,xs:12,sm:8,md:8,children:r(he,{name:l.name,control:b,rules:l.rules,defaultValue:"",render:({field:f,fieldState:C})=>r(_e,{field:f,fields:C,config:{type:l.type,label:l.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:l==null?void 0:l.maxLength,InputProps:{endAdornment:r(ke,{position:"end",children:r("img",{className:"SignInForm__icon",src:mt,alt:"iconPerson"})})}}})})}),r(fe,{item:!0,xs:12,sm:4,md:4,children:r(he,{name:n.name,control:b,rules:n.rules,defaultValue:"",render:({field:f,fieldState:C})=>r(_e,{field:f,fields:C,config:{type:n.type,label:n.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:n==null?void 0:n.maxLength,InputProps:{endAdornment:r(ke,{position:"end",children:r("img",{className:"SignInForm__icon",src:Tt,alt:"iconAlert"})})}}})})})]}),r("div",{className:"SignInForm__container--button",children:r(ue,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:u,className:"SignInForm__component--button",children:o.button})}),(g==null?void 0:g.length)>0?r("h3",{className:"SignInForm__error",children:g}):null]})})};ve.defaultProps={};const{BREAKPOINTS:Oe}=X,Bt=ie.div`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;
  margin-top: 1.6rem;

  .RecoveryForm {
    &__textContainer {
      display: flex;
      gap: 0.4rem;
      margin-top: 1.2rem;
    }

    &__text {
      &--greeting {
        font-weight: 400;
        font-size: 1.4rem !important;

        @media screen and (min-width: ${Oe.mobile}px) {
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
        font-size: 1.4rem;

        &:hover {
          cursor: pointer;
        }
      }

      &--block {
        display: block;

        @media screen and (min-width: ${Oe.mobile}px) {
          display: inline-block;
        }
      }
    }

    &__SSContainer {
      background-color: var(--palette-skyBlue2);
      padding: 1.2rem 1.2rem;
      border-radius: 0.8rem;
    }

    &__button {
      background: var(--palette-limeGreenBackground2);
    }

    &__input {
      margin: 1.6rem 0;
    }
  }

  .MuiOutlinedInput-root.Mui-focused {
    background: white;
    border-radius: 1.6rem;
  }
`,De=t=>{const{step:o,setStep:l}=t,[n]=Ee(),u=!1,{control:i,handleSubmit:h}=ye(),y=async b=>{console.log(b),l(2)},_=()=>w("div",{className:"RecoveryForm__textContainer",children:[r("h3",{className:"RecoveryForm__text--greeting__bold",children:"No son tus datos actuales?"}),r("p",{className:"RecoveryForm__text--greeting",children:"actualiza tus datos "}),r("span",{className:"RecoveryForm__text--color",onClick:()=>l(1),children:"aqu\xED"})]}),S=()=>w("div",{className:"RecoveryForm__SSContainer",children:[w("h3",{className:"RecoveryForm__text--greeting",children:["Comun\xEDcate con nosotros llamando al"," ",r("span",{className:"RecoveryForm__text--greeting__bold",children:"XXX-XXX"})," ","para actualizar tus datos o"," ",r("span",{className:"RecoveryForm__text--greeting__bold",children:"ingresa tu n\xFAmero"})," ","a continuaci\xF3n y un asesor se comunicar\xE1 contigo a la brevedad:"]}),w(Le,{component:"form",noValidate:!0,onSubmit:h(y),children:[r(he,{name:n.name,control:i,rules:n.rules,defaultValue:"",render:({field:b,fieldState:I})=>r(_e,{field:b,fields:I,className:"RecoveryForm__input",config:{type:n.type,label:n.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:n==null?void 0:n.maxLength,placeholder:"Ingrese su n\xFAmero de tel\xE9fono"}})}),r(ue,{type:"submit",variant:"contained",size:"large",color:"success",fullWidth:!0,disabled:u,className:"RecoveryForm__button",children:"Contactar con un asesor"})]})]}),g=()=>r("div",{className:"RecoveryForm__SSContainer",children:r("span",{className:"RecoveryForm__text--greeting__bold",children:"Su n\xFAmero fue registrado correctamente, uno de nuestros asesores se comunicar\xE1 con usted a la brevedad."})});return r(Bt,{className:"RecoveryForm",children:(()=>{switch(o){case 0:return _();case 1:return S();case 2:return g();default:return _()}})()})};De.defaultProps={};const{BREAKPOINTS:se}=X,Dt=ie.div`
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

        @media screen and (min-width: ${se.desktop}px) {
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

        @media screen and (min-width: ${se.mobile}px) {
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

        @media screen and (min-width: ${se.mobile}px) {
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

        @media screen and (min-width: ${se.mobile}px) {
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
`,ze=t=>{const o=le().signIn.SignInValidation,l=dt(),[n,u]=T.exports.useState(!1),{setSignInStep:i,user:h,setSignInMethod:y}=ne(),{register:_,handleSubmit:S}=ye(),{mutateAsync:g,reset:N}=Re(),{first_name:b,last_name:I,phone:P,email:f}=h!=null?h:{},[C,O]=T.exports.useState(0),x=async $=>{try{u(!0),await g({dni:h==null?void 0:h.dni,type:$==null?void 0:$.verifyMethod}),N(),y($==null?void 0:$.verifyMethod),u(!1),i(2)}catch{u(!1)}},L=$=>{const{id:V,value:E,label:F,name:B,labelExtension:H}=$;return r("div",{children:w("label",{htmlFor:V,children:[r("input",{className:"SignInValidate__container__input",type:"radio",value:E,id:V,..._(B,{required:!0})}),F,r("span",{className:"SignInValidate__text--color",children:H})]})})},K=()=>w(Ae,{children:[w("p",{className:"SignInValidate__text--greeting",children:[`${o.greeting} `,r("span",{className:"SignInValidate__text--greeting__bold SignInValidate__text--block",children:`${b!=null?b:""} ${I!=null?I:""}`})]}),r("p",{className:"SignInValidate__text--indication",children:o.instructions})]});return r(Dt,{className:"SignInValidate",children:r("div",{className:"SignInValidate__container__global",children:(()=>w("form",{onSubmit:S(x),children:[w("div",{className:"SignInValidate__container__form",children:[K(),l.map(($,V)=>{var E,F;return r(L,{id:$.id,name:$.name,value:$.value,label:$.label,labelExtension:$.value==="SMS"?` *** *** ${(E=P==null?void 0:P.slice((P==null?void 0:P.length)-3))!=null?E:""}`:` *** *** ${(F=f==null?void 0:f.slice((f==null?void 0:f.length)-15))!=null?F:""}`},V)})]}),r(De,{step:C,setStep:O}),r("div",{className:"SignInValidate__container--button",children:r(ue,{type:C===0?"submit":void 0,variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInValidate__component--button",onClick:()=>{C!==0&&i(0)},children:C===0?o.button:"Regresar"})})]}))()})})};ze.defaultProps={};const{BREAKPOINTS:R}=X,Pe=ie.div`
  display: flex;
  flex-direction: column;

  .SignIn {
    &__renderList {
      display: none;

      @media screen and (min-width: ${R.tablet}px) {
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

        @media screen and (min-width: ${R.desktop}px) {
          font-size: 3.2rem;
          line-height: 4rem;
        }
      }

      &--h2 {
        color: inherit;
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.4rem;

        @media screen and (min-width: ${R.desktop}px) {
          font-size: 2.4rem;
          line-height: 3.2rem;
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

        @media screen and (min-width: ${R.mobile}px) {
          gap: 5.6rem;
          width: 90vw;
        }

        @media screen and (min-width: ${R.tablet}px) {
          width: 32rem;
        }

        @media screen and (min-width: ${R.desktop}px) {
          width: 38rem;
        }

        @media screen and (min-width: ${R.wide}px) {
          width: 48rem;
        }

        &-content {
          display: flex;
          justify-content: center;
          width: inherit;
          padding-bottom: 5.6rem;

          @media screen and (min-width: ${R.mobile}px) {
            justify-content: none;
            padding-bottom: 0;
          }

          & > * {
            width: ${t=>t.signInStep===void 0||t.signInStep===0?"80vw":"90vw"};

            @media screen and (min-width: ${R.mobile}px) {
              width: auto;
            }
          }
        }

        &-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.6rem;

          @media screen and (min-width: ${R.mobile}px) {
            gap: 0;
          }
        }

        &-logo {
          width: 18rem;
          margin-top: 4rem;
          @media screen and (min-width: ${R.mobile}px) {
            display: none;
          }
        }
      }

      &--swipper {
        width: 96vw;

        @media screen and (min-width: ${R.mobile}px) {
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

        @media screen and (min-width: ${R.mobile}px) {
          display: block;
          width: 32rem;
        }
      }

      &--image {
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        height: inherit;
        width: 60vw;
        height: 100%;
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
        position: fixed;
        bottom: 0;
        padding: 0;
        padding: 1.6rem 0;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        background-color: var(--palette-blue);
        color: var(--palette-white);

        @media screen and (min-width: ${R.mobile}px) {
          padding-bottom: 1.6rem;
          background-color: inherit;
          color: var(--palette-darkText);
        }
      }

      &--form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        width: 100vw;
        height: 100vh;

        @media screen and (min-width: ${R.mobile}px) {
          justify-content: center;
        }

        @media screen and (min-width: ${R.tablet}px) {
          width: 50vw;
        }
      }

      &--image {
        display: none;

        @media screen and (min-width: ${R.tablet}px) {
          display: block;
          height: 100%;
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
`,{ENTRY_PATH:zt}=X.ROUTES,We=t=>{const{isAnonymous:o,signInStep:l}=ne(),n=le().signIn.SignInFormUser,u=Fe();T.exports.useEffect(()=>{if(!o){u(zt);return}},[o,u]);const i=()=>{switch(l){case 0:return r(ve,{});case 1:return r(ze,{});case 2:return r(Be,{});default:return r(ve,{})}},h=()=>r(Pe,{className:"SignIn__component--swipper",children:w(qe,{slidesPerView:"auto",pagination:{clickable:!0},autoPlay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,spaceBetween:8,modules:[He,Xe],children:[r(J,{children:r("img",{src:Q,alt:`${n.image} - 1`,className:"SignIn__component--swipper-image"})}),r(J,{children:r("img",{src:Q,alt:`${n.image} - 2`,className:"SignIn__component--swipper-image"})}),r(J,{children:r("img",{src:Q,alt:`${n.image} - 3`,className:"SignIn__component--swipper-image"})}),r(J,{children:r("img",{src:Q,alt:`${n.image} - 4`,className:"SignIn__component--swipper-image"})}),r(J,{children:r("img",{src:Q,alt:`${n.image} - 5`,className:"SignIn__component--swipper-image"})})]})}),y=()=>{const g=()=>l===2?"SignIn__container--separate":"";return w(Ae,{children:[r("img",{src:Ce,alt:n.altLogo,className:"SignIn__component--logo"}),h(),r("h1",{className:"SignIn__title",children:l!==2?n.title.toUpperCase():n.titleAlt.toUpperCase()}),w("div",{className:g(),children:[r("p",{className:"SignIn__subtitle",children:l!==2?n.subtitle:n.subtitleAlt}),l===2&&r("p",{className:"SignIn__subtitle SignIn__subtitle-sepa",children:n.subtitleAltTwo})]})]})},_=()=>r("p",{className:"SignIn__component--copyright",children:n.copyright});return r(Pe,{className:"SignIn",signInStep:l,children:w("div",{className:"SignIn__container--components",children:[w("div",{className:"SignIn__container--image",children:[r("img",{src:Ot,alt:"Imagen de fondo",className:"SignIn__component--image"}),(()=>w("div",{className:"SignIn__renderList",children:[r("h2",{className:"SignIn__renderList--h2",children:n.benefitTitle}),r("h1",{className:"SignIn__renderList--h1",children:n.benefitSubTitle}),w("ul",{className:"SignIn__renderList--ul",children:[r("li",{className:"SignIn__renderList--h2",children:n.ul1}),r("li",{className:"SignIn__renderList--h2",children:n.ul2}),r("li",{className:"SignIn__renderList--h2",children:n.ul3}),r("li",{className:"SignIn__renderList--h2",children:n.ul4})]})]}))()]}),w("div",{className:"SignIn__container--form",children:[r("div",{className:"SignIn__component--form-logo",children:r("img",{src:Ce,alt:n.altLogo})}),w("div",{className:"SignIn__component--form",children:[r("div",{className:"SignIn__component--form-header",children:y()}),r("div",{className:"SignIn__component--form-content",children:i()})]}),r("div",{className:"SignIn__container--copyright",children:_()})]})]})})};We.defaultProps={};const Zt=We;export{Zt as default};
