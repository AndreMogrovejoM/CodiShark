import{s as S,C as B,u as G,r as K,a as e,j as a,G as j,ag as R,aI as W}from"./index.7494b9e3.js";import{u as I}from"./i18n.hooks.710219a4.js";import{B as D}from"./Button.1ffb1947.js";import{u as q,L as H}from"./Layout.container.b855285e.js";import{f as J}from"./file-download.9541e5f9.js";import{d as Q,e as V,s as Z}from"./users.service.hooks.8d1d8aca.js";import{S as E}from"./sweetalert2.all.b54987f9.js";import{n as m}from"./common.utils.106d572f.js";import"./validations.utils.3b06e1db.js";import"./Box.77cdc8b2.js";const ee="/CodiShark/assets/iconUserPhoto.6809db68.svg",{BREAKPOINTS:r}=B,te=S.div`
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
`,A=p=>{const{operationId:c}=p,t=I().pages.AdminPaymentDetails.proof,{setIsLoading:o}=q(),{data:i,isLoading:l}=Q(c),U=G(),{debt:s,operation_number:h,amount_paid:f,id:C,user:g}=i!=null?i:{},{payment_method:y,operation_date:O,operation_time:P}=i!=null?i:{},{amount_dscto_cancellation:u,product:x,amount_cancellation:_}=s!=null?s:{},{capital_debt:w,currency:b,banking_entity:v}=s!=null?s:{},{first_name:N,last_name:$,mother_last_name:k}=g!=null?g:{};K.exports.useEffect(()=>{o(l)},[l,o]);const X=()=>{var n;return a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold",children:[e("p",{children:t.name}),e("p",{children:t.bankEntity}),e("p",{children:t.debtType}),e("p",{children:t.currencyType}),e("p",{children:t.paymentMethod}),e("p",{children:t.date}),e("p",{children:t.hour})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`${N!=null?N:""} ${$!=null?$:""} ${k!=null?k:""}`}),e("p",{children:v!=null?v:"-"}),e("p",{children:x!=null?x:"-"}),e("p",{children:b!=null?b:"-"}),e("p",{children:y!=null?y:"-"}),e("p",{children:(n=R(O).format("YYYY-MM-DD"))!=null?n:"-"}),e("p",{children:P!=null?P:"-"})]})]})},z=()=>a("div",{className:"ProofPayment__separator--sm",children:[a("div",{className:"ProofPayment__component--code ",children:[e("p",{className:"ProofPayment__text--paragraph",children:t.paymentcode.toLocaleUpperCase()}),e("p",{className:"ProofPayment__text--paragraph-superBold",children:`P-${h!=null?h:"XXXXXX"}`})]}),a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold ProofPayment__text--paragraph-blue",children:[e("p",{children:t.originalAmount}),e("p",{children:t.discount}),e("p",{children:t.subtotal}),e("p",{children:t.amountPaid})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`S/. ${m(w!=null?w:0)}`}),e("p",{children:`S/. ${m(u!=null?u:0)}`}),e("p",{children:`S/. ${m(_!=null?_:0)}`}),e("p",{children:`S/. ${m(f!=null?f:0)}`})]})]})]}),M=async()=>{try{o(!0);const n=await V(C);E.fire("Exito","El documento se descargar\xE1 en breves momentos.","success"),J(n,"report.pdf")}catch{console.log("Error at trying to print pdf")}finally{o(!1)}},Y=async()=>{try{o(!0),await Z(C),E.fire("Exito","El correo fue enviado con \xE9xito","success")}catch{console.log("Error at trying to print pdf")}finally{o(!1)}},F=()=>{const n=()=>"ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";return a(j,{children:[e(D,{variant:"contained",className:`${n()} ProofPayment__component--button-green`,onClick:M,disabled:l,children:t.buttons.pdf}),e(D,{variant:"contained",className:n(),onClick:Y,disabled:l,children:t.buttons.email}),e(D,{variant:"contained",className:`${n()} ProofPayment__component--button-blue`,onClick:()=>U("/"),children:t.buttons.back})]})};return e(te,{className:"ProofPayment",children:e("div",{className:"ProofPayment__component--card",children:(()=>a(j,{children:[e("h2",{className:"ProofPayment__text--title ProofPayment__separator--title",children:t.title.toLocaleUpperCase()}),a("div",{className:"ProofPayment__separator--details",children:[X(),z()]}),e("div",{className:"ProofPayment__separator--actions",children:F()})]}))()})})};A.defaultProps={};const{BREAKPOINTS:d}=B,ae=S.div`
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
`,L=p=>{const c=I().pages.AdminPaymentDetails.card,{id:t}=W();return e(ae,{className:"PaymentDetails",children:a("div",{className:"PaymentDetails__container--components",children:[(()=>e("div",{className:"PaymentDetails__component--card",children:a(j,{children:[e("div",{className:"PaymentDetails__container--card-image",children:e("img",{src:ee,alt:c.alt,className:"PaymentDetails__container--image"})}),a("div",{className:"PaymentDetails__container--card-text",children:[e("p",{className:"PaymentDetails__text--title",children:c.title.toLocaleUpperCase()}),e("p",{className:"PaymentDetails__text--subtitle",children:c.subtitle})]})]})}))(),e(A,{operationId:parseInt(t!=null?t:"")})]})})};L.defaultProps={};const T=p=>e(H,{children:e(L,{})});T.defaultProps={};const fe=T;export{fe as default};
