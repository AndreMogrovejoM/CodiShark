import{s as f,r as w,a as e,j as d,F as A}from"./index.0497ccc9.js";import{p as E,d as U,B as P}from"./validations.utils.c457d49f.js";import{T as O,S as D,f as v}from"./Table.5cf6f709.js";import{d as F,u as K,L as G}from"./Layout.container.d514c021.js";import{y as _}from"./auth.service.hooks.54244ada.js";import{b as H,e as W,d as M}from"./administrator.service.hooks.e9657a6a.js";import{C as k}from"./constants.8e3143ed.js";const q="/CodiShark/assets/detailsPay.a840b3ee.svg";function J(s,l){return Math.ceil(s/l)}function Q(s){return Array.from({length:s},(l,i)=>i+1)}const{BREAKPOINTS:N}=k,X=f.div`
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
`,C=s=>{const{rowsPerPage:l,rowCount:i,onChangeRowsPerPage:g}=s,{currentPage:n,onChangePage:c}=s,m=_().global.table.TablePaymentUser.Pagination,t=J(i,l),a=Q(t),u=n*l-l+1,r=n===1,y=n===t,$=w.exports.useCallback(()=>c(n-1),[n,c]),B=w.exports.useCallback(()=>c(n+1),[n,c]),S=w.exports.useCallback(o=>c(o),[c]),z=o=>e("div",{...o,children:o==null?void 0:o.value}),R=m.legend(u,i,i),x=o=>`Pagination__text--bold ${o?"Pagination__text--disabled":""}`,j=o=>`Pagination__container--numbers ${o===n?"Pagination__container--numbers-activated":""}`;return e(X,{className:"Pagination",children:d("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:R}),d("div",{className:"Pagination__container--pagination",children:[e("button",{className:x(r),"aria-disabled":r,onClick:$,disabled:r,children:m.back}),a.map((o,I)=>e(z,{value:o,className:j(o),onClick:()=>S(o)},I)),e("button",{className:x(y),"aria-disabled":y,onClick:B,disabled:y,children:m.next})]})]})})};C.defaultProps={};const b=f.div`
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
`,Y=s=>e(C,{...s}),L=s=>{const{data:l}=s,i=_().global.table.TablePaymentUser.TableHeader,g=[{name:i.name,selector:t=>{var a;return(a=t.user.first_name)!=null?a:""},sortable:!0,cell:t=>e(n,{content:`${t.user.first_name} ${t.user.last_name}`,bold:!0})},{name:i.date,selector:t=>{var a;return(a=t.operation_date)!=null?a:""},wrap:!0,sortable:!0,cell:t=>{var a;return e(n,{content:(a=t.operation_date)!=null?a:""})}},{name:i.amount,selector:t=>{var a;return(a=t.amount_paid)!=null?a:0},wrap:!0,sortable:!0,cell:t=>{var a;return e(n,{content:(a=t.amount_paid)!=null?a:0})}},{name:i.method,selector:t=>{var a;return(a=t.payment_method)!=null?a:""},cell:t=>{var a;return e(n,{content:(a=t.payment_method)!=null?a:""})}},{name:i.state,button:!0,cell:t=>e(c,{conditional:t.payment_status==="Pagado"})},{name:i.action,button:!0,cell:t=>e(m,{row:t.id})}],n=t=>{const{content:a,bold:p=!1}=t;return e(b,{className:(r=>`PaymentTable__container--field ${r?"PaymentTable__container--field-bold":""}`)(p),children:a})},c=t=>{const{conditional:a}=t,p=_().global.table.TablePaymentUser.TableRows;return e(b,{className:(r=>`PaymentTable__container--chip ${r?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(a),children:e("p",{className:"PaymentTable__text--chip",children:a?p.pay:p.pending})})},m=t=>e(b,{className:"PaymentTable__container--button",onClick:()=>console.log(t),children:e(F,{className:"PaymentTable__container--button-icon"})});return e(b,{className:"PaymentTable",children:e(O,{columns:g,data:l,paginationPerPage:E,paginationRowsPerPageOptions:U,paginationComponent:Y})})};L.defaultProps={};const{BREAKPOINTS:h}=k,Z=f.div`
  .PaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${h.desktop}px) {
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
        @media screen and (min-width: ${h.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${h.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${h.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${h.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${h.wide}px) {
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
`,T=s=>{const{data:l,isLoading:i}=H(void 0,50),{data:g}=l!=null?l:{},n=_().pages.UserPayPanel,{setIsLoading:c}=K();c(i);const m=async()=>{try{const r=await W();v(r,"report.pdf")}catch{console.log("Error at trying to print pdf")}},t=async()=>{try{const r=await M();v(r,"report.csv")}catch{console.log("Error at trying to print excel")}},a=()=>d("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[d("div",{className:"PaymentListView__container--button",children:[e(P,{variant:"contained",className:"PaymentListView__component--button",onClick:m,children:n.buttonPdf}),e(P,{variant:"contained",className:"PaymentListView__component--button",onClick:t,children:n.buttonExcel}),e(P,{variant:"contained",className:"PaymentListView__component--button",onClick:()=>window.print(),children:n.buttonPrint})]}),e(D,{})]}),p=()=>d(A,{children:[e("h2",{className:"PaymentListView__text--subtitle PaymentListView__container--separate",children:n.titleDetails}),e("div",{className:"PaymentListView__component--details",children:d("div",{className:"PaymentListView__component--details-content",children:[e("img",{src:q,alt:"logoKonecta",className:"PaymentListView__container--image"}),e("p",{className:"PaymentListView__text--paragraph",children:n.paragraphDetails})]})})]});if(!g)return null;const u=()=>e(L,{data:g});return e(Z,{className:"PaymentListView ",children:d("div",{className:"PaymentListView__container",children:[e("div",{className:"PaymentListView__container--separate",children:e("h1",{className:"PaymentListView__text--title",children:n.title})}),d("div",{className:"PaymentListView__container--layout",children:[d("div",{className:"PaymentListView__container--table",children:[a(),u()]}),e("div",{className:"PaymentListView__container--details",children:p()})]})]})})};T.defaultProps={};const V=s=>e(G,{children:e(T,{})});V.defaultProps={};const se=V;export{se as default};
