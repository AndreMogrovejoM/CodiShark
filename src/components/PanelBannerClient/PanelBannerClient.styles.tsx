import styled from "styled-components";

import { PanelBannerClientStyledProps as Props } from "./PanelBannerClient.types";

const PanelBannerClientStyled = styled.div<Props>`
  .PanelBannerClient {
    &__container {
      &--image {
        display: none;
        @media screen and (min-width: 920px) {
          position: relative;
          width: 156px;
          height: inherit;
          display: block;
        }
      }

      &--component {
        width: 100%;
        display: flex;
        align-items: flex-start;
        background-color: var(--palette-primary);
        border-radius: 0.8rem;
        padding: 1.2rem 2.4rem;
      }
    }

    &__title {
      display: flex;
      font-size: 22px;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      font-size: 22px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image {
      position: absolute;
      top: -3rem;

      @media screen and (min-width: 960px) {
        position: absolute;
        top: -3rem;
      }
    }
  }
`;

export default PanelBannerClientStyled;
