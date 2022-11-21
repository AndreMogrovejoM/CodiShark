import styled from "styled-components";

import { InformationClientStyledProps as Props } from "./InformationClient.types";

const InformationClientStyled = styled.div<Props>`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: row;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  margin: 3rem auto;
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
    }

    &__title {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-left: 16rem;
    }

    &__title2 {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-left: 12rem;
      margin-bottom: 2rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
      margin-left: 13.4rem;
      margin-bottom: 1rem;
    }

    &__subtitle2 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-left: 11.4rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    &__subtitle3 {
      margin-bottom: 1rem;
      margin-left: 7rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    &__subtitle4 {
      margin-left: 7rem;
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 7rem;
      font-weight: 800;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__cuenta1 {
      margin-left: 7rem;
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &__parrafo {
      margin-top: 1rem;
      margin-left: 7rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__button {
      background-color: var(--palette-limeGreen);
      width: 16rem;
      margin-left: 14.6rem;
    }

    &__button2 {
      margin-left: 7rem;
      display: flex;
      background-color: var(--palette-primary);
      width: 26rem;
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
      margin-bottom: 2rem;
    }

    &__line {
      position: absolute;
      left: 50rem;
      top: 3.6rem;
    }
  }
`;

export default InformationClientStyled;
