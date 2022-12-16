import{s as A,C as I,u as R,r as q,a as e,j as a,G as D,ag as H,aF as J}from"./index.222ffc61.js";import{u as L}from"./i18n.hooks.7225a4b8.js";import{B as k}from"./Button.b5911129.js";import{u as Q,L as V}from"./Layout.container.764bc839.js";import{f as W}from"./file-download.9541e5f9.js";import{c as Z,e as ee,s as te}from"./users.service.hooks.10f2e4c8.js";import{S as B}from"./sweetalert2.all.6c955839.js";import"./auth.service.hooks.ec00bf56.js";const ae="/assets/iconUserPhoto.6809db68.svg",{BREAKPOINTS:r}=I,ne=A.div`
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
`,F=m=>{const{operationId:c}=m,t=L().pages.AdminPaymentDetails.proof,{setIsLoading:o}=Q(),{data:i,isLoading:l}=Z(c),O=R(),{debt:s,operation_number:p,amount_paid:h,id:j,user:f}=i!=null?i:{},{payment_method:g,operation_date:X,operation_time:y}=i!=null?i:{},{amount_dscto_cancellation:P,product:u,amount_cancellation:x}=s!=null?s:{},{capital_debt:_,currency:w,banking_entity:b}=s!=null?s:{},{first_name:v,last_name:N,mother_last_name:$}=f!=null?f:{};q.exports.useEffect(()=>{o(l)},[l,o]);const z=()=>{var n;return a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold",children:[e("p",{children:t.name}),e("p",{children:t.bankEntity}),e("p",{children:t.debtType}),e("p",{children:t.currencyType}),e("p",{children:t.paymentMethod}),e("p",{children:t.date}),e("p",{children:t.hour})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`${v!=null?v:""} ${N!=null?N:""} ${$!=null?$:""}`}),e("p",{children:b!=null?b:"-"}),e("p",{children:u!=null?u:"-"}),e("p",{children:w!=null?w:"-"}),e("p",{children:g!=null?g:"-"}),e("p",{children:(n=H(X).format("YYYY-MM-DD"))!=null?n:"-"}),e("p",{children:y!=null?y:"-"})]})]})},M=()=>{var n,C,E,S;return a("div",{className:"ProofPayment__separator--sm",children:[a("div",{className:"ProofPayment__component--code ",children:[e("p",{className:"ProofPayment__text--paragraph",children:t.paymentcode.toLocaleUpperCase()}),e("p",{className:"ProofPayment__text--paragraph-superBold",children:`P-${p!=null?p:"XXXXXX"}`})]}),a("div",{className:"ProofPayment__separator--paragraph",children:[a("div",{className:"ProofPayment__text--paragraph ProofPayment__text--paragraph-bold ProofPayment__text--paragraph-blue",children:[e("p",{children:t.originalAmount}),e("p",{children:t.discount}),e("p",{children:t.subtotal}),e("p",{children:t.amountPaid})]}),a("div",{className:"ProofPayment__text--paragraph",children:[e("p",{children:`S./ ${(n=_==null?void 0:_.toFixed(2))!=null?n:0}`}),e("p",{children:`S./ ${(C=P==null?void 0:P.toFixed(2))!=null?C:0}`}),e("p",{children:`S./ ${(E=x==null?void 0:x.toFixed(2))!=null?E:0}`}),e("p",{children:`S./ ${(S=h==null?void 0:h.toFixed(2))!=null?S:0}`})]})]})]})},Y=async()=>{try{o(!0);const n=await ee(j);B.fire("Exito","El documento se descargar\xE1 en breves momentos.","success"),W(n,"report.pdf")}catch{console.log("Error at trying to print pdf")}finally{o(!1)}},G=async()=>{try{o(!0),await te(j),B.fire("Exito","El correo fue enviado con \xE9xito","success")}catch{console.log("Error at trying to print pdf")}finally{o(!1)}},K=()=>{const n=()=>"ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";return a(D,{children:[e(k,{variant:"contained",className:`${n()} ProofPayment__component--button-green`,onClick:Y,disabled:l,children:t.buttons.pdf}),e(k,{variant:"contained",className:n(),onClick:G,disabled:l,children:t.buttons.email}),e(k,{variant:"contained",className:`${n()} ProofPayment__component--button-blue`,onClick:()=>O("/"),children:t.buttons.back})]})};return e(ne,{className:"ProofPayment",children:e("div",{className:"ProofPayment__component--card",children:(()=>a(D,{children:[e("h2",{className:"ProofPayment__text--title ProofPayment__separator--title",children:t.title.toLocaleUpperCase()}),a("div",{className:"ProofPayment__separator--details",children:[z(),M()]}),e("div",{className:"ProofPayment__separator--actions",children:K()})]}))()})})};F.defaultProps={};const{BREAKPOINTS:d}=I,re=A.div`
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
`,T=m=>{const c=L().pages.AdminPaymentDetails.card,{id:t}=J();return e(re,{className:"PaymentDetails",children:a("div",{className:"PaymentDetails__container--components",children:[(()=>e("div",{className:"PaymentDetails__component--card",children:a(D,{children:[e("div",{className:"PaymentDetails__container--card-image",children:e("img",{src:ae,alt:c.alt,className:"PaymentDetails__container--image"})}),a("div",{className:"PaymentDetails__container--card-text",children:[e("p",{className:"PaymentDetails__text--title",children:c.title.toLocaleUpperCase()}),e("p",{className:"PaymentDetails__text--subtitle",children:c.subtitle})]})]})}))(),e(F,{operationId:parseInt(t!=null?t:"")})]})})};T.defaultProps={};const U=m=>e(V,{children:e(T,{})});U.defaultProps={};const fe=U;export{fe as default};
