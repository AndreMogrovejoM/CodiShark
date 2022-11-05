import styled from "styled-components";

import { SignInAdministratorVerifyStyledProps as Props } from "./SignInAdministratorVerify.types";

const SignInAdministratorVerifyStyled = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background-color: var(--palette-deepBlue);
  display: flex;
  align-items: center;
  .SignInAdministratorVerify {
    &__container {
      width: 48rem;
      height: 40rem;
      background-color: var(--palette-grey);
      margin: 0 auto;
      border-radius: 1.6rem;
      display: flex;
      flex-direction: column;
      padding: 4.8rem 0;
      position: relative;
    }

    &__logo {
      margin: 0 auto;
      width: 16rem;
      height: 4.8rem;
      margin-bottom: 2rem;
    }

    &__title {
      font-size: 2rem;
      line-height: 3.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1.6rem;
    }

    &__subTitle {
      margin: 0 auto;
      width: 80%;
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 2rem;
    }

    &__textField {
      background-color: var(--palette-white);
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: 0.8rem;
    }

    &__button {
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      color: var(--palette-white);
      padding: 0.8rem 0;
    }

    &__footerText {
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 300;
      margin: 0 auto;
      margin-top: auto;
    }
  }
`;

export default SignInAdministratorVerifyStyled;
