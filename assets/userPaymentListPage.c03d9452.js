import{S as K}from"./SkeletonComponent.0b6fb7e6.js";import{b as V}from"./users.service.hooks.69e80bb1.js";import{s as g,a,j as u,ag as W,C as w,r as x,u as Y,G as D}from"./index.9af5e57e.js";import{g as C,u as F}from"./i18n.hooks.95fc6568.js";import{T as G}from"./Table.20fe0d71.js";import{p as H,c as M,d as q}from"./validations.utils.2a36a592.js";import{g as J,a as Q}from"./common.utils.106d572f.js";import{d as X,a as Z}from"./Remove.1f62b974.js";import{L as ee}from"./Layout.container.9056670d.js";import"./auth.service.hooks.6abcf1c4.js";const te=g.div`
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
`,$=e=>{var s;const{data:t}=e,{debt:n}=t!=null?t:{},o=C().global.table.TablePaymentAdmin.TableRowsExpand,i=(l,c)=>u("div",{className:"ExpandableRowsComponent__container__expand-text",children:[a("div",{className:"ExpandableRowsComponent__container__expand-static",children:a("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${l} `})}),a("p",{className:"ExpandableRowsComponent__container--field ",children:c!=null?c:"-"})]});return a(te,{className:"ExpandableRowsComponent",children:u("div",{className:"ExpandableRowsComponent__container__expand",children:[i(o.entity,n==null?void 0:n.banking_entity),i(o.typeDebt,n==null?void 0:n.product),i(o.typeExchange,n==null?void 0:n.currency),i(o.date,`${W(t==null?void 0:t.operation_date).format("DD / MM / YYYY")} ${(s=t==null?void 0:t.operation_time)!=null?s:"-"}`)]})})};$.defaultProps={};const{BREAKPOINTS:R}=w,ne=g.div`
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
`,B=e=>{const{rowsPerPage:t,rowCount:n,onChangeRowsPerPage:o}=e,{currentPage:i,onChangePage:s}=e,l=F().global.table.TablePaymentAdmin.Pagination,c=Q(n,t),f=J(c),b=i*t-t+1,p=i===1,h=i===c,y=x.exports.useCallback(()=>s(i-1),[i,s]),A=x.exports.useCallback(()=>s(i+1),[i,s]),I=x.exports.useCallback(r=>s(r),[s]),L=r=>a("div",{...r,children:r==null?void 0:r.value}),O=l.legend(b,n,n),T=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,j=r=>`Pagination__container--numbers ${r===i?"Pagination__container--numbers-activated":""}`;return a(ne,{className:"Pagination",children:u("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:O}),u("div",{className:"Pagination__container--pagination",children:[a("button",{className:T(p),"aria-disabled":p,onClick:y,disabled:p,children:l.back}),f.map((r,U)=>a(L,{value:r,className:j(r),onClick:()=>I(r)},U)),a("button",{className:T(h),"aria-disabled":h,onClick:A,disabled:h,children:l.next})]})]})})};B.defaultProps={};const{BREAKPOINTS:N}=w,k=g.div`
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

        @media screen and (min-width: ${N.mobile}px) {
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

        @media screen and (min-width: ${N.mobile}px) {
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

        &-gray {
          background: var(--palette-greyBackground);
        }

        &-red {
          background: var(--palette-errorBackground);
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
`,ae=e=>a(B,{...e}),E=e=>{const{data:t,columns:n,expandableRows:o,expandableRowsComponent:i}=e,{expandOnRowClicked:s,progressPending:l}=e;return a(k,{className:"PaymentTable",children:a(G,{columns:n,data:t,expandableRows:o,expandableRowsComponent:i,expandOnRowClicked:s,paginationPerPage:H,paginationRowsPerPageOptions:M,paginationComponent:ae,expandableIcon:{collapsed:null,expanded:null},progressPending:l})})};E.defaultProps={};const _=e=>{const{content:t,bold:n=!1}=e;return a(k,{className:(i=>`PaymentTable__container--field ${i?"PaymentTable__container--field-bold":""}`)(n),children:t})},oe=e=>{const{content:t}=e;return a(k,{className:`PaymentTable__container--chip ${(o=>{switch(o){case"Pagado":return"PaymentTable__container--chip-green";case"Incompleto":return"PaymentTable__container--chip-gray";case"Pendiente":return"PaymentTable__container--chip-yellow";case"Cancelado":return"PaymentTable__container--chip-error";default:return"PaymentTable__container--chip-green"}})(t)}`,children:a("p",{className:"PaymentTable__text--chip",children:t})})},ie=g.div``,P=e=>{const{icon:t=!1,disabled:n,data:o}=e,[i,s]=x.exports.useState(!1),l=C().global.table.TablePaymentAdmin.TableRows,c=Y(),f=()=>{s(!i),"debt_id"in o&&c(`/userPaymentDetails/${o==null?void 0:o.id}`)},v=()=>i?a(X,{}):a(Z,{}),b=()=>(o==null?void 0:o.payment_status)==="Pagado"?l.buttonAction.toLocaleUpperCase():l.buttonNoDetail.toLocaleUpperCase(),p=()=>u(D,{children:[t&&a("div",{className:"PaymentTable__container--icon",children:v()}),t?l.buttonDetail.toLocaleUpperCase():b()]});return a(ie,{className:`${(y=>`PaymentTable__container--button ${y?"PaymentTable__container--button-icon":""} ${n?"PaymentTable__container--button-disabled":""}`)(t)}`,disabled:n,onClick:f,...e,children:p()})};P.defaultProps={};const d=C().global.table.TablePaymentAdmin.TableHeader,re=[{name:d.concept,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(_,{content:`${(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:"-"}`,bold:!0})}},{name:d.originalAmount,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(_,{content:`S/ ${(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""}`})}},{name:d.amountPaid,selector:e=>{var t;return(t=e==null?void 0:e.amount_paid)!=null?t:0},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(_,{content:`S/ ${(t=e==null?void 0:e.amount_paid)!=null?t:0}`,bold:!0})}},{name:d.paymentDate,selector:e=>{var t;return(t=e==null?void 0:e.operation_date)!=null?t:""},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(_,{content:(t=`${e==null?void 0:e.operation_date}`)!=null?t:""})}},{name:d.state,button:!0,ignoreRowClick:!0,cell:e=>a(oe,{content:e==null?void 0:e.payment_status})},{name:d.actions,center:!0,button:!0,minWidth:"150px",cell:e=>a(P,{disabled:q(e==null?void 0:e.payment_status),data:e})},{name:"",center:!0,button:!0,minWidth:"150px",cell:()=>a(P,{"data-tag":"allowRowEvents",icon:!0})}],{BREAKPOINTS:m}=w,se=g.div`
  .UserPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${m.desktop}px) {
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

        @media screen and (min-width: ${m.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${m.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${m.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${m.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${m.wide}px) {
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
`,S=e=>{const{data:t,isLoading:n}=V(0,50),{data:o}=t!=null?t:{};return a(se,{className:"UserPaymentListView ",children:(()=>n?a(K,{variant:"rounded",height:720,width:"100%"}):a(E,{data:o!=null?o:[],columns:re,expandableRows:!0,expandableRowsComponent:$,expandOnRowClicked:!0,progressPending:n}))()})};S.defaultProps={};const z=e=>a(ee,{children:a(S,{})});z.defaultProps={};const xe=z;export{xe as default};
