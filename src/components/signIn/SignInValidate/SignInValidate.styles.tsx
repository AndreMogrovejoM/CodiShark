import CONSTANTS from "config/constants";
import styled from "styled-components";

import { SignInValidateStyledProps as Props } from "./SignInValidate.types";

const { BREAKPOINTS } = CONSTANTS;

const SignInValidateStyled = styled.div<Props>`
  .SignInValidate {
    &__container {
      &--button {
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
      }

      &__input {
        outline: 0.1rem solid var(--palette-skyBlue);
        appearance: none;
        -webkit-appearance: none;
        border: 0.2rem solid var(--palette-white);
        background-color: var(--palette-white);
        border-radius: 50%;

        &:hover {
          outline-color: var(--palette-skyBlue);
        }

        &:checked {
          outline-color: var(--palette-skyBlue);
          background-color: var(--palette-skyBlue);
          animation: outline-checked;
          animation-duration: 0.1s;
          animation-iteration-count: 4;
          animation-direction: alternate;
          animation-timing-function: linear;
        }

        @keyframes outline-checked {
          0% {
            outline-offset: 0;
          }

          100% {
            outline-offset: -0.16rem;
          }
        }
      }

      &__global {
        width: auto;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          width: 38.4rem;
        }
      }

      & > * {
        margin-bottom: 1.6rem;
      }

      &__form {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        background-color: var(--palette-greyBackgroundSecond);
        padding: 2.4rem;
        border-radius: 1.6rem;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          background-color: unset;
          padding: 0;
          border-radius: 0;
        }
      }
    }

    &__component {
      &--button {
        padding: 0.8rem 0;
      }
    }

    &__text {
      &--greeting {
        font-weight: 400;
        font-size: 1.6rem;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.6rem;
        }

        &__bold {
          font-weight: bold;
        }
      }

      &--indication {
        font-size: 1.2rem;
      }

      &--color {
        color: var(--palette-skyBlue);
        white-space: nowrap;
      }

      &--block {
        display: block;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          display: inline-block;
        }
      }
    }
  }

  input[type="radio"] {
    height: 1.16rem;
    width: 1.16rem;
    margin-right: 0.8rem;
  }
`;

export default SignInValidateStyled;
