import{s as r,j as i,a as e}from"./index.54d467d3.js";import{u as a}from"./i18n.hooks.c61be4d0.js";import{B as m}from"./Button.27bc8f23.js";import{L as I}from"./Layout.container.1dfcf21d.js";import"./auth.service.hooks.6dc6e0a9.js";import"./constants.03d913e0.js";const b="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",x=r.div`
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
`,d=n=>{const t=a().signIn.CardImageOne;return i(x,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:b,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:t.subtitle}),e("h2",{className:"CardImageOne__title",children:t.title})]})};d.defaultProps={};const y="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",v=r.div`
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
`,c=n=>{const t=a().signIn.CardImageTwo;return i(v,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:y,alt:"fotoMujerOne"}),i("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:t.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:t.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:t.subtitle3})]})]})};c.defaultProps={};const N=r.div`
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
`,h=n=>{const{dni:t,name:l}=n;return i(N,{className:"InfoCardClientOne",children:[e("h2",{className:"InfoCardClientOne__name",children:l}),e("h2",{className:"InfoCardClientOne__dni",children:t})]})};h.defaultProps={};const S=r.div`
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
`,_=n=>{const t=a().signIn.IndicatorsClientOne;return i(S,{className:"IndicatorsClientOne",children:[e("h2",{className:"IndicatorsClientOne__title",children:t.greetings}),e("div",{className:"IndicatorsClientOne__cardsContainer",children:e(h,{name:"ARMANDO RODRIGUEZ GUERRA",dni:"DNI N\xB0 86752459"})})]})};_.defaultProps={};const z=r.div`
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
`,f=n=>{const{title:t,value:l}=n;return i(z,{className:"InfoCardClientTwo",children:[e("h2",{className:"InfoCardClientTwo__title",children:t}),e("h2",{className:"InfoCardClientTwo__value",children:l})]})};f.defaultProps={};const T=r.div`
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
`,g=n=>e(T,{className:"IndicatorsClientTwo",children:e("div",{className:"IndicatorsClientTwo__cardsContainer",children:e(f,{title:"Deuda Actual",value:"S/. 5750.00"})})});g.defaultProps={};const O="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",P="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",k="/CodiShark/assets/imagePayInformation.de64d6a1.svg",B="/CodiShark/assets/lineInformation.84349c20.svg",j=r.div`
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
`,p=n=>{const t=a().signIn.InformationClient;return i(j,{className:"InformationClient",children:[i("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:t.title}),e("h2",{className:"InformationClient__subtitle",children:t.subtitle}),e("img",{className:"InformationClient__image1",src:k,alt:"ImagePayInformation"}),i("div",{className:"InformationClient__p",children:[e("p",{children:"Paga con todas las billeteras"}),e("p",{children:"electr\xF3nicas como Yape, Plim, etc"})]}),e("h2",{className:"InformationClient__subtitle2",children:t.subtitle2}),i("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:P,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:O,alt:"iconMasterCardInformation"})]}),e(m,{className:"InformationClient__button",variant:"contained",children:e("h3",{className:"InformationClient__text1",children:t.button})})]}),i("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:t.title2}),e("h2",{className:"InformationClient__subtitle3",children:t.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:"191 5264 8452 1254"}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:"191 55044 00541 14460"}),e("p",{className:"InformationClient__parrafo",children:t.parrafo}),e("h2",{className:"InformationClient__subtitle6",children:t.subtitle6}),e(m,{className:"InformationClient__button2",variant:"contained",children:e("h3",{className:"InformationClient__text2",children:t.button2})})]}),e("img",{className:"InformationClient__line",src:B,alt:"lineInformation"})]})};p.defaultProps={};const M="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",D=r.div`
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
`,u=n=>{const t=a().signIn.PanelBannerClient;return i(D,{className:"PanelBannerClient",children:[i("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:t.title}),i("div",{className:"PanelBannerClient__section",children:[e("p",{children:t.parrafo1}),e("p",{children:t.parrafo2}),e("p",{children:t.parrafo3})]})]}),e("img",{className:"PanelBannerClient__image",src:M,alt:"personIcon"})]})};u.defaultProps={};const s="/CodiShark/assets/lineSummary.409f9737.svg",R=r.div`
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
`,o=n=>{const{title:t,children:l}=n;return i(R,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:t}),e("div",{className:"SummaryCard__subtitle",children:l})]})};o.defaultProps={};const A=r.div`
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
`,C=n=>{const t=a().signIn.Summary;return i(A,{className:"Summary",children:[e("h2",{className:"Summary__subtitle",children:t.subtitle}),i("div",{className:"Summary__cardsContainer",children:[e(o,{title:t.summary1,children:e("h3",{className:"Summary__h3",children:"S/ 8200"})}),e(o,{title:t.summary2,children:i("div",{className:"Summary__sectionDate",children:[e("h3",{className:"Summary__h3 Summary__primary-color",children:"S/6750.00"}),e("span",{className:"Summary__span",children:"-35%"})]})}),e(o,{title:t.summary3,children:e("h4",{className:"Summary__h4",children:"10/09/2022"})})]}),e(m,{className:"Summary__button",variant:"contained",children:e("h3",{className:"Summary__text",children:t.button})}),e("img",{className:"Summary__line1",src:s,alt:"lineSummary"}),e("img",{className:"Summary__line2",src:s,alt:"lineSummary"})]})};C.defaultProps={};const G=r.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  min-height: 100vh;

  .ClientContainer {
    &__title {
      left: 0.26rem;
      top: 27.5rem;
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;

      @media screen and (max-width: 1366px) {
        left: 9.2rem;
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
    }
  }
`,w=n=>{const t=a().signIn.Summary;return e(I,{children:i(G,{className:"ClientContainer",children:[i("div",{className:"ClientContainer__section1",children:[e(u,{}),i("div",{className:"ClientContainer__section2",children:[e(_,{}),e(g,{})]}),e("h2",{className:"ClientContainer__title",children:t.title}),e(C,{}),e(p,{})]}),i("div",{className:"ClientContainer__section3",children:[e(d,{}),e(c,{})]})]})})};w.defaultProps={};const Z=w;export{Z as default};
