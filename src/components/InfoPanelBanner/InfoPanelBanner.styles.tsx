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
      line-height: 1.6rem;

      @media screen and (max-width: 414px) {
        display: flex;
        font-weight: 600;
        font-size: 0.6rem;
        line-height: 1.6rem;
      }

      @media screen and (max-width: 375px) {
        display: flex;
        font-weight: 600;
        font-size: 0.6rem;
        line-height: 1.6rem;
      }

      @media screen and (max-width: 360px) {
        display: flex;
        font-weight: 600;
        font-size: 0.58rem;
        line-height: 1.6rem;
      }

      @media screen and (max-width: 280px) {
        display: flex;
        font-weight: 600;
        font-size: 0.48rem;
        line-height: 1rem;
      }
    }
  }
`;

export default InfoPanelBannerStyled;
