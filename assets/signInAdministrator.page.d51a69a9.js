import{u as U,l as E,C as N,T as x,I as V,i as O}from"./index.esm.b9bf60ea.js";import{s as H,u as L,r as T,E as F,j as a,F as z,a as t,C as B,G as W}from"./index.62a3d31d.js";import{B as M}from"./Button.c7181f96.js";import{u as R}from"./i18n.hooks.10c02bd4.js";import{u as Y,a as $,b as G}from"./auth.service.hooks.bb8d53fb.js";import{v as q,a as J,b as Q}from"./validations.utils.a31d4e1e.js";const j="/CodiShark/assets/iconVerification.6c8c7197.svg",X=H.div`
  width: 100%;
  height: 100vh;
  background-color: var(--palette-deepBlue);
  display: flex;
  align-items: center;

  .MuiInputBase-input {
    padding: 1.6rem;
  }

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
      margin: 0.4rem auto;
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: 0.8rem;
    }

    &__form {
      align-self: center;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__icon {
      position: absolute;
      top: 0;
      margin: 1.6rem 4rem 0 0;
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
    }
  }
`,{ADMIN_ENTRY_PATH:Z}=B.ROUTES,v=P=>{const[r]=q(),s=J(),h=L(),{control:u,handleSubmit:d}=U(),[p,m]=T.exports.useState(!1),{setSignInStep:f,setUser:_}=F(),{mutateAsync:l,reset:S}=Y(),i=R().signIn.SignInAdministrator.step1,I=async e=>{try{m(!0);const n={dni:e==null?void 0:e.dni,password:e==null?void 0:e.password},c=await l(n);S();const{status:C}=c!=null?c:{};m(!1),C===202?(_({dni:e==null?void 0:e.dni}),f(1)):(f(0),h(Z))}catch{m(!1)}},o=a(z,{children:[t("h2",{className:"SignInAdministrator__title",children:i.welcome}),t("h3",{className:"SignInAdministrator__subTitle",children:i.greetings})]});return t(X,{className:"SignInAdministrator",children:a("div",{className:"SignInAdministrator__container",children:[t("img",{src:E,alt:"logoKonecta",className:"SignInAdministrator__logo",width:154}),o,(()=>a("form",{onSubmit:d(I),className:"SignInAdministrator__form",children:[t(N,{name:r.name,control:u,rules:r.rules,defaultValue:"",render:({field:e,fieldState:n})=>t(x,{field:e,fields:n,className:"SignInAdministrator__textField",config:{type:r.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:i.user,InputProps:{startAdornment:t(V,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:O,alt:"iconUserAdministrator"})})}}})}),t(N,{name:s.name,control:u,rules:s.rules,defaultValue:"",render:({field:e,fieldState:n})=>t(x,{field:e,fields:n,className:"SignInAdministrator__textField",config:{type:s.type,label:"",variant:"filled",margin:"dense",placeholder:i.password,fullWidth:!0,focused:!0,InputProps:{startAdornment:t(V,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:j,alt:"iconPasswordAdministrator"})})}}})}),t(M,{variant:"contained",type:"submit",className:"SignInAdministrator__button",disabled:p,children:i.continue})]}))(),t("h4",{className:"SignInAdministrator__footerText",children:i.copyright})]})})};v.defaultProps={};const tt=H.div`
  width: 100%;
  height: 100vh;
  background-color: var(--palette-deepBlue);
  display: flex;
  align-items: center;

  .MuiInputBase-input {
    padding: 1.6rem;
  }

  .SignInAdministratorVerify {
    &__container {
      width: 48rem;
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
      margin-bottom: 1rem;
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
      margin: 0.4rem auto;
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: 0.8rem;
    }

    &__form {
      align-self: center;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__icon {
      position: absolute;
      top: 0;
      margin: 1.6rem 4rem 0 0;
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
      margin: -0.8rem auto;
    }

    &__error {
      color: var(--palette-error);
      font-weight: 500;
      text-align: center;
      margin: 0.4rem 0 1.2rem 0;
    }
  }
`,{ADMIN_ENTRY_PATH:et}=B.ROUTES,D=P=>{const r=Q(),{control:s,handleSubmit:h}=U(),[u,d]=T.exports.useState(!1),[,p]=$("token","0"),[,m]=W("user"),{setSignInStep:f,setUser:_,user:l}=F(),{mutateAsync:S,reset:i}=G(),I=L(),[o,A]=T.exports.useState(""),e=R().signIn.SignInAdministrator.step2,n=async g=>{try{d(!0),A("");const b={dni:l==null?void 0:l.dni,password:g==null?void 0:g.code};await S(b).then(y=>{const{user:k,access_token:w}=y!=null?y:{};p(w!=null?w:""),_(k),m(k),i(),d(!1),f(0),I(et)})}catch{A("Credenciales incorrectas."),d(!1)}},c=a(z,{children:[t("h2",{className:"SignInAdministratorVerify__title",children:e.welcome}),t("h3",{className:"SignInAdministratorVerify__subTitle",children:e.code})]});return t(tt,{className:"SignInAdministratorVerify",children:a("div",{className:"SignInAdministratorVerify__container",children:[t("img",{src:E,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),c,(()=>a("form",{onSubmit:h(n),className:"SignInAdministratorVerify__form",children:[t(N,{name:r.name,control:s,rules:r.rules,defaultValue:"",render:({field:g,fieldState:b})=>t(x,{field:g,fields:b,className:"SignInAdministratorVerify__textField",config:{type:r.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:e.place,InputProps:{startAdornment:t(V,{position:"start",children:t("img",{className:"SignInAdministratorVerify__icon",src:j,alt:"iconVerification"})})}}})}),(o==null?void 0:o.length)>0?t("h3",{className:"SignInAdministratorVerify__error",children:o}):null,t(M,{variant:"contained",type:"submit",disabled:u,className:"SignInAdministratorVerify__button",children:e.continue})]}))(),t("h4",{className:"SignInAdministratorVerify__footerText",children:e.copyright})]})})};D.defaultProps={};const K=P=>{const{signInStep:r}=F();switch(r){case 0:return t(v,{});case 1:return t(D,{});default:return t(v,{})}};K.defaultProps={};const dt=K;export{dt as default};
