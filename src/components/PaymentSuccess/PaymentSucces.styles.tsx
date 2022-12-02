import styled from "styled-components";

<<<<<<<< HEAD:src/components/PaymentSuccess/PaymentSuccess.styles.tsx
import { PaymentSuccessStyledProps as Props } from "./PaymentSuccess.types";
========
import { PaymentSuccessStyledProps as Props } from "./PaymentSucces.types";
>>>>>>>> f05648186e89a0d2e3575a61384031598fc2e2cd:src/components/PaymentSuccess/PaymentSucces.styles.tsx

const PaymentSuccessStyled = styled.div<Props>`
  width: 100%;
  height: 32rem;
  display: flex;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  margin: 3.2rem auto;
  position: relative;
  gap: 4rem;

  .PaymentSuccess {
    &__container {
      display: flex;
      gap: 22rem;
      position: relative;
    }

    &__section {
      display: flex;
      flex-direction: column;
      margin-top: 4.8rem;
      padding-left: 18rem;
      padding-right: 4rem;
    }

    &__section2 {
      padding-right: 16rem;
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      margin-left: 6.4rem;
      margin-top: 6.4rem;
      margin-bottom: 2.4rem;
    }

    &__image {
      margin-bottom: 3.2rem;
      width: 6.4rem;
      height: 6.4rem;
      margin-left: 4.8rem;
    }

    &__p1div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p1 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span1 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p2div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p2 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p3div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p3 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span3 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p4div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p4 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span4 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      margin-left: 2rem;
    }

    &__line {
      position: absolute;
      left: 50rem;
      top: 7.2rem;
    }
  }
`;

export default PaymentSuccessStyled;
