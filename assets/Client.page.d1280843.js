import{s as c,j as o,a as e,ag as y,C as h,r as f,E as J}from"./index.5722ca59.js";import{u as m,g as Q}from"./i18n.hooks.9b49f881.js";import{r as X,i as Z,a as ee,L as te}from"./Layout.container.dd4d0146.js";import{M as ne}from"./auth.service.hooks.0eb91883.js";import{B as ae}from"./Box.762bea06.js";import{B as k}from"./Button.4033bab2.js";import{b as ie,d as re,a as oe,c as le}from"./Remove.6184b7dd.js";import{T as se}from"./Table.4d8c79b6.js";import{d as de,e as ce}from"./validations.utils.0ba59366.js";import{g as me,a as he}from"./common.utils.834bf330.js";import"./useQuery.d44fefcf.js";import"./users.service.0e628ad6.js";const pe="/CodiShark/assets/fotoMujerOne.cadd13a3.svg",_e=c.div`
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
`,z=n=>{const t=m().signIn.CardImageOne;return o(_e,{className:"CardImageOne",children:[e("img",{className:"CardImageOne__image",src:pe,alt:"fotoMujerOne"}),e("h2",{className:"CardImageOne__subtitle",children:t.subtitle}),e("h2",{className:"CardImageOne__title",children:t.title})]})};z.defaultProps={};const ge="/CodiShark/assets/fotoMujerTwo.ed1bc8b5.svg",be=c.div`
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
`,D=n=>{const t=m().signIn.CardImageTwo;return o(be,{className:"CardImageTwo",children:[e("img",{className:"CardImageTwo__image",src:ge,alt:"fotoMujerOne"}),o("div",{className:"CardImageTwo__section",children:[e("p",{className:"CardImageTwo__subtitle1",children:t.subtitle1}),e("p",{className:"CardImageTwo__subtitle2",children:t.subtitle2}),e("p",{className:"CardImageTwo__subtitle3",children:t.subtitle3})]})]})};D.defaultProps={};const ue="/CodiShark/assets/iconMasterCardInformation.1c2014dd.svg",fe="/CodiShark/assets/iconVisaInformation.b7bad2af.svg",xe="/CodiShark/assets/imagePayInformation.de64d6a1.svg",Ce="/CodiShark/assets/lineInformation.84349c20.svg";var T={},we=Z.exports;Object.defineProperty(T,"__esModule",{value:!0});var E=T.default=void 0,Ne=we(X()),ve=ee,Ie=(0,Ne.default)((0,ve.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");E=T.default=Ie;const ye=c.div`
  .OperationNumberModal {
    &__content {
      display: flex;
      justify-content: space-between;
      margin-top: 2.4rem;
    }

    &__copy {
      background-color: var(--palette-greyBackgroundSearch);
      color: var(--palette-grayText);
      width: 6rem;
      border-radius: 0.4rem;
      padding: 0.4rem;
      display: flex;

      &:hover {
        cursor: pointer;
      }
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
`,Te={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:640,height:320,bgcolor:"#fff",border:"1px solid var(--palette-primary)",borderRadius:4,boxShadow:24,p:4},{CCI_ACCOUNT_NUMBER:Oe,ACCOUNT_NUMBER:Pe}=h,$=n=>{const t=m().signIn.OperationNumberModal,{open:a,setOpen:i,operationNumber:r,userDebt:l}=n,{amount_dscto_cancellation:s,limit_date:p}=l!=null?l:{},x=()=>o("div",{className:"OperationNumberModal__section",children:[e("h3",{className:"OperationNumberModal__h3",children:t.operation}),e("h1",{className:"OperationNumberModal__h1",children:r!=null?r:""}),o("div",{className:"OperationNumberModal__copy",onClick:()=>{navigator.clipboard.writeText(r!=null?r:"")},children:[e(E,{}),t.copy]}),e("p",{className:"OperationNumberModal__p",children:t.current}),e("h2",{className:"OperationNumberModal__h2",children:Pe}),e("p",{className:"OperationNumberModal__p",children:t.interbank}),e("h2",{className:"OperationNumberModal__h2",children:Oe})]}),b=()=>o("div",{className:"OperationNumberModal__section",children:[e("h3",{children:t.amount}),e("h1",{className:"OperationNumberModal__h1 OperationNumberModal__primary-color",children:`S/. ${s!=null?s:""}`}),e("p",{className:"OperationNumberModal__paragraph OperationNumberModal__red-color",children:`${t.offer}: ${y(p).format("DD/MM/YYYY")}`})]});return e(ne,{open:a,onClose:()=>i(!a),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e(ae,{sx:Te,children:e(ye,{className:"OperationNumberModal",children:o("div",{className:"OperationNumberModal__container",children:[e("p",{className:"OperationNumberModal__paragraph",children:t.paragraph}),o("div",{className:"OperationNumberModal__content",children:[x(),b()]})]})})})})};$.defaultProps={};const{BREAKPOINTS:g}=h,ke=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin: 2.4rem auto;
  gap: 2rem;

  @media screen and (min-width: ${g.tablet}px) {
    padding: 1.6rem 2.4rem;
  }

  @media screen and (min-width: ${g.desktop}px) {
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

      @media screen and (min-width: ${g.desktop}px) {
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

        @media screen and (min-width: ${g.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${g.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${g.desktop}px) {
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

      @media screen and (min-width: ${g.desktop}px) {
        display: block;
      }
    }
  }
`,{CCI_ACCOUNT_NUMBER:Re,ACCOUNT_NUMBER:Se}=h,j=n=>{const t=m().signIn.InformationClient,{userDebt:a}=n,[i,r]=f.exports.useState(!1),[l,s]=f.exports.useState(),{id:p,amount_dscto_cancellation:x}=a!=null?a:{},{mutateAsync:b,reset:C,isLoading:u}=ie(),N=async()=>{try{x&&p&&(await b({amount:x,debtId:p}).then(_=>{const{operation_number:v}=_!=null?_:{};s(v)}).catch(),r(!i),C())}catch(_){console.log(_)}};return o(ke,{className:"InformationClient",children:[o("div",{className:"InformationClient__section1",children:[e("h2",{className:"InformationClient__title",children:t.title}),e("h2",{className:"InformationClient__subtitle",children:t.subtitle}),e("img",{className:"InformationClient__image1",src:xe,alt:"ImagePayInformation"}),e("h2",{className:"InformationClient__subtitle2",children:t.subtitle2}),o("div",{className:"InformationClient__imageSection",children:[e("img",{className:"InformationClient__image2",src:fe,alt:"iconVisaInformation"}),e("img",{className:"InformationClient__image3",src:ue,alt:"iconMasterCardInformation"})]}),e(k,{className:"InformationClient__button",variant:"contained",disabled:u,children:e("h3",{className:"InformationClient__text1",children:t.button.toLocaleUpperCase()})})]}),e("img",{className:"InformationClient__line",src:Ce,alt:"lineInformation"}),o("div",{className:"InformationClient__section2",children:[e("h2",{className:"InformationClient__title2",children:t.title2}),o("div",{className:"InformationClient__container--content",children:[e("h2",{className:"InformationClient__subtitle3",children:t.subtitle3}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle4}),e("p",{className:"InformationClient__cuenta1",children:Se}),e("h2",{className:"InformationClient__subtitle4",children:t.subtitle5}),e("p",{className:"InformationClient__cuenta1",children:Re}),e("p",{className:"InformationClient__paragraph",children:t.paragraph}),e("h2",{className:"InformationClient__subtitle6",children:t.subtitle6})]}),e("div",{className:"InformationClient__container--button",children:e(k,{className:"InformationClient__button2",variant:"contained",onClick:N,disabled:u,children:e("h3",{className:"InformationClient__text2",children:t.button2.toLocaleUpperCase()})})})]}),e($,{open:i,setOpen:r,operationNumber:l,userDebt:a})]})};j.defaultProps={};const Me=c.div`
  .DebtExpandableRowsComponent {
    &__container {
      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-blueText);

        &-bold {
          font-weight: 700;
        }

        &-expand {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.2rem;
          width: 100%;
        }
      }

      &__expand {
        &-static {
          width: 10rem;
        }

        &-text {
          display: -webkit-box;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
        }
      }
    }

    &__component {
      &--divider {
        border-bottom: 0.06rem solid var(--palette-grey);
      }
    }
  }
`,A=n=>{const{data:t}=n,a=Q().global.table.TableDebtUser.TableRowsExpand,i=(l,s)=>o("div",{className:"DebtExpandableRowsComponent__container__expand-text",children:[e("div",{className:"DebtExpandableRowsComponent__container__expand-static",children:e("p",{className:"DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold",children:`${l} `})}),e("p",{className:"DebtExpandableRowsComponent__container--field ",children:s!=null?s:"-"})]}),r=()=>e("div",{className:"DebtExpandableRowsComponent__component--divider"});return o(Me,{className:"DebtExpandableRowsComponent",children:[o("div",{className:"DebtExpandableRowsComponent__container__expand",children:[i(a.entity,t==null?void 0:t.banking_entity),r(),i(a.typeDebt,t==null?void 0:t.product),r(),i(a.typeExchange,t==null?void 0:t.currency),r(),i(a.date,y(t==null?void 0:t.date_last_contact).format("DD / MM / YYYY"))]}),e(j,{userDebt:t})]})};A.defaultProps={};const{BREAKPOINTS:R}=h,Be=c.div`
  .Pagination {
    background-color: var(--palette-greyBackground);
    padding: 0.8rem 0;

    &__container {
      display: flex;
      justify-content: space-between;

      &--pagination {
        display: flex;
        justify-content: space-between;
        gap: 2.4rem;

        @media screen and (max-width: ${R.mobile}px) {
          width: 100%;
          justify-content: space-evenly;
        }
      }

      &--numbers {
        font-size: 1rem;
        color: var(--palette-darkText);
        padding: 0.4rem 0.8rem;
        cursor: pointer;

        &-activated {
          background-color: var(--palette-whiteBackgroundTree);
          border: 1px solid var(--palette-greyBackgroundBorder);
          border-radius: 50%;
        }
      }
    }

    &__text {
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.4rem;
      display: flex;
      align-items: center;

      @media screen and (max-width: ${R.mobile}px) {
        display: none;
      }

      &--bold {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        background-color: var(--palette-greyBackground);
        border: none;

        &:focus {
          outline: none;
        }
      }

      &--disabled {
        color: var(--palette-whiteBackgroundTwo);
      }
    }
  }
`,U=n=>{const{rowsPerPage:t,rowCount:a}=n,{currentPage:i,onChangePage:r}=n,l=m().global.table.TableDebtUser.Pagination,s=he(a,t),p=me(s),b=i*t-t+1,C=i===1,u=i===s,N=f.exports.useCallback(()=>r(i-1),[i,r]),_=f.exports.useCallback(()=>r(i+1),[i,r]),v=f.exports.useCallback(d=>r(d),[r]),H=d=>e("div",{...d,children:d==null?void 0:d.value}),q=l.legend(b,a,a),P=d=>`Pagination__text--bold ${d?"Pagination__text--disabled":""}`,G=d=>`Pagination__container--numbers ${d===i?"Pagination__container--numbers-activated":""}`;return e(Be,{className:"Pagination",children:o("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:q}),o("div",{className:"Pagination__container--pagination",children:[e("button",{className:P(C),"aria-disabled":C,onClick:N,disabled:C,children:l.back}),p.map((d,F)=>e(H,{value:d,className:G(d),onClick:()=>v(d)},F)),e("button",{className:P(u),"aria-disabled":u,onClick:_,disabled:u,children:l.next})]})]})})};U.defaultProps={};const{BREAKPOINTS:ze}=h,w=c.div`
  .DebtTable {
    &__container {
      &--middle {
        display: flex;
        gap: 0.64rem;
        align-items: center;
      }

      &--button {
        &-content {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 0.4rem;
          padding-left: 1.6rem;
          padding-right: 1.6rem;
        }
      }

      &--divider {
        border-right: 0.01rem solid var(--palette-darkText);
        height: 80%;
      }

      &--icon {
        pointer-events: none;
      }
    }

    &__component {
      &--discount {
        display: flex;
        font-weight: 700;
        align-items: center;
        line-height: 1.6rem;
        font-size: 1.2rem;
        background-color: var(--palette-yellow);
        border-radius: 0.8rem;
        padding: 0 0.8rem;
        justify-content: center;
      }

      &--button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0.8rem;
        background-color: var(--palette-greyBackground);
        color: var(--palette-blueText);
        text-align: center;
        padding: 0.2rem;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.2rem;
        min-width: 12rem;

        @media screen and (min-width: ${ze.mobile}px) {
          padding: 0.8rem 1rem;
        }
      }
    }
    &__text {
      &--title {
        color: var(--palette-grayText);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }

      &--color {
        color: var(--palette-primary);
      }

      &--date {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
  }
`,De=n=>e(U,{...n}),K=n=>{const{data:t,columns:a,expandableRows:i,expandableRowsComponent:r}=n,{progressPending:l,expandOnRowClicked:s,expandableRowExpanded:p}=n;return e(w,{className:"DebtTable",children:e(se,{columns:a,data:t,expandableRows:i,expandableRowsComponent:r,expandOnRowClicked:s,paginationPerPage:de,paginationRowsPerPageOptions:ce,expandableRowExpanded:p,paginationComponent:De,expandableIcon:{collapsed:null,expanded:null},progressPending:l,hiddenHeadRow:!0})})};K.defaultProps={};const{BREAKPOINTS:Ee}=h,$e=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.6rem;

  @media screen and (min-width: ${Ee.tablet}px) {
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
`,Y=n=>{const t=m().signIn.IndicatorsClientOne,{user:a}=J(),{first_name:i,last_name:r,mother_last_name:l}=a!=null?a:{};return e($e,{className:"IndicatorsClientOne",children:o("div",{className:"IndicatorsClientOne__component--card",children:[e("h2",{className:"IndicatorsClientOne__text--light",children:t.greetings}),e("h2",{className:"IndicatorsClientOne__text--bold",children:`${i!=null?i:""} ${r} ${l}`}),e("h2",{className:"IndicatorsClientOne__text--normal",children:"DNI N\xB0 86752459"})]})})};Y.defaultProps={};const{BREAKPOINTS:je}=h,Ae=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;

  @media screen and (min-width: ${je.tablet}px) {
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
`,L=n=>{const{total_debts:t}=n;return e(Ae,{className:"IndicatorsClientTwo",children:o("div",{className:"IndicatorsClientTwo__component--card",children:[e("h2",{className:"IndicatorsClientTwo__text--bold",children:"Deuda Actual"}),e("h2",{className:"IndicatorsClientTwo__text--blue",children:`S/. ${t!=null?t:""}`})]})})};L.defaultProps={};const Ue="/CodiShark/assets/PersonIconPanelBannerClient.014016bb.svg",Ke=c.div`
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
`,W=n=>{const t=m().signIn.PanelBannerClient;return e(Ke,{className:"PanelBannerClient",children:o("div",{className:"PanelBannerClient__container--component",children:[e("div",{className:"PanelBannerClient__container--image",children:e("img",{className:"PanelBannerClient__image",src:Ue,alt:"personIcon"})}),o("div",{className:"PanelBannerClient__container",children:[e("h1",{className:"PanelBannerClient__title",children:t.title}),o("div",{className:"PanelBannerClient__section",children:[e("p",{children:t.paragraph1}),e("p",{children:t.paragraph2}),e("p",{children:t.paragraph3})]})]})]})})};W.defaultProps={};const Ye=c.div`
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
`,O=n=>{const{title:t,children:a}=n;return o(Ye,{className:"SummaryCard",children:[e("h2",{className:"SummaryCard__title",children:t}),e("div",{className:"SummaryCard__subtitle",children:a})]})};O.defaultProps={};const I=n=>{const{content:t,isDate:a}=n,i=m().global.table.TableDebtUser.TableRows,r=()=>a?i.deadline:i.amount,l=()=>a?t:`S/. ${t!=null?t:""}`,s=()=>a?"DebtTable__text--date":"DebtTable__text--title";return e(w,{className:"DebtTable",children:e(O,{title:r(),children:e("h3",{className:s(),children:l()})})})};I.defaultProps={isDate:!1};const Le=n=>{const{price:t,discount:a}=n,i=m().global.table.TableDebtUser.TableRows;return e(w,{className:"DebtTable",children:e(O,{title:i.discount,children:o("div",{className:"DebtTable__container--middle",children:[e("h3",{className:"DebtTable__text--title DebtTable__text--color",children:`S/. ${t!=null?t:""}`}),e("div",{children:e("span",{className:"DebtTable__component--discount",children:` - ${a!=null?a:""} %`})})]})})})},We=n=>{const{expand:t}=n,a=m().global.table.TableDebtUser.TableRows,[i,r]=f.exports.useState(t),l=()=>i?e(re,{}):e(oe,{});return e(w,{className:"DebtTable__component--button","data-tag":"allowRowEvents",onClick:()=>r(!i),children:o("div",{"data-tag":"allowRowEvents",className:"DebtTable__container--button-content",children:[a.buttonExpand.toLocaleUpperCase(),e("div",{className:"DebtTable__container--icon",children:l()})]})})},S=()=>e(w,{className:"DebtTable__container--divider"}),{BREAKPOINTS:M}=h,Ve=[{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:n=>e(I,{content:n==null?void 0:n.amount_cancellation})},{center:!0,maxWidth:"0.01rem",minWidth:"0.01rem",hide:M.desktop,cell:()=>e(S,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:n=>e(Le,{price:n==null?void 0:n.amount_dscto_cancellation,discount:n==null?void 0:n.pct_dscto_cancellation})},{center:!0,minWidth:"0.01rem",maxWidth:"0.01rem",hide:M.desktop,cell:()=>e(S,{})},{wrap:!0,sortable:!0,ignoreRowClick:!0,minWidth:"16rem",maxWidth:"16rem",cell:n=>e(I,{content:y(n==null?void 0:n.date_last_contact).format("DD / MM / YYYY"),isDate:!0})},{right:!0,ignoreRowClick:!0,cell:n=>{var t;return e(We,{expand:(t=n==null?void 0:n.defaultExpanded)!=null?t:!1})}}],{BREAKPOINTS:B}=h,He=c.div`
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

      @media screen and (min-width: ${B.tablet}px) {
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

      @media screen and (min-width: ${B.wide}px) {
        display: block;
      }
    }
  }
`,V=n=>{const t=m().signIn.ClientContainer,{data:a,isLoading:i}=le(),{data:r,total_debts:l}=a!=null?a:{};return r&&(r[0].defaultExpanded=!0),e(te,{children:o(He,{className:"ClientContainer",children:[o("div",{className:"ClientContainer__section1",children:[e(W,{}),o("div",{className:"ClientContainer__section2",children:[e(Y,{}),e(L,{total_debts:l})]}),e("h2",{className:"ClientContainer__title",children:t.title}),e(K,{data:r!=null?r:[],columns:Ve,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:A,expandableRowExpanded:s=>s.defaultExpanded,progressPending:i})]}),o("div",{className:"ClientContainer__section3",children:[e(z,{}),e(D,{})]})]})})};V.defaultProps={};const rt=V;export{rt as default};
