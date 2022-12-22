import{r as o,s as b,E as j,j as l,a as t,G as N}from"./index.9af5e57e.js";import{B as f}from"./Button.cf3005dc.js";import{u as B,L as E}from"./Layout.container.9056670d.js";import{u as G}from"./i18n.hooks.95fc6568.js";import{j as L,k,l as z}from"./administrator.service.hooks.bcfacd4a.js";import{S as u}from"./sweetalert2.all.96059b0d.js";import"./auth.service.hooks.6abcf1c4.js";const U="/CodiShark/assets/google2fa.d2edd917.svg",A=a=>{const i=o.exports.useRef(!1);o.exports.useEffect(()=>{if(i.current)return;const n=a();return()=>{i.current=!0,n==null||n()}},[a])},F=b.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & > h1 {
    font-size: 2.2rem;
    color: var(--palette-deepBlue);
    margin-bottom: 4.8rem;
    text-transform: none;
  }

  & > h2 {
    font-size: 2.8rem;
    color: var(--palette-primary);
    margin-bottom: 4.8rem;
  }

  & > p {
    font-size: 1.6rem;
    color: var(--palette-grayTextBold);
    margin-bottom: 4.8rem;
    width: 64%;
    text-align: justify;
  }

  .Settings {
    &__buttons {
      display: flex;
      justify-content: space-around;
      width: 24%;
      margin-top: 2.4rem;
      gap: 1.6rem;
    }

    &__done {
      color: var(--palette-primary);
    }

    &__p {
      color: var(--palette-white);
    }

    &__note {
      margin-top: 3.2rem;
      text-align: center;
    }
  }
`,h=a=>{const{mutateAsync:i,reset:n,isLoading:d}=L(),[m,_]=o.exports.useState(""),[w,S]=o.exports.useState(""),{user:c}=j(),{setIsLoading:g}=B(),e=G().global.settings,{google2fa_enable:s}=c!=null?c:{};A(()=>{(async()=>{try{await i().then(r=>{const{google2FaUrl:y,secretCode:C}=r!=null?r:{};_(y),S(C),n()})}catch(r){console.warn(r)}})()});const v=async()=>{try{u.fire(e.success,e.cancelled,"success"),await k().catch()}catch(r){console.warn(r)}},x=async()=>{try{u.fire(e.success,e.confirmed,"success"),s||await z().catch()}catch(r){console.warn(r)}};return o.exports.useEffect(()=>{g(d)},[d,g]),l(F,{className:"Settings",children:[t("h1",{children:e.title}),t("p",{children:e.description}),s&&l(N,{children:[t("h1",{className:"Settings__done",children:e.done}),t("img",{src:U,alt:"google2fa",className:"Settings__2faEnabled",width:520})]}),!s&&t("h2",{children:w}),!s&&m&&t("svg",{width:"256",height:"256",viewBox:"0 0 256 256",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:t("g",{transform:"scale(6.082)",children:t("g",{transform:"translate(0,0)",children:t("path",{fillRule:"evenodd",d:m.split("d=")[1].split('"')[1]})})})}),l("div",{className:"Settings__buttons",children:[s&&t(f,{variant:"outlined",onClick:v,fullWidth:!0,children:e.cancel}),!s&&t(f,{variant:"contained",onClick:x,fullWidth:!0,children:t("p",{className:"Settings__p",children:e.confirm})})]}),t("p",{className:"Settings__note",children:e.note})]})};h.defaultProps={};const p=a=>t(E,{children:t(h,{})});p.defaultProps={};const $=p;export{$ as default};
