import{s as a,j as i,a as e}from"./index.d266eea9.js";import{u as r}from"./i18n.hooks.02144d44.js";import{B as s}from"./Button.9fe5d7ca.js";import{L as N}from"./Layout.container.3c1562eb.js";import"./auth.service.hooks.7d2206e7.js";import"./constants.03d913e0.js";const I="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",S=a.div`
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
`,d=n=>{const t=r().signIn.CardImageOne;return i(S,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:I,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:t.subtitle}),e("h2",{className:"CardImageOne__title",children:t.title})]})};d.defaultProps={};const P="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",z=a.div`
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
`,h=n=>{const t=r().signIn.CardImageTwo;return i(z,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:P,alt:"fotoMujerOne"}),i("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:t.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:t.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:t.subtitle3})]})]})};h.defaultProps={};const j=a.div`
  background-color: var(--palette-white);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  padding: 4rem;

  .InfoCardClientOne {
    &__name {
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 1.6rem;
      padding-bottom: 0.8rem;
      padding-top: 0.8rem;
    }

    &__dni {
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.6rem;
    }
  }
`,_=n=>{const{dni:t,name:l}=n;return i(j,{className:"InfoCardClientOne",children:[e("h2",{className:"InfoCardClientOne__name",children:l}),e("h2",{className:"InfoCardClientOne__dni",children:t})]})};_.defaultProps={};const R=a.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.4rem 0;
  position: relative;

  .IndicatorsClientOne {
    &__title {
      position: absolute;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2.4rem;
      left: 4rem;
      top: 2rem;
    }

    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`,g=n=>{const t=r().signIn.IndicatorsClientOne;return i(R,{className:"IndicatorsClientOne",children:[e("h2",{className:"IndicatorsClientOne__title",children:t.greetings}),e("div",{className:"IndicatorsClientOne__cardsContainer",children:e(_,{name:"ARMANDO RODRIGUEZ GUERRA",dni:"DNI N\xB0 86752459"})})]})};g.defaultProps={};const T=a.div`
  background-color: var(--palette-white);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  padding: 4rem;

  .InfoCardClientTwo {
    &__title {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-bottom: 1.6rem;
    }

    &__value {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 2.2rem;
      line-height: 1.6rem;
    }
  }
`,p=n=>{const{title:t,value:l}=n;return i(T,{className:"InfoCardClientTwo",children:[e("h2",{className:"InfoCardClientTwo__title",children:t}),e("h2",{className:"InfoCardClientTwo__value",children:l})]})};p.defaultProps={};const O=a.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.4rem 0;
  position: relative;

  .IndicatorsClientTwo {
    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`,f=n=>e(O,{className:"IndicatorsClientTwo",children:e("div",{className:"IndicatorsClientTwo__cardsContainer",children:e(p,{title:"Deuda Actual",value:"S/. 5750.00"})})});f.defaultProps={};const k="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",B="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",M="/CodiShark/assets/imagePayInformation.de64d6a1.svg",D="/CodiShark/assets/lineInformation.84349c20.svg",A=a.div`
  width: 100%;
  height: 32rem;
  display: flex;
  flex-direction: row;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  margin: 3.2rem auto;
  position: relative;
  gap: 4rem;

  .InformationClient {
    &__section1 {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__section2 {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 1518px) {
        margin-left: 4rem;
      }
    }

    &__title {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-left: 16rem;
      margin-top: 1rem;
    }

    &__title2 {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-left: 12rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
      margin-left: 13.6rem;
      margin-bottom: 1rem;
    }

    &__subtitle2 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-left: 11.2rem;
      margin-top: 1rem;
    }

    &__subtitle3 {
      margin-bottom: 1rem;
      margin-left: 7.2rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    &__subtitle4 {
      margin-left: 7.2rem;
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 7.2rem;
      font-weight: 800;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__cuenta1 {
      margin-left: 7.2rem;
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &__parrafo {
      margin-top: 1rem;
      margin-left: 7.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__button {
      background-color: var(--palette-limeGreen);
      width: 12rem;
      margin-top: 2.6rem;
      margin-left: 16.6rem;
    }
    &__text1 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__button2 {
      margin-left: 7.2rem;
      display: flex;
      background-color: var(--palette-primary);
      width: 24rem;
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
      margin-left: 8rem;
    }

    &__imageSection {
      gap: 4rem;
      margin-left: 16rem;
      display: flex;
      margin-top: 2rem;
    }

    &__line {
      position: absolute;
      left: 50.5rem;
      top: 3.6rem;

      @media screen and (max-width: 1518px) {
        margin-left: -3.2rem;
      }
    }

    &__p {
      color: var(--palette-grayText);
      position: absolute;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 0.8rem;
      top: 11.2rem;
      right: 67.6rem;

      @media screen and (max-width: 1518px) {
        display: none;
      }
    }
  }
`,u=n=>{const t=r().signIn.InformationClient;return i(A,{className:"InformationClient",children:[i("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:t.title}),e("h2",{className:"InformationClient__subtitle",children:t.subtitle}),e("img",{className:"InformationClient__image1",src:M,alt:"ImagePayInformation"}),i("div",{className:"InformationClient__p",children:[e("p",{children:"Paga con todas las billeteras"}),e("p",{children:"electr\xF3nicas como Yape, Plim, etc"})]}),e("h2",{className:"InformationClient__subtitle2",children:t.subtitle2}),i("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:B,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:k,alt:"iconMasterCardInformation"})]}),e(s,{className:"InformationClient__button",variant:"contained",children:e("h3",{className:"InformationClient__text1",children:t.button})})]}),i("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:t.title2}),e("h2",{className:"InformationClient__subtitle3",children:t.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:"191 5264 8452 1254"}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:"191 55044 00541 14460"}),e("p",{className:"InformationClient__parrafo",children:t.parrafo}),e("h2",{className:"InformationClient__subtitle6",children:t.subtitle6}),e(s,{className:"InformationClient__button2",variant:"contained",children:e("h3",{className:"InformationClient__text2",children:t.button2})})]}),e("img",{className:"InformationClient__line",src:D,alt:"lineInformation"})]})};u.defaultProps={};const E="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",G=a.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-primary);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  position: relative;
  margin: 0 auto;

  .PanelBannerClient {
    &__title {
      display: flex;
      margin-left: 20rem;
      font-size: 22px;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      margin-left: 20rem;
      font-size: 22px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image {
      position: absolute;
      top: -3rem;
      left: 2.4rem;
      width: 17rem;

      @media screen and (max-width: 280px) {
        position: absolute;
        top: 1rem;
        right: 0.4rem;
        width: 10.4rem;
      }
    }
  }
`,y=n=>{const t=r().signIn.PanelBannerClient;return i(G,{className:"PanelBannerClient",children:[i("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:t.title}),i("div",{className:"PanelBannerClient__section",children:[e("p",{children:t.parrafo1}),e("p",{children:t.parrafo2}),e("p",{children:t.parrafo3})]})]}),e("img",{className:"PanelBannerClient__image",src:E,alt:"personIcon"})]})};y.defaultProps={};const w="/CodiShark/assets/lineSucces.23eb9802.svg",V="/CodiShark/assets/rejectedImage.25910230.svg",L=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ClientPayment {
    &__title {
      margin-left: 1.6rem;
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-bottom: 2rem;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.6rem;
      margin-left: -2rem;
    }
  }
`,o=n=>{const{subtitle:t,title:l}=n;return i(L,{className:"ClientPayment",children:[e("h2",{className:"ClientPayment__title",children:l}),e("h2",{className:"ClientPayment__subtitle",children:t})]})};o.defaultProps={};const U=a.div`
  width: 100%;
  height: 32rem;
  display: flex;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  margin: 3.2rem auto;
  position: relative;
  gap: 4rem;

  .PaymentRejected {
    &__container {
      display: flex;
      gap: 22rem;
      position: relative;
    }

    &__section {
      display: flex;
      flex-direction: column;
      margin-top: 4.8rem;
      padding-left: 18rem;
      padding-right: 4rem;
    }

    &__section2 {
      padding-right: 16rem;
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-left: 6.4rem;
      margin-top: 6.4rem;
      margin-bottom: 2.4rem;
    }

    &__image {
      margin-bottom: 3.2rem;
      width: 6.4rem;
      height: 6.4rem;
      margin-left: 4.8rem;
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

    &__parrafos {
      margin-left: 2.4rem;
    }

    &__line {
      position: absolute;
      left: 50rem;
      top: 7.2rem;
    }

    &__button {
      background-color: var(--palette-primary);
      margin-top: 2.4rem;
      margin-left: -2.4rem;
    }

    &__text {
      color: var(--palette-white);
    }
  }
`,C=n=>{const t=r().signIn.PaymentRejected;return e(U,{className:"PaymentRejected",children:i("div",{className:"PaymentRejected__container",children:[e("img",{className:"PaymentRejected__line",src:w,alt:"lineSucces"}),i("div",{className:"PaymentRejected__section",children:[e("img",{className:"PaymentRejected__image",src:V,alt:"rejectedImage"}),e(o,{title:"Pago Rechazado",subtitle:"No se pudo procesar el pago"}),e(s,{className:"PaymentRejected__button",variant:"contained",children:e("h3",{className:"PaymentRejected__text",children:t.button})})]}),i("div",{className:"PaymentRejected__section2",children:[e("h2",{className:"PaymentRejected__title",children:t.title}),i("div",{className:"PaymentRejected__parrafos",children:[i("div",{className:"PaymentRejected__p1div",children:[e("p",{className:"PaymentRejected__p1",children:t.parrafo1}),e("span",{className:"PaymentRejected__span1",children:"S/. 1.750.00"})]}),e("div",{className:"PaymentRejected__p2div",children:i("p",{className:"PaymentRejected__p2",children:[t.parrafo2," ",e("span",{className:"PaymentRejected__span2",children:"05/09/2022"})]})}),e("div",{className:"PaymentRejected__p3div",children:i("p",{className:"PaymentRejected__p3",children:[t.parrafo3," ",e("span",{className:"PaymentRejected__span3",children:"17:45 horas"})]})}),e("div",{className:"PaymentRejected__p4div",children:i("p",{className:"PaymentRejected__p4",children:[t.parrafo4," ",e("span",{className:"PaymentRejected__span4",children:"S/. 1.750.00"})]})})]})]})]})})};C.defaultProps={};const F="/CodiShark/assets/succesImage.38cb00ed.svg",Y=a.div`
  width: 100%;
  height: 32rem;
  display: flex;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  margin: 3.2rem auto;
  position: relative;
  gap: 4rem;

  .PaymentSuccess {
    &__container {
      display: flex;
      gap: 22rem;
      position: relative;
    }

    &__section {
      display: flex;
      flex-direction: column;
      margin-top: 4.8rem;
      padding-left: 18rem;
      padding-right: 4rem;
    }

    &__section2 {
      padding-right: 16rem;
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-left: 6.4rem;
      margin-top: 6.4rem;
      margin-bottom: 2.4rem;
    }

    &__image {
      margin-bottom: 3.2rem;
      width: 6.4rem;
      height: 6.4rem;
      margin-left: 4.8rem;
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

    &__parrafos {
      margin-left: 2rem;
    }

    &__line {
      position: absolute;
      left: 50rem;
      top: 7.2rem;
    }
  }
`,b=n=>{const t=r().signIn.PaymentRejected;return e(Y,{className:"PaymentSuccess",children:i("div",{className:"PaymentSuccess__container",children:[e("img",{className:"PaymentSuccess__line",src:w,alt:"lineSucces"}),i("div",{className:"PaymentSuccess__section",children:[e("img",{className:"PaymentSuccess__image",src:F,alt:"succesImage"}),e(o,{title:"Pago Exitoso",subtitle:"Se ha aprobado su pago con \xE9xito"})]}),i("div",{className:"PaymentSuccess__section2",children:[e("h2",{className:"PaymentSuccess__title",children:t.title}),i("div",{className:"PaymentSuccess__parrafos",children:[i("div",{className:"PaymentSuccess__p1div",children:[e("p",{className:"PaymentSuccess__p1",children:t.parrafo1}),e("span",{className:"PaymentSuccess__span1",children:"S/. 1.750.00"})]}),e("div",{className:"PaymentSuccess__p2div",children:i("p",{className:"PaymentSuccess__p2",children:[t.parrafo2,e("span",{className:"PaymentSuccess__span2",children:"05/09/2022"})]})}),e("div",{className:"PaymentSuccess__p3div",children:i("p",{className:"PaymentSuccess__p3",children:[t.parrafo3," ",e("span",{className:"PaymentSuccess__span3",children:"17:45 horas"})]})}),e("div",{className:"PaymentSuccess__p4div",children:i("p",{className:"PaymentSuccess__p4",children:[t.parrafo4," ",e("span",{className:"PaymentSuccess__span4",children:"S/. 1.750.00"})]})})]})]})]})})};b.defaultProps={};const c="/CodiShark/assets/lineSummary.409f9737.svg",Z=a.div`
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
`,m=n=>{const{title:t,children:l}=n;return i(Z,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:t}),e("div",{className:"SummaryCard__subtitle",children:l})]})};m.defaultProps={};const q=a.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  position: relative;
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
    }

    &__cardsContainer {
      display: flex;
      flex-direction: row;
      gap: 9rem;
    }

    &__button {
      background-color: var(--palette-greyBackground);
      position: absolute;
      right: 5rem;
      bottom: 3.8rem;
    }

    &__text {
      color: var(--palette-blueText);
      font-weight: 700;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__line1 {
      position: absolute;
      left: 16rem;
      top: 3.6rem;
    }

    &__line2 {
      position: absolute;
      left: 34rem;
      top: 3.6rem;
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
  }
`,x=n=>{const t=r().signIn.Summary;return i(q,{className:"Summary",children:[e("h2",{className:"Summary__subtitle",children:t.subtitle}),i("div",{className:"Summary__cardsContainer",children:[e(m,{title:t.summary1,children:e("h3",{className:"Summary__h3",children:"S/ 8200"})}),e(m,{title:t.summary2,children:i("div",{className:"Summary__sectionDate",children:[e("h3",{className:"Summary__h3 Summary__primary-color",children:"S/6750.00"}),e("span",{className:"Summary__span",children:"-35%"})]})}),e(m,{title:t.summary3,children:e("h4",{className:"Summary__h4",children:"10/09/2022"})})]}),e(s,{className:"Summary__button",variant:"contained",children:e("h3",{className:"Summary__text",children:t.button})}),e("img",{className:"Summary__line1",src:c,alt:"lineSummary"}),e("img",{className:"Summary__line2",src:c,alt:"lineSummary"})]})};x.defaultProps={};const H=a.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  min-height: 100vh;
  display: flex;

  @media screen and (max-width: 1366px) {
    flex-direction: column;
  }

  .ClientContainer {
    &__title {
      left: 0.26rem;
      top: 27.5rem;
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;

      @media screen and (max-width: 1366px) {
        left: 7.2rem;
      }
    }
    &__section1 {
      width: 72%;

      @media screen and (max-width: 1366px) {
        width: 88%;
        margin: 0 auto;
      }
    }

    &__section2 {
      justify-content: space-between;
      display: flex;
      width: 100%;

      @media screen and (max-width: 1366px) {
        width: 100%;
        margin: 0 auto;
      }
    }

    &__section3 {
      margin-right: 2.4rem;
      margin-left: 2.4rem;
      width: 70%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-wrap: wrap;

      @media screen and (max-width: 1366px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 4rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
`,v=n=>{const t=r().signIn.Summary;return e(N,{children:i(H,{className:"ClientContainer",children:[i("div",{className:"ClientContainer__section1",children:[e(y,{}),i("div",{className:"ClientContainer__section2",children:[e(g,{}),e(f,{})]}),e("h2",{className:"ClientContainer__title",children:t.title}),e(x,{}),e(u,{}),e(b,{}),e(C,{})]}),i("div",{className:"ClientContainer__section3",children:[e(d,{}),e(h,{})]})]})})};v.defaultProps={};const ee=v;export{ee as default};
