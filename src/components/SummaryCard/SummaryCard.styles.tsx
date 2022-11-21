import styled from "styled-components";

import { SummaryCardStyledProps as Props } from "./SummaryCard.types";

const SummaryCardStyled = styled.div<Props>`
  .SummaryCard {
    &__title {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle {
      font-size: 16px;
    }
  }
`;

export default SummaryCardStyled;
