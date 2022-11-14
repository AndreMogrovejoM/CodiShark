import BG_USER from "assets/images/loginImageUser.jpg";
import BG_USER_WEBP from "assets/images/loginImageUser.webp";
import styled from "styled-components";

import { SignInStyledProps as Props } from "./SignIn.types";

const SignInStyled = styled.div<Props>`
  .SignIn {
    &__renderList {
      width: 48%;
      margin-left: 4rem;
      position: absolute;
      top: calc(48% - 3.2rem);
      color: var(--palette-white);

      &--ul {
        margin: 1.6rem 2.4rem;
      }

      &--h1 {
        color: inherit;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 3.2rem;
      }

      &--h2 {
        color: inherit;
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }

    &__container {
      height: 100vh;

      &--center {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &--content {
        margin-bottom: 5.6rem;
      }

      &--content > * {
        margin-bottom: 0.8rem;
      }

      &--copyright {
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-weight: 300;
        margin-top: 8rem;
        text-align: center;
      }

      &--form {
        margin-top: 6.4rem;
        margin-bottom: 6.4rem;
        margin-left: 3.2rem;
        margin-right: 3.2rem;
      }
    }

    &__image {
      background-image: url(${BG_USER});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      background-image: -webkit-image-set(url(${BG_USER_WEBP}));
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
