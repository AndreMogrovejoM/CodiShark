import styled from "styled-components";

import { SignInValidateStyledProps as Props } from "./SignInValidate.types";

const SignInValidateStyled = styled.div<Props>`
  .SignInValidate {
    &__container {
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
        width: 38.4rem;
      }

      & > * {
        margin-bottom: 1.6rem;
      }

      &__form {
        margin-bottom: 1.6rem;

        & > * {
          margin-bottom: 0.8rem;
        }
      }
    }

    &__text {
      &--greeting {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &__bold {
          font-weight: bold;
        }
      }

      &--indication {
        font-size: 1.2rem;
      }

      &--color {
        color: var(--palette-skyBlue);
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
