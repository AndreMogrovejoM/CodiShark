import getI18n from "i18n/i18n.helpers";
import React from "react";

import { getCurrency } from "./ExpandableRowsComponent.helper";
import Styles from "./ExpandableRowsComponent.styles";
import { ExpandableRowsComponentProps as Props } from "./ExpandableRowsComponent.types";

const ExpandableRowsComponent: React.FC<Props> = props => {
  const { data } = props;
  const { debt } = data ?? {};

  const t = getI18n().global.table.TablePaymentAdmin.TableRowsExpand;

  const renderContent = (
    dataStatic: string,
    dataDynamic: string | undefined
  ) => (
    <div className="ExpandableRowsComponent__container__expand-text">
      <div className="ExpandableRowsComponent__container__expand-static">
        <p className="ExpandableRowsComponent__container--field ExpandableRowsComponent__container--field-bold">
          {`${dataStatic} `}
        </p>
      </div>
      <p className="ExpandableRowsComponent__container--field ">
        {dataDynamic ?? "-"}
      </p>
    </div>
  );

  return (
    <Styles className={`ExpandableRowsComponent`}>
      <div className="ExpandableRowsComponent__container__expand">
        {renderContent(t.entity, debt?.banking_entity)}
        {renderContent(t.typeDebt, "Préstamo personal")}
        {renderContent(t.typeExchange, getCurrency(debt?.currency))}
        {renderContent(t.date, "27-03-2022")}
      </div>
    </Styles>
  );
};

ExpandableRowsComponent.defaultProps = {};

export default ExpandableRowsComponent;
