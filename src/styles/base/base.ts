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

  .swal2-container {
    z-index: 10000 !important;
  }
  .swal2-popup {
    background: var(--palette-white) !important;
    border-color: var(--palette-primary) !important ;
    border-radius: 1.6rem;
    box-shadow: 0.1rem 0.1rem 0.4rem var(--palette-darkShadow);
  }
  .swal2-icon.swal2-error {
    border-color: var(--palette-error) !important ;
    color: var(--palette-error) !important;
  }

  .swal2-icon.swal2-error [class^="swal2-x-mark-line"] {
    background-color: var(--palette-error) !important ;
  }

  .swal2-actions {
    margin: 4rem auto 0 !important;
  }

  .swal2-styled.swal2-confirm {
    background-color: var(--palette-primary) !important;
    padding: 0.8rem 3.2rem;
    width: auto !important;
    border-radius: 0.8rem !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.4rem;
    border: none;
    box-shadow: 0.1rem 0.1rem 0.4rem var(--palette-darkShadow);
  }

  .swal2-styled.swal2-deny {
    background-color: var(--palette-error) !important;
    padding: 0.8rem 3.2rem;
    width: auto !important;
    border-radius: 0.8rem !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.4rem;
    border: none;
    box-shadow: 0.1rem 0.1rem 0.4rem var(--palette-darkShadow);
  }
  .swal2-container.swal2-backdrop-show,
  .swal2-container.swal2-noanimation {
    background-color: var(--palette-primary01) !important;
  }

  /* Styles a page component that consists of a full page table */
`;

export default base;
