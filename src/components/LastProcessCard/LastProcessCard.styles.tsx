import styled from "styled-components";

import { LastProcessCardStyledProps as Props } from "./LastProcessCard.types";

const LastProcessCardStyled = styled.div<Props>`
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;
  padding: 1.6rem;

  @media screen and (max-width: 1024px) {
    width: 88%;
    max-width: 88%;
  }

  .LastProcessCard {
    &__title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.4rem;
      margin-bottom: 1.6rem;
    }

    &__subtitle {
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.6rem;

      @media screen and (max-width: 912px) {
        display: flex;
        font-size: 1.24rem;
        font-weight: 600;
        line-height: 1.6rem;
      }

      @media screen and (max-width: 820px) {
        font-size: 1.6rem;
        line-height: 1.6rem;
      }

      @media screen and (max-width: 540px) {
        font-size: 1.24rem;
        font-weight: 600;
        line-height: 1.6rem;
      }
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

    &__container {
      display: flex;
      justify-content: space-between;
    }

    &__iconDebt {
      @media screen and (max-width: 500px) {
        display: none;
      }
    }

    &__sectionContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.6rem;
      width: 20rem;
      margin: 2.4rem 0;
      height: 2rem;
      @media screen and (max-width: 500px) {
        justify-content: space-between;
      }
      @media screen and (max-width: 413px) {
        justify-content: space-between;
      }
    }

    &__icon {
      @media screen and (max-width: 500px) {
        display: none;
      }
    }

    &__footerSubtitle {
      text-align: end;
      padding: 1.6rem;
      cursor: pointer;

      @media screen and (max-width: 912px) {
        text-align: end;
        padding: 2.4rem;
        font-size: 1.8rem;
      }

      @media screen and (max-width: 820px) {
        text-align: end;
        padding: 1.6rem;
        font-size: 1.6rem;
      }
    }
  }
`;

export default LastProcessCardStyled;
