import{S as V}from"./SkeletonComponent.1458dcd8.js";import{d as Y,a as F,u as U}from"./Remove.9d725046.js";import{s as u,a,j as p,ag as H,C as P,r as h,F as M}from"./index.31b587f7.js";import{g as w,u as W}from"./i18n.hooks.9f88aeab.js";import{T as D}from"./Table.ac9292d3.js";import{p as G,c as q}from"./validations.utils.e668c228.js";import{g as J,a as Q}from"./common.utils.834bf330.js";import{L as X}from"./Layout.container.8472f269.js";import"./auth.service.hooks.48119834.js";import"./useQuery.412ed980.js";import"./users.service.7920b3c4.js";const Z=u.div`
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
`,R=e=>{const{data:t}=e,{debt:n}=t!=null?t:{},i=w().global.table.TablePaymentAdmin.TableRowsExpand,o=(s,l)=>p("div",{className:"ExpandableRowsComponent__container__expand-text",children:[a("div",{className:"ExpandableRowsComponent__container__expand-static",children:a("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${s} `})}),a("p",{className:"ExpandableRowsComponent__container--field ",children:l!=null?l:"-"})]});return a(Z,{className:"ExpandableRowsComponent",children:p("div",{className:"ExpandableRowsComponent__container__expand",children:[o(i.entity,n==null?void 0:n.banking_entity),o(i.typeDebt,n==null?void 0:n.product),o(i.typeExchange,n==null?void 0:n.currency),o(i.date,H(n==null?void 0:n.date_last_contact).format("DD / MM / YYYY"))]})})};R.defaultProps={};const{BREAKPOINTS:k}=P,ee=u.div`
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

        @media screen and (max-width: ${k.mobile}px) {
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

      @media screen and (max-width: ${k.mobile}px) {
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
`,T=e=>{const{rowsPerPage:t,rowCount:n,onChangeRowsPerPage:i}=e,{currentPage:o,onChangePage:s}=e,l=W().global.table.TablePaymentAdmin.Pagination,c=Q(n,t),x=J(c),g=o*t-t+1,f=o===1,_=o===c,S=h.exports.useCallback(()=>s(o-1),[o,s]),z=h.exports.useCallback(()=>s(o+1),[o,s]),I=h.exports.useCallback(r=>s(r),[s]),L=r=>a("div",{...r,children:r==null?void 0:r.value}),O=l.legend(g,n,n),C=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,j=r=>`Pagination__container--numbers ${r===o?"Pagination__container--numbers-activated":""}`;return a(ee,{className:"Pagination",children:p("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:O}),p("div",{className:"Pagination__container--pagination",children:[a("button",{className:C(f),"aria-disabled":f,onClick:S,disabled:f,children:l.back}),x.map((r,K)=>a(L,{value:r,className:j(r),onClick:()=>I(r)},K)),a("button",{className:C(_),"aria-disabled":_,onClick:z,disabled:_,children:l.next})]})]})})};T.defaultProps={};const{BREAKPOINTS:v}=P,N=u.div`
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

        @media screen and (min-width: ${v.mobile}px) {
          padding: 0.8rem 1rem;
        }

        &-icon {
          background-color: var(--palette-greyBackground);
          color: var(--palette-darkText);
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 1rem;
        }

        &-disabled {
          cursor: not-allowed;
          background-color: var(--palette-greyBackground);
          color: var(--palette-darkText);
          opacity: 0.8;
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

        @media screen and (min-width: ${v.mobile}px) {
          margin-right: 0.64rem;
        }
      }

      &__text {
        display: flex;
        align-items: center;
      }
    }
  }
`,te=e=>a(T,{...e}),$=e=>{const{data:t,columns:n,expandableRows:i,expandableRowsComponent:o}=e,{expandOnRowClicked:s,progressPending:l}=e;return a(N,{className:"PaymentTable",children:a(D,{columns:n,data:t,expandableRows:i,expandableRowsComponent:o,expandOnRowClicked:s,paginationPerPage:G,paginationRowsPerPageOptions:q,paginationComponent:te,expandableIcon:{collapsed:null,expanded:null},progressPending:l})})};$.defaultProps={};const ne=u.div``,y=e=>{const{icon:t=!1,disabled:n}=e,[i,o]=h.exports.useState(!1),s=w().global.table.TablePaymentAdmin.TableRows,l=()=>{o(!i)},c=()=>i?a(Y,{}):a(F,{}),x=()=>p(M,{children:[t&&a("div",{className:"PaymentTable__container--icon",children:c()}),t?s.buttonDetail.toLocaleUpperCase():s.buttonAction.toLocaleUpperCase()]});return a(ne,{className:`${(g=>`PaymentTable__container--button ${g?"PaymentTable__container--button-icon":""} ${n?"PaymentTable__container--button-disabled":""}`)(t)}`,disabled:n,onClick:l,...e,children:x()})};y.defaultProps={};const b=e=>{const{content:t,bold:n=!1}=e;return a(N,{className:(o=>`PaymentTable__container--field ${o?"PaymentTable__container--field-bold":""}`)(n),children:t})},m=w().global.table.TablePaymentAdmin.TableHeader,ae=e=>e!=="Pagado",oe=[{name:m.concept,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.banking_entity)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(b,{content:`${(n=(t=e==null?void 0:e.debt)==null?void 0:t.banking_entity)!=null?n:"-"}`,bold:!0})}},{name:m.originalAmount,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(b,{content:`S/ ${(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""}`})}},{name:m.amountPaid,selector:e=>{var t;return(t=e==null?void 0:e.amount_paid)!=null?t:0},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(b,{content:`S/ ${(t=e==null?void 0:e.amount_paid)!=null?t:0}`,bold:!0})}},{name:m.paymentDate,selector:e=>{var t;return(t=e==null?void 0:e.operation_date)!=null?t:""},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(b,{content:(t=e==null?void 0:e.operation_date)!=null?t:""})}},{name:m.actions,center:!0,button:!0,minWidth:"150px",cell:e=>a(y,{disabled:ae(e==null?void 0:e.payment_status)})},{name:"",center:!0,button:!0,minWidth:"150px",cell:()=>a(y,{"data-tag":"allowRowEvents",icon:!0})}],{BREAKPOINTS:d}=P,ie=u.div`
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
`,A=e=>{const{data:t,isLoading:n}=U(void 0,50),{data:i}=t!=null?t:{};return a(ie,{className:"AdminPaymentListView ",children:(()=>n?a(V,{variant:"rounded",height:720,width:"100%"}):a($,{data:i!=null?i:[],columns:oe,expandableRows:!0,expandableRowsComponent:R,expandOnRowClicked:!0,progressPending:n}))()})};A.defaultProps={};const E=e=>a(X,{children:a(A,{})});E.defaultProps={};const xe=E;export{xe as default};
