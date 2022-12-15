import{B as u}from"./Button.f3688821.js";import{r as s,s as b,E as j,j as f,a as t}from"./index.78f16c0f.js";import{u as B,L}from"./Layout.container.47df2272.js";import{u as N}from"./i18n.hooks.dcfdf754.js";import{i as z,j as E,k as G}from"./administrator.service.hooks.be75dbfe.js";import{S as p}from"./sweetalert2.all.7a9ac31e.js";import"./auth.service.hooks.59ab2c5f.js";import"./useQuery.78699b7d.js";const U=o=>{const a=s.exports.useRef(!1);s.exports.useEffect(()=>{if(a.current)return;const n=o();return()=>{a.current=!0,n==null||n()}},[o])},k=b.div`
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

    &__p {
      color: var(--palette-white);
    }

    &__note {
      margin-top: 3.2rem;
      text-align: center;
    }
  }
`,g=o=>{const{mutateAsync:a,reset:n,isLoading:c}=z(),[l,w]=s.exports.useState(""),[x,y]=s.exports.useState(""),{user:i}=j(),{setIsLoading:d}=B(),e=N().global.settings,{google2fa_enable:m}=i!=null?i:{};U(()=>{(async()=>{try{await a().then(r=>{const{google2FaUrl:_,secretCode:C}=r!=null?r:{};w(_),y(C),n()})}catch(r){console.warn(r)}})()});const v=async()=>{try{p.fire(e.success,e.cancelled,"success"),await E().catch()}catch(r){console.warn(r)}},S=async()=>{try{p.fire(e.success,e.confirmed,"success"),m||await G().catch()}catch(r){console.warn(r)}};return s.exports.useEffect(()=>{d(c)},[c,d]),f(k,{className:"Settings",children:[t("h1",{children:e.title}),t("p",{children:e.description}),t("h2",{children:x}),l&&t("svg",{width:"256",height:"256",viewBox:"0 0 256 256",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:t("g",{transform:"scale(6.082)",children:t("g",{transform:"translate(0,0)",children:t("path",{fillRule:"evenodd",d:l.split("d=")[1].split('"')[1]})})})}),f("div",{className:"Settings__buttons",children:[m&&t(u,{variant:"outlined",onClick:v,fullWidth:!0,children:e.cancel}),t(u,{variant:"contained",onClick:S,fullWidth:!0,children:t("p",{className:"Settings__p",children:e.confirm})})]}),t("p",{className:"Settings__note",children:e.note})]})};g.defaultProps={};const h=o=>t(L,{children:t(g,{})});h.defaultProps={};const T=h;export{T as default};
