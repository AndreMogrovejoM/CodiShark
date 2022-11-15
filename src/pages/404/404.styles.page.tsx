import styled from "styled-components";

import { FourZeroFourStyledProps as Props } from "./404.page.types";

const FourZeroFourStyled = styled.div<Props>`
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
`;

export default FourZeroFourStyled;
