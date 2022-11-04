import styled from "styled-components";

import { SignInFormStyledProps as Props } from "./SignInForm.types";

const SignInFormStyled = styled.div<Props>`
  .SignInForm {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;

      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }

      &--copyright {
        font-size: 1rem;
        line-height: 1.4rem;
        font-weight: 300;
        margin-top: 16.4rem;
        text-align: center;
      }

      &--content {
        margin-bottom: 5.4rem;
      }

      &--content > * {
        margin-bottom: 0.8rem;
      }

      &--form {
        margin-top: 6.4rem;
        margin-bottom: 6.4rem;
        margin-left: 3.2rem;
        margin-right: 3.2rem;
      }
    }

    &__instructions {
      line-height: 2.4rem;
    }

    &__form {
      padding-top: 3.2rem;
    }
  }

  .mui-btn-primary {
    background-color: var(--palette-primary);
    border: none;
  }
`;

export default SignInFormStyled;
