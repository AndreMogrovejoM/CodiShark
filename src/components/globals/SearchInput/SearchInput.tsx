import SearchIcon from "@mui/icons-material/Search";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./SearchInput.styles";
import { SearchInputProps as Props } from "./SearchInput.types";

const SearchInput: React.FC<Props> = props => {
  const { onChange } = props;
  const t = useI18n().global;

  return (
    <Styles className={`SearchInput `}>
      <div className="SearchInput__container">
        <SearchIcon />
        <input
          className="SearchInput__component--input"
          type="text"
          placeholder={t.inputSearch}
          onChange={onChange}
        />
      </div>
    </Styles>
  );
};

SearchInput.defaultProps = {};

export default SearchInput;
