import CONSTANTS from "config/constants";
import styled from "styled-components";

import { SignInStyledProps as Props } from "./SignIn.types";

const { BREAKPOINTS } = CONSTANTS;

const SignInStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;

  .SignIn {
    &__renderList {
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        display: block;
        margin-left: 4rem;
        position: absolute;
        top: calc(48% - 3.2rem);
        color: var(--palette-white);
      }

      &--ul {
        margin: 1.6rem 2.4rem;
      }

      &--h1 {
        color: inherit;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 3.2rem;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          font-size: 3.2rem;
          line-height: 4rem;
        }
      }

      &--h2 {
        color: inherit;
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.4rem;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          font-size: 2.4rem;
          line-height: 3.2rem;
        }
      }
    }

    &__component {
      &--copyright {
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;
      }

      &--form {
        display: flex;
        flex-direction: inherit;
        width: 100vw;
        gap: 3rem;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          gap: 5.6rem;
          width: 90vw;
        }

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          width: 32rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          width: 38rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.wide}px) {
          width: 48rem;
        }

        &-content {
          display: flex;
          justify-content: center;
          width: inherit;
          padding-bottom: 5.6rem;

          @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
            justify-content: none;
            padding-bottom: 0;
          }

          & > * {
            width: ${props =>
              props.signInStep === undefined || props.signInStep === 0
                ? "80vw"
                : "90vw"};

            @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
              width: auto;
            }
          }
        }

        &-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.6rem;

          @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
            gap: 0;
          }
        }

        &-logo {
          width: 18rem;
          margin-top: 4rem;
          @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
            display: none;
          }
        }
      }

      &--swipper {
        width: 96vw;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          display: none;
        }

        &-image {
          width: 30rem;
          height: 18rem;
          border-radius: 1.6rem;
          object-fit: cover;
          object-position: center;
        }
      }

      &--logo {
        display: none;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          display: block;
          width: 32rem;
        }
      }

      &--image {
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        height: inherit;
        width: 60vw;
        height: 100%;
      }
    }

    &__container {
      &--components {
        display: flex;
        align-items: center;
        height: 100vh;
      }

      &--content {
        margin-bottom: 5.6rem;
      }

      &--content > * {
        margin-bottom: 0.8rem;
      }

      &--copyright {
        position: fixed;
        bottom: 0;
        padding: 0;
        padding: 1.6rem 0;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        background-color: var(--palette-blue);
        color: var(--palette-white);

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          padding-bottom: 1.6rem;
          background-color: inherit;
          color: var(--palette-darkText);
        }
      }

      &--form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        width: 100vw;
        height: 100vh;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          justify-content: center;
        }

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          width: 50vw;
        }
      }

      &--image {
        display: none;

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          display: block;
          height: 100%;
        }
      }

      &--separate {
        margin-top: 1.6rem;
      }
    }

    &__title {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 700;
    }

    &__subtitle {
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-weight: 400;
      text-align: center;
    }
  }
`;

export default SignInStyled;
