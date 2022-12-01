import styled from "styled-components";

import { ClientPaymentStyledProps as Props } from "./ClientPayment.types";

const ClientPaymentStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ClientPayment {
    &__title {
      margin-left: 1.6rem;
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-bottom: 2rem;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.6rem;
      margin-left: -2rem;
    }
  }
`;

export default ClientPaymentStyled;
