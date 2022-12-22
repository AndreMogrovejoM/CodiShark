import{r as c,i as d,a as u}from"./Layout.container.9056670d.js";import{u as m}from"./i18n.hooks.95fc6568.js";import{s as o,a as e,j as p}from"./index.9af5e57e.js";var n={},h=d.exports;Object.defineProperty(n,"__esModule",{value:!0});var i=n.default=void 0,g=h(c()),f=u,_=(0,g.default)((0,f.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");i=n.default=_;const v=o.div`
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
`,b=t=>{const{onChange:a}=t,r=m().global;return e(v,{className:"SearchInput ",children:p("div",{className:"SearchInput__container",children:[e(i,{}),e("input",{className:"SearchInput__component--input",type:"text",placeholder:r.inputSearch,onChange:a})]})})};b.defaultProps={};const S="/CodiShark/assets/rightArrow.7651ea18.svg",l=o.div`
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
`,P=t=>{const{content:a,bold:r=!1}=t;return e(l,{className:(s=>`PaymentTable__container--field ${s?"PaymentTable__container--field-bold":""}`)(r),children:a})},R=()=>e(l,{className:"PaymentTable__container--button","data-tag":"allowRowEvents",children:e("img",{src:S,className:"PaymentTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})});export{l as P,R,b as S,P as a};
