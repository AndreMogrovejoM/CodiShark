import{s as j,C as B,r as g,a as s,j as x}from"./index.a3dc70de.js";import{g as T,a as I}from"./common.utils.106d572f.js";const{BREAKPOINTS:_}=B,R=j.div`
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

        @media screen and (max-width: ${_.mobile}px) {
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

      @media screen and (max-width: ${_.mobile}px) {
        display: none;
      }

      &--bold {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        background-color: inherit;
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
`,S=m=>{const{rowsPerPage:r,onChangePage:t}=m,{totalRows:a,setPage:o,page:n,t:i}=m,u=I(a,r),f=T(u),b=(n+1)*r+1-r,c=n===0,l=(n+1)*10,d=l>=a,P=l>a?a:l,p=g.exports.useCallback(()=>{o(n),t(n-1,a)},[n,t,o,a]),C=g.exports.useCallback(()=>{o(n),t(n+1,a)},[n,t,o,a]),k=g.exports.useCallback(e=>{o(e-1),t(e,a)},[t,o,a]),v=e=>s("div",{...e,children:e==null?void 0:e.value}),w=i.legend(b,P,a),h=e=>`Pagination__text--bold ${e?"Pagination__text--disabled":""}`,y=e=>`Pagination__container--numbers ${e===n+1?"Pagination__container--numbers-activated":""}`;return s(R,{className:"Pagination",children:x("div",{className:"Pagination__container",children:[s("p",{className:"Pagination__text",children:w}),x("div",{className:"Pagination__container--pagination",children:[s("button",{className:h(c),"aria-disabled":c,onClick:p,disabled:c,children:i.back}),f.map((e,N)=>s(v,{value:e,className:y(e),onClick:()=>k(e)},N)),s("button",{className:h(d),"aria-disabled":d,onClick:C,disabled:d,children:i.next})]})]})})};S.defaultProps={};export{S as P};
