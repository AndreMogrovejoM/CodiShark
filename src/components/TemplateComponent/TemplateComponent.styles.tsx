import styled from "styled-components";

import { TemplateComponentStyledProps as Props } from "./TemplateComponent.types";

const TemplateComponentStyled = styled.div<Props>`
  .TemplateComponent {
    &__title {
      font-size: 22px;
    }

    &__subtitle {
      font-size: 16px;
    }
  }
`;

export default TemplateComponentStyled;
