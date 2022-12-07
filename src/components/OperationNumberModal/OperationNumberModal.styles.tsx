import styled from "styled-components";

import { OperationNumberModalStyledProps as Props } from "./OperationNumberModal.types";

const OperationNumberModalStyled = styled.div<Props>`
  .OperationNumberModal {
    &__content {
      display: flex;
      justify-content: space-between;
      margin-top: 2.4rem;
    }

    &__section {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default OperationNumberModalStyled;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  height: 320,
  bgcolor: "#fff",
  border: "1px solid var(--palette-primary)",
  borderRadius: 4,
  boxShadow: 24,
  p: 4
};
