import styled from "styled-components";

import { PanelBannerStyledProps as Props } from "./PanelBanner.types";

const PanelBannerStyled = styled.div<Props>`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-primary);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  position: relative;
  margin: 0 auto;

  .PanelBanner {
    &__title {
      color: var(--palette-white);
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-bottom: 0.2rem;
    }

    &__subtitle {
      color: var(--palette-white);
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.2rem;
    }

    &__textContent {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 24%;
      margin-top: 1.2rem;
    }

    &__image {
      position: absolute;
      top: 0;
      right: 2.4rem;
      width: 12.4rem;

      @media screen and (max-width: 280px) {
        position: absolute;
        top: 1rem;
        right: 0.4rem;
        width: 10.4rem;
      }
    }
  }
`;

export default PanelBannerStyled;
