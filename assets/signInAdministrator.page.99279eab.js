import{u as F,C as A,T as y,I as w,i as K}from"./index.esm.09c8c636.js";import{s as k,r as v,j as s,F as C,a as t,D as j,u as M}from"./index.c13680c4.js";import{B as P}from"./Button.54ea91a6.js";import{u as N,a as W,b as D,c as E}from"./auth.service.hooks.6523a2f5.js";import{u as L}from"./i18n.hooks.12df7c97.js";import{v as O,a as R,b as Y}from"./validations.utils.c5d8b35a.js";import{C as $}from"./constants.03d913e0.js";const U="/CodiShark/assets/iconVerification.6c8c7197.svg",z="/CodiShark/assets/logoKonecta.2c096629.png",q=k.div`
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
`,x=V=>{const[i]=O(),d=R(),{control:u,handleSubmit:f}=F(),[m,l]=v.exports.useState(!1),{setSignInStep:p,setUser:h}=N(),{mutateAsync:_,reset:c}=W(),n=L().signIn.SignInAdministrator.step1,S=async e=>{try{l(!0);const r={dni:e==null?void 0:e.dni,password:e==null?void 0:e.password};await _(r),c(),h({dni:e==null?void 0:e.dni}),l(!1),p(1)}catch{l(!1)}},I=s(C,{children:[t("h2",{className:"SignInAdministrator__title",children:n.welcome}),t("h3",{className:"SignInAdministrator__subTitle",children:n.greetings})]});return t(q,{className:"SignInAdministrator",children:s("div",{className:"SignInAdministrator__container",children:[t("img",{src:z,alt:"logoKonecta",className:"SignInAdministrator__logo",width:154}),I,(()=>s("form",{onSubmit:f(S),className:"SignInAdministrator__form",children:[t(A,{name:i.name,control:u,rules:i.rules,defaultValue:"",render:({field:e,fieldState:r})=>t(y,{field:e,fields:r,className:"SignInAdministrator__textField",config:{type:i.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:n.user,InputProps:{startAdornment:t(w,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:K,alt:"iconUserAdministrator"})})}}})}),t(A,{name:d.name,control:u,rules:d.rules,defaultValue:"",render:({field:e,fieldState:r})=>t(y,{field:e,fields:r,className:"SignInAdministrator__textField",config:{type:d.type,label:"",variant:"filled",margin:"dense",placeholder:n.password,fullWidth:!0,focused:!0,InputProps:{startAdornment:t(w,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:U,alt:"iconPasswordAdministrator"})})}}})}),t(P,{variant:"contained",type:"submit",className:"SignInAdministrator__button",disabled:m,children:n.continue})]}))(),t("h4",{className:"SignInAdministrator__footerText",children:n.copyright})]})})};x.defaultProps={};const G=k.div`
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
`,{ADMIN_ENTRY_PATH:J}=$.ROUTES,B=V=>{const i=Y(),{control:d,handleSubmit:u}=F(),[f,m]=v.exports.useState(!1),[,l]=D("token","0"),[,p]=j("user"),{setSignInStep:h,setUser:_,user:c}=N(),{mutateAsync:n,reset:S}=E(),I=M(),o=L().signIn.SignInAdministrator.step2,e=async g=>{try{m(!0);const b={dni:c==null?void 0:c.dni,password:g==null?void 0:g.code};await n(b).then(a=>{var T;l((T=a==null?void 0:a.token)!=null?T:""),delete a.token,_(a),p(a),S(),m(!1),h(0),I(J)})}catch{m(!1)}},r=s(C,{children:[t("h2",{className:"SignInAdministratorVerify__title",children:o.welcome}),t("h3",{className:"SignInAdministratorVerify__subTitle",children:o.code})]});return t(G,{className:"SignInAdministratorVerify",children:s("div",{className:"SignInAdministratorVerify__container",children:[t("img",{src:z,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),r,(()=>s("form",{onSubmit:u(e),className:"SignInAdministratorVerify__form",children:[t(A,{name:i.name,control:d,rules:i.rules,defaultValue:"",render:({field:g,fieldState:b})=>t(y,{field:g,fields:b,className:"SignInAdministratorVerify__textField",config:{type:i.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:o.place,InputProps:{startAdornment:t(w,{position:"start",children:t("img",{className:"SignInAdministratorVerify__icon",src:U,alt:"iconVerification"})})}}})}),t(P,{variant:"contained",type:"submit",disabled:f,className:"SignInAdministratorVerify__button",children:o.continue})]}))(),t("h4",{className:"SignInAdministratorVerify__footerText",children:o.copyright})]})})};B.defaultProps={};const H=V=>{const{signInStep:i}=N();switch(i){case 0:return t(x,{});case 1:return t(B,{});default:return t(x,{})}};H.defaultProps={};const ot=H;export{ot as default};
