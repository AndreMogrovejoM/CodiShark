import{B as S}from"./Button.cf3005dc.js";import{R as F,S as Y}from"./PaymentTable.helpers.406fee4a.js";import{u as C,g as M}from"./i18n.hooks.95fc6568.js";import{s as w,a,j as s,C as A,u as Q,G as U,ag as W,r as u,ax as G}from"./index.9af5e57e.js";import{f as L}from"./file-download.9541e5f9.js";import{c as H,e as q,f as J}from"./administrator.service.hooks.bcfacd4a.js";import{n as R,g as X,a as Z}from"./common.utils.106d572f.js";import{d as ee,p as te,c as ae}from"./validations.utils.2a36a592.js";import{T as ne}from"./Table.20fe0d71.js";import{L as ie}from"./Layout.container.9056670d.js";import"./auth.service.hooks.6abcf1c4.js";const re=w.div`
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
`,V=t=>{const{labels:e,onChange:i}=t,o=C().global;return a(re,{className:"SelectComponent",children:s("select",{className:"SelectComponent__component",onChange:i,children:[a("option",{defaultValue:"",disabled:!0,children:o.selectFilter}),e.map((n,l)=>a("option",{className:"SelectComponent__option",value:n,children:n},l))]})})};V.defaultProps={};const se="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:oe}=A,le=w.div`
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

          @media screen and (min-width: ${oe.desktop}px) {
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
`,z=t=>{const{data:e}=t,{user:i}=e!=null?e:{},o=Q(),n=C().components.OperationalDetails,l=()=>a(U,{children:a("div",{className:"PaymentDetails__component--details",children:s("div",{className:"PaymentDetails__component--details-content",children:[a("img",{src:se,alt:n.alt,className:"PaymentDetails__container--image"}),a("p",{className:"PaymentDetails__text--paragraph",children:n.paragraphDetails})]})})}),p=()=>`AdminPaymentListView__component--button  ${ee(e==null?void 0:e.payment_status)?"AdminPaymentListView__component--button-disabled":""}`,d=()=>a(S,{variant:"contained",className:p(),onClick:()=>{e&&"id"in e&&o(`/userPaymentDetails/${e.id}`)},children:n.button}),x=()=>{var _,c,m,g,y,h,P;return s("div",{className:"PaymentDetails__component--details PaymentDetails__component--details-component PaymentDetails__component--details-operation",children:[s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[n.customerName,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:`${(_=i==null?void 0:i.first_name)!=null?_:"-"} ${(c=i==null?void 0:i.last_name)!=null?c:"-"} ${(m=i==null?void 0:i.mother_last_name)!=null?m:"-"}`})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[n.amountPaid,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:` S/ ${R((g=e==null?void 0:e.amount_paid)!=null?g:0)}`})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[n.date,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:W(e==null?void 0:e.operation_date).format("DD/MM/YYYY")})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[n.hour,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(y=e==null?void 0:e.operation_time)!=null?y:"-"})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[n.paymentMedium,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(h=e==null?void 0:e.payment_method)!=null?h:"-"})]}),s("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[n.paymentStatus,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(P=e==null?void 0:e.payment_status)!=null?P:"-"})]}),d()]})};return s(le,{className:"PaymentDetails",children:[a("h2",{className:"PaymentDetails__text--subtitle PaymentDetails__container--separate",children:n.titleDetails}),e?x():l()]})};z.defaultProps={};const{BREAKPOINTS:B}=A,ce=w.div`
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

        @media screen and (max-width: ${B.mobile}px) {
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

      @media screen and (max-width: ${B.mobile}px) {
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
`,I=t=>{const{rowsPerPage:e,rowCount:i,onChangeRowsPerPage:o}=t,{currentPage:n,onChangePage:l}=t,p=C().global.table.TablePaymentUser.Pagination,d=Z(i,e),x=X(d),c=n*e-e+1,m=n===1,g=n===d,y=u.exports.useCallback(()=>l(n-1),[n,l]),h=u.exports.useCallback(()=>l(n+1),[n,l]),P=u.exports.useCallback(r=>l(r),[l]),k=r=>a("div",{...r,children:r==null?void 0:r.value}),D=p.legend(c,i,i),N=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,T=r=>`Pagination__container--numbers ${r===n?"Pagination__container--numbers-activated":""}`;return a(ce,{className:"Pagination",children:s("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:D}),s("div",{className:"Pagination__container--pagination",children:[a("button",{className:N(m),"aria-disabled":m,onClick:y,disabled:m,children:p.back}),x.map((r,K)=>a(k,{value:r,className:T(r),onClick:()=>P(r)},K)),a("button",{className:N(g),"aria-disabled":g,onClick:h,disabled:g,children:p.next})]})]})})};I.defaultProps={};const $=w.div`
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
`,me=t=>a(I,{...t}),O=t=>{const{data:e,columns:i,onRowClicked:o,progressPending:n}=t;return a($,{className:"PaymentTable",children:a(ne,{columns:i,data:e,paginationPerPage:te,paginationRowsPerPageOptions:ae,onRowClicked:o,paginationComponent:me,progressPending:n})})};O.defaultProps={};const v=t=>{const{content:e,bold:i=!1}=t;return a($,{className:(n=>`PaymentTable__container--field ${n?"PaymentTable__container--field-bold":""}`)(i),children:e})},de=t=>{const{content:e}=t;return a($,{className:`PaymentTable__container--chip ${(o=>{switch(o){case"Pagado":return"PaymentTable__container--chip-green";case"Incompleto":return"PaymentTable__container--chip-gray";case"Pendiente":return"PaymentTable__container--chip-yellow";case"Cancelado":return"PaymentTable__container--chip-error";default:return"PaymentTable__container--chip-green"}})(e)}`,children:a("p",{className:"PaymentTable__text--chip",children:e})})},b=M().global.table.TablePaymentUser.TableHeader,pe=[{name:b.name,selector:t=>{var e,i;return(i=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?i:""},sortable:!0,ignoreRowClick:!0,cell:t=>{var e,i,o,n;return a(v,{content:`${(i=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?i:"-"} ${(n=(o=t==null?void 0:t.user)==null?void 0:o.last_name)!=null?n:"-"}`,bold:!0})}},{name:b.date,selector:t=>{var e;return(e=t==null?void 0:t.operation_date)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(v,{content:(e=t==null?void 0:t.operation_date)!=null?e:""})}},{name:b.amount,selector:t=>{var e;return(e=t==null?void 0:t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(v,{content:`S./ ${R((e=t==null?void 0:t.amount_paid)!=null?e:0)}`})}},{name:b.method,selector:t=>{var e;return(e=t==null?void 0:t.payment_method)!=null?e:""},ignoreRowClick:!0,cell:t=>{var e;return a(v,{content:(e=t==null?void 0:t.payment_method)!=null?e:""})}},{name:b.state,button:!0,ignoreRowClick:!0,cell:t=>a(de,{content:t==null?void 0:t.payment_status})},{name:b.action,center:!0,cell:()=>a(F,{})}],{BREAKPOINTS:f}=A,ge=w.div`
  .AdminPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${f.desktop}px) {
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
        @media screen and (min-width: ${f.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${f.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${f.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${f.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${f.wide}px) {
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
`,j=t=>{const[e]=G(),i=e.get("status")||void 0,[o,n]=u.exports.useState(i),[l,p]=u.exports.useState(""),{data:d,isLoading:x}=H(o,50,l),[_,c]=u.exports.useState(!1),{data:m}=d!=null?d:{},[g,y]=u.exports.useState(),h=C().pages.UserOperationPanel,P=r=>{p(r.target.value)},k=async()=>{try{c(!0);const r=await q();L(r,"report.pdf"),c(!1)}catch{console.log("Error at trying to print pdf")}},D=async()=>{try{c(!0);const r=await J();L(r,"report.csv"),c(!1)}catch{console.log("Error at trying to print excel")}},N=()=>s("div",{className:"AdminPaymentListView__container--actions AdminPaymentListView__container--separate",children:[s("div",{className:"AdminPaymentListView__container--button",children:[a(S,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:k,disabled:_,children:h.buttonPdf}),a(S,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:D,disabled:_,children:h.buttonExcel}),a(V,{labels:["Pagado","Pendiente","Cancelado","Incompleto"],onChange:r=>n(r.target.value)})]}),a(Y,{onChange:P})]}),T=()=>a(O,{data:m!=null?m:[],columns:pe,onRowClicked:r=>y(r),progressPending:x});return a(ge,{className:"AdminPaymentListView ",children:s("div",{className:"AdminPaymentListView__container",children:[a("div",{className:"AdminPaymentListView__container--separate",children:a("h1",{className:"AdminPaymentListView__text--title",children:h.title})}),s("div",{className:"AdminPaymentListView__container--layout",children:[s("div",{className:"AdminPaymentListView__container--table",children:[N(),T()]}),a("div",{className:"AdminPaymentListView__container--details",children:a(z,{data:g})})]})]})})};j.defaultProps={};const E=t=>a(ie,{children:a(j,{})});E.defaultProps={};const Ce=E;export{Ce as default};
