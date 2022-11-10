import styled from "styled-components";

import { LastProcessCardStyledProps as Props } from "./LastProcessCard.types";

const LastProcessCardStyled = styled.div<Props>`
  width: 40rem;
  height: 32.8rem;
  background-color: var(--palette-white);
  display: flex;
  align-items: center;
  .LastProcessCard {
    &__title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.6rem;
    }

    &__subtitle {
      font-weight: 600;
      line-height: 1.6rem;
    }

    &__name {
      font-weight: 700;
      line-height: 1.6rem;
    }
  }
`;

export default LastProcessCardStyled;
