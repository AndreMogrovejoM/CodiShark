import{g as w,u as G}from"./i18n.hooks.e16efec0.js";import{s as u,a as n,j as p,r as g,F as J}from"./index.c23f8f71.js";import{T as Q}from"./Table.1e3b5cfa.js";import{p as W,c as X}from"./validations.utils.fdf29c7e.js";import{g as Y,a as Z}from"./common.utils.834bf330.js";import{C as y}from"./constants.03d913e0.js";import{r as $,i as N,a as A,L as ee}from"./Layout.container.2ed6a9da.js";import"./auth.service.hooks.8a3a6eba.js";const te=u.div`
  .ExpandableRowsComponent {
    &__container {
      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-blueText);

        &-bold {
          font-weight: 700;
        }

        &-expand {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }

      &__expand {
        width: 16rem;

        &-static {
          width: 10rem;
        }

        &-text {
          display: -webkit-box;
          margin-bottom: 1rem;
        }
      }
    }
  }
`,E=t=>{const e=w().global.table.TablePaymentAdmin.TableRowsExpand,o=(s,a)=>p("div",{className:"ExpandableRowsComponent__container__expand-text",children:[n("div",{className:"ExpandableRowsComponent__container__expand-static",children:n("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${s} `})}),n("p",{className:"ExpandableRowsComponent__container--field ",children:a})]});return n(te,{className:"ExpandableRowsComponent",children:p("div",{className:"ExpandableRowsComponent__container__expand",children:[o(e.entity,"Banco BCP"),o(e.typeDebt,"Pr\xE9stmo personal"),o(e.typeExchange,"Sol peruano"),o(e.date,"27-03-2022")]})})};E.defaultProps={};const{BREAKPOINTS:T}=y,ne=u.div`
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

        @media screen and (max-width: ${T.mobile}px) {
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

      @media screen and (max-width: ${T.mobile}px) {
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
`,I=t=>{const{rowsPerPage:e,rowCount:o,onChangeRowsPerPage:s}=t,{currentPage:a,onChangePage:i}=t,l=G().global.table.TablePaymentAdmin.Pagination,c=Z(o,e),v=Y(c),R=a*e-e+1,h=a===1,P=a===c,V=g.exports.useCallback(()=>i(a-1),[a,i]),q=g.exports.useCallback(()=>i(a+1),[a,i]),K=g.exports.useCallback(r=>i(r),[i]),H=r=>n("div",{...r,children:r==null?void 0:r.value}),M=l.legend(R,o,o),k=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,F=r=>`Pagination__container--numbers ${r===a?"Pagination__container--numbers-activated":""}`;return n(ne,{className:"Pagination",children:p("div",{className:"Pagination__container",children:[n("p",{className:"Pagination__text",children:M}),p("div",{className:"Pagination__container--pagination",children:[n("button",{className:k(h),"aria-disabled":h,onClick:V,disabled:h,children:l.back}),v.map((r,U)=>n(H,{value:r,className:F(r),onClick:()=>K(r)},U)),n("button",{className:k(P),"aria-disabled":P,onClick:q,disabled:P,children:l.next})]})]})})};I.defaultProps={};const{BREAKPOINTS:B}=y,S=u.div`
  .PaymentTable {
    &__container {
      &--button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--palette-white);
        cursor: pointer;
        font-size: 0.8rem;
        border-radius: 0.8rem;
        background-color: var(--palette-skyBlue);
        text-align: center;
        padding: 0.2rem;

        @media screen and (min-width: ${B.mobile}px) {
          padding: 0.8rem 1rem;
        }

        &-icon {
          background-color: var(--palette-greyBackground);
          color: var(--palette-darkText);
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 1rem;
        }
      }

      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-blueText);

        &-bold {
          font-weight: 700;
        }

        &-expand {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }

      &--icon {
        display: flex;
        align-items: center;
        margin-right: none;
        pointer-events: none;

        @media screen and (min-width: ${B.mobile}px) {
          margin-right: 0.64rem;
        }
      }

      &__text {
        display: flex;
        align-items: center;
      }
    }
  }
`,ae=t=>n(I,{...t}),j=t=>{const{data:e,columns:o,expandableRows:s,expandableRowsComponent:a}=t,{expandOnRowClicked:i}=t;return n(S,{className:"PaymentTable",children:n(Q,{columns:o,data:e,expandableRows:s,expandableRowsComponent:a,expandOnRowClicked:i,paginationPerPage:W,paginationRowsPerPageOptions:X,paginationComponent:ae})})};j.defaultProps={};var x={},oe=N.exports;Object.defineProperty(x,"__esModule",{value:!0});var z=x.default=void 0,re=oe($()),ie=A,se=(0,re.default)((0,ie.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");z=x.default=se;var _={},le=N.exports;Object.defineProperty(_,"__esModule",{value:!0});var O=_.default=void 0,de=le($()),ce=A,me=(0,de.default)((0,ce.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");O=_.default=me;const pe=u.div``,f=t=>{const{icon:e=!1}=t,[o,s]=g.exports.useState(!1),a=w().global.table.TablePaymentAdmin.TableRows,i=()=>{s(!o)},l=()=>o?n(O,{}):n(z,{}),c=()=>p(J,{children:[e&&n("div",{className:"PaymentTable__container--icon",children:l()}),e?a.buttonDetail.toLocaleUpperCase():a.buttonAction.toLocaleUpperCase()]});return n(pe,{className:`${(C=>`PaymentTable__container--button ${C?"PaymentTable__container--button-icon":""}`)(e)}`,onClick:i,...t,children:c()})};f.defaultProps={};const b=t=>{const{content:e,bold:o=!1}=t;return n(S,{className:(a=>`PaymentTable__container--field ${a?"PaymentTable__container--field-bold":""}`)(o),children:e})},m=w().global.table.TablePaymentAdmin.TableHeader,ue=[{name:m.concept,selector:t=>{var e;return(e=t.concept)!=null?e:""},wrap:!0,sortable:!0,cell:t=>n(b,{content:`${t.concept}`,bold:!0})},{name:m.originalAmount,selector:t=>{var e;return(e=t.amount)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return n(b,{content:`S/ ${(e=t.amount)!=null?e:""}`})}},{name:m.amountPaid,selector:t=>{var e;return(e=t.amountPay)!=null?e:0},wrap:!0,sortable:!0,center:!0,cell:t=>{var e;return n(b,{content:`S/ ${(e=t.amountPay)!=null?e:0}`,bold:!0})}},{name:m.paymentDate,selector:t=>{var e;return(e=t.datePay)!=null?e:""},wrap:!0,sortable:!0,center:!0,cell:t=>{var e;return n(b,{content:(e=t.datePay)!=null?e:""})}},{name:m.actions,selector:t=>{var e;return(e=t.year)!=null?e:0},wrap:!0,sortable:!0,center:!0,cell:()=>n(f,{})},{name:"",center:!0,cell:()=>n(f,{"data-tag":"allowRowEvents",icon:!0})}],be=[{id:1,concept:"Prestamos Banco Interbank",amount:"8,200.00",amountPay:"1,750.00",datePay:"20/09/2022"},{id:2,concept:"Prestamos Banco BCP",amount:"15,500.00",amountPay:"2,300.00",datePay:"32/09/2022"},{id:3,concept:"Prestamos Banco Interbank",amount:"20,000.00",amountPay:"950.00",datePay:"12/10/2022"},{id:4,concept:"Prestamos Banco Interbank",amount:"8,200.00",amountPay:"1,750.00",datePay:"20/09/2022"},{id:5,concept:"Prestamos Banco BCP",amount:"15,500.00",amountPay:"2,300.00",datePay:"32/09/2022"},{id:6,concept:"Prestamos Banco Interbank",amount:"20,000.00",amountPay:"950.00",datePay:"12/10/2022"},{id:7,concept:"Prestamos Banco Interbank",amount:"8,200.00",amountPay:"1,750.00",datePay:"20/09/2022"},{id:8,concept:"Prestamos Banco BCP",amount:"15,500.00",amountPay:"2,300.00",datePay:"32/09/2022"},{id:9,concept:"Prestamos Banco Interbank",amount:"20,000.00",amountPay:"950.00",datePay:"12/10/2022"}],{BREAKPOINTS:d}=y,ge=u.div`
  margin: 2rem;

  .AdminPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${d.desktop}px) {
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

        @media screen and (min-width: ${d.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${d.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${d.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${d.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${d.wide}px) {
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
`,L=t=>n(ge,{className:"AdminPaymentListView ",children:(()=>n(j,{data:be,columns:ue,expandableRows:!0,expandableRowsComponent:E,expandOnRowClicked:!0}))()});L.defaultProps={};const D=t=>n(ee,{children:n(L,{})});D.defaultProps={};const Ce=D;export{Ce as default};
