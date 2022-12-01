import{B as d}from"./Button.9fe5d7ca.js";import{R as m,b as P,a as C,S as V,P as k,f as g}from"./PaymentTable.helpers.d22330ed.js";import{u as R,L as S}from"./Layout.container.3c1562eb.js";import{u as w,g as T}from"./i18n.hooks.02144d44.js";import{s as O,j as i,a as e,F as $,r as u}from"./index.d266eea9.js";import{b as E,g as z,h as I}from"./administrator.service.hooks.69758975.js";import{C as x}from"./constants.03d913e0.js";import"./Table.f2ff33a9.js";import"./validations.utils.cdf78647.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.7d2206e7.js";const j="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:A}=x,B=O.div`
  .OperationDetails {
    &__container {
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
    }

    &__component {
      &--details {
        border-radius: 0.8rem;
        min-height: 57rem;
        height: 100%;
        background-color: var(--palette-white);
        display: flex;
        justify-content: center;
        align-items: center;

        &-component {
          flex-direction: column;
          justify-content: start;
          align-items: start;
          padding-left: 3.2rem;
          padding-top: 2rem;
          gap: 0.8rem;
        }

        &-operation {
          min-height: auto;
          padding-bottom: 2rem;

          @media screen and (min-width: ${A.desktop}px) {
            min-height: 57rem;
          }
        }
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
        font-style: normal;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &-blue {
          font-weight: 700;
          color: var(--palette-blue);
        }

        &-gray {
          font-weight: 600;
          color: var(--palette-grayTextBold);
          display: block;
        }
      }
    }
  }
`,f=a=>{const{id:t}=a,n=w().components.OperationalDetails,l=()=>e($,{children:e("div",{className:"OperationDetails__component--details",children:i("div",{className:"OperationDetails__component--details-content",children:[e("img",{src:j,alt:n.alt,className:"OperationDetails__container--image"}),e("p",{className:"OperationDetails__text--paragraph",children:n.paragraphDetails})]})})}),p=()=>e(d,{variant:"contained",className:"OperationListView__component--button",onClick:()=>console.log("Ver Comprobante"),children:n.button}),h=()=>i("div",{className:"OperationDetails__component--details OperationDetails__component--details-component OperationDetails__component--details-operation",children:[i("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[n.customerName,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"Armando Rodriguez Guerra"})]}),i("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[n.amountPaid,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"S/ 3600.00"})]}),i("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[n.date,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"05/09/2022"})]}),i("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[n.hour,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"8:00 pm"})]}),i("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[n.paymentMedium,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"Tarjeta de Cr\xE9dito - Pasarela Izipay"})]}),i("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[n.paymentStatus,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"Pagado"})]}),p()]});return i(B,{className:"OperationDetails",children:[e("h2",{className:"OperationDetails__text--subtitle OperationDetails__container--separate",children:n.titleDetails}),t?h():l()]})};f.defaultProps={};const o=T().global.table.TablePaymentUser.TableHeader,F=[{name:o.name,selector:a=>{var t;return(t=a.user.first_name)!=null?t:""},sortable:!0,ignoreRowClick:!0,cell:a=>e(m,{content:`${a.user.first_name} ${a.user.last_name}`,bold:!0})},{name:o.date,selector:a=>{var t;return(t=a.operation_date)!=null?t:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(m,{content:(t=a.operation_date)!=null?t:""})}},{name:o.amount,selector:a=>{var t;return(t=a.amount_paid)!=null?t:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(m,{content:(t=a.amount_paid)!=null?t:0})}},{name:o.method,selector:a=>{var t;return(t=a.payment_method)!=null?t:""},ignoreRowClick:!0,cell:a=>{var t;return e(m,{content:(t=a.payment_method)!=null?t:""})}},{name:o.state,button:!0,ignoreRowClick:!0,cell:a=>e(P,{conditional:a.payment_status==="Pagado"})},{name:o.action,center:!0,cell:a=>e(C,{row:a.id})}],{BREAKPOINTS:s}=x,U=O.div`
  .OperationListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${s.desktop}px) {
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

      &--layout {
        display: flex;
        gap: 1.6rem;
        flex-flow: row wrap;
        @media screen and (min-width: ${s.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${s.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${s.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${s.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${s.wide}px) {
          width: 70%;
        }
      }
    }

    &__component {
      &--button {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.6rem;
        border-radius: 0.8rem;
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
`,b=a=>{const{data:t,isLoading:n}=E(void 0,50),{data:l}=t!=null?t:{},[p,h]=u.exports.useState(0);console.log("\u{1F680} ~ file: PaymentListView.tsx ~ line 23 ~ idRow",p);const c=w().pages.UserOperationPanel,{setIsLoading:_}=R();u.exports.useEffect(()=>{_(n)},[n,_]);const y=async()=>{try{const r=await z();g(r,"report.pdf")}catch{console.log("Error at trying to print pdf")}},N=async()=>{try{const r=await I();g(r,"report.csv")}catch{console.log("Error at trying to print excel")}},v=()=>i("div",{className:"OperationListView__container--actions OperationListView__container--separate",children:[i("div",{className:"OperationListView__container--button",children:[e(d,{variant:"contained",className:"OperationListView__component--button",onClick:y,children:c.buttonPdf}),e(d,{variant:"contained",className:"OperationListView__component--button",onClick:N,children:c.buttonExcel}),e(d,{variant:"contained",className:"OperationListView__component--button",onClick:()=>window.print(),children:c.buttonPrint})]}),e(V,{})]});if(!l)return null;const L=()=>e(k,{data:l,columns:F,onRowClicked:r=>h(r==null?void 0:r.id)});return e(U,{className:"OperationListView ",children:i("div",{className:"OperationListView__container",children:[e("div",{className:"OperationListView__container--separate",children:e("h1",{className:"OperationListView__text--title",children:c.title})}),i("div",{className:"OperationListView__container--layout",children:[i("div",{className:"OperationListView__container--table",children:[v(),L()]}),e("div",{className:"OperationListView__container--details",children:e(f,{id:p})})]})]})})};b.defaultProps={};const D=a=>e(S,{children:e(b,{})});D.defaultProps={};const ee=D;export{ee as default};
