import{C as pe}from"./constants.d8ed894c.js";import{X as Le,Y as We,G as be,q as xe,C as Me,k as ze,l as je,m as Ge,n as Ue,p as qe,r as Ke,x as re,y as J,Z as Ce,_ as He,D as Ye,$ as Ze,P as Xe}from"./auth.service.hooks.d888e555.js";import{r as V,B as Je,b as we,a as p,_ as Y,C as Qe,af as ae,p as fe,E as G,a1 as et,s as ie,u as Ne,j as $,F as Oe}from"./index.4dd33885.js";import{B as me,a as ke,C as ue,T as le}from"./index.esm.cc2c9cc5.js";import{f as tt}from"./common.utils.4e500731.js";import{m as nt,v as rt,c as at}from"./validations.utils.d6cb04af.js";const it=["className","component"];function ot(t={}){const{defaultTheme:a,defaultClassName:u="MuiBox-root",generateClassName:i,styleFunctionSx:o=We}=t,n=Le("div",{shouldForwardProp:S=>S!=="theme"&&S!=="sx"&&S!=="as"})(o);return V.exports.forwardRef(function(y,_){const v=Je(a),C=be(y),{className:x,component:b="div"}=C,h=we(C,it);return p(n,Y({as:b,ref:_,className:xe(x,i?i(u):u),theme:v},h))})}const st=Qe(),ct=ot({defaultTheme:st,defaultClassName:"MuiBox-root",generateClassName:Me.generate}),ne=ct,ut=V.exports.createContext(),_e=ut;function lt(t){return ze("MuiGrid",t)}const dt=[0,1,2,3,4,5,6,7,8,9,10],pt=["column-reverse","column","row-reverse","row"],ft=["nowrap","wrap-reverse","wrap"],X=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Q=je("MuiGrid",["root","container","item","zeroMinWidth",...dt.map(t=>`spacing-xs-${t}`),...pt.map(t=>`direction-xs-${t}`),...ft.map(t=>`wrap-xs-${t}`),...X.map(t=>`grid-xs-${t}`),...X.map(t=>`grid-sm-${t}`),...X.map(t=>`grid-md-${t}`),...X.map(t=>`grid-lg-${t}`),...X.map(t=>`grid-xl-${t}`)]),mt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(t){const a=parseFloat(t);return`${a}${String(t).replace(String(a),"")||"px"}`}function gt({theme:t,ownerState:a}){let u;return t.breakpoints.keys.reduce((i,o)=>{let n={};if(a[o]&&(u=a[o]),!u)return i;if(u===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(u==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const g=ae({values:a.columns,breakpoints:t.breakpoints.values}),S=typeof g=="object"?g[o]:g;if(S==null)return i;const y=`${Math.round(u/S*1e8)/1e6}%`;let _={};if(a.container&&a.item&&a.columnSpacing!==0){const v=t.spacing(a.columnSpacing);if(v!=="0px"){const C=`calc(${y} + ${Z(v)})`;_={flexBasis:C,maxWidth:C}}}n=Y({flexBasis:y,flexGrow:0,maxWidth:y},_)}return t.breakpoints.values[o]===0?Object.assign(i,n):i[t.breakpoints.up(o)]=n,i},{})}function ht({theme:t,ownerState:a}){const u=ae({values:a.direction,breakpoints:t.breakpoints.values});return fe({theme:t},u,i=>{const o={flexDirection:i};return i.indexOf("column")===0&&(o[`& > .${Q.item}`]={maxWidth:"none"}),o})}function Pe({breakpoints:t,values:a}){let u="";Object.keys(a).forEach(o=>{u===""&&a[o]!==0&&(u=o)});const i=Object.keys(t).sort((o,n)=>t[o]-t[n]);return i.slice(0,i.indexOf(u))}function vt({theme:t,ownerState:a}){const{container:u,rowSpacing:i}=a;let o={};if(u&&i!==0){const n=ae({values:i,breakpoints:t.breakpoints.values});let g;typeof n=="object"&&(g=Pe({breakpoints:t.breakpoints.values,values:n})),o=fe({theme:t},n,(S,y)=>{var _;const v=t.spacing(S);return v!=="0px"?{marginTop:`-${Z(v)}`,[`& > .${Q.item}`]:{paddingTop:Z(v)}}:(_=g)!=null&&_.includes(y)?{}:{marginTop:0,[`& > .${Q.item}`]:{paddingTop:0}}})}return o}function St({theme:t,ownerState:a}){const{container:u,columnSpacing:i}=a;let o={};if(u&&i!==0){const n=ae({values:i,breakpoints:t.breakpoints.values});let g;typeof n=="object"&&(g=Pe({breakpoints:t.breakpoints.values,values:n})),o=fe({theme:t},n,(S,y)=>{var _;const v=t.spacing(S);return v!=="0px"?{width:`calc(100% + ${Z(v)})`,marginLeft:`-${Z(v)}`,[`& > .${Q.item}`]:{paddingLeft:Z(v)}}:(_=g)!=null&&_.includes(y)?{}:{width:"100%",marginLeft:0,[`& > .${Q.item}`]:{paddingLeft:0}}})}return o}function yt(t,a,u={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[u[`spacing-xs-${String(t)}`]];const i=[];return a.forEach(o=>{const n=t[o];Number(n)>0&&i.push(u[`spacing-${o}-${String(n)}`])}),i}const It=Ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:u}=t,{container:i,direction:o,item:n,spacing:g,wrap:S,zeroMinWidth:y,breakpoints:_}=u;let v=[];i&&(v=yt(g,_,a));const C=[];return _.forEach(x=>{const b=u[x];b&&C.push(a[`grid-${x}-${String(b)}`])}),[a.root,i&&a.container,n&&a.item,y&&a.zeroMinWidth,...v,o!=="row"&&a[`direction-xs-${String(o)}`],S!=="wrap"&&a[`wrap-xs-${String(S)}`],...C]}})(({ownerState:t})=>Y({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),ht,vt,St,gt);function _t(t,a){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const u=[];return a.forEach(i=>{const o=t[i];if(Number(o)>0){const n=`spacing-${i}-${String(o)}`;u.push(n)}}),u}const bt=t=>{const{classes:a,container:u,direction:i,item:o,spacing:n,wrap:g,zeroMinWidth:S,breakpoints:y}=t;let _=[];u&&(_=_t(n,y));const v=[];y.forEach(x=>{const b=t[x];b&&v.push(`grid-${x}-${String(b)}`)});const C={root:["root",u&&"container",o&&"item",S&&"zeroMinWidth",..._,i!=="row"&&`direction-xs-${String(i)}`,g!=="wrap"&&`wrap-xs-${String(g)}`,...v]};return Ke(C,lt,a)},xt=V.exports.forwardRef(function(a,u){const i=Ue({props:a,name:"MuiGrid"}),{breakpoints:o}=qe(),n=be(i),{className:g,columns:S,columnSpacing:y,component:_="div",container:v=!1,direction:C="row",item:x=!1,rowSpacing:b,spacing:h=0,wrap:m="wrap",zeroMinWidth:F=!1}=n,A=we(n,mt),w=b||h,T=y||h,O=V.exports.useContext(_e),P=v?S||12:O,D={},L=Y({},A);o.keys.forEach(K=>{A[K]!=null&&(D[K]=A[K],delete L[K])});const q=Y({},n,{columns:P,container:v,direction:C,item:x,rowSpacing:w,columnSpacing:T,wrap:m,zeroMinWidth:F,spacing:h},D,{breakpoints:o.keys}),E=bt(q);return p(_e.Provider,{value:P,children:p(It,Y({ownerState:q,className:xe(E.root,g),as:_,ref:u},L))})}),U=xt,Ct="/CodiShark/assets/logoKonecta.19fc6f76.webp";function wt(t,a){t===void 0&&(t=6e4),a===void 0&&(a=1e3);var u=G.useState(0),i=u[0],o=u[1],n=G.useRef({}),g=function x(b){n.current.started||(n.current.started=b,n.current.lastInterval=b);var h=Math.min(a,n.current.timeLeft||1/0);b-n.current.lastInterval>=h&&(n.current.lastInterval+=h,o(function(m){return n.current.timeLeft=m-h,n.current.timeLeft})),b-n.current.started<n.current.timeToCount?n.current.requestId=window.requestAnimationFrame(x):(n.current={},o(0))},S=G.useCallback(function(x){window.cancelAnimationFrame(n.current.requestId);var b=x!==void 0?x:t;n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=b,n.current.requestId=window.requestAnimationFrame(g),o(b)},[]),y=G.useCallback(function(){window.cancelAnimationFrame(n.current.requestId),n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=n.current.timeLeft},[]),_=G.useCallback(function(){!n.current.started&&n.current.timeLeft>0&&(window.cancelAnimationFrame(n.current.requestId),n.current.requestId=window.requestAnimationFrame(g))},[]),v=G.useCallback(function(){n.current.timeLeft&&(window.cancelAnimationFrame(n.current.requestId),n.current={},o(0))},[]),C=G.useMemo(function(){return{start:S,pause:y,resume:_,reset:v}},[]);return G.useEffect(function(){return function(){return window.cancelAnimationFrame(n.current.requestId)}},[]),[i,C]}var $e={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(V.exports),u=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function i(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,d=new WeakMap;return(i=function(s){return s?d:l})(r)}function o(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||T(r)!=="object"&&typeof r!="function")return{default:r};var d=i(l);if(d&&d.has(r))return d.get(r);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in r)if(I!=="default"&&Object.prototype.hasOwnProperty.call(r,I)){var N=s?Object.getOwnPropertyDescriptor(r,I):null;N&&(N.get||N.set)?Object.defineProperty(e,I,N):e[I]=r[I]}return e.default=r,d&&d.set(r,e),e}function n(){return n=Object.assign||function(r){for(var l=1;l<arguments.length;l++){var d=arguments[l];for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(r[e]=d[e])}return r},n.apply(this,arguments)}function g(r,l){if(r==null)return{};var d=S(r,l),e,s;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(s=0;s<I.length;s++)e=I[s],!(l.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,e)||(d[e]=r[e]))}return d}function S(r,l){if(r==null)return{};var d={},e=Object.keys(r),s,I;for(I=0;I<e.length;I++)s=e[I],!(l.indexOf(s)>=0)&&(d[s]=r[s]);return d}function y(r,l){if(!(r instanceof l))throw new TypeError("Cannot call a class as a function")}function _(r,l){for(var d=0;d<l.length;d++){var e=l[d];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function v(r,l,d){return l&&_(r.prototype,l),d&&_(r,d),r}function C(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(l&&l.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),l&&x(r,l)}function x(r,l){return x=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},x(r,l)}function b(r){var l=F();return function(){var e=A(r),s;if(l){var I=A(this).constructor;s=Reflect.construct(e,arguments,I)}else s=e.apply(this,arguments);return h(this,s)}}function h(r,l){return l&&(T(l)==="object"||typeof l=="function")?l:m(r)}function m(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(r){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)},A(r)}function w(r,l,d){return l in r?Object.defineProperty(r,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[l]=d,r}function T(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(d){return typeof d}:T=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},T(r)}var O=8,P=37,D=39,L=46,q=32,E=function(l){return T(l)==="object"},K=function(r){C(d,r);var l=b(d);function d(e){var s;return y(this,d),s=l.call(this,e),w(m(s),"getClasses",function(){for(var I=arguments.length,N=new Array(I),c=0;c<I;c++)N[c]=arguments[c];return N.filter(function(f){return!E(f)&&f!==!1}).join(" ")}),w(m(s),"getType",function(){var I=s.props,N=I.isInputSecure,c=I.isInputNum;return N?"password":c?"tel":"text"}),s.input=a.default.createRef(),s}return v(d,[{key:"componentDidMount",value:function(){var s=this.props,I=s.focus,N=s.shouldAutoFocus,c=this.input.current;c&&I&&N&&c.focus()}},{key:"componentDidUpdate",value:function(s){var I=this.props.focus,N=this.input.current;s.focus!==I&&N&&I&&(N.focus(),N.select())}},{key:"render",value:function(){var s=this.props,I=s.placeholder,N=s.separator,c=s.isLastChild,f=s.inputStyle,k=s.focus,W=s.isDisabled,H=s.hasErrored,M=s.errorStyle,B=s.focusStyle,z=s.disabledStyle;s.shouldAutoFocus;var j=s.isInputNum,ee=s.index,te=s.value,oe=s.className;s.isInputSecure;var se=g(s,u);return a.default.createElement("div",{className:oe,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",n({"aria-label":"".concat(ee===0?"Please enter verification code. ":"").concat(j?"Digit":"Character"," ").concat(ee+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},E(f)&&f,k&&E(B)&&B,W&&E(z)&&z,H&&E(M)&&M),placeholder:I,className:this.getClasses(f,k&&B,W&&z,H&&M),type:this.getType(),maxLength:"1",ref:this.input,disabled:W,value:te||""},se)),!c&&N)}}]),d}(a.PureComponent),ge=function(r){C(d,r);var l=b(d);function d(){var e;y(this,d);for(var s=arguments.length,I=new Array(s),N=0;N<s;N++)I[N]=arguments[N];return e=l.call.apply(l,[this].concat(I)),w(m(e),"state",{activeInput:0}),w(m(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),w(m(e),"getPlaceholderValue",function(){var c=e.props,f=c.placeholder,k=c.numInputs;if(typeof f=="string"){if(f.length===k)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),w(m(e),"handleOtpChange",function(c){var f=e.props.onChange,k=c.join("");f(k)}),w(m(e),"isInputValueValid",function(c){var f=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return f&&c.trim().length===1}),w(m(e),"focusInput",function(c){var f=e.props.numInputs,k=Math.max(Math.min(f-1,c),0);e.setState({activeInput:k})}),w(m(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),w(m(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),w(m(e),"changeCodeAtFocus",function(c){var f=e.state.activeInput,k=e.getOtpValue();k[f]=c[0],e.handleOtpChange(k)}),w(m(e),"handleOnPaste",function(c){c.preventDefault();var f=e.state.activeInput,k=e.props,W=k.numInputs,H=k.isDisabled;if(!H){for(var M=e.getOtpValue(),B=f,z=c.clipboardData.getData("text/plain").slice(0,W-f).split(""),j=0;j<W;++j)j>=f&&z.length>0&&(M[j]=z.shift(),B++);e.setState({activeInput:B},function(){e.focusInput(B),e.handleOtpChange(M)})}}),w(m(e),"handleOnChange",function(c){var f=c.target.value;e.isInputValueValid(f)&&e.changeCodeAtFocus(f)}),w(m(e),"handleOnKeyDown",function(c){c.keyCode===O||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===L||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===P||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===D||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===q||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),w(m(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var f=c.nativeEvent;f.data===null&&f.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),w(m(e),"renderInputs",function(){for(var c=e.state.activeInput,f=e.props,k=f.numInputs,W=f.inputStyle,H=f.focusStyle,M=f.separator,B=f.isDisabled,z=f.disabledStyle,j=f.hasErrored,ee=f.errorStyle,te=f.shouldAutoFocus,oe=f.isInputNum,se=f.isInputSecure,Ve=f.className,he=[],ve=e.getOtpValue(),Se=e.getPlaceholderValue(),ye=e.props["data-cy"],Ie=e.props["data-testid"],Be=function(R){he.push(a.default.createElement(K,{placeholder:Se&&Se[R],key:R,index:R,focus:c===R,value:ve&&ve[R],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(De){e.setState({activeInput:R}),De.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:M,inputStyle:W,focusStyle:H,isLastChild:R===k-1,isDisabled:B,disabledStyle:z,hasErrored:j,errorStyle:ee,shouldAutoFocus:te,isInputNum:oe,isInputSecure:se,className:Ve,"data-cy":ye&&"".concat(ye,"-").concat(R),"data-testid":Ie&&"".concat(Ie,"-").concat(R)}))},ce=0;ce<k;ce++)Be(ce);return he}),e}return v(d,[{key:"render",value:function(){var s=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},E(s)&&s),className:E(s)?"":s},this.renderInputs())}}]),d}(a.Component);w(ge,"defaultProps",{numInputs:4,onChange:function(l){return console.log(l)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Ee=ge;t.default=Ee})($e);const Nt=et($e),Ot=ie.div`
  .SignInCode {
    &__container {
      &--OTP {
        display: flex;
        justify-content: center;
      }

      &--button {
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
`,{ENTRY_PATH:kt}=pe.ROUTES,{INTERVAL:Pt,INITIAL_TIME:$t}=pe,Ae=t=>{const a=re().signIn.SignInFormCode,[u,i]=V.exports.useState(!1),[o,n]=V.exports.useState(""),g=Ne(),{setSignInStep:S,user:y,setUser:_}=J(),{signInMethod:v}=J(),{mutateAsync:C,reset:x}=Ce(),{mutateAsync:b,reset:h}=He(),[m,{start:F}]=wt($t,Pt),A=P=>n(P),w=async()=>{try{i(!0),C({dni:y==null?void 0:y.dni,type:v}),F(),x(),i(!1)}catch{i(!1)}},T=async()=>{try{i(!0),await b({password:o,dni:y==null?void 0:y.dni}).then(P=>{const{access_token:D,user:L}=P!=null?P:{};_(L),Ye.setCookie("token",D)}),h(),i(!1),S(0),g(kt)}catch{i(!1)}},O=()=>p("span",{className:"SignInCode__container--separator"});return V.exports.useEffect(()=>{F()},[F]),$(Ot,{className:"SignInCode",children:[p(Nt,{value:o,onChange:A,numInputs:nt,separator:O(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),p("div",{className:"SignInCode__container--time",children:$("p",{className:"SignInCode__text SignInCode__text--time",children:["(",tt(m/1e3),")"]})}),p("div",{className:"SignInCode__container--button",children:p(me,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:T,disabled:u,children:a.button})}),$("div",{className:"SignInCode__container--text",children:[$("p",{className:"SignInCode__text",children:[a.question,p("span",{onClick:w,className:"SignInCode__text--color SignInCode__text--clickable",children:a.answer})]}),p("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>S(1),children:a.method})]})]})};Ae.defaultProps={};const At=ie.div`
  .SignInForm {
    &__container {
      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }
    }
  }
`,de=t=>{const a=re().signIn.SignInFormUser,[u,i,o]=rt(),[n,g]=V.exports.useState(!1),{setSignInStep:S,setUser:y}=J(),{mutateAsync:_,reset:v}=Ze(),{control:C,handleSubmit:x}=ke();return p(At,{className:"SignInForm",children:$(ne,{component:"form",noValidate:!0,onSubmit:x(async h=>{try{g(!0);const m={dni:h==null?void 0:h.dni,cod_verifier:h==null?void 0:h.cod,emision_date:h==null?void 0:h.date_begin};await _(m).then(F=>y(F)),v(),g(!1),S(1)}catch{g(!1)}}),children:[$(U,{container:!0,spacing:2,children:[p(U,{item:!0,xs:8,md:8,children:p(ue,{name:u.name,control:C,rules:u.rules,defaultValue:"",render:({field:h,fieldState:m})=>p(le,{field:h,fields:m,config:{type:u.type,label:u.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:u==null?void 0:u.maxLength}})})}),p(U,{item:!0,xs:4,md:4,children:p(ue,{name:i.name,control:C,rules:i.rules,defaultValue:"",render:({field:h,fieldState:m})=>p(le,{field:h,fields:m,config:{type:i.type,label:i.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:i==null?void 0:i.maxLength}})})}),p(U,{item:!0,xs:12,md:12,children:p(ue,{name:o.name,control:C,rules:o.rules,defaultValue:"",render:({field:h,fieldState:m})=>p(le,{field:h,fields:m,config:{type:o.type,label:o.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),p(ne,{className:"SignInForm__container--button",children:p(me,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,children:a.button})})]})})};de.defaultProps={};const Ft=ie.div`
  .SignInValidate {
    &__container {
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
`,Fe=t=>{const a=re().signIn.SignInValidation,u=at(),[i,o]=V.exports.useState(!1),{setSignInStep:n,user:g,setSignInMethod:S}=J(),{register:y,handleSubmit:_}=ke(),{mutateAsync:v,reset:C}=Ce(),{first_name:x,last_name:b,phone:h,email:m}=g!=null?g:{},F=async O=>{try{o(!0),await v({dni:g==null?void 0:g.dni,type:O==null?void 0:O.verifyMethod}),C(),S(O==null?void 0:O.verifyMethod),o(!1),n(2)}catch{o(!1)}},A=O=>{const{id:P,value:D,label:L,name:q,labelExtension:E}=O;return p("div",{children:$("label",{htmlFor:P,children:[p("input",{className:"SignInValidate__container__input",type:"radio",value:D,id:P,...y(q,{required:!0})}),L,p("span",{className:"SignInValidate__text--color",children:E})]})})},w=()=>$("form",{onSubmit:_(F),children:[p("div",{className:"SignInValidate__container__form",children:u.map((O,P)=>p(A,{id:O.id,name:O.name,value:O.value,label:O.label,labelExtension:O.value==="SMS"?` *** *** ${h==null?void 0:h.slice((h==null?void 0:h.length)-3)}`:` ********${m==null?void 0:m.slice((m==null?void 0:m.length)-15)}`},P))}),p("div",{className:"SignInForm__container--button",children:p(me,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:i,children:a.button})})]});return p(Ft,{className:"SignInValidate",children:$("div",{className:"SignInValidate__container__global",children:[p("div",{className:"SignInValidate__container",children:(()=>$(Oe,{children:[$("p",{className:"SignInValidate__text--greeting",children:[a.greeting,p("span",{className:"SignInValidate__text--greeting__bold",children:` ${x!=null?x:""} ${b!=null?b:""}`})]}),p("p",{className:"SignInValidate__text--indication",children:a.instructions})]}))()}),w()]})})};Fe.defaultProps={};const Tt="/CodiShark/assets/loginImageUser.93122b01.webp",Et=ie.div`
  .SignIn {
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
        margin-left: 3.2rem;
        margin-right: 3.2rem;
      }
    }

    &__image {
      background-image: url(${Tt});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
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
`,{ENTRY_PATH:Vt}=pe.ROUTES,Te=t=>{const{isAnonymous:a,signInStep:u}=J(),i=re().signIn.SignInFormUser,o=Ne();V.exports.useEffect(()=>{if(!a){o(Vt);return}},[a,o]);const n=()=>{switch(u){case 0:return p(de,{});case 1:return p(Fe,{});case 2:return p(Ae,{});default:return p(de,{})}},g=()=>$(Oe,{children:[p("img",{src:Ct,alt:i.altLogo}),p("h1",{className:"SignIn__title",children:u!==2?i.title.toUpperCase():i.titleAlt.toUpperCase()}),p("p",{className:"SignIn__subtitle",children:u!==2?i.subtitle:i.subtitleAlt}),u===2&&p("p",{className:"SignIn__subtitle",children:i.subtitleAltTwo})]}),S=()=>p("p",{className:"SignIn__container--copyright",children:i.copyright});return p(Et,{className:"SignIn",children:$(U,{container:!0,component:"main",className:"SignIn__container",children:[p(U,{item:!0,xs:!1,sm:4,md:8,className:"SignIn__image"}),$(U,{item:!0,xs:12,sm:8,md:4,component:Xe,elevation:4,square:!0,container:!0,alignItems:"center",justifyContent:"center",children:[$(ne,{className:"SignIn__container--form",children:[p(ne,{className:"SignIn__container--center   SignIn__container--content",children:g()}),n()]}),S()]})]})})};Te.defaultProps={};const jt=Te;export{jt as default};
