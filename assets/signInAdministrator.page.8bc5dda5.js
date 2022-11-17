import{u as v,C as b,T as A,I as y,i as j}from"./index.esm.320823a5.js";import{s as F,r as k,j as s,N as P,a as t,u as K}from"./index.af6bbb0b.js";import{B as C}from"./Button.5866c70b.js";import{j as x,n as M,p as O,q as W}from"./auth.service.hooks.fb4b15b1.js";import{e as z}from"./i18n.hooks.5f64c281.js";import{v as E,a as R,b as q}from"./validations.utils.13d81b51.js";import{C as D}from"./constants.00022566.js";const B="/assets/iconVerification.6c8c7197.svg",L="/assets/logoKonecta.c9be14ef.svg",J=F.div`
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
      width: 16rem;
      height: 4.8rem;
    }
  }
`,w=N=>{const[i]=E(),d=R(),{control:f,handleSubmit:h}=v(),[m,l]=k.exports.useState(!1),{setSignInStep:p,setUser:u}=x(),{mutateAsync:c,reset:_}=M(),n=z().signIn.SignInAdministrator.step1,S=async e=>{try{l(!0);const o={dni:e==null?void 0:e.dni,password:e==null?void 0:e.password};await c(o),_(),u({dni:e==null?void 0:e.dni}),l(!1),p(1)}catch{l(!1)}},r=s(P,{children:[t("h2",{className:"SignInAdministrator__title",children:n.welcome}),t("h3",{className:"SignInAdministrator__subTitle",children:n.greetings})]});return t(J,{className:"SignInAdministrator",children:s("div",{className:"SignInAdministrator__container",children:[t("img",{src:L,alt:"logoKonecta",className:"SignInAdministrator__logo"}),r,(()=>s("form",{onSubmit:h(S),className:"SignInAdministrator__form",children:[t(b,{name:i.name,control:f,rules:i.rules,defaultValue:"",render:({field:e,fieldState:o})=>t(A,{field:e,fields:o,className:"SignInAdministrator__textField",config:{type:i.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:n.user,InputProps:{startAdornment:t(y,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:j,alt:"iconUserAdministrator"})})}}})}),t(b,{name:d.name,control:f,rules:d.rules,defaultValue:"",render:({field:e,fieldState:o})=>t(A,{field:e,fields:o,className:"SignInAdministrator__textField",config:{type:d.type,label:"",variant:"filled",margin:"dense",placeholder:n.password,fullWidth:!0,focused:!0,InputProps:{startAdornment:t(y,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:B,alt:"iconPasswordAdministrator"})})}}})}),t(C,{variant:"contained",type:"submit",className:"SignInAdministrator__button",disabled:m,children:n.continue})]}))(),t("h4",{className:"SignInAdministrator__footerText",children:n.copyright})]})})};w.defaultProps={};const Y=F.div`
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
`,{ADMIN_ENTRY_PATH:$}=D.ROUTES,U=N=>{const i=q(),{control:d,handleSubmit:f}=v(),[h,m]=k.exports.useState(!1),[,l]=O("token","0"),{setSignInStep:p,setUser:u,user:c}=x(),{mutateAsync:_,reset:n}=W(),S=K(),r=z().signIn.SignInAdministrator.step2,V=async g=>{try{m(!0);const I={dni:c==null?void 0:c.dni,password:g==null?void 0:g.code};await _(I).then(a=>{var T;l((T=a==null?void 0:a.token)!=null?T:""),delete a.token,u(a),window.localStorage.setItem("user",JSON.stringify(a)),n(),m(!1),p(0),S($)})}catch{m(!1)}},e=s(P,{children:[t("h2",{className:"SignInAdministratorVerify__title",children:r.welcome}),t("h3",{className:"SignInAdministratorVerify__subTitle",children:r.code})]});return t(Y,{className:"SignInAdministratorVerify",children:s("div",{className:"SignInAdministratorVerify__container",children:[t("img",{src:L,alt:"logoKonecta",className:"SignInAdministratorVerify__logo"}),e,(()=>s("form",{onSubmit:f(V),className:"SignInAdministratorVerify__form",children:[t(b,{name:i.name,control:d,rules:i.rules,defaultValue:"",render:({field:g,fieldState:I})=>t(A,{field:g,fields:I,className:"SignInAdministratorVerify__textField",config:{type:i.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:r.place,InputProps:{startAdornment:t(y,{position:"start",children:t("img",{className:"SignInAdministratorVerify__icon",src:B,alt:"iconVerification"})})}}})}),t(C,{variant:"contained",type:"submit",disabled:h,className:"SignInAdministratorVerify__button",children:r.continue})]}))(),t("h4",{className:"SignInAdministratorVerify__footerText",children:r.copyright})]})})};U.defaultProps={};const H=N=>{const{signInStep:i}=x();switch(i){case 0:return t(w,{});case 1:return t(U,{});default:return t(w,{})}};H.defaultProps={};const nt=H;export{nt as default};
