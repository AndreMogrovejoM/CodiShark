import CONSTANTS from "config/constants";
import styled from "styled-components";

import { LayoutContainerStyledProps as Props } from "./Layout.container.types";

const { BREAKPOINTS } = CONSTANTS;

const LayoutContainerStyled = styled.div<Props>`
  .LayoutContainer {
    &__children {
      position: relative;
      width: 100%;
      min-height: 100vh;
      background-color: var(--palette-white);

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        background-color: var(--palette-greyBackground);
      }

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        min-height: 100vh;
      }

      &--container {
        width: 92vw;
        margin: auto;
        padding: 1.6rem 0;
        padding-bottom: 15vh;

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          width: calc(100% - 20.4rem);
          padding: 2.4rem;
          margin-left: 20.4rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          padding: 2.4rem;
        }
      }
    }

    &__container {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        flex-direction: row;
      }

      &--modal {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        &-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
      }
    }

    &__footer {
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        display: block;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.4rem;
        padding-bottom: 4rem;
      }
    }

    &__component {
      &--modal {
        &-title {
          font-size: 2.4rem;
          font-weight: 600;
          text-align: center;
        }

        &-paragraph {
          display: flex;
          gap: 1.6rem;
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
    }
  }
`;

export default LayoutContainerStyled;

export const ModalStyled = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 320,
  bgcolor: "var(--palette-white)",
  border: "1px solid var(--palette-primary)",
  borderRadius: 4,
  boxShadow: 24,
  p: 4
};
