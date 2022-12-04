import CONSTANTS from "config/constants";
import styled from "styled-components";

import { ClientContainerStyledProps as Props } from "./Client.types";

const { BREAKPOINTS } = CONSTANTS;

const ClientContainerStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  display: flex;
  gap: 2%;

  @media screen and (max-width: 1366px) {
    flex-direction: column;
  }

  .ClientContainer {
    &__section1 {
      width: 70%;

      @media screen and (max-width: 1366px) {
        width: 88%;
        margin: 0 auto;
      }
    }

    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-top: -1rem;
      margin-bottom: 0.6rem;
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
