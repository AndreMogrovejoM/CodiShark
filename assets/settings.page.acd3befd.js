import{r as o,s as N,E as j,j as l,a as e,G as B}from"./index.7494b9e3.js";import{B as u}from"./Button.1ffb1947.js";import{u as G,L}from"./Layout.container.b855285e.js";import{u as k}from"./i18n.hooks.710219a4.js";import{l as z,m as U,n as A}from"./administrator.service.hooks.363c98d6.js";import{S as p}from"./sweetalert2.all.b54987f9.js";import"./validations.utils.3b06e1db.js";import"./Box.77cdc8b2.js";const F="/CodiShark/assets/google2fa.d2edd917.svg",I=i=>{const a=o.exports.useRef(!1);o.exports.useEffect(()=>{if(a.current)return;const s=i();return()=>{a.current=!0,s==null||s()}},[i])},P=N.div`
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
`,h=i=>{const{mutateAsync:a,reset:s,isLoading:d,isError:m}=z(),[f,x]=o.exports.useState(""),[_,S]=o.exports.useState(""),{user:c}=j(),{setIsLoading:g}=G(),t=k().global.settings,{google2fa_enable:n}=c!=null?c:{},v=o.exports.useCallback(async()=>{try{await a().then(r=>{const{google2FaUrl:b,secretCode:E}=r!=null?r:{};x(b),S(E),s()})}catch(r){console.warn(r)}},[a,s]);I(()=>{setTimeout(()=>{v()},2e3)}),o.exports.useEffect(()=>{m&&window.location.reload()},[m]);const y=async()=>{try{p.fire(t.success,t.cancelled,"success"),await U().catch()}catch(r){console.warn(r)}},C=async()=>{try{p.fire(t.success,t.confirmed,"success"),n||await A().catch()}catch(r){console.warn(r)}};return o.exports.useEffect(()=>{g(d)},[d,g]),l(P,{className:"Settings",children:[e("h1",{children:t.title}),e("p",{children:t.description}),n&&l(B,{children:[e("h1",{className:"Settings__done",children:t.done}),e("img",{src:F,alt:"google2fa",className:"Settings__2faEnabled",width:520})]}),!n&&e("h2",{children:_}),!n&&f&&e("svg",{width:"256",height:"256",viewBox:"0 0 256 256",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:e("g",{transform:"scale(6.082)",children:e("g",{transform:"translate(0,0)",children:e("path",{fillRule:"evenodd",d:f.split("d=")[1].split('"')[1]})})})}),l("div",{className:"Settings__buttons",children:[n&&e(u,{variant:"outlined",onClick:y,fullWidth:!0,children:t.cancel}),!n&&e(u,{variant:"contained",onClick:C,fullWidth:!0,children:e("p",{className:"Settings__p",children:t.confirm})})]}),e("p",{className:"Settings__note",children:t.note})]})};h.defaultProps={};const w=i=>e(L,{children:e(h,{})});w.defaultProps={};const H=w;export{H as default};
