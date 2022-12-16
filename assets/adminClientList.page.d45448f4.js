import{B as P}from"./Button.b5911129.js";import{P as E,R as f,b as O,S as M}from"./PaymentTable.helpers.c701e1d7.js";import{S as Y}from"./SkeletonComponent.14885b89.js";import{u as y,g as K}from"./i18n.hooks.7225a4b8.js";import{f as v}from"./file-download.9541e5f9.js";import{s as N,C as w,r as D,a,j as r,ag as A}from"./index.222ffc61.js";import{f as H,g as F,h as G}from"./administrator.service.hooks.d92d2c4f.js";import{T as q}from"./Table.6c4ab444.js";import{p as Q,c as J}from"./validations.utils.dd735354.js";import{g as W,a as X,b as Z}from"./common.utils.cf38e105.js";import{L as ee}from"./Layout.container.764bc839.js";import"./auth.service.hooks.ec00bf56.js";const{BREAKPOINTS:k}=w,te=N.div`
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

        @media screen and (max-width: ${k.mobile}px) {
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

      @media screen and (max-width: ${k.mobile}px) {
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
`,L=t=>{const{rowsPerPage:e,rowCount:n,onChangeRowsPerPage:m}=t,{currentPage:s,onChangePage:l}=t,o=y().global.table.TablePaymentUser.Pagination,p=X(n,e),g=W(p),h=s*e-e+1,d=s===1,b=s===p,U=D.exports.useCallback(()=>l(s-1),[s,l]),c=D.exports.useCallback(()=>l(s+1),[s,l]),V=D.exports.useCallback(i=>l(i),[l]),B=i=>a("div",{...i,children:i==null?void 0:i.value}),I=o.legend(h,n,n),C=i=>`Pagination__text--bold ${i?"Pagination__text--disabled":""}`,j=i=>`Pagination__container--numbers ${i===s?"Pagination__container--numbers-activated":""}`;return a(te,{className:"Pagination",children:r("div",{className:"Pagination__container",children:[a("p",{className:"Pagination__text",children:I}),r("div",{className:"Pagination__container--pagination",children:[a("button",{className:C(d),"aria-disabled":d,onClick:U,disabled:d,children:o.back}),g.map((i,z)=>a(B,{value:i,className:j(i),onClick:()=>V(i)},z)),a("button",{className:C(b),"aria-disabled":b,onClick:c,disabled:b,children:o.next})]})]})})};L.defaultProps={};const ae=t=>a(L,{...t}),T=t=>{const{data:e,columns:n,onRowClicked:m,progressPending:s}=t;return a(E,{className:"PaymentTable",children:a(q,{columns:n,data:e,paginationPerPage:Q,paginationRowsPerPageOptions:J,onRowClicked:m,paginationComponent:ae,progressPending:s})})};T.defaultProps={};const ne="/assets/usersIcon.6275cb21.svg",re=t=>t==="M"?"Masculino":"Femenino",{BREAKPOINTS:se}=w,ie=N.div`
  .UserDetails {
    &__container {
      &--separate {
        margin-bottom: 1.6rem;
      }

      &--image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-bottom: 1.2rem;
      }
    }

    &__component {
      &--details {
        border-radius: 0.8rem;
        height: 100%;
        background-color: var(--palette-white);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 57rem;

        &-component {
          flex-direction: column;
          justify-content: start;
          align-items: start;
          padding-left: 3.2rem;
          padding-top: 2rem;
          gap: 0.8rem;
        }

        &-user {
          min-height: auto;
          padding-bottom: 2rem;

          @media screen and (min-width: ${se.desktop}px) {
            min-height: 57rem;
          }
        }
      }

      &--button {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        border-radius: 0.8rem;
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: unset;
      }

      &--subtitle {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--paragraph {
        font-style: normal;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &-blue {
          font-weight: 700;
          color: var(--palette-blue);
        }

        &-gray {
          font-weight: 600;
          color: var(--palette-grayTextBold);
          display: block;
        }
      }
    }
  }
`,$=t=>{const{data:e}=t,n=y().components.UserDetails,m=()=>a("div",{className:"UserDetails__component--details",children:r("div",{className:"UserDetails__component--details-content",children:[a("img",{src:ne,alt:n.alt,className:"UserDetails__container--image"}),a("p",{className:"UserDetails__text--paragraph",children:n.paragraphDetails})]})}),s=()=>{var l,o,p,g,x,h,d;return r("div",{className:"UserDetails__component--details UserDetails__component--details-component UserDetails__component--details-user",children:[r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.name,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:`${e==null?void 0:e.first_name} ${e==null?void 0:e.second_name}`})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.lastName,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:`${e==null?void 0:e.last_name} ${e==null?void 0:e.mother_last_name}`})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.documentType,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(l=e==null?void 0:e.document_type)!=null?l:"-"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.documentNumber,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(o=e==null?void 0:e.dni)!=null?o:"-"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.birthDate,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:A(e==null?void 0:e.birth_date).format("DD/MM/YYYY")})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.gender,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:re(e==null?void 0:e.gender)})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.district,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(p=e==null?void 0:e.district)!=null?p:"-"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.address,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(g=e==null?void 0:e.address)!=null?g:"-"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.email,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(x=e==null?void 0:e.email)!=null?x:"-"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.phone,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(h=e==null?void 0:e.phone_address_one)!=null?h:"-"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[n.mobile,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(d=e==null?void 0:e.phone)!=null?d:"-"})]})]})};return r(ie,{className:"UserDetails",children:[a("h2",{className:"UserDetails__text--subtitle UserDetails__container--separate",children:n.titleDetails}),e?s():m()]})};$.defaultProps={};const _=K().global.table.TablePaymentUser.TableHeader2,le=[{name:_.name,selector:t=>{var e;return(e=t.first_name)!=null?e:""},sortable:!0,ignoreRowClick:!0,width:"10rem",cell:t=>a(f,{content:Z(`${t==null?void 0:t.first_name} ${t==null?void 0:t.last_name}`,8),bold:!0})},{name:_.dni,selector:t=>{var e;return(e=t.capital_debt)!=null?e:""},wrap:!0,sortable:!0,compact:!0,ignoreRowClick:!0,cell:t=>{var e;return a(f,{content:(e=t==null?void 0:t.dni)!=null?e:"-"})}},{name:_.email,selector:t=>{var e;return(e=t.interests)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,width:"24rem",cell:t=>{var e;return a(f,{content:(e=t==null?void 0:t.email)!=null?e:"-"})}},{name:_.phone,selector:t=>{var e;return(e=t.bills)!=null?e:""},ignoreRowClick:!0,compact:!0,cell:t=>{var e;return a(f,{content:(e=t==null?void 0:t.phone)!=null?e:"-"})}},{name:_.punishmentDate,button:!0,ignoreRowClick:!0,cell:t=>{var e;return a(f,{content:(e=A(t==null?void 0:t.date_punishment).format("YY-MM-DD HH:mm a"))!=null?e:""})}},{name:_.action,center:!0,cell:()=>a(O,{})}],{BREAKPOINTS:u}=w,oe=N.div`
  .AdminClientListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${u.desktop}px) {
        margin: auto;
      }

      &--actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.6rem;
      }

      &--button {
        display: flex;
        gap: 0.8rem;
      }

      &--separate {
        margin-bottom: 1.6rem;
      }

      &--layout {
        display: flex;
        gap: 1.6rem;
        flex-flow: row wrap;
        @media screen and (min-width: ${u.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${u.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${u.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${u.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${u.wide}px) {
          width: 70%;
        }
      }
    }

    &__component {
      &--button {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        border-radius: 0.8rem;
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: unset;
      }

      &--subtitle {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--paragraph {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
`,R=t=>{const[e,n]=D.exports.useState(""),{data:m,isLoading:s}=H(1,50,e),{data:l}=m!=null?m:{},o=y().pages.UserPayPanel,p=c=>n(c.target.value),[g,x]=D.exports.useState(),h=async()=>{try{const c=await F();v(c,"report.pdf")}catch{console.log("Error at trying to print pdf")}},d=async()=>{try{const c=await G();v(c,"report.csv")}catch{console.log("Error at trying to print excel")}},b=()=>r("div",{className:"AdminClientListView__container--actions AdminClientListView__container--separate",children:[r("div",{className:"AdminClientListView__container--button",children:[a(P,{variant:"contained",className:"AdminClientListView__component--button",onClick:h,children:o.buttonPdf}),a(P,{variant:"contained",className:"AdminClientListView__component--button",onClick:d,children:o.buttonExcel})]}),a(M,{onChange:p})]}),U=()=>s?a(Y,{variant:"rectangular",height:720,width:"100%"}):a(T,{data:l!=null?l:[],columns:le,onRowClicked:c=>x(c),progressPending:s});return a(oe,{className:"AdminClientListView",children:r("div",{className:"AdminClientListView__container",children:[a("div",{className:"AdminClientListView__container--separate",children:a("h1",{className:"AdminClientListView__text--title",children:o.title})}),r("div",{className:"AdminClientListView__container--layout",children:[r("div",{className:"AdminClientListView__container--table",children:[b(),U()]}),a("div",{className:"AdminClientListView__container--details",children:a($,{data:g})})]})]})})};R.defaultProps={};const S=t=>a(ee,{children:a(R,{})});S.defaultProps={};const Ue=S;export{Ue as default};
