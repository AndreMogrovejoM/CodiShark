import Styles from "./PaymentTable.styles";
import { RowProps } from "./PaymentTable.types";

export const Row = (props: RowProps) => {
  const { content, bold = false } = props;

  const styleClass = (value: boolean) =>
    `PaymentTable__container--field ${
      value ? "PaymentTable__container--field-bold" : ""
    }`;

  return <Styles className={styleClass(bold)}>{content}</Styles>;
};
