import styled from "styled-components";

import { PanelBannerClientStyledProps as Props } from "./PanelBannerClient.types";

const PanelBannerClientStyled = styled.div<Props>`
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

  .PanelBannerClient {
    &__title {
      display: flex;
      margin-left: 20rem;
      font-size: 22px;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.7rem;
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
      left: 2.4rem;
      width: 17rem;

      @media screen and (max-width: 280px) {
        position: absolute;
        top: 1rem;
        right: 0.4rem;
        width: 10.4rem;
      }
    }
  }
`;

export default PanelBannerClientStyled;
