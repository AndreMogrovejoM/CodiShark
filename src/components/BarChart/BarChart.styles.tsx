import styled from "styled-components";

import { BarChartStyledProps as Props } from "./BarChart.types";

const BarChartStyled = styled.div<Props>`
  background-color: var(--palette-white);
  padding: 1.6rem 2.4rem;
  border-radius: 0.8rem;
  height: 32rem;
  margin-top: 0.8rem;
  min-height: 32rem;

  .BarChart {
    &__chart {
      margin-top: -2.4rem;
    }
  }
`;

export default BarChartStyled;
