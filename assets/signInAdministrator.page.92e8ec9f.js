import{T as k,r as P,i as F,a as N}from"./jsx-runtime_commonjs-proxy.e36029b7.js";import{b as H,g as K,c as q,_ as p,r as g,d as U,f as D,a as e,h as O,j as a,l as h,i as W,s as T,U as G,F as d}from"./index.5bef10e8.js";import{c as z}from"./i18n.hooks.cdc7c6ef.js";import{u as J,F as Q,T as f,B as $}from"./TextField.8ded6a0e.js";function X(r){return K("MuiInputAdornment",r)}const Y=H("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),w=Y;var C;const Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],ee=(r,t)=>{const{ownerState:n}=r;return[t.root,t[`position${h(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},te=r=>{const{classes:t,disablePointerEvents:n,hiddenLabel:i,position:o,size:s,variant:m}=r,c={root:["root",n&&"disablePointerEvents",o&&`position${h(o)}`,m,i&&"hiddenLabel",s&&`size${h(s)}`]};return W(c,X,t)},re=q("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ee})(({theme:r,ownerState:t})=>p({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(r.vars||r).palette.action.active},t.variant==="filled"&&{[`&.${w.positionStart}&:not(.${w.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),ne=g.exports.forwardRef(function(t,n){const i=U({props:t,name:"MuiInputAdornment"}),{children:o,className:s,component:m="div",disablePointerEvents:c=!1,disableTypography:R=!1,position:A,variant:S}=i,B=D(i,Z),l=J()||{};let u=S;S&&l.variant,l&&!u&&(u=l.variant);const x=p({},i,{hiddenLabel:l.hiddenLabel,size:l.size,disablePointerEvents:c,position:A,variant:u}),M=te(x);return e(Q.Provider,{value:null,children:e(re,p({as:m,ownerState:x,className:O(M.root,s),ref:n},B,{children:typeof o=="string"&&!R?e(k,{color:"text.secondary",children:o}):a(g.exports.Fragment,{children:[A==="start"?C||(C=e("span",{className:"notranslate",children:"\u200B"})):null,o]})}))})}),_=ne;var b={},ie=F.exports;Object.defineProperty(b,"__esModule",{value:!0});var V=b.default=void 0,oe=ie(P()),ae=N,se=(0,oe.default)((0,ae.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");V=b.default=se;var I={},le=F.exports;Object.defineProperty(I,"__esModule",{value:!0});var y=I.default=void 0,de=le(P()),me=N,ce=(0,de.default)((0,me.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Key");y=I.default=ce;const ue=T.div`
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
`,j="/CodiShark/assets/logoKonecta.c9be14ef.svg",v=r=>{const t=z().signIn.SignInForm,{setIsAnonymous:n}=G(),i=()=>{n(!1)};return e(ue,{className:"SignInAdministrator",children:a("div",{className:"SignInAdministrator__container",children:[e("img",{src:j,alt:"logoKonecta",className:"SignInAdministrator__logo"}),a(d,{children:[e("h2",{className:"SignInAdministrator__title",children:"Bienvenido"}),e("h3",{className:"SignInAdministrator__subTitle",children:"\xA1Hola! Sigue estos simples pasos"})]}),(()=>a(d,{children:[e(f,{id:"email",type:"email",label:"email",variant:"filled",placeholder:t.emailPlaceholder,className:"SignInAdministrator__textField",InputProps:{startAdornment:e(_,{position:"start",children:e(V,{})})}}),e(f,{id:"password",type:"password",label:"password",variant:"filled",placeholder:t.passwordPlaceholder,className:"SignInAdministrator__textField",InputProps:{startAdornment:e(_,{position:"start",children:e(y,{})})}}),e($,{variant:"contained",className:"SignInAdministrator__button",onClick:i,children:"Continuar"})]}))(),e("h4",{className:"SignInAdministrator__footerText",children:"Copyright B12 2022 - Todos los derechos reservados"})]})})};v.defaultProps={};const pe=T.div`
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
`,E=r=>{const t=z().signIn.SignInForm;return e(pe,{className:"SignInAdministratorVerify",children:a("div",{className:"SignInAdministratorVerify__container",children:[e("img",{src:j,alt:"logoKonecta",className:"SignInAdministratorVerify__logo"}),a(d,{children:[e("h2",{className:"SignInAdministratorVerify__title",children:"Bienvenido"}),e("h3",{className:"SignInAdministratorVerify__subTitle",children:"Ingrese el c\xF3digo enviado a su n\xFAmero de celular para poder continuar:"})]}),(()=>a(d,{children:[e(f,{id:"password",type:"password",label:"codigo verificador",variant:"filled",placeholder:t.passwordPlaceholder,className:"SignInAdministratorVerify__textField",InputProps:{startAdornment:e(_,{position:"start",children:e(y,{})})}}),e($,{variant:"contained",className:"SignInAdministratorVerify__button",children:"Ingresar"})]}))(),e("h4",{className:"SignInAdministratorVerify__footerText",children:"Copyright B12 2022 - Todos los derechos reservados"})]})})};E.defaultProps={};const L=r=>{const[t]=g.exports.useState(0);switch(t){case 0:return e(v,{});case 1:return e(E,{});default:return e(v,{})}};L.defaultProps={};const ve=L;export{ve as default};
