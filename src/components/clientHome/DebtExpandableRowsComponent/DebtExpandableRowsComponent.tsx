import useGlobals from "contexts/globals/globals.hooks";
import dayjs from "dayjs";
import getI18n from "i18n/i18n.helpers";
import React from "react";

import InformationClient from "../InformationClient/InformationClient";
import PaymentRejected from "../PaymentRejected/PaymentRejected";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";
import Styles from "./DebtExpandableRowsComponent.styles";
import { DebtExpandableRowsComponentProps as Props } from "./DebtExpandableRowsComponent.types";

const DebtExpandableRowsComponent: React.FC<Props> = props => {
  const { data } = props;
  const { paymentStatus, currentDebtId } = useGlobals();
  const { id } = data ?? {};

  const t = getI18n().global.table.TableDebtUser.TableRowsExpand;

  const renderContent = (
    dataStatic: string,
    dataDynamic: string | undefined
  ) => (
    <div className="DebtExpandableRowsComponent__container__expand-text">
      <div className="DebtExpandableRowsComponent__container__expand-static">
        <p className="DebtExpandableRowsComponent__container--field DebtExpandableRowsComponent__container--field-bold">
          {`${dataStatic} `}
        </p>
      </div>
      <p className="DebtExpandableRowsComponent__container--field ">
        {dataDynamic ?? "-"}
      </p>
    </div>
  );

  const renderDivider = () => (
    <div className="DebtExpandableRowsComponent__component--divider" />
  );

  return (
    <Styles className={`DebtExpandableRowsComponent`}>
      <div className="DebtExpandableRowsComponent__container__expand">
        {renderContent(t.entity, data?.banking_entity)}
        {renderDivider()}
        {renderContent(t.typeDebt, data?.product)}
        {renderDivider()}
        {renderContent(t.typeExchange, data?.currency)}
        {renderDivider()}

        {renderContent(
          t.date,
          dayjs(data?.date_last_contact).format("DD / MM / YYYY")
        )}
      </div>
      {paymentStatus === "SUCCESS" && currentDebtId.current === id && (
        <PaymentSuccess />
      )}
      {paymentStatus === "ERROR" && currentDebtId.current === id && (
        <PaymentRejected />
      )}
      {(paymentStatus === "NONE" || currentDebtId.current !== id) && (
        <InformationClient userDebt={data} />
      )}
    </Styles>
  );
};

DebtExpandableRowsComponent.defaultProps = {};

export default DebtExpandableRowsComponent;
