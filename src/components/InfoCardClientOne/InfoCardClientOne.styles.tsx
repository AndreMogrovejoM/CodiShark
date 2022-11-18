import styled from "styled-components";

import { InfoCardClientOneStyledProps as Props } from "./InfoCardClientOne.types";

const InfoCardClientOneStyled = styled.div<Props>`
  background-color: var(--palette-white);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  padding: 4rem 4rem;

  .InfoCardClientOne {
    &__name {
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 1.8rem;
      padding-bottom: 0.8rem;
      padding-top: 0.8rem;
    }

    &__dni {
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.8rem;
    }
  }
`;

export default InfoCardClientOneStyled;
