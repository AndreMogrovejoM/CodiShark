import styled from "styled-components";

import { SignInFormStyledProps as Props } from "./SignInForm.types";

const SignInFormStyled = styled.div<Props>`
  .SignInForm {
    &__container {
      &--button {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
      }
    }

    &__component {
      &--button {
        padding: 0.8rem 0;
      }
    }

    &__error {
      color: var(--palette-error);
      font-weight: 600;
      text-align: center;
      margin-top: 0.4rem;
    }
  }
`;

export default SignInFormStyled;
