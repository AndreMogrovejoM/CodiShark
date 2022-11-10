import{o as u,_ as l,y as k,r as C,n as L,a as t,s as v,j as s,F as A}from"./index.80754d7e.js";import{B as O,l as z}from"./auth.service.hooks.1fa44497.js";import{b as $,g as S,s as I,u as M,d as F,e as D,c as E}from"./constants.8b736939.js";import{L as q}from"./Layout.container.107bc946.js";import"./Typography.60331664.js";function J(e){return S("MuiIconButton",e)}const W=$("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),G=W,K=["edge","children","className","color","disabled","disableFocusRipple","size"],Q=e=>{const{classes:a,disabled:r,color:o,edge:n,size:c}=e,d={root:["root",r&&"disabled",o!=="default"&&`color${u(o)}`,n&&`edge${u(n)}`,`size${u(c)}`]};return D(d,J,a)},V=I(O,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.color!=="default"&&a[`color${u(r.color)}`],r.edge&&a[`edge${u(r.edge)}`],a[`size${u(r.size)}`]]}})(({theme:e,ownerState:a})=>l({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:k(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:e,ownerState:a})=>l({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&l({color:(e.vars||e).palette[a.color].main},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:k(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),a.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${G.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})),X=C.exports.forwardRef(function(a,r){const o=M({props:a,name:"MuiIconButton"}),{edge:n=!1,children:c,className:d,color:i="default",disabled:m=!1,disableFocusRipple:_=!1,size:p="medium"}=o,g=L(o,K),b=l({},o,{edge:n,color:i,disabled:m,disableFocusRipple:_,size:p}),y=Q(b);return t(V,l({className:F(y.root,d),centerRipple:!0,focusRipple:!_,disabled:m,ref:r,ownerState:b},g,{children:c}))}),Y=X,Z=E(t("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ee(e){return S("MuiAvatar",e)}$("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ae=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],te=e=>{const{classes:a,variant:r,colorDefault:o}=e;return D({root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]},ee,a)},re=I("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.colorDefault&&a.colorDefault]}})(({theme:e,ownerState:a})=>l({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),oe=I("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),se=I(Z,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function ne({crossOrigin:e,referrerPolicy:a,src:r,srcSet:o}){const[n,c]=C.exports.useState(!1);return C.exports.useEffect(()=>{if(!r&&!o)return;c(!1);let d=!0;const i=new Image;return i.onload=()=>{!d||c("loaded")},i.onerror=()=>{!d||c("error")},i.crossOrigin=e,i.referrerPolicy=a,i.src=r,o&&(i.srcset=o),()=>{d=!1}},[e,a,r,o]),n}const ie=C.exports.forwardRef(function(a,r){const o=M({props:a,name:"MuiAvatar"}),{alt:n,children:c,className:d,component:i="div",imgProps:m,sizes:_,src:p,srcSet:g,variant:b="circular"}=o,y=L(o,ae);let h=null;const H=ne(l({},m,{src:p,srcSet:g})),w=p||g,R=w&&H!=="error",x=l({},o,{colorDefault:!R,component:i,variant:b}),N=te(x);return R?h=t(oe,l({alt:n,src:p,srcSet:g,sizes:_,ownerState:x,className:N.img},m)):c!=null?h=c:w&&n?h=n[0]:h=t(se,{className:N.fallback}),t(re,l({as:i,ownerState:x,className:F(N.root,d),ref:r},y,{children:h}))}),le=ie,ce=v.div`
  background-color: var(--palette-white);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 49.4%;
  height: 6.4rem;
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;

  .InfoCard {
    &__title {
      font-weight: 700;
      line-height: 1.6rem;
      font-size: 1rem;
    }

    &__subtitle {
      font-weight: 600;
      color: var(--palette-primary);
      line-height: 2.4rem;
      font-size: 2rem;
    }
  }
`,f=e=>{const{title:a,value:r}=e;return t(ce,{className:"InfoCard",children:s("div",{className:"InfoCard__container",children:[t("h2",{className:"InfoCard__title",children:a}),t("h2",{className:"InfoCard__subtitle",children:r})]})})};f.defaultProps={};const de=v.div`
  width: 72rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.8rem;
  margin-top: 2.4rem;

  .Indicators {
    &__title {
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 2.4rem;
    }

    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      width: 100%;
    }

    &__spanContainer {
      margin-top: 1.6rem;
      margin-bottom: 0.8rem;
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
    }

    &__span {
      font-weight: 700;
      display: block;
      width: 8rem;
      border-radius: 0.8rem;
      background-color: var(--palette-primary);
      text-align: center;
      padding: 0.4rem 0;
    }
  }
`,j=e=>{const a=z().signIn.Indicator,r=s(A,{children:[t("h3",{className:"Indicators__title",children:a.title}),s("div",{className:"Indicators__spanContainer",children:[t("span",{className:"Indicators__span",children:a.month}),t("span",{className:"Indicators__span",children:a.year}),t("span",{className:"Indicators__span",children:a.day})]})]});return s(de,{className:"Indicators",children:[r,s("div",{className:"Indicators__cardsContainer",children:[t(f,{title:a.card1,value:"S/. 37,850.00"}),t(f,{title:a.card2,value:"2,350"}),t(f,{title:a.card3,value:"114"}),t(f,{title:a.card4,value:"65"})]})]})};j.defaultProps={};const ue=v.div`
  width: 40rem;
  height: 32.8rem;
  background-color: var(--palette-white);
  display: flex;
  align-items: center;
  .LastProcessCard {
    &__title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.6rem;
    }

    &__subtitle {
      font-weight: 600;
      line-height: 1.6rem;
    }

    &__name {
      font-weight: 700;
      line-height: 1.6rem;
    }
  }
`,B=e=>{const a=z().signIn.AdministratorPanel,{title:r}=e,o=()=>s("div",{children:[t(le,{}),t("h2",{className:"LastProcessCard__name",children:"Jorge Lopez"})]}),n=()=>s("div",{children:[t("h3",{children:"S/. 565.00"}),t(Y,{})]});return s(ue,{className:"LastProcessCard",children:[t("h1",{className:"LastProcessCard__title",children:r}),s("div",{children:[s("div",{className:"LastProcessCard__container",children:[t("h3",{className:"LastProcessCard__subtitle",children:"Nombres del cliente"}),s("div",{className:"LastProcessCard__names",children:[o(),o(),o(),o()]})]}),s("div",{className:"LastProcessCard__debs",children:[t("h3",{className:"LastProcessCard__subtitledev",children:"Monto de deuda"}),n(),n(),n(),n()]})]}),t("h3",{className:"LastProcessCard__footerSubtitle",onClick:()=>{},children:a.footerTitle})]})};B.defaultProps={};const me="/CodiShark/assets/LogoPanelBanner.e7f4da7d.svg",pe=v.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  height: 7.2rem;

  .InfoPanelBanner {
    &__title {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 1.6rem;
    }
  }
`,P=e=>{const{value:a,subtitle:r}=e;return s(pe,{className:"InfoPanelBanner",children:[t("h2",{className:"InfoPanelBanner__title",children:a}),t("h2",{className:"InfoPanelBanner__subtitle",children:r})]})};P.defaultProps={};const ge=v.div`
  width: 72rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-primary);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  position: relative;

  .PanelBanner {
    &__title {
      color: var(--palette-white);
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-bottom: 0.2rem;
    }

    &__subtitle {
      color: var(--palette-white);
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.2rem;
    }

    &__textContent {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 40%;
      margin-top: 1.2rem;
    }

    &__image {
      position: absolute;
      top: 0;
      right: 2.4rem;
      width: 12.4rem;
    }
  }
`,U=e=>s(ge,{className:"PanelBanner",children:[s(A,{children:[t("h2",{className:"PanelBanner__title",children:"Hola Armando"}),t("h4",{className:"PanelBanner__subtitle",children:"Esta es la actividad de este mes:"})]}),s("div",{className:"PanelBanner__textContent",children:[t(P,{subtitle:"Ingresos",value:200}),t(P,{subtitle:"Pagos registrados",value:41}),t(P,{subtitle:"Solicitudes de llamadas",value:20})]}),t("img",{className:"PanelBanner__image",src:me,alt:"LogoPanelBanner"})]});U.defaultProps={};const T=e=>{const a=z().signIn.AdministratorPanel;return s(q,{children:[t(U,{}),t(j,{}),s("div",{children:[t(B,{title:a.charges1}),t(B,{title:a.charges2})]})]})};T.defaultProps={};const Pe=T;export{Pe as default};
