import{l as i}from"./logoKonecta.45ccee3a.js";import{B as e}from"./Button.e61c5d17.js";import{s as t,u as s,j as a,a as o}from"./index.b54eacfb.js";import"./i18n.hooks.45a62a30.js";const n=t.div`
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
