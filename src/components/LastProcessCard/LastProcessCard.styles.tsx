import styled from "styled-components";

import { LastProcessCardStyledProps as Props } from "./LastProcessCard.types";

const LastProcessCardStyled = styled.div<Props>`
  width: 40rem;
  height: 32.8rem;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;

  .LastProcessCard {
    &__title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.6rem;
      padding: 1.6rem 1.6rem;
    }

    &__subtitle {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.6rem;
      padding: 1.6rem;
    }

    &__name {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.6rem;
      padding: 0.6rem;
    }

    &__debt {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
      padding: 0.6rem;
      padding-left: 2rem;
    }

    &__iconDebt {
      padding-left: 7rem;
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

    &__icon {
      padding-left: 1.6rem;
    }

    &__footerSubtitle {
      text-align: end;
      padding-right: 1.6rem;
      padding-top: 1.6rem;
    }
  }
`;

export default LastProcessCardStyled;
