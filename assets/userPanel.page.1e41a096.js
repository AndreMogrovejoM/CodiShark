import{a as n,a0 as P,s as x,j as a,K as L}from"./index.0ad64858.js";import{B as c}from"./Button.8dbbdcdc.js";import{R as l,a as V,S as N,P as v,f as d}from"./PaymentTable.aec8cc8b.js";import{e as k,u as C,f as D,g as $,L as U}from"./Layout.container.9310e30f.js";import{m as j,e as I}from"./i18n.hooks.67cbff6b.js";import{C as S}from"./constants.00022566.js";import"./validations.utils.d8a44663.js";import"./auth.service.hooks.07f29f8a.js";const T="/CodiShark/assets/usersIcon.6275cb21.svg",s=j().global.table.TablePaymentUser.TableHeader2,E=[{name:s.name,selector:t=>{var e;return(e=t.first_name)!=null?e:""},sortable:!0,cell:t=>n(l,{content:`${t.first_name} ${t.last_name}`,bold:!0})},{name:s.capitalDebt,selector:t=>{var e;return(e=t.capital_debt)!=null?e:""},wrap:!0,sortable:!0,cell:t=>{var e;return n(l,{content:(e=t.capital_debt)!=null?e:""})}},{name:s.interests,selector:t=>{var e;return(e=t.interests)!=null?e:0},wrap:!0,sortable:!0,cell:t=>{var e;return n(l,{content:(e=t.interests)!=null?e:0})}},{name:s.bills,selector:t=>{var e;return(e=t.bills)!=null?e:""},cell:t=>{var e;return n(l,{content:(e=t.bills)!=null?e:""})}},{name:s.punishmentDate,button:!0,cell:t=>{var e;return n(l,{content:(e=P(t.date_punishment).format("YY-MM-DD HH:mm a"))!=null?e:""})}},{name:s.action,button:!0,cell:t=>n(V,{row:t.id})}],{BREAKPOINTS:r}=S,z=x.div`
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
`,p=t=>{const{data:e,isLoading:w}=k(1,50),{data:m}=e!=null?e:{},i=I().pages.UserPayPanel,{setIsLoading:u}=C();u(w);const _=async()=>{try{const o=await D();d(o,"report.pdf")}catch{console.log("Error at trying to print pdf")}},y=async()=>{try{const o=await $();d(o,"report.csv")}catch{console.log("Error at trying to print excel")}},g=()=>a("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[a("div",{className:"PaymentListView__container--button",children:[n(c,{variant:"contained",className:"PaymentListView__component--button",onClick:_,children:i.buttonPdf}),n(c,{variant:"contained",className:"PaymentListView__component--button",onClick:y,children:i.buttonExcel}),n(c,{variant:"contained",className:"PaymentListView__component--button",onClick:()=>window.print(),children:i.buttonPrint})]}),n(N,{})]}),f=()=>a(L,{children:[n("h2",{className:"PaymentListView__text--subtitle PaymentListView__container--separate",children:i.titleDetails}),n("div",{className:"PaymentListView__component--details",children:a("div",{className:"PaymentListView__component--details-content",children:[n("img",{src:T,alt:"logoKonecta",className:"PaymentListView__container--image"}),n("p",{className:"PaymentListView__text--paragraph",children:i.paragraphDetails})]})})]});if(!m)return null;const b=()=>n(v,{data:m,columns:E});return n(z,{className:"PaymentListView ",children:a("div",{className:"PaymentListView__container",children:[n("div",{className:"PaymentListView__container--separate",children:n("h1",{className:"PaymentListView__text--title",children:i.title})}),a("div",{className:"PaymentListView__container--layout",children:[a("div",{className:"PaymentListView__container--table",children:[g(),b()]}),n("div",{className:"PaymentListView__container--details",children:f()})]})]})})};p.defaultProps={};const h=t=>n(U,{children:n(p,{})});h.defaultProps={};const Y=h;export{Y as default};
