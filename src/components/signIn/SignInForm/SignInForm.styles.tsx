import styled from "styled-components";

import { SignInFormStyledProps as Props } from "./SignInForm.types";

const SignInFormStyled = styled.div<Props>`
  .SignInForm {
    &__container {
      &--form {
        margin-top: 0.8rem;
      }

      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
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
