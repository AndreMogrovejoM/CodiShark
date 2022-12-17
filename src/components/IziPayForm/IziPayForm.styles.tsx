import styled from "styled-components";

import { IziPayFormStyledProps as Props } from "./IziPayForm.types";

const IziPayFormStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  .IziPayForm {
    &__images {
      padding: 0.8rem 0;
      display: flex;
      gap: 2rem;
    }

    &__image {
      width: 4rem;
    }
  }
`;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  minHeight: 480,
  bgcolor: "#fff",
  border: "1px solid var(--palette-primary)",
  borderRadius: 4,
  boxShadow: 24,
  p: 4
};

export default IziPayFormStyled;
