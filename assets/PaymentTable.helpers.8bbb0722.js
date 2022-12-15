import{r as d,i as p,a as u}from"./Layout.container.47df2272.js";import{u as m,g as h}from"./i18n.hooks.dcfdf754.js";import{s as i,a as e,j as g}from"./index.78f16c0f.js";var o={},_=p.exports;Object.defineProperty(o,"__esModule",{value:!0});var s=o.default=void 0,b=_(d()),f=u,y=(0,b.default)((0,f.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");s=o.default=y;const v=i.div`
  .SearchInput {
    &__container {
      background: var(--palette-greyBackgroundSearch);
      display: flex;
      align-items: center;
      padding: 0.4rem 1.2rem;
      border-radius: 0.8rem;

      &__icon {
        padding-right: 0.8rem;
        padding-left: 0.8rem;
      }
    }
    &__component {
      &--input {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.6rem;
        background: var(--palette-greyBackgroundSearch);
        border: none;
        margin-left: 0.8rem;

        &:focus {
          outline: none;
        }
      }
    }
  }
`,w=a=>{const{onChange:t}=a,r=m().global;return e(v,{className:"SearchInput ",children:g("div",{className:"SearchInput__container",children:[e(s,{}),e("input",{className:"SearchInput__component--input",type:"text",placeholder:r.inputSearch,onChange:t})]})})};w.defaultProps={};const S="/CodiShark/assets/rightArrow.7651ea18.svg",l=i.div`
  .PaymentTable {
    &__container {
      &--button {
        background-color: var(--palette-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0.08rem;

        &-icon {
          width: 1.6rem;
          height: 1.6rem;
          fill: var(--palette-white);
        }
      }

      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-whiteBackgroundTwo);

        &-bold {
          font-weight: 600;
          color: var(--palette-blue);
        }
      }

      &--chip {
        border-radius: 0.8rem;

        &-green {
          background: var(--palette-greenWeakBackground);
        }

        &-yellow {
          background: var(--palette-yellowWeakBackground);
        }
      }
    }

    &__text {
      &--chip {
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 1.2rem;
        padding: 0.4rem 1.2rem;
      }
    }
  }
`,x=a=>{const{content:t,bold:r=!1}=a;return e(l,{className:(n=>`PaymentTable__container--field ${n?"PaymentTable__container--field-bold":""}`)(r),children:t})},I=a=>{const{conditional:t}=a,r=h().global.table.TablePaymentUser.TableRows;return e(l,{className:(n=>`PaymentTable__container--chip ${n?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(t),children:e("p",{className:"PaymentTable__text--chip",children:t?r.pay:r.pending})})},C=a=>e(l,{className:"PaymentTable__container--button","data-tag":"allowRowEvents",children:e("img",{src:S,className:"PaymentTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})});export{l as P,x as R,w as S,I as a,C as b};
