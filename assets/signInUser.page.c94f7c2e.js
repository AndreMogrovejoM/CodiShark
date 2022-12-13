import{u as be,C as ce,T as le,I as Ie,i as De,l as We}from"./index.esm.b9bf60ea.js";import{az as Me,aA as ze,r as L,aB as je,k as xe,a as l,_ as Y,l as we,aC as Ge,ai as Ue,b as qe,g as He,c as Ke,i as Ye,N as Ze,aD as ne,aE as de,m as Je,q as U,a4 as Qe,s as re,u as Ce,E as Q,G as Xe,j as A,C as pe,F as Ne}from"./index.62a3d31d.js";import{u as ie}from"./i18n.hooks.10c02bd4.js";import{B as fe}from"./Button.c7181f96.js";import{v as Oe,w as ke,x as et,n as tt,y as nt,P as rt}from"./auth.service.hooks.bb8d53fb.js";import{f as it}from"./common.utils.834bf330.js";import{m as at,v as ot,d as st}from"./validations.utils.a31d4e1e.js";const ct=["className","component"];function lt(t={}){const{defaultTheme:a,defaultClassName:u="MuiBox-root",generateClassName:r,styleFunctionSx:o=ze}=t,n=Me("div",{shouldForwardProp:S=>S!=="theme"&&S!=="sx"&&S!=="as"})(o);return L.exports.forwardRef(function(g,_){const h=je(a),w=Oe(g),{className:x,component:y="div"}=w,O=xe(w,ct);return l(n,Y({as:y,ref:_,className:we(x,r?r(u):u),theme:h},O))})}const ut=Ge(),dt=lt({defaultTheme:ut,defaultClassName:"MuiBox-root",generateClassName:Ue.generate}),pt=dt,ft=L.exports.createContext(),ye=ft;function mt(t){return qe("MuiGrid",t)}const gt=[0,1,2,3,4,5,6,7,8,9,10],ht=["column-reverse","column","row-reverse","row"],St=["nowrap","wrap-reverse","wrap"],J=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],X=He("MuiGrid",["root","container","item","zeroMinWidth",...gt.map(t=>`spacing-xs-${t}`),...ht.map(t=>`direction-xs-${t}`),...St.map(t=>`wrap-xs-${t}`),...J.map(t=>`grid-xs-${t}`),...J.map(t=>`grid-sm-${t}`),...J.map(t=>`grid-md-${t}`),...J.map(t=>`grid-lg-${t}`),...J.map(t=>`grid-xl-${t}`)]),vt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(t){const a=parseFloat(t);return`${a}${String(t).replace(String(a),"")||"px"}`}function _t({theme:t,ownerState:a}){let u;return t.breakpoints.keys.reduce((r,o)=>{let n={};if(a[o]&&(u=a[o]),!u)return r;if(u===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(u==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const m=ne({values:a.columns,breakpoints:t.breakpoints.values}),S=typeof m=="object"?m[o]:m;if(S==null)return r;const g=`${Math.round(u/S*1e8)/1e6}%`;let _={};if(a.container&&a.item&&a.columnSpacing!==0){const h=t.spacing(a.columnSpacing);if(h!=="0px"){const w=`calc(${g} + ${Z(h)})`;_={flexBasis:w,maxWidth:w}}}n=Y({flexBasis:g,flexGrow:0,maxWidth:g},_)}return t.breakpoints.values[o]===0?Object.assign(r,n):r[t.breakpoints.up(o)]=n,r},{})}function It({theme:t,ownerState:a}){const u=ne({values:a.direction,breakpoints:t.breakpoints.values});return de({theme:t},u,r=>{const o={flexDirection:r};return r.indexOf("column")===0&&(o[`& > .${X.item}`]={maxWidth:"none"}),o})}function Pe({breakpoints:t,values:a}){let u="";Object.keys(a).forEach(o=>{u===""&&a[o]!==0&&(u=o)});const r=Object.keys(t).sort((o,n)=>t[o]-t[n]);return r.slice(0,r.indexOf(u))}function yt({theme:t,ownerState:a}){const{container:u,rowSpacing:r}=a;let o={};if(u&&r!==0){const n=ne({values:r,breakpoints:t.breakpoints.values});let m;typeof n=="object"&&(m=Pe({breakpoints:t.breakpoints.values,values:n})),o=de({theme:t},n,(S,g)=>{var _;const h=t.spacing(S);return h!=="0px"?{marginTop:`-${Z(h)}`,[`& > .${X.item}`]:{paddingTop:Z(h)}}:(_=m)!=null&&_.includes(g)?{}:{marginTop:0,[`& > .${X.item}`]:{paddingTop:0}}})}return o}function bt({theme:t,ownerState:a}){const{container:u,columnSpacing:r}=a;let o={};if(u&&r!==0){const n=ne({values:r,breakpoints:t.breakpoints.values});let m;typeof n=="object"&&(m=Pe({breakpoints:t.breakpoints.values,values:n})),o=de({theme:t},n,(S,g)=>{var _;const h=t.spacing(S);return h!=="0px"?{width:`calc(100% + ${Z(h)})`,marginLeft:`-${Z(h)}`,[`& > .${X.item}`]:{paddingLeft:Z(h)}}:(_=m)!=null&&_.includes(g)?{}:{width:"100%",marginLeft:0,[`& > .${X.item}`]:{paddingLeft:0}}})}return o}function xt(t,a,u={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[u[`spacing-xs-${String(t)}`]];const r=[];return a.forEach(o=>{const n=t[o];Number(n)>0&&r.push(u[`spacing-${o}-${String(n)}`])}),r}const wt=Ke("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:u}=t,{container:r,direction:o,item:n,spacing:m,wrap:S,zeroMinWidth:g,breakpoints:_}=u;let h=[];r&&(h=xt(m,_,a));const w=[];return _.forEach(x=>{const y=u[x];y&&w.push(a[`grid-${x}-${String(y)}`])}),[a.root,r&&a.container,n&&a.item,g&&a.zeroMinWidth,...h,o!=="row"&&a[`direction-xs-${String(o)}`],S!=="wrap"&&a[`wrap-xs-${String(S)}`],...w]}})(({ownerState:t})=>Y({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),It,yt,bt,_t);function Ct(t,a){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const u=[];return a.forEach(r=>{const o=t[r];if(Number(o)>0){const n=`spacing-${r}-${String(o)}`;u.push(n)}}),u}const Nt=t=>{const{classes:a,container:u,direction:r,item:o,spacing:n,wrap:m,zeroMinWidth:S,breakpoints:g}=t;let _=[];u&&(_=Ct(n,g));const h=[];g.forEach(x=>{const y=t[x];y&&h.push(`grid-${x}-${String(y)}`)});const w={root:["root",u&&"container",o&&"item",S&&"zeroMinWidth",..._,r!=="row"&&`direction-xs-${String(r)}`,m!=="wrap"&&`wrap-xs-${String(m)}`,...h]};return Je(w,mt,a)},Ot=L.exports.forwardRef(function(a,u){const r=Ye({props:a,name:"MuiGrid"}),{breakpoints:o}=Ze(),n=Oe(r),{className:m,columns:S,columnSpacing:g,component:_="div",container:h=!1,direction:w="row",item:x=!1,rowSpacing:y,spacing:O=0,wrap:I="wrap",zeroMinWidth:C=!1}=n,N=xe(n,vt),b=y||O,E=g||O,P=L.exports.useContext(ye),T=h?S||12:P,F={},V=Y({},N);o.keys.forEach(H=>{N[H]!=null&&(F[H]=N[H],delete V[H])});const R=Y({},n,{columns:T,container:h,direction:w,item:x,rowSpacing:b,columnSpacing:E,wrap:I,zeroMinWidth:C,spacing:O},F,{breakpoints:o.keys}),B=Nt(R);return l(ye.Provider,{value:T,children:l(wt,Y({ownerState:R,className:we(B.root,m),as:_,ref:u},V))})}),q=Ot;function kt(t,a){t===void 0&&(t=6e4),a===void 0&&(a=1e3);var u=U.useState(0),r=u[0],o=u[1],n=U.useRef({}),m=function x(y){n.current.started||(n.current.started=y,n.current.lastInterval=y);var O=Math.min(a,n.current.timeLeft||1/0);y-n.current.lastInterval>=O&&(n.current.lastInterval+=O,o(function(I){return n.current.timeLeft=I-O,n.current.timeLeft})),y-n.current.started<n.current.timeToCount?n.current.requestId=window.requestAnimationFrame(x):(n.current={},o(0))},S=U.useCallback(function(x){window.cancelAnimationFrame(n.current.requestId);var y=x!==void 0?x:t;n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=y,n.current.requestId=window.requestAnimationFrame(m),o(y)},[]),g=U.useCallback(function(){window.cancelAnimationFrame(n.current.requestId),n.current.started=null,n.current.lastInterval=null,n.current.timeToCount=n.current.timeLeft},[]),_=U.useCallback(function(){!n.current.started&&n.current.timeLeft>0&&(window.cancelAnimationFrame(n.current.requestId),n.current.requestId=window.requestAnimationFrame(m))},[]),h=U.useCallback(function(){n.current.timeLeft&&(window.cancelAnimationFrame(n.current.requestId),n.current={},o(0))},[]),w=U.useMemo(function(){return{start:S,pause:g,resume:_,reset:h}},[]);return U.useEffect(function(){return function(){return window.cancelAnimationFrame(n.current.requestId)}},[]),[r,w]}var Ae={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(L.exports),u=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(i){if(typeof WeakMap!="function")return null;var d=new WeakMap,p=new WeakMap;return(r=function(s){return s?p:d})(i)}function o(i,d){if(!d&&i&&i.__esModule)return i;if(i===null||E(i)!=="object"&&typeof i!="function")return{default:i};var p=r(d);if(p&&p.has(i))return p.get(i);var e={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in i)if(v!=="default"&&Object.prototype.hasOwnProperty.call(i,v)){var k=s?Object.getOwnPropertyDescriptor(i,v):null;k&&(k.get||k.set)?Object.defineProperty(e,v,k):e[v]=i[v]}return e.default=i,p&&p.set(i,e),e}function n(){return n=Object.assign||function(i){for(var d=1;d<arguments.length;d++){var p=arguments[d];for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&(i[e]=p[e])}return i},n.apply(this,arguments)}function m(i,d){if(i==null)return{};var p=S(i,d),e,s;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(s=0;s<v.length;s++)e=v[s],!(d.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,e)||(p[e]=i[e]))}return p}function S(i,d){if(i==null)return{};var p={},e=Object.keys(i),s,v;for(v=0;v<e.length;v++)s=e[v],!(d.indexOf(s)>=0)&&(p[s]=i[s]);return p}function g(i,d){if(!(i instanceof d))throw new TypeError("Cannot call a class as a function")}function _(i,d){for(var p=0;p<d.length;p++){var e=d[p];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function h(i,d,p){return d&&_(i.prototype,d),p&&_(i,p),i}function w(i,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(d&&d.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),d&&x(i,d)}function x(i,d){return x=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},x(i,d)}function y(i){var d=C();return function(){var e=N(i),s;if(d){var v=N(this).constructor;s=Reflect.construct(e,arguments,v)}else s=e.apply(this,arguments);return O(this,s)}}function O(i,d){return d&&(E(d)==="object"||typeof d=="function")?d:I(i)}function I(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(i){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)},N(i)}function b(i,d,p){return d in i?Object.defineProperty(i,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):i[d]=p,i}function E(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?E=function(p){return typeof p}:E=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},E(i)}var P=8,T=37,F=39,V=46,R=32,B=function(d){return E(d)==="object"},H=function(i){w(p,i);var d=y(p);function p(e){var s;return g(this,p),s=d.call(this,e),b(I(s),"getClasses",function(){for(var v=arguments.length,k=new Array(v),c=0;c<v;c++)k[c]=arguments[c];return k.filter(function(f){return!B(f)&&f!==!1}).join(" ")}),b(I(s),"getType",function(){var v=s.props,k=v.isInputSecure,c=v.isInputNum;return k?"password":c?"tel":"text"}),s.input=a.default.createRef(),s}return h(p,[{key:"componentDidMount",value:function(){var s=this.props,v=s.focus,k=s.shouldAutoFocus,c=this.input.current;c&&v&&k&&c.focus()}},{key:"componentDidUpdate",value:function(s){var v=this.props.focus,k=this.input.current;s.focus!==v&&k&&v&&(k.focus(),k.select())}},{key:"render",value:function(){var s=this.props,v=s.placeholder,k=s.separator,c=s.isLastChild,f=s.inputStyle,$=s.focus,M=s.isDisabled,K=s.hasErrored,z=s.errorStyle,D=s.focusStyle,j=s.disabledStyle;s.shouldAutoFocus;var G=s.isInputNum,ee=s.index,te=s.value,ae=s.className;s.isInputSecure;var oe=m(s,u);return a.default.createElement("div",{className:ae,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",n({"aria-label":"".concat(ee===0?"Please enter verification code. ":"").concat(G?"Digit":"Character"," ").concat(ee+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},B(f)&&f,$&&B(D)&&D,M&&B(j)&&j,K&&B(z)&&z),placeholder:v,className:this.getClasses(f,$&&D,M&&j,K&&z),type:this.getType(),maxLength:"1",ref:this.input,disabled:M,value:te||""},oe)),!c&&k)}}]),p}(a.PureComponent),me=function(i){w(p,i);var d=y(p);function p(){var e;g(this,p);for(var s=arguments.length,v=new Array(s),k=0;k<s;k++)v[k]=arguments[k];return e=d.call.apply(d,[this].concat(v)),b(I(e),"state",{activeInput:0}),b(I(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),b(I(e),"getPlaceholderValue",function(){var c=e.props,f=c.placeholder,$=c.numInputs;if(typeof f=="string"){if(f.length===$)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),b(I(e),"handleOtpChange",function(c){var f=e.props.onChange,$=c.join("");f($)}),b(I(e),"isInputValueValid",function(c){var f=e.props.isInputNum?!isNaN(parseInt(c,10)):typeof c=="string";return f&&c.trim().length===1}),b(I(e),"focusInput",function(c){var f=e.props.numInputs,$=Math.max(Math.min(f-1,c),0);e.setState({activeInput:$})}),b(I(e),"focusNextInput",function(){var c=e.state.activeInput;e.focusInput(c+1)}),b(I(e),"focusPrevInput",function(){var c=e.state.activeInput;e.focusInput(c-1)}),b(I(e),"changeCodeAtFocus",function(c){var f=e.state.activeInput,$=e.getOtpValue();$[f]=c[0],e.handleOtpChange($)}),b(I(e),"handleOnPaste",function(c){c.preventDefault();var f=e.state.activeInput,$=e.props,M=$.numInputs,K=$.isDisabled;if(!K){for(var z=e.getOtpValue(),D=f,j=c.clipboardData.getData("text/plain").slice(0,M-f).split(""),G=0;G<M;++G)G>=f&&j.length>0&&(z[G]=j.shift(),D++);e.setState({activeInput:D},function(){e.focusInput(D),e.handleOtpChange(z)})}}),b(I(e),"handleOnChange",function(c){var f=c.target.value;e.isInputValueValid(f)&&e.changeCodeAtFocus(f)}),b(I(e),"handleOnKeyDown",function(c){c.keyCode===P||c.key==="Backspace"?(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):c.keyCode===V||c.key==="Delete"?(c.preventDefault(),e.changeCodeAtFocus("")):c.keyCode===T||c.key==="ArrowLeft"?(c.preventDefault(),e.focusPrevInput()):c.keyCode===F||c.key==="ArrowRight"?(c.preventDefault(),e.focusNextInput()):(c.keyCode===R||c.key===" "||c.key==="Spacebar"||c.key==="Space")&&c.preventDefault()}),b(I(e),"handleOnInput",function(c){if(e.isInputValueValid(c.target.value))e.focusNextInput();else if(!e.props.isInputNum){var f=c.nativeEvent;f.data===null&&f.inputType==="deleteContentBackward"&&(c.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),b(I(e),"renderInputs",function(){for(var c=e.state.activeInput,f=e.props,$=f.numInputs,M=f.inputStyle,K=f.focusStyle,z=f.separator,D=f.isDisabled,j=f.disabledStyle,G=f.hasErrored,ee=f.errorStyle,te=f.shouldAutoFocus,ae=f.isInputNum,oe=f.isInputSecure,Te=f.className,ge=[],he=e.getOtpValue(),Se=e.getPlaceholderValue(),ve=e.props["data-cy"],_e=e.props["data-testid"],Ve=function(W){ge.push(a.default.createElement(H,{placeholder:Se&&Se[W],key:W,index:W,focus:c===W,value:he&&he[W],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Re){e.setState({activeInput:W}),Re.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:z,inputStyle:M,focusStyle:K,isLastChild:W===$-1,isDisabled:D,disabledStyle:j,hasErrored:G,errorStyle:ee,shouldAutoFocus:te,isInputNum:ae,isInputSecure:oe,className:Te,"data-cy":ve&&"".concat(ve,"-").concat(W),"data-testid":_e&&"".concat(_e,"-").concat(W)}))},se=0;se<$;se++)Ve(se);return ge}),e}return h(p,[{key:"render",value:function(){var s=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},B(s)&&s),className:B(s)?"":s},this.renderInputs())}}]),p}(a.Component);b(me,"defaultProps",{numInputs:4,onChange:function(d){return console.log(d)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Le=me;t.default=Le})(Ae);const Pt=Qe(Ae),At=re.div`
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
`,{ENTRY_PATH:$t}=pe.ROUTES,{INTERVAL:Ft,INITIAL_TIME:Et}=pe,$e=t=>{const a=ie().signIn.SignInFormCode,[u,r]=L.exports.useState(!1),[o,n]=L.exports.useState(""),m=Ce(),{setSignInStep:S,user:g,setUser:_}=Q(),{signInMethod:h}=Q(),[,w]=Xe("user"),{mutateAsync:x,reset:y}=ke(),{mutateAsync:O,reset:I}=et(),[C,{start:N}]=kt(Et,Ft),b=F=>n(F),E=async()=>{try{r(!0),x({dni:g==null?void 0:g.dni,type:h}),N(),y(),r(!1)}catch{r(!1)}},P=async()=>{try{r(!0),await O({password:o,dni:g==null?void 0:g.dni}).then(F=>{const{access_token:V,user:R}=F!=null?F:{};_(R),w(R),tt.setCookie("token",V)}),I(),r(!1),S(0),m($t)}catch{r(!1)}},T=()=>l("span",{className:"SignInCode__container--separator"});return L.exports.useEffect(()=>{N()},[N]),A(At,{className:"SignInCode",children:[l(Pt,{value:o,onChange:b,numInputs:at,separator:T(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),l("div",{className:"SignInCode__container--time",children:A("p",{className:"SignInCode__text SignInCode__text--time",children:["(",it(C/1e3),")"]})}),l("div",{className:"SignInCode__container--button",children:l(fe,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:P,disabled:u,className:"SignInCode__component--button",children:a.button})}),A("div",{className:"SignInCode__container--text",children:[A("p",{className:"SignInCode__text",children:[`${a.question} `,l("span",{onClick:E,className:"SignInCode__text--color SignInCode__text--clickable",children:a.answer})]}),l("p",{className:"SignInCode__text SignInCode__text--clickable",onClick:()=>S(1),children:a.method})]})]})};$e.defaultProps={};const Lt="/CodiShark/assets/iconAlertSignIn.6a29537a.svg",Tt=re.div`
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
`,ue=t=>{const a=ie().signIn.SignInFormUser,[u,r,o]=ot(),[n,m]=L.exports.useState(!1),{setSignInStep:S,setUser:g}=Q(),{mutateAsync:_,reset:h}=nt(),[w,x]=L.exports.useState(""),{control:y,handleSubmit:O}=be();return l(Tt,{className:"SignInForm",children:A(pt,{component:"form",noValidate:!0,onSubmit:O(async C=>{var N;try{m(!0),x("");const b={dni:C==null?void 0:C.dni,cod_verifier:C==null?void 0:C.cod,emision_date:C==null?void 0:C.date_begin};await _(b).then(E=>g(E)),h(),m(!1),S(1)}catch(b){(N=b==null?void 0:b.toString())!=null&&N.includes("422")?x("No se encontr\xF3 el usuario en el registro."):x("Hubo un error en la informaci\xF3n ingresada, por favor int\xE9ntelo de nuevo."),m(!1)}}),children:[A(q,{container:!0,spacing:2,children:[l(q,{item:!0,xs:8,md:8,children:l(ce,{name:u.name,control:y,rules:u.rules,defaultValue:"",render:({field:C,fieldState:N})=>l(le,{field:C,fields:N,config:{type:u.type,label:u.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:u==null?void 0:u.maxLength,InputProps:{endAdornment:l(Ie,{position:"end",children:l("img",{className:"SignInForm__icon",src:De,alt:"iconPerson"})})}}})})}),l(q,{item:!0,xs:4,md:4,children:l(ce,{name:r.name,control:y,rules:r.rules,defaultValue:"",render:({field:C,fieldState:N})=>l(le,{field:C,fields:N,config:{type:r.type,label:r.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:r==null?void 0:r.maxLength,InputProps:{endAdornment:l(Ie,{position:"end",children:l("img",{className:"SignInForm__icon",src:Lt,alt:"iconAlert"})})}}})})}),l(q,{item:!0,xs:12,md:12,children:l(ce,{name:o.name,control:y,rules:o.rules,defaultValue:"",render:({field:C,fieldState:N})=>l(le,{field:C,fields:N,config:{type:o.type,label:o.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),l("div",{className:"SignInForm__container--button",children:l(fe,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:n,className:"SignInForm__component--button",children:a.button})}),(w==null?void 0:w.length)>0?l("h3",{className:"SignInForm__error",children:w}):null]})})};ue.defaultProps={};const Vt=re.div`
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
`,Fe=t=>{const a=ie().signIn.SignInValidation,u=st(),[r,o]=L.exports.useState(!1),{setSignInStep:n,user:m,setSignInMethod:S}=Q(),{register:g,handleSubmit:_}=be(),{mutateAsync:h,reset:w}=ke(),{first_name:x,last_name:y,phone:O,email:I}=m!=null?m:{},C=async P=>{try{o(!0),await h({dni:m==null?void 0:m.dni,type:P==null?void 0:P.verifyMethod}),w(),S(P==null?void 0:P.verifyMethod),o(!1),n(2)}catch{o(!1)}},N=P=>{const{id:T,value:F,label:V,name:R,labelExtension:B}=P;return l("div",{children:A("label",{htmlFor:T,children:[l("input",{className:"SignInValidate__container__input",type:"radio",value:F,id:T,...g(R,{required:!0})}),V,l("span",{className:"SignInValidate__text--color",children:B})]})})},b=()=>A("form",{onSubmit:_(C),children:[l("div",{className:"SignInValidate__container__form",children:u.map((P,T)=>{var F,V;return l(N,{id:P.id,name:P.name,value:P.value,label:P.label,labelExtension:P.value==="SMS"?` *** *** ${(F=O==null?void 0:O.slice((O==null?void 0:O.length)-3))!=null?F:""}`:` ********${(V=I==null?void 0:I.slice((I==null?void 0:I.length)-15))!=null?V:""}`},T)})}),l("div",{className:"SignInValidate__container--button",children:l(fe,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:r,className:"SignInValidate__component--button",children:a.button})})]});return l(Vt,{className:"SignInValidate",children:A("div",{className:"SignInValidate__container__global",children:[l("div",{className:"SignInValidate__container",children:(()=>A(Ne,{children:[A("p",{className:"SignInValidate__text--greeting",children:[a.greeting,l("span",{className:"SignInValidate__text--greeting__bold",children:` ${x!=null?x:""} ${y!=null?y:""}`})]}),l("p",{className:"SignInValidate__text--indication",children:a.instructions})]}))()}),b()]})})};Fe.defaultProps={};const Bt="/CodiShark/assets/loginImageUser.fd914332.jpg",Rt="/CodiShark/assets/loginImageUser.93122b01.webp",Dt=re.div`
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
      background-image: url(${Bt});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      background-image: -webkit-image-set(url(${Rt}));
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
`,{ENTRY_PATH:Wt}=pe.ROUTES,Ee=t=>{const{isAnonymous:a,signInStep:u}=Q(),r=ie().signIn.SignInFormUser,o=Ce();L.exports.useEffect(()=>{if(!a){o(Wt);return}},[a,o]);const n=()=>{switch(u){case 0:return l(ue,{});case 1:return l(Fe,{});case 2:return l($e,{});default:return l(ue,{})}},m=()=>{const _=()=>u===2?"SignIn__container--separate":"";return A(Ne,{children:[l("img",{src:We,alt:r.altLogo,width:188}),l("h1",{className:"SignIn__title",children:u!==2?r.title.toUpperCase():r.titleAlt.toUpperCase()}),A("div",{className:_(),children:[l("p",{className:"SignIn__subtitle",children:u!==2?r.subtitle:r.subtitleAlt}),u===2&&l("p",{className:"SignIn__subtitle SignIn__subtitle-sepa",children:r.subtitleAltTwo})]})]})},S=()=>l("p",{className:"SignIn__container--copyright",children:r.copyright});return l(Dt,{className:"SignIn",children:A(q,{container:!0,component:"main",className:"SignIn__container",children:[l(q,{item:!0,xs:!1,sm:4,md:6,className:"SignIn__image",children:(()=>A("div",{className:"SignIn__renderList",children:[l("h2",{className:"SignIn__renderList--h2",children:r.benefitTitle}),l("h1",{className:"SignIn__renderList--h1",children:r.benefitSubTitle}),A("ul",{className:"SignIn__renderList--ul",children:[l("li",{className:"SignIn__renderList--h2",children:r.ul1}),l("li",{className:"SignIn__renderList--h2",children:r.ul2}),l("li",{className:"SignIn__renderList--h2",children:r.ul3}),l("li",{className:"SignIn__renderList--h2",children:r.ul4})]})]}))()}),A(q,{item:!0,xs:12,sm:8,md:6,component:rt,elevation:4,square:!0,container:!0,alignItems:"center",justifyContent:"center",flexDirection:"column",children:[A("div",{className:"SignIn__container--form",children:[l("div",{className:"SignIn__container--center SignIn__container--content",children:m()}),n()]}),S()]})]})})};Ee.defaultProps={};const Yt=Ee;export{Yt as default};
