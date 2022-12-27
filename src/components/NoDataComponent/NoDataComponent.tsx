import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./NoDataComponent.styles";
import { NoDataComponentProps as Props } from "./NoDataComponent.types";

const NoDataComponent: React.FC<Props> = props => {
  const t = useI18n().global.table.TableEmpty;

  return (
    <Styles className={`NoDataComponent`}>
      <div className="NoDataComponent__component">
        <h1 className="NoDataComponent__title">{t.title}</h1>
      </div>
    </Styles>
  );
};

NoDataComponent.defaultProps = {};

export default NoDataComponent;
