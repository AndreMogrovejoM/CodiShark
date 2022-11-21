import styled from "styled-components";

import { ClientContainerStyledProps as Props } from "./Client.types";

const ClientContainerStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  .ClientContainer {
    &__title {
      left: 0.26rem;
      top: 27.5rem;
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
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
        width: 88%;
        margin: 0 auto;
      }
    }

    &__section3 {
      margin-right: 2.4rem;
      margin-left: 2.4rem;
      width: 70%;
      justify-content: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (max-width: 1366px) {
        width: 88%;
        align-items: center;
        justify-content: center;
        gap: 2%;
        flex-direction: row;
        margin: 3.2rem auto;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
`;

export default ClientContainerStyled;
