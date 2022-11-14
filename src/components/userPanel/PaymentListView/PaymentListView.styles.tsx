import styled from "styled-components";

import { PaymentListViewStyledProps as Props } from "./PaymentListView.types";

const PaymentListViewStyled = styled.div<Props>`
  margin: 0 4rem;

  .PaymentListView {
    &__container {
      &--actions {
        display: flex;
        margin: 1.6rem auto;
        justify-content: space-between;
      }

      &--button {
        display: flex;
        gap: 0.8rem;
      }
    }

    &__component {
      &--button {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.4rem;
        border-radius: 0.8rem;
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export default PaymentListViewStyled;
