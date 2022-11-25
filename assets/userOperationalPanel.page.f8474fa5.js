import{a,s as x,r as L,j as i,F as y}from"./index.ae857852.js";import{B as c}from"./Button.3397d7e5.js";import{R as l,b as V,a as N,S as v,P,f as h}from"./PaymentTable.helpers.4abc5c6f.js";import{u as C,L as k}from"./Layout.container.1a9069fe.js";import{g as $,u as E}from"./i18n.hooks.2e98684c.js";import{b as S,g as T,h as j}from"./administrator.service.hooks.d8dd4dad.js";import{C as D}from"./constants.03d913e0.js";import"./Table.a43017df.js";import"./validations.utils.9f4766dc.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.f81ba5ee.js";const I="/CodiShark/assets/detailsPay.a840b3ee.svg",r=$().global.table.TablePaymentUser.TableHeader,R=[{name:r.name,selector:t=>{var e;return(e=t.user.first_name)!=null?e:""},sortable:!0,cell:t=>a(l,{content:`${t.user.first_name} ${t.user.last_name}`,bold:!0})},{name:r.date,selector:t=>{var e;return(e=t.operation_date)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.operation_date)!=null?e:""})}},{name:r.amount,selector:t=>{var e;return(e=t.amount_paid)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.amount_paid)!=null?e:0})}},{name:r.method,selector:t=>{var e;return(e=t.payment_method)!=null?e:""},cell:t=>{var e;return a(l,{content:(e=t.payment_method)!=null?e:""})}},{name:r.state,button:!0,cell:t=>a(V,{conditional:t.payment_status==="Pagado"})},{name:r.action,button:!0,cell:t=>a(N,{row:t.id})}],{BREAKPOINTS:o}=D,z=x.div`
  .OperationListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${o.desktop}px) {
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
        margin-bottom: 1.2rem;
      }

      &--layout {
        display: flex;
        gap: 1.6rem;
        flex-flow: row wrap;
        @media screen and (min-width: ${o.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${o.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${o.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${o.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${o.wide}px) {
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
`,w=t=>{const{data:e,isLoading:d}=S(void 0,50),{data:m}=e!=null?e:{},n=E().pages.UserOperationPanel,{setIsLoading:p}=C();L.exports.useEffect(()=>{p(d)},[d,p]);const _=async()=>{try{const s=await T();h(s,"report.pdf")}catch{console.log("Error at trying to print pdf")}},g=async()=>{try{const s=await j();h(s,"report.csv")}catch{console.log("Error at trying to print excel")}},f=()=>i("div",{className:"OperationListView__container--actions OperationListView__container--separate",children:[i("div",{className:"OperationListView__container--button",children:[a(c,{variant:"contained",className:"OperationListView__component--button",onClick:_,children:n.buttonPdf}),a(c,{variant:"contained",className:"OperationListView__component--button",onClick:g,children:n.buttonExcel}),a(c,{variant:"contained",className:"OperationListView__component--button",onClick:()=>window.print(),children:n.buttonPrint})]}),a(v,{})]}),b=()=>i(y,{children:[a("h2",{className:"OperationListView__text--subtitle OperationListView__container--separate",children:n.titleDetails}),a("div",{className:"OperationListView__component--details",children:i("div",{className:"OperationListView__component--details-content",children:[a("img",{src:I,alt:"logoKonecta",className:"OperationListView__container--image"}),a("p",{className:"OperationListView__text--paragraph",children:n.paragraphDetails})]})})]});if(!m)return null;const O=()=>a(P,{data:m,columns:R});return a(z,{className:"OperationListView ",children:i("div",{className:"OperationListView__container",children:[a("div",{className:"OperationListView__container--separate",children:a("h1",{className:"OperationListView__text--title",children:n.title})}),i("div",{className:"OperationListView__container--layout",children:[i("div",{className:"OperationListView__container--table",children:[f(),O()]}),a("div",{className:"OperationListView__container--details",children:b()})]})]})})};w.defaultProps={};const u=t=>a(k,{children:a(w,{})});u.defaultProps={};const W=u;export{W as default};
