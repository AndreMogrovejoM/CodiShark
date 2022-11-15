import{s as P,r as f,a as e,j as d,F as j}from"./index.0497ccc9.js";import{p as A,d as E,B as y}from"./validations.utils.c457d49f.js";import{T as U,S as D,f as v}from"./Table.5cf6f709.js";import{d as F,u as K,L as G}from"./Layout.container.d514c021.js";import{y as _}from"./auth.service.hooks.54244ada.js";import{b as H,f as W,g as M}from"./administrator.service.hooks.e9657a6a.js";import{C as k}from"./constants.8e3143ed.js";const q="/CodiShark/assets/usersIcon.6275cb21.svg";function J(s,l){return Math.ceil(s/l)}function Q(s){return Array.from({length:s},(l,i)=>i+1)}const{BREAKPOINTS:N}=k,X=P.div`
  .Pagination {
    background-color: var(--palette-greyBackground);
    padding: 0.8rem 0;

    &__container {
      display: flex;
      justify-content: space-between;

      &--pagination {
        display: flex;
        justify-content: space-between;
        gap: 2.4rem;

        @media screen and (max-width: ${N.mobile}px) {
          width: 100%;
          justify-content: space-evenly;
        }
      }

      &--numbers {
        font-size: 1rem;
        color: var(--palette-darkText);
        padding: 0.4rem 0.8rem;
        cursor: pointer;

        &-activated {
          background-color: var(--palette-whiteBackgroundTree);
          border: 1px solid var(--palette-greyBackgroundBorder);
          border-radius: 50%;
        }
      }
    }

    &__text {
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.4rem;
      display: flex;
      align-items: center;

      @media screen and (max-width: ${N.mobile}px) {
        display: none;
      }

      &--bold {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        background-color: var(--palette-greyBackground);
        border: none;

        &:focus {
          outline: none;
        }
      }

      &--disabled {
        color: var(--palette-whiteBackgroundTwo);
      }
    }
  }
`,O=s=>{const{rowsPerPage:l,rowCount:i,onChangeRowsPerPage:h}=s,{currentPage:a,onChangePage:c}=s,m=_().global.table.TablePaymentUser.Pagination,t=J(i,l),n=Q(t),u=a*l-l+1,r=a===1,w=a===t,V=f.exports.useCallback(()=>c(a-1),[a,c]),$=f.exports.useCallback(()=>c(a+1),[a,c]),B=f.exports.useCallback(o=>c(o),[c]),I=o=>e("div",{...o,children:o==null?void 0:o.value}),S=m.legend(u,i,i),x=o=>`Pagination__text--bold ${o?"Pagination__text--disabled":""}`,z=o=>`Pagination__container--numbers ${o===a?"Pagination__container--numbers-activated":""}`;return e(X,{className:"Pagination",children:d("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:S}),d("div",{className:"Pagination__container--pagination",children:[e("button",{className:x(r),"aria-disabled":r,onClick:V,disabled:r,children:m.back}),n.map((o,R)=>e(I,{value:o,className:z(o),onClick:()=>B(o)},R)),e("button",{className:x(w),"aria-disabled":w,onClick:$,disabled:w,children:m.next})]})]})})};O.defaultProps={};const b=P.div`
  .PaymentTable {
    &__container {
      &--button {
        background-color: var(--palette-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        color: var(--palette-white);
        cursor: pointer;

        &-icon {
          font-size: 1.6rem;
        }
      }

      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-whiteBackgroundTwo);

        &-bold {
          font-weight: 600;
          color: var(--palette-blue);
        }
      }

      &--chip {
        border-radius: 0.8rem;

        &-green {
          background: var(--palette-greenWeakBackground);
        }

        &-yellow {
          background: var(--palette-yellowWeakBackground);
        }
      }
    }

    &__text {
      &--chip {
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 1.2rem;
        padding: 0.4rem 1.2rem;
      }
    }
  }
`,Y=s=>e(O,{...s}),C=s=>{const{data:l}=s,i=_().global.table.TablePaymentUser.TableHeader,h=[{name:i.name,selector:t=>{var n;return(n=t.user.first_name)!=null?n:""},sortable:!0,cell:t=>e(a,{content:`${t.user.first_name} ${t.user.last_name}`,bold:!0})},{name:i.date,selector:t=>{var n;return(n=t.operation_date)!=null?n:""},wrap:!0,sortable:!0,cell:t=>{var n;return e(a,{content:(n=t.operation_date)!=null?n:""})}},{name:i.amount,selector:t=>{var n;return(n=t.amount_paid)!=null?n:0},wrap:!0,sortable:!0,cell:t=>{var n;return e(a,{content:(n=t.amount_paid)!=null?n:0})}},{name:i.method,selector:t=>{var n;return(n=t.payment_method)!=null?n:""},cell:t=>{var n;return e(a,{content:(n=t.payment_method)!=null?n:""})}},{name:i.state,button:!0,cell:t=>e(c,{conditional:t.payment_status==="Pagado"})},{name:i.action,button:!0,cell:t=>e(m,{row:t.id})}],a=t=>{const{content:n,bold:p=!1}=t;return e(b,{className:(r=>`PaymentTable__container--field ${r?"PaymentTable__container--field-bold":""}`)(p),children:n})},c=t=>{const{conditional:n}=t,p=_().global.table.TablePaymentUser.TableRows;return e(b,{className:(r=>`PaymentTable__container--chip ${r?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(n),children:e("p",{className:"PaymentTable__text--chip",children:n?p.pay:p.pending})})},m=t=>e(b,{className:"PaymentTable__container--button",onClick:()=>console.log(t),children:e(F,{className:"PaymentTable__container--button-icon"})});return e(b,{className:"PaymentTable",children:e(U,{columns:h,data:l,paginationPerPage:A,paginationRowsPerPageOptions:E,paginationComponent:Y})})};C.defaultProps={};const{BREAKPOINTS:g}=k,Z=P.div`
  .OperationListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${g.desktop}px) {
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
        @media screen and (min-width: ${g.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${g.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${g.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${g.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${g.wide}px) {
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
`,L=s=>{const{data:l,isLoading:i}=H(void 0,50),{data:h}=l!=null?l:{},a=_().pages.UserOperationPanel,{setIsLoading:c}=K();c(i);const m=async()=>{try{const r=await W();v(r,"report.pdf")}catch{console.log("Error at trying to print pdf")}},t=async()=>{try{const r=await M();v(r,"report.csv")}catch{console.log("Error at trying to print excel")}},n=()=>d("div",{className:"OperationListView__container--actions OperationListView__container--separate",children:[d("div",{className:"OperationListView__container--button",children:[e(y,{variant:"contained",className:"OperationListView__component--button",onClick:m,children:a.buttonPdf}),e(y,{variant:"contained",className:"OperationListView__component--button",onClick:t,children:a.buttonExcel}),e(y,{variant:"contained",className:"OperationListView__component--button",onClick:()=>window.print(),children:a.buttonPrint})]}),e(D,{})]}),p=()=>d(j,{children:[e("h2",{className:"OperationListView__text--subtitle OperationListView__container--separate",children:a.titleDetails}),e("div",{className:"OperationListView__component--details",children:d("div",{className:"OperationListView__component--details-content",children:[e("img",{src:q,alt:"logoKonecta",className:"OperationListView__container--image"}),e("p",{className:"OperationListView__text--paragraph",children:a.paragraphDetails})]})})]});if(!h)return null;const u=()=>e(C,{data:h});return e(Z,{className:"OperationListView ",children:d("div",{className:"OperationListView__container",children:[e("div",{className:"OperationListView__container--separate",children:e("h1",{className:"OperationListView__text--title",children:a.title})}),d("div",{className:"OperationListView__container--layout",children:[d("div",{className:"OperationListView__container--table",children:[n(),u()]}),e("div",{className:"OperationListView__container--details",children:p()})]})]})})};L.defaultProps={};const T=s=>e(G,{children:e(L,{})});T.defaultProps={};const se=T;export{se as default};
