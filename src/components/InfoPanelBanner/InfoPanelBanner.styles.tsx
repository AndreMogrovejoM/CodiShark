import styled from "styled-components";

import { InfoPanelBannerStyledProps as Props } from "./InfoPanelBanner.types";

const InfoPanelBannerStyled = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  height: 7.2rem;

  .InfoPanelBanner {
    &__title {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 1.4rem;
    }
  }
`;

export default InfoPanelBannerStyled;
