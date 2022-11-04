import { css } from "styled-components";

const typography = css`
  body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    margin: 0;
  }

  .text {
    color: var(--palette-black);
    font-size: 1.6rem;
    line-height: 2.4rem;

    &--bold {
      font-weight: 500;
    }

    &--link {
      color: var(--palette-primary);
      font-weight: 500;
    }

    &--error {
      color: var(--palette-error);
      font-size: 1.4rem;
    }

    &--link-secondary {
      font-size: 1.2rem;
    }

    &--white {
      color: var(--palette-white);
    }

    &--gray {
      color: var(--palette-gray-s0-l68);
      opacity: 0.6;
    }
  }

  .fs {
    &--12 {
      font-size: 1.2rem;
    }

    &--14 {
      font-size: 1.4rem;
    }

    &--20 {
      font-size: 2rem;
    }

    &--24 {
      font-size: 2.4rem;
    }

    &--30 {
      font-size: 3rem;
    }
  }

  .fw {
    &--400 {
      font-weight: 400;
    }

    &--500 {
      font-weight: 500;
    }
  }

  h1 {
    color: var(--palette-black);
    font-weight: 500;
    flex: 1;
    font-size: 2.4rem;
    text-transform: capitalize;
  }
`;

export default typography;
