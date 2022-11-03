import styled from "styled-components";

import { SignInStyledProps as Props } from "./SignIn.types";

const SignInStyled = styled.div<Props>`
  .SignIn {
    &__container {
      margin-top: 6.4rem;
      margin-bottom: 6.4rem;
      margin-left: 3.2rem;
      margin-right: 3.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--copyright {
        margin-top: 4rem;
      }
    }

    &__avatar {
      margin: 0.8rem;
    }
  }
`;

export default SignInStyled;
