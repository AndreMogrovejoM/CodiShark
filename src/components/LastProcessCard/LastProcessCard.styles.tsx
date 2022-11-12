import styled from "styled-components";

import { LastProcessCardStyledProps as Props } from "./LastProcessCard.types";

const LastProcessCardStyled = styled.div<Props>`
  width: 40rem;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;
  padding: 1.6rem;

  .LastProcessCard {
    &__title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.4rem;
      margin-bottom: 1.6rem;
    }

    &__subtitle {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.6rem;
    }

    &__name {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.6rem;
    }

    &__debt {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
    }

    &__iconDebt {
      padding-left: 7.2rem;
    }

    &__container {
      display: flex;
    }

    &__sectionContainer {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      width: 20rem;
      margin: 2.4rem 0;
      height: 2rem;
    }

    &__icon {
      padding-left: 1.6rem;
    }

    &__footerSubtitle {
      text-align: end;
      padding: 1.6rem;
    }
  }
`;

export default LastProcessCardStyled;
