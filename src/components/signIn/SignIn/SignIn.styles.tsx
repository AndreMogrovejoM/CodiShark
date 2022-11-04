import styled from "styled-components";

import { SignInStyledProps as Props } from "./SignIn.types";

const SignInStyled = styled.div<Props>`
  --padding-vertical: 4rem;

  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  max-height: calc(100vh - var(--padding-vertical));
  display: flex;
  flex-direction: column;
  background-color: var(--palette-secondary);

  .SignIn {
    &__main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default SignInStyled;
