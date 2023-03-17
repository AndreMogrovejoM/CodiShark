import styled from "styled-components";

import { PanelBannerClientStyledProps as Props } from "./PanelBannerClient.types";

const PanelBannerClientStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--palette-deepBlue);
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .PanelBannerClient {
    &__container {
      margin-left: 2rem;

      &--image {
        display: none;

        @media screen and (min-width: 920px) {
          position: relative;
          width: 156px;
          height: inherit;
          display: block;
        }
      }
    }

    &__title {
      display: flex;
      font-size: 1.8rem !important;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 3.2rem;
      color: var(--palette-blueLightText);
      padding-top: 0.8;

      @media screen and (max-width: 1400px) {
        font-size: 1.6rem !important;
      }

      @media screen and (max-width: 1200px) {
        font-size: 1.4rem !important;
      }

      @media screen and (max-width: 1100px) {
        font-size: 1.2rem !important;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.4rem !important;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.2rem !important;
      }
    }

    &__section {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;
      font-size: 1.3rem !important;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6rem;
      gap: 0.24rem;
      color: var(--palette-white);
      padding-bottom: 0.8rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.2rem !important;
      }

      @media screen and (max-width: 1100px) {
        font-size: 1rem !important;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.4rem !important;
      }

      @media screen and (max-width: 800px) {
        font-size: 1rem !important;
      }
    }

    &__imageContainer {
      width: 32%;
      height: 100%;
      display: inline-block;
      background: -moz-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* Opera 11.10+ */
      background: -ms-linear-gradient(
        left,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* IE10+ */
      background: linear-gradient(
        to right,
        var(--palette-deepBlue) 0%,
        transparent 30%
      ); /* W3C */

      @media screen and (max-width: 1400px) {
        height: 10rem;
      }
      @media screen and (max-width: 1200px) {
        height: 10rem;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: -1;
    }
  }
`;

export default PanelBannerClientStyled;
