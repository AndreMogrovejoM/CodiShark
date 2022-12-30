import CONSTANTS from "config/constants";
import styled from "styled-components";

import { SignInCodeStyledProps as Props } from "./SignInCode.types";

const { BREAKPOINTS } = CONSTANTS;

const SignInCodeStyled = styled.div<Props>`
  .SignInCode {
    &__error {
      color: var(--palette-error);
      font-weight: 600;
      text-align: center;
      margin-top: 0.8rem;
    }

    &__container {
      &--OTP {
        display: flex;
        justify-content: center;
      }

      &--button {
        margin: 3.2rem 0;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          margin-top: 1.2rem;
          margin-bottom: 1.6rem;
        }
      }

      &--separator {
        width: 1.2rem;
      }

      &--text > * {
        margin-bottom: 2.4rem;
        text-align: center;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          margin-bottom: 0.8rem;
          text-align: left;
        }
      }

      &--time {
        margin: 1rem auto;
        text-align: center;
      }
    }

    &__component {
      &--button {
        padding: 0.8rem 0;
      }
    }
    &__input {
      background: var(--palette-white);
      border: 0.04rem solid var(--palette-black);
      border-radius: 0.8rem;
      width: 4.8rem !important;
      height: 4.8rem !important;

      &--text {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
        color: var(--palette-darkText);
      }

      &--focus {
        border: 0.04rem solid var(--palette-skyBlue);
        color: var(--palette-skyBlue);
      }

      &--time {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }

    &__text {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.6rem;

      &--color {
        color: var(--palette-skyBlue);
      }

      &--clickable {
        display: block;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          display: inline-block;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default SignInCodeStyled;
