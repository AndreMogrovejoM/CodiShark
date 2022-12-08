import{u as P,l as C,C as y,T as w,I as N,i as j}from"./index.esm.e5561211.js";import{s as k,u as U,r as H,j as s,F as L,a as t,D as K}from"./index.2f653318.js";import{B as z}from"./Button.9791698f.js";import{C as B}from"./constants.73c1594c.js";import{u as V,a as O,b as W,c as Y}from"./auth.service.hooks.d7adf4c7.js";import{u as E}from"./i18n.hooks.9e0e4506.js";import{v as $,a as q,b as G}from"./validations.utils.2d9e7188.js";const M="/CodiShark/assets/iconVerification.6c8c7197.svg",J=k.div`
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
`,{ADMIN_ENTRY_PATH:Q}=B.ROUTES,x=T=>{const[i]=$(),d=q(),p=U(),{control:u,handleSubmit:m}=P(),[h,l]=H.exports.useState(!1),{setSignInStep:f,setUser:_}=V(),{mutateAsync:c,reset:S}=O(),n=E().signIn.SignInAdministrator.step1,I=async e=>{try{l(!0);const a={dni:e==null?void 0:e.dni,password:e==null?void 0:e.password},r=await c(a);S();const{status:g}=r!=null?r:{};l(!1),g===202?(_({dni:e==null?void 0:e.dni}),f(1)):(f(0),p(Q))}catch{l(!1)}},o=s(L,{children:[t("h2",{className:"SignInAdministrator__title",children:n.welcome}),t("h3",{className:"SignInAdministrator__subTitle",children:n.greetings})]});return t(J,{className:"SignInAdministrator",children:s("div",{className:"SignInAdministrator__container",children:[t("img",{src:C,alt:"logoKonecta",className:"SignInAdministrator__logo",width:154}),o,(()=>s("form",{onSubmit:m(I),className:"SignInAdministrator__form",children:[t(y,{name:i.name,control:u,rules:i.rules,defaultValue:"",render:({field:e,fieldState:a})=>t(w,{field:e,fields:a,className:"SignInAdministrator__textField",config:{type:i.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:n.user,InputProps:{startAdornment:t(N,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:j,alt:"iconUserAdministrator"})})}}})}),t(y,{name:d.name,control:u,rules:d.rules,defaultValue:"",render:({field:e,fieldState:a})=>t(w,{field:e,fields:a,className:"SignInAdministrator__textField",config:{type:d.type,label:"",variant:"filled",margin:"dense",placeholder:n.password,fullWidth:!0,focused:!0,InputProps:{startAdornment:t(N,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:M,alt:"iconPasswordAdministrator"})})}}})}),t(z,{variant:"contained",type:"submit",className:"SignInAdministrator__button",disabled:h,children:n.continue})]}))(),t("h4",{className:"SignInAdministrator__footerText",children:n.copyright})]})})};x.defaultProps={};const X=k.div`
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
  }
`,{ADMIN_ENTRY_PATH:Z}=B.ROUTES,R=T=>{const i=G(),{control:d,handleSubmit:p}=P(),[u,m]=H.exports.useState(!1),[,h]=W("token","0"),[,l]=K("user"),{setSignInStep:f,setUser:_,user:c}=V(),{mutateAsync:S,reset:n}=Y(),I=U(),o=E().signIn.SignInAdministrator.step2,F=async r=>{try{m(!0);const g={dni:c==null?void 0:c.dni,password:r==null?void 0:r.code};await S(g).then(A=>{const{user:v,access_token:b}=A!=null?A:{};h(b!=null?b:""),_(v),l(v),n(),m(!1),f(0),I(Z)})}catch{m(!1)}},e=s(L,{children:[t("h2",{className:"SignInAdministratorVerify__title",children:o.welcome}),t("h3",{className:"SignInAdministratorVerify__subTitle",children:o.code})]});return t(X,{className:"SignInAdministratorVerify",children:s("div",{className:"SignInAdministratorVerify__container",children:[t("img",{src:C,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),e,(()=>s("form",{onSubmit:p(F),className:"SignInAdministratorVerify__form",children:[t(y,{name:i.name,control:d,rules:i.rules,defaultValue:"",render:({field:r,fieldState:g})=>t(w,{field:r,fields:g,className:"SignInAdministratorVerify__textField",config:{type:i.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:o.place,InputProps:{startAdornment:t(N,{position:"start",children:t("img",{className:"SignInAdministratorVerify__icon",src:M,alt:"iconVerification"})})}}})}),t(z,{variant:"contained",type:"submit",disabled:u,className:"SignInAdministratorVerify__button",children:o.continue})]}))(),t("h4",{className:"SignInAdministratorVerify__footerText",children:o.copyright})]})})};R.defaultProps={};const D=T=>{const{signInStep:i}=V();switch(i){case 0:return t(x,{});case 1:return t(R,{});default:return t(x,{})}};D.defaultProps={};const st=D;export{st as default};
