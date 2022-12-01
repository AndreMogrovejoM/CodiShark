import{g as f,u as W}from"./i18n.hooks.12df7c97.js";import{s as p,a as n,j as u,r as b,F as G}from"./index.c13680c4.js";import{T as J}from"./Table.c62d0ac6.js";import{p as Q,c as X}from"./validations.utils.c5d8b35a.js";import{g as Y,a as Z}from"./common.utils.834bf330.js";import{C as x}from"./constants.03d913e0.js";import{r as $,i as N,a as A,L as ee}from"./Layout.container.1478b770.js";import"./auth.service.hooks.6523a2f5.js";const te=p.div`
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
`,E=t=>{const e=f().global.table.TablePaymentAdmin.TableRowsExpand,o=(s,a)=>u("div",{className:"ExpandableRowsComponent__container__expand-text",children:[n("div",{className:"ExpandableRowsComponent__container__expand-static",children:n("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${s} `})}),n("p",{className:"ExpandableRowsComponent__container--field ",children:a})]});return n(te,{className:"ExpandableRowsComponent",children:u("div",{className:"ExpandableRowsComponent__container__expand",children:[o(e.entity,"Banco BCP"),o(e.typeDebt,"Pr\xE9stamo personal"),o(e.typeExchange,"Sol peruano"),o(e.date,"27-03-2022")]})})};E.defaultProps={};const{BREAKPOINTS:T}=x,ne=p.div`
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
`,I=t=>{const{rowsPerPage:e,rowCount:o,onChangeRowsPerPage:s}=t,{currentPage:a,onChangePage:i}=t,l=W().global.table.TablePaymentAdmin.Pagination,c=Z(o,e),v=Y(c),R=a*e-e+1,h=a===1,P=a===c,V=b.exports.useCallback(()=>i(a-1),[a,i]),q=b.exports.useCallback(()=>i(a+1),[a,i]),K=b.exports.useCallback(r=>i(r),[i]),H=r=>n("div",{...r,children:r==null?void 0:r.value}),M=l.legend(R,o,o),k=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,F=r=>`Pagination__container--numbers ${r===a?"Pagination__container--numbers-activated":""}`;return n(ne,{className:"Pagination",children:u("div",{className:"Pagination__container",children:[n("p",{className:"Pagination__text",children:M}),u("div",{className:"Pagination__container--pagination",children:[n("button",{className:k(h),"aria-disabled":h,onClick:V,disabled:h,children:l.back}),v.map((r,U)=>n(H,{value:r,className:F(r),onClick:()=>K(r)},U)),n("button",{className:k(P),"aria-disabled":P,onClick:q,disabled:P,children:l.next})]})]})})};I.defaultProps={};const{BREAKPOINTS:B}=x,S=p.div`
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
`,ae=t=>n(I,{...t}),j=t=>{const{data:e,columns:o,expandableRows:s,expandableRowsComponent:a}=t,{expandOnRowClicked:i}=t;return n(S,{className:"PaymentTable",children:n(J,{columns:o,data:e,expandableRows:s,expandableRowsComponent:a,expandOnRowClicked:i,paginationPerPage:Q,paginationRowsPerPageOptions:X,paginationComponent:ae})})};j.defaultProps={};var y={},oe=N.exports;Object.defineProperty(y,"__esModule",{value:!0});var z=y.default=void 0,re=oe($()),ie=A,se=(0,re.default)((0,ie.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");z=y.default=se;var _={},le=N.exports;Object.defineProperty(_,"__esModule",{value:!0});var O=_.default=void 0,de=le($()),ce=A,me=(0,de.default)((0,ce.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");O=_.default=me;const ue=p.div``,w=t=>{const{icon:e=!1}=t,[o,s]=b.exports.useState(!1),a=f().global.table.TablePaymentAdmin.TableRows,i=()=>{s(!o)},l=()=>o?n(O,{}):n(z,{}),c=()=>u(G,{children:[e&&n("div",{className:"PaymentTable__container--icon",children:l()}),e?a.buttonDetail.toLocaleUpperCase():a.buttonAction.toLocaleUpperCase()]});return n(ue,{className:`${(C=>`PaymentTable__container--button ${C?"PaymentTable__container--button-icon":""}`)(e)}`,onClick:i,...t,children:c()})};w.defaultProps={};const g=t=>{const{content:e,bold:o=!1}=t;return n(S,{className:(a=>`PaymentTable__container--field ${a?"PaymentTable__container--field-bold":""}`)(o),children:e})},m=f().global.table.TablePaymentAdmin.TableHeader,pe=[{name:m.concept,selector:t=>{var e;return(e=t.concept)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>n(g,{content:`${t.concept}`,bold:!0})},{name:m.originalAmount,selector:t=>{var e;return(e=t.amount)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return n(g,{content:`S/ ${(e=t.amount)!=null?e:""}`})}},{name:m.amountPaid,selector:t=>{var e;return(e=t.amountPay)!=null?e:0},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:t=>{var e;return n(g,{content:`S/ ${(e=t.amountPay)!=null?e:0}`,bold:!0})}},{name:m.paymentDate,selector:t=>{var e;return(e=t.datePay)!=null?e:""},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:t=>{var e;return n(g,{content:(e=t.datePay)!=null?e:""})}},{name:m.actions,selector:t=>{var e;return(e=t.year)!=null?e:0},wrap:!0,sortable:!0,center:!0,button:!0,minWidth:"150px",cell:()=>n(w,{})},{name:"",center:!0,button:!0,minWidth:"150px",cell:()=>n(w,{"data-tag":"allowRowEvents",icon:!0})}],ge=[{id:1,concept:"Prestamos Banco Interbank",amount:"8,200.00",amountPay:"1,750.00",datePay:"20/09/2022"},{id:2,concept:"Prestamos Banco BCP",amount:"15,500.00",amountPay:"2,300.00",datePay:"32/09/2022"},{id:3,concept:"Prestamos Banco Interbank",amount:"20,000.00",amountPay:"950.00",datePay:"12/10/2022"},{id:4,concept:"Prestamos Banco Interbank",amount:"8,200.00",amountPay:"1,750.00",datePay:"20/09/2022"},{id:5,concept:"Prestamos Banco BCP",amount:"15,500.00",amountPay:"2,300.00",datePay:"32/09/2022"},{id:6,concept:"Prestamos Banco Interbank",amount:"20,000.00",amountPay:"950.00",datePay:"12/10/2022"},{id:7,concept:"Prestamos Banco Interbank",amount:"8,200.00",amountPay:"1,750.00",datePay:"20/09/2022"},{id:8,concept:"Prestamos Banco BCP",amount:"15,500.00",amountPay:"2,300.00",datePay:"32/09/2022"},{id:9,concept:"Prestamos Banco Interbank",amount:"20,000.00",amountPay:"950.00",datePay:"12/10/2022"}],{BREAKPOINTS:d}=x,be=p.div`
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
`,L=t=>n(be,{className:"AdminPaymentListView ",children:(()=>n(j,{data:ge,columns:pe,expandableRows:!0,expandableRowsComponent:E,expandOnRowClicked:!0}))()});L.defaultProps={};const D=t=>n(ee,{children:n(L,{})});D.defaultProps={};const Ce=D;export{Ce as default};
