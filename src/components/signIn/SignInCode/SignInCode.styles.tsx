import styled from "styled-components";

import { SignInCodeStyledProps as Props } from "./SignInCode.types";

const SignInCodeStyled = styled.div<Props>`
  .SignInCode {
    &__container {
      &--OTP {
        display: flex;
        justify-content: center;
      }

      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }

      &--separator {
        width: 1.2rem;
      }

      &--text > * {
        margin-bottom: 0.8rem;
      }
    }

    &__input {
      background: var(--palette-white);
      border: 0.05rem solid var(--palette-black);
      border-radius: 10px;
      width: 4.8rem !important;
      height: 4.8rem !important;

      &--focus {
        border: 0.05rem solid var(--palette-skyBlue);
        color: var(--palette-skyBlue) !important;
      }

      &--text {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
        color: var(--palette-darkText);
      }
    }

    &__text {
      font-weight: 540;
      font-size: 1.2rem;
      line-height: 1.6rem;

      &--color {
        color: var(--palette-skyBlue);
      }
    }
  }
`;

export default SignInCodeStyled;
