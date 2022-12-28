import{B as k}from"./Button.504dfbe8.js";import{r as W,S as H}from"./rightArrow.856ad101.js";import{u as D,g as U}from"./i18n.hooks.9d5c239d.js";import{s as N,a,j as r,C as $,u as q,G,ag as J,aA as X,r as y}from"./index.a3dc70de.js";import{f as T}from"./file-download.9541e5f9.js";import{c as Z,e as ee,f as te}from"./administrator.service.hooks.a9b4f567.js";import{P as ae}from"./PaginationCustom.e682a72b.js";import{T as ne}from"./Table.b206c3a2.js";import{y as ie,z as re,A as se}from"./validations.utils.84d5da41.js";import{n as R}from"./common.utils.106d572f.js";import{L as oe}from"./Layout.container.33c3d07e.js";const le=N.div`
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
`,V=t=>{const{labels:e,onChange:n}=t,s=D().global;return a(le,{className:"SelectComponent",children:r("select",{className:"SelectComponent__component",onChange:n,children:[a("option",{defaultValue:"",disabled:!0,children:s.selectFilter}),e.map((i,m)=>a("option",{className:"SelectComponent__option",value:i,children:i},m))]})})};V.defaultProps={};const A=N.div`
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
`,me=t=>a(ae,{...t}),B=t=>{const{data:e,columns:n,onRowClicked:s,progressPending:i}=t,{totalRows:m,setPage:c,page:_}=t,u=D().global.table.TablePaymentUser.Pagination;return a(A,{className:"AdminPaymentTable",children:a(ne,{columns:n,data:e,paginationPerPage:ie,paginationRowsPerPageOptions:re,onRowClicked:s,paginationComponent:d=>me({...d,totalRows:m,setPage:c,page:_,t:u}),progressPending:i})})};B.defaultProps={};const ce="/CodiShark/assets/detailsPay.a840b3ee.svg",{BREAKPOINTS:L}=$,de=N.div`
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
        background-color: var(--palette-greyBackground);
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: ${L.tablet}px) {
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

          @media screen and (min-width: ${L.desktop}px) {
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
`,z=t=>{const{data:e}=t,{user:n}=e!=null?e:{},s=q(),i=D().components.OperationalDetails,m=()=>a(G,{children:a("div",{className:"PaymentDetails__component--details",children:r("div",{className:"PaymentDetails__component--details-content",children:[a("img",{src:ce,alt:i.alt,className:"PaymentDetails__container--image"}),a("p",{className:"PaymentDetails__text--paragraph",children:i.paragraphDetails})]})})}),c=()=>`AdminPaymentListView__component--button  ${se(e==null?void 0:e.payment_status)?"AdminPaymentListView__component--button-disabled":""}`,_=()=>a(k,{variant:"contained",className:c(),onClick:()=>{e&&"id"in e&&s(`/userPaymentDetails/${e.id}`)},children:i.button}),u=()=>{var d,P,h,b,l,f,x;return r("div",{className:"PaymentDetails__component--details PaymentDetails__component--details-component PaymentDetails__component--details-operation",children:[r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.customerName,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:`${(d=n==null?void 0:n.first_name)!=null?d:"-"} ${(P=n==null?void 0:n.last_name)!=null?P:"-"} ${(h=n==null?void 0:n.mother_last_name)!=null?h:"-"}`})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.amountPaid,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:` S/ ${R((b=e==null?void 0:e.amount_paid)!=null?b:0)}`})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.date,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:J(e==null?void 0:e.operation_date).format("DD/MM/YYYY")})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.hour,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(l=e==null?void 0:e.operation_time)!=null?l:"-"})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentMedium,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(f=e==null?void 0:e.payment_method)!=null?f:"-"})]}),r("p",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue",children:[i.paymentStatus,a("span",{className:"PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray",children:(x=e==null?void 0:e.payment_status)!=null?x:"-"})]}),_()]})};return r(de,{className:"PaymentDetails",children:[a("h2",{className:"PaymentDetails__text--subtitle PaymentDetails__container--separate",children:i.titleDetails}),e?u():m()]})};z.defaultProps={};const w=t=>{const{content:e,bold:n=!1}=t;return a(A,{className:(i=>`AdminPaymentTable__container--field ${i?"AdminPaymentTable__container--field-bold":""}`)(n),children:e})},pe=t=>{const{content:e}=t;return a(A,{className:`AdminPaymentTable__container--chip ${(s=>{switch(s){case"Pagado":return"AdminPaymentTable__container--chip-green";case"Incompleto":return"AdminPaymentTable__container--chip-gray";case"Pendiente":return"AdminPaymentTable__container--chip-yellow";case"Cancelado":return"AdminPaymentTable__container--chip-error";default:return"AdminPaymentTable__container--chip-green"}})(e)}`,children:a("p",{className:"AdminPaymentTable__text--chip",children:e})})},he=()=>a(A,{className:"AdminPaymentTable__container--button","data-tag":"allowRowEvents",children:a("img",{src:W,className:"AdminPaymentTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})}),g=U().global.table.TablePaymentAdmin.TableHeader,ge=[{name:g.name,selector:t=>{var e,n;return(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:""},sortable:!0,ignoreRowClick:!0,cell:t=>{var e,n,s,i;return a(w,{content:`${(n=(e=t==null?void 0:t.user)==null?void 0:e.first_name)!=null?n:"-"} ${(i=(s=t==null?void 0:t.user)==null?void 0:s.last_name)!=null?i:"-"}`,bold:!0})}},{name:g.date,selector:t=>{var e;return(e=t==null?void 0:t.operation_date)!=null?e:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(w,{content:(e=t==null?void 0:t.operation_date)!=null?e:""})}},{name:g.amount,selector:t=>{var e;return(e=t==null?void 0:t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:t=>{var e;return a(w,{content:`S./ ${R((e=t==null?void 0:t.amount_paid)!=null?e:0)}`})}},{name:g.method,selector:t=>{var e;return(e=t==null?void 0:t.payment_method)!=null?e:""},ignoreRowClick:!0,cell:t=>{var e;return a(w,{content:(e=t==null?void 0:t.payment_method)!=null?e:""})}},{name:g.state,button:!0,ignoreRowClick:!0,cell:t=>a(pe,{content:t==null?void 0:t.payment_status})},{name:g.action,center:!0,cell:()=>a(he,{})}],{BREAKPOINTS:p}=$,_e=N.div`
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
`,O=t=>{var S;const[e]=X(),n=e.get("status")||void 0,[s,i]=y.exports.useState(n),[m,c]=y.exports.useState(!1),[_,u]=y.exports.useState(""),[d,P]=y.exports.useState(0),{data:h,isLoading:b}=Z(10*d,10,s,_),{pages:l,pageParams:f}=h!=null?h:{},x=(S=l==null?void 0:l[0].totalOperations)!=null?S:0,v=l==null?void 0:l.flatMap(o=>o.data);console.log({pages:l,pageParams:f});const[I,j]=y.exports.useState(),C=D().pages.UserOperationPanel,F=o=>{u(o.target.value)},M=async()=>{try{c(!0);const o=await ee();T(o,"report.pdf"),c(!1)}catch{console.log("Error at trying to print pdf")}},Y=async()=>{try{c(!0);const o=await te();T(o,"report.csv"),c(!1)}catch{console.log("Error at trying to print excel")}},K=()=>r("div",{className:"AdminPaymentListView__container--actions AdminPaymentListView__container--separate",children:[r("div",{className:"AdminPaymentListView__container--button",children:[a(k,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:M,disabled:m,children:C.buttonPdf}),a(k,{variant:"contained",className:"AdminPaymentListView__component--button",onClick:Y,disabled:m,children:C.buttonExcel}),a(V,{labels:["Pagado","Pendiente","Cancelado","Incompleto"],onChange:o=>i(o.target.value)})]}),a(H,{onChange:F})]}),Q=()=>a(B,{data:v!=null?v:[],columns:ge,onRowClicked:o=>j(o),progressPending:b,totalRows:x,setPage:P,page:d});return a(_e,{className:"AdminPaymentListView ",children:r("div",{className:"AdminPaymentListView__container",children:[a("div",{className:"AdminPaymentListView__container--separate",children:a("h1",{className:"AdminPaymentListView__text--title",children:C.title})}),r("div",{className:"AdminPaymentListView__container--layout",children:[r("div",{className:"AdminPaymentListView__container--table",children:[K(),Q()]}),a("div",{className:"AdminPaymentListView__container--details",children:a(z,{data:I})})]})]})})};O.defaultProps={};const E=t=>a(oe,{children:a(O,{})});E.defaultProps={};const Ce=E;export{Ce as default};
