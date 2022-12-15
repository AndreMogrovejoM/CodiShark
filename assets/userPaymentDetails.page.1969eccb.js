import{s as A,C as B,E as q,u as H,a as e,j as a,G as v,ag as J}from"./index.78f16c0f.js";import{u as L}from"./i18n.hooks.dcfdf754.js";import{B as b}from"./Button.f3688821.js";import{u as Q,L as V}from"./Layout.container.47df2272.js";import{f as W}from"./file-download.9541e5f9.js";import{e as X,s as Z}from"./users.service.27dcf0aa.js";import{S}from"./sweetalert2.all.7a9ac31e.js";import"./auth.service.hooks.59ab2c5f.js";const ee="/CodiShark/assets/iconUserPhoto.6809db68.svg",{BREAKPOINTS:r}=B,te=A.div`
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
`,T=N=>{const t=L().pages.AdminPaymentDetails.proof,{operationUserDebt:o,isLoading:$,setIsLoading:d}=Q(),{user:c}=q(),{first_name:l,last_name:m,mother_last_name:p}=c!=null?c:{},I=H(),{debt:i,operation_number:O,amount_paid:h,id:k}=o!=null?o:{},{payment_method:f,operation_date:z,operation_time:g}=o!=null?o:{},{amount_dscto_cancellation:y,product:P,amount_cancellation:u}=i!=null?i:{},{capital_debt:x,currency:_,banking_entity:w}=i!=null?i:{},M=()=>{var n;return a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold",children:[e("p",{children:t.name}),e("p",{children:t.bankEntity}),e("p",{children:t.debtType}),e("p",{children:t.currencyType}),e("p",{children:t.paymentMethod}),e("p",{children:t.date}),e("p",{children:t.hour})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`${l!=null?l:""} ${m!=null?m:""} ${p!=null?p:""}`}),e("p",{children:w!=null?w:"-"}),e("p",{children:P!=null?P:"-"}),e("p",{children:_!=null?_:"-"}),e("p",{children:f!=null?f:"-"}),e("p",{children:(n=J(z).format("YYYY-MM-DD"))!=null?n:"-"}),e("p",{children:g!=null?g:"-"})]})]})},Y=()=>{var n,D,j,C,E;return a("div",{className:"ProofPayment__separator--sm",children:[a("div",{className:"ProofPayment__component--code ",children:[e("p",{className:"ProofPayment__text--paragraph",children:t.paymentcode.toLocaleUpperCase()}),e("p",{className:"ProofPayment__text--paragraph-superBold",children:(n=`P-${O}`)!=null?n:"-"})]}),a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold ProofPayment__text--paragraph-blue",children:[e("p",{children:t.originalAmount}),e("p",{children:t.discount}),e("p",{children:t.subtotal}),e("p",{children:t.amountPaid})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`S./ ${(D=x==null?void 0:x.toFixed(2))!=null?D:0}`}),e("p",{children:`S./ ${(j=y==null?void 0:y.toFixed(2))!=null?j:0}`}),e("p",{children:`S./ ${(C=u==null?void 0:u.toFixed(2))!=null?C:0}`}),e("p",{children:`S./ ${(E=h==null?void 0:h.toFixed(2))!=null?E:0}`})]})]})]})},G=async()=>{try{d(!0);const n=await X(k);S.fire("Exito","El documento se descargar\xE1 en breves momentos.","success"),W(n,"report.pdf")}catch{console.log("Error at trying to print pdf")}finally{d(!1)}},K=async()=>{try{d(!0),await Z(k),S.fire("Exito","El correo fue enviado con \xE9xito","success")}catch{console.log("Error at trying to print pdf")}finally{d(!1)}},R=()=>{const n=()=>"ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";return a(v,{children:[e(b,{variant:"contained",className:`${n()} ProofPayment__component--button-green`,onClick:G,disabled:$,children:t.buttons.pdf}),e(b,{variant:"contained",className:n(),onClick:K,disabled:$,children:t.buttons.email}),e(b,{variant:"contained",className:`${n()} ProofPayment__component--button-blue`,onClick:()=>I("/"),children:t.buttons.back})]})};return e(te,{className:"ProofPayment",children:e("div",{className:"ProofPayment__component--card",children:(()=>a(v,{children:[e("h2",{className:"ProofPayment__text--title ProofPayment__separator--title",children:t.title.toLocaleUpperCase()}),a("div",{className:"ProofPayment__separator--details",children:[M(),Y()]}),e("div",{className:"ProofPayment__separator--actions",children:R()})]}))()})})};T.defaultProps={};const{BREAKPOINTS:s}=B,ae=A.div`
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

        @media screen and (min-width: ${s.desktop}px) {
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

          @media screen and (min-width: ${s.desktop}px) {
            gap: 2.4rem;
          }
        }

        &-image {
          display: flex;
          justify-content: center;
          margin-bottom: 2.4rem;

          @media screen and (min-width: ${s.desktop}px) {
            margin-bottom: 3.2rem;
          }

          @media screen and (min-width: ${s.wide}px) {
            margin-bottom: 6.4rem;
          }
        }
      }

      &--components {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 32px;

        @media screen and (min-width: ${s.desktop}px) {
          justify-content: space-around;
        }

        @media screen and (min-width: ${s.wide}px) {
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
`,U=N=>{const t=L().pages.AdminPaymentDetails.card;return e(ae,{className:"PaymentDetails",children:a("div",{className:"PaymentDetails__container--components",children:[(()=>e("div",{className:"PaymentDetails__component--card",children:a(v,{children:[e("div",{className:"PaymentDetails__container--card-image",children:e("img",{src:ee,alt:t.alt,className:"PaymentDetails__container--image"})}),a("div",{className:"PaymentDetails__container--card-text",children:[e("p",{className:"PaymentDetails__text--title",children:t.title.toLocaleUpperCase()}),e("p",{className:"PaymentDetails__text--subtitle",children:t.subtitle})]})]})}))(),e(T,{})]})})};U.defaultProps={};const F=N=>e(V,{children:e(U,{})});F.defaultProps={};const pe=F;export{pe as default};
