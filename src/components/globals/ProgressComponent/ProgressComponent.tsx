import { CircularProgress } from "@mui/material";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./ProgressComponent.styles";
import { ProgressComponentProps as Props } from "./ProgressComponent.types";

const ProgressComponent: React.FC<Props> = props => {
  const t = useI18n().global.progress;

  return (
    <Styles className={`ProgressComponent`}>
      <div className="ProgressComponent__container">
        <CircularProgress color="primary" />
        <p className="ProgressComponent__paragraph">{t}</p>
      </div>
    </Styles>
  );
};

ProgressComponent.defaultProps = {};

export default ProgressComponent;
