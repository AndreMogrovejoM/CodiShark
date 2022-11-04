import styled, { css } from "styled-components";

import { SignInFormStyledProps as Props } from "./SignInForm.types";

const baseStyles = css`
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  width: 44rem;
  padding: 3.2rem;
`;

const SignInFormStyled = styled.div<Props>`
  .SignInForm {
    &__top {
      ${baseStyles};
    }

    &__logo {
      margin-bottom: 4rem;
      transform: scale(1.5) translateX(0.8rem);
    }

    &__title {
      color: var(--palette-grey);
      font-size: 2.4rem;
      line-height: 3.2rem;
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
