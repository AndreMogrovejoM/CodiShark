import CONSTANTS from "config/constants";
import styled from "styled-components";

import { LayoutContainerStyledProps as Props } from "./Layout.container.types";

const { BREAKPOINTS } = CONSTANTS;

const LayoutContainerStyled = styled.div<Props>`
  .LayoutContainer {
    &__children {
      width: calc(100% - 20.4rem);
      min-height: 100vh;
      padding: 2.4rem;
      margin-left: 20.4rem;
      background-color: var(--palette-greyBackground);

      @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
        padding: 2.4rem 0;
      }

      @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
        width: 100%;
        margin-left: 0;
      }
    }

    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        flex-direction: row;
      }
    }

    &__footer {
      bottom: 0;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.4rem;
      padding-bottom: 4rem;
      &-images {
        width: 2.6rem;
        display: flex;
        gap: 2rem;
      }
    }
  }
`;

export default LayoutContainerStyled;
