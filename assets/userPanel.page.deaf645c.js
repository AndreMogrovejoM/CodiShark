import{a,a4 as P,s as x,r as L,j as n,F as V}from"./index.ae857852.js";import{B as c}from"./Button.3397d7e5.js";import{R as l,a as N,S as v,P as k,f as h}from"./PaymentTable.helpers.4abc5c6f.js";import{u as C,L as D}from"./Layout.container.1a9069fe.js";import{g as $,u as U}from"./i18n.hooks.2e98684c.js";import{d as j,e as E,f as I}from"./administrator.service.hooks.d8dd4dad.js";import{C as S}from"./constants.03d913e0.js";import"./Table.a43017df.js";import"./validations.utils.9f4766dc.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.f81ba5ee.js";const T="/CodiShark/assets/usersIcon.6275cb21.svg",s=$().global.table.TablePaymentUser.TableHeader2,z=[{name:s.name,selector:t=>{var e;return(e=t.first_name)!=null?e:""},sortable:!0,cell:t=>a(l,{content:`${t.first_name} ${t.last_name}`,bold:!0})},{name:s.capitalDebt,selector:t=>{var e;return(e=t.capital_debt)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.capital_debt)!=null?e:""})}},{name:s.interests,selector:t=>{var e;return(e=t.interests)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.interests)!=null?e:0})}},{name:s.bills,selector:t=>{var e;return(e=t.bills)!=null?e:""},cell:t=>{var e;return a(l,{content:(e=t.bills)!=null?e:""})}},{name:s.punishmentDate,button:!0,cell:t=>{var e;return a(l,{content:(e=P(t.date_punishment).format("YY-MM-DD HH:mm a"))!=null?e:""})}},{name:s.action,button:!0,cell:t=>a(N,{row:t.id})}],{BREAKPOINTS:r}=S,A=x.div`
  .PaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${r.desktop}px) {
        margin: auto;
      }

      &--actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.6rem;
      }

      &--button {
        display: flex;
        gap: 0.8rem;
      }

      &--separate {
        margin-bottom: 1.6rem;
      }

      &--image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-bottom: 1.2rem;
      }

      &--layout {
        display: flex;
        gap: 1.6rem;
        flex-flow: row wrap;
        @media screen and (min-width: ${r.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${r.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${r.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${r.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${r.wide}px) {
          width: 70%;
        }
      }
    }

    &__component {
      &--button {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        border-radius: 0.8rem;
      }

      &--details {
        border-radius: 0.8rem;
        min-height: 40rem;
        height: 100%;
        background-color: var(--palette-white);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: unset;
      }

      &--subtitle {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--paragraph {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
`,w=t=>{const{data:e,isLoading:m}=j(1,50),{data:d}=e!=null?e:{},i=U().pages.UserPayPanel,{setIsLoading:p}=C();L.exports.useEffect(()=>{p(m)},[m,p]);const _=async()=>{try{const o=await E();h(o,"report.pdf")}catch{console.log("Error at trying to print pdf")}},y=async()=>{try{const o=await I();h(o,"report.csv")}catch{console.log("Error at trying to print excel")}},f=()=>n("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[n("div",{className:"PaymentListView__container--button",children:[a(c,{variant:"contained",className:"PaymentListView__component--button",onClick:_,children:i.buttonPdf}),a(c,{variant:"contained",className:"PaymentListView__component--button",onClick:y,children:i.buttonExcel}),a(c,{variant:"contained",className:"PaymentListView__component--button",onClick:()=>window.print(),children:i.buttonPrint})]}),a(v,{})]}),g=()=>n(V,{children:[a("h2",{className:"PaymentListView__text--subtitle PaymentListView__container--separate",children:i.titleDetails}),a("div",{className:"PaymentListView__component--details",children:n("div",{className:"PaymentListView__component--details-content",children:[a("img",{src:T,alt:"logoKonecta",className:"PaymentListView__container--image"}),a("p",{className:"PaymentListView__text--paragraph",children:i.paragraphDetails})]})})]});if(!d)return null;const b=()=>a(k,{data:d,columns:z});return a(A,{className:"PaymentListView ",children:n("div",{className:"PaymentListView__container",children:[a("div",{className:"PaymentListView__container--separate",children:a("h1",{className:"PaymentListView__text--title",children:i.title})}),n("div",{className:"PaymentListView__container--layout",children:[n("div",{className:"PaymentListView__container--table",children:[f(),b()]}),a("div",{className:"PaymentListView__container--details",children:g()})]})]})})};w.defaultProps={};const u=t=>a(D,{children:a(w,{})});u.defaultProps={};const Q=u;export{Q as default};
