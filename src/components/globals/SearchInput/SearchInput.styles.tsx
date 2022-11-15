import styled from "styled-components";

import { SearchInputStyledProps as Props } from "./SearchInput.types";

const SearchInputStyled = styled.div<Props>`
  .SearchInput {
    &__container {
      background: var(--palette-greyBackgroundSearch);
      display: flex;
      align-items: center;
      padding: 0.4rem 1.2rem;
      border-radius: 0.8rem;

      &__icon {
        padding-right: 0.8rem;
        padding-left: 0.8rem;
      }
    }
    &__component {
      &--input {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.6rem;
        background: var(--palette-greyBackgroundSearch);
        border: none;
        margin-left: 0.8rem;

        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default SearchInputStyled;
