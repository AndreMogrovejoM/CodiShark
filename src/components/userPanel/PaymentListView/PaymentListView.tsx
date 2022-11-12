import React from "react";

import PaymentTable from "../PaymentTable/PaymentTable";
import { data } from "./PaymentListView.helpers";
import Styles from "./PaymentListView.styles";
import { PaymentListViewProps as Props } from "./PaymentListView.types";

const PaymentListView: React.FC<Props> = props => {
  return (
    <Styles className={`PaymentListView`}>
      <PaymentTable data={data} />
    </Styles>
  );
};

PaymentListView.defaultProps = {};

export default PaymentListView;
