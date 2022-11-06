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
  }
`;

export default SignInFormStyled;
