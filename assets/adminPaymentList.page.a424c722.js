import{B as v}from"./Button.f3688821.js";import{R as f,a as I,b as E,S as K}from"./PaymentTable.helpers.8bbb0722.js";import{u as w,g as F}from"./i18n.hooks.dcfdf754.js";import{f as C}from"./file-download.9541e5f9.js";import{s as x,C as D,u as U,j as r,a,G as Y,ag as G,r as y}from"./index.78f16c0f.js";import{b as M,e as H,d as W}from"./administrator.service.hooks.be75dbfe.js";import{u as q,L as Q}from"./Layout.container.47df2272.js";import{d as J,p as X,c as Z}from"./validations.utils.0743643c.js";import{T as ee}from"./Table.b5b7a31b.js";import{g as te,a as ae}from"./common.utils.834bf330.js";import"./auth.service.hooks.59ab2c5f.js";import"./useQuery.78699b7d.js";const ne="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:ie}=D,se=x.div`
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
`,L=t=>{const{data:e}=t,{user:n}=e!=null?e:{},l=U(),{setOperationUserDebt:s}=q(),i=w().components.OperationalDetails,c=()=>a(Y,{children:a("div",{className:"PaymentDetails__component--details",children:r("div",{className:"PaymentDetails__component--details-content",children:[a("img",{src:ne,alt:i.alt,className:"PaymentDetails__container--image"}),a("p",{className:"PaymentDetails__text--paragraph",children:i.paragraphDetails})]})})}),d=()=>`AdminPaymentListView__component--button  ${J(e==null?void 0:e.payment_status)?"AdminPaymentListView__component--button-disabled":""}`,p=()=>a(v,{variant:"contained",className:d(),onClick:()=>{e&&"debt_id"in e&&(l(`/userPaymentDetails/${e.debt_id}`),s(e))},children:i.button}),P=()=>r("div",{className:"PaymentDetails__component--details PaymentDetails__component--details-component PaymentDetails__component--details-operation",children:[r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.customerName,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:`${n==null?void 0:n.first_name} ${n==null?void 0:n.last_name} ${n==null?void 0:n.mother_last_name}`})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.amountPaid,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:` S/ ${e==null?void 0:e.amount_paid.toFixed(2)}`})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.date,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:G(e==null?void 0:e.operation_date).format("DD/MM/YYYY")})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.hour,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:e==null?void 0:e.operation_time})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentMedium,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:e==null?void 0:e.payment_method})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentStatus,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:e==null?void 0:e.payment_status})]}),p()]});return r(se,{className:"PaymentDetails",children:[a("h2",{className:"PaymentDetails__text--subtitle PaymentDetails__container--separate",children:i.titleDetails}),e?P():c()]})};L.defaultProps={};const{BREAKPOINTS:A}=D,re=x.div`
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

        @media screen and (max-width: ${A.mobile}px) {
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

      @media screen and (max-width: ${A.mobile}px) {
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
`,T=t=>{const{rowsPerPage:e,rowCount:n,onChangeRowsPerPage:l}=t,{currentPage:s,onChangePage:i}=t,c=w().global.table.TablePaymentUser.Pagination,d=ae(n,e),p=te(d),b=s*e-e+1,_=s===1,u=s===d,N=y.exports.useCallback(()=>i(s-1),[s,i]),m=y.exports.useCallback(()=>i(s+1),[s,i]),S=y.exports.useCallback(o=>i(o),[i]),V=o=>a("div",{...o,children:o==null?void 0:o.value}),O=c.legend(b,n,n),k=o=>`Pagination__text--bold ${o?"Pagination__text--disabled":""}`,z=o=>`Pagination__container--numbers ${o===s?"Pagination__container--numbers-activated":""}`;return a(re,{className:"Pagination",children:r("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:O}),r("div",{className:"Pagination__container--pagination",children:[a("button",{className:k(_),"aria-disabled":_,onClick:N,disabled:_,children:c.back}),p.map((o,j)=>a(V,{value:o,className:z(o),onClick:()=>S(o)},j)),a("button",{className:k(u),"aria-disabled":u,onClick:m,disabled:u,children:c.next})]})]})})};T.defaultProps={};const oe=x.div`
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
`,le=t=>a(T,{...t}),$=t=>{const{data:e,columns:n,onRowClicked:l,progressPending:s}=t;return a(oe,{className:"PaymentTable",children:a(ee,{columns:n,data:e,paginationPerPage:X,paginationRowsPerPageOptions:Z,onRowClicked:l,paginationComponent:le,progressPending:s})})};$.defaultProps={};const g=F().global.table.TablePaymentUser.TableHeader,me=[{name:g.name,selector:t=>{var e,n;return(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:""},sortable:!0,ignoreRowClick:!0,cell:t=>{var e,n,l,s;return a(f,{content:`${(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:"-"} ${(s=(l=t==null?void 0:t.user)==null?void 0:l.last_name)!=null?s:"-"}`,bold:!0})}},{name:g.date,selector:t=>{var e;return(e=t==null?void 0:t.operation_date)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(f,{content:(e=t==null?void 0:t.operation_date)!=null?e:""})}},{name:g.amount,selector:t=>{var e;return(e=t==null?void 0:t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(f,{content:(e=t==null?void 0:t.amount_paid)!=null?e:0})}},{name:g.method,selector:t=>{var e;return(e=t==null?void 0:t.payment_method)!=null?e:""},ignoreRowClick:!0,cell:t=>{var e;return a(f,{content:(e=t==null?void 0:t.payment_method)!=null?e:""})}},{name:g.state,button:!0,ignoreRowClick:!0,cell:t=>a(I,{conditional:(t==null?void 0:t.payment_status)==="Pagado"})},{name:g.action,center:!0,cell:t=>a(E,{row:t==null?void 0:t.id})}],{BREAKPOINTS:h}=D,ce=x.div`
  .AdminPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${h.desktop}px) {
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
        @media screen and (min-width: ${h.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${h.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${h.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${h.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${h.wide}px) {
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
`,B=t=>{const[e,n]=y.exports.useState(""),{data:l,isLoading:s}=M(void 0,50,e),{data:i}=l!=null?l:{},[c,d]=y.exports.useState(),p=w().pages.UserOperationPanel,P=m=>{n(m.target.value)},b=async()=>{try{const m=await H();C(m,"report.pdf")}catch{console.log("Error at trying to print pdf")}},_=async()=>{try{const m=await W();C(m,"report.csv")}catch{console.log("Error at trying to print excel")}},u=()=>r("div",{className:"AdminPaymentListView__container--actions AdminPaymentListView__container--separate",children:[r("div",{className:"AdminPaymentListView__container--button",children:[a(v,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:b,children:p.buttonPdf}),a(v,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:_,children:p.buttonExcel})]}),a(K,{onChange:P})]}),N=()=>a($,{data:i!=null?i:[],columns:me,onRowClicked:m=>d(m),progressPending:s});return a(ce,{className:"AdminPaymentListView ",children:r("div",{className:"AdminPaymentListView__container",children:[a("div",{className:"AdminPaymentListView__container--separate",children:a("h1",{className:"AdminPaymentListView__text--title",children:p.title})}),r("div",{className:"AdminPaymentListView__container--layout",children:[r("div",{className:"AdminPaymentListView__container--table",children:[u(),N()]}),a("div",{className:"AdminPaymentListView__container--details",children:a(L,{data:c})})]})]})})};B.defaultProps={};const R=t=>a(Q,{children:a(B,{})});R.defaultProps={};const ve=R;export{ve as default};
