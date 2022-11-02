import styled from "styled-components";

import { SignInAdministratorStyledProps as Props } from "./SignInAdministrator.types";

const SignInAdministratorStyled = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background-color: var(--palette-deepBlue);
  display: flex;
  align-items: center;

  .SignInAdministrator {
    &__container {
      width: 48rem;
      height: 48rem;
      background-color: var(--palette-grey);
      margin: 0 auto;
      border-radius: 1.6rem;
      display: flex;
      flex-direction: column;
      padding: 4.8rem 0;
      position: relative;
    }

    &__title {
      font-size: 2rem;
      line-height: 3.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1.6rem;
    }

    &__subTitle {
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 4.4rem;
    }

    &__textField {
      background-color: var(--palette-white);
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      overflow: hidden;
      margin-bottom: 1.6rem;
    }

    &__button {
      width: 80%;
      margin: 0 auto;
      border-radius: 0.8rem;
      padding: 0.8rem 0;
      color: var(--palette-white);
      margin-top: 4.4rem;
    }

    &__footerText {
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 4.4rem;
      position: absolute;
      bottom: 1.6rem;
      align-self: center;
    }
  }
`;

export default SignInAdministratorStyled;
