import CONSTANTS from "config/constants";
import styled from "styled-components";

import { ClientContainerStyledProps as Props } from "./Client.types";

const { BREAKPOINTS } = CONSTANTS;

const ClientContainerStyled = styled.div<Props>`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  display: flex;
  gap: 2%;
  background-color: var(--palette-greyBackground);
  padding-bottom: 6.4rem;

  @media screen and (max-width: ${BREAKPOINTS.wide}px) {
    flex-direction: column;
  }

  .ClientContainer {
    &__section1 {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 100%;
    }

    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__section2 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.6rem;

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        flex-direction: row;
      }
    }

    &__section3 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 0.8rem;

      @media screen and (min-width: 1366px) {
        width: 70%;
        margin: 0 auto;
      }
    }

    &__section4 {
      width: 28%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-wrap: wrap;
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.wide}px) {
        display: block;
      }
    }
  }
`;

export default ClientContainerStyled;
