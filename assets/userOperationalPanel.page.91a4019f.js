import{B as h}from"./Button.d1000baa.js";import{R as c,b as L,a as C,S as k,P as V}from"./PaymentTable.helpers.291e0950.js";import{u as R,L as S}from"./Layout.container.8472f269.js";import{u as O,g as T}from"./i18n.hooks.9f88aeab.js";import{f as g}from"./file-download.9541e5f9.js";import{s as w,C as x,j as r,a as e,F as $,r as u}from"./index.31b587f7.js";import{b as E,j,k as z}from"./administrator.service.hooks.1d394049.js";import"./Table.ac9292d3.js";import"./validations.utils.e668c228.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.48119834.js";import"./useQuery.412ed980.js";const I="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:A}=x,B=w.div`
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
`,f=a=>{const{id:t}=a,i=O().components.OperationalDetails,l=()=>e($,{children:e("div",{className:"OperationDetails__component--details",children:r("div",{className:"OperationDetails__component--details-content",children:[e("img",{src:I,alt:i.alt,className:"OperationDetails__container--image"}),e("p",{className:"OperationDetails__text--paragraph",children:i.paragraphDetails})]})})}),p=()=>e(h,{variant:"contained",className:"OperationListView__component--button",onClick:()=>console.log("Ver Comprobante"),children:i.button}),m=()=>r("div",{className:"OperationDetails__component--details OperationDetails__component--details-component OperationDetails__component--details-operation",children:[r("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[i.customerName,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"Armando Rodriguez Guerra"})]}),r("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[i.amountPaid,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"S/ 3600.00"})]}),r("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[i.date,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"05/09/2022"})]}),r("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[i.hour,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"8:00 pm"})]}),r("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[i.paymentMedium,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"Tarjeta de Cr\xE9dito - Pasarela Izipay"})]}),r("p",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-blue",children:[i.paymentStatus,e("span",{className:"OperationDetails__text--paragraph OperationDetails__text--paragraph-gray",children:"Pagado"})]}),p()]});return r(B,{className:"OperationDetails",children:[e("h2",{className:"OperationDetails__text--subtitle OperationDetails__container--separate",children:i.titleDetails}),t?m():l()]})};f.defaultProps={};const o=T().global.table.TablePaymentUser.TableHeader,F=[{name:o.name,selector:a=>{var t;return(t=a.user.first_name)!=null?t:""},sortable:!0,ignoreRowClick:!0,cell:a=>e(c,{content:`${a.user.first_name} ${a.user.last_name}`,bold:!0})},{name:o.date,selector:a=>{var t;return(t=a.operation_date)!=null?t:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(c,{content:(t=a.operation_date)!=null?t:""})}},{name:o.amount,selector:a=>{var t;return(t=a.amount_paid)!=null?t:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(c,{content:(t=a.amount_paid)!=null?t:0})}},{name:o.method,selector:a=>{var t;return(t=a.payment_method)!=null?t:""},ignoreRowClick:!0,cell:a=>{var t;return e(c,{content:(t=a.payment_method)!=null?t:""})}},{name:o.state,button:!0,ignoreRowClick:!0,cell:a=>e(L,{conditional:a.payment_status==="Pagado"})},{name:o.action,center:!0,cell:a=>e(C,{row:a.id})}],{BREAKPOINTS:s}=x,U=w.div`
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
`,b=a=>{const{data:t,isLoading:i}=E(void 0,50),{data:l}=t!=null?t:{},[p,m]=u.exports.useState(0);console.log("\u{1F680} ~ file: PaymentListView.tsx ~ line 23 ~ idRow",p);const d=O().pages.UserOperationPanel,{setIsLoading:_}=R();u.exports.useEffect(()=>{_(i)},[i,_]);const y=async()=>{try{const n=await j();g(n,"report.pdf")}catch{console.log("Error at trying to print pdf")}},N=async()=>{try{const n=await z();g(n,"report.csv")}catch{console.log("Error at trying to print excel")}},P=()=>r("div",{className:"OperationListView__container--actions OperationListView__container--separate",children:[r("div",{className:"OperationListView__container--button",children:[e(h,{variant:"contained",className:"OperationListView__component--button",onClick:y,children:d.buttonPdf}),e(h,{variant:"contained",className:"OperationListView__component--button",onClick:N,children:d.buttonExcel})]}),e(k,{})]});if(!l)return null;const v=()=>e(V,{data:l,columns:F,onRowClicked:n=>m(n==null?void 0:n.id),progressPending:i});return e(U,{className:"OperationListView ",children:r("div",{className:"OperationListView__container",children:[e("div",{className:"OperationListView__container--separate",children:e("h1",{className:"OperationListView__text--title",children:d.title})}),r("div",{className:"OperationListView__container--layout",children:[r("div",{className:"OperationListView__container--table",children:[P(),v()]}),e("div",{className:"OperationListView__container--details",children:e(f,{id:p})})]})]})})};b.defaultProps={};const D=a=>e(S,{children:e(b,{})});D.defaultProps={};const te=D;export{te as default};
