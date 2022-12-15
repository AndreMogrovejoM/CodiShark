import{S as K}from"./SkeletonComponent.5f3a8237.js";import{d as V,a as Y,c as D}from"./Remove.109d4b91.js";import{s as g,a,j as u,ag as G,C as w,r as f,u as F,G as H}from"./index.78f16c0f.js";import{g as C,u as M}from"./i18n.hooks.dcfdf754.js";import{T as W}from"./Table.b5b7a31b.js";import{p as q,c as J,d as Q}from"./validations.utils.0743643c.js";import{g as X,a as Z}from"./common.utils.834bf330.js";import{u as ee,L as te}from"./Layout.container.47df2272.js";import"./auth.service.hooks.59ab2c5f.js";import"./useQuery.78699b7d.js";import"./users.service.27dcf0aa.js";const ne=g.div`
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
`,N=e=>{const{data:t}=e,{debt:n}=t!=null?t:{},i=C().global.table.TablePaymentAdmin.TableRowsExpand,o=(l,r)=>u("div",{className:"ExpandableRowsComponent__container__expand-text",children:[a("div",{className:"ExpandableRowsComponent__container__expand-static",children:a("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${l} `})}),a("p",{className:"ExpandableRowsComponent__container--field ",children:r!=null?r:"-"})]});return a(ne,{className:"ExpandableRowsComponent",children:u("div",{className:"ExpandableRowsComponent__container__expand",children:[o(i.entity,n==null?void 0:n.banking_entity),o(i.typeDebt,n==null?void 0:n.product),o(i.typeExchange,n==null?void 0:n.currency),o(i.date,G(n==null?void 0:n.date_last_contact).format("DD / MM / YYYY"))]})})};N.defaultProps={};const{BREAKPOINTS:R}=w,ae=g.div`
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

        @media screen and (max-width: ${R.mobile}px) {
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

      @media screen and (max-width: ${R.mobile}px) {
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
`,$=e=>{const{rowsPerPage:t,rowCount:n,onChangeRowsPerPage:i}=e,{currentPage:o,onChangePage:l}=e,r=M().global.table.TablePaymentAdmin.Pagination,c=Z(n,t),_=X(c),b=o*t-t+1,m=o===1,h=o===c,y=f.exports.useCallback(()=>l(o-1),[o,l]),A=f.exports.useCallback(()=>l(o+1),[o,l]),O=f.exports.useCallback(s=>l(s),[l]),I=s=>a("div",{...s,children:s==null?void 0:s.value}),L=r.legend(b,n,n),k=s=>`Pagination__text--bold ${s?"Pagination__text--disabled":""}`,j=s=>`Pagination__container--numbers ${s===o?"Pagination__container--numbers-activated":""}`;return a(ae,{className:"Pagination",children:u("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:L}),u("div",{className:"Pagination__container--pagination",children:[a("button",{className:k(m),"aria-disabled":m,onClick:y,disabled:m,children:r.back}),_.map((s,U)=>a(I,{value:s,className:j(s),onClick:()=>O(s)},U)),a("button",{className:k(h),"aria-disabled":h,onClick:A,disabled:h,children:r.next})]})]})})};$.defaultProps={};const{BREAKPOINTS:T}=w,E=g.div`
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

        @media screen and (min-width: ${T.mobile}px) {
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

        @media screen and (min-width: ${T.mobile}px) {
          margin-right: 0.64rem;
        }
      }

      &__text {
        display: flex;
        align-items: center;
      }
    }
  }
`,oe=e=>a($,{...e}),B=e=>{const{data:t,columns:n,expandableRows:i,expandableRowsComponent:o}=e,{expandOnRowClicked:l,progressPending:r}=e;return a(E,{className:"PaymentTable",children:a(W,{columns:n,data:t,expandableRows:i,expandableRowsComponent:o,expandOnRowClicked:l,paginationPerPage:q,paginationRowsPerPageOptions:J,paginationComponent:oe,expandableIcon:{collapsed:null,expanded:null},progressPending:r})})};B.defaultProps={};const ie=g.div``,P=e=>{const{icon:t=!1,disabled:n,data:i}=e,[o,l]=f.exports.useState(!1),r=C().global.table.TablePaymentAdmin.TableRows,c=F(),{setOperationUserDebt:_}=ee(),v=()=>{l(!o),"debt_id"in i&&(c(`/userPaymentDetails/${i==null?void 0:i.debt_id}`),_(i))},b=()=>o?a(V,{}):a(Y,{}),m=()=>u(H,{children:[t&&a("div",{className:"PaymentTable__container--icon",children:b()}),t?r.buttonDetail.toLocaleUpperCase():r.buttonAction.toLocaleUpperCase()]});return a(ie,{className:`${(y=>`PaymentTable__container--button ${y?"PaymentTable__container--button-icon":""} ${n?"PaymentTable__container--button-disabled":""}`)(t)}`,disabled:n,onClick:v,...e,children:m()})};P.defaultProps={};const x=e=>{const{content:t,bold:n=!1}=e;return a(E,{className:(o=>`PaymentTable__container--field ${o?"PaymentTable__container--field-bold":""}`)(n),children:t})},p=C().global.table.TablePaymentAdmin.TableHeader,se=[{name:p.concept,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(x,{content:`${(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:"-"}`,bold:!0})}},{name:p.originalAmount,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(x,{content:`S/ ${(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""}`})}},{name:p.amountPaid,selector:e=>{var t;return(t=e==null?void 0:e.amount_paid)!=null?t:0},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(x,{content:`S/ ${(t=e==null?void 0:e.amount_paid)!=null?t:0}`,bold:!0})}},{name:p.paymentDate,selector:e=>{var t;return(t=e==null?void 0:e.operation_date)!=null?t:""},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(x,{content:(t=e==null?void 0:e.operation_date)!=null?t:""})}},{name:p.actions,center:!0,button:!0,minWidth:"150px",cell:e=>a(P,{disabled:Q(e==null?void 0:e.payment_status),data:e})},{name:"",center:!0,button:!0,minWidth:"150px",cell:()=>a(P,{"data-tag":"allowRowEvents",icon:!0})}],{BREAKPOINTS:d}=w,re=g.div`
  .UserPaymentListView {
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
`,S=e=>{const{data:t,isLoading:n}=D(0,50),{data:i}=t!=null?t:{};return a(re,{className:"UserPaymentListView ",children:(()=>n?a(K,{variant:"rounded",height:720,width:"100%"}):a(B,{data:i!=null?i:[],columns:se,expandableRows:!0,expandableRowsComponent:N,expandOnRowClicked:!0,progressPending:n}))()})};S.defaultProps={};const z=e=>a(te,{children:a(S,{})});z.defaultProps={};const _e=z;export{_e as default};
