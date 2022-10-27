import { css } from "styled-components";

const base = css`
  /* Normalization */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    color-scheme: light dark;
  }

  :focus {
    outline: 0.1rem solid var(--palette-primary);
  }

  html {
    height: 100%;
    width: 100%;
    font-size: 62.5%; //16px default to 10px
    box-sizing: border-box;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  body {
    background-color: var(--palette-secondary);
    font-family: system-ui;
    text-rendering: optimizeSpeed;
    line-height: 1.2;
  }

  body,
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  *::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: var(--palette-grey8);
  }

  #root > * {
    min-height: var(--sizes-page-minHeight);
    min-width: var(--sizes-page-minWidth);
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration-skip-ink: auto;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .aa-Input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Normalization END */

  /* Styles a page component that consists of a full page table */
  .TablePage {
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: var(--sizes-page-columns);

    & > header {
      grid-column: content-start / content-end;
    }

    & > main {
      display: grid;
      grid-template-columns: var(--sizes-page-columns);
      grid-column: content-start / content-end;
    }
  }

  .ant-modal-title {
    font-size: 2rem;
    font-weight: 500;
  }

  .ant-modal-body {
    font-size: 1.4rem;
    font-weight: 500;

    & > div {
      display: flex;
      padding: 1.6rem 0;
      gap: 0.4rem;

      & > p {
        font-weight: 400;
      }
    }
  }
`;

export default base;
