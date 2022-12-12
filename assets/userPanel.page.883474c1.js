import{B as h}from"./Button.4033bab2.js";import{R as o,a as L,S as k,P as C}from"./PaymentTable.helpers.936fc0ed.js";import{u as V,L as R}from"./Layout.container.dd4d0146.js";import{u,g as $}from"./i18n.hooks.9b49f881.js";import{f as _}from"./file-download.9541e5f9.js";import{s as x,C as D,j as r,a as e,ag as I,r as g}from"./index.5722ca59.js";import{d as T,e as E,f as S}from"./administrator.service.hooks.81b5ee0e.js";import"./Table.4d8c79b6.js";import"./validations.utils.0ba59366.js";import"./common.utils.834bf330.js";import"./auth.service.hooks.0eb91883.js";import"./useQuery.d44fefcf.js";const j="/CodiShark/assets/usersIcon.6275cb21.svg",{BREAKPOINTS:z}=D,A=x.div`
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

          @media screen and (min-width: ${z.desktop}px) {
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
`,U=a=>{const{id:t}=a,s=u().components.UserDetails,c=()=>e("div",{className:"UserDetails__component--details",children:r("div",{className:"UserDetails__component--details-content",children:[e("img",{src:j,alt:s.alt,className:"UserDetails__container--image"}),e("p",{className:"UserDetails__text--paragraph",children:s.paragraphDetails})]})}),p=()=>r("div",{className:"UserDetails__component--details UserDetails__component--details-component UserDetails__component--details-user",children:[r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.name,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Armando Enrique"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.lastName,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Guerra Flores"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.documentType,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"DNI"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.documentNumber,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"45745530"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.birthDate,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"24/09/1974"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.gender,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Masculino"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.district,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Los Olivos"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.address,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"Av. Mariano Pastor 157"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.email,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"armango.guerra@gmail.com"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.phone,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"245 2154"})]}),r("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[s.mobile,e("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:"900 521 254"})]})]});return r(A,{className:"UserDetails",children:[e("h2",{className:"UserDetails__text--subtitle UserDetails__container--separate",children:s.titleDetails}),t?p():c()]})};U.defaultProps={};const n=$().global.table.TablePaymentUser.TableHeader2,B=[{name:n.name,selector:a=>{var t;return(t=a.first_name)!=null?t:""},sortable:!0,ignoreRowClick:!0,cell:a=>e(o,{content:`${a.first_name} ${a.last_name}`,bold:!0})},{name:n.capitalDebt,selector:a=>{var t;return(t=a.capital_debt)!=null?t:""},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(o,{content:(t=a.capital_debt)!=null?t:""})}},{name:n.interests,selector:a=>{var t;return(t=a.interests)!=null?t:0},wrap:!0,sortable:!0,ignoreRowClick:!0,cell:a=>{var t;return e(o,{content:(t=a.interests)!=null?t:0})}},{name:n.bills,selector:a=>{var t;return(t=a.bills)!=null?t:""},ignoreRowClick:!0,cell:a=>{var t;return e(o,{content:(t=a.bills)!=null?t:""})}},{name:n.punishmentDate,button:!0,ignoreRowClick:!0,cell:a=>{var t;return e(o,{content:(t=I(a.date_punishment).format("YY-MM-DD HH:mm a"))!=null?t:""})}},{name:n.action,center:!0,cell:a=>e(L,{row:a.id})}],{BREAKPOINTS:l}=D,O=x.div`
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
`,f=a=>{const{data:t,isLoading:s}=T(1,50),{data:c}=t!=null?t:{},[p,b]=g.exports.useState(0),m=u().pages.UserPayPanel,{setIsLoading:d}=V();g.exports.useEffect(()=>{d(s)},[s,d]);const y=async()=>{try{const i=await E();_(i,"report.pdf")}catch{console.log("Error at trying to print pdf")}},N=async()=>{try{const i=await S();_(i,"report.csv")}catch{console.log("Error at trying to print excel")}},P=()=>r("div",{className:"PaymentListView__container--actions PaymentListView__container--separate",children:[r("div",{className:"PaymentListView__container--button",children:[e(h,{variant:"contained",className:"PaymentListView__component--button",onClick:y,children:m.buttonPdf}),e(h,{variant:"contained",className:"PaymentListView__component--button",onClick:N,children:m.buttonExcel})]}),e(k,{})]});if(!c)return null;const v=()=>e(C,{data:c,columns:B,onRowClicked:i=>b(i==null?void 0:i.id)});return e(O,{className:"PaymentListView",children:r("div",{className:"PaymentListView__container",children:[e("div",{className:"PaymentListView__container--separate",children:e("h1",{className:"PaymentListView__text--title",children:m.title})}),r("div",{className:"PaymentListView__container--layout",children:[r("div",{className:"PaymentListView__container--table",children:[P(),v()]}),e("div",{className:"PaymentListView__container--details",children:e(U,{id:p})})]})]})})};f.defaultProps={};const w=a=>e(R,{children:e(f,{})});w.defaultProps={};const ee=w;export{ee as default};
