import{C as pe}from"./constants.8e3143ed.js";import{X as We,Y as Me,Z as xe,q as Ce,C as ze,k as je,l as Ge,m as Ue,n as qe,p as Ke,r as He,y as re,z as J,_ as we,$ as Ye,E as Ze,a0 as Xe,P as Je}from"./auth.service.hooks.54244ada.js";import{r as V,B as Qe,b as Ne,a as d,_ as Y,C as et,af as ie,p as fe,E as G,a1 as tt,s as ae,u as ke,j as P,F as Oe}from"./index.0497ccc9.js";import{m as nt,B as me,v as rt,c as it}from"./validations.utils.c457d49f.js";import{u as Pe,C as le,T as ue,I as _e,i as at}from"./index.esm.b81d54bc.js";const ot=["className","component"];function st(t={}){const{defaultTheme:a,defaultClassName:l="MuiBox-root",generateClassName:r,styleFunctionSx:o=Me}=t,n=We("div",{shouldForwardProp:I=>I!=="theme"&&I!=="sx"&&I!=="as"})(o);return V.exports.forwardRef(function(S,_){const v=Qe(a),C=xe(S),{className:x,component:b="div"}=C,h=Ne(C,ot);return d(n,Y({as:b,ref:_,className:Ce(x,r?r(l):l),theme:v},h))})}const ct=et(),lt=st({defaultTheme:ct,defaultClassName:"MuiBox-root",generateClassName:ze.generate}),ne=lt,ut=V.exports.createContext(),be=ut;function dt(t){return je("MuiGrid",t)}const pt=[0,1,2,3,4,5,6,7,8,9,10],ft=["column-reverse","column","row-reverse","row"],mt=["nowrap","wrap-reverse","wrap"],X=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Q=Ge("MuiGrid",["root","container","item","zeroMinWidth",...pt.map(t=>`spacing-xs-${t}`),...ft.map(t=>`direction-xs-${t}`),...mt.map(t=>`wrap-xs-${t}`),...X.map(t=>`grid-xs-${t}`),...X.map(t=>`grid-sm-${t}`),...X.map(t=>`grid-md-${t}`),...X.map(t=>`grid-lg-${t}`),...X.map(t=>`grid-xl-${t}`)]),gt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(t){const a=parseFloat(t);return`${a}${String(t).replace(String(a),"")||"px"}`}function ht({theme:t,ownerState:a}){let l;return t.breakpoints.keys.reduce((r,o)=>{let n={};if(a[o]&&(l=a[o]),!l)return r;if(l===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(l==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const g=ie({values:a.columns,breakpoints:t.breakpoints.values}),I=typeof g=="object"?g[o]:g;if(I==null)return r;const S=`${Math.round(l/I*1e8)/1e6}%`;let _={};if(a.container&&a.item&&a.columnSpacing!==0){const v=t.spacing(a.columnSpacing);if(v!=="0px"){const C=`calc(${S} + ${Z(v)})`;_={flexBasis:C,maxWidth:C}}}n=Y({flexBasis:S,flexGrow:0,maxWidth:S},_)}return t.breakpoints.values[o]===0?Object.assign(r,n):r[t.breakpoints.up(o)]=n,r},{})}function St({theme:t,ownerState:a}){const l=ie({values:a.direction,breakpoints:t.breakpoints.values});return fe({theme:t},l,r=>{const o={flexDirection:r};return r.indexOf("column")===0&&(o[`& > .${Q.item}`]={maxWidth:"none"}),o})}function Ae({breakpoints:t,values:a}){let l="";Object.keys(a).forEach(o=>{l===""&&a[o]!==0&&(l=o)});const r=Object.keys(t).sort((o,n)=>t[o]-t[n]);return r.slice(0,r.indexOf(l))}function vt({theme:t,ownerState:a}){const{container:l,rowSpacing:r}=a;let o={};if(l&&r!==0){const n=ie({values:r,breakpoints:t.breakpoints.values});let g;typeof n=="object"&&(g=Ae({breakpoints:t.breakpoints.values,values:n})),o=fe({theme:t},n,(I,S)=>{var _;const v=t.spacing(I);return v!=="0px"?{marginTop:`-${Z(v)}`,[`& > .${Q.item}`]:{paddingTop:Z(v)}}:(_=g)!=null&&_.includes(S)?{}:{marginTop:0,[`& > .${Q.item}`]:{paddingTop:0}}})}return o}function It({theme:t,ownerState:a}){const{container:l,columnSpacing:r}=a;let o={};if(l&&r!==0){const n=ie({values:r,breakpoints:t.breakpoints.values});let g;typeof n=="object"&&(g=Ae({breakpoints:t.breakpoints.values,values:n})),o=fe({theme:t},n,(I,S)=>{var _;const v=t.spacing(I);return v!=="0px"?{width:`calc(100% + ${Z(v)})`,marginLeft:`-${Z(v)}`,[`& > .${Q.item}`]:{paddingLeft:Z(v)}}:(_=g)!=null&&_.includes(S)?{}:{width:"100%",marginLeft:0,[`& > .${Q.item}`]:{paddingLeft:0}}})}return o}function yt(t,a,l={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[l[`spacing-xs-${String(t)}`]];const r=[];return a.forEach(o=>{const n=t[o];Number(n)>0&&r.push(l[`spacing-${o}-${String(n)}`])}),r}const _t=Ue("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:l}=t,{container:r,direction:o,item:n,spacing:g,wrap:I,zeroMinWidth:S,breakpoints:_}=l;let v=[];r&&(v=yt(g,_,a));const C=[];return _.forEach(x=>{const b=l[x];b&&C.push(a[`grid-${x}-${String(b)}`])}),[a.root,r&&a.container,n&&a.item,S&&a.zeroMinWidth,...v,o!=="row"&&a[`direction-xs-${String(o)}`],I!=="wrap"&&a[`wrap-xs-${String(I)}`],...C]}})(({ownerState:t})=>Y({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),St,vt,It,ht);function bt(t,a){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const l=[];return a.forEach(r=>{const o=t[r];if(Number(o)>0){const n=`spacing-${r}-${String(o)}`;l.push(n)}}),l}const xt=t=>{const{classes:a,container:l,direction:r,item:o,spacing:n,wrap:g,zeroMinWidth:I,breakpoints:S}=t;let _=[];l&&(_=bt(n,S));const v=[];S.forEach(x=>{const b=t[x];b&&v.push(`grid-${x}-${String(b)}`)});const C={root:["root",l&&"container",o&&"item",I&&"zeroMinWidth",..._,r!=="row"&&`direction-xs-${String(r)}`,g!=="wrap"&&`wrap-xs-${String(g)}`,...v]};return He(C,dt,a)},Ct=V.exports.forwardRef(function(a,l){const r=qe({props:a,name:"MuiGrid"}),{breakpoints:o}=Ke(),n=xe(r),{className:g,columns:I,columnSpacing:S,component:_="div",container:v=!1,direction:C="row",item:x=!1,rowSpacing:b,spacing:h=0,wrap:m="wrap",zeroMinWidth:F=!1}=n,$=Ne(n,gt),w=b||h,L=S||h,k=V.exports.useContext(be),A=v?I||12:k,T={},E=Y({},$);o.keys.forEach(K=>{$[K]!=null&&(T[K]=$[K],delete E[K])});const q=Y({},n,{columns:A,container:v,direction:C,item:x,rowSpacing:w,columnSpacing:L,wrap:m,zeroMinWidth:F,spacing:h},T,{breakpoints:o.keys}),B=xt(q);return d(be.Provider,{value:A,children:d(_t,Y({ownerState:q,className:Ce(B.root,g),as:_,ref:l},E))})}),U=Ct,wt="/CodiShark/assets/logoKonecta.19fc6f76.webp";function Nt(t,a){t===void 0&&(t=6e4),a===void 0&&(a=1e3);var l=G.useState(0),r=l[0],o=l[1],n=G.useRef({}),g=function x(b){n.current.started||(n.current.started=b,n.current.lastInterval=b);var h=Math.min(a,n.current.timeLeft||1/0);b-n.current.lastInterval>=h&&(n.current.lastInterval+=h,o(function(m){return n.current.timeLeft=m-h,n.current.timeLeft})),b-n.current.started<n.current.timeToCount?n.current.requestId=window.requestAnimationFrame(x):(n.current={},o(0))},I=G.useCallback(function(x){window.cancelAnimationFrame(n.current.requestId);var b=x!==void 0?x:t;n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=b,n.current.requestId=window.requestAnimationFrame(g),o(b)},[]),S=G.useCallback(function(){window.cancelAnimationFrame(n.current.requestId),n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=n.current.timeLeft},[]),_=G.useCallback(function(){!n.current.started&&n.current.timeLeft>0&&(window.cancelAnimationFrame(n.current.requestId),n.current.requestId=window.requestAnimationFrame(g))},[]),v=G.useCallback(function(){n.current.timeLeft&&(window.cancelAnimationFrame(n.current.requestId),n.current={},o(0))},[]),C=G.useMemo(function(){return{start:I,pause:S,resume:_,reset:v}},[]);return G.useEffect(function(){return function(){return window.cancelAnimationFrame(n.current.requestId)}},[]),[r,C]}var $e={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(V.exports),l=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(i){if(typeof WeakMap!="function")return null;var u=new WeakMap,p=new WeakMap;return(r=function(s){return s?p:u})(i)}function o(i,u){if(!u&&i&&i.__esModule)return i;if(i===null||L(i)!=="object"&&typeof i!="function")return{default:i};var p=r(u);if(p&&p.has(i))return p.get(i);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in i)if(y!=="default"&&Object.prototype.hasOwnProperty.call(i,y)){var N=s?Object.getOwnPropertyDescriptor(i,y):null;N&&(N.get||N.set)?Object.defineProperty(e,y,N):e[y]=i[y]}return e.default=i,p&&p.set(i,e),e}function n(){return n=Object.assign||function(i){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(i[e]=p[e])}return i},n.apply(this,arguments)}function g(i,u){if(i==null)return{};var p=I(i,u),e,s;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(i);for(s=0;s<y.length;s++)e=y[s],!(u.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,e)||(p[e]=i[e]))}return p}function I(i,u){if(i==null)return{};var p={},e=Object.keys(i),s,y;for(y=0;y<e.length;y++)s=e[y],!(u.indexOf(s)>=0)&&(p[s]=i[s]);return p}function S(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function _(i,u){for(var p=0;p<u.length;p++){var e=u[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function v(i,u,p){return u&&_(i.prototype,u),p&&_(i,p),i}function C(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&x(i,u)}function x(i,u){return x=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},x(i,u)}function b(i){var u=F();return function(){var e=$(i),s;if(u){var y=$(this).constructor;s=Reflect.construct(e,arguments,y)}else s=e.apply(this,arguments);return h(this,s)}}function h(i,u){return u&&(L(u)==="object"||typeof u=="function")?u:m(i)}function m(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $(i){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},$(i)}function w(i,u,p){return u in i?Object.defineProperty(i,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):i[u]=p,i}function L(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(p){return typeof p}:L=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},L(i)}var k=8,A=37,T=39,E=46,q=32,B=function(u){return L(u)==="object"},K=function(i){C(p,i);var u=b(p);function p(e){var s;return S(this,p),s=u.call(this,e),w(m(s),"getClasses",function(){for(var y=arguments.length,N=new Array(y),c=0;c<y;c++)N[c]=arguments[c];return N.filter(function(f){return!B(f)&&f!==!1}).join(" ")}),w(m(s),"getType",function(){var y=s.props,N=y.isInputSecure,c=y.isInputNum;return N?"password":c?"tel":"text"}),s.input=a.default.createRef(),s}return v(p,[{key:"componentDidMount",value:function(){var s=this.props,y=s.focus,N=s.shouldAutoFocus,c=this.input.current;c&&y&&N&&c.focus()}},{key:"componentDidUpdate",value:function(s){var y=this.props.focus,N=this.input.current;s.focus!==y&&N&&y&&(N.focus(),N.select())}},{key:"render",value:function(){var s=this.props,y=s.placeholder,N=s.separator,c=s.isLastChild,f=s.inputStyle,O=s.focus,W=s.isDisabled,H=s.hasErrored,M=s.errorStyle,R=s.focusStyle,z=s.disabledStyle;s.shouldAutoFocus;var j=s.isInputNum,ee=s.index,te=s.value,oe=s.className;s.isInputSecure;var se=g(s,l);return a.default.createElement("div",{className:oe,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",n({"aria-label":"".concat(ee===0?"Please enter verification code. ":"").concat(j?"Digit":"Character"," ").concat(ee+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},B(f)&&f,O&&B(R)&&R,W&&B(z)&&z,H&&B(M)&&M),placeholder:y,className:this.getClasses(f,O&&R,W&&z,H&&M),type:this.getType(),maxLength:"1",ref:this.input,disabled:W,value:te||""},se)),!c&&N)}}]),p}(a.PureComponent),ge=function(i){C(p,i);var u=b(p);function p(){var e;S(this,p);for(var s=arguments.length,y=new Array(s),N=0;N<s;N++)y[N]=arguments[N];return e=u.call.apply(u,[this].concat(y)),w(m(e),"state",{activeInput:0}),w(m(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),w(m(e),"getPlaceholderValue",function(){var c=e.props,f=c.placeholder,O=c.numInputs;if(typeof f=="string"){if(f.length===O)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),w(m(e),"handleOtpChange",function(c){var f=e.props.onChange,O=c.join("");f(O)}),w(m(e),"isInputValueValid",function(c){var f=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return f&&c.trim().length===1}),w(m(e),"focusInput",function(c){var f=e.props.numInputs,O=Math.max(Math.min(f-1,c),0);e.setState({activeInput:O})}),w(m(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),w(m(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),w(m(e),"changeCodeAtFocus",function(c){var f=e.state.activeInput,O=e.getOtpValue();O[f]=c[0],e.handleOtpChange(O)}),w(m(e),"handleOnPaste",function(c){c.preventDefault();var f=e.state.activeInput,O=e.props,W=O.numInputs,H=O.isDisabled;if(!H){for(var M=e.getOtpValue(),R=f,z=c.clipboardData.getData("text/plain").slice(0,W-f).split(""),j=0;j<W;++j)j>=f&&z.length>0&&(M[j]=z.shift(),R++);e.setState({activeInput:R},function(){e.focusInput(R),e.handleOtpChange(M)})}}),w(m(e),"handleOnChange",function(c){var f=c.target.value;e.isInputValueValid(f)&&e.changeCodeAtFocus(f)}),w(m(e),"handleOnKeyDown",function(c){c.keyCode===k||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===E||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===A||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===T||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===q||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),w(m(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var f=c.nativeEvent;f.data===null&&f.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),w(m(e),"renderInputs",function(){for(var c=e.state.activeInput,f=e.props,O=f.numInputs,W=f.inputStyle,H=f.focusStyle,M=f.separator,R=f.isDisabled,z=f.disabledStyle,j=f.hasErrored,ee=f.errorStyle,te=f.shouldAutoFocus,oe=f.isInputNum,se=f.isInputSecure,Be=f.className,he=[],Se=e.getOtpValue(),ve=e.getPlaceholderValue(),Ie=e.props["data-cy"],ye=e.props["data-testid"],Ve=function(D){he.push(a.default.createElement(K,{placeholder:ve&&ve[D],key:D,index:D,focus:c===D,value:Se&&Se[D],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(De){e.setState({activeInput:D}),De.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:M,inputStyle:W,focusStyle:H,isLastChild:D===O-1,isDisabled:R,disabledStyle:z,hasErrored:j,errorStyle:ee,shouldAutoFocus:te,isInputNum:oe,isInputSecure:se,className:Be,"data-cy":Ie&&"".concat(Ie,"-").concat(D),"data-testid":ye&&"".concat(ye,"-").concat(D)}))},ce=0;ce<O;ce++)Ve(ce);return he}),e}return v(p,[{key:"render",value:function(){var s=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},B(s)&&s),className:B(s)?"":s},this.renderInputs())}}]),p}(a.Component);w(ge,"defaultProps",{numInputs:4,onChange:function(u){return console.log(u)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Ee=ge;t.default=Ee})($e);const kt=tt($e),Ot=t=>(t-(t%=60))/60+(9<t?":":":0")+t,Pt=ae.div`
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
`,{ENTRY_PATH:At}=pe.ROUTES,{INTERVAL:$t,INITIAL_TIME:Ft}=pe,Fe=t=>{const a=re().signIn.SignInFormCode,[l,r]=V.exports.useState(!1),[o,n]=V.exports.useState(""),g=ke(),{setSignInStep:I,user:S,setUser:_}=J(),{signInMethod:v}=J(),{mutateAsync:C,reset:x}=we(),{mutateAsync:b,reset:h}=Ye(),[m,{start:F}]=Nt(Ft,$t),$=A=>n(A),w=async()=>{try{r(!0),C({dni:S==null?void 0:S.dni,type:v}),F(),x(),r(!1)}catch{r(!1)}},L=async()=>{try{r(!0),await b({password:o,dni:S==null?void 0:S.dni}).then(A=>{const{access_token:T,user:E}=A!=null?A:{};_(E),Ze.setCookie("token",T)}),h(),r(!1),I(0),g(At)}catch{r(!1)}},k=()=>d("span",{className:"SignInCode__container--separator"});return V.exports.useEffect(()=>{F()},[F]),P(Pt,{className:"SignInCode",children:[d(kt,{value:o,onChange:$,numInputs:nt,separator:k(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),d("div",{className:"SignInCode__container--time",children:P("p",{className:"SignInCode__text SignInCode__text--time",children:["(",Ot(m/1e3),")"]})}),d(me,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:L,disabled:l,className:"SignInCode__container--button",children:a.button}),P("div",{className:"SignInCode__container--text",children:[P("p",{className:"SignInCode__text",children:[a.question,d("span",{onClick:w,className:"SignInCode__text--color SignInCode__text--clickable",children:a.answer})]}),d("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>I(1),children:a.method})]})]})};Fe.defaultProps={};const Lt="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Tt=ae.div`
  .SignInForm {
    &__container {
      &--button {
        padding: 1rem 0;
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }
    }
  }
`,de=t=>{const a=re().signIn.SignInFormUser,[l,r,o]=rt(),[n,g]=V.exports.useState(!1),{setSignInStep:I,setUser:S}=J(),{mutateAsync:_,reset:v}=Xe(),{control:C,handleSubmit:x}=Pe();return d(Tt,{className:"SignInForm",children:P(ne,{component:"form",noValidate:!0,onSubmit:x(async h=>{try{g(!0);const m={dni:h==null?void 0:h.dni,cod_verifier:h==null?void 0:h.cod,emision_date:h==null?void 0:h.date_begin};await _(m).then(F=>S(F)),v(),g(!1),I(1)}catch{g(!1)}}),children:[P(U,{container:!0,spacing:2,children:[d(U,{item:!0,xs:8,md:8,children:d(le,{name:l.name,control:C,rules:l.rules,defaultValue:"",render:({field:h,fieldState:m})=>d(ue,{field:h,fields:m,config:{type:l.type,label:l.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:l==null?void 0:l.maxLength,InputProps:{endAdornment:d(_e,{position:"end",children:d("img",{className:"SignInForm__icon",src:at,alt:"iconPerson"})})}}})})}),d(U,{item:!0,xs:4,md:4,children:d(le,{name:r.name,control:C,rules:r.rules,defaultValue:"",render:({field:h,fieldState:m})=>d(ue,{field:h,fields:m,config:{type:r.type,label:r.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:r==null?void 0:r.maxLength,InputProps:{endAdornment:d(_e,{position:"end",children:d("img",{className:"SignInForm__icon",src:Lt,alt:"iconAlert"})})}}})})}),d(U,{item:!0,xs:12,md:12,children:d(le,{name:o.name,control:C,rules:o.rules,defaultValue:"",render:({field:h,fieldState:m})=>d(ue,{field:h,fields:m,config:{type:o.type,label:o.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),d(ne,{children:d(me,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInForm__container--button",children:a.button})})]})})};de.defaultProps={};const Et=ae.div`
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
`,Le=t=>{const a=re().signIn.SignInValidation,l=it(),[r,o]=V.exports.useState(!1),{setSignInStep:n,user:g,setSignInMethod:I}=J(),{register:S,handleSubmit:_}=Pe(),{mutateAsync:v,reset:C}=we(),{first_name:x,last_name:b,phone:h,email:m}=g!=null?g:{},F=async k=>{try{o(!0),await v({dni:g==null?void 0:g.dni,type:k==null?void 0:k.verifyMethod}),C(),I(k==null?void 0:k.verifyMethod),o(!1),n(2)}catch{o(!1)}},$=k=>{const{id:A,value:T,label:E,name:q,labelExtension:B}=k;return d("div",{children:P("label",{htmlFor:A,children:[d("input",{className:"SignInValidate__container__input",type:"radio",value:T,id:A,...S(q,{required:!0})}),E,d("span",{className:"SignInValidate__text--color",children:B})]})})},w=()=>P("form",{onSubmit:_(F),children:[d("div",{className:"SignInValidate__container__form",children:l.map((k,A)=>{var T,E;return d($,{id:k.id,name:k.name,value:k.value,label:k.label,labelExtension:k.value==="SMS"?` *** *** ${(T=h==null?void 0:h.slice((h==null?void 0:h.length)-3))!=null?T:""}`:` ********${(E=m==null?void 0:m.slice((m==null?void 0:m.length)-15))!=null?E:""}`},A)})}),d(me,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:r,className:"SignInValidate__container--button",children:a.button})]});return d(Et,{className:"SignInValidate",children:P("div",{className:"SignInValidate__container__global",children:[d("div",{className:"SignInValidate__container",children:(()=>P(Oe,{children:[P("p",{className:"SignInValidate__text--greeting",children:[a.greeting,d("span",{className:"SignInValidate__text--greeting__bold",children:` ${x!=null?x:""} ${b!=null?b:""}`})]}),d("p",{className:"SignInValidate__text--indication",children:a.instructions})]}))()}),w()]})})};Le.defaultProps={};const Bt="/CodiShark/assets/loginImageUser.fd914332.jpg",Vt="/CodiShark/assets/loginImageUser.93122b01.webp",Rt=ae.div`
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
      background-image: url(${Bt});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      background-image: -webkit-image-set(url(${Vt}));
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
`,{ENTRY_PATH:Dt}=pe.ROUTES,Te=t=>{const{isAnonymous:a,signInStep:l}=J(),r=re().signIn.SignInFormUser,o=ke();V.exports.useEffect(()=>{if(!a){o(Dt);return}},[a,o]);const n=()=>{switch(l){case 0:return d(de,{});case 1:return d(Le,{});case 2:return d(Fe,{});default:return d(de,{})}},g=()=>P(Oe,{children:[d("img",{src:wt,alt:r.altLogo}),d("h1",{className:"SignIn__title",children:l!==2?r.title.toUpperCase():r.titleAlt.toUpperCase()}),d("p",{className:"SignIn__subtitle",children:l!==2?r.subtitle:r.subtitleAlt}),l===2&&d("p",{className:"SignIn__subtitle",children:r.subtitleAltTwo})]}),I=()=>d("p",{className:"SignIn__container--copyright",children:r.copyright});return d(Rt,{className:"SignIn",children:P(U,{container:!0,component:"main",className:"SignIn__container",children:[d(U,{item:!0,xs:!1,sm:4,md:6,className:"SignIn__image",children:(()=>P("div",{className:"SignIn__renderList",children:[d("h2",{className:"SignIn__renderList--h2",children:r.benefitTitle}),d("h1",{className:"SignIn__renderList--h1",children:r.benefitSubTitle}),P("ul",{className:"SignIn__renderList--ul",children:[d("li",{className:"SignIn__renderList--h2",children:r.ul1}),d("li",{className:"SignIn__renderList--h2",children:r.ul2}),d("li",{className:"SignIn__renderList--h2",children:r.ul3}),d("li",{className:"SignIn__renderList--h2",children:r.ul4})]})]}))()}),P(U,{item:!0,xs:12,sm:8,md:6,component:Je,elevation:4,square:!0,container:!0,alignItems:"center",justifyContent:"center",flexDirection:"column",children:[P(ne,{className:"SignIn__container--form",children:[d(ne,{className:"SignIn__container--center   SignIn__container--content",children:g()}),n()]}),I()]})]})})};Te.defaultProps={};const qt=Te;export{qt as default};
