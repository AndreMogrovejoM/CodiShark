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

      @media screen and (max-width: 1024px) {
        padding: 2.4rem 0rem;
      }

      @media screen and (max-width: 720px) {
        width: 100%;
        margin-left: 0;
      }
    }
  }
`;

export default LayoutContainerStyled;
