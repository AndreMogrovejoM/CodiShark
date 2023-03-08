import CONSTANTS from "config/constants";
import styled from "styled-components";

import { RecoveryFormStyledProps as Props } from "./RecoveryForm.types";
const { BREAKPOINTS } = CONSTANTS;

const RecoveryFormStyled = styled.div<Props>`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;
  margin-top: 1.6rem;

  .RecoveryForm {
    &__text {
      &--greeting {
        font-weight: 400;
        font-size: 1.6rem;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.6rem;
        }

        &__bold {
          font-weight: bold;
        }
      }

      &--indication {
        font-size: 1.2rem;
      }

      &--color {
        color: var(--palette-skyBlue);
        white-space: nowrap;
      }

      &--block {
        display: block;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          display: inline-block;
        }
      }
    }

    &__SSContainer {
      background-color: var(--palette-skyBlue2);
      padding: 1.6rem 2rem;
      border-radius: 0.8rem;
    }

    &__button {
      background: var(--palette-limeGreenBackground2);
    }

    &__input {
      margin: 1.6rem 0;
    }
  }

  .MuiOutlinedInput-root.Mui-focused {
    background: white;
    border-radius: 1.6rem;
  }
`;

export default RecoveryFormStyled;
