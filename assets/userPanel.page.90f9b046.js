import{a,s as b,j as n,F as x}from"./index.01c0f0f3.js";import{B as c}from"./validations.utils.8d775211.js";import{R as l,a as L,b as V,S as N,P as v,f as d}from"./PaymentTable.6197a233.js";import{e as C,u as k,f as $,g as S,L as T}from"./Layout.container.b7caff07.js";import{H as U,b as j}from"./auth.service.hooks.79ea8418.js";import{C as D}from"./constants.00022566.js";const E="/CodiShark/assets/detailsPay.a840b3ee.svg",s=U().global.table.TablePaymentUser.TableHeader,I=[{name:s.name,selector:t=>{var e;return(e=t.first_name)!=null?e:""},sortable:!0,cell:t=>a(l,{content:`${t.first_name} ${t.last_name}`,bold:!0})},{name:s.date,selector:t=>{var e;return(e=t.first_name)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.first_name)!=null?e:""})}},{name:s.amount,selector:t=>{var e;return(e=t.first_name)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return a(l,{content:(e=t.first_name)!=null?e:0})}},{name:s.method,selector:t=>{var e;return(e=t.first_name)!=null?e:""},cell:t=>{var e;return a(l,{content:(e=t.first_name)!=null?e:""})}},{name:s.state,button:!0,cell:t=>a(L,{conditional:t.first_name==="Pagado"})},{name:s.action,button:!0,cell:t=>a(V,{row:t.id})}],{BREAKPOINTS:r}=D,R=b.div`
  .PaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${r.desktop}px) {
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
        @media screen and (min-width: ${r.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${r.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${r.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${r.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${r.wide}px) {
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
`,p=t=>{const{data:e,isLoading:w}=C(1,50),{data:m}=e!=null?e:{},i=j().pages.UserPayPanel,{setIsLoading:_}=k();_(w);const u=async()=>{try{const o=await $();d(o,"report.pdf")}catch{console.log("Error at trying to print pdf")}},f=async()=>{try{const o=await S();d(o,"report.csv")}catch{console.log("Error at trying to print excel")}},y=()=>n("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[n("div",{className:"PaymentListView__container--button",children:[a(c,{variant:"contained",className:"PaymentListView__component--button",onClick:u,children:i.buttonPdf}),a(c,{variant:"contained",className:"PaymentListView__component--button",onClick:f,children:i.buttonExcel}),a(c,{variant:"contained",className:"PaymentListView__component--button",onClick:()=>window.print(),children:i.buttonPrint})]}),a(N,{})]}),g=()=>n(x,{children:[a("h2",{className:"PaymentListView__text--subtitle PaymentListView__container--separate",children:i.titleDetails}),a("div",{className:"PaymentListView__component--details",children:n("div",{className:"PaymentListView__component--details-content",children:[a("img",{src:E,alt:"logoKonecta",className:"PaymentListView__container--image"}),a("p",{className:"PaymentListView__text--paragraph",children:i.paragraphDetails})]})})]});if(!m)return null;const P=()=>a(v,{data:m,columns:I});return a(R,{className:"PaymentListView ",children:n("div",{className:"PaymentListView__container",children:[a("div",{className:"PaymentListView__container--separate",children:a("h1",{className:"PaymentListView__text--title",children:i.title})}),n("div",{className:"PaymentListView__container--layout",children:[n("div",{className:"PaymentListView__container--table",children:[y(),P()]}),a("div",{className:"PaymentListView__container--details",children:g()})]})]})})};p.defaultProps={};const h=t=>a(T,{children:a(p,{})});h.defaultProps={};const O=h;export{O as default};
