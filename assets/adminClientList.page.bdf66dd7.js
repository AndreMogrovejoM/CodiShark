import{P as E}from"./PaginationCustom.9957cc44.js";import{T as j}from"./Table.75a5f2ce.js";import{u as f,g as I}from"./i18n.hooks.710219a4.js";import{z as B,A as M}from"./validations.utils.3b06e1db.js";import{s as D,a,C as y,j as i,ag as A,r as b}from"./index.7494b9e3.js";import{B as C}from"./Button.1ffb1947.js";import{r as Y,S as O}from"./rightArrow.906ced7a.js";import{S as H}from"./SkeletonComponent.b3058608.js";import{f as N}from"./file-download.9541e5f9.js";import{i as F,j as K,k as q}from"./administrator.service.hooks.363c98d6.js";import{b as G}from"./common.utils.106d572f.js";import{L as Q}from"./Layout.container.b855285e.js";import"./Box.77cdc8b2.js";const U=D.div`
  .AdminClientTable {
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
`,J=t=>a(E,{...t}),v=t=>{const{data:e,columns:r,onRowClicked:p,progressPending:o}=t,{totalRows:d,setPage:l,page:c}=t,n=f().global.table.TableClientAdmin.Pagination;return a(U,{className:"AdminClientTable",children:a(j,{columns:r,data:e,paginationPerPage:B,paginationRowsPerPageOptions:M,onRowClicked:p,paginationComponent:h=>J({...h,totalRows:d,setPage:l,page:c,t:n}),progressPending:o})})};v.defaultProps={};const W="/CodiShark/assets/usersIcon.6275cb21.svg",X=t=>t==="M"?"Masculino":"Femenino",{BREAKPOINTS:Z}=y,ee=D.div`
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

          @media screen and (min-width: ${Z.desktop}px) {
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
`,P=t=>{const{data:e}=t,r=f().components.UserDetails,p=()=>a("div",{className:"UserDetails__component--details",children:i("div",{className:"UserDetails__component--details-content",children:[a("img",{src:W,alt:r.alt,className:"UserDetails__container--image"}),a("p",{className:"UserDetails__text--paragraph",children:r.paragraphDetails})]})}),o=()=>{var d,l,c,n,h,_,x;return i("div",{className:"UserDetails__component--details UserDetails__component--details-component UserDetails__component--details-user",children:[i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.name,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:`${e==null?void 0:e.first_name} ${e==null?void 0:e.second_name}`})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.lastName,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:`${e==null?void 0:e.last_name} ${e==null?void 0:e.mother_last_name}`})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.documentType,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(d=e==null?void 0:e.document_type)!=null?d:"-"})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.documentNumber,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(l=e==null?void 0:e.dni)!=null?l:"-"})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.birthDate,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:A(e==null?void 0:e.birth_date).format("DD/MM/YYYY")})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.gender,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:X(e==null?void 0:e.gender)})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.district,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(c=e==null?void 0:e.district)!=null?c:"-"})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.address,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(n=e==null?void 0:e.address)!=null?n:"-"})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.email,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(h=e==null?void 0:e.email)!=null?h:"-"})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.phone,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(_=e==null?void 0:e.phone_address_one)!=null?_:"-"})]}),i("p",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-blue",children:[r.mobile,a("span",{className:"UserDetails__text--paragraph UserDetails__text--paragraph-gray",children:(x=e==null?void 0:e.phone)!=null?x:"-"})]})]})};return i(ee,{className:"UserDetails",children:[a("h2",{className:"UserDetails__text--subtitle UserDetails__container--separate",children:r.titleDetails}),e?o():p()]})};P.defaultProps={};const u=t=>{const{content:e,bold:r=!1}=t;return a(U,{className:(o=>`AdminClientTable__container--field ${o?"AdminClientTable__container--field-bold":""}`)(r),children:e})},te=()=>a(U,{className:"AdminClientTable__container--button","data-tag":"allowRowEvents",children:a("img",{src:Y,className:"AdminClientTable__container--button-icon",alt:"Icon","data-tag":"allowRowEvents"})}),g=I().global.table.TableClientAdmin.TableHeader,ae=[{name:g.name,selector:t=>{var e;return(e=t.first_name)!=null?e:""},sortable:!0,ignoreRowClick:!0,width:"10rem",cell:t=>a(u,{content:G(`${t==null?void 0:t.first_name} ${t==null?void 0:t.last_name}`,8),bold:!0})},{name:g.dni,selector:t=>{var e;return(e=t.capital_debt)!=null?e:""},wrap:!0,sortable:!0,compact:!0,ignoreRowClick:!0,cell:t=>{var e;return a(u,{content:(e=t==null?void 0:t.dni)!=null?e:"-"})}},{name:g.email,selector:t=>{var e;return(e=t.interests)!=null?e:0},wrap:!0,sortable:!0,ignoreRowClick:!0,width:"24rem",cell:t=>{var e;return a(u,{content:(e=t==null?void 0:t.email)!=null?e:"-"})}},{name:g.phone,selector:t=>{var e;return(e=t.bills)!=null?e:""},ignoreRowClick:!0,compact:!0,cell:t=>{var e;return a(u,{content:(e=t==null?void 0:t.phone)!=null?e:"-"})}},{name:g.punishmentDate,button:!0,ignoreRowClick:!0,cell:t=>{var e;return a(u,{content:(e=A(t==null?void 0:t.date_punishment).format("YY-MM-DD HH:mm a"))!=null?e:""})}},{name:g.action,center:!0,cell:()=>a(te,{})}],{BREAKPOINTS:m}=y,re=D.div`
  .AdminClientListView {
    &__container {
      margin: auto 2.4rem;
      height: 100vh;

      @media screen and (min-width: ${m.mobile}px) {
        height: 90vh;
      }

      @media screen and (min-width: ${m.desktop}px) {
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
        @media screen and (min-width: ${m.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${m.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${m.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${m.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${m.wide}px) {
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
`,T=t=>{var w;const e=f().pages.UserPayPanel,[r,p]=b.exports.useState(0),[o,d]=b.exports.useState(""),{data:l,isLoading:c}=F(1,10*r,10,o),{pages:n}=l!=null?l:{},h=(w=n==null?void 0:n[0].totalUsers)!=null?w:0,_=n==null?void 0:n.flatMap(s=>s.data),x=s=>d(s.target.value),[L,R]=b.exports.useState(),$=async()=>{try{const s=await K();N(s,"report.pdf")}catch{console.log("Error at trying to print pdf")}},S=async()=>{try{const s=await q();N(s,"report.csv")}catch{console.log("Error at trying to print excel")}},V=()=>i("div",{className:"AdminClientListView__container--actions AdminClientListView__container--separate",children:[i("div",{className:"AdminClientListView__container--button",children:[a(C,{variant:"contained",className:"AdminClientListView__component--button",onClick:$,children:e.buttonPdf}),a(C,{variant:"contained",className:"AdminClientListView__component--button",onClick:S,children:e.buttonExcel})]}),a(O,{onChange:x})]}),z=()=>c?a(H,{variant:"rectangular",height:720,width:"100%"}):a(v,{data:_!=null?_:[],columns:ae,onRowClicked:s=>R(s),progressPending:c,totalRows:h,setPage:p,page:r});return a(re,{className:"AdminClientListView",children:i("div",{className:"AdminClientListView__container",children:[a("div",{className:"AdminClientListView__container--separate",children:a("h1",{className:"AdminClientListView__text--title",children:e.title})}),i("div",{className:"AdminClientListView__container--layout",children:[i("div",{className:"AdminClientListView__container--table",children:[V(),z()]}),a("div",{className:"AdminClientListView__container--details",children:a(P,{data:L})})]})]})})};T.defaultProps={};const k=t=>a(Q,{children:a(T,{})});k.defaultProps={};const xe=k;export{xe as default};
