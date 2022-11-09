import{l as Le,m as ze,d as be,a as Me,g as je,b as Ge,s as Ue,u as Ke,e as He,C as xe}from"./constants.78d5d177.js";import{t as Ce,j as qe,l as ne,m as q,D as Ne,E as Ye,q as Ze,F as Je,P as Qe}from"./auth.service.hooks.3f8cd32b.js";import{r as B,q as Xe,n as we,a as p,_ as U,t as et,a3 as re,h as pe,a0 as tt,s as ae,u as Oe,j as V,F as ke}from"./index.9d51c626.js";import{m as nt,B as de,v as rt,b as Pe,C as ce,T as le,d as at}from"./validations.utils.673fbc29.js";const it=["className","component"];function ot(t={}){const{defaultTheme:a,defaultClassName:l="MuiBox-root",generateClassName:r,styleFunctionSx:c=ze}=t,d=Le("div",{shouldForwardProp:v=>v!=="theme"&&v!=="sx"&&v!=="as"})(c);return B.exports.forwardRef(function(y,_){const h=Xe(a),b=Ce(y),{className:w,component:O="div"}=b,I=we(b,it);return p(d,U({as:O,ref:_,className:be(w,r?r(l):l),theme:h},I))})}const st=et(),ct=ot({defaultTheme:st,defaultClassName:"MuiBox-root",generateClassName:Me.generate}),te=ct,lt=B.exports.createContext(),ve=lt;function ut(t){return je("MuiGrid",t)}const pt=[0,1,2,3,4,5,6,7,8,9,10],dt=["column-reverse","column","row-reverse","row"],ft=["nowrap","wrap-reverse","wrap"],H=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Y=Ge("MuiGrid",["root","container","item","zeroMinWidth",...pt.map(t=>`spacing-xs-${t}`),...dt.map(t=>`direction-xs-${t}`),...ft.map(t=>`wrap-xs-${t}`),...H.map(t=>`grid-xs-${t}`),...H.map(t=>`grid-sm-${t}`),...H.map(t=>`grid-md-${t}`),...H.map(t=>`grid-lg-${t}`),...H.map(t=>`grid-xl-${t}`)]),mt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function K(t){const a=parseFloat(t);return`${a}${String(t).replace(String(a),"")||"px"}`}function gt({theme:t,ownerState:a}){let l;return t.breakpoints.keys.reduce((r,c)=>{let d={};if(a[c]&&(l=a[c]),!l)return r;if(l===!0)d={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(l==="auto")d={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const g=re({values:a.columns,breakpoints:t.breakpoints.values}),v=typeof g=="object"?g[c]:g;if(v==null)return r;const y=`${Math.round(l/v*1e8)/1e6}%`;let _={};if(a.container&&a.item&&a.columnSpacing!==0){const h=t.spacing(a.columnSpacing);if(h!=="0px"){const b=`calc(${y} + ${K(h)})`;_={flexBasis:b,maxWidth:b}}}d=U({flexBasis:y,flexGrow:0,maxWidth:y},_)}return t.breakpoints.values[c]===0?Object.assign(r,d):r[t.breakpoints.up(c)]=d,r},{})}function ht({theme:t,ownerState:a}){const l=re({values:a.direction,breakpoints:t.breakpoints.values});return pe({theme:t},l,r=>{const c={flexDirection:r};return r.indexOf("column")===0&&(c[`& > .${Y.item}`]={maxWidth:"none"}),c})}function $e({breakpoints:t,values:a}){let l="";Object.keys(a).forEach(c=>{l===""&&a[c]!==0&&(l=c)});const r=Object.keys(t).sort((c,d)=>t[c]-t[d]);return r.slice(0,r.indexOf(l))}function yt({theme:t,ownerState:a}){const{container:l,rowSpacing:r}=a;let c={};if(l&&r!==0){const d=re({values:r,breakpoints:t.breakpoints.values});let g;typeof d=="object"&&(g=$e({breakpoints:t.breakpoints.values,values:d})),c=pe({theme:t},d,(v,y)=>{var _;const h=t.spacing(v);return h!=="0px"?{marginTop:`-${K(h)}`,[`& > .${Y.item}`]:{paddingTop:K(h)}}:(_=g)!=null&&_.includes(y)?{}:{marginTop:0,[`& > .${Y.item}`]:{paddingTop:0}}})}return c}function St({theme:t,ownerState:a}){const{container:l,columnSpacing:r}=a;let c={};if(l&&r!==0){const d=re({values:r,breakpoints:t.breakpoints.values});let g;typeof d=="object"&&(g=$e({breakpoints:t.breakpoints.values,values:d})),c=pe({theme:t},d,(v,y)=>{var _;const h=t.spacing(v);return h!=="0px"?{width:`calc(100% + ${K(h)})`,marginLeft:`-${K(h)}`,[`& > .${Y.item}`]:{paddingLeft:K(h)}}:(_=g)!=null&&_.includes(y)?{}:{width:"100%",marginLeft:0,[`& > .${Y.item}`]:{paddingLeft:0}}})}return c}function vt(t,a,l={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[l[`spacing-xs-${String(t)}`]];const r=[];return a.forEach(c=>{const d=t[c];Number(d)>0&&r.push(l[`spacing-${c}-${String(d)}`])}),r}const _t=Ue("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:l}=t,{container:r,direction:c,item:d,spacing:g,wrap:v,zeroMinWidth:y,breakpoints:_}=l;let h=[];r&&(h=vt(g,_,a));const b=[];return _.forEach(w=>{const O=l[w];O&&b.push(a[`grid-${w}-${String(O)}`])}),[a.root,r&&a.container,d&&a.item,y&&a.zeroMinWidth,...h,c!=="row"&&a[`direction-xs-${String(c)}`],v!=="wrap"&&a[`wrap-xs-${String(v)}`],...b]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),ht,yt,St,gt);function It(t,a){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const l=[];return a.forEach(r=>{const c=t[r];if(Number(c)>0){const d=`spacing-${r}-${String(c)}`;l.push(d)}}),l}const bt=t=>{const{classes:a,container:l,direction:r,item:c,spacing:d,wrap:g,zeroMinWidth:v,breakpoints:y}=t;let _=[];l&&(_=It(d,y));const h=[];y.forEach(w=>{const O=t[w];O&&h.push(`grid-${w}-${String(O)}`)});const b={root:["root",l&&"container",c&&"item",v&&"zeroMinWidth",..._,r!=="row"&&`direction-xs-${String(r)}`,g!=="wrap"&&`wrap-xs-${String(g)}`,...h]};return He(b,ut,a)},xt=B.exports.forwardRef(function(a,l){const r=Ke({props:a,name:"MuiGrid"}),{breakpoints:c}=qe(),d=Ce(r),{className:g,columns:v,columnSpacing:y,component:_="div",container:h=!1,direction:b="row",item:w=!1,rowSpacing:O,spacing:I=0,wrap:S="wrap",zeroMinWidth:x=!1}=d,$=we(d,mt),C=O||I,k=y||I,z=B.exports.useContext(ve),T=h?v||12:z,Z={},J=U({},$);c.keys.forEach(j=>{$[j]!=null&&(Z[j]=$[j],delete J[j])});const Q=U({},d,{columns:T,container:h,direction:b,item:w,rowSpacing:C,columnSpacing:k,wrap:S,zeroMinWidth:x,spacing:I},Z,{breakpoints:c.keys}),F=bt(Q);return p(ve.Provider,{value:T,children:p(_t,U({ownerState:Q,className:be(F.root,g),as:_,ref:l},J))})}),M=xt,Ct="/CodiShark/assets/logoKonecta.19fc6f76.webp";var Ve={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(B.exports),l=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,u=new WeakMap;return(r=function(i){return i?u:s})(n)}function c(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var u=r(s);if(u&&u.has(n))return u.get(n);var e={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in n)if(m!=="default"&&Object.prototype.hasOwnProperty.call(n,m)){var N=i?Object.getOwnPropertyDescriptor(n,m):null;N&&(N.get||N.set)?Object.defineProperty(e,m,N):e[m]=n[m]}return e.default=n,u&&u.set(n,e),e}function d(){return d=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var e in u)Object.prototype.hasOwnProperty.call(u,e)&&(n[e]=u[e])}return n},d.apply(this,arguments)}function g(n,s){if(n==null)return{};var u=v(n,s),e,i;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(i=0;i<m.length;i++)e=m[i],!(s.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,e)||(u[e]=n[e]))}return u}function v(n,s){if(n==null)return{};var u={},e=Object.keys(n),i,m;for(m=0;m<e.length;m++)i=e[m],!(s.indexOf(i)>=0)&&(u[i]=n[i]);return u}function y(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function _(n,s){for(var u=0;u<s.length;u++){var e=s[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function h(n,s,u){return s&&_(n.prototype,s),u&&_(n,u),n}function b(n,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),s&&w(n,s)}function w(n,s){return w=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},w(n,s)}function O(n){var s=x();return function(){var e=$(n),i;if(s){var m=$(this).constructor;i=Reflect.construct(e,arguments,m)}else i=e.apply(this,arguments);return I(this,i)}}function I(n,s){return s&&(k(s)==="object"||typeof s=="function")?s:S(n)}function S(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function x(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $(n){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(u){return u.__proto__||Object.getPrototypeOf(u)},$(n)}function C(n,s,u){return s in n?Object.defineProperty(n,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[s]=u,n}function k(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(u){return typeof u}:k=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},k(n)}var z=8,T=37,Z=39,J=46,Q=32,F=function(s){return k(s)==="object"},j=function(n){b(u,n);var s=O(u);function u(e){var i;return y(this,u),i=s.call(this,e),C(S(i),"getClasses",function(){for(var m=arguments.length,N=new Array(m),o=0;o<m;o++)N[o]=arguments[o];return N.filter(function(f){return!F(f)&&f!==!1}).join(" ")}),C(S(i),"getType",function(){var m=i.props,N=m.isInputSecure,o=m.isInputNum;return N?"password":o?"tel":"text"}),i.input=a.default.createRef(),i}return h(u,[{key:"componentDidMount",value:function(){var i=this.props,m=i.focus,N=i.shouldAutoFocus,o=this.input.current;o&&m&&N&&o.focus()}},{key:"componentDidUpdate",value:function(i){var m=this.props.focus,N=this.input.current;i.focus!==m&&N&&m&&(N.focus(),N.select())}},{key:"render",value:function(){var i=this.props,m=i.placeholder,N=i.separator,o=i.isLastChild,f=i.inputStyle,P=i.focus,R=i.isDisabled,G=i.hasErrored,D=i.errorStyle,E=i.focusStyle,W=i.disabledStyle;i.shouldAutoFocus;var L=i.isInputNum,X=i.index,ee=i.value,ie=i.className;i.isInputSecure;var oe=g(i,l);return a.default.createElement("div",{className:ie,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",d({"aria-label":"".concat(X===0?"Please enter verification code. ":"").concat(L?"Digit":"Character"," ").concat(X+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},F(f)&&f,P&&F(E)&&E,R&&F(W)&&W,G&&F(D)&&D),placeholder:m,className:this.getClasses(f,P&&E,R&&W,G&&D),type:this.getType(),maxLength:"1",ref:this.input,disabled:R,value:ee||""},oe)),!o&&N)}}]),u}(a.PureComponent),fe=function(n){b(u,n);var s=O(u);function u(){var e;y(this,u);for(var i=arguments.length,m=new Array(i),N=0;N<i;N++)m[N]=arguments[N];return e=s.call.apply(s,[this].concat(m)),C(S(e),"state",{activeInput:0}),C(S(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),C(S(e),"getPlaceholderValue",function(){var o=e.props,f=o.placeholder,P=o.numInputs;if(typeof f=="string"){if(f.length===P)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),C(S(e),"handleOtpChange",function(o){var f=e.props.onChange,P=o.join("");f(P)}),C(S(e),"isInputValueValid",function(o){var f=e.props.isInputNum?!isNaN(parseInt(o,10)):typeof o=="string";return f&&o.trim().length===1}),C(S(e),"focusInput",function(o){var f=e.props.numInputs,P=Math.max(Math.min(f-1,o),0);e.setState({activeInput:P})}),C(S(e),"focusNextInput",function(){var o=e.state.activeInput;e.focusInput(o+1)}),C(S(e),"focusPrevInput",function(){var o=e.state.activeInput;e.focusInput(o-1)}),C(S(e),"changeCodeAtFocus",function(o){var f=e.state.activeInput,P=e.getOtpValue();P[f]=o[0],e.handleOtpChange(P)}),C(S(e),"handleOnPaste",function(o){o.preventDefault();var f=e.state.activeInput,P=e.props,R=P.numInputs,G=P.isDisabled;if(!G){for(var D=e.getOtpValue(),E=f,W=o.clipboardData.getData("text/plain").slice(0,R-f).split(""),L=0;L<R;++L)L>=f&&W.length>0&&(D[L]=W.shift(),E++);e.setState({activeInput:E},function(){e.focusInput(E),e.handleOtpChange(D)})}}),C(S(e),"handleOnChange",function(o){var f=o.target.value;e.isInputValueValid(f)&&e.changeCodeAtFocus(f)}),C(S(e),"handleOnKeyDown",function(o){o.keyCode===z||o.key==="Backspace"?(o.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):o.keyCode===J||o.key==="Delete"?(o.preventDefault(),e.changeCodeAtFocus("")):o.keyCode===T||o.key==="ArrowLeft"?(o.preventDefault(),e.focusPrevInput()):o.keyCode===Z||o.key==="ArrowRight"?(o.preventDefault(),e.focusNextInput()):(o.keyCode===Q||o.key===" "||o.key==="Spacebar"||o.key==="Space")&&o.preventDefault()}),C(S(e),"handleOnInput",function(o){if(e.isInputValueValid(o.target.value))e.focusNextInput();else if(!e.props.isInputNum){var f=o.nativeEvent;f.data===null&&f.inputType==="deleteContentBackward"&&(o.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}),C(S(e),"renderInputs",function(){for(var o=e.state.activeInput,f=e.props,P=f.numInputs,R=f.inputStyle,G=f.focusStyle,D=f.separator,E=f.isDisabled,W=f.disabledStyle,L=f.hasErrored,X=f.errorStyle,ee=f.shouldAutoFocus,ie=f.isInputNum,oe=f.isInputSecure,Te=f.className,me=[],ge=e.getOtpValue(),he=e.getPlaceholderValue(),ye=e.props["data-cy"],Se=e.props["data-testid"],Re=function(A){me.push(a.default.createElement(j,{placeholder:he&&he[A],key:A,index:A,focus:o===A,value:ge&&ge[A],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(We){e.setState({activeInput:A}),We.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:D,inputStyle:R,focusStyle:G,isLastChild:A===P-1,isDisabled:E,disabledStyle:W,hasErrored:L,errorStyle:X,shouldAutoFocus:ee,isInputNum:ie,isInputSecure:oe,className:Te,"data-cy":ye&&"".concat(ye,"-").concat(A),"data-testid":Se&&"".concat(Se,"-").concat(A)}))},se=0;se<P;se++)Re(se);return me}),e}return h(u,[{key:"render",value:function(){var i=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},F(i)&&i),className:F(i)?"":i},this.renderInputs())}}]),u}(a.Component);C(fe,"defaultProps",{numInputs:4,onChange:function(s){return console.log(s)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var Ae=fe;t.default=Ae})(Ve);const Nt=tt(Ve),wt=ae.div`
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
    }
  }
`,{ENTRY_PATH:Ot}=xe.ROUTES,Be=t=>{const a=ne().signIn.SignInFormCode,[l,r]=B.exports.useState(!1),[c,d]=B.exports.useState(""),g=Oe(),{setSignInStep:v,user:y,setUser:_}=q(),{signInMethod:h}=q(),{mutateAsync:b,reset:w}=Ne(),{mutateAsync:O,reset:I}=Ye(),S=k=>d(k),x=async()=>{try{r(!0),b({dni:y==null?void 0:y.dni,type:h}),w(),r(!1)}catch{r(!1)}},$=async()=>{try{r(!0),await O({password:c,dni:y==null?void 0:y.dni}).then(k=>{const{access_token:z,user:T}=k!=null?k:{};_(T),Ze.setCookie("token",z)}),I(),r(!1),v(0),g(Ot)}catch{r(!1)}};return V(wt,{className:"SignInCode",children:[p(Nt,{value:c,onChange:S,numInputs:nt,separator:(()=>p("span",{className:"SignInCode__container--separator"}))(),containerStyle:"SignInCode__container--OTP",inputStyle:"SignInCode__input SignInCode__input--text",focusStyle:"SignInCode__input--focus"}),p("div",{className:"SignInCode__container--time",children:p("p",{className:"SignInCode__text SignInCode__text--time",children:"(3:44)"})}),p("div",{className:"SignInCode__container--button",children:p(de,{variant:"contained",size:"large",color:"info",fullWidth:!0,onClick:$,disabled:l,children:a.button})}),V("div",{className:"SignInCode__container--text",children:[V("p",{className:"SignInCode__text",children:[a.question,p("span",{onClick:x,className:"SignInCode__text--color",children:a.answer})]}),p("p",{className:"SignInCode__text",children:a.method})]})]})};Be.defaultProps={};const kt=ae.div`
  .SignInForm {
    &__container {
      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }
    }
  }
`,ue=t=>{const a=ne().signIn.SignInFormUser,[l,r,c]=rt(),[d,g]=B.exports.useState(!1),{setSignInStep:v,setUser:y}=q(),{mutateAsync:_,reset:h}=Je(),{control:b,handleSubmit:w}=Pe();return p(kt,{className:"SignInForm",children:V(te,{component:"form",noValidate:!0,onSubmit:w(async I=>{try{g(!0);const S={dni:I==null?void 0:I.dni,cod_verifier:I==null?void 0:I.cod,emision_date:I==null?void 0:I.date_begin};await _(S).then(x=>y(x)),h(),g(!1),v(1)}catch{g(!1)}}),children:[V(M,{container:!0,spacing:2,children:[p(M,{item:!0,xs:8,md:8,children:p(ce,{name:l.name,control:b,rules:l.rules,defaultValue:"",render:({field:I,fieldState:S})=>p(le,{field:I,fields:S,config:{type:l.type,label:l.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:l==null?void 0:l.maxLength}})})}),p(M,{item:!0,xs:4,md:4,children:p(ce,{name:r.name,control:b,rules:r.rules,defaultValue:"",render:({field:I,fieldState:S})=>p(le,{field:I,fields:S,config:{type:r.type,label:r.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0,maxLength:r==null?void 0:r.maxLength}})})}),p(M,{item:!0,xs:12,md:12,children:p(ce,{name:c.name,control:b,rules:c.rules,defaultValue:"",render:({field:I,fieldState:S})=>p(le,{field:I,fields:S,config:{type:c.type,label:c.label,variant:"outlined",margin:"dense",fullWidth:!0,focused:!0}})})})]}),p(te,{className:"SignInForm__container--button",children:p(de,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:d,children:a.button})})]})})};ue.defaultProps={};const Pt=ae.div`
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
`,$t="Roberto Flores Perez",_e="938296302",Ie="daprimovaria@gmail.com",Fe=t=>{const a=ne().signIn.SignInValidation,l=at(),[r,c]=B.exports.useState(!1),{setSignInStep:d,user:g,setSignInMethod:v}=q(),{register:y,handleSubmit:_}=Pe(),{mutateAsync:h,reset:b}=Ne(),w=async x=>{try{c(!0),await h({dni:g==null?void 0:g.dni,type:x==null?void 0:x.verifyMethod}),b(),v(x==null?void 0:x.verifyMethod),c(!1),d(2)}catch{c(!1)}},O=x=>{const{id:$,value:C,label:k,name:z,labelExtension:T}=x;return p("div",{children:V("label",{htmlFor:$,children:[p("input",{className:"SignInValidate__container__input",type:"radio",value:C,id:$,...y(z,{required:!0})}),k,p("span",{className:"SignInValidate__text--color",children:T})]})})},I=()=>V("form",{onSubmit:_(w),children:[p("div",{className:"SignInValidate__container__form",children:l.map((x,$)=>p(O,{id:x.id,name:x.name,value:x.value,label:x.label,labelExtension:x.value==="phone"?`*** *** ${_e.slice(_e.length-3)}`:`********${Ie.slice(Ie.length-15)}`},$))}),p("div",{className:"SignInForm__container--button",children:p(de,{type:"submit",variant:"contained",size:"large",color:"info",fullWidth:!0,disabled:r,children:a.button})})]});return p(Pt,{className:"SignInValidate",children:V("div",{className:"SignInValidate__container__global",children:[p("div",{className:"SignInValidate__container",children:(()=>V(ke,{children:[V("p",{className:"SignInValidate__text--greeting",children:[a.greeting,p("span",{className:"SignInValidate__text--greeting__bold",children:` ${$t}`})]}),p("p",{className:"SignInValidate__text--indication",children:a.instructions})]}))()}),I()]})})};Fe.defaultProps={};const Vt="/CodiShark/assets/loginImageUser.93122b01.webp",Bt=ae.div`
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
      background-image: url(${Vt});
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
`,{ENTRY_PATH:Ft}=xe.ROUTES,Ee=t=>{const{isAnonymous:a,signInStep:l}=q(),r=ne().signIn.SignInFormUser,c=Oe();B.exports.useEffect(()=>{if(!a){c(Ft);return}},[a,c]);const d=()=>{switch(l){case 0:return p(ue,{});case 1:return p(Fe,{});case 2:return p(Be,{});default:return p(ue,{})}},g=()=>V(ke,{children:[p("img",{src:Ct,alt:r.altLogo}),p("h1",{className:"SignIn__title",children:l!==2?r.title.toUpperCase():r.titleAlt.toUpperCase()}),p("p",{className:"SignIn__subtitle",children:l!==2?r.subtitle:r.subtitleAlt}),l===2&&p("p",{className:"SignIn__subtitle",children:r.subtitleAltTwo})]}),v=()=>p("p",{className:"SignIn__container--copyright",children:r.copyright});return p(Bt,{className:"SignIn",children:V(M,{container:!0,component:"main",className:"SignIn__container",children:[p(M,{item:!0,xs:!1,sm:4,md:8,className:"SignIn__image"}),V(M,{item:!0,xs:12,sm:8,md:4,component:Qe,elevation:4,square:!0,container:!0,alignItems:"center",justifyContent:"center",children:[V(te,{className:"SignIn__container--form",children:[p(te,{className:"SignIn__container--center   SignIn__container--content",children:g()}),d()]}),v()]})]})})};Ee.defaultProps={};const Wt=Ee;export{Wt as default};
