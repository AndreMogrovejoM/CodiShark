import styled from "styled-components";

import { LayoutContainerStyledProps as Props } from "./LayoutContainer.types";

const LayoutContainerStyled = styled.div<Props>`
  .LayoutContainer {
    &__container {
      height: 100vh;
    }

    &__image {
      background-image: url(https://source.unsplash.com/random);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
`;

export default LayoutContainerStyled;
