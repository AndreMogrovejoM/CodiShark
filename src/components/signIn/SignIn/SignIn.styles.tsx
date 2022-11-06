import BG_USER from "assets/images/loginImageUser.webp";
import styled from "styled-components";

import { SignInStyledProps as Props } from "./SignIn.types";

const SignInStyled = styled.div<Props>`
  .SignIn {
    &__container {
      height: 100vh;
    }

    &__image {
      background-image: url(${BG_USER});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    &__title {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 700;
    }

    &__subtitle {
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-weight: 400;
      text-align: center;
    }
  }
`;

export default SignInStyled;
