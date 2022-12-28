import { render } from "setupTests";

import CardDebts from "./CardDebts";

const data = {
  id: 37,
  user_id: 6,
  cu: "0012185431",
  cj: "0046946843",
  banking_entity: "",
  product: "06 CRED EFECTIVO",
  situation: "CASTIGO",
  currency: "PEN",
  capital_debt: 9745.32,
  interests: 4314.38,
  bills: 289.86,
  total_debt: 14349.56,
  exchange_type: 3.844,
  amount_cancellation: 4872.66,
  amount_dscto_cancellation: 4872.66,
  pct_dscto_cancellation: 0.5,
  date_last_contact: "2022-08-31",
  limit_date: "2022-12-29",
  debt_status: "Incompleto"
};

describe("CardDebts", () => {
  it("renders with default props", () => {
    render(<CardDebts data={data} />);
  });
});
