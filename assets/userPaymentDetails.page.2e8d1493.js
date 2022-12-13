import{s as y,C as u,E as A,u as B,a as e,j as a,F as P}from"./index.31b587f7.js";import{S as L}from"./SkeletonComponent.1458dcd8.js";import{u as x}from"./i18n.hooks.9f88aeab.js";import{B as g}from"./Button.d1000baa.js";import{f as T}from"./file-download.9541e5f9.js";import{e as E}from"./users.service.7920b3c4.js";import{L as U}from"./Layout.container.8472f269.js";import"./auth.service.hooks.48119834.js";const z="/CodiShark/assets/iconUserPhoto.6809db68.svg",{BREAKPOINTS:r}=u,I=y.div`
  .ProofPayment {
    &__separator {
      &--paragraph {
        display: flex;
        gap: 3.2rem;
        justify-content: space-between;
        width: 100%;

        @media screen and (min-width: ${r.desktop}px) {
          justify-content: none;
          width: auto;
        }
      }

      &--title {
        margin-bottom: 3.2rem;

        @media screen and (min-width: ${r.desktop}px) {
          margin-bottom: 1.6rem;
        }
      }

      &--details {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.6rem;
        margin-bottom: 3.2rem;

        @media screen and (min-width: ${r.desktop}px) {
          margin-bottom: 9.6rem;
        }
      }

      &--actions {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1.6rem;
      }

      &--sm {
        justify-content: space-between;
        width: 100%;

        @media screen and (min-width: ${r.desktop}px) {
          justify-content: none;
          width: auto;
        }
      }
    }

    &__component {
      &--card {
        border-radius: 8px;
        background-color: var(--palette-whiteBackground);
        padding: 2.4rem 3.6rem;
        width: auto;

        @media screen and (min-width: ${r.desktop}px) {
          width: 60vw;
          min-height: 44.8rem;
        }

        @media screen and (min-width: ${r.wide}px) {
          min-width: 76rem;
        }
      }

      &--code {
        width: 18rem;
        height: 7.2rem;
        border: 0.4rem solid var(--palette-darkText);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2.4rem;

        @media screen and (min-width: ${r.desktop}px) {
          margin-left: none;
          margin-bottom: 8.4rem;
        }
      }

      &--button {
        padding: 0.8rem 4.8rem;
        color: var(--palette-whiteBackground);

        &-green {
          background-color: var(--palette-limeGreenBackground);
        }

        &-blue {
          background-color: var(--palette-blue);
        }
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: center;

        @media screen and (min-width: ${r.desktop}px) {
          text-align: left;
        }
      }

      &--paragraph {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &-bold {
          font-weight: 600;
        }

        &-blue {
          color: var(--palette-blue);
        }

        &-superBold {
          font-weight: 800;
          font-size: 2rem;
          line-height: 2.64rem;
          color: var(--palette-blue);
        }
      }
    }
  }
`,_=m=>{const{userDebt:n,isLoading:l}=m,t=x().pages.AdminPaymentDetails.proof,{user:c}=A(),{first_name:v,last_name:N}=c!=null?c:{},k=B(),{id:$,amount_dscto_cancellation:o}=n!=null?n:{},{capital_debt:i,currency:p,banking_entity:h,pct_dscto_cancellation:f}=n!=null?n:{},j=()=>a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold",children:[e("p",{children:t.name}),e("p",{children:t.bankEntity}),e("p",{children:t.debtType}),e("p",{children:t.currencyType}),e("p",{children:t.paymentMethod}),e("p",{children:t.date}),e("p",{children:t.hour})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`${v} ${N}`}),e("p",{children:h!=null?h:"-"}),e("p",{children:"Pr\xE9stamo personal"}),e("p",{children:p!=null?p:"-"}),e("p",{children:"Tarjeta de d\xE9bito"}),e("p",{children:"27-03-2022"}),e("p",{children:"14:36"})]})]}),C=()=>a("div",{className:"ProofPayment__separator--sm",children:[a("div",{className:"ProofPayment__component--code ",children:[e("p",{className:"ProofPayment__text--paragraph",children:t.paymentcode.toLocaleUpperCase()}),e("p",{className:"ProofPayment__text--paragraph-superBold",children:"P-25148"})]}),a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold ProofPayment__text--paragraph-blue",children:[e("p",{children:t.originalAmount}),e("p",{children:t.discount}),e("p",{children:t.subtotal}),e("p",{children:t.amountPaid})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`S./ ${i!=null?i:0}`}),e("p",{children:`S./ ${f!=null?f:0}`}),e("p",{children:`S./ ${(i!=null?i:0)-(o!=null?o:0)}`}),e("p",{children:`S./ ${o!=null?o:0}`})]})]})]}),D=async()=>{try{const s=await E($);T(s,"report.pdf")}catch{console.log("Error at trying to print pdf")}},S=()=>{const s=()=>"ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";return a(P,{children:[e(g,{variant:"contained",className:`${s()} ProofPayment__component--button-green`,onClick:D,children:t.buttons.pdf}),e(g,{variant:"contained",className:s(),onClick:()=>console.log("excel"),children:t.buttons.email}),e(g,{variant:"contained",className:`${s()} ProofPayment__component--button-blue`,onClick:()=>k("/"),children:t.buttons.back})]})};return e(I,{className:"ProofPayment",children:e("div",{className:"ProofPayment__component--card",children:(()=>l?e(L,{variant:"rounded",height:"400px"}):a(P,{children:[e("h2",{className:"ProofPayment__text--title ProofPayment__separator--title",children:t.title.toLocaleUpperCase()}),a("div",{className:"ProofPayment__separator--details",children:[j(),C()]}),e("div",{className:"ProofPayment__separator--actions",children:S()})]}))()})})};_.defaultProps={};const{BREAKPOINTS:d}=u,O=y.div`
  padding: 2rem;

  .PaymentDetails {
    &__component {
      &--card {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 2.4rem;
        margin-left: 1.6rem;
        margin-right: 1.6rem;

        @media screen and (min-width: ${d.desktop}px) {
          width: 19.6rem;
        }
      }

      &--image {
        width: 12rem;
        height: 12rem;
      }
    }

    &__container {
      &--card {
        &-text {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;

          @media screen and (min-width: ${d.desktop}px) {
            gap: 2.4rem;
          }
        }

        &-image {
          display: flex;
          justify-content: center;
          margin-bottom: 2.4rem;

          @media screen and (min-width: ${d.desktop}px) {
            margin-bottom: 3.2rem;
          }

          @media screen and (min-width: ${d.wide}px) {
            margin-bottom: 6.4rem;
          }
        }
      }

      &--components {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 32px;

        @media screen and (min-width: ${d.desktop}px) {
          justify-content: space-around;
        }

        @media screen and (min-width: ${d.wide}px) {
          justify-content: space-between;
        }

        @media screen and (min-width: 1680px) {
          justify-content: space-evenly;
        }
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-align: center;
        font-style: normal;
      }

      &--subtitle {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: center;
        font-style: normal;
      }
    }
  }
`,w=m=>{const n=x().pages.AdminPaymentDetails.card,l=!1;return e(O,{className:"PaymentDetails",children:a("div",{className:"PaymentDetails__container--components",children:[(()=>e("div",{className:"PaymentDetails__component--card",children:a(P,{children:[e("div",{className:"PaymentDetails__container--card-image",children:e("img",{src:z,alt:n.alt,className:"PaymentDetails__container--image"})}),a("div",{className:"PaymentDetails__container--card-text",children:[e("p",{className:"PaymentDetails__text--title",children:n.title.toLocaleUpperCase()}),e("p",{className:"PaymentDetails__text--subtitle",children:n.subtitle})]})]})}))(),e(_,{isLoading:l})]})})};w.defaultProps={};const b=m=>e(U,{children:e(w,{})});b.defaultProps={};const V=b;export{V as default};
