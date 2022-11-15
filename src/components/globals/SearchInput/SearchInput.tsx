import SearchIcon from "@mui/icons-material/Search";
import React from "react";

import Styles from "./SearchInput.styles";
import { SearchInputProps as Props } from "./SearchInput.types";

const SearchInput: React.FC<Props> = props => {
  return (
    <Styles className={`SearchInput `}>
      <div className="SearchInput__container">
        <SearchIcon />
        <input
          className="SearchInput__component--input"
          type="text"
          /* TODO: Diccionarios */
          placeholder="Search"
        />
      </div>
    </Styles>
  );
};

SearchInput.defaultProps = {};

export default SearchInput;
