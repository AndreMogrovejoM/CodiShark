import styled from "styled-components";

import { NoDataComponentStyledProps as Props } from "./NoDataComponent.types";

const NoDataComponentStyled = styled.div<Props>`
  .NoDataComponent {
    &__component {
      padding: 1.6rem 0;
    }

    &__title {
      font-weight: 540;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`;

export default NoDataComponentStyled;
