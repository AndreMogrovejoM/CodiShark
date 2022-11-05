import{T as k,r as P,i as F,a as N}from"./jsx-runtime_commonjs-proxy.5ad1bee2.js";import{_ as g,r as l,n as H,j as e,a,o as h,U as K,s as T,F as m}from"./index.5bb5607e.js";import{c as z}from"./i18n.hooks.a6d1d7ff.js";import{u as q,F as U,T as f,B as $}from"./TextField.f13b6811.js";import{a as D,g as O,s as W,u as G,b as J,d as Q}from"./createSvgIcon.a98ea3cc.js";function X(r){return O("MuiInputAdornment",r)}const Y=D("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),w=Y;var C;const Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],ee=(r,t)=>{const{ownerState:n}=r;return[t.root,t[`position${h(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},te=r=>{const{classes:t,disablePointerEvents:n,hiddenLabel:i,position:o,size:s,variant:c}=r,u={root:["root",n&&"disablePointerEvents",o&&`position${h(o)}`,c,i&&"hiddenLabel",s&&`size${h(s)}`]};return Q(u,X,t)},re=W("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ee})(({theme:r,ownerState:t})=>g({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(r.vars||r).palette.action.active},t.variant==="filled"&&{[`&.${w.positionStart}&:not(.${w.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),ne=l.exports.forwardRef(function(t,n){const i=G({props:t,name:"MuiInputAdornment"}),{children:o,className:s,component:c="div",disablePointerEvents:u=!1,disableTypography:R=!1,position:x,variant:y}=i,B=H(i,Z),d=q()||{};let p=y;y&&d.variant,d&&!p&&(p=d.variant);const S=g({},i,{hiddenLabel:d.hiddenLabel,size:d.size,disablePointerEvents:u,position:x,variant:p}),M=te(S);return e(U.Provider,{value:null,children:e(re,g({as:c,ownerState:S,className:J(M.root,s),ref:n},B,{children:typeof o=="string"&&!R?e(k,{color:"text.secondary",children:o}):a(l.exports.Fragment,{children:[x==="start"?C||(C=e("span",{className:"notranslate",children:"\u200B"})):null,o]})}))})}),v=ne;var b={},ie=F.exports;Object.defineProperty(b,"__esModule",{value:!0});var V=b.default=void 0,oe=ie(P()),ae=N,se=(0,oe.default)((0,ae.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");V=b.default=se;var I={},de=F.exports;Object.defineProperty(I,"__esModule",{value:!0});var A=I.default=void 0,le=de(P()),me=N,ce=(0,le.default)((0,me.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Key");A=I.default=ce;const ue=()=>{const r=l.exports.useContext(K);if(typeof r>"u")throw new Error("useAuth must be used within a AuthProvider");return r},pe=T.div`
  width: 100%;
  height: 100vh;
  background-color: var(--palette-deepBlue);
  display: flex;
  align-items: center;

  .SignInAdministrator {
    &__container {
      width: 48rem;
      height: 48rem;
      background-color: var(--palette-grey);
      margin: 0 auto;
      border-radius: 1.6rem;
      display: flex;
      flex-direction: column;
      padding: 4.8rem 0;
      position: relative;
    }

    &__title {
      font-size: 2rem;
      line-height: 3.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.6rem;
      margin-top: 1rem;
    }

    &__subTitle {
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 4.4rem;
    }

    &__textField {
      background-color: var(--palette-white);
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    &__button {
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      padding: 1rem 0;
      color: var(--palette-white);
      margin-bottom: 4rem;
    }

    &__footerText {
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 300;
      margin-top: auto;
      margin: 0 auto;
    }
    &__logo {
      margin: 0 auto;
      width: 16rem;
      height: 4.8rem;
    }
  }
`,E="/CodiShark/assets/logoKonecta.c9be14ef.svg",_=r=>{const t=z().signIn.SignInForm,{setIsAnonymous:n}=ue(),i=()=>{n(!1)};return e(pe,{className:"SignInAdministrator",children:a("div",{className:"SignInAdministrator__container",children:[e("img",{src:E,alt:"logoKonecta",className:"SignInAdministrator__logo"}),a(m,{children:[e("h2",{className:"SignInAdministrator__title",children:"Bienvenido"}),e("h3",{className:"SignInAdministrator__subTitle",children:"\xA1Hola! Sigue estos simples pasos"})]}),(()=>a(m,{children:[e(f,{id:"email",type:"email",label:"email",variant:"filled",placeholder:t.emailPlaceholder,className:"SignInAdministrator__textField",InputProps:{startAdornment:e(v,{position:"start",children:e(V,{})})}}),e(f,{id:"password",type:"password",label:"password",variant:"filled",placeholder:t.passwordPlaceholder,className:"SignInAdministrator__textField",InputProps:{startAdornment:e(v,{position:"start",children:e(A,{})})}}),e($,{variant:"contained",className:"SignInAdministrator__button",onClick:i,children:"Continuar"})]}))(),e("h4",{className:"SignInAdministrator__footerText",children:"Copyright B12 2022 - Todos los derechos reservados"})]})})};_.defaultProps={};const ge=T.div`
  width: 100%;
  height: 100vh;
  background-color: var(--palette-deepBlue);
  display: flex;
  align-items: center;
  .SignInAdministratorVerify {
    &__container {
      width: 48rem;
      height: 40rem;
      background-color: var(--palette-grey);
      margin: 0 auto;
      border-radius: 1.6rem;
      display: flex;
      flex-direction: column;
      padding: 4.8rem 0;
      position: relative;
    }

    &__logo {
      margin: 0 auto;
      width: 16rem;
      height: 4.8rem;
      margin-bottom: 2rem;
    }

    &__title {
      font-size: 2rem;
      line-height: 3.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1.6rem;
    }

    &__subTitle {
      margin: 0 auto;
      width: 80%;
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 2rem;
    }

    &__textField {
      background-color: var(--palette-white);
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: 0.8rem;
    }

    &__button {
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      color: var(--palette-white);
      padding: 0.8rem 0;
    }

    &__footerText {
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 300;
      margin: 0 auto;
      margin-top: auto;
    }
  }
`,j=r=>{const t=z().signIn.SignInForm;return e(ge,{className:"SignInAdministratorVerify",children:a("div",{className:"SignInAdministratorVerify__container",children:[e("img",{src:E,alt:"logoKonecta",className:"SignInAdministratorVerify__logo"}),a(m,{children:[e("h2",{className:"SignInAdministratorVerify__title",children:"Bienvenido"}),e("h3",{className:"SignInAdministratorVerify__subTitle",children:"Ingrese el c\xF3digo enviado a su n\xFAmero de celular para poder continuar:"})]}),(()=>a(m,{children:[e(f,{id:"password",type:"password",label:"codigo verificador",variant:"filled",placeholder:t.passwordPlaceholder,className:"SignInAdministratorVerify__textField",InputProps:{startAdornment:e(v,{position:"start",children:e(A,{})})}}),e($,{variant:"contained",className:"SignInAdministratorVerify__button",children:"Ingresar"})]}))(),e("h4",{className:"SignInAdministratorVerify__footerText",children:"Copyright B12 2022 - Todos los derechos reservados"})]})})};j.defaultProps={};const L=r=>{const[t]=l.exports.useState(0);switch(t){case 0:return e(_,{});case 1:return e(j,{});default:return e(_,{})}};L.defaultProps={};const Ie=L;export{Ie as default};
