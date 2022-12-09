import styled from "styled-components";

import { DebtExpandableRowsComponentStyledProps as Props } from "./DebtExpandableRowsComponent.types";

const DebtExpandableRowsComponentStyled = styled.div<Props>`
  .DebtExpandableRowsComponent {
    &__container {
      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-blueText);

        &-bold {
          font-weight: 700;
        }

        &-expand {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.2rem;
          width: 100%;
        }
      }

      &__expand {
        &-static {
          width: 10rem;
        }

        &-text {
          display: -webkit-box;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
        }
      }
    }

    &__component {
      &--divider {
        border-bottom: 0.06rem solid var(--palette-grey);
      }
    }
  }
`;

export default DebtExpandableRowsComponentStyled;
