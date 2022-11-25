import{s as m,a as e,j as a,F as y}from"./index.ae857852.js";import{u as l}from"./i18n.hooks.2e98684c.js";import{B as i}from"./Button.3397d7e5.js";import{C as c}from"./constants.03d913e0.js";import{L as _}from"./Layout.container.1a9069fe.js";import"./auth.service.hooks.f81ba5ee.js";const u="/CodiShark/assets/iconUserPhoto.6809db68.svg",{BREAKPOINTS:n}=c,x=m.div`
  .ProofPayment {
    &__separator {
      &--paragraph {
        display: flex;
        gap: 3.2rem;
        justify-content: space-between;
        width: 100%;

        @media screen and (min-width: ${n.desktop}px) {
          justify-content: none;
          width: auto;
        }
      }

      &--title {
        margin-bottom: 3.2rem;

        @media screen and (min-width: ${n.desktop}px) {
          margin-bottom: 1.6rem;
        }
      }

      &--details {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.6rem;
        margin-bottom: 3.2rem;

        @media screen and (min-width: ${n.desktop}px) {
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

        @media screen and (min-width: ${n.desktop}px) {
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

        @media screen and (min-width: ${n.desktop}px) {
          width: 60vw;
          min-height: 44.8rem;
        }

        @media screen and (min-width: ${n.wide}px) {
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

        @media screen and (min-width: ${n.desktop}px) {
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

        @media screen and (min-width: ${n.desktop}px) {
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
`,p=d=>{const t=l().pages.AdminPaymentDetails.proof,s=()=>a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold",children:[e("p",{children:t.name}),e("p",{children:t.bankEntity}),e("p",{children:t.debtType}),e("p",{children:t.currencyType}),e("p",{children:t.paymentMethod}),e("p",{children:t.date}),e("p",{children:t.hour})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:"Dei Molina"}),e("p",{children:"Banco Interbank "}),e("p",{children:"Pr\xE9stamo personal"}),e("p",{children:"Sol peruano"}),e("p",{children:"Tarjeta de d\xE9bito"}),e("p",{children:"27-03-2022"}),e("p",{children:"14:36"})]})]}),g=()=>a("div",{className:"ProofPayment__separator--sm",children:[a("div",{className:"ProofPayment__component--code ",children:[e("p",{className:"ProofPayment__text--paragraph",children:t.paymentcode.toLocaleUpperCase()}),e("p",{className:"ProofPayment__text--paragraph-superBold",children:"P-25148"})]}),a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold ProofPayment__text--paragraph-blue",children:[e("p",{children:t.originalAmount}),e("p",{children:t.discount}),e("p",{children:t.subtotal}),e("p",{children:t.amountPaid})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:"S/ 5400.00"}),e("p",{children:"S/ 2400.00"}),e("p",{children:"S/ 2600.00"}),e("p",{children:"S/ 2600.00"})]})]})]}),P=()=>{const o=()=>"ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";return a(y,{children:[e(i,{variant:"contained",className:`${o()} ProofPayment__component--button-green`,onClick:()=>console.log("pdf"),children:t.buttons.pdf}),e(i,{variant:"contained",className:o(),onClick:()=>console.log("excel"),children:t.buttons.email}),e(i,{variant:"contained",className:`${o()} ProofPayment__component--button-blue`,onClick:()=>console.log("back"),children:t.buttons.back})]})};return e(x,{className:"ProofPayment",children:a("div",{className:"ProofPayment__component--card",children:[e("h2",{className:"ProofPayment__text--title ProofPayment__separator--title",children:t.title.toLocaleUpperCase()}),a("div",{className:"ProofPayment__separator--details",children:[s(),g()]}),e("div",{className:"ProofPayment__separator--actions",children:P()})]})})};p.defaultProps={};const{BREAKPOINTS:r}=c,w=m.div`
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

        @media screen and (min-width: ${r.desktop}px) {
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

          @media screen and (min-width: ${r.desktop}px) {
            gap: 2.4rem;
          }
        }

        &-image {
          display: flex;
          justify-content: center;
          margin-bottom: 2.4rem;

          @media screen and (min-width: ${r.desktop}px) {
            margin-bottom: 3.2rem;
          }

          @media screen and (min-width: ${r.wide}px) {
            margin-bottom: 6.4rem;
          }
        }
      }

      &--components {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 32px;

        @media screen and (min-width: ${r.desktop}px) {
          justify-content: space-around;
        }

        @media screen and (min-width: ${r.wide}px) {
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
`,h=d=>{const t=l().pages.AdminPaymentDetails.card;return e(w,{className:"PaymentDetails",children:a("div",{className:"PaymentDetails__container--components",children:[(()=>a("div",{className:"PaymentDetails__component--card",children:[e("div",{className:"PaymentDetails__container--card-image",children:e("img",{src:u,alt:t.alt,className:"PaymentDetails__container--image"})}),a("div",{className:"PaymentDetails__container--card-text",children:[e("p",{className:"PaymentDetails__text--title",children:t.title.toLocaleUpperCase()}),e("p",{className:"PaymentDetails__text--subtitle",children:t.subtitle})]})]}))(),e(p,{})]})})};h.defaultProps={};const f=d=>e(_,{children:e(h,{})});f.defaultProps={};const j=f;export{j as default};
