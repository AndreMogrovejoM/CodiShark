import{B as m}from"./Button.d1000baa.js";import{R as p,a as P,S as v,P as L}from"./PaymentTable.helpers.291e0950.js";import{S as k}from"./SkeletonComponent.1458dcd8.js";import{u as h,g as C}from"./i18n.hooks.9f88aeab.js";import{f as d}from"./file-download.9541e5f9.js";import{s as _,C as g,j as r,a as e,ag as V,r as R}from"./index.31b587f7.js";import{d as S,e as $,f as T}from"./administrator.service.hooks.1d394049.js";import{L as I}from"./Layout.container.8472f269.js";import"./Table.ac9292d3.js";import"./validations.utils.e668c228.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.48119834.js";import"./useQuery.412ed980.js";const E="/CodiShark/assets/usersIcon.6275cb21.svg",{BREAKPOINTS:j}=g,z=_.div`
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

          @media screen and (min-width: ${j.desktop}px) {
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
`,u=a=>{const{id:t}=a,s=h().components.UserDetails,c=()=>e("div",{className:"UserDetails__component--details",children:r("div",{className:"UserDetails__component--details-content",children:[e("img",{src:E,alt:s.alt,className:"UserDetails__container--image"}),e("p",{className:"UserDetails__text--paragraph",children:s.paragraphDetails})]})}),o=()=>r("div",{className:"UserDetails__component--details UserDetails__component--details-component UserDetails__component--details-user",children:[r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.name,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Armando Enrique"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.lastName,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Guerra Flores"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.documentType,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"DNI"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.documentNumber,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"45745530"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.birthDate,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"24/09/1974"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.gender,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Masculino"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.district,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Los Olivos"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.address,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Av. Mariano Pastor 157"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.email,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"armango.guerra@gmail.com"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.phone,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"245 2154"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.mobile,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"900 521 254"})]})]});return r(z,{className:"UserDetails",children:[e("h2",{className:"UserDetails__text--subtitle UserDetails__container--separate",children:s.titleDetails}),t?o():c()]})};u.defaultProps={};const n=C().global.table.TablePaymentUser.TableHeader2,A=[{name:n.name,selector:a=>{var t;return(t=a.first_name)!=null?t:""},sortable:!0,ignoreRowClick:!0,cell:a=>e(p,{content:`${a.first_name} ${a.last_name}`,bold:!0})},{name:n.capitalDebt,selector:a=>{var t;return(t=a.capital_debt)!=null?t:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(p,{content:(t=a.capital_debt)!=null?t:""})}},{name:n.interests,selector:a=>{var t;return(t=a.interests)!=null?t:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(p,{content:(t=a.interests)!=null?t:0})}},{name:n.bills,selector:a=>{var t;return(t=a.bills)!=null?t:""},ignoreRowClick:!0,cell:a=>{var t;return e(p,{content:(t=a.bills)!=null?t:""})}},{name:n.punishmentDate,button:!0,ignoreRowClick:!0,cell:a=>{var t;return e(p,{content:(t=V(a.date_punishment).format("YY-MM-DD HH:mm a"))!=null?t:""})}},{name:n.action,center:!0,cell:a=>e(P,{row:a.id})}],{BREAKPOINTS:l}=g,B=_.div`
  .PaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${l.desktop}px) {
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
        @media screen and (min-width: ${l.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${l.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${l.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${l.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${l.wide}px) {
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
`,x=a=>{const{data:t,isLoading:s}=S(1,50),{data:c}=t!=null?t:{},o=h().pages.UserPayPanel,[U,w]=R.exports.useState(0),f=async()=>{try{const i=await $();d(i,"report.pdf")}catch{console.log("Error at trying to print pdf")}},b=async()=>{try{const i=await T();d(i,"report.csv")}catch{console.log("Error at trying to print excel")}},y=()=>r("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[r("div",{className:"PaymentListView__container--button",children:[e(m,{variant:"contained",className:"PaymentListView__component--button",onClick:f,children:o.buttonPdf}),e(m,{variant:"contained",className:"PaymentListView__component--button",onClick:b,children:o.buttonExcel})]}),e(v,{})]});if(!c)return null;const N=()=>s?e(k,{variant:"rectangular",height:720,width:"100%"}):e(L,{data:c,columns:A,onRowClicked:i=>w(i==null?void 0:i.id),progressPending:s});return e(B,{className:"PaymentListView",children:r("div",{className:"PaymentListView__container",children:[e("div",{className:"PaymentListView__container--separate",children:e("h1",{className:"PaymentListView__text--title",children:o.title})}),r("div",{className:"PaymentListView__container--layout",children:[r("div",{className:"PaymentListView__container--table",children:[y(),N()]}),e("div",{className:"PaymentListView__container--details",children:e(u,{id:U})})]})]})})};x.defaultProps={};const D=a=>e(I,{children:e(x,{})});D.defaultProps={};const ee=D;export{ee as default};
