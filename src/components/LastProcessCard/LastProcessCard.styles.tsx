import styled from "styled-components";

import { LastProcessCardStyledProps as Props } from "./LastProcessCard.types";

const LastProcessCardStyled = styled.div<Props>`
  width: 40rem;
  height: 32.8rem;
  background-color: var(--palette-white);
  margin: 3.2rem;

  .LastProcessCard {
    &__title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.6rem;
      margin-bottom: 3.2rem;
    }

    &__subtitle {
      font-weight: 600;
      line-height: 1.6rem;
    }

    &__name {
      font-weight: 700;
      line-height: 1.6rem;
    }

    &__container {
      display: flex;
    }

    &__sectionContainer {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      width: 20rem;
      margin: 1.2rem 0;
    }

    &__footerSubtitle {
      text-align: end;
      padding-right: 1.6rem;
    }
  }
`;

export default LastProcessCardStyled;
