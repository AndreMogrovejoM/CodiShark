import styled from "styled-components";

import { InfoCardClientTwoStyledProps as Props } from "./InfoCardClientTwo.types";

const InfoCardClientTwoStyled = styled.div<Props>`
  background-color: var(--palette-white);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  padding: 4rem 4rem;

  .InfoCardClientTwo {
    &__title {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin-bottom: 1.6rem;
    }

    &__value {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 2.2rem;
      line-height: 1.8rem;
    }
  }
`;

export default InfoCardClientTwoStyled;
