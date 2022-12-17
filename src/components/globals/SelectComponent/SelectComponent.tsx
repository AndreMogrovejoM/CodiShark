import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./SelectComponent.styles";
import { SelectComponentProps as Props } from "./SelectComponent.types";

const SelectComponent: React.FC<Props> = props => {
  const { labels, onChange } = props;

  const t = useI18n().global;

  return (
    <Styles className={`SelectComponent`}>
      <select className="SelectComponent__component" onChange={onChange}>
        <option defaultValue={""} disabled>
          {t.selectFilter}
        </option>
        {labels.map((label, index) => (
          <option className="SelectComponent__option" key={index} value={label}>
            {label}
          </option>
        ))}
      </select>
    </Styles>
  );
};

SelectComponent.defaultProps = {};

export default SelectComponent;
