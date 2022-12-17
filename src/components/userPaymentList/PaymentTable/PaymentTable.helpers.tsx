import { PaymentStatus } from "types/payment.types";

import Styles from "./PaymentTable.styles";
import { RowChipProps, RowProps } from "./PaymentTable.types";

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--field ${
      value ? "PaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowChip = (props: RowChipProps) => {
  const { content } = props;

  const styleClass = (value: PaymentStatus) => {
    switch (value) {
      case "Pagado":
        return "PaymentTable__container--chip-green";

      case "Incompleto":
        return "PaymentTable__container--chip-gray";

      case "Pendiente":
        return "PaymentTable__container--chip-yellow";

      case "Cancelado":
        return "PaymentTable__container--chip-error";

      default:
        return "PaymentTable__container--chip-green";
    }
  };

  return (
    <Styles className={`PaymentTable__container--chip ${styleClass(content)}`}>
      <p className="PaymentTable__text--chip">{content}</p>
    </Styles>
  );
};
