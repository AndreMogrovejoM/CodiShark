import{l as i}from"./logoKonecta.dff35306.js";import{B as e}from"./Button.b7b90e42.js";import{s as t,u as s,j as a,a as o}from"./index.4d215d3b.js";import"./i18n.hooks.b18bfc08.js";const n=t.div`
  max-width: var(--sizes-page-maxWidth);
  min-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .FourZeroFour {
    &__header {
    }

    &__main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 88%;
    }

    &__icon {
      stroke: var(--palette-primary);
    }

    &__footer {
    }
  }
`,l=c=>{const r=s();return a(n,{className:"FourZeroFour",children:[o("header",{className:"FourZeroFour__header"}),a("main",{className:"FourZeroFour__main",children:[o("img",{src:i,alt:"logoKonecta",className:"FourZeroFour__icon"}),o(e,{onClick:()=>r("/inicio"),children:"Ir a registro usuario"}),o(e,{onClick:()=>r("/admin"),children:"Ir a registro admin"})]}),o("footer",{className:"FourZeroFour__footer"})]})};l.defaultProps={};export{l as default};
