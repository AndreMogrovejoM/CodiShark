import styled from "styled-components";

import { SelectComponentStyledProps as Props } from "./SelectComponent.types";

const SelectComponentStyled = styled.div<Props>`
  .SelectComponent {
    &__component {
      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      outline: none;

      border-radius: 0.8rem;
      padding: 0.4rem 0.8rem;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6rem;
      cursor: pointer;
      background-color: var(--palette-white);

      &::-ms-expand {
        display: none;
      }
    }

    &__option {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
`;

export default SelectComponentStyled;
