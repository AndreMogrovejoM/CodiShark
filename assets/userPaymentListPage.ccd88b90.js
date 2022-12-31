import{S as $}from"./SkeletonComponent.b3058608.js";import{s as h,a,j as _,ag as N,C as w,r as C,u as E,G as S}from"./index.7494b9e3.js";import{c as B}from"./users.service.hooks.8d1d8aca.js";import{g as y,u as z}from"./i18n.hooks.710219a4.js";import{T as L}from"./Table.75a5f2ce.js";import{z as O,A as j,B as A}from"./validations.utils.3b06e1db.js";import{P as I}from"./PaginationCustom.9957cc44.js";import{d as V,a as W}from"./Remove.2eb5323b.js";import{L as Y}from"./Layout.container.b855285e.js";import"./common.utils.106d572f.js";import"./Box.77cdc8b2.js";const D=h.div`
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
`,T=e=>{var i;const{data:t}=e,{debt:n}=t!=null?t:{},o=y().global.table.TablePaymentUser.TableRowsExpand,r=(s,l)=>_("div",{className:"ExpandableRowsComponent__container__expand-text",children:[a("div",{className:"ExpandableRowsComponent__container__expand-static",children:a("p",{className:"ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold",children:`${s} `})}),a("p",{className:"ExpandableRowsComponent__container--field ",children:l!=null?l:"-"})]});return a(D,{className:"ExpandableRowsComponent",children:_("div",{className:"ExpandableRowsComponent__container__expand",children:[r(o.entity,n==null?void 0:n.banking_entity),r(o.typeDebt,n==null?void 0:n.product),r(o.typeExchange,n==null?void 0:n.currency),r(o.date,`${N(t==null?void 0:t.operation_date).format("DD / MM / YYYY")} ${(i=t==null?void 0:t.operation_time)!=null?i:"-"}`)]})})};T.defaultProps={};const{BREAKPOINTS:P}=w,x=h.div`
  .UserPaymentTable {
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
        padding: 0.4rem 1.2rem;

        @media screen and (min-width: ${P.mobile}px) {
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

        @media screen and (min-width: ${P.mobile}px) {
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
`,K=e=>a(I,{...e}),R=e=>{const{data:t,columns:n,expandableRows:o,expandableRowsComponent:r}=e,{expandOnRowClicked:i,progressPending:s}=e,{totalRows:l,setPage:c,page:g}=e,d=z().global.table.TablePaymentUser.Pagination;return a(x,{className:"UserPaymentTable",children:a(L,{columns:n,data:t,expandableRows:o,expandableRowsComponent:r,expandOnRowClicked:i,paginationPerPage:O,paginationRowsPerPageOptions:j,paginationComponent:u=>K({...u,totalRows:l,setPage:c,page:g,t:d}),expandableIcon:{collapsed:null,expanded:null},progressPending:s})})};R.defaultProps={};const M=h.div``,f=e=>{const{icon:t=!1,disabled:n,data:o}=e,[r,i]=C.exports.useState(!1),s=y().global.table.TablePaymentUser.TableRows,l=E(),c=()=>{i(!r),"debt_id"in o&&l(`/userPaymentDetails/${o==null?void 0:o.id}`)},g=()=>r?a(V,{}):a(W,{}),d=()=>(o==null?void 0:o.payment_status)==="Pagado"?s.buttonAction.toLocaleUpperCase():s.buttonNoDetail.toLocaleUpperCase(),u=()=>_(S,{children:[t&&a("div",{className:"UserPaymentTable__container--icon",children:g()}),t?s.buttonDetail.toLocaleUpperCase():d()]});return a(M,{className:`${(v=>`UserPaymentTable__container--button ${v?"UserPaymentTable__container--button-icon":""} ${n?"UserPaymentTable__container--button-disabled":""}`)(t)}`,disabled:n,onClick:c,...e,children:u()})};f.defaultProps={};const b=e=>{const{content:t,bold:n=!1}=e;return a(x,{className:(r=>` UserPaymentTable__container--field ${r?" UserPaymentTable__container--field-bold":""}`)(n),children:t})},F=e=>{const{content:t}=e;return a(x,{className:` UserPaymentTable__container--chip ${(o=>{switch(o){case"Pagado":return" UserPaymentTable__container--chip-green";case"Incompleto":return" UserPaymentTable__container--chip-gray";case"Pendiente":return" UserPaymentTable__container--chip-yellow";case"Cancelado":return" UserPaymentTable__container--chip-error";default:return" UserPaymentTable__container--chip-green"}})(t)}`,children:a("p",{className:" UserPaymentTable__text--chip",children:t})})},m=y().global.table.TablePaymentUser.TableHeader,H=[{name:m.concept,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(b,{content:`${(n=(t=e==null?void 0:e.debt)==null?void 0:t.product)!=null?n:"-"}`,bold:!0})}},{name:m.originalAmount,selector:e=>{var t,n;return(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:e=>{var t,n;return a(b,{content:`S/ ${(n=(t=e==null?void 0:e.debt)==null?void 0:t.capital_debt)!=null?n:""}`})}},{name:m.amountPaid,selector:e=>{var t;return(t=e==null?void 0:e.amount_paid)!=null?t:0},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(b,{content:`S/ ${(t=e==null?void 0:e.amount_paid)!=null?t:0}`,bold:!0})}},{name:m.paymentDate,selector:e=>{var t;return(t=e==null?void 0:e.operation_date)!=null?t:""},wrap:!0,sortable:!0,center:!0,ignoreRowClick:!0,cell:e=>{var t;return a(b,{content:(t=`${e==null?void 0:e.operation_date}`)!=null?t:""})}},{name:m.state,button:!0,ignoreRowClick:!0,cell:e=>a(F,{content:e==null?void 0:e.payment_status})},{name:m.actions,center:!0,button:!0,minWidth:"150px",cell:e=>a(f,{disabled:A(e==null?void 0:e.payment_status),data:e})},{name:"",center:!0,button:!0,minWidth:"150px",cell:()=>a(f,{"data-tag":"allowRowEvents",icon:!0})}],{BREAKPOINTS:p}=w,G=h.div`
  .UserPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${p.desktop}px) {
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

        @media screen and (min-width: ${p.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${p.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${p.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${p.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${p.wide}px) {
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
`,k=e=>{var d;const[t,n]=C.exports.useState(0),{data:o,isLoading:r}=B(10*t,10),{pages:i,pageParams:s}=o!=null?o:{},l=(d=i==null?void 0:i[0].total)!=null?d:0,c=i==null?void 0:i.flatMap(u=>u.data);return console.log({pages:i,pageParams:s}),a(G,{className:"UserPaymentListView ",children:(()=>r?a($,{variant:"rounded",height:720,width:"100%"}):a(R,{data:c!=null?c:[],columns:H,expandableRows:!0,expandableRowsComponent:T,expandOnRowClicked:!0,progressPending:r,totalRows:l,setPage:n,page:t}))()})};k.defaultProps={};const U=e=>a(Y,{children:a(k,{})});U.defaultProps={};const se=U;export{se as default};
