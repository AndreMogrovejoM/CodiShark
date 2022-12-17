import styled from "styled-components";

import { OperationNumberModalStyledProps as Props } from "./OperationNumberModal.types";

const OperationNumberModalStyled = styled.div<Props>`
  .OperationNumberModal {
    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 2.4rem;
      gap: 1.2rem;
    }

    &__copy {
      background-color: var(--palette-greyBackgroundSearch);
      color: var(--palette-grayText);
      width: 6rem;
      border-radius: 0.4rem;
      padding: 0.4rem;
      display: flex;

      &:hover {
        cursor: pointer;
      }
    }

    &__h1 {
      font-size: 3rem;
      font-weight: 800;
    }

    &__h2 {
      font-weight: 700;
    }

    &__h3 {
      font-size: 1.2rem;
      font-weight: 700;
    }

    &__p {
      color: var(--palette-grayText);
      font-weight: 300;
    }

    &__section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__h1 {
      line-height: 2.4rem;
      font-weight: 700;
    }

    &__paragraph {
      font-weight: 500;
    }

    &__red {
      &-color {
        color: var(--palette-error);
      }
    }

    &__primary {
      &-color {
        color: var(--palette-primary);
      }
    }
  }
`;

export default OperationNumberModalStyled;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 320,
  maxWidth: 640,
  minHeight: 320,
  bgcolor: "#fff",
  border: "1px solid var(--palette-primary)",
  borderRadius: 4,
  boxShadow: 24,
  p: 4
};
