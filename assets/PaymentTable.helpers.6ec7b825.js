import{r as I,i as j,a as U}from"./Layout.container.2fe0abc4.js";import{u as y,g as O}from"./i18n.hooks.65690834.js";import{s as p,a as e,j as b,r as m}from"./index.9c85feef.js";import{T as z}from"./Table.0abc923a.js";import{p as $,c as A}from"./validations.utils.8086c3d2.js";import{g as q,a as D}from"./common.utils.834bf330.js";import{C as E}from"./constants.03d913e0.js";var h={},L=j.exports;Object.defineProperty(h,"__esModule",{value:!0});var v=h.default=void 0,M=L(I()),W=U,G=(0,M.default)((0,W.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");v=h.default=G;const H=p.div`
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
`,K=a=>{const t=y().global;return e(H,{className:"SearchInput ",children:b("div",{className:"SearchInput__container",children:[e(v,{}),e("input",{className:"SearchInput__component--input",type:"text",placeholder:t.inputSearch})]})})};K.defaultProps={};var re=function(a,t,o,s){var n=typeof s<"u"?[s,a]:[a],l=new Blob(n,{type:o||"application/octet-stream"});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(l,t);else{var c=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(l):window.webkitURL.createObjectURL(l),i=document.createElement("a");i.style.display="none",i.href=c,i.setAttribute("download",t),typeof i.download>"u"&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),setTimeout(function(){document.body.removeChild(i),window.URL.revokeObjectURL(c)},200)}};const{BREAKPOINTS:_}=E,V=p.div`
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
`,P=a=>{const{rowsPerPage:t,rowCount:o,onChangeRowsPerPage:s}=a,{currentPage:n,onChangePage:l}=a,c=y().global.table.TablePaymentUser.Pagination,i=D(o,t),x=q(i),f=n*t-t+1,u=n===1,g=n===i,C=m.exports.useCallback(()=>l(n-1),[n,l]),k=m.exports.useCallback(()=>l(n+1),[n,l]),S=m.exports.useCallback(r=>l(r),[l]),T=r=>e("div",{...r,children:r==null?void 0:r.value}),R=c.legend(f,o,o),w=r=>`Pagination__text--bold ${r?"Pagination__text--disabled":""}`,N=r=>`Pagination__container--numbers ${r===n?"Pagination__container--numbers-activated":""}`;return e(V,{className:"Pagination",children:b("div",{className:"Pagination__container",children:[e("p",{className:"Pagination__text",children:R}),b("div",{className:"Pagination__container--pagination",children:[e("button",{className:w(u),"aria-disabled":u,onClick:C,disabled:u,children:c.back}),x.map((r,B)=>e(T,{value:r,className:N(r),onClick:()=>S(r)},B)),e("button",{className:w(g),"aria-disabled":g,onClick:k,disabled:g,children:c.next})]})]})})};P.defaultProps={};const d=p.div`
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
`,F=a=>e(P,{...a}),J=a=>{const{data:t,columns:o,onRowClicked:s}=a;return e(d,{className:"PaymentTable",children:e(z,{columns:o,data:t,paginationPerPage:$,paginationRowsPerPageOptions:A,onRowClicked:s,paginationComponent:F})})};J.defaultProps={};const Q="/CodiShark/assets/rightArrow.7651ea18.svg",ie=a=>{const{content:t,bold:o=!1}=a;return e(d,{className:(n=>`PaymentTable__container--field ${n?"PaymentTable__container--field-bold":""}`)(o),children:t})},le=a=>{const{conditional:t}=a,o=O().global.table.TablePaymentUser.TableRows;return e(d,{className:(n=>`PaymentTable__container--chip ${n?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(t),children:e("p",{className:"PaymentTable__text--chip",children:t?o.pay:o.pending})})},se=a=>e(d,{className:"PaymentTable__container--button","data-tag":"allowRowEvents",children:e("img",{src:Q,className:"PaymentTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})});export{J as P,ie as R,K as S,se as a,le as b,re as f};
