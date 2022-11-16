import{a,s as x,j as i,N as L}from"./index.f98bbdbf.js";import{B as c}from"./Button.38673561.js";import{R as l,b as y,a as V,S as N,P as v,f as m}from"./PaymentTable.5a49d944.js";import{u as P,L as C}from"./Layout.container.3c3c301f.js";import{o as k,e as $}from"./i18n.hooks.84f8b483.js";import{b as S,g as T,h as j}from"./administrator.service.hooks.2aeb4ec3.js";import{C as D}from"./constants.00022566.js";import"./validations.utils.250ccb24.js";import"./auth.service.hooks.bea03bd7.js";const E="/CodiShark/assets/detailsPay.a840b3ee.svg",r=k().global.table.TablePaymentUser.TableHeader,I=[{name:r.name,selector:t=>{var e;return(e=t.user.first_name)!=null?e:""},sortable:!0,cell:t=>a(l,{content:`${t.user.first_name} ${t.user.last_name}`,bold:!0})},{name:r.date,selector:t=>{var e;return(e=t.operation_date)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.operation_date)!=null?e:""})}},{name:r.amount,selector:t=>{var e;return(e=t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.amount_paid)!=null?e:0})}},{name:r.method,selector:t=>{var e;return(e=t.payment_method)!=null?e:""},cell:t=>{var e;return a(l,{content:(e=t.payment_method)!=null?e:""})}},{name:r.state,button:!0,cell:t=>a(y,{conditional:t.payment_status==="Pagado"})},{name:r.action,button:!0,cell:t=>a(V,{row:t.id})}],{BREAKPOINTS:o}=D,R=x.div`
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
        margin-bottom: 1.2rem;
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
`,p=t=>{const{data:e,isLoading:w}=S(void 0,50),{data:d}=e!=null?e:{},n=$().pages.UserOperationPanel,{setIsLoading:u}=P();u(w);const _=async()=>{try{const s=await T();m(s,"report.pdf")}catch{console.log("Error at trying to print pdf")}},g=async()=>{try{const s=await j();m(s,"report.csv")}catch{console.log("Error at trying to print excel")}},f=()=>i("div",{className:"OperationListView__container--actions OperationListView__container--separate",children:[i("div",{className:"OperationListView__container--button",children:[a(c,{variant:"contained",className:"OperationListView__component--button",onClick:_,children:n.buttonPdf}),a(c,{variant:"contained",className:"OperationListView__component--button",onClick:g,children:n.buttonExcel}),a(c,{variant:"contained",className:"OperationListView__component--button",onClick:()=>window.print(),children:n.buttonPrint})]}),a(N,{})]}),b=()=>i(L,{children:[a("h2",{className:"OperationListView__text--subtitle OperationListView__container--separate",children:n.titleDetails}),a("div",{className:"OperationListView__component--details",children:i("div",{className:"OperationListView__component--details-content",children:[a("img",{src:E,alt:"logoKonecta",className:"OperationListView__container--image"}),a("p",{className:"OperationListView__text--paragraph",children:n.paragraphDetails})]})})]});if(!d)return null;const O=()=>a(v,{data:d,columns:I});return a(R,{className:"OperationListView ",children:i("div",{className:"OperationListView__container",children:[a("div",{className:"OperationListView__container--separate",children:a("h1",{className:"OperationListView__text--title",children:n.title})}),i("div",{className:"OperationListView__container--layout",children:[i("div",{className:"OperationListView__container--table",children:[f(),O()]}),a("div",{className:"OperationListView__container--details",children:b()})]})]})})};p.defaultProps={};const h=t=>a(C,{children:a(p,{})});h.defaultProps={};const J=h;export{J as default};
