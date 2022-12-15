import{u as U,C as x,T as V,I as T,i as W}from"./index.esm.96f2189a.js";import{s as L,u as E,r as v,E as k,F as H,j as m,G as z,a as t,C as B}from"./index.78f16c0f.js";import{l as M}from"./logoKonecta.83374eb9.js";import{B as R}from"./Button.f3688821.js";import{u as j}from"./i18n.hooks.dcfdf754.js";import{u as Y,d as $,a as G,b as q}from"./auth.service.hooks.59ab2c5f.js";import{v as J,a as Q,b as X}from"./validations.utils.0743643c.js";const D="/CodiShark/assets/iconVerification.6c8c7197.svg",Z=L.div`
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
`,{ADMIN_ENTRY_PATH:tt}=B.ROUTES,F=C=>{const[n]=J(),l=Q(),p=E(),{control:f,handleSubmit:c}=U(),[S,g]=v.exports.useState(!1),{setSignInStep:I,setUser:h}=k(),{mutateAsync:u,reset:A}=Y(),[,b]=H("user"),o=j().signIn.SignInAdministrator.step1,s=async e=>{try{g(!0);const a={dni:e==null?void 0:e.dni,password:e==null?void 0:e.password},r=await u(a);if(A(),g(!1),"access_token"in r){const{user:i}=r!=null?r:{};$.setCookie("token",r==null?void 0:r.access_token),h(i),b(i),p(tt)}else{const{status:i}=r!=null?r:{};i===202&&(h({dni:e==null?void 0:e.dni}),I(1))}}catch{g(!1)}},_=m(z,{children:[t("h2",{className:"SignInAdministrator__title",children:o.welcome}),t("h3",{className:"SignInAdministrator__subTitle",children:o.greetings})]});return t(Z,{className:"SignInAdministrator",children:m("div",{className:"SignInAdministrator__container",children:[t("img",{src:M,alt:"logoKonecta",className:"SignInAdministrator__logo",width:154}),_,(()=>m("form",{onSubmit:c(s),className:"SignInAdministrator__form",children:[t(x,{name:n.name,control:f,rules:n.rules,defaultValue:"",render:({field:e,fieldState:a})=>t(V,{field:e,fields:a,className:"SignInAdministrator__textField",config:{type:n.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:o.user,InputProps:{startAdornment:t(T,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:W,alt:"iconUserAdministrator"})})}}})}),t(x,{name:l.name,control:f,rules:l.rules,defaultValue:"",render:({field:e,fieldState:a})=>t(V,{field:e,fields:a,className:"SignInAdministrator__textField",config:{type:l.type,label:"",variant:"filled",margin:"dense",placeholder:o.password,fullWidth:!0,focused:!0,InputProps:{startAdornment:t(T,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:D,alt:"iconPasswordAdministrator"})})}}})}),t(R,{variant:"contained",type:"submit",className:"SignInAdministrator__button",disabled:S,children:o.continue})]}))(),t("h4",{className:"SignInAdministrator__footerText",children:o.copyright})]})})};F.defaultProps={};const et=L.div`
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
`,{ADMIN_ENTRY_PATH:rt}=B.ROUTES,K=C=>{const n=X(),{control:l,handleSubmit:p}=U(),[f,c]=v.exports.useState(!1),[,S]=G("token","0"),[,g]=H("user"),{setSignInStep:I,setUser:h,user:u}=k(),{mutateAsync:A,reset:b}=q(),o=E(),[s,_]=v.exports.useState(""),d=j().signIn.SignInAdministrator.step2,e=async i=>{try{c(!0),_("");const y={dni:u==null?void 0:u.dni,password:i==null?void 0:i.code};await A(y).then(w=>{const{user:P,access_token:N}=w!=null?w:{};S(N!=null?N:""),h(P),g(P),b(),c(!1),I(0),o(rt)})}catch{_("Credenciales incorrectas."),c(!1)}},a=m(z,{children:[t("h2",{className:"SignInAdministratorVerify__title",children:d.welcome}),t("h3",{className:"SignInAdministratorVerify__subTitle",children:d.code})]});return t(et,{className:"SignInAdministratorVerify",children:m("div",{className:"SignInAdministratorVerify__container",children:[t("img",{src:M,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),a,(()=>m("form",{onSubmit:p(e),className:"SignInAdministratorVerify__form",children:[t(x,{name:n.name,control:l,rules:n.rules,defaultValue:"",render:({field:i,fieldState:y})=>t(V,{field:i,fields:y,className:"SignInAdministratorVerify__textField",config:{type:n.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:d.place,InputProps:{startAdornment:t(T,{position:"start",children:t("img",{className:"SignInAdministratorVerify__icon",src:D,alt:"iconVerification"})})}}})}),(s==null?void 0:s.length)>0?t("h3",{className:"SignInAdministratorVerify__error",children:s}):null,t(R,{variant:"contained",type:"submit",disabled:f,className:"SignInAdministratorVerify__button",children:d.continue})]}))(),t("h4",{className:"SignInAdministratorVerify__footerText",children:d.copyright})]})})};K.defaultProps={};const O=C=>{const{signInStep:n}=k();switch(n){case 0:return t(F,{});case 1:return t(K,{});default:return t(F,{})}};O.defaultProps={};const lt=O;export{lt as default};