import rightArrow from "assets/images/rightArrow.svg";
import { PaymentStatus } from "types/payment.types";

import Styles from "./AdminPaymentTable.styles";
import { RowChipProps } from "./AdminPaymentTable.types";

export const Row = (props: any) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `AdminPaymentTable__container--field ${
      value ? "AdminPaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowChip = (props: RowChipProps) => {
  const { content } = props;

  const styleClass = (value: PaymentStatus) => {
    switch (value) {
      case "Pagado":
        return "AdminPaymentTable__container--chip-green";

      case "Incompleto":
        return "AdminPaymentTable__container--chip-gray";

      case "Pendiente":
        return "AdminPaymentTable__container--chip-yellow";

      case "Cancelado":
        return "AdminPaymentTable__container--chip-error";

      default:
        return "AdminPaymentTable__container--chip-green";
    }
  };

  return (
    <Styles
      className={`AdminPaymentTable__container--chip ${styleClass(content)}`}
    >
      <p className="AdminPaymentTable__text--chip">{content}</p>
    </Styles>
  );
};

export const RowButton = () => (
  <Styles
    className="AdminPaymentTable__container--button"
    data-tag="allowRowEvents"
  >
    <img
      src={rightArrow}
      className="AdminPaymentTable__container--button-icon"
      alt="Icon"
      data-tag="allowRowEvents"
    />
  </Styles>
);
