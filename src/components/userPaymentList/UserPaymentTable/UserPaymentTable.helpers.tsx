import { PaymentStatus } from "types/payment.types";

import Styles from "./UserPaymentTable.styles";
import { RowChipProps, RowProps } from "./UserPaymentTable.types";

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    ` UserPaymentTable__container--field ${
      value ? " UserPaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};

export const RowChip = (props: RowChipProps) => {
  const { content } = props;

  const styleClass = (value: PaymentStatus) => {
    switch (value) {
      case "Pagado":
        return " UserPaymentTable__container--chip-green";

      case "Incompleto":
        return " UserPaymentTable__container--chip-gray";

      case "Pendiente":
        return " UserPaymentTable__container--chip-yellow";

      case "Cancelado":
        return " UserPaymentTable__container--chip-error";

      default:
        return " UserPaymentTable__container--chip-green";
    }
  };

  return (
    <Styles
      className={` UserPaymentTable__container--chip ${styleClass(content)}`}
    >
      <p className=" UserPaymentTable__text--chip">{content}</p>
    </Styles>
  );
};
