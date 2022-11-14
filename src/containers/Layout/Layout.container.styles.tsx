import styled from "styled-components";

import { LayoutContainerStyledProps as Props } from "./Layout.container.types";

const LayoutContainerStyled = styled.div<Props>`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;

  .LayoutContainer {
    &__children {
      width: calc(100% - 20.4rem);
      height: 100%;
      padding: 2.4rem;
      top: 0;
      margin-left: 20.4rem;
      position: absolute;
      background-color: var(--palette-greyBackground);
    }
  }
`;

export default LayoutContainerStyled;
