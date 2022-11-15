import{a,s as x,j as n,K as L}from"./index.0ad64858.js";import{B as c}from"./Button.8dbbdcdc.js";import{R as l,b as y,a as V,S as N,P as v,f as p}from"./PaymentTable.aec8cc8b.js";import{c as P,u as k,k as C,l as $,L as S}from"./Layout.container.9310e30f.js";import{m as T,e as j}from"./i18n.hooks.67cbff6b.js";import{C as D}from"./constants.00022566.js";import"./validations.utils.d8a44663.js";import"./auth.service.hooks.07f29f8a.js";const E="/CodiShark/assets/detailsPay.a840b3ee.svg",r=T().global.table.TablePaymentUser.TableHeader,I=[{name:r.name,selector:t=>{var e;return(e=t.user.first_name)!=null?e:""},sortable:!0,cell:t=>a(l,{content:`${t.user.first_name} ${t.user.last_name}`,bold:!0})},{name:r.date,selector:t=>{var e;return(e=t.operation_date)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.operation_date)!=null?e:""})}},{name:r.amount,selector:t=>{var e;return(e=t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.amount_paid)!=null?e:0})}},{name:r.method,selector:t=>{var e;return(e=t.payment_method)!=null?e:""},cell:t=>{var e;return a(l,{content:(e=t.payment_method)!=null?e:""})}},{name:r.state,button:!0,cell:t=>a(y,{conditional:t.payment_status==="Pagado"})},{name:r.action,button:!0,cell:t=>a(V,{row:t.id})}],{BREAKPOINTS:o}=D,R=x.div`
  .OperationListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${o.desktop}px) {
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
      }

      &--layout {
        display: flex;
        gap: 1.6rem;
        flex-flow: row wrap;
        @media screen and (min-width: ${o.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${o.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${o.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${o.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${o.wide}px) {
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
`,m=t=>{const{data:e,isLoading:w}=P(void 0,50),{data:d}=e!=null?e:{},i=j().pages.UserOperationPanel,{setIsLoading:u}=k();u(w);const _=async()=>{try{const s=await C();p(s,"report.pdf")}catch{console.log("Error at trying to print pdf")}},g=async()=>{try{const s=await $();p(s,"report.csv")}catch{console.log("Error at trying to print excel")}},f=()=>n("div",{className:"OperationListView__container--actions OperationListView__container--separate",children:[n("div",{className:"OperationListView__container--button",children:[a(c,{variant:"contained",className:"OperationListView__component--button",onClick:_,children:i.buttonPdf}),a(c,{variant:"contained",className:"OperationListView__component--button",onClick:g,children:i.buttonExcel}),a(c,{variant:"contained",className:"OperationListView__component--button",onClick:()=>window.print(),children:i.buttonPrint})]}),a(N,{})]}),b=()=>n(L,{children:[a("h2",{className:"OperationListView__text--subtitle OperationListView__container--separate",children:i.titleDetails}),a("div",{className:"OperationListView__component--details",children:n("div",{className:"OperationListView__component--details-content",children:[a("img",{src:E,alt:"logoKonecta",className:"OperationListView__container--image"}),a("p",{className:"OperationListView__text--paragraph",children:i.paragraphDetails})]})})]});if(!d)return null;const O=()=>a(v,{data:d,columns:I});return a(R,{className:"OperationListView ",children:n("div",{className:"OperationListView__container",children:[a("div",{className:"OperationListView__container--separate",children:a("h1",{className:"OperationListView__text--title",children:i.title})}),n("div",{className:"OperationListView__container--layout",children:[n("div",{className:"OperationListView__container--table",children:[f(),O()]}),a("div",{className:"OperationListView__container--details",children:b()})]})]})})};m.defaultProps={};const h=t=>a(S,{children:a(m,{})});h.defaultProps={};const q=h;export{q as default};
