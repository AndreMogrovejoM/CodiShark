import styled from "styled-components";

import { PaymentTableStyledProps as Props } from "./PaymentTable.types";

const PaymentTableStyled = styled.div<Props>`
  .PaymentTable {
    &__container {
      &--button {
        background-color: var(--palette-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        color: var(--palette-white);

        &-icon {
          font-size: 1.6rem;
        }
      }

      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.4rem;
        color: var(--palette-whiteBackgroundTwo);

        &-bold {
          font-weight: 600;
          color: var(--palette-blue);
        }
      }

      &--chip {
        border-radius: 0.8rem;
        &-green {
          background: var(--palette-greenWeakBackground);
        }

        &-yellow {
          background: var(--palette-yellowWeakBackground);
        }
      }
    }

    &__text {
      &--chip {
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 1.2rem;
        padding: 0.4rem 1.2rem;
      }
    }
  }
`;

export default PaymentTableStyled;
