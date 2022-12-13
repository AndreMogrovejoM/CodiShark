import{r as B,i as j,a as z}from"./Layout.container.86f5a903.js";import{u as y,g as $}from"./i18n.hooks.10c02bd4.js";import{s as b,a as e,j as p,C as A,r as u}from"./index.62a3d31d.js";import{T as O}from"./Table.621dcc2e.js";import{p as q,c as E}from"./validations.utils.a31d4e1e.js";import{g as L,a as D}from"./common.utils.834bf330.js";var h={},M=j.exports;Object.defineProperty(h,"__esModule",{value:!0});var v=h.default=void 0,U=M(B()),W=z,G=(0,U.default)((0,W.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");v=h.default=G;const H=b.div`
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
`,K=n=>{const r=y().global;return e(H,{className:"SearchInput ",children:p("div",{className:"SearchInput__container",children:[e(v,{}),e("input",{className:"SearchInput__component--input",type:"text",placeholder:r.inputSearch})]})})};K.defaultProps={};const{BREAKPOINTS:P}=A,V=b.div`
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

        @media screen and (max-width: ${P.mobile}px) {
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

      @media screen and (max-width: ${P.mobile}px) {
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
`,w=n=>{const{rowsPerPage:r,rowCount:o,onChangeRowsPerPage:s}=n,{currentPage:t,onChangePage:i}=n,l=y().global.table.TablePaymentUser.Pagination,d=D(o,r),x=L(d),_=t*r-r+1,g=t===1,m=t===d,k=u.exports.useCallback(()=>i(t-1),[t,i]),C=u.exports.useCallback(()=>i(t+1),[t,i]),T=u.exports.useCallback(a=>i(a),[i]),S=a=>e("div",{...a,children:a==null?void 0:a.value}),N=l.legend(_,o,o),f=a=>`Pagination__text--bold ${a?"Pagination__text--disabled":""}`,I=a=>`Pagination__container--numbers ${a===t?"Pagination__container--numbers-activated":""}`;return e(V,{className:"Pagination",children:p("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:N}),p("div",{className:"Pagination__container--pagination",children:[e("button",{className:f(g),"aria-disabled":g,onClick:k,disabled:g,children:l.back}),x.map((a,R)=>e(S,{value:a,className:I(a),onClick:()=>T(a)},R)),e("button",{className:f(m),"aria-disabled":m,onClick:C,disabled:m,children:l.next})]})]})})};w.defaultProps={};const c=b.div`
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
`,F=n=>e(w,{...n}),J=n=>{const{data:r,columns:o,onRowClicked:s}=n;return e(c,{className:"PaymentTable",children:e(O,{columns:o,data:r,paginationPerPage:q,paginationRowsPerPageOptions:E,onRowClicked:s,paginationComponent:F})})};J.defaultProps={};const Q="/CodiShark/assets/rightArrow.7651ea18.svg",re=n=>{const{content:r,bold:o=!1}=n;return e(c,{className:(t=>`PaymentTable__container--field ${t?"PaymentTable__container--field-bold":""}`)(o),children:r})},oe=n=>{const{conditional:r}=n,o=$().global.table.TablePaymentUser.TableRows;return e(c,{className:(t=>`PaymentTable__container--chip ${t?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(r),children:e("p",{className:"PaymentTable__text--chip",children:r?o.pay:o.pending})})},ie=n=>e(c,{className:"PaymentTable__container--button","data-tag":"allowRowEvents",children:e("img",{src:Q,className:"PaymentTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})});export{J as P,re as R,K as S,ie as a,oe as b};
