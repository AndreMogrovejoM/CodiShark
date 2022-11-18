import styled from "styled-components";

import { InfoCardClientStyledProps as Props } from "./InfoCardClient.types";

const InfoCardClientStyled = styled.div<Props>`
  background-color: var(--palette-white);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 49.4%;
  height: 6.4rem;
  padding: 1.2rem 2.4rem;

  .InfoCardClient {
    &__name {
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    &__dni {
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.8rem;
    }

    &__value {
      font-weight: 800;
      font-size: 2.2rem;
      line-height: 3.2rem;
      color: var(--palette-primary);
    }

    &__title {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`;

export default InfoCardClientStyled;
