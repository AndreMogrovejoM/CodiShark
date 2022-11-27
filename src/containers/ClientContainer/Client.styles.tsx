import styled from "styled-components";

import { ClientContainerStyledProps as Props } from "./Client.types";

const ClientContainerStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  min-height: 100vh;
  display: flex;

  @media screen and (max-width: 1366px) {
    flex-direction: column;
  }

  .ClientContainer {
    &__title {
      left: 0.26rem;
      top: 27.5rem;
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;

      @media screen and (max-width: 1366px) {
        left: 7.2rem;
      }
    }
    &__section1 {
      width: 72%;

      @media screen and (max-width: 1366px) {
        width: 88%;
        margin: 0 auto;
      }
    }

    &__section2 {
      justify-content: space-between;
      display: flex;
      width: 100%;

      @media screen and (max-width: 1366px) {
        width: 100%;
        margin: 0 auto;
      }
    }

    &__section3 {
      margin-right: 2.4rem;
      margin-left: 2.4rem;
      width: 70%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-wrap: wrap;

      @media screen and (max-width: 1366px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 4rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default ClientContainerStyled;
