import styled from "styled-components";

import { InformationClientStyledProps as Props } from "./InformationClient.types";

const InformationClientStyled = styled.div<Props>`
  width: 100%;
  height: 32rem;
  display: flex;
  flex-direction: row;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  margin: 3.2rem auto;
  position: relative;
  gap: 4rem;

  .InformationClient {
    &__section1 {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__section2 {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 1518px) {
        margin-left: 4rem;
      }
    }

    &__title {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-left: 16rem;
      margin-top: 1rem;
    }

    &__title2 {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-left: 12rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
      margin-left: 13.6rem;
      margin-bottom: 1rem;
    }

    &__subtitle2 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-left: 11.2rem;
      margin-top: 1rem;
    }

    &__subtitle3 {
      margin-bottom: 1rem;
      margin-left: 7.2rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    &__subtitle4 {
      margin-left: 7.2rem;
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 7.2rem;
      font-weight: 800;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__cuenta1 {
      margin-left: 7.2rem;
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &__parrafo {
      margin-top: 1rem;
      margin-left: 7.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__button {
      background-color: var(--palette-limeGreen);
      width: 12rem;
      margin-top: 2.6rem;
      margin-left: 16.6rem;
    }
    &__text1 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__button2 {
      margin-left: 7.2rem;
      display: flex;
      background-color: var(--palette-primary);
      width: 24rem;
    }

    &__text2 {
      color: var(--palette-white);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image1 {
      width: 30rem;
      height: 6.5rem;
      margin-left: 8rem;
    }

    &__imageSection {
      gap: 4rem;
      margin-left: 16rem;
      display: flex;
      margin-top: 2rem;
    }

    &__line {
      position: absolute;
      left: 50.5rem;
      top: 3.6rem;

      @media screen and (max-width: 1518px) {
        margin-left: -3.2rem;
      }
    }

    &__p {
      color: var(--palette-grayText);
      position: absolute;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 0.8rem;
      top: 11.2rem;
      right: 67.6rem;

      @media screen and (max-width: 1518px) {
        display: none;
      }
    }
  }
`;

export default InformationClientStyled;
