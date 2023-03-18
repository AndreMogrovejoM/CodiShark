import{B as x}from"./Button.b7b90e42.js";import{r as Q,S as W}from"./rightArrow.38918c67.js";import{u as S,g as H}from"./i18n.hooks.b18bfc08.js";import{s as T,a,j as s,C as O,u as U,G as q,ag as G,aE as J,r as f}from"./index.4d215d3b.js";import{f as z}from"./file-download.9541e5f9.js";import{e as X,f as Z,c as ee,g as te,h as ae}from"./administrator.service.hooks.57ff3686.js";import{P as ne}from"./PaginationCustom.59e58b01.js";import{T as ie}from"./Table.c063fb38.js";import{z as se,A as re,B as oe}from"./validations.utils.b4bff25c.js";import{n as I}from"./common.utils.106d572f.js";import{L as le}from"./Layout.container.4c7bfaa9.js";import"./Box.85ba67d3.js";const me=T.div`
  .SelectComponent {
    &__component {
      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      outline: none;

      border-radius: 0.8rem;
      padding: 0.4rem 0.8rem;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6rem;
      cursor: pointer;
      background-color: var(--palette-white);

      &::-ms-expand {
        display: none;
      }
    }

    &__option {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
`,j=t=>{const{labels:e,onChange:n}=t,o=S().global;return a(me,{className:"SelectComponent",children:s("select",{className:"SelectComponent__component",onChange:n,children:[a("option",{defaultValue:"",disabled:!0,children:o.selectFilter}),e.map((r,m)=>a("option",{className:"SelectComponent__option",value:r,children:r},m))]})})};j.defaultProps={};const L=T.div`
  .AdminPaymentTable {
    &__container {
      &--button {
        background-color: var(--palette-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0.08rem;

        &-icon {
          width: 1.6rem;
          height: 1.6rem;
          fill: var(--palette-white);
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
`,ce=t=>a(ne,{...t}),M=t=>{const{data:e,columns:n,onRowClicked:o,progressPending:r}=t,{totalRows:m,setPage:d,page:i}=t,u=S().global.table.TablePaymentUser.Pagination;return a(L,{className:"AdminPaymentTable",children:a(ie,{columns:n,data:e,paginationPerPage:se,paginationRowsPerPageOptions:re,onRowClicked:o,paginationComponent:h=>ce({...h,totalRows:m,setPage:d,page:i,t:u}),progressPending:r})})};M.defaultProps={};const de="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:E}=O,pe=T.div`
  .PaymentDetails {
    &__renderActions {
      display: flex;
      gap: 1.6rem;
    }

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
        background-color: var(--palette-greyBackground);
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: ${E.tablet}px) {
          background-color: var(--palette-white);
        }

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

          @media screen and (min-width: ${E.desktop}px) {
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
`,F=t=>{const{data:e}=t,{user:n,payment_status:o,id:r}=e!=null?e:{},m=o==="Pendiente",d=U(),i=S().components.OperationalDetails,{mutateAsync:u,reset:h,isLoading:w}=X(),{mutateAsync:y,reset:V,isLoading:c}=Z(),$=()=>a(q,{children:a("div",{className:"PaymentDetails__component--details",children:s("div",{className:"PaymentDetails__component--details-content",children:[a("img",{src:de,alt:i.alt,className:"PaymentDetails__container--image"}),a("p",{className:"PaymentDetails__text--paragraph",children:i.paragraphDetails})]})})}),P=()=>`AdminPaymentListView__component--button  ${oe(e==null?void 0:e.payment_status)?"AdminPaymentListView__component--button-disabled":""}`,R=()=>s("div",{className:"PaymentDetails__renderActions",children:[a(x,{variant:"contained",className:P(),onClick:()=>{e&&"id"in e&&d(`/userPaymentDetails/${e.id}`)},children:i.button}),m&&a(x,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:async()=>{u(r),h()},disabled:w||c,children:i.validate}),m&&a(x,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:async()=>{y(r),V()},disabled:w||c,children:i.invalide})]}),B=()=>{var g,v,A,N,D,C,b;return s("div",{className:"PaymentDetails__component--details PaymentDetails__component--details-component PaymentDetails__component--details-operation",children:[s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.customerName,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:`${(g=n==null?void 0:n.first_name)!=null?g:"-"} ${(v=n==null?void 0:n.last_name)!=null?v:"-"} ${(A=n==null?void 0:n.mother_last_name)!=null?A:"-"}`})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.amountPaid,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:` S/ ${I((N=e==null?void 0:e.amount_paid)!=null?N:0)}`})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.date,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:G(e==null?void 0:e.operation_date).format("DD/MM/YYYY")})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.hour,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(D=e==null?void 0:e.operation_time)!=null?D:"-"})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentMedium,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(C=e==null?void 0:e.payment_method)!=null?C:"-"})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentStatus,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(b=e==null?void 0:e.payment_status)!=null?b:"-"})]}),R()]})};return s(pe,{className:"PaymentDetails",children:[a("h2",{className:"PaymentDetails__text--subtitle PaymentDetails__container--separate",children:i.titleDetails}),e?B():$()]})};F.defaultProps={};const k=t=>{const{content:e,bold:n=!1}=t;return a(L,{className:(r=>`AdminPaymentTable__container--field ${r?"AdminPaymentTable__container--field-bold":""}`)(n),children:e})},he=t=>{const{content:e}=t;return a(L,{className:`AdminPaymentTable__container--chip ${(o=>{switch(o){case"Pagado":return"AdminPaymentTable__container--chip-green";case"Incompleto":return"AdminPaymentTable__container--chip-gray";case"Pendiente":return"AdminPaymentTable__container--chip-yellow";case"Cancelado":return"AdminPaymentTable__container--chip-error";default:return"AdminPaymentTable__container--chip-green"}})(e)}`,children:a("p",{className:"AdminPaymentTable__text--chip",children:e})})},ge=()=>a(L,{className:"AdminPaymentTable__container--button","data-tag":"allowRowEvents",children:a("img",{src:Q,className:"AdminPaymentTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})}),_=H().global.table.TablePaymentAdmin.TableHeader,_e=[{name:_.name,selector:t=>{var e,n;return(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:""},sortable:!0,ignoreRowClick:!0,cell:t=>{var e,n,o,r;return a(k,{content:`${(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:"-"} ${(r=(o=t==null?void 0:t.user)==null?void 0:o.last_name)!=null?r:"-"}`,bold:!0})}},{name:_.date,selector:t=>{var e;return(e=t==null?void 0:t.operation_date)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(k,{content:(e=t==null?void 0:t.operation_date)!=null?e:""})}},{name:_.amount,selector:t=>{var e;return(e=t==null?void 0:t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(k,{content:`S/. ${I((e=t==null?void 0:t.amount_paid)!=null?e:0)}`})}},{name:_.method,selector:t=>{var e;return(e=t==null?void 0:t.payment_method)!=null?e:""},ignoreRowClick:!0,cell:t=>{var e;return a(k,{content:(e=t==null?void 0:t.payment_method)!=null?e:""})}},{name:_.state,button:!0,ignoreRowClick:!0,cell:t=>a(he,{content:t==null?void 0:t.payment_status})},{name:_.action,center:!0,cell:()=>a(ge,{})}],{BREAKPOINTS:p}=O,ue=T.div`
  .AdminPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: auto;

      @media screen and (min-width: ${p.mobile}px) {
        height: 90vh;
      }

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
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.6rem;
        border-radius: 0.8rem;

        &-disabled {
          background-color: var(--palette-greyBackground);
          opacity: 0.8;
          pointer-events: none;
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
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
`,Y=t=>{var b;const[e]=J(),n=e.get("status")||void 0,[o,r]=f.exports.useState(n),[m,d]=f.exports.useState(!1),[i,u]=f.exports.useState(""),[h,w]=f.exports.useState(0),{data:y,isLoading:V}=ee(10*h,10,o,i),{pages:c}=y!=null?y:{},$=(b=c==null?void 0:c[0].totalOperations)!=null?b:0,P=c==null?void 0:c.flatMap(l=>l.data),[R,B]=f.exports.useState(),g=S().pages.UserOperationPanel,v=l=>{u(l.target.value)},A=async()=>{try{d(!0);const l=await te();z(l,"report.pdf"),d(!1)}catch{console.log("Error at trying to print pdf")}},N=async()=>{try{d(!0);const l=await ae();z(l,"report.csv"),d(!1)}catch{console.log("Error at trying to print excel")}},D=()=>s("div",{className:"AdminPaymentListView__container--actions AdminPaymentListView__container--separate",children:[s("div",{className:"AdminPaymentListView__container--button",children:[a(x,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:A,disabled:m,children:g.buttonPdf}),a(x,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:N,disabled:m,children:g.buttonExcel}),a(j,{labels:["Pagado","Pendiente","Cancelado","Incompleto"],onChange:l=>r(l.target.value)})]}),a(W,{onChange:v})]}),C=()=>a(M,{data:P!=null?P:[],columns:_e,onRowClicked:l=>B(l),progressPending:V,totalRows:$,setPage:w,page:h});return a(ue,{className:"AdminPaymentListView ",children:s("div",{className:"AdminPaymentListView__container",children:[a("div",{className:"AdminPaymentListView__container--separate",children:a("h1",{className:"AdminPaymentListView__text--title",children:g.title})}),s("div",{className:"AdminPaymentListView__container--layout",children:[s("div",{className:"AdminPaymentListView__container--table",children:[D(),C()]}),a("div",{className:"AdminPaymentListView__container--details",children:a(F,{data:R})})]})]})})};Y.defaultProps={};const K=t=>a(le,{children:a(Y,{})});K.defaultProps={};const Se=K;export{Se as default};
