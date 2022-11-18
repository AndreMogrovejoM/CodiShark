import styled from "styled-components";

import { IndicatorsClientOneStyledProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOneStyled = styled.div<Props>`
  .IndicatorsClientOne {
    &__title {
      font-size: 22px;
    }

    &__subtitle {
      font-size: 16px;
    }
  }
`;

export default IndicatorsClientOneStyled;
