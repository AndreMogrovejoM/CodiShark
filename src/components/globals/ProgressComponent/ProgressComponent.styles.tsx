import styled from "styled-components";

import { ProgressComponentStyledProps as Props } from "./ProgressComponent.types";

const ProgressComponentStyled = styled.div<Props>`
  .ProgressComponent {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      border-radius: 1.6rem;
      align-items: center;
    }

    &__paragraph {
      font-weight: 700;
      font-size: 1.6rem;
    }
  }
`;

export default ProgressComponentStyled;
