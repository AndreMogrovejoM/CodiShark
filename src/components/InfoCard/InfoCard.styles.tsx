import styled from "styled-components";

import { InfoCardStyledProps as Props } from "./InfoCard.types";

const InfoCardStyled = styled.div<Props>`
  background-color: var(--palette-white);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 49.4%;
  height: 6.4rem;
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;

  .InfoCard {
    &__title {
      font-weight: 700;
      line-height: 1.6rem;
      font-size: 1rem;
    }

    &__subtitle {
      font-weight: 600;
      color: var(--palette-primary);
      line-height: 2.4rem;
      font-size: 2rem;
    }
  }
`;

export default InfoCardStyled;
