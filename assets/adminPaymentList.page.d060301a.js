import{B as A}from"./Button.a4f8297e.js";import{R as N,a as I,b as E,S as F}from"./PaymentTable.helpers.ff43fc94.js";import{u as L,g as K}from"./i18n.hooks.b934c051.js";import{f as S}from"./file-download.9541e5f9.js";import{s as v,C as $,u as Y,j as s,a,G as M,ag as U,r as y,ax as G}from"./index.e172364c.js";import{b as H,e as Q,d as W}from"./administrator.service.hooks.473b8de9.js";import{d as q,p as J,c as X}from"./validations.utils.2772fe45.js";import{T as Z}from"./Table.e7519fcc.js";import{g as ee,a as te}from"./common.utils.cf38e105.js";import{L as ae}from"./Layout.container.28d71187.js";import"./auth.service.hooks.491fdc41.js";const ne="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:ie}=$,se=v.div`
  .PaymentDetails {
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
        background-color: var(--palette-white);
        display: flex;
        justify-content: center;
        align-items: center;

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

          @media screen and (min-width: ${ie.desktop}px) {
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
`,B=t=>{const{data:e}=t,{user:n}=e!=null?e:{},c=Y(),i=L().components.OperationalDetails,l=()=>a(M,{children:a("div",{className:"PaymentDetails__component--details",children:s("div",{className:"PaymentDetails__component--details-content",children:[a("img",{src:ne,alt:i.alt,className:"PaymentDetails__container--image"}),a("p",{className:"PaymentDetails__text--paragraph",children:i.paragraphDetails})]})})}),m=()=>`AdminPaymentListView__component--button  ${q(e==null?void 0:e.payment_status)?"AdminPaymentListView__component--button-disabled":""}`,_=()=>a(A,{variant:"contained",className:m(),onClick:()=>{e&&"id"in e&&c(`/userPaymentDetails/${e.id}`)},children:i.button}),P=()=>{var p,d,g,h,u,b;return s("div",{className:"PaymentDetails__component--details PaymentDetails__component--details-component PaymentDetails__component--details-operation",children:[s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.customerName,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:`${(p=n==null?void 0:n.first_name)!=null?p:"-"} ${(d=n==null?void 0:n.last_name)!=null?d:"-"} ${(g=n==null?void 0:n.mother_last_name)!=null?g:"-"}`})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.amountPaid,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:` S/ ${e==null?void 0:e.amount_paid.toFixed(2)}`})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.date,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:U(e==null?void 0:e.operation_date).format("DD/MM/YYYY")})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.hour,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(h=e==null?void 0:e.operation_time)!=null?h:"-"})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentMedium,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(u=e==null?void 0:e.payment_method)!=null?u:"-"})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentStatus,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(b=e==null?void 0:e.payment_status)!=null?b:"-"})]}),_()]})};return s(se,{className:"PaymentDetails",children:[a("h2",{className:"PaymentDetails__text--subtitle PaymentDetails__container--separate",children:i.titleDetails}),e?P():l()]})};B.defaultProps={};const{BREAKPOINTS:T}=$,re=v.div`
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
`,R=t=>{const{rowsPerPage:e,rowCount:n,onChangeRowsPerPage:c}=t,{currentPage:i,onChangePage:l}=t,m=L().global.table.TablePaymentUser.Pagination,_=te(n,e),P=ee(_),d=i*e-e+1,g=i===1,h=i===_,u=y.exports.useCallback(()=>l(i-1),[i,l]),b=y.exports.useCallback(()=>l(i+1),[i,l]),D=y.exports.useCallback(r=>l(r),[l]),k=r=>a("div",{...r,children:r==null?void 0:r.value}),C=m.legend(d,n,n),w=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,o=r=>`Pagination__container--numbers ${r===i?"Pagination__container--numbers-activated":""}`;return a(re,{className:"Pagination",children:s("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:C}),s("div",{className:"Pagination__container--pagination",children:[a("button",{className:w(g),"aria-disabled":g,onClick:u,disabled:g,children:m.back}),P.map((r,j)=>a(k,{value:r,className:o(r),onClick:()=>D(r)},j)),a("button",{className:w(h),"aria-disabled":h,onClick:b,disabled:h,children:m.next})]})]})})};R.defaultProps={};const oe=v.div`
  .PaymentTable {
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
`,le=t=>a(R,{...t}),V=t=>{const{data:e,columns:n,onRowClicked:c,progressPending:i}=t;return a(oe,{className:"PaymentTable",children:a(Z,{columns:n,data:e,paginationPerPage:J,paginationRowsPerPageOptions:X,onRowClicked:c,paginationComponent:le,progressPending:i})})};V.defaultProps={};const f=K().global.table.TablePaymentUser.TableHeader,me=[{name:f.name,selector:t=>{var e,n;return(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:""},sortable:!0,ignoreRowClick:!0,cell:t=>{var e,n,c,i;return a(N,{content:`${(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:"-"} ${(i=(c=t==null?void 0:t.user)==null?void 0:c.last_name)!=null?i:"-"}`,bold:!0})}},{name:f.date,selector:t=>{var e;return(e=t==null?void 0:t.operation_date)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(N,{content:(e=t==null?void 0:t.operation_date)!=null?e:""})}},{name:f.amount,selector:t=>{var e;return(e=t==null?void 0:t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e,n;return a(N,{content:`S./ ${(n=(e=t==null?void 0:t.amount_paid)==null?void 0:e.toFixed(2))!=null?n:0}`})}},{name:f.method,selector:t=>{var e;return(e=t==null?void 0:t.payment_method)!=null?e:""},ignoreRowClick:!0,cell:t=>{var e;return a(N,{content:(e=t==null?void 0:t.payment_method)!=null?e:""})}},{name:f.state,button:!0,ignoreRowClick:!0,cell:t=>a(I,{conditional:(t==null?void 0:t.payment_status)==="Pagado"})},{name:f.action,center:!0,cell:()=>a(E,{})}],{BREAKPOINTS:x}=$,ce=v.div`
  .AdminPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${x.desktop}px) {
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
        @media screen and (min-width: ${x.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${x.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${x.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${x.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${x.wide}px) {
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
`,O=t=>{const[e]=G(),n=e.get("status")||void 0,[c]=y.exports.useState(n),[i,l]=y.exports.useState(""),{data:m,isLoading:_}=H(c,50,i),[P,p]=y.exports.useState(!1),{data:d}=m!=null?m:{},[g,h]=y.exports.useState(),u=L().pages.UserOperationPanel,b=o=>{l(o.target.value)},D=async()=>{try{p(!0);const o=await Q();S(o,"report.pdf"),p(!1)}catch{console.log("Error at trying to print pdf")}},k=async()=>{try{p(!0);const o=await W();S(o,"report.csv"),p(!1)}catch{console.log("Error at trying to print excel")}},C=()=>s("div",{className:"AdminPaymentListView__container--actions AdminPaymentListView__container--separate",children:[s("div",{className:"AdminPaymentListView__container--button",children:[a(A,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:D,disabled:P,children:u.buttonPdf}),a(A,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:k,disabled:P,children:u.buttonExcel})]}),a(F,{onChange:b})]}),w=()=>a(V,{data:d!=null?d:[],columns:me,onRowClicked:o=>h(o),progressPending:_});return a(ce,{className:"AdminPaymentListView ",children:s("div",{className:"AdminPaymentListView__container",children:[a("div",{className:"AdminPaymentListView__container--separate",children:a("h1",{className:"AdminPaymentListView__text--title",children:u.title})}),s("div",{className:"AdminPaymentListView__container--layout",children:[s("div",{className:"AdminPaymentListView__container--table",children:[C(),w()]}),a("div",{className:"AdminPaymentListView__container--details",children:a(B,{data:g})})]})]})})};O.defaultProps={};const z=t=>a(ae,{children:a(O,{})});z.defaultProps={};const we=z;export{we as default};
