import{l as we}from"./logoKonecta.28094d6a.js";import{S as je,P as Ge,A as Ue,a as Q,i as X}from"./SwipperComponent.be848ee8.js";import{r as V,b as qe,g as Ke,c as He,_ as te,i as Ye,V as Ze,k as Je,a,l as Qe,aJ as se,aK as he,m as Xe,q as K,a4 as et,s as ce,C as Z,u as Oe,E as ne,F as tt,j as C,G as Pe}from"./index.7494b9e3.js";import{u as le}from"./i18n.hooks.710219a4.js";import{B as Se}from"./Button.1ffb1947.js";import{y as nt,F as Ae,G as rt,H as it,d as at,v as ot,I as st,J as ct}from"./validations.utils.3b06e1db.js";import{f as lt}from"./common.utils.106d572f.js";import{u as Ee,C as xe,T as Ne,I as Ce,i as ut}from"./index.esm.cfc29c8d.js";import{B as dt}from"./Box.77cdc8b2.js";const pt=V.exports.createContext(),ke=pt;function mt(t){return qe("MuiGrid",t)}const ft=[0,1,2,3,4,5,6,7,8,9,10],gt=["column-reverse","column","row-reverse","row"],ht=["nowrap","wrap-reverse","wrap"],ee=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],re=Ke("MuiGrid",["root","container","item","zeroMinWidth",...ft.map(t=>`spacing-xs-${t}`),...gt.map(t=>`direction-xs-${t}`),...ht.map(t=>`wrap-xs-${t}`),...ee.map(t=>`grid-xs-${t}`),...ee.map(t=>`grid-sm-${t}`),...ee.map(t=>`grid-md-${t}`),...ee.map(t=>`grid-lg-${t}`),...ee.map(t=>`grid-xl-${t}`)]),St=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Y(t){const o=parseFloat(t);return`${o}${String(t).replace(String(o),"")||"px"}`}function vt({theme:t,ownerState:o}){let l;return t.breakpoints.keys.reduce((n,d)=>{let r={};if(o[d]&&(l=o[d]),!l)return n;if(l===!0)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(l==="auto")r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const h=se({values:o.columns,breakpoints:t.breakpoints.values}),I=typeof h=="object"?h[d]:h;if(I==null)return n;const S=`${Math.round(l/I*1e8)/1e6}%`;let _={};if(o.container&&o.item&&o.columnSpacing!==0){const g=t.spacing(o.columnSpacing);if(g!=="0px"){const x=`calc(${S} + ${Y(g)})`;_={flexBasis:x,maxWidth:x}}}r=te({flexBasis:S,flexGrow:0,maxWidth:S},_)}return t.breakpoints.values[d]===0?Object.assign(n,r):n[t.breakpoints.up(d)]=r,n},{})}function _t({theme:t,ownerState:o}){const l=se({values:o.direction,breakpoints:t.breakpoints.values});return he({theme:t},l,n=>{const d={flexDirection:n};return n.indexOf("column")===0&&(d[`& > .${re.item}`]={maxWidth:"none"}),d})}function Fe({breakpoints:t,values:o}){let l="";Object.keys(o).forEach(d=>{l===""&&o[d]!==0&&(l=d)});const n=Object.keys(t).sort((d,r)=>t[d]-t[r]);return n.slice(0,n.indexOf(l))}function It({theme:t,ownerState:o}){const{container:l,rowSpacing:n}=o;let d={};if(l&&n!==0){const r=se({values:n,breakpoints:t.breakpoints.values});let h;typeof r=="object"&&(h=Fe({breakpoints:t.breakpoints.values,values:r})),d=he({theme:t},r,(I,S)=>{var _;const g=t.spacing(I);return g!=="0px"?{marginTop:`-${Y(g)}`,[`& > .${re.item}`]:{paddingTop:Y(g)}}:(_=h)!=null&&_.includes(S)?{}:{marginTop:0,[`& > .${re.item}`]:{paddingTop:0}}})}return d}function yt({theme:t,ownerState:o}){const{container:l,columnSpacing:n}=o;let d={};if(l&&n!==0){const r=se({values:n,breakpoints:t.breakpoints.values});let h;typeof r=="object"&&(h=Fe({breakpoints:t.breakpoints.values,values:r})),d=he({theme:t},r,(I,S)=>{var _;const g=t.spacing(I);return g!=="0px"?{width:`calc(100% + ${Y(g)})`,marginLeft:`-${Y(g)}`,[`& > .${re.item}`]:{paddingLeft:Y(g)}}:(_=h)!=null&&_.includes(S)?{}:{width:"100%",marginLeft:0,[`& > .${re.item}`]:{paddingLeft:0}}})}return d}function bt(t,o,l={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[l[`spacing-xs-${String(t)}`]];const n=[];return o.forEach(d=>{const r=t[d];Number(r)>0&&n.push(l[`spacing-${d}-${String(r)}`])}),n}const wt=He("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t,{container:n,direction:d,item:r,spacing:h,wrap:I,zeroMinWidth:S,breakpoints:_}=l;let g=[];n&&(g=bt(h,_,o));const x=[];return _.forEach(b=>{const y=l[b];y&&x.push(o[`grid-${b}-${String(y)}`])}),[o.root,n&&o.container,r&&o.item,S&&o.zeroMinWidth,...g,d!=="row"&&o[`direction-xs-${String(d)}`],I!=="wrap"&&o[`wrap-xs-${String(I)}`],...x]}})(({ownerState:t})=>te({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),_t,It,yt,vt);function xt(t,o){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const l=[];return o.forEach(n=>{const d=t[n];if(Number(d)>0){const r=`spacing-${n}-${String(d)}`;l.push(r)}}),l}const Nt=t=>{const{classes:o,container:l,direction:n,item:d,spacing:r,wrap:h,zeroMinWidth:I,breakpoints:S}=t;let _=[];l&&(_=xt(r,S));const g=[];S.forEach(b=>{const y=t[b];y&&g.push(`grid-${b}-${String(y)}`)});const x={root:["root",l&&"container",d&&"item",I&&"zeroMinWidth",..._,n!=="row"&&`direction-xs-${String(n)}`,h!=="wrap"&&`wrap-xs-${String(h)}`,...g]};return Xe(x,mt,o)},Ct=V.exports.forwardRef(function(o,l){const n=Ye({props:o,name:"MuiGrid"}),{breakpoints:d}=Ze(),r=nt(n),{className:h,columns:I,columnSpacing:S,component:_="div",container:g=!1,direction:x="row",item:b=!1,rowSpacing:y,spacing:P=0,wrap:f="wrap",zeroMinWidth:k=!1}=r,$=Je(r,St),w=y||P,L=S||P,O=V.exports.useContext(ke),B=g?I||12:O,R={},D=te({},$);d.keys.forEach(M=>{$[M]!=null&&(R[M]=$[M],delete D[M])});const T=te({},r,{columns:B,container:g,direction:x,item:b,rowSpacing:w,columnSpacing:L,wrap:f,zeroMinWidth:k,spacing:P},R,{breakpoints:d.keys}),F=Nt(T);return a(ke.Provider,{value:B,children:a(wt,te({ownerState:T,className:Qe(F.root,h),as:_,ref:l},D))})}),me=Ct,kt="/CodiShark/assets/loginImageUser.fd914332.jpg";function $t(t,o){t===void 0&&(t=6e4),o===void 0&&(o=1e3);var l=K.useState(0),n=l[0],d=l[1],r=K.useRef({}),h=function b(y){r.current.started||(r.current.started=y,r.current.lastInterval=y);var P=Math.min(o,r.current.timeLeft||1/0);y-r.current.lastInterval>=P&&(r.current.lastInterval+=P,d(function(f){return r.current.timeLeft=f-P,r.current.timeLeft})),y-r.current.started<r.current.timeToCount?r.current.requestId=window.requestAnimationFrame(b):(r.current={},d(0))},I=K.useCallback(function(b){window.cancelAnimationFrame(r.current.requestId);var y=b!==void 0?b:t;r.current.started=null,r.current.lastInterval=null,r.current.timeToCount=y,r.current.requestId=window.requestAnimationFrame(h),d(y)},[]),S=K.useCallback(function(){window.cancelAnimationFrame(r.current.requestId),r.current.started=null,r.current.lastInterval=null,r.current.timeToCount=r.current.timeLeft},[]),_=K.useCallback(function(){!r.current.started&&r.current.timeLeft>0&&(window.cancelAnimationFrame(r.current.requestId),r.current.requestId=window.requestAnimationFrame(h))},[]),g=K.useCallback(function(){r.current.timeLeft&&(window.cancelAnimationFrame(r.current.requestId),r.current={},d(0))},[]),x=K.useMemo(function(){return{start:I,pause:S,resume:_,reset:g}},[]);return K.useEffect(function(){return function(){return window.cancelAnimationFrame(r.current.requestId)}},[]),[n,x]}var Le={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(V.exports),l=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function n(i){if(typeof WeakMap!="function")return null;var u=new WeakMap,p=new WeakMap;return(n=function(s){return s?p:u})(i)}function d(i,u){if(!u&&i&&i.__esModule)return i;if(i===null||L(i)!=="object"&&typeof i!="function")return{default:i};var p=n(u);if(p&&p.has(i))return p.get(i);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in i)if(v!=="default"&&Object.prototype.hasOwnProperty.call(i,v)){var N=s?Object.getOwnPropertyDescriptor(i,v):null;N&&(N.get||N.set)?Object.defineProperty(e,v,N):e[v]=i[v]}return e.default=i,p&&p.set(i,e),e}function r(){return r=Object.assign||function(i){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(i[e]=p[e])}return i},r.apply(this,arguments)}function h(i,u){if(i==null)return{};var p=I(i,u),e,s;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(s=0;s<v.length;s++)e=v[s],!(u.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,e)||(p[e]=i[e]))}return p}function I(i,u){if(i==null)return{};var p={},e=Object.keys(i),s,v;for(v=0;v<e.length;v++)s=e[v],!(u.indexOf(s)>=0)&&(p[s]=i[s]);return p}function S(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function _(i,u){for(var p=0;p<u.length;p++){var e=u[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function g(i,u,p){return u&&_(i.prototype,u),p&&_(i,p),i}function x(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&b(i,u)}function b(i,u){return b=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},b(i,u)}function y(i){var u=k();return function(){var e=$(i),s;if(u){var v=$(this).constructor;s=Reflect.construct(e,arguments,v)}else s=e.apply(this,arguments);return P(this,s)}}function P(i,u){return u&&(L(u)==="object"||typeof u=="function")?u:f(i)}function f(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function k(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $(i){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},$(i)}function w(i,u,p){return u in i?Object.defineProperty(i,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):i[u]=p,i}function L(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(p){return typeof p}:L=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},L(i)}var O=8,B=37,R=39,D=46,T=32,F=function(u){return L(u)==="object"},M=function(i){x(p,i);var u=y(p);function p(e){var s;return S(this,p),s=u.call(this,e),w(f(s),"getClasses",function(){for(var v=arguments.length,N=new Array(v),c=0;c<v;c++)N[c]=arguments[c];return N.filter(function(m){return!F(m)&&m!==!1}).join(" ")}),w(f(s),"getType",function(){var v=s.props,N=v.isInputSecure,c=v.isInputNum;return N?"password":c?"tel":"text"}),s.input=o.default.createRef(),s}return g(p,[{key:"componentDidMount",value:function(){var s=this.props,v=s.focus,N=s.shouldAutoFocus,c=this.input.current;c&&v&&N&&c.focus()}},{key:"componentDidUpdate",value:function(s){var v=this.props.focus,N=this.input.current;s.focus!==v&&N&&v&&(N.focus(),N.select())}},{key:"render",value:function(){var s=this.props,v=s.placeholder,N=s.separator,c=s.isLastChild,m=s.inputStyle,A=s.focus,j=s.isDisabled,H=s.hasErrored,G=s.errorStyle,W=s.focusStyle,U=s.disabledStyle;s.shouldAutoFocus;var q=s.isInputNum,ie=s.index,ae=s.value,ue=s.className;s.isInputSecure;var de=h(s,l);return o.default.createElement("div",{className:ue,style:{display:"flex",alignItems:"center"}},o.default.createElement("input",r({"aria-label":"".concat(ie===0?"Please enter verification code. ":"").concat(q?"Digit":"Character"," ").concat(ie+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},F(m)&&m,A&&F(W)&&W,j&&F(U)&&U,H&&F(G)&&G),placeholder:v,className:this.getClasses(m,A&&W,j&&U,H&&G),type:this.getType(),maxLength:"1",ref:this.input,disabled:j,value:ae||""},de)),!c&&N)}}]),p}(o.PureComponent),J=function(i){x(p,i);var u=y(p);function p(){var e;S(this,p);for(var s=arguments.length,v=new Array(s),N=0;N<s;N++)v[N]=arguments[N];return e=u.call.apply(u,[this].concat(v)),w(f(e),"state",{activeInput:0}),w(f(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),w(f(e),"getPlaceholderValue",function(){var c=e.props,m=c.placeholder,A=c.numInputs;if(typeof m=="string"){if(m.length===A)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),w(f(e),"handleOtpChange",function(c){var m=e.props.onChange,A=c.join("");m(A)}),w(f(e),"isInputValueValid",function(c){var m=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return m&&c.trim().length===1}),w(f(e),"focusInput",function(c){var m=e.props.numInputs,A=Math.max(Math.min(m-1,c),0);e.setState({activeInput:A})}),w(f(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),w(f(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),w(f(e),"changeCodeAtFocus",function(c){var m=e.state.activeInput,A=e.getOtpValue();A[m]=c[0],e.handleOtpChange(A)}),w(f(e),"handleOnPaste",function(c){c.preventDefault();var m=e.state.activeInput,A=e.props,j=A.numInputs,H=A.isDisabled;if(!H){for(var G=e.getOtpValue(),W=m,U=c.clipboardData.getData("text/plain").slice(0,j-m).split(""),q=0;q<j;++q)q>=m&&U.length>0&&(G[q]=U.shift(),W++);e.setState({activeInput:W},function(){e.focusInput(W),e.handleOtpChange(G)})}}),w(f(e),"handleOnChange",function(c){var m=c.target.value;e.isInputValueValid(m)&&e.changeCodeAtFocus(m)}),w(f(e),"handleOnKeyDown",function(c){c.keyCode===O||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===D||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===B||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===R||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===T||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),w(f(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var m=c.nativeEvent;m.data===null&&m.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),w(f(e),"renderInputs",function(){for(var c=e.state.activeInput,m=e.props,A=m.numInputs,j=m.inputStyle,H=m.focusStyle,G=m.separator,W=m.isDisabled,U=m.disabledStyle,q=m.hasErrored,ie=m.errorStyle,ae=m.shouldAutoFocus,ue=m.isInputNum,de=m.isInputSecure,De=m.className,ve=[],_e=e.getOtpValue(),Ie=e.getPlaceholderValue(),ye=e.props["data-cy"],be=e.props["data-testid"],We=function(z){ve.push(o.default.createElement(M,{placeholder:Ie&&Ie[z],key:z,index:z,focus:c===z,value:_e&&_e[z],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Me){e.setState({activeInput:z}),Me.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:G,inputStyle:j,focusStyle:H,isLastChild:z===A-1,isDisabled:W,disabledStyle:U,hasErrored:q,errorStyle:ie,shouldAutoFocus:ae,isInputNum:ue,isInputSecure:de,className:De,"data-cy":ye&&"".concat(ye,"-").concat(z),"data-testid":be&&"".concat(be,"-").concat(z)}))},pe=0;pe<A;pe++)We(pe);return ve}),e}return g(p,[{key:"render",value:function(){var s=this.props.containerStyle;return o.default.createElement("div",{style:Object.assign({display:"flex"},F(s)&&s),className:F(s)?"":s},this.renderInputs())}}]),p}(o.Component);w(J,"defaultProps",{numInputs:4,onChange:function(u){return console.log(u)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Re=J;t.default=Re})(Le);const Ot=et(Le),{BREAKPOINTS:fe}=Z,Pt=ce.div`
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

        @media screen and (min-width: ${fe.desktop}px) {
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

        @media screen and (min-width: ${fe.desktop}px) {
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

        @media screen and (min-width: ${fe.desktop}px) {
          display: inline-block;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`,{ENTRY_PATH:At}=Z.ROUTES,{INTERVAL:Et,INITIAL_TIME:Ft}=Z,Te=t=>{const o=le().signIn.SignInFormCode,[l,n]=V.exports.useState(!1),[d,r]=V.exports.useState(""),h=Oe(),{setSignInStep:I,user:S,setUser:_}=ne(),{signInMethod:g}=ne(),[,x]=tt("user"),{mutateAsync:b,reset:y}=Ae(),{mutateAsync:P,reset:f}=rt(),[k,$]=V.exports.useState(""),[w,{start:L}]=$t(Ft,Et),O=T=>r(T),B=async()=>{try{n(!0),b({dni:S==null?void 0:S.dni,type:g}),L(),y(),n(!1)}catch{n(!1)}},R=async()=>{var T;try{$(""),n(!0),await P({password:d,dni:S==null?void 0:S.dni}).then(F=>{const{access_token:M,user:J}=F!=null?F:{};_(J),x(J),at.setCookie("token",M)}),f(),n(!1),I(0),h(At)}catch{(T=k==null?void 0:k.toString())!=null&&T.includes("422")?$("C\xF3digo de error incorrecto"):$("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),n(!1)}},D=()=>a("span",{className:"SignInCode__container--separator"});return V.exports.useEffect(()=>{L()},[L]),C(Pt,{className:"SignInCode",children:[a(Ot,{value:d,onChange:O,numInputs:it,separator:D(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),a("div",{className:"SignInCode__container--time",children:C("p",{className:"SignInCode__text SignInCode__text--time",children:["(",lt(w/1e3),")"]})}),C("div",{className:"SignInCode__container--button",children:[a(Se,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:R,disabled:l,className:"SignInCode__component--button",children:o.button}),(k==null?void 0:k.length)>0?a("h3",{className:"SignInCode__error",children:k}):null]}),C("div",{className:"SignInCode__container--text",children:[C("p",{className:"SignInCode__text",children:[`${o.question} `,a("span",{onClick:B,className:"SignInCode__text--color SignInCode__text--clickable",children:o.answer})]}),a("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>I(1),children:o.method})]})]})};Te.defaultProps={};const Lt="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Tt=ce.div`
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
`,ge=t=>{const o=le().signIn.SignInFormUser,[l,n]=ot(),[d,r]=V.exports.useState(!1),{setSignInStep:h,setUser:I}=ne(),{mutateAsync:S,reset:_}=st(),[g,x]=V.exports.useState(""),{control:b,handleSubmit:y}=Ee();return a(Tt,{className:"SignInForm",children:C(dt,{component:"form",noValidate:!0,onSubmit:y(async f=>{var k;try{r(!0),x("");const $={dni:f==null?void 0:f.dni,cod_verifier:f==null?void 0:f.cod};await S($).then(w=>I(w)),_(),r(!1),h(1)}catch($){(k=$==null?void 0:$.toString())!=null&&k.includes("422")?x("No se encontr\xF3 el usuario en el registro."):x("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),r(!1)}}),children:[C(me,{container:!0,spacing:2,children:[a(me,{item:!0,xs:12,sm:8,md:8,children:a(xe,{name:l.name,control:b,rules:l.rules,defaultValue:"",render:({field:f,fieldState:k})=>a(Ne,{field:f,fields:k,config:{type:l.type,label:l.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:l==null?void 0:l.maxLength,InputProps:{endAdornment:a(Ce,{position:"end",children:a("img",{className:"SignInForm__icon",src:ut,alt:"iconPerson"})})}}})})}),a(me,{item:!0,xs:12,sm:4,md:4,children:a(xe,{name:n.name,control:b,rules:n.rules,defaultValue:"",render:({field:f,fieldState:k})=>a(Ne,{field:f,fields:k,config:{type:n.type,label:n.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:n==null?void 0:n.maxLength,InputProps:{endAdornment:a(Ce,{position:"end",children:a("img",{className:"SignInForm__icon",src:Lt,alt:"iconAlert"})})}}})})})]}),a("div",{className:"SignInForm__container--button",children:a(Se,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:d,className:"SignInForm__component--button",children:o.button})}),(g==null?void 0:g.length)>0?a("h3",{className:"SignInForm__error",children:g}):null]})})};ge.defaultProps={};const{BREAKPOINTS:oe}=Z,Vt=ce.div`
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
`,Ve=t=>{const o=le().signIn.SignInValidation,l=ct(),[n,d]=V.exports.useState(!1),{setSignInStep:r,user:h,setSignInMethod:I}=ne(),{register:S,handleSubmit:_}=Ee(),{mutateAsync:g,reset:x}=Ae(),{first_name:b,last_name:y,phone:P,email:f}=h!=null?h:{},k=async O=>{try{d(!0),await g({dni:h==null?void 0:h.dni,type:O==null?void 0:O.verifyMethod}),x(),I(O==null?void 0:O.verifyMethod),d(!1),r(2)}catch{d(!1)}},$=O=>{const{id:B,value:R,label:D,name:T,labelExtension:F}=O;return a("div",{children:C("label",{htmlFor:B,children:[a("input",{className:"SignInValidate__container__input",type:"radio",value:R,id:B,...S(T,{required:!0})}),D,a("span",{className:"SignInValidate__text--color",children:F})]})})},w=()=>C(Pe,{children:[C("p",{className:"SignInValidate__text--greeting",children:[`${o.greeting} `,a("span",{className:"SignInValidate__text--greeting__bold SignInValidate__text--block",children:`${b!=null?b:""} ${y!=null?y:""}`})]}),a("p",{className:"SignInValidate__text--indication",children:o.instructions})]});return a(Vt,{className:"SignInValidate",children:a("div",{className:"SignInValidate__container__global",children:(()=>C("form",{onSubmit:_(k),children:[C("div",{className:"SignInValidate__container__form",children:[w(),l.map((O,B)=>{var R,D;return a($,{id:O.id,name:O.name,value:O.value,label:O.label,labelExtension:O.value==="SMS"?` *** *** ${(R=P==null?void 0:P.slice((P==null?void 0:P.length)-3))!=null?R:""}`:` *** *** ${(D=f==null?void 0:f.slice((f==null?void 0:f.length)-15))!=null?D:""}`},B)})]}),a("div",{className:"SignInValidate__container--button",children:a(Se,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInValidate__component--button",children:o.button})})]}))()})})};Ve.defaultProps={};const{BREAKPOINTS:E}=Z,$e=ce.div`
  display: flex;
  flex-direction: column;

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
          padding-bottom: 5.6rem;

          @media screen and (min-width: ${E.mobile}px) {
            justify-content: none;
            padding-bottom: 0;
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

        @media screen and (min-width: ${E.mobile}px) {
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
`,{ENTRY_PATH:Bt}=Z.ROUTES,Be=t=>{const{isAnonymous:o,signInStep:l}=ne(),n=le().signIn.SignInFormUser,d=Oe();V.exports.useEffect(()=>{if(!o){d(Bt);return}},[o,d]);const r=()=>{switch(l){case 0:return a(ge,{});case 1:return a(Ve,{});case 2:return a(Te,{});default:return a(ge,{})}},h=()=>a($e,{className:"SignIn__component--swipper",children:C(je,{slidesPerView:"auto",pagination:{clickable:!0},autoPlay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,spaceBetween:8,modules:[Ge,Ue],children:[a(Q,{children:a("img",{src:X,alt:`${n.image} - 1`,className:"SignIn__component--swipper-image"})}),a(Q,{children:a("img",{src:X,alt:`${n.image} - 2`,className:"SignIn__component--swipper-image"})}),a(Q,{children:a("img",{src:X,alt:`${n.image} - 3`,className:"SignIn__component--swipper-image"})}),a(Q,{children:a("img",{src:X,alt:`${n.image} - 4`,className:"SignIn__component--swipper-image"})}),a(Q,{children:a("img",{src:X,alt:`${n.image} - 5`,className:"SignIn__component--swipper-image"})})]})}),I=()=>{const g=()=>l===2?"SignIn__container--separate":"";return C(Pe,{children:[a("img",{src:we,alt:n.altLogo,className:"SignIn__component--logo"}),h(),a("h1",{className:"SignIn__title",children:l!==2?n.title.toUpperCase():n.titleAlt.toUpperCase()}),C("div",{className:g(),children:[a("p",{className:"SignIn__subtitle",children:l!==2?n.subtitle:n.subtitleAlt}),l===2&&a("p",{className:"SignIn__subtitle SignIn__subtitle-sepa",children:n.subtitleAltTwo})]})]})},S=()=>a("p",{className:"SignIn__component--copyright",children:n.copyright});return a($e,{className:"SignIn",signInStep:l,children:C("div",{className:"SignIn__container--components",children:[C("div",{className:"SignIn__container--image",children:[a("img",{src:kt,alt:"Imagen de fondo",className:"SignIn__component--image"}),(()=>C("div",{className:"SignIn__renderList",children:[a("h2",{className:"SignIn__renderList--h2",children:n.benefitTitle}),a("h1",{className:"SignIn__renderList--h1",children:n.benefitSubTitle}),C("ul",{className:"SignIn__renderList--ul",children:[a("li",{className:"SignIn__renderList--h2",children:n.ul1}),a("li",{className:"SignIn__renderList--h2",children:n.ul2}),a("li",{className:"SignIn__renderList--h2",children:n.ul3}),a("li",{className:"SignIn__renderList--h2",children:n.ul4})]})]}))()]}),C("div",{className:"SignIn__container--form",children:[a("div",{className:"SignIn__component--form-logo",children:a("img",{src:we,alt:n.altLogo})}),C("div",{className:"SignIn__component--form",children:[a("div",{className:"SignIn__component--form-header",children:I()}),a("div",{className:"SignIn__component--form-content",children:r()})]}),a("div",{className:"SignIn__container--copyright",children:S()})]})]})})};Be.defaultProps={};const Ht=Be;export{Ht as default};
