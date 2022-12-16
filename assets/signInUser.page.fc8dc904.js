import{l as Te}from"./logoKonecta.2d72f0fc.js";import{r as D,b as De,g as Re,c as Be,_ as J,i as We,N as Me,k as ze,a as l,l as je,aG as ne,aH as de,m as Ge,q as U,a4 as Ue,s as re,u as be,E as Q,F as qe,j as A,C as pe,G as xe}from"./index.83119aac.js";import{u as ie}from"./i18n.hooks.6534aa8f.js";import{B as fe}from"./Button.ba91d73e.js";import{t as He,v as we,w as Ke,d as Ye,x as Ze,P as Je}from"./auth.service.hooks.bd0577ba.js";import{f as Qe}from"./common.utils.cf38e105.js";import{m as Xe,v as et,g as tt}from"./validations.utils.44a2d7fc.js";import{u as Ce,C as ce,T as le,I as Ie,i as nt}from"./index.esm.f579504e.js";import{B as rt}from"./Box.5cc151ff.js";const it=D.exports.createContext(),ye=it;function at(t){return De("MuiGrid",t)}const ot=[0,1,2,3,4,5,6,7,8,9,10],st=["column-reverse","column","row-reverse","row"],ct=["nowrap","wrap-reverse","wrap"],Z=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],X=Re("MuiGrid",["root","container","item","zeroMinWidth",...ot.map(t=>`spacing-xs-${t}`),...st.map(t=>`direction-xs-${t}`),...ct.map(t=>`wrap-xs-${t}`),...Z.map(t=>`grid-xs-${t}`),...Z.map(t=>`grid-sm-${t}`),...Z.map(t=>`grid-md-${t}`),...Z.map(t=>`grid-lg-${t}`),...Z.map(t=>`grid-xl-${t}`)]),lt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Y(t){const a=parseFloat(t);return`${a}${String(t).replace(String(a),"")||"px"}`}function ut({theme:t,ownerState:a}){let d;return t.breakpoints.keys.reduce((r,c)=>{let n={};if(a[c]&&(d=a[c]),!d)return r;if(d===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(d==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const m=ne({values:a.columns,breakpoints:t.breakpoints.values}),b=typeof m=="object"?m[c]:m;if(b==null)return r;const h=`${Math.round(d/b*1e8)/1e6}%`;let _={};if(a.container&&a.item&&a.columnSpacing!==0){const S=t.spacing(a.columnSpacing);if(S!=="0px"){const w=`calc(${h} + ${Y(S)})`;_={flexBasis:w,maxWidth:w}}}n=J({flexBasis:h,flexGrow:0,maxWidth:h},_)}return t.breakpoints.values[c]===0?Object.assign(r,n):r[t.breakpoints.up(c)]=n,r},{})}function dt({theme:t,ownerState:a}){const d=ne({values:a.direction,breakpoints:t.breakpoints.values});return de({theme:t},d,r=>{const c={flexDirection:r};return r.indexOf("column")===0&&(c[`& > .${X.item}`]={maxWidth:"none"}),c})}function Ne({breakpoints:t,values:a}){let d="";Object.keys(a).forEach(c=>{d===""&&a[c]!==0&&(d=c)});const r=Object.keys(t).sort((c,n)=>t[c]-t[n]);return r.slice(0,r.indexOf(d))}function pt({theme:t,ownerState:a}){const{container:d,rowSpacing:r}=a;let c={};if(d&&r!==0){const n=ne({values:r,breakpoints:t.breakpoints.values});let m;typeof n=="object"&&(m=Ne({breakpoints:t.breakpoints.values,values:n})),c=de({theme:t},n,(b,h)=>{var _;const S=t.spacing(b);return S!=="0px"?{marginTop:`-${Y(S)}`,[`& > .${X.item}`]:{paddingTop:Y(S)}}:(_=m)!=null&&_.includes(h)?{}:{marginTop:0,[`& > .${X.item}`]:{paddingTop:0}}})}return c}function ft({theme:t,ownerState:a}){const{container:d,columnSpacing:r}=a;let c={};if(d&&r!==0){const n=ne({values:r,breakpoints:t.breakpoints.values});let m;typeof n=="object"&&(m=Ne({breakpoints:t.breakpoints.values,values:n})),c=de({theme:t},n,(b,h)=>{var _;const S=t.spacing(b);return S!=="0px"?{width:`calc(100% + ${Y(S)})`,marginLeft:`-${Y(S)}`,[`& > .${X.item}`]:{paddingLeft:Y(S)}}:(_=m)!=null&&_.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${X.item}`]:{paddingLeft:0}}})}return c}function mt(t,a,d={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[d[`spacing-xs-${String(t)}`]];const r=[];return a.forEach(c=>{const n=t[c];Number(n)>0&&r.push(d[`spacing-${c}-${String(n)}`])}),r}const gt=Be("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:d}=t,{container:r,direction:c,item:n,spacing:m,wrap:b,zeroMinWidth:h,breakpoints:_}=d;let S=[];r&&(S=mt(m,_,a));const w=[];return _.forEach(x=>{const y=d[x];y&&w.push(a[`grid-${x}-${String(y)}`])}),[a.root,r&&a.container,n&&a.item,h&&a.zeroMinWidth,...S,c!=="row"&&a[`direction-xs-${String(c)}`],b!=="wrap"&&a[`wrap-xs-${String(b)}`],...w]}})(({ownerState:t})=>J({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),dt,pt,ft,ut);function ht(t,a){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const d=[];return a.forEach(r=>{const c=t[r];if(Number(c)>0){const n=`spacing-${r}-${String(c)}`;d.push(n)}}),d}const St=t=>{const{classes:a,container:d,direction:r,item:c,spacing:n,wrap:m,zeroMinWidth:b,breakpoints:h}=t;let _=[];d&&(_=ht(n,h));const S=[];h.forEach(x=>{const y=t[x];y&&S.push(`grid-${x}-${String(y)}`)});const w={root:["root",d&&"container",c&&"item",b&&"zeroMinWidth",..._,r!=="row"&&`direction-xs-${String(r)}`,m!=="wrap"&&`wrap-xs-${String(m)}`,...S]};return Ge(w,at,a)},vt=D.exports.forwardRef(function(a,d){const r=We({props:a,name:"MuiGrid"}),{breakpoints:c}=Me(),n=He(r),{className:m,columns:b,columnSpacing:h,component:_="div",container:S=!1,direction:w="row",item:x=!1,rowSpacing:y,spacing:k=0,wrap:v="wrap",zeroMinWidth:C=!1}=n,N=ze(n,lt),I=y||k,L=h||k,P=D.exports.useContext(ye),E=S?b||12:P,F={},V=J({},N);c.keys.forEach(H=>{N[H]!=null&&(F[H]=N[H],delete V[H])});const R=J({},n,{columns:E,container:S,direction:w,item:x,rowSpacing:I,columnSpacing:L,wrap:v,zeroMinWidth:C,spacing:k},F,{breakpoints:c.keys}),T=St(R);return l(ye.Provider,{value:E,children:l(gt,J({ownerState:R,className:je(T.root,m),as:_,ref:d},V))})}),q=vt;function _t(t,a){t===void 0&&(t=6e4),a===void 0&&(a=1e3);var d=U.useState(0),r=d[0],c=d[1],n=U.useRef({}),m=function x(y){n.current.started||(n.current.started=y,n.current.lastInterval=y);var k=Math.min(a,n.current.timeLeft||1/0);y-n.current.lastInterval>=k&&(n.current.lastInterval+=k,c(function(v){return n.current.timeLeft=v-k,n.current.timeLeft})),y-n.current.started<n.current.timeToCount?n.current.requestId=window.requestAnimationFrame(x):(n.current={},c(0))},b=U.useCallback(function(x){window.cancelAnimationFrame(n.current.requestId);var y=x!==void 0?x:t;n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=y,n.current.requestId=window.requestAnimationFrame(m),c(y)},[]),h=U.useCallback(function(){window.cancelAnimationFrame(n.current.requestId),n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=n.current.timeLeft},[]),_=U.useCallback(function(){!n.current.started&&n.current.timeLeft>0&&(window.cancelAnimationFrame(n.current.requestId),n.current.requestId=window.requestAnimationFrame(m))},[]),S=U.useCallback(function(){n.current.timeLeft&&(window.cancelAnimationFrame(n.current.requestId),n.current={},c(0))},[]),w=U.useMemo(function(){return{start:b,pause:h,resume:_,reset:S}},[]);return U.useEffect(function(){return function(){return window.cancelAnimationFrame(n.current.requestId)}},[]),[r,w]}var Oe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(D.exports),d=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(i){if(typeof WeakMap!="function")return null;var u=new WeakMap,p=new WeakMap;return(r=function(o){return o?p:u})(i)}function c(i,u){if(!u&&i&&i.__esModule)return i;if(i===null||L(i)!=="object"&&typeof i!="function")return{default:i};var p=r(u);if(p&&p.has(i))return p.get(i);var e={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in i)if(g!=="default"&&Object.prototype.hasOwnProperty.call(i,g)){var O=o?Object.getOwnPropertyDescriptor(i,g):null;O&&(O.get||O.set)?Object.defineProperty(e,g,O):e[g]=i[g]}return e.default=i,p&&p.set(i,e),e}function n(){return n=Object.assign||function(i){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(i[e]=p[e])}return i},n.apply(this,arguments)}function m(i,u){if(i==null)return{};var p=b(i,u),e,o;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(i);for(o=0;o<g.length;o++)e=g[o],!(u.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,e)||(p[e]=i[e]))}return p}function b(i,u){if(i==null)return{};var p={},e=Object.keys(i),o,g;for(g=0;g<e.length;g++)o=e[g],!(u.indexOf(o)>=0)&&(p[o]=i[o]);return p}function h(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function _(i,u){for(var p=0;p<u.length;p++){var e=u[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function S(i,u,p){return u&&_(i.prototype,u),p&&_(i,p),i}function w(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&x(i,u)}function x(i,u){return x=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},x(i,u)}function y(i){var u=C();return function(){var e=N(i),o;if(u){var g=N(this).constructor;o=Reflect.construct(e,arguments,g)}else o=e.apply(this,arguments);return k(this,o)}}function k(i,u){return u&&(L(u)==="object"||typeof u=="function")?u:v(i)}function v(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(i){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},N(i)}function I(i,u,p){return u in i?Object.defineProperty(i,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):i[u]=p,i}function L(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(p){return typeof p}:L=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},L(i)}var P=8,E=37,F=39,V=46,R=32,T=function(u){return L(u)==="object"},H=function(i){w(p,i);var u=y(p);function p(e){var o;return h(this,p),o=u.call(this,e),I(v(o),"getClasses",function(){for(var g=arguments.length,O=new Array(g),s=0;s<g;s++)O[s]=arguments[s];return O.filter(function(f){return!T(f)&&f!==!1}).join(" ")}),I(v(o),"getType",function(){var g=o.props,O=g.isInputSecure,s=g.isInputNum;return O?"password":s?"tel":"text"}),o.input=a.default.createRef(),o}return S(p,[{key:"componentDidMount",value:function(){var o=this.props,g=o.focus,O=o.shouldAutoFocus,s=this.input.current;s&&g&&O&&s.focus()}},{key:"componentDidUpdate",value:function(o){var g=this.props.focus,O=this.input.current;o.focus!==g&&O&&g&&(O.focus(),O.select())}},{key:"render",value:function(){var o=this.props,g=o.placeholder,O=o.separator,s=o.isLastChild,f=o.inputStyle,$=o.focus,M=o.isDisabled,K=o.hasErrored,z=o.errorStyle,B=o.focusStyle,j=o.disabledStyle;o.shouldAutoFocus;var G=o.isInputNum,ee=o.index,te=o.value,ae=o.className;o.isInputSecure;var oe=m(o,d);return a.default.createElement("div",{className:ae,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",n({"aria-label":"".concat(ee===0?"Please enter verification code. ":"").concat(G?"Digit":"Character"," ").concat(ee+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},T(f)&&f,$&&T(B)&&B,M&&T(j)&&j,K&&T(z)&&z),placeholder:g,className:this.getClasses(f,$&&B,M&&j,K&&z),type:this.getType(),maxLength:"1",ref:this.input,disabled:M,value:te||""},oe)),!s&&O)}}]),p}(a.PureComponent),me=function(i){w(p,i);var u=y(p);function p(){var e;h(this,p);for(var o=arguments.length,g=new Array(o),O=0;O<o;O++)g[O]=arguments[O];return e=u.call.apply(u,[this].concat(g)),I(v(e),"state",{activeInput:0}),I(v(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),I(v(e),"getPlaceholderValue",function(){var s=e.props,f=s.placeholder,$=s.numInputs;if(typeof f=="string"){if(f.length===$)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),I(v(e),"handleOtpChange",function(s){var f=e.props.onChange,$=s.join("");f($)}),I(v(e),"isInputValueValid",function(s){var f=e.props.isInputNum?!isNaN(parseInt(s,10)):typeof s=="string";return f&&s.trim().length===1}),I(v(e),"focusInput",function(s){var f=e.props.numInputs,$=Math.max(Math.min(f-1,s),0);e.setState({activeInput:$})}),I(v(e),"focusNextInput",function(){var s=e.state.activeInput;e.focusInput(s+1)}),I(v(e),"focusPrevInput",function(){var s=e.state.activeInput;e.focusInput(s-1)}),I(v(e),"changeCodeAtFocus",function(s){var f=e.state.activeInput,$=e.getOtpValue();$[f]=s[0],e.handleOtpChange($)}),I(v(e),"handleOnPaste",function(s){s.preventDefault();var f=e.state.activeInput,$=e.props,M=$.numInputs,K=$.isDisabled;if(!K){for(var z=e.getOtpValue(),B=f,j=s.clipboardData.getData("text/plain").slice(0,M-f).split(""),G=0;G<M;++G)G>=f&&j.length>0&&(z[G]=j.shift(),B++);e.setState({activeInput:B},function(){e.focusInput(B),e.handleOtpChange(z)})}}),I(v(e),"handleOnChange",function(s){var f=s.target.value;e.isInputValueValid(f)&&e.changeCodeAtFocus(f)}),I(v(e),"handleOnKeyDown",function(s){s.keyCode===P||s.key==="Backspace"?(s.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):s.keyCode===V||s.key==="Delete"?(s.preventDefault(),e.changeCodeAtFocus("")):s.keyCode===E||s.key==="ArrowLeft"?(s.preventDefault(),e.focusPrevInput()):s.keyCode===F||s.key==="ArrowRight"?(s.preventDefault(),e.focusNextInput()):(s.keyCode===R||s.key===" "||s.key==="Spacebar"||s.key==="Space")&&s.preventDefault()}),I(v(e),"handleOnInput",function(s){if(e.isInputValueValid(s.target.value))e.focusNextInput();else if(!e.props.isInputNum){var f=s.nativeEvent;f.data===null&&f.inputType==="deleteContentBackward"&&(s.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),I(v(e),"renderInputs",function(){for(var s=e.state.activeInput,f=e.props,$=f.numInputs,M=f.inputStyle,K=f.focusStyle,z=f.separator,B=f.isDisabled,j=f.disabledStyle,G=f.hasErrored,ee=f.errorStyle,te=f.shouldAutoFocus,ae=f.isInputNum,oe=f.isInputSecure,Fe=f.className,ge=[],he=e.getOtpValue(),Se=e.getPlaceholderValue(),ve=e.props["data-cy"],_e=e.props["data-testid"],Le=function(W){ge.push(a.default.createElement(H,{placeholder:Se&&Se[W],key:W,index:W,focus:s===W,value:he&&he[W],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Ve){e.setState({activeInput:W}),Ve.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:z,inputStyle:M,focusStyle:K,isLastChild:W===$-1,isDisabled:B,disabledStyle:j,hasErrored:G,errorStyle:ee,shouldAutoFocus:te,isInputNum:ae,isInputSecure:oe,className:Fe,"data-cy":ve&&"".concat(ve,"-").concat(W),"data-testid":_e&&"".concat(_e,"-").concat(W)}))},se=0;se<$;se++)Le(se);return ge}),e}return S(p,[{key:"render",value:function(){var o=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},T(o)&&o),className:T(o)?"":o},this.renderInputs())}}]),p}(a.Component);I(me,"defaultProps",{numInputs:4,onChange:function(u){return console.log(u)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var $e=me;t.default=$e})(Oe);const It=Ue(Oe),yt=re.div`
  .SignInCode {
    &__container {
      &--OTP {
        display: flex;
        justify-content: center;
      }

      &--button {
        margin-top: 1.2rem;
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
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`,{ENTRY_PATH:bt}=pe.ROUTES,{INTERVAL:xt,INITIAL_TIME:wt}=pe,ke=t=>{const a=ie().signIn.SignInFormCode,[d,r]=D.exports.useState(!1),[c,n]=D.exports.useState(""),m=be(),{setSignInStep:b,user:h,setUser:_}=Q(),{signInMethod:S}=Q(),[,w]=qe("user"),{mutateAsync:x,reset:y}=we(),{mutateAsync:k,reset:v}=Ke(),[C,{start:N}]=_t(wt,xt),I=F=>n(F),L=async()=>{try{r(!0),x({dni:h==null?void 0:h.dni,type:S}),N(),y(),r(!1)}catch{r(!1)}},P=async()=>{try{r(!0),await k({password:c,dni:h==null?void 0:h.dni}).then(F=>{const{access_token:V,user:R}=F!=null?F:{};_(R),w(R),Ye.setCookie("token",V)}),v(),r(!1),b(0),m(bt)}catch{r(!1)}},E=()=>l("span",{className:"SignInCode__container--separator"});return D.exports.useEffect(()=>{N()},[N]),A(yt,{className:"SignInCode",children:[l(It,{value:c,onChange:I,numInputs:Xe,separator:E(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),l("div",{className:"SignInCode__container--time",children:A("p",{className:"SignInCode__text SignInCode__text--time",children:["(",Qe(C/1e3),")"]})}),l("div",{className:"SignInCode__container--button",children:l(fe,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:P,disabled:d,className:"SignInCode__component--button",children:a.button})}),A("div",{className:"SignInCode__container--text",children:[A("p",{className:"SignInCode__text",children:[`${a.question} `,l("span",{onClick:L,className:"SignInCode__text--color SignInCode__text--clickable",children:a.answer})]}),l("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>b(1),children:a.method})]})]})};ke.defaultProps={};const Ct="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Nt=re.div`
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
`,ue=t=>{const a=ie().signIn.SignInFormUser,[d,r,c]=et(),[n,m]=D.exports.useState(!1),{setSignInStep:b,setUser:h}=Q(),{mutateAsync:_,reset:S}=Ze(),[w,x]=D.exports.useState(""),{control:y,handleSubmit:k}=Ce();return l(Nt,{className:"SignInForm",children:A(rt,{component:"form",noValidate:!0,onSubmit:k(async C=>{var N;try{m(!0),x("");const I={dni:C==null?void 0:C.dni,cod_verifier:C==null?void 0:C.cod,emision_date:C==null?void 0:C.date_begin};await _(I).then(L=>h(L)),S(),m(!1),b(1)}catch(I){(N=I==null?void 0:I.toString())!=null&&N.includes("422")?x("No se encontr\xF3 el usuario en el registro."):x("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),m(!1)}}),children:[A(q,{container:!0,spacing:2,children:[l(q,{item:!0,xs:8,md:8,children:l(ce,{name:d.name,control:y,rules:d.rules,defaultValue:"",render:({field:C,fieldState:N})=>l(le,{field:C,fields:N,config:{type:d.type,label:d.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:d==null?void 0:d.maxLength,InputProps:{endAdornment:l(Ie,{position:"end",children:l("img",{className:"SignInForm__icon",src:nt,alt:"iconPerson"})})}}})})}),l(q,{item:!0,xs:4,md:4,children:l(ce,{name:r.name,control:y,rules:r.rules,defaultValue:"",render:({field:C,fieldState:N})=>l(le,{field:C,fields:N,config:{type:r.type,label:r.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:r==null?void 0:r.maxLength,InputProps:{endAdornment:l(Ie,{position:"end",children:l("img",{className:"SignInForm__icon",src:Ct,alt:"iconAlert"})})}}})})}),l(q,{item:!0,xs:12,md:12,children:l(ce,{name:c.name,control:y,rules:c.rules,defaultValue:"",render:({field:C,fieldState:N})=>l(le,{field:C,fields:N,config:{type:c.type,label:c.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),l("div",{className:"SignInForm__container--button",children:l(fe,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInForm__component--button",children:a.button})}),(w==null?void 0:w.length)>0?l("h3",{className:"SignInForm__error",children:w}):null]})})};ue.defaultProps={};const Ot=re.div`
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

    &__component {
      &--button {
        padding: 0.8rem 0;
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
`,Pe=t=>{const a=ie().signIn.SignInValidation,d=tt(),[r,c]=D.exports.useState(!1),{setSignInStep:n,user:m,setSignInMethod:b}=Q(),{register:h,handleSubmit:_}=Ce(),{mutateAsync:S,reset:w}=we(),{first_name:x,last_name:y,phone:k,email:v}=m!=null?m:{},C=async P=>{try{c(!0),await S({dni:m==null?void 0:m.dni,type:P==null?void 0:P.verifyMethod}),w(),b(P==null?void 0:P.verifyMethod),c(!1),n(2)}catch{c(!1)}},N=P=>{const{id:E,value:F,label:V,name:R,labelExtension:T}=P;return l("div",{children:A("label",{htmlFor:E,children:[l("input",{className:"SignInValidate__container__input",type:"radio",value:F,id:E,...h(R,{required:!0})}),V,l("span",{className:"SignInValidate__text--color",children:T})]})})},I=()=>A("form",{onSubmit:_(C),children:[l("div",{className:"SignInValidate__container__form",children:d.map((P,E)=>{var F,V;return l(N,{id:P.id,name:P.name,value:P.value,label:P.label,labelExtension:P.value==="SMS"?` *** *** ${(F=k==null?void 0:k.slice((k==null?void 0:k.length)-3))!=null?F:""}`:` ********${(V=v==null?void 0:v.slice((v==null?void 0:v.length)-15))!=null?V:""}`},E)})}),l("div",{className:"SignInValidate__container--button",children:l(fe,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:r,className:"SignInValidate__component--button",children:a.button})})]});return l(Ot,{className:"SignInValidate",children:A("div",{className:"SignInValidate__container__global",children:[l("div",{className:"SignInValidate__container",children:(()=>A(xe,{children:[A("p",{className:"SignInValidate__text--greeting",children:[a.greeting,l("span",{className:"SignInValidate__text--greeting__bold",children:` ${x!=null?x:""} ${y!=null?y:""}`})]}),l("p",{className:"SignInValidate__text--indication",children:a.instructions})]}))()}),I()]})})};Pe.defaultProps={};const kt="/CodiShark/assets/loginImageUser.fd914332.jpg",Pt="/CodiShark/assets/loginImageUser.93122b01.webp",At=re.div`
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
        width: 36rem;
      }

      &--separate {
        margin-top: 1.6rem;
      }
    }

    &__image {
      background-image: url(${kt});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      background-image: -webkit-image-set(url(${Pt}));
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
`,{ENTRY_PATH:$t}=pe.ROUTES,Ae=t=>{const{isAnonymous:a,signInStep:d}=Q(),r=ie().signIn.SignInFormUser,c=be();D.exports.useEffect(()=>{if(!a){c($t);return}},[a,c]);const n=()=>{switch(d){case 0:return l(ue,{});case 1:return l(Pe,{});case 2:return l(ke,{});default:return l(ue,{})}},m=()=>{const _=()=>d===2?"SignIn__container--separate":"";return A(xe,{children:[l("img",{src:Te,alt:r.altLogo,width:188}),l("h1",{className:"SignIn__title",children:d!==2?r.title.toUpperCase():r.titleAlt.toUpperCase()}),A("div",{className:_(),children:[l("p",{className:"SignIn__subtitle",children:d!==2?r.subtitle:r.subtitleAlt}),d===2&&l("p",{className:"SignIn__subtitle SignIn__subtitle-sepa",children:r.subtitleAltTwo})]})]})},b=()=>l("p",{className:"SignIn__container--copyright",children:r.copyright});return l(At,{className:"SignIn",children:A(q,{container:!0,component:"main",className:"SignIn__container",children:[l(q,{item:!0,xs:!1,sm:4,md:6,className:"SignIn__image",children:(()=>A("div",{className:"SignIn__renderList",children:[l("h2",{className:"SignIn__renderList--h2",children:r.benefitTitle}),l("h1",{className:"SignIn__renderList--h1",children:r.benefitSubTitle}),A("ul",{className:"SignIn__renderList--ul",children:[l("li",{className:"SignIn__renderList--h2",children:r.ul1}),l("li",{className:"SignIn__renderList--h2",children:r.ul2}),l("li",{className:"SignIn__renderList--h2",children:r.ul3}),l("li",{className:"SignIn__renderList--h2",children:r.ul4})]})]}))()}),A(q,{item:!0,xs:12,sm:8,md:6,component:Je,elevation:4,square:!0,container:!0,alignItems:"center",justifyContent:"center",flexDirection:"column",children:[A("div",{className:"SignIn__container--form",children:[l("div",{className:"SignIn__container--center SignIn__container--content",children:m()}),n()]}),b()]})]})})};Ae.defaultProps={};const zt=Ae;export{zt as default};
