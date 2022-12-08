import{s,j as n,a as e,r as E,af as b}from"./index.2f653318.js";import{u as l}from"./i18n.hooks.9e0e4506.js";import{u as K,M as Y}from"./auth.service.hooks.d7adf4c7.js";import{C as h}from"./constants.73c1594c.js";import{a as S,d as V}from"./Add.fcce4930.js";import{r as L,i as q,a as H,L as U}from"./Layout.container.faf08fed.js";import{B as G}from"./Box.af2a7cf6.js";import{B as p}from"./Button.9791698f.js";import"./useQuery.22043ff5.js";const F="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",J=s.div`
  position: relative;
  max-width: 32rem;
  max-height: 30rem;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  .CardImageOne {
    &__title {
      position: absolute;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 2.4rem;
      top: 3.2rem;
      left: 3.2rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      position: absolute;
      font-weight: 300;
      font-size: 1rem;
      line-height: 2.4rem;
      top: 1rem;
      left: 3.2rem;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
`,I=i=>{const t=l().signIn.CardImageOne;return n(J,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:F,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:t.subtitle}),e("h2",{className:"CardImageOne__title",children:t.title})]})};I.defaultProps={};const Q="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",W=s.div`
  position: relative;
  max-width: 32rem;
  max-height: 30rem;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  @media screen and (max-width: 1366px) {
    width: 20rem;
  }

  .CardImageTwo {
    &__section {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 36rem;
      left: 4rem;
      @media screen and (max-width: 1515px) {
        top: 34rem;
      }
      @media screen and (max-width: 1470px) {
        top: 32rem;
        left: 3.6rem;
      }
      @media screen and (max-width: 1410px) {
        left: 3.2rem;
        top: 30rem;
      }
    }

    &__subtitle1 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
    }

    &__subtitle2 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
    }

    &__subtitle3 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.2rem;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
`,P=i=>{const t=l().signIn.CardImageTwo;return n(W,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:Q,alt:"fotoMujerOne"}),n("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:t.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:t.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:t.subtitle3})]})]})};P.defaultProps={};const{BREAKPOINTS:X}=h,Z=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.6rem;

  @media screen and (min-width: ${X.tablet}px) {
    margin: 1.6rem 0;
  }

  .IndicatorsClientOne {
    &__component {
      &--card {
        background-color: var(--palette-white);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem;
        padding-right: 4rem;
      }
    }

    &__text {
      &--bold {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--normal {
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1.6rem;
      }

      &--light {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2rem;
      }

      &--extraLight {
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }
  }
`,z=i=>{const t=l().signIn.IndicatorsClientOne,{user:a}=K(),{first_name:r,last_name:o,mother_last_name:m}=a!=null?a:{};return e(Z,{className:"IndicatorsClientOne",children:n("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:t.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${r!=null?r:""} ${o} ${m}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:"DNI N\xB0 86752459"})]})})};z.defaultProps={};const{BREAKPOINTS:ee}=h,te=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${ee.tablet}px) {
    margin: 1.6rem 0;
  }

  .IndicatorsClientTwo {
    &__component {
      &--card {
        background-color: var(--palette-white);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem;
        padding-right: 4rem;
        height: 100%;
        justify-content: center;
      }
    }

    &__text {
      &--bold {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--blue {
        color: var(--palette-primary);
        font-weight: 800;
        font-size: 2.2rem;
        line-height: 2.4rem;
      }
    }
  }
`,j=i=>{const{data:t}=S(),{total_debts:a}=t!=null?t:{};return e(te,{className:"IndicatorsClientTwo",children:n("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:"Deuda Actual"}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${a!=null?a:""}`})]})})};j.defaultProps={};const ne="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",ae="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",ie="/CodiShark/assets/imagePayInformation.de64d6a1.svg",re="/CodiShark/assets/lineInformation.84349c20.svg";var w={},se=q.exports;Object.defineProperty(w,"__esModule",{value:!0});var O=w.default=void 0,le=se(L()),oe=H,me=(0,le.default)((0,oe.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");O=w.default=me;const ce=s.div`
  .OperationNumberModal {
    &__content {
      display: flex;
      justify-content: space-between;
      margin-top: 2.4rem;
    }

    &__h1 {
      font-size: 3rem;
      font-weight: 800;
    }

    &__h2 {
      font-weight: 700;
    }

    &__h3 {
      font-size: 1.2rem;
      font-weight: 700;
    }

    &__p {
      color: var(--palette-grayText);
      font-weight: 300;
    }

    &__section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__h1 {
      line-height: 2.4rem;
      font-weight: 700;
    }

    &__paragraph {
      font-weight: 500;
    }

    &__red {
      &-color {
        color: var(--palette-error);
      }
    }

    &__primary {
      &-color {
        color: var(--palette-primary);
      }
    }
  }
`,de={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:640,height:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},R=i=>{const t=l().signIn.OperationNumberModal,{open:a,setOpen:r}=i,o=()=>n("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:t.operation}),e("h1",{className:"OperationNumberModal__h1",children:"7432432-4234"}),e(O,{}),e("p",{className:"OperationNumberModal__p",children:t.current}),e("h2",{className:"OperationNumberModal__h2",children:"191 5435 5435 3455"}),e("p",{className:"OperationNumberModal__p",children:t.interbank}),e("h2",{className:"OperationNumberModal__h2",children:"191 5435 5435 3455 5345"})]}),m=()=>n("div",{className:"OperationNumberModal__section",children:[e("h3",{children:t.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:"s/. 4754.00"}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:t.offer})]});return e(Y,{open:a,onClose:()=>r(!a),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(G,{sx:de,children:e(ce,{className:"OperationNumberModal",children:n("div",{className:"OperationNumberModal__container",children:[e("p",{className:"OperationNumberModal__paragraph",children:t.paragraph}),n("div",{className:"OperationNumberModal__content",children:[o(),m()]})]})})})})};R.defaultProps={};const{BREAKPOINTS:c}=h,he=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin: 3.2rem auto;
  gap: 2rem;

  @media screen and (min-width: ${c.tablet}px) {
    padding: 1.6rem 2.4rem;
  }

  @media screen and (min-width: ${c.desktop}px) {
    flex-direction: row;
    gap: 4rem;
  }

  .InformationClient {
    &__section1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__section2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: 1rem;
    }

    &__title2 {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 1rem;

      @media screen and (min-width: ${c.desktop}px) {
        flex-direction: row;
        gap: 4rem;
      }

      text-align: center;
    }

    &__subtitle {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
      margin-bottom: 1rem;
    }

    &__subtitle2 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-top: 1rem;
    }

    &__subtitle3 {
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    &__subtitle4 {
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__cuenta1 {
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      margin-top: 1rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__button {
      background-color: var(--palette-limeGreen);
      width: 12rem;
      margin-top: 2.6rem;
    }

    &__text1 {
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__button2 {
      display: flex;
      background-color: var(--palette-primary);
      width: 24rem;
    }

    &__container {
      &--button {
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${c.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${c.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${c.desktop}px) {
          padding: 0;
        }
      }
    }

    &__text2 {
      color: var(--palette-white);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image1 {
      width: 30rem;
      height: 6.5rem;
    }

    &__imageSection {
      gap: 4rem;
      display: flex;
      margin-top: 2rem;
    }

    &__line {
      display: none;

      @media screen and (min-width: ${c.desktop}px) {
        display: block;
      }
    }
  }
`,T=i=>{const t=l().signIn.InformationClient,[a,r]=E.exports.useState(!1);return n(he,{className:"InformationClient",children:[n("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:t.title}),e("h2",{className:"InformationClient__subtitle",children:t.subtitle}),e("img",{className:"InformationClient__image1",src:ie,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:t.subtitle2}),n("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:ae,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:ne,alt:"iconMasterCardInformation"})]}),e(p,{className:"InformationClient__button",variant:"contained",children:e("h3",{className:"InformationClient__text1",children:t.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:re,alt:"lineInformation"}),n("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:t.title2}),n("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:t.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:"191 5264 8452 1254"}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:"191 55044 00541 14460"}),e("p",{className:"InformationClient__paragraph",children:t.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:t.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(p,{className:"InformationClient__button2",variant:"contained",onClick:()=>r(!a),children:e("h3",{className:"InformationClient__text2",children:t.button2.toLocaleUpperCase()})})})]}),e(R,{open:a,setOpen:r})]})};T.defaultProps={};const _e="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",pe=s.div`
  .PanelBannerClient {
    &__container {
      margin-left: 2rem;

      &--image {
        display: none;

        @media screen and (min-width: 920px) {
          position: relative;
          width: 156px;
          height: inherit;
          display: block;
        }
      }

      &--component {
        width: 100%;
        display: flex;
        align-items: flex-start;
        background-color: var(--palette-primary);
        border-radius: 0.8rem;
        padding: 1.2rem 2.4rem;
      }
    }

    &__title {
      display: flex;
      font-size: 22px;
      font-weight: 900;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      font-size: 22px;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6rem;
      gap: 0.24rem;
    }

    &__image {
      position: absolute;
      top: -3rem;

      @media screen and (min-width: 960px) {
        position: absolute;
        top: -3rem;
      }
    }
  }
`,k=i=>{const t=l().signIn.PanelBannerClient;return e(pe,{className:"PanelBannerClient",children:n("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:_e,alt:"personIcon"})}),n("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:t.title}),n("div",{className:"PanelBannerClient__section",children:[e("p",{children:t.paragraph1}),e("p",{children:t.paragraph2}),e("p",{children:t.paragraph3})]})]})]})})};k.defaultProps={};const M="/CodiShark/assets/lineSucces.23eb9802.svg",ge="/CodiShark/assets/rejectedImage.25910230.svg",fe=s.div`
  .PaymentRejected {
    &__container {
      width: 100%;
      display: flex;
      background-color: var(--palette-white);
      border-radius: 0.8rem;
      padding: 4rem 2.4rem;
      margin: 3.2rem auto;
      justify-content: space-evenly;
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25%;
    }

    &__button {
      background-color: var(--palette-primary);
    }

    &__text {
      color: var(--palette-white);
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__section2 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 3.2rem;
      width: 25%;
    }

    &__title2 {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__image {
      display: flex;
      align-self: center;
      width: 6.4rem;
      height: 6.4rem;
    }

    &__p1div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p1 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span1 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p2div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p2 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p3div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p3 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span3 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p4div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p4 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span4 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`,$=i=>{const t=l().signIn.PaymentRejected;return e(fe,{className:"PaymentRejected",children:n("div",{className:"PaymentRejected__container",children:[n("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:ge,alt:"rejectedImage"}),e("h2",{className:"PaymentRejected__title",children:t.rejected}),e("h2",{className:"PaymentRejected__subtitle",children:t.disapproved}),e(p,{className:"PaymentRejected__button",variant:"contained",children:e("h3",{className:"PaymentRejected__text",children:t.button})})]}),e("img",{className:"PaymentRejected__line",src:M,alt:"lineSuccess"}),n("div",{className:"PaymentRejected__section2",children:[e("h2",{className:"PaymentRejected__title2",children:t.title}),n("div",{className:"PaymentRejected__paragraph",children:[n("div",{className:"PaymentRejected__p1div",children:[e("p",{className:"PaymentRejected__p1",children:t.paragraph1}),e("span",{className:"PaymentRejected__span1",children:"S/. 1.750.00"})]}),e("div",{className:"PaymentRejected__p2div",children:n("p",{className:"PaymentRejected__p2",children:[t.paragraph2," ",e("span",{className:"PaymentRejected__span2",children:"05/09/2022"})]})}),e("div",{className:"PaymentRejected__p3div",children:n("p",{className:"PaymentRejected__p3",children:[t.paragraph3," ",e("span",{className:"PaymentRejected__span3",children:"17:45 horas"})]})}),e("div",{className:"PaymentRejected__p4div",children:n("p",{className:"PaymentRejected__p4",children:[t.paragraph4," ",e("span",{className:"PaymentRejected__span4",children:"S/. 1.750.00"})]})})]})]})]})})};$.defaultProps={};const ue="/CodiShark/assets/successImage.38cb00ed.svg",ye=s.div`
  .PaymentSuccess {
    &__container {
      width: 100%;
      display: flex;
      background-color: var(--palette-white);
      border-radius: 0.8rem;
      padding: 4rem 2.4rem;
      margin: 3.2rem auto;
      justify-content: space-evenly;
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25%;
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__section2 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 3.2rem;
      width: 25%;
    }

    &__title2 {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__image {
      display: flex;
      align-self: center;
      width: 6.4rem;
      height: 6.4rem;
    }

    &__p1div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p1 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span1 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p2div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p2 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p3div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p3 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span3 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p4div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p4 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span4 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`,B=i=>{const t=l().signIn.PaymentRejected;return e(ye,{className:"PaymentSuccess",children:n("div",{className:"PaymentSuccess__container",children:[n("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:ue,alt:"successImage"}),e("h2",{className:"PaymentSuccess__title",children:t.success}),e("h2",{className:"PaymentSuccess__subtitle",children:t.approved})]}),e("img",{src:M,alt:"lineSuccess"}),n("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title2",children:t.title}),n("div",{className:"PaymentSuccess__paragraph",children:[n("div",{className:"PaymentSuccess__p1div",children:[e("p",{className:"PaymentSuccess__p1",children:t.paragraph1}),e("span",{className:"PaymentSuccess__span1",children:"S/. 1.750.00"})]}),e("div",{className:"PaymentSuccess__p2div",children:n("p",{className:"PaymentSuccess__p2",children:[t.paragraph2," ",e("span",{className:"PaymentSuccess__span2",children:"05/09/2022"})]})}),e("div",{className:"PaymentSuccess__p3div",children:n("p",{className:"PaymentSuccess__p3",children:[t.paragraph3,e("span",{className:"PaymentSuccess__span3",children:"17:45 horas"})]})}),e("div",{className:"PaymentSuccess__p4div",children:n("p",{className:"PaymentSuccess__p4",children:[t.paragraph4,e("span",{className:"PaymentSuccess__span4",children:"S/. 1.750.00"})]})})]})]})]})})};B.defaultProps={};const v="/CodiShark/assets/lineSummary.409f9737.svg",we=s.div`
  .SummaryCard {
    &__title {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle {
      font-size: 16px;
    }
  }
`,_=i=>{const{title:t,children:a}=i;return n(we,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:t}),e("div",{className:"SummaryCard__subtitle",children:a})]})};_.defaultProps={};const{BREAKPOINTS:d}=h,Ne=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1rem 2.4rem;
  margin: 0 auto;

  .Summary {
    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__subtitle {
      padding-bottom: 1.2rem;
      color: var(--palette-blueText);
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6rem;
      text-align: center;

      @media screen and (min-width: ${d.desktop}px) {
        text-align: left;
      }
    }

    &__cardsContainer {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;

      @media screen and (min-width: ${d.mobile}px) {
        gap: 2.4rem;
        flex-flow: row wrap;
      }

      @media screen and (min-width: ${d.tablet}px) {
        gap: 4.8rem;
      }

      @media screen and (min-width: ${d.wide}px) {
        gap: 5.6rem;
      }
    }

    &__button {
      background-color: var(--palette-greyBackground);
      padding: 0.4rem 2.4rem;

      &:focus {
        outline: none;
      }
    }

    &__text {
      color: var(--palette-blueText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__sectionDate {
      display: flex;
      gap: 2rem;
    }

    &__span {
      display: flex;
      font-weight: 700;
      align-items: center;
      line-height: 1.6rem;
      font-size: 1.2rem;
      background-color: var(--palette-yellow);
      border-radius: 0.8rem;
      width: 5rem;
      padding: 0 auto;
      justify-content: center;
    }

    &__h3 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    &__primary-color {
      color: var(--palette-primary);
    }

    &__h4 {
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    &__icon {
      color: var(--palette-blueText);
      font-size: 1.4rem;
    }

    &__image {
      display: none;

      @media screen and (min-width: 500px) {
        display: block;
      }
    }

    &__container {
      &--content {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 1.6rem;
        flex-flow: column wrap;

        @media screen and (min-width: ${d.mobile}px) {
          flex-flow: row wrap;
        }

        @media screen and (min-width: ${d.desktop}px) {
          justify-content: space-between;
        }
      }

      &--button {
        margin: auto;

        @media screen and (min-width: ${d.mobile}px) {
          margin: 0;
        }
      }
    }
    &__section2 {
      display: flex;
      flex-direction: column;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      gap: 1.6rem;
    }

    &__p1 {
      font-weight: 600;
      color: var(--palette-blueText);
      line-height: 1.6rem;
    }

    &__span1 {
      font-size: 1rem;
      font-weight: 400;
      color: var(--palette-grayText);
    }
  }
`,A=i=>{var x;const t=l().signIn.Summary,{data:a}=S(),{data:r}=a!=null?a:{},{amount_cancellation:o,amount_dscto_cancellation:m,pct_dscto_cancellation:g,date_last_contact:N,currency:f,banking_entity:u,product:y}=(x=r==null?void 0:r[0])!=null?x:{};return n(Ne,{className:"Summary",children:[e("h2",{className:"Summary__subtitle",children:t.subtitle}),n("div",{className:"Summary__container--content",children:[n("div",{className:"Summary__cardsContainer",children:[e(_,{title:t.summary1,children:e("h3",{className:"Summary__h3",children:`S/. ${o!=null?o:""}`})}),e("img",{src:v,className:"Summary__image",alt:"separator"}),e(_,{title:t.summary2,children:n("div",{className:"Summary__sectionDate",children:[e("h3",{className:"Summary__h3 Summary__primary-color",children:`S/. ${m!=null?m:""}`}),e("div",{children:e("span",{className:"Summary__span",children:` - ${g!=null?g:""} %`})})]})}),e("img",{src:v,className:"Summary__image",alt:"separator"}),e(_,{title:t.summary3,children:e("h4",{className:"Summary__h4",children:b(N).format("DD / MM / YYYY")})})]}),e("div",{className:"Summary__container--button",children:e(p,{className:"Summary__button Summary__text",variant:"contained",endIcon:e(V,{fontSize:"small",className:"Summary__icon"}),children:t.button})})]}),n("div",{className:"Summary__section2",children:[e("div",{}),n("p",{className:"Summary__p1",children:[t.bank," ",e("span",{className:"Summary__span1",children:` ${u!=null?u:""}`})]}),n("p",{className:"Summary__p1",children:[t.amount," ",e("span",{className:"Summary__span1",children:` ${y!=null?y:""}`})]}),n("p",{className:"Summary__p1",children:[t.currency," ",e("span",{className:"Summary__span1",children:` ${f!=null?f:""}`})]}),n("p",{className:"Summary__p1",children:[t.date," ",e("span",{className:"Summary__span1",children:b(N).format("DD / MM / YYYY")})]})]})]})};A.defaultProps={};const{BREAKPOINTS:C}=h,xe=s.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  display: flex;
  gap: 2%;

  @media screen and (max-width: 1366px) {
    flex-direction: column;
  }

  .ClientContainer {
    &__section1 {
      width: 70%;

      @media screen and (max-width: 1366px) {
        width: 88%;
        margin: 0 auto;
      }
    }

    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-top: -1rem;
      margin-bottom: 0.6rem;
    }

    &__section2 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.6rem;

      @media screen and (min-width: ${C.tablet}px) {
        flex-direction: row;
      }
    }

    &__section3 {
      width: 28%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-wrap: wrap;
      display: none;

      @media screen and (min-width: ${C.wide}px) {
        display: block;
      }
    }
  }
`,D=i=>{const t=l().signIn.ClientContainer;return e(U,{children:n(xe,{className:"ClientContainer",children:[n("div",{className:"ClientContainer__section1",children:[e(k,{}),n("div",{className:"ClientContainer__section2",children:[e(z,{}),e(j,{})]}),e("h2",{className:"ClientContainer__title",children:t.title}),e(A,{}),e(T,{}),e(B,{}),e($,{})]}),n("div",{className:"ClientContainer__section3",children:[e(I,{}),e(P,{})]})]})})};D.defaultProps={};const Re=D;export{Re as default};
