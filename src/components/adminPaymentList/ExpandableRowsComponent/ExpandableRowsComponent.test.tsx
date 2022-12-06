import { render } from "setupTests";

import ExpandableRowsComponent from "./ExpandableRowsComponent";
const data = {
  id: 2,
  user_id: 6,
  debt_id: 3,
  operation_number: null,
  operation_date: "2022-11-12",
  operation_time: "18:02:00",
  amount_paid: 2000,
  payment_method: "Tarjeta de crédito",
  payment_status: "Pendiente",
  created_at: null,
  updated_at: null,
  debt: {
    id: 3,
    user_id: 6,
    cu: "00000003",
    cj: "00000003",
    banking_entity: null,
    product: "06 CRED EFECTIVO",
    situation: "CASTIGO",
    currency: "PEN",
    capital_debt: 7000,
    interests: 322,
    bills: 322,
    total_debt: 322,
    exchange_type: 322,
    amount_cancellation: 322,
    amount_dscto_cancellation: 322,
    pct_dscto_cancellation: 0,
    date_last_contact: "2022-11-03",
    limit_date: "2022-12-08",
    debt_status: "Pendiente"
  }
};

describe("ExpandableRowsComponent", () => {
  it("renders with default props", () => {
    /* @ts-ignore */
    render(<ExpandableRowsComponent data={data} />);
  });
});
