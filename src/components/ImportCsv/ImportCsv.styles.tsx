import styled from "styled-components";

import { ImportCsvStyledProps as Props } from "./ImportCsv.types";

const ImportCsvStyled = styled.div<Props>`
  background-color: var(--palette-white);
  margin-top: 3.2rem;
  border-radius: 0.8rem;
  height: 12rem;
  padding: 0 1.6rem;
  display: flex;
  gap: 1.6rem;

  .ImportCsv {
    &__button {
      padding: 0.2rem 0.8rem;
      border: 0.2rem;
      width: 48%;
    }

    &__button-text {
      color: var(--palette-white);
      font-size: 1.4rem;
    }

    &__text {
      font-size: 1.6rem;
      color: var(--palette-grayText);
    }

    &__section {
      width: 46%;
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;

      &--right {
        border-left: 1px solid var(--palette-greyBackgroundSecond);
        width: 52%;
      }
    }
  }
`;

export default ImportCsvStyled;
