import styled from "styled-components";

import { SettingsStyledProps as Props } from "./Settings.types";

const SettingsStyled = styled.div<Props>`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & > h1 {
    font-size: 2.2rem;
    color: var(--palette-deepBlue);
    margin-bottom: 4.8rem;
    text-transform: none;
  }

  & > h2 {
    font-size: 2.8rem;
    color: var(--palette-primary);
    margin-bottom: 4.8rem;
  }

  & > p {
    font-size: 1.6rem;
    color: var(--palette-grayTextBold);
    margin-bottom: 4.8rem;
    width: 64%;
    text-align: justify;
  }

  .Settings {
    &__buttons {
      display: flex;
      justify-content: space-around;
      width: 24%;
      margin-top: 2.4rem;
      gap: 1.6rem;
    }

    &__done {
      color: var(--palette-primary);
    }

    &__p {
      color: var(--palette-white);
    }

    &__note {
      margin-top: 3.2rem;
      text-align: center;
    }
  }
`;

export default SettingsStyled;
