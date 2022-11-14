import React from "react";
import { useFetchAdministratorOperations } from "services/administrator/administrator.service.hooks";

import PaymentTable from "../PaymentTable/PaymentTable";
import Styles from "./PaymentListView.styles";
import { PaymentListViewProps as Props } from "./PaymentListView.types";

const PaymentListView: React.FC<Props> = props => {
  const { data } = useFetchAdministratorOperations(undefined, 50);
  const { data: operationsList } = data ?? {};

  console.log(operationsList);

  if (!operationsList) return null;

  return (
    <Styles className={`PaymentListView`}>
      <PaymentTable data={operationsList} />
    </Styles>
  );
};

PaymentListView.defaultProps = {};

export default PaymentListView;
