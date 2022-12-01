import styled from "styled-components";

import { PanelBannerClientStyledProps as Props } from "./PanelBannerClient.types";

const PanelBannerClientStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-primary);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  position: relative;
  margin: 0 auto;

  .PanelBannerClient {
    &__title {
      display: flex;
      margin-left: 20rem;
      font-size: 22px;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      margin-left: 20rem;
      font-size: 22px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image {
      position: absolute;
      top: -3rem;
      left: 2rem;
      width: 20rem;

      @media screen and (min-width: 960px) {
        position: absolute;
        top: -3rem;
        left: 2.4rem;
        width: 16rem;
      }
    }
  }
`;

export default PanelBannerClientStyled;
