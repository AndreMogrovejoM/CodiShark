import{r as i,i as s,a as c}from"./Layout.container.43b54f64.js";import{u}from"./i18n.hooks.45a62a30.js";import{s as l,a as e,j as d}from"./index.b54eacfb.js";var r={},p=s.exports;Object.defineProperty(r,"__esModule",{value:!0});var a=r.default=void 0,h=p(i()),m=c,g=(0,h.default)((0,m.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");a=r.default=g;const f=l.div`
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
`,S=t=>{const{onChange:n}=t,o=u().global;return e(f,{className:"SearchInput ",children:d("div",{className:"SearchInput__container",children:[e(a,{}),e("input",{className:"SearchInput__component--input",type:"text",placeholder:o.inputSearch,onChange:n})]})})};S.defaultProps={};const x="/CodiShark/assets/rightArrow.7651ea18.svg";export{S,x as r};
