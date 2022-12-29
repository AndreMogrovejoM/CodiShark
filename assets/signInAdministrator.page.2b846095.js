import{u as U,C as N,T as V,I as T,i as M}from"./index.esm.a42a9ed7.js";import{s as L,u as E,r as v,E as k,F as H,j as m,G as z,a as t,C as B}from"./index.409d64b6.js";import{l as R}from"./logoKonecta.d4689eab.js";import{B as j}from"./Button.174b4ab4.js";import{u as K}from"./i18n.hooks.103566ab.js";import{v as $,a as G,u as q,d as D,b as J,c as Q,e as X}from"./validations.utils.981dd957.js";const O="/CodiShark/assets/iconVerification.6c8c7197.svg",Z=L.div`
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
`,{ENTRY_PATH:tt}=B.ROUTES,F=C=>{const[n]=$(),l=G(),_=E(),{control:f,handleSubmit:c}=U(),[S,g]=v.exports.useState(!1),{setSignInStep:I,setUser:h}=k(),{mutateAsync:u,reset:A}=q(),[,b]=H("user"),o=K().signIn.SignInAdministrator.step1,s=async e=>{try{g(!0);const a={dni:e==null?void 0:e.dni,password:e==null?void 0:e.password},i=await u(a);if(A(),g(!1),"access_token"in i){const{user:r}=i!=null?i:{};D.setCookie("token",i==null?void 0:i.access_token),h(r),b(r),_(tt)}else{const{status:r}=i!=null?i:{};r===202&&(h({dni:e==null?void 0:e.dni}),I(1))}}catch{g(!1)}},p=m(z,{children:[t("h2",{className:"SignInAdministrator__title",children:o.welcome}),t("h3",{className:"SignInAdministrator__subTitle",children:o.greetings})]});return t(Z,{className:"SignInAdministrator",children:m("div",{className:"SignInAdministrator__container",children:[t("img",{src:R,alt:"logoKonecta",className:"SignInAdministrator__logo",width:154}),p,(()=>m("form",{onSubmit:c(s),className:"SignInAdministrator__form",children:[t(N,{name:n.name,control:f,rules:n.rules,defaultValue:"",render:({field:e,fieldState:a})=>t(V,{field:e,fields:a,className:"SignInAdministrator__textField",config:{type:n.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:o.user,InputProps:{startAdornment:t(T,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:M,alt:"iconUserAdministrator"})})}}})}),t(N,{name:l.name,control:f,rules:l.rules,defaultValue:"",render:({field:e,fieldState:a})=>t(V,{field:e,fields:a,className:"SignInAdministrator__textField",config:{type:l.type,label:"",variant:"filled",margin:"dense",placeholder:o.password,fullWidth:!0,focused:!0,InputProps:{startAdornment:t(T,{position:"start",children:t("img",{className:"SignInAdministrator__icon",src:O,alt:"iconPasswordAdministrator"})})}}})}),t(j,{variant:"contained",type:"submit",className:"SignInAdministrator__button",disabled:S,children:o.continue})]}))(),t("h4",{className:"SignInAdministrator__footerText",children:o.copyright})]})})};F.defaultProps={};const et=L.div`
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
`,{ENTRY_PATH:it}=B.ROUTES,W=C=>{const n=J(),{control:l,handleSubmit:_}=U(),[f,c]=v.exports.useState(!1),[,S]=Q("token","0"),[,g]=H("user"),{setSignInStep:I,setUser:h,user:u}=k(),{mutateAsync:A,reset:b}=X(),o=E(),[s,p]=v.exports.useState(""),d=K().signIn.SignInAdministrator.step2,e=async r=>{try{c(!0),p("");const y={dni:u==null?void 0:u.dni,password:r==null?void 0:r.code};await A(y).then(w=>{const{user:P,access_token:x}=w!=null?w:{};S(x!=null?x:""),h(P),g(P),b(),c(!1),I(0),o(it)})}catch{p("Credenciales incorrectas."),c(!1)}},a=m(z,{children:[t("h2",{className:"SignInAdministratorVerify__title",children:d.welcome}),t("h3",{className:"SignInAdministratorVerify__subTitle",children:d.code})]});return t(et,{className:"SignInAdministratorVerify",children:m("div",{className:"SignInAdministratorVerify__container",children:[t("img",{src:R,alt:"logoKonecta",className:"SignInAdministratorVerify__logo",width:154}),a,(()=>m("form",{onSubmit:_(e),className:"SignInAdministratorVerify__form",children:[t(N,{name:n.name,control:l,rules:n.rules,defaultValue:"",render:({field:r,fieldState:y})=>t(V,{field:r,fields:y,className:"SignInAdministratorVerify__textField",config:{type:n.type,label:"",variant:"filled",margin:"dense",fullWidth:!0,focused:!0,placeholder:d.place,InputProps:{startAdornment:t(T,{position:"start",children:t("img",{className:"SignInAdministratorVerify__icon",src:O,alt:"iconVerification"})})}}})}),(s==null?void 0:s.length)>0?t("h3",{className:"SignInAdministratorVerify__error",children:s}):null,t(j,{variant:"contained",type:"submit",disabled:f,className:"SignInAdministratorVerify__button",children:d.continue})]}))(),t("h4",{className:"SignInAdministratorVerify__footerText",children:d.copyright})]})})};W.defaultProps={};const Y=C=>{const{signInStep:n}=k();switch(n){case 0:return t(F,{});case 1:return t(W,{});default:return t(F,{})}};Y.defaultProps={};const mt=Y;export{mt as default};
