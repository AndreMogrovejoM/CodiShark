import{S as K}from"./SkeletonComponent.c6acbb5d.js";import{b as V}from"./users.service.hooks.9326fb5e.js";import{s as u,a,j as g,ag as W,C as w,r as _,u as Y,G as D}from"./index.e172364c.js";import{g as f,u as F}from"./i18n.hooks.b934c051.js";import{T as G}from"./Table.e7519fcc.js";import{p as H,c as M,d as q}from"./validations.utils.2772fe45.js";import{g as J,a as Q}from"./common.utils.cf38e105.js";import{d as X,a as Z}from"./Remove.8b5a4c00.js";import{L as ee}from"./Layout.container.28d71187.js";import"./auth.service.hooks.491fdc41.js";const te=u.div`
  .ExpandableRowsComponent {
    &__container {
      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-grayText);

        &-bold {
          font-weight: 700;
          color: var(--palette-blueText);
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
`,N=e=>{const{data:t}=e,{debt:n}=t!=null?t:{},i=f().global.table.TablePaymentAdmin.TableRowsExpand,o=(l,s)=>g("div",{className:"ExpandableRowsComponent__container__expand-text",children:[a("div",{className:"ExpandableRowsComponent__container__expand-static",children:a("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${l} `})}),a("p",{className:"ExpandableRowsComponent__container--field ",children:s!=null?s:"-"})]});return a(te,{className:"ExpandableRowsComponent",children:g("div",{className:"ExpandableRowsComponent__container__expand",children:[o(i.entity,n==null?void 0:n.banking_entity),o(i.typeDebt,n==null?void 0:n.product),o(i.typeExchange,n==null?void 0:n.currency),o(i.date,W(n==null?void 0:n.date_last_contact).format("DD / MM / YYYY"))]})})};N.defaultProps={};const{BREAKPOINTS:T}=w,ne=u.div`
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
`,$=e=>{const{rowsPerPage:t,rowCount:n,onChangeRowsPerPage:i}=e,{currentPage:o,onChangePage:l}=e,s=F().global.table.TablePaymentAdmin.Pagination,m=Q(n,t),y=J(m),b=o*t-t+1,h=o===1,p=o===m,z=_.exports.useCallback(()=>l(o-1),[o,l]),A=_.exports.useCallback(()=>l(o+1),[o,l]),I=_.exports.useCallback(r=>l(r),[l]),L=r=>a("div",{...r,children:r==null?void 0:r.value}),O=s.legend(b,n,n),v=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,j=r=>`Pagination__container--numbers ${r===o?"Pagination__container--numbers-activated":""}`;return a(ne,{className:"Pagination",children:g("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:O}),g("div",{className:"Pagination__container--pagination",children:[a("button",{className:v(h),"aria-disabled":h,onClick:z,disabled:h,children:s.back}),y.map((r,U)=>a(L,{value:r,className:j(r),onClick:()=>I(r)},U)),a("button",{className:v(p),"aria-disabled":p,onClick:A,disabled:p,children:s.next})]})]})})};$.defaultProps={};const{BREAKPOINTS:R}=w,C=u.div`
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

        @media screen and (min-width: ${R.mobile}px) {
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
          pointer-events: none;
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

        @media screen and (min-width: ${R.mobile}px) {
          margin-right: 0.64rem;
        }
      }

      &__text {
        display: flex;
        align-items: center;
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
`,ae=e=>a($,{...e}),B=e=>{const{data:t,columns:n,expandableRows:i,expandableRowsComponent:o}=e,{expandOnRowClicked:l,progressPending:s}=e;return a(C,{className:"PaymentTable",children:a(G,{columns:n,data:t,expandableRows:i,expandableRowsComponent:o,expandOnRowClicked:l,paginationPerPage:H,paginationRowsPerPageOptions:M,paginationComponent:ae,expandableIcon:{collapsed:null,expanded:null},progressPending:s})})};B.defaultProps={};const x=e=>{const{content:t,bold:n=!1}=e;return a(C,{className:(o=>`PaymentTable__container--field ${o?"PaymentTable__container--field-bold":""}`)(n),children:t})},oe=e=>{const{conditional:t}=e,n=f().global.table.TablePaymentUser.TableRows;return a(C,{className:(o=>`PaymentTable__container--chip ${o?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(t),children:a("p",{className:"PaymentTable__text--chip",children:t?n.pay:n.pending})})},ie=u.div``,P=e=>{const{icon:t=!1,disabled:n,data:i}=e,[o,l]=_.exports.useState(!1),s=f().global.table.TablePaymentAdmin.TableRows,m=Y(),y=()=>{l(!o),"debt_id"in i&&m(`/userPaymentDetails/${i==null?void 0:i.id}`)},k=()=>o?a(X,{}):a(Z,{}),b=()=>g(D,{children:[t&&a("div",{className:"PaymentTable__container--icon",children:k()}),t?s.buttonDetail.toLocaleUpperCase():s.buttonAction.toLocaleUpperCase()]});return a(ie,{className:`${(p=>`PaymentTable__container--button ${p?"PaymentTable__container--button-icon":""} ${n?"PaymentTable__container--button-disabled":""}`)(t)}`,disabled:n,onClick:y,...e,children:b()})};P.defaultProps={};const d=f().global.table.TablePaymentAdmin.TableHeader,re=[{name:d.concept,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(x,{content:`${(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:"-"}`,bold:!0})}},{name:d.originalAmount,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(x,{content:`S/ ${(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""}`})}},{name:d.amountPaid,selector:e=>{var t;return(t=e==null?void 0:e.amount_paid)!=null?t:0},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(x,{content:`S/ ${(t=e==null?void 0:e.amount_paid)!=null?t:0}`,bold:!0})}},{name:d.paymentDate,selector:e=>{var t;return(t=e==null?void 0:e.operation_date)!=null?t:""},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(x,{content:(t=e==null?void 0:e.operation_date)!=null?t:""})}},{name:d.actions,button:!0,ignoreRowClick:!0,cell:e=>a(oe,{conditional:(e==null?void 0:e.payment_status)==="Pagado"})},{name:d.actions,center:!0,button:!0,minWidth:"150px",cell:e=>a(P,{disabled:q(e==null?void 0:e.payment_status),data:e})},{name:"",center:!0,button:!0,minWidth:"150px",cell:()=>a(P,{"data-tag":"allowRowEvents",icon:!0})}],{BREAKPOINTS:c}=w,se=u.div`
  .UserPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${c.desktop}px) {
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

        @media screen and (min-width: ${c.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${c.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${c.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${c.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${c.wide}px) {
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
`,E=e=>{const{data:t,isLoading:n}=V(0,50),{data:i}=t!=null?t:{};return a(se,{className:"UserPaymentListView ",children:(()=>n?a(K,{variant:"rounded",height:720,width:"100%"}):a(B,{data:i!=null?i:[],columns:re,expandableRows:!0,expandableRowsComponent:N,expandOnRowClicked:!0,progressPending:n}))()})};E.defaultProps={};const S=e=>a(ee,{children:a(E,{})});S.defaultProps={};const _e=S;export{_e as default};
