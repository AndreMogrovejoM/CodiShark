import styled from "styled-components";

import { FourZeroFourStyledProps as Props } from "./404.page.types";

const FourZeroFourStyled = styled.div<Props>`
  max-width: var(--sizes-page-maxWidth);
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .FourZeroFour {
    &__header {
    }

    &__main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    &__icon {
      stroke: var(--palette-primary);
    }

    &__footer {
    }
  }
`;

export default FourZeroFourStyled;
