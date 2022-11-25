import{a as n,a4 as P,s as x,r as L,j as a,F as V}from"./index.dca11cd2.js";import{B as c}from"./Button.b0ef1397.js";import{R as l,a as N,S as v,P as D,f as h}from"./PaymentTable.helpers.62ff0443.js";import{u as $,L as k}from"./Layout.container.bc38d7d7.js";import{g as C,u as U}from"./i18n.hooks.49042583.js";import{d as j,e as E,f as I}from"./administrator.service.hooks.3085f5d2.js";import{C as T}from"./constants.03d913e0.js";import"./Table.77eaf525.js";import"./validations.utils.670bba51.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.7ae8d686.js";const S="/assets/usersIcon.6275cb21.svg",s=C().global.table.TablePaymentUser.TableHeader2,z=[{name:s.name,selector:t=>{var e;return(e=t.first_name)!=null?e:""},sortable:!0,cell:t=>n(l,{content:`${t.first_name} ${t.last_name}`,bold:!0})},{name:s.capitalDebt,selector:t=>{var e;return(e=t.capital_debt)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return n(l,{content:(e=t.capital_debt)!=null?e:""})}},{name:s.interests,selector:t=>{var e;return(e=t.interests)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return n(l,{content:(e=t.interests)!=null?e:0})}},{name:s.bills,selector:t=>{var e;return(e=t.bills)!=null?e:""},cell:t=>{var e;return n(l,{content:(e=t.bills)!=null?e:""})}},{name:s.punishmentDate,button:!0,cell:t=>{var e;return n(l,{content:(e=P(t.date_punishment).format("YY-MM-DD HH:mm a"))!=null?e:""})}},{name:s.action,button:!0,cell:t=>n(N,{row:t.id})}],{BREAKPOINTS:r}=T,A=x.div`
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
`,w=t=>{const{data:e,isLoading:m}=j(1,50),{data:d}=e!=null?e:{},i=U().pages.UserPayPanel,{setIsLoading:p}=$();L.exports.useEffect(()=>{p(m)},[m,p]);const _=async()=>{try{const o=await E();h(o,"report.pdf")}catch{console.log("Error at trying to print pdf")}},y=async()=>{try{const o=await I();h(o,"report.csv")}catch{console.log("Error at trying to print excel")}},f=()=>a("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[a("div",{className:"PaymentListView__container--button",children:[n(c,{variant:"contained",className:"PaymentListView__component--button",onClick:_,children:i.buttonPdf}),n(c,{variant:"contained",className:"PaymentListView__component--button",onClick:y,children:i.buttonExcel}),n(c,{variant:"contained",className:"PaymentListView__component--button",onClick:()=>window.print(),children:i.buttonPrint})]}),n(v,{})]}),g=()=>a(V,{children:[n("h2",{className:"PaymentListView__text--subtitle PaymentListView__container--separate",children:i.titleDetails}),n("div",{className:"PaymentListView__component--details",children:a("div",{className:"PaymentListView__component--details-content",children:[n("img",{src:S,alt:"logoKonecta",className:"PaymentListView__container--image"}),n("p",{className:"PaymentListView__text--paragraph",children:i.paragraphDetails})]})})]});if(!d)return null;const b=()=>n(D,{data:d,columns:z});return n(A,{className:"PaymentListView ",children:a("div",{className:"PaymentListView__container",children:[n("div",{className:"PaymentListView__container--separate",children:n("h1",{className:"PaymentListView__text--title",children:i.title})}),a("div",{className:"PaymentListView__container--layout",children:[a("div",{className:"PaymentListView__container--table",children:[f(),b()]}),n("div",{className:"PaymentListView__container--details",children:g()})]})]})})};w.defaultProps={};const u=t=>n(k,{children:n(w,{})});u.defaultProps={};const Q=u;export{Q as default};
