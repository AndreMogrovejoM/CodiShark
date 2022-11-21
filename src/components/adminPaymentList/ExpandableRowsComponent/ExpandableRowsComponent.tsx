import getI18n from "i18n/i18n.helpers";
import React from "react";

import Styles from "./ExpandableRowsComponent.styles";
import { ExpandableRowsComponentProps as Props } from "./ExpandableRowsComponent.types";

// TODO: Pending data response from backend
const ExpandableRowsComponent: React.FC<Props> = props => {
  const t = getI18n().global.table.TablePaymentAdmin.TableRowsExpand;

  const renderContent = (dataStatic: string, dataDynamic: string) => (
    <div className="ExpandableRowsComponent__container__expand-text">
      <div className="ExpandableRowsComponent__container__expand-static">
        <p className="ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold">
          {`${dataStatic} `}
        </p>
      </div>
      <p className="ExpandableRowsComponent__container--field ">
        {dataDynamic}
      </p>
    </div>
  );

  return (
    <Styles className={`ExpandableRowsComponent`}>
      <div className="ExpandableRowsComponent__container__expand">
        {/* TODO: Pending data response from backend */}
        {renderContent(t.entity, "Banco BCP")}
        {renderContent(t.typeDebt, "Préstmo personal")}
        {renderContent(t.typeExchange, "Sol peruano")}
        {renderContent(t.date, "27-03-2022")}
      </div>
    </Styles>
  );
};

ExpandableRowsComponent.defaultProps = {};

export default ExpandableRowsComponent;
