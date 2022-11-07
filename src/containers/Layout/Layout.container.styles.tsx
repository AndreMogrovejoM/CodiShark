import styled from "styled-components";

import { LayoutContainerStyledProps as Props } from "./Layout.container.types";

const LayoutContainerStyled = styled.div<Props>`
  width: 100%;
  height: 100vh;
  display: flex;

  .LayoutContainer {
    &__children {
      width: 100%;
      height: 100%;
      padding: 2.4rem;
    }
  }
`;

export default LayoutContainerStyled;
